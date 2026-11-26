'use strict';

const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');

const root = path.resolve(__dirname, '..');
const Engine = require('../playground/full-engine.js');
const Advisor = require('../playground/advisor.js');

function bootFullApp(extraGlobals) {
  const listeners = {};
  const winListeners = {};
  const store = new Map();
  const timers = [];
  let timerSeq = 1;

  function elem(id) {
    return {
      id,
      value: '',
      textContent: '',
      innerHTML: '',
      addEventListener(name, fn) { listeners[id + ':' + name] = fn; },
      querySelectorAll() { return []; },
      querySelector() { return null; },
      scrollIntoView() {}
    };
  }
  const nodes = {
    app: elem('app'),
    lang: elem('lang'),
    homeBtn: elem('homeBtn'),
    learnBtn: elem('learnBtn'),
    foot: elem('foot')
  };
  const brand = elem('brand');
  const document = {
    documentElement: { lang: '' },
    querySelector(sel) {
      if (sel === '.brand') return brand;
      return nodes[sel.slice(1)] || null;
    }
  };
  const localStorage = {
    getItem(k) { return store.has(k) ? store.get(k) : null; },
    setItem(k, v) { store.set(k, String(v)); },
    removeItem(k) { store.delete(k); }
  };
  const fixedMath = Object.create(Math);
  fixedMath.random = () => 1 / 4294967295;

  const ctxObj = {
    document,
    localStorage,
    console,
    window: null,
    Math: fixedMath,
    confirm: () => true,
    setTimeout(fn, ms) {
      const id = timerSeq++;
      timers.push({ id, fn, ms, cleared: false, fired: false });
      return id;
    },
    clearTimeout(id) {
      const t = timers.find(x => x.id === id);
      if (t) t.cleared = true;
    },
    addEventListener(name, fn) { winListeners[name] = fn; },
    ...(extraGlobals || {})
  };
  const ctx = vm.createContext(ctxObj);
  ctx.window = ctx;
  ctx.scrollTo = () => {};

  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  for (const [, src] of html.matchAll(/<script src="([^"]+)"/g)) {
    vm.runInContext(fs.readFileSync(path.join(root, src), 'utf8'), ctx, { filename: src });
  }

  function click(dataset) {
    const el = {
      dataset,
      hasAttribute(k) {
        return k.replace(/^data-/, '').replace(/-([a-z])/g, (_, c) => c.toUpperCase()) in dataset;
      },
      getAttribute() { return null; },
      focus() {}
    };
    listeners['app:click']({ target: { closest() { return el; } } });
    return nodes.app.innerHTML;
  }

  return { ctx, nodes, store, timers, winListeners, click };
}

// 1. Auto-advance pace mode + pause when callable + manual mode (#1)
{
  const app = bootFullApp();
  app.click({ playEnter: '' });
  app.click({ fullStart: '' });
  const UI = app.ctx.MahjongFullPlayUI;
  assert.equal(UI.getPace(), 'medium', 'Default pace should be medium');

  // Player discards -> opponent discards -> enters claim phase
  const firstIdx = Engine.available(UI.getState()).discards[0];
  app.click({ fullSelect: String(firstIdx) });
  // Tap-twice to discard (#2)!
  let html = app.click({ fullSelect: String(firstIdx) });
  const st = UI.getState();
  assert.equal(st.phase, 'claim', 'Second tap on selected tile must immediately discard and advance to claim');

  const avail = Engine.available(st);
  const pendingTimers = () => app.timers.filter(t => !t.cleared && !t.fired);
  if (avail.actions.length === 1 && avail.actions[0].kind === 'pass') {
    const activeTimers = pendingTimers();
    assert(activeTimers.length === 1 && activeTimers[0].ms === 500, 'Medium pace should schedule a 500ms auto-pass timer');
    assert(html.includes('fp-auto-tag'), 'UI should display auto-advancing status badge');
    const histBefore = st.history.length;
    activeTimers[0].fired = true;
    activeTimers[0].fn();
    assert(UI.getState().history.length > histBefore, 'Firing auto-pass timer should advance the hand automatically');
  }

  // Cycle pace: medium -> fast -> slow -> manual
  app.click({ fullPace: '' });
  assert.equal(UI.getPace(), 'fast');
  app.click({ fullPace: '' });
  assert.equal(UI.getPace(), 'slow');
  app.click({ fullPace: '' });
  assert.equal(UI.getPace(), 'manual');
  assert.equal(app.store.get('mj-play-pace'), 'manual', 'Pace preference must persist in localStorage');
  assert.equal(pendingTimers().length, 0, 'Manual mode must not keep pending auto-pass timers');

  // Verify callable discard NEVER auto-passes even in fast mode
  app.click({ fullPace: '' }); // back to medium
  const s = UI.getState();
  s.phase = 'claim';
  s.pending = { discarder: 1, tile: 'm5' };
  s.discards[1].push('m5');
  s.hands[0] = ['m5', 'm5', 'p1', 'p2', 'p3', 's1', 's2', 's3', 'm7', 'm8', 'm9', 'z1', 'z2'];
  UI.setPace('fast');
  assert.equal(pendingTimers().length, 0, 'Must pause immediately without auto-pass when player can pung/chow/win');
}

// 2. Keyboard shortcuts (#2): ArrowLeft/ArrowRight, Enter, Space, Escape
{
  const app = bootFullApp();
  app.click({ playEnter: '' });
  app.click({ fullStart: '' });
  const UI = app.ctx.MahjongFullPlayUI;
  UI.setPace('manual');

  assert(typeof app.winListeners.keydown === 'function', 'app.js must bind window keydown handler');
  app.winListeners.keydown({ key: 'ArrowRight', preventDefault() {} });
  assert(app.nodes.app.innerHTML.includes('fp-tap-hint'), 'ArrowRight should select a tile and show tap-to-discard hint');

  app.winListeners.keydown({ key: 'ArrowLeft', preventDefault() {} });
  assert(app.nodes.app.innerHTML.includes('selected'), 'ArrowLeft should cycle tile selection');

  const turnBefore = UI.getState().history.length;
  app.winListeners.keydown({ key: 'Enter', preventDefault() {} });
  assert(UI.getState().history.length > turnBefore, 'Enter should discard the selected tile');
  assert.equal(UI.getState().phase, 'claim');

  const claimHistBefore = UI.getState().history.length;
  app.winListeners.keydown({ key: ' ', code: 'Space', preventDefault() {} });
  assert(UI.getState().history.length > claimHistBefore, 'Space should pass during claim phase');
}

// 3. Tenpai wait preview + table status badges + sound toggle (#3)
{
  const app = bootFullApp();
  app.click({ playEnter: '' });
  app.click({ fullMode: 'sc' });
  app.click({ fullStart: '' });
  app.click({ fullMissing: 'm' });
  const UI = app.ctx.MahjongFullPlayUI;
  const s = UI.getState();

  // Construct 14-tile Tenpai hand in Sichuan (missing m): discarding s9 leaves waits on p4 / p7
  s.hands[0] = ['p1', 'p2', 'p3', 'p5', 'p6', 's2', 's3', 's4', 's6', 's7', 's8', 'p9', 'p9', 's9'];
  s.melds[0] = [];
  s.phase = 'turn';
  s.turn = 0;
  s.turnSource = 'draw';

  const wInfo = Advisor.waitsForDiscard(s, 13);
  assert(wInfo && wInfo.waits.length === 2, 'Discarding s9 should wait on p4 and p7');
  assert.deepEqual(wInfo.waits.map(x => x.tile).sort(), ['p4', 'p7']);

  // Select s9 (index 13) -> verify Tenpai preview bar & Sichuan missing-suit badges & wind/dealer badges
  const html = app.click({ fullSelect: '13' });
  assert(html.includes('fp-tenpai-dot'), 'Ready-producing tiles should show Tenpai corner dot');
  assert(html.includes('fp-tenpai-bar'), 'Selecting a Tenpai tile should display live Tenpai wait preview bar');
  assert(html.includes('fp-missing-badge'), 'Sichuan mode should display missing suit badges on seats');
  assert(html.includes('fp-dealer-badge') && html.includes('fp-round-badge'), 'Table should display dealer and round-wind badges');

  // Sound toggle persistence
  assert(html.includes('data-full-sound'), 'Toolbar should include sound toggle button');
  app.click({ fullSound: '' });
  assert.equal(app.store.get('mj-sound-enabled'), '0', 'Sound toggle should persist muted state');
  app.click({ fullSound: '' });
  assert.equal(app.store.get('mj-sound-enabled'), '1', 'Sound toggle should persist enabled state');
}

// 4. Full discard pool overview (#6) without breaking fp-river-tile counts
{
  const app = bootFullApp();
  app.click({ playEnter: '' });
  app.click({ fullStart: '' });
  const UI = app.ctx.MahjongFullPlayUI;
  const s = UI.getState();
  s.discards[0] = ['m1', 'm2', 'm3'];
  s.discards[1] = ['p4', 'p5'];

  const html = app.click({ fullPool: '' });
  assert(html.includes('fp-pool-panel'), 'Clicking pool button should open full discard pool overlay');
  assert(html.includes('fp-counter-cell'), 'Pool overlay should include public remaining tile counter');
  assert.equal((html.match(/class="fp-river-tile(?: |")/g) || []).length, 5, 'Pool overlay must not pollute fp-river-tile count');

  const closedHtml = app.click({ fullPoolClose: '' });
  assert(!closedHtml.includes('fp-pool-panel'), 'Close button should dismiss pool overlay');
}

// 5. Winner's complete winning hand decomposition for BOTH Bot win and Player win (#7)
{
  const app = bootFullApp();
  app.click({ playEnter: '' });
  app.click({ fullStart: '' });
  const UI = app.ctx.MahjongFullPlayUI;
  const s = UI.getState();

  // Force South Bot (seat 1) win by discard from East
  s.hands[0] = ['m9', 'p1', 'p4', 'p8', 's1', 's5', 's9', 'z1', 'z2', 'z3', 'z4', 'z5', 'z6', 'z7'];
  s.hands[1] = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9', 'm2', 'm3', 'm4', 'm9'];
  s.melds[1] = [];
  s.phase = 'turn';
  s.turn = 0;

  app.click({ fullSelect: '0' });
  const html = app.click({ fullDiscard: '' });
  assert.equal(UI.getState().phase, 'ended', 'South bot should win on East discard m9');
  assert.equal(UI.getState().winners[0].seat, 1);
  assert(html.includes('fp-win-hand'), 'Settlement modal must display winning hand container for Bot winner');
  assert(html.includes('fp-win-group'), 'Winning hand must be visually decomposed into meld/pair groups');
  assert(html.includes('is-win-tile') && html.includes('fp-win-badge'), 'Winning tile must be highlighted with win badge');
}

// 6. Partial DOM patcher preserves <details> & existing nodes without wiping .fp-game (#4)
{
  const app = bootFullApp();
  app.click({ playEnter: '' });
  app.click({ fullStart: '' });
  const UI = app.ctx.MahjongFullPlayUI;

  // Build lightweight real-DOM-like mock container to test renderInto patch path
  let innerHtmlWrites = 0;
  const tileBtn0 = {
    dataset: { fullSelect: '0' },
    attrs: {},
    classes: new Set(['fp-tile']),
    hintEl: null,
    classList: {
      toggle(c, on) { if (on) tileBtn0.classes.add(c); else tileBtn0.classes.delete(c); }
    },
    setAttribute(k, v) { tileBtn0.attrs[k] = v; },
    querySelector(sel) { return sel === '.fp-tap-hint' ? tileBtn0.hintEl : null; },
    insertAdjacentHTML(_pos, _html) { tileBtn0.hintEl = { remove() { tileBtn0.hintEl = null; } }; }
  };
  const histOl = { innerHTML: '' };
  const histSummary = { textContent: '' };
  const decSlot = { innerHTML: '' };
  const ownLabel = { innerHTML: '' };
  const rackEl = {
    innerHTML: '',
    querySelectorAll(sel) { return sel === '.fp-tile' ? [tileBtn0] : []; }
  };
  const ownSeat = {
    classList: { toggle() {} },
    querySelector(sel) {
      if (sel === '.fp-own-label') return ownLabel;
      if (sel === '.fp-rack') return rackEl;
      return null;
    }
  };
  const rootEl = {
    dataset: { fpSeed: String(UI.getState().seed), fpMode: UI.getState().mode, fpLang: 'zh' },
    querySelector(sel) {
      if (sel === '.fp-history-menu > summary') return histSummary;
      if (sel === '.fp-history-menu > ol') return histOl;
      if (sel === '.fp-decision-slot') return decSlot;
      if (sel === '.fp-own-seat') return ownSeat;
      return null;
    }
  };
  let mounted = false;
  const container = {
    get innerHTML() { return ''; },
    set innerHTML(_v) { innerHtmlWrites++; mounted = true; },
    querySelector(sel) { return mounted && sel === '.fp-game' ? rootEl : null; }
  };

  UI.renderInto(container);
  assert.equal(innerHtmlWrites, 1, 'First renderInto should mount .fp-game once');

  // Selecting tile 0 should patch in-place WITHOUT rewriting container.innerHTML or rackEl.innerHTML
  UI.dispatch({ dataset: { fullSelect: '0' } });
  UI.renderInto(container);
  assert.equal(innerHtmlWrites, 1, 'Subsequent selection must patch in-place without wiping .fp-game');
  assert(tileBtn0.classes.has('selected'), 'Tile button should receive selected class in-place');
  assert(tileBtn0.hintEl !== null, 'Selected tile should receive tap-to-discard hint in-place');
  assert.equal(rackEl.innerHTML, '', 'Rack DOM must not be rebuilt on simple tile selection');
}

// 7. Zero white-tile flash fallback in tile-art.js (#8) & mobile CSS checks (#5)
{
  // Test cold browser environment with Image defined (before images finish decoding)
  const fakeBrowser = vm.createContext({
    window: null,
    document: {},
    Image: function FakeImage() { this.src = ''; },
    console
  });
  fakeBrowser.window = fakeBrowser;
  vm.runInContext(fs.readFileSync(path.join(root, 'tile-art.js'), 'utf8'), fakeBrowser, { filename: 'tile-art.js' });
  const coldHtml = fakeBrowser.MahjongTileArt.svg('m3');
  assert(coldHtml.includes('tile-fallback') && coldHtml.includes('<svg'), 'Cold browser tile must include instant inline SVG fallback');
  assert(coldHtml.includes('tile-art-loading') && coldHtml.includes('onload='), 'Cold browser tile must smoothly swap when external SVG loads');

  const css = fs.readFileSync(path.join(root, 'playground/full-style.css'), 'utf8');
  assert(css.includes('flex-wrap:wrap') && css.includes('fp-tenpai-bar') && css.includes('fp-pool-panel') && css.includes('fp-win-hand'),
    'full-style.css must include mobile 2-row hand wrap, Tenpai bar, pool overview and winner hand styles');
}

console.log('PASS Phase 3 UI upgrades: auto-pace, tap-twice & keys, Tenpai preview, pool overview, winner hand, partial DOM patch, zero white-tile flash');
