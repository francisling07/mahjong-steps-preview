'use strict';

const path = require('path');
const { classifyMeld, isBasicWinningHand } = require(path.join(__dirname, 'meld.js'));

let passed = 0;
let failed = 0;

function eq(actual, expected, name) {
  const ok = actual === expected;
  if (ok) {
    passed++;
    console.log('PASS ' + name);
  } else {
    failed++;
    console.log('FAIL ' + name + ' (expected ' + JSON.stringify(expected) + ', got ' + JSON.stringify(actual) + ')');
  }
}

function snapshot(arr) {
  return JSON.stringify(arr);
}

// --- pair ---
eq(classifyMeld(['m1', 'm1']), 'pair', 'pair m1m1');
eq(classifyMeld(['z5', 'z5']), 'pair', 'pair z5z5');
eq(classifyMeld(['m1', 'm2']), null, 'pair 两张不同为 null');

// --- 刻子 ---
eq(classifyMeld(['p9', 'p9', 'p9']), 'triplet', 'triplet p9');
eq(classifyMeld(['z7', 'z7', 'z7']), 'triplet', 'triplet z7');

// --- 无序顺子 ---
eq(classifyMeld(['m3', 'm1', 'm2']), 'sequence', 'sequence 乱序 m3m1m2');
eq(classifyMeld(['s9', 's7', 's8']), 'sequence', 'sequence 乱序 s9s7s8');
eq(classifyMeld(['p4', 'p5', 'p6']), 'sequence', 'sequence 顺序 p4p5p6');

// --- 字牌伪顺子 ---
eq(classifyMeld(['z1', 'z2', 'z3']), null, '字牌伪顺子 z1z2z3 为 null');
eq(classifyMeld(['z3', 'z1', 'z2']), null, '字牌乱序伪顺子为 null');

// --- 跨花色 ---
eq(classifyMeld(['m1', 'p2', 's3']), null, '跨花色 m1p2s3 为 null');
eq(classifyMeld(['m1', 'm2', 'p3']), null, '跨花色 m1m2p3 为 null');
eq(classifyMeld(['m1', 'm2', 'm4']), null, '同花色不连续为 null');
eq(classifyMeld(['m1', 'm1', 'm2']), null, '同花色有重复不为顺子');
eq(classifyMeld(['m8', 'm9', 'm1']), null, 'm1 不与 m9m8 相连');

// --- 不合法输入 ---
eq(classifyMeld(null), null, 'null 输入');
eq(classifyMeld(undefined), null, 'undefined 输入');
eq(classifyMeld('m1m1'), null, '字符串输入');
eq(classifyMeld(123), null, '数字输入');
eq(classifyMeld({}), null, '对象输入');
eq(classifyMeld([]), null, '空数组');
eq(classifyMeld(['m1']), null, '单张');
eq(classifyMeld(['m1', 'm1', 'm1', 'm1']), null, '四张');
eq(classifyMeld(['x1', 'x1']), null, '非法花色 x1');
eq(classifyMeld(['m0', 'm0', 'm0']), null, '非法数字 m0');
eq(classifyMeld(['m10', 'm10', 'm10']), null, '非法数字 m10');
eq(classifyMeld(['z8', 'z8']), null, '非法字牌 z8');
eq(classifyMeld(['z0', 'z0']), null, '非法字牌 z0');
eq(classifyMeld(['M1', 'M1']), null, '大写不合法');
eq(classifyMeld([' m1', 'm1']), null, '带空格不合法');
eq(classifyMeld([1, 1]), null, '数字元素');
eq(classifyMeld([null, null]), null, 'null 元素');
eq(classifyMeld(['m1', null, 'm3']), null, '混合非法元素');

// --- 基础成牌 ---
const win1 = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9', 'p1', 'p2', 'p3', 's5', 's5'];
eq(isBasicWinningHand(win1), true, '基础成牌 99 面子加边张');
const win2 = ['m1', 'm1', 'm1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'p1', 'p2', 'p3', 's1', 's1'];
eq(isBasicWinningHand(win2), true, '基础成牌 需尝试不同将牌与拆法');
eq(isBasicWinningHand(['z1', 'z1', 'z1', 'z2', 'z2', 'z2', 'z3', 'z3', 'z3', 'z4', 'z4', 'z4', 'z5', 'z5']), true, '基础成牌 全刻子加将');

// --- 无法成牌 ---
eq(isBasicWinningHand(['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9', 'p1', 'p2', 'p3', 's5', 's6']), false, '将牌不成对');
eq(isBasicWinningHand(['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9', 'p1', 'p2', 'p3', 'z1', 'z2']), false, '余张无法成组');
eq(isBasicWinningHand(['m1', 'm2', 'm3', 'z1', 'z2', 'z3', 'p4', 'p5', 'p6', 's7', 's8', 's9', 'm5', 'm6']), false, '字牌伪顺子致无法成牌');
eq(isBasicWinningHand(['m1', 'm2', 'm3']), false, '张数不是 14');
eq(isBasicWinningHand([]), false, '空数组');
eq(isBasicWinningHand(null), false, 'null 输入');
eq(isBasicWinningHand(undefined), false, 'undefined 输入');
eq(isBasicWinningHand('m1m2m3m4m5m6m7m8m9p1p2p3s5s5'), false, '字符串输入');
eq(isBasicWinningHand(['m1', 'm1', 'm1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'p1', 'p2', 'p3', 'x4', 'x4']), false, '含非法牌');

// --- 超过四张同牌 ---
const five = ['m1', 'm1', 'm1', 'm1', 'm1', 'm2', 'm3', 'm4', 'm5', 'p1', 'p2', 'p3', 's5', 's5'];
eq(isBasicWinningHand(five), false, '五张 m1 为 false');

// --- 输入不变性 ---
const imm1 = ['m3', 'm1', 'm2'];
const before1 = snapshot(imm1);
classifyMeld(imm1);
eq(snapshot(imm1), before1, 'classifyMeld 顺子不修改输入');

const imm2 = ['p9', 'p9', 'p9'];
const before2 = snapshot(imm2);
classifyMeld(imm2);
eq(snapshot(imm2), before2, 'classifyMeld 刻子不修改输入');

const imm3 = ['m1', 'm1', 'm1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'p1', 'p2', 'p3', 's1', 's1'];
const before3 = snapshot(imm3);
isBasicWinningHand(imm3);
eq(snapshot(imm3), before3, 'isBasicWinningHand 不修改输入');

const imm4 = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9', 'p1', 'p2', 'p3', 's5', 's6'];
const before4 = snapshot(imm4);
isBasicWinningHand(imm4);
eq(snapshot(imm4), before4, 'isBasicWinningHand 失败路径不修改输入');

// --- 连续调用无内部状态残留 ---
eq(isBasicWinningHand(win2), true, '重复调用 win2 仍为 true');
eq(classifyMeld(['m3', 'm1', 'm2']), 'sequence', '重复调用顺子仍为 sequence');

console.log('');
console.log('总计: ' + (passed + failed) + '  通过: ' + passed + '  失败: ' + failed);
if (failed > 0) {
  process.exit(1);
}
