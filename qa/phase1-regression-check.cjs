'use strict';

const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');

const root = path.resolve(__dirname, '..');
const Deck = require('../playground/deck.js');
const Engine = require('../playground/full-engine.js');
const Judges = require('../playground/judges.js');
const Advisor = require('../playground/advisor.js');

function bootApp(initialLang) {
  const listeners = {};
  const store = new Map();
  if (initialLang) store.set('mj-language', initialLang);
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
  const ctx = vm.createContext({
    document,
    localStorage,
    console,
    window: null,
    Math,
    confirm: () => true
  });
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
  return { ctx, nodes, listeners, click, brand };
}

// 1. Language reload persistence for Full Table Playground (app.js init bug)
{
  const enApp = bootApp('en');
  const view = enApp.click({ playEnter: '' });
  assert(view.includes('Full Table Playground'), 'Full Table UI must inherit persisted English language on init');
  assert(!view.includes('完整牌桌操练'), 'Full Table UI must not fall back to Simplified Chinese');

  const twApp = bootApp('tw');
  const twView = twApp.click({ playEnter: '' });
  assert(twView.includes('完整牌桌操練'), 'Full Table UI must inherit persisted Traditional Chinese on init');

  // Brand link click returns home
  let prevented = false;
  assert(typeof twApp.listeners['brand:click'] === 'function', 'Brand link should bind click handler to go home');
  twApp.listeners['brand:click']({ preventDefault() { prevented = true; } });
  assert(prevented, 'Brand click should prevent default jump');
  assert(twApp.nodes.app.innerHTML.includes('data-play-enter'), 'Brand click should navigate back to home');
}

// 2. HK Claim priority: Bot Pung must outrank Player Chow
{
  const s = Engine.start('hk', 1, {});
  s.phase = 'claim';
  s.turn = 3;
  // North (3) discarded m3; East (0) is next and can chow m1+m2; South (1) has m3,m3 and can pung
  s.hands[0] = ['m1', 'm2', 'p2', 'p3', 'p4', 's2', 's3', 's4', 'p7', 'p8', 'p9', 'z1', 'z1'];
  s.hands[1] = ['m3', 'm3', 'p1', 'p2', 'p3', 's1', 's2', 's3', 'm7', 'm8', 'm9', 'z2', 'z2'];
  s.hands[2] = ['p5', 'p6', 'p7', 's5', 's6', 's7', 'm4', 'm5', 'm6', 'z3', 'z3', 'z4', 'z7'];
  s.hands[3] = ['p1', 'p4', 'p8', 's1', 's4', 's8', 'm4', 'm8', 'm9', 'z4', 'z5', 'z6', 'z7'];
  s.discards[3] = ['m3'];
  s.pending = { discarder: 3, tile: 'm3' };
  const avail = Engine.available(s);
  assert(!avail.actions.some(a => a.kind === 'chow'), 'Player chow must not be offered when another seat can pung');
  const bad = Engine.act(s, { type: 'claim', id: 'chow:m1,m2' });
  assert.equal(bad.accepted, false, 'Player chow must be rejected when another seat can pung');
}

// 3. HK Turn-order Hu priority (截胡): closer seat in turn order wins
{
  const s = Engine.start('hk', 2, {});
  s.phase = 'claim';
  s.turn = 2;
  // West (2) discards p5. Both North (3, distance 1) and South (1, distance 3) can win with Full Flush (7 fan).
  s.hands[0] = ['m1', 'm3', 'm7', 'p2', 'p8', 's1', 's4', 's9', 'z1', 'z2', 'z3', 'z4', 'z7'];
  s.hands[1] = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p2', 'p3', 'p4', 'p5'];
  s.hands[2] = ['m2', 'm4', 'm6', 's2', 's3', 's6', 's8', 'z1', 'z2', 'z3', 'z4', 'z6', 'z7'];
  s.hands[3] = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p6', 'p7', 'p8', 'p5'];
  s.discards[2] = ['p5'];
  s.pending = { discarder: 2, tile: 'p5' };
  const res = Engine.act(s, { type: 'claim', id: 'pass' });
  assert(res.accepted);
  assert.equal(res.state.phase, 'ended');
  assert.equal(res.state.winners[0].seat, 3, 'North (distance 1 from West) must outrank South (distance 3)');
}

// 4. HK Turn-order Hu priority: Bot closer to discarder outranks Player
{
  const s = Engine.start('hk', 3, {});
  s.phase = 'claim';
  s.turn = 1;
  // South (1) discards m5. West (2, distance 1) and Player East (0, distance 3) can both win with Full Flush.
  s.hands[0] = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9', 'm2', 'm3', 'm4', 'm5'];
  s.hands[1] = ['p1', 'p3', 'p7', 's1', 's4', 's9', 'z1', 'z2', 'z3', 'z4', 'z5', 'z6', 'z7'];
  s.hands[2] = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9', 'm6', 'm7', 'm8', 'm5'];
  s.hands[3] = ['p2', 'p4', 'p8', 's2', 's5', 's8', 'z1', 'z2', 'z3', 'z4', 'z5', 'z6', 'z7'];
  s.discards[1] = ['m5'];
  s.pending = { discarder: 1, tile: 'm5' };
  const avail = Engine.available(s);
  assert(!avail.actions.some(a => a.kind === 'win'), 'Player (distance 3) must not outrank West (distance 1) on South discard');
  const res = Engine.act(s, { type: 'claim', id: 'pass' });
  assert(res.accepted);
  assert.equal(res.state.winners[0].seat, 2, 'West must win via turn-order priority');
}

// 5. HK Concealed Kong preserves concealed hand (门清) fan
{
  const hand = ['m2', 'm3', 'm4', 'p2', 'p3', 'p4', 's2', 's3', 's4', 'z5', 'z5'];
  const concealedKong = [{ type: 'kong', tiles: ['m1', 'm1', 'm1', 'm1'], concealed: true }];
  const exposedKong = [{ type: 'kong', tiles: ['m1', 'm1', 'm1', 'm1'], concealed: false }];
  const resConcealed = Judges.hkScore(hand, concealedKong, 0, 'selfDraw', 'z1');
  const resExposed = Judges.hkScore(hand, exposedKong, 0, 'selfDraw', 'z1');
  assert(resConcealed && resConcealed.breakdown.some(x => x.id === 'concealed'), 'Concealed kong must preserve concealed (门清) fan');
  assert(resExposed && !resExposed.breakdown.some(x => x.id === 'concealed'), 'Exposed kong must not get concealed (门清) fan');
}

// 6. Flower localization & Traditional Chinese copy + Advisor publicSeen accuracy
{
  const enApp = bootApp('en');
  enApp.click({ playEnter: '' });
  enApp.click({ fullMode: 'mcr' });
  enApp.click({ fullStart: '' });
  const st = enApp.ctx.MahjongFullPlayUI.getState();
  st.flowers[0] = ['f1', 'f6'];
  enApp.ctx.MahjongFullPlayUI.setLang('en');
  const enHtml = enApp.ctx.MahjongFullPlayUI.html();
  assert(enHtml.includes('aria-label="Spring"'), 'English flower f1 should render as Spring');
  assert(enHtml.includes('aria-label="Orchid"'), 'English flower f6 should render as Orchid');

  enApp.ctx.MahjongFullPlayUI.setLang('tw');
  const twHtml = enApp.ctx.MahjongFullPlayUI.html();
  assert(twHtml.includes('aria-label="蘭"'), 'Traditional flower f6 should render as 蘭');

  // Verify Traditional Chinese MCR review label at runtime
  st.hands[0] = ['m2', 'm2', 'm2', 'p3', 'p3', 'p3', 's4', 's4', 's4', 'z5', 'z5', 'z5', 'm7', 'm7'];
  st.phase = 'turn';
  st.turn = 0;
  st.turnSource = 'draw';
  enApp.click({ fullMcrReview: '' });
  const twReviewHtml = enApp.ctx.MahjongFullPlayUI.html();
  assert(twReviewHtml.includes('系統已識別'), 'Traditional Chinese MCR review must display 系統已識別');
  assert(!twReviewHtml.includes('系统已识别'), 'Traditional Chinese MCR review must not display Simplified Chinese');

  // Advisor publicSeen for Joker (8 total copies) and Flower (1 total copy)
  const am = Engine.start('am', 1, {});
  am.phase = 'turn';
  am.turn = 0;
  am.hands[0] = ['f1', 'm1', 'm2', 'm3', 'p1', 'p2', 'p3', 's1', 's2', 's3', 'z1', 'z2', 'z3', 'j1'];
  am.discards[1] = ['j1', 'j1'];
  const adv = Advisor.advice(am);
  assert(adv && typeof adv.seen === 'number' && adv.seen >= 0, 'Advisor seen count must be non-negative');
}

// 7. Multi-mode AI Baseline Check (40 seeds per mode: conservation & termination)
{
  const summary = {};
  for (const mode of ['hk', 'sc', 'am', 'mcr']) {
    const expected = Deck.tilesFor(mode).sort();
    let wins = 0;
    let draws = 0;
    for (let seed = 0; seed < 40; seed++) {
      let s = Engine.start(mode, seed, {});
      let steps = 0;
      while (s.phase !== 'ended' && steps++ < 300) {
        const a = Engine.available(s);
        let action;
        if (a.phase === 'missing') action = { type: 'missing', suit: 'm' };
        else if (a.phase === 'charleston') {
          const idx = s.hands[0].map((t, i) => (t === 'j1' ? -1 : i)).filter(i => i >= 0).slice(0, 3);
          action = { type: 'charleston', indices: idx };
        } else if (a.phase === 'claim') action = { type: 'claim', id: 'pass' };
        else action = { type: 'discard', index: a.discards[0] };
        const r = Engine.act(s, action);
        assert(r.accepted, `${mode} seed=${seed} rejected: ${r.reason}`);
        s = r.state;
      }
      assert.equal(s.phase, 'ended', `${mode} seed=${seed} did not finish`);
      assert.notEqual(s.result.type, 'safety-stop', `${mode} seed=${seed} hit safety-stop`);
      assert.deepEqual(Engine.tilesInState(s).sort(), expected, `${mode} seed=${seed} tile conservation`);
      assert.equal(s.points.reduce((acc, n) => acc + n, 0), 0, `${mode} seed=${seed} zero-sum points`);
      if (s.result.type === 'draw') draws++;
      else wins++;
    }
    summary[mode] = { wins, draws };
  }
  console.log('PASS Phase 1 regression checks + AI 40-hand baseline:', JSON.stringify(summary));
}
