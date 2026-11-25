'use strict';

const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');

const root = path.resolve(__dirname, '..');
const Utils = require('../tile-utils.js');
const BotAI = require('../playground/bot-ai.js');
const Engine = require('../playground/full-engine.js');

// 1. Shared tile-utils checks
{
  assert.equal(Utils.esc('<"a"&\'b\'>'), '&lt;&quot;a&quot;&amp;&#39;b&#39;&gt;');
  assert.equal(Utils.local({ zh: '中', tw: '繁', en: 'EN' }, 'tw'), '繁');
  assert.equal(Utils.tileName('m3', 'zh'), '3 万');
  assert.equal(Utils.tileName('m3', 'en', 'default'), '3 characters');
  assert.equal(Utils.tileName('m3', 'en', 'short'), '3 Craks');
  assert.equal(Utils.tileName('s5', 'tw', 'short'), '5 索');
  assert.equal(Utils.tileName('z5', 'en', 'default'), 'Red dragon');
  assert.equal(Utils.tileName('z5', 'en', 'short'), 'Red');
  assert.equal(Utils.tileName('f6', 'zh'), '兰');
  assert.equal(Utils.tileName('f6', 'tw'), '蘭');
  assert.equal(Utils.tileName('f6', 'en'), 'Orchid');
  assert.equal(Utils.tileName('j1', 'en'), 'Joker');
  assert.equal(Utils.totalCopies('f1'), 1);
  assert.equal(Utils.totalCopies('j1'), 8);
  assert.equal(Utils.totalCopies('m1'), 4);
  assert.deepEqual(Utils.sortHand(['j1', 'z1', 'f1', 's2', 'm9', 'p1']), ['m9', 'p1', 's2', 'z1', 'f1', 'j1']);
  assert.equal(Utils.storage.get('missing-key'), null);
}

// 2. Decoupled BotAI standalone checks
{
  assert.equal(BotAI.chooseMissing(['m1', 'p1', 'p2', 's1', 's2', 's3']), 'm');
  assert.deepEqual(BotAI.chooseExchange(['m1', 'm2', 'm3', 'p1', 'p2', 'p3', 'p4', 's1', 's2', 's3', 's4', 's5', 's6']), [0, 1, 2]);
  const amPass = BotAI.chooseCharlestonPass(['j1', 'm1', 'm1', 'p9', 's9', 'z7', 'm2', 'm2', 'p3', 'p3', 's4', 's4', 'z1']);
  assert.equal(amPass.length, 3);
  assert(!amPass.includes(0), 'Bot Charleston pass must never pass a Joker');

  const s = Engine.start('hk', 7, {});
  const before = JSON.stringify(s);
  const idx = BotAI.chooseDiscard(s, 1, s.hands[1].map((_, i) => i));
  assert(Number.isInteger(idx) && idx >= 0 && idx < s.hands[1].length);
  assert.equal(JSON.stringify(s), before, 'BotAI.chooseDiscard must not mutate state');
}

// 3. App Hash Routing & browser Back/Forward (hashchange)
{
  const listeners = {};
  const winListeners = {};
  const store = new Map();
  const location = { hash: '#play/sc' };

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
    location,
    console,
    window: null,
    Math,
    confirm: () => true,
    addEventListener(name, fn) { winListeners[name] = fn; }
  });
  ctx.window = ctx;
  ctx.scrollTo = () => {};

  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  for (const [, src] of html.matchAll(/<script src="([^"]+)"/g)) {
    vm.runInContext(fs.readFileSync(path.join(root, src), 'utf8'), ctx, { filename: src });
  }

  // Initial deep-link boot to #play/sc
  assert(nodes.app.innerHTML.includes('data-full-mode="sc"'), 'Initial hash #play/sc should open Full Table Playground');
  assert(nodes.app.innerHTML.includes('data-full-option="scExchange"'), 'Initial hash #play/sc should preselect Sichuan mode');

  // Simulate browser Back/Forward via hashchange
  assert(typeof winListeners.hashchange === 'function', 'app.js must bind window hashchange listener');
  location.hash = '#mcr';
  winListeners.hashchange();
  assert(nodes.app.innerHTML.includes('九章三十六课'), 'hashchange #mcr should navigate to MCR course');

  location.hash = '#gallery';
  winListeners.hashchange();
  assert(nodes.app.innerHTML.includes('麻将牌图鉴'), 'hashchange #gallery should navigate to tile gallery');

  location.hash = '#home';
  winListeners.hashchange();
  assert(nodes.app.innerHTML.includes('data-play-enter'), 'hashchange #home should navigate back to home');
}

console.log('PASS Phase 2 decoupling: shared tile-utils, standalone BotAI, and Hash routing');
