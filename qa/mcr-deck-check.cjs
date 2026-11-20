// T538 独立验证：mcr 国标牌集 144 张组成、确定性发牌、边界输入，以及 hk/sc/am 旧输出不回归。
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { tilesFor, shuffle, deal } = require('../playground/deck.js');

const SUITS = ['m', 'p', 's'];
const NUM_IDS = SUITS.flatMap((s) => Array.from({ length: 9 }, (_, i) => s + (i + 1)));
const Z_IDS = Array.from({ length: 7 }, (_, i) => 'z' + (i + 1));
const F_IDS = Array.from({ length: 8 }, (_, i) => 'f' + (i + 1));

function counts(tiles) {
  const c = Object.create(null);
  for (const t of tiles) c[t] = (c[t] || 0) + 1;
  return c;
}

// —— mcr 牌集：144 张、每种张数、无 Joker ——
{
  const mcr = tilesFor('mcr');
  assert.equal(mcr.length, 144);
  const c = counts(mcr);
  assert.deepEqual(Object.keys(c).sort(), [...NUM_IDS, ...Z_IDS, ...F_IDS].sort());
  for (const id of NUM_IDS) assert.equal(c[id], 4, 'mcr ' + id);
  for (const id of Z_IDS) assert.equal(c[id], 4, 'mcr ' + id);
  for (const id of F_IDS) assert.equal(c[id], 1, 'mcr ' + id);
  assert.equal(c['j1'], undefined, 'mcr 不含 Joker');
  assert.equal(mcr.some((t) => t[0] === 'j'), false, 'mcr 不含 Joker');
  // 每次返回新数组
  const again = tilesFor('mcr');
  assert.notEqual(mcr, again);
  assert.deepEqual(mcr, again);
}

// —— mcr 非法 mode/seed 返回 null（含边界）——
for (const mode of ['xx', '', 'MCR', 'mcr ', null, undefined, 0, 'mcr1']) {
  assert.equal(tilesFor(mode), null, 'tilesFor ' + String(mode));
  assert.equal(shuffle(mode, 1), null, 'shuffle ' + String(mode));
  assert.equal(deal(mode, 1), null, 'deal ' + String(mode));
}
for (const seed of [-1, -0.5, 0.5, 1.5, NaN, Infinity, -Infinity, 4294967296, '1', '', null, undefined, {}, [], true]) {
  assert.equal(shuffle('mcr', seed), null, 'shuffle seed ' + String(seed));
  assert.equal(deal('mcr', seed), null, 'deal seed ' + String(seed));
}
for (const seed of [0, 1, 2147483647, 4294967295]) {
  assert.equal(shuffle('mcr', seed).length, 144, '合法 seed ' + seed);
}

// —— mcr 确定性：同 seed 逐张相同；不同 seed 次序不同；shuffle 为牌集的一个排列 ——
{
  for (const seed of [0, 1, 7, 123456789, 4294967295]) {
    assert.deepEqual(shuffle('mcr', seed), shuffle('mcr', seed), 'shuffle seed ' + seed);
    assert.deepEqual(deal('mcr', seed), deal('mcr', seed), 'deal seed ' + seed);
  }
  const base = shuffle('mcr', 0);
  assert.deepEqual(counts(base), counts(tilesFor('mcr')), 'shuffle 不丢牌不复制');
  assert.notDeepEqual(base, tilesFor('mcr'), 'seed=0 应被真正打乱');
  for (const other of [1, 2, 99, 123456789, 4294967295]) {
    assert.notDeepEqual(base, shuffle('mcr', other), 'seed 0 vs ' + other);
  }
}

// —— mcr 发牌：13/14/13/13，余牌留墙，总数守恒，不补花 ——
for (const seed of [0, 42, 4294967295]) {
  const shuf = shuffle('mcr', seed);
  const r = deal('mcr', seed);
  assert.equal(r.hands.length, 4);
  assert.deepEqual(r.hands.map((h) => h.length), [14, 13, 13, 13], 'seed ' + seed);
  assert.equal(r.wall.length, 144 - 53, 'seed ' + seed + ' 墙应为 91 张');
  let idx = 0;
  for (let round = 0; round < 13; round++) {
    for (let seat = 0; seat < 4; seat++) {
      assert.equal(r.hands[seat][round], shuf[idx], 'seed ' + seed + ' seat ' + seat + ' round ' + round);
      idx++;
    }
  }
  assert.equal(r.hands[0][13], shuf[idx], 'seed ' + seed + ' 东家第 14 张');
  idx++;
  assert.deepEqual(r.wall, shuf.slice(idx), 'seed ' + seed + ' 墙为剩余顺序');
  assert.deepEqual(counts(r.hands.flat().concat(r.wall)), counts(shuf), 'seed ' + seed + ' 总牌数守恒');
  const dealt = r.hands.flat();
  assert.equal(dealt.length, 53);
  assert.equal(dealt.filter((t) => t[0] === 'f').length <= 8, true);
}

// —— 旧模式牌数与代表性牌种，输出顺序逐张不回归 ——
{
  const hk = tilesFor('hk');
  assert.equal(hk.length, 136);
  const hkC = counts(hk);
  assert.equal(hkC['z1'], 4, 'hk z1');
  assert.equal(hkC['z7'], 4, 'hk z7');
  assert.equal(hkC['m1'], 4, 'hk m1');
  assert.equal(hkC['s9'], 4, 'hk s9');
  assert.equal(hkC['f1'], undefined, 'hk 无花牌');
  assert.equal(hkC['j1'], undefined, 'hk 无 Joker');

  const sc = tilesFor('sc');
  assert.equal(sc.length, 108);
  const scC = counts(sc);
  assert.equal(scC['p5'], 4, 'sc p5');
  assert.equal(sc.some((t) => 'zfj'.includes(t[0])), false, 'sc 不含字/花/Joker');

  const am = tilesFor('am');
  assert.equal(am.length, 152);
  const amC = counts(am);
  assert.equal(amC['j1'], 8, 'am j1×8');
  assert.equal(amC['f1'], 1, 'am f1×1');
  assert.equal(amC['f8'], 1, 'am f8×1');
  assert.equal(amC['z5'], 4, 'am z5');

  // 逐张快照：旧模式输出数组顺序保持原样
  const expectHk = [...Z_IDS.flatMap((z) => [z, z, z, z]), ...NUM_IDS.flatMap((t) => [t, t, t, t])];
  assert.deepEqual(hk, expectHk, 'hk 顺序不回归');
  assert.deepEqual(sc, NUM_IDS.flatMap((t) => [t, t, t, t]), 'sc 顺序不回归');
  const expectAm = [
    ...Z_IDS.flatMap((z) => [z, z, z, z]),
    ...F_IDS,
    ...Array.from({ length: 8 }, () => 'j1'),
    ...NUM_IDS.flatMap((t) => [t, t, t, t]),
  ];
  assert.deepEqual(am, expectAm, 'am 顺序不回归');

  // 旧模式洗牌结果不受 mcr 引入影响（种子 0 快照）
  assert.deepEqual(counts(shuffle('hk', 0)), counts(hk));
  assert.deepEqual(counts(shuffle('am', 0)), counts(am));
}

// —— 无 Math.random：源码不含且 monkey-patch 后仍确定 ——
{
  const src = fs.readFileSync(path.join(__dirname, '..', 'playground', 'deck.js'), 'utf8');
  const code = src.replace(/^\s*\/\/.*$/gm, '');
  assert.equal(/Math\s*\.\s*random/.test(code), false, 'deck.js 不得使用 Math.random');
  const saved = Math.random;
  Math.random = () => { throw new Error('Math.random called'); };
  try {
    assert.deepEqual(deal('mcr', 8), deal('mcr', 8));
  } finally {
    Math.random = saved;
  }
}

console.log('PASS mcr deck: 144-tile composition/counts/no-joker, invalid mode/seed null, deterministic shuffle & deal, 13/14/13/13 + 91-tile wall conservation, hk/sc/am output unchanged, no Math.random');
