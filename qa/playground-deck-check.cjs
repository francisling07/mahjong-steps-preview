// T534 独立验证：牌墙数量/实体数、非法 mode/seed、确定性、发牌顺序、引用独立、无 Math.random、双载。
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { tilesFor, shuffle, deal } = require('../playground/deck.js');

const SUITS = ['m', 'p', 's'];
const BASE_IDS = [
  ...SUITS.flatMap((s) => Array.from({ length: 9 }, (_, i) => s + (i + 1))),
  ...Array.from({ length: 7 }, (_, i) => 'z' + (i + 1)),
];

function counts(tiles) {
  const c = Object.create(null);
  for (const t of tiles) c[t] = (c[t] || 0) + 1;
  return c;
}

// —— 数量与每种牌实体数 ——
{
  const hk = tilesFor('hk');
  assert.equal(hk.length, 136);
  const hkC = counts(hk);
  assert.deepEqual(Object.keys(hkC).sort(), [...BASE_IDS].sort());
  for (const id of BASE_IDS) assert.equal(hkC[id], 4, 'hk ' + id);

  const sc = tilesFor('sc');
  assert.equal(sc.length, 108);
  const scC = counts(sc);
  assert.deepEqual(Object.keys(scC).sort(), SUITS.flatMap((s) => Array.from({ length: 9 }, (_, i) => s + (i + 1))).sort());
  for (const id of Object.keys(scC)) assert.equal(scC[id], 4, 'sc ' + id);
  assert.equal(sc.some((t) => t[0] === 'z' || t[0] === 'f' || t[0] === 'j'), false, 'sc 不含字牌/花牌/Joker');

  const am = tilesFor('am');
  assert.equal(am.length, 152);
  const amC = counts(am);
  for (const id of BASE_IDS) assert.equal(amC[id], 4, 'am ' + id);
  for (let f = 1; f <= 8; f++) assert.equal(amC['f' + f], 1, 'am f' + f);
  assert.equal(amC['j1'], 8, 'am j1');
  assert.deepEqual(Object.keys(amC).sort(), [...BASE_IDS, ...Array.from({ length: 8 }, (_, i) => 'f' + (i + 1)), 'j1'].sort());
}

// —— 每次返回新数组 ——
{
  const a = tilesFor('hk');
  const b = tilesFor('hk');
  assert.notEqual(a, b);
  a[0] = 'mut';
  assert.notEqual(b[0], 'mut');
}

// —— 非法 mode ——
for (const mode of ['xx', '', 'HK', null, undefined, 0, 1, {}, [], true]) {
  assert.equal(tilesFor(mode), null, 'tilesFor ' + String(mode));
  assert.equal(shuffle(mode, 1), null, 'shuffle ' + String(mode));
  assert.equal(deal(mode, 1), null, 'deal ' + String(mode));
}

// —— 非法 seed ——
for (const seed of [-1, -0.5, 0.5, 1.5, NaN, Infinity, -Infinity, 4294967296, '1', '', null, undefined, {}, [], true]) {
  assert.equal(shuffle('hk', seed), null, 'shuffle seed ' + String(seed));
  assert.equal(deal('hk', seed), null, 'deal seed ' + String(seed));
}
// 合法边界 seed
for (const seed of [0, 1, 2147483647, 4294967295]) {
  assert.equal(shuffle('am', seed).length, 152, 'seed ' + seed);
}

// —— 确定性：相同 mode+seed 逐张相同；不同 seed 次序不同 ——
for (const mode of ['hk', 'sc', 'am']) {
  for (const seed of [0, 1, 7, 4294967295]) {
    assert.deepEqual(shuffle(mode, seed), shuffle(mode, seed), mode + ' seed ' + seed);
    assert.deepEqual(deal(mode, seed), deal(mode, seed), 'deal ' + mode + ' seed ' + seed);
  }
  const base = shuffle(mode, 0);
  assert.notDeepEqual(base, tilesFor(mode), mode + ' seed=0 应被真正打乱，不卡常数/原序');
  for (const other of [1, 2, 99, 123456789, 4294967295]) {
    assert.notDeepEqual(base, shuffle(mode, other), mode + ' seed 0 vs ' + other);
  }
}

// —— 发牌顺序：每轮东南西北，13 轮，东家第 53 张，其余为墙 ——
for (const mode of ['hk', 'sc', 'am']) {
  const seed = mode === 'am' ? 31337 : 42;
  const shuf = shuffle(mode, seed);
  const r = deal(mode, seed);
  assert.equal(r.hands.length, 4);
  assert.equal(r.hands[0].length, 14);
  assert.equal(r.hands[1].length, 13);
  assert.equal(r.hands[2].length, 13);
  assert.equal(r.hands[3].length, 13);
  assert.equal(r.hands[0].length + r.hands[1].length + r.hands[2].length + r.hands[3].length + r.wall.length, shuf.length);
  let idx = 0;
  for (let round = 0; round < 13; round++) {
    for (let seat = 0; seat < 4; seat++) {
      assert.equal(r.hands[seat][round], shuf[idx], mode + ' seat ' + seat + ' round ' + round);
      idx++;
    }
  }
  assert.equal(r.hands[0][13], shuf[idx], mode + ' 东家第 14 张');
  idx++;
  assert.deepEqual(r.wall, shuf.slice(idx), mode + ' 墙为剩余顺序');
  assert.equal(r.wall[0], shuf[53], mode + ' 墙首张即下一张摸牌');
  // 不丢牌/复制牌：手牌+墙 多重集合等于牌墙全集
  assert.deepEqual(counts(r.hands.flat().concat(r.wall)), counts(shuf), mode + ' 总数守恒');
}

// —— 结果数组引用独立，且修改结果不影响后续调用 ——
{
  const r1 = deal('hk', 5);
  const r2 = deal('hk', 5);
  assert.notEqual(r1, r2);
  assert.notEqual(r1.hands[0], r2.hands[0]);
  assert.notEqual(r1.wall, r2.wall);
  const expected = shuffle('hk', 5);
  r1.hands[0].push('X');
  r1.wall.length = 0;
  const r3 = deal('hk', 5);
  assert.equal(r3.hands[0].length, 14);
  assert.equal(r3.hands[1].length, 13);
  assert.equal(r3.wall.length, expected.length - 53);
}

// —— 无 Math.random 依赖：源码不含 Math.random，且 monkey-patch 后仍确定 ——
{
  const src = fs.readFileSync(path.join(__dirname, '..', 'playground', 'deck.js'), 'utf8');
  const code = src.replace(/^\s*\/\/.*$/gm, '');
  assert.equal(/Math\s*\.\s*random/.test(code), false, 'deck.js 不得使用 Math.random');
  const saved = Math.random;
  Math.random = () => { throw new Error('Math.random called'); };
  try {
    assert.deepEqual(deal('am', 8), deal('am', 8));
  } finally {
    Math.random = saved;
  }
}

// —— 浏览器全局双载 ——
{
  const src = fs.readFileSync(path.join(__dirname, '..', 'playground', 'deck.js'), 'utf8');
  const context = vm.createContext({ console, TypeError, Error, Object, Array, Number, String, JSON });
  vm.runInContext(src, context, { filename: 'playground/deck.js' });
  const D = context.MahjongPlaygroundDeck;
  assert.equal(typeof D.tilesFor, 'function');
  assert.equal(typeof D.shuffle, 'function');
  assert.equal(typeof D.deal, 'function');
  assert.equal(D.tilesFor('hk').length, 136);
  assert.equal(JSON.stringify(D.shuffle('sc', 9)), JSON.stringify(shuffle('sc', 9)));
  assert.equal(JSON.stringify(D.deal('am', 11)), JSON.stringify(deal('am', 11)));
  assert.equal(D.tilesFor('zz'), null);
}

console.log('PASS playground deck: tilesFor counts, invalid mode/seed, deterministic shuffle, deal order, reference independence, no Math.random, dual-load');
