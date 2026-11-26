'use strict';

const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');

const root = path.resolve(__dirname, '..');
const Examples = require('../course/fan-examples-data.js');
const HKRef = require('../course/reference-data.js');
const HKRules = require('../course/hk-rules.js');
const SCRules = require('../course/sichuan-rules.js');
const MCRFans = require('../course/mcr-fans.js');
const MCRScore = require('../course/mcr-score.js');
const Judges = require('../playground/judges.js');

const TILE_RE = /^(?:[mps][1-9]|z[1-7]|f[1-8]|j1)$/;

function checkPhysicalCounts(groups, label) {
  assert(Array.isArray(groups) && groups.length > 0, `${label}: groups must be non-empty`);
  const counts = Object.create(null);
  const flat = [];
  for (const g of groups) {
    assert(Array.isArray(g) && g.length > 0, `${label}: each group must be non-empty`);
    for (const t of g) {
      assert(typeof t === 'string' && TILE_RE.test(t), `${label}: invalid tile ${t}`);
      counts[t] = (counts[t] || 0) + 1;
      const limit = t[0] === 'f' ? 1 : t === 'j1' ? 8 : 4;
      assert(counts[t] <= limit, `${label}: tile ${t} exceeds physical limit ${limit}`);
      flat.push(t);
    }
  }
  return flat;
}

function splitKongs(groups) {
  const melds = [];
  const hand = [];
  for (const g of groups) {
    if (g.length === 4 && g.every(t => t === g[0])) {
      melds.push({ type: 'kong', tiles: g.slice() });
    } else {
      hand.push(...g);
    }
  }
  return { hand, melds };
}

// 1. Validate all 30 HK examples
for (const item of HKRef) {
  const ex = Examples.hk[item.id];
  assert(ex, `Missing HK example for id=${item.id}`);
  const flat = checkPhysicalCounts(ex.groups, `hk:${item.id}`);
  if (ex.winTile) assert(flat.includes(ex.winTile), `hk:${item.id} winTile not in hand`);
  // Non-flower full hands (0..24 and 26) must be structurally valid HK winning hands
  if (!flat.some(t => t[0] === 'f')) {
    const { hand, melds } = splitKongs(ex.groups);
    assert(HKRules.isWinning(hand, melds), `hk:${item.id} (${item.title.zh}) must be a structurally valid winning hand`);
  }
}

// 2. Validate all 81 MCR examples
for (const fan of MCRFans.fans) {
  const ex = Examples.mcr[fan.no];
  assert(ex, `Missing MCR example for no=${fan.no}`);
  const flat = checkPhysicalCounts(ex.groups, `mcr:${fan.no}`);
  if (ex.winTile) assert(flat.includes(ex.winTile), `mcr:${fan.no} winTile not in hand`);
  if (ex.tag) {
    for (const l of ['zh', 'tw', 'en']) assert(ex.tag[l] && ex.tag[l].trim(), `mcr:${fan.no} tag.${l} empty`);
    assert(!ex.tag.zh.includes('胡') && !ex.tag.tw.includes('胡'), `mcr:${fan.no} tag must use 和 instead of 胡`);
  }
  if (fan.no !== 81) {
    const { hand, melds } = splitKongs(ex.groups);
    assert(MCRScore.shape(hand, melds), `mcr:${fan.no} (${fan.name.zh}) must be a valid MCR winning shape`);
  }
}

// 3. Validate all Sichuan examples
assert(Examples.sichuan.length >= 9);
for (const item of Examples.sichuan) {
  const flat = checkPhysicalCounts(item.example.groups, `sc:${item.id}`);
  assert(flat.every(t => /^[mps][1-9]$/.test(t)), `sc:${item.id} must only use m/p/s tiles`);
  if (item.id !== 'sc-kong-pay') {
    const missing = ['m', 'p', 's'].find(s => !flat.some(t => t[0] === s));
    assert(missing, `sc:${item.id} must have at least one missing suit`);
    const isSevenPairsWithRoot = item.id === 'sc-dragon-seven';
    const { hand, melds } = isSevenPairsWithRoot ? { hand: flat, melds: [] } : splitKongs(item.example.groups);
    assert(SCRules.isWinning(hand, melds, missing), `sc:${item.id} must be a valid Sichuan winning hand`);
  }
}

// 4. Validate all American examples
assert(Examples.american.length >= 5);
for (const item of Examples.american) {
  const flat = checkPhysicalCounts(item.example.groups, `am:${item.id}`);
  if (item.id !== 'am-joker-swap') {
    assert.equal(flat.length, 14, `am:${item.id} must contain 14 tiles`);
    const scored = Judges.americanScore(flat, [], 'selfDraw');
    assert(scored && scored.legal, `am:${item.id} must satisfy an original American practice card line`);
  }
}

// 5. Verify UI rendering across all 4 reference pages in zh/tw/en via full index.html VM
{
  const listeners = {};
  const store = new Map();
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
  const nodes = { app: elem('app'), lang: elem('lang'), homeBtn: elem('homeBtn'), learnBtn: elem('learnBtn'), foot: elem('foot') };
  const document = { documentElement: { lang: '' }, querySelector(sel) { return nodes[sel.slice(1)] || null; } };
  const localStorage = { getItem(k) { return store.get(k) || null; }, setItem(k, v) { store.set(k, String(v)); }, removeItem(k) { store.delete(k); } };
  const ctx = vm.createContext({ document, localStorage, console, window: null, Math, confirm: () => true });
  ctx.window = ctx;
  ctx.scrollTo = () => {};

  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  for (const [, src] of html.matchAll(/<script src="([^"]+)"/g)) {
    vm.runInContext(fs.readFileSync(path.join(root, src), 'utf8'), ctx, { filename: src });
  }
  function click(dataset) {
    const el = {
      dataset,
      hasAttribute(k) { return k.replace(/^data-/, '').replace(/-([a-z])/g, (_, c) => c.toUpperCase()) in dataset; },
      getAttribute() { return null; },
      focus() {}
    };
    listeners['app:click']({ target: { closest() { return el; } } });
    return nodes.app.innerHTML;
  }

  // HK Reference (30 examples)
  click({ mode: 'begin' });
  const hkRefHtml = click({ courseReference: '' });
  assert.equal((hkRefHtml.match(/class="fan-example"/g) || []).length, 30, 'HK reference must render 30 visual tile examples');

  // MCR Reference (81 examples)
  click({ home: '' });
  click({ rule: '1' });
  const mcrRefHtml = click({ mcrReference: '' });
  assert.equal((mcrRefHtml.match(/class="fan-example"/g) || []).length, 81, 'MCR reference must render 81 visual tile examples');

  // Sichuan Reference (9 examples)
  click({ home: '' });
  click({ rule: '2' });
  click({ bridgeEnter: 'sichuan' });
  const scRefHtml = click({ bridgeReference: '' });
  assert.equal((scRefHtml.match(/class="fan-example"/g) || []).length, Examples.sichuan.length, 'Sichuan reference must render all pattern examples');

  // American Reference (5 examples)
  click({ home: '' });
  click({ rule: '3' });
  const amRefHtml = click({ americanReference: '' });
  assert.equal((amRefHtml.match(/class="fan-example"/g) || []).length, Examples.american.length, 'American reference must render all practice card examples');

  // Language switch smoke check on reference view
  nodes.lang.value = 'en';
  listeners['lang:change']();
  assert(nodes.app.innerHTML.includes('Practice card reference') && nodes.app.innerHTML.includes('class="fan-example"'));
}

console.log(`PASS fan examples: 30 HK + 81 MCR + ${Examples.sichuan.length} Sichuan + ${Examples.american.length} American verified for tile counts, winning shapes & 4-style UI rendering`);
