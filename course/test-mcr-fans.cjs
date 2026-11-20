// T536 国标 81 番速查数据自检：期望表独立抄录自任务文件的官方清单，
// 不与被测模块互相印证。
'use strict';
const assert = require('node:assert/strict');
const MCR = require('./mcr-fans.js');

// [序号, 分值, 简体名] —— 与任务「官方清单」逐条一致。
const EXPECT = [
  [1, 88, '大四喜'], [2, 88, '大三元'], [3, 88, '绿一色'], [4, 88, '九莲宝灯'],
  [5, 88, '四杠'], [6, 88, '连七对'], [7, 88, '十三幺'],
  [8, 64, '清幺九'], [9, 64, '小四喜'], [10, 64, '小三元'], [11, 64, '字一色'],
  [12, 64, '四暗刻'], [13, 64, '一色双龙会'],
  [14, 48, '一色四同顺'], [15, 48, '一色四节高'],
  [16, 32, '一色四步高'], [17, 32, '三杠'], [18, 32, '混幺九'],
  [19, 24, '七对'], [20, 24, '七星不靠'], [21, 24, '全双刻'], [22, 24, '清一色'],
  [23, 24, '一色三同顺'], [24, 24, '一色三节高'], [25, 24, '全大'], [26, 24, '全中'],
  [27, 24, '全小'],
  [28, 16, '清龙'], [29, 16, '三色双龙会'], [30, 16, '一色三步高'], [31, 16, '全带五'],
  [32, 16, '三同刻'], [33, 16, '三暗刻'],
  [34, 12, '全不靠'], [35, 12, '组合龙'], [36, 12, '大于五'], [37, 12, '小于五'],
  [38, 12, '三风刻'],
  [39, 8, '花龙'], [40, 8, '推不倒'], [41, 8, '三色三同顺'], [42, 8, '三色三节高'],
  [43, 8, '无番和'], [44, 8, '妙手回春'], [45, 8, '海底捞月'], [46, 8, '杠上开花'],
  [47, 8, '抢杠和'], [48, 8, '双暗杠'],
  [49, 6, '碰碰和'], [50, 6, '混一色'], [51, 6, '三色三步高'], [52, 6, '五门齐'],
  [53, 6, '全求人'], [54, 6, '双箭刻'],
  [55, 4, '全带幺'], [56, 4, '不求人'], [57, 4, '双明杠'], [58, 4, '和绝张'],
  [59, 2, '箭刻'], [60, 2, '圈风刻'], [61, 2, '门风刻'], [62, 2, '门前清'],
  [63, 2, '平和'], [64, 2, '四归一'], [65, 2, '双同刻'], [66, 2, '双暗刻'],
  [67, 2, '暗杠'], [68, 2, '断幺'],
  [69, 1, '一般高'], [70, 1, '喜相逢'], [71, 1, '连六'], [72, 1, '老少副'],
  [73, 1, '幺九刻'], [74, 1, '明杠'], [75, 1, '缺一门'], [76, 1, '无字'],
  [77, 1, '边张'], [78, 1, '坎张'], [79, 1, '单调将'], [80, 1, '自摸'], [81, 1, '花牌']
];
const TIERS = [88, 64, 48, 32, 24, 16, 12, 8, 6, 4, 2, 1];

function nonEmptyText(text, where) {
  assert.equal(typeof text, 'object', where + ' 不是对象');
  for (const lang of ['zh', 'tw', 'en']) {
    assert.equal(typeof text[lang], 'string', where + '.' + lang + ' 非字符串');
    assert.ok(text[lang].trim().length > 0, where + '.' + lang + ' 为空');
  }
}

// 模块导出形状
assert.equal(typeof MCR, 'object');
for (const key of ['SOURCE', 'fans', 'byNo', 'byId', 'groupByPoints']) {
  assert.ok(key in MCR, '缺少导出 ' + key);
}
assert.equal(typeof MCR.byNo, 'function');
assert.equal(typeof MCR.byId, 'function');
assert.equal(typeof MCR.groupByPoints, 'function');
assert.ok(Array.isArray(MCR.fans));
assert.equal(MCR.fans.length, 81, '番种数量应为 81');

// 逐条对照独立期望表
const seenNo = new Set();
const seenId = new Set();
for (let i = 0; i < 81; i++) {
  const [no, points, zhName] = EXPECT[i];
  const fan = MCR.fans[i];
  assert.equal(fan.no, no, '第 ' + (i + 1) + ' 行序号应为 ' + no);
  assert.ok(!seenNo.has(no), '序号重复 ' + no);
  seenNo.add(no);
  assert.equal(fan.points, points, no + ' 分值应为 ' + points);
  assert.equal(fan.name.zh, zhName, no + ' 简体名应为 ' + zhName);
  assert.equal(typeof fan.id, 'string', no + ' id 非字符串');
  assert.match(fan.id, /^[a-z0-9][a-z0-9-]*$/, no + ' id 应稳定可读: ' + fan.id);
  assert.ok(!seenId.has(fan.id), 'id 重复 ' + fan.id);
  seenId.add(fan.id);
  nonEmptyText(fan.name, no + '.name');
  nonEmptyText(fan.summary, no + '.summary');
  // 规范用语：不得混入「胡」字
  for (const lang of ['zh', 'tw']) {
    assert.ok(!fan.name[lang].includes('胡'), no + ' 名称混入「胡」');
    assert.ok(!fan.summary[lang].includes('胡'), no + ' 解释混入「胡」');
  }
  if ('excludes' in fan) {
    assert.ok(Array.isArray(fan.excludes), no + ' excludes 应为数组');
    for (const ex of fan.excludes) {
      assert.ok(Number.isInteger(ex) && ex >= 1 && ex <= 81, no + ' excludes 含非法序号 ' + ex);
      assert.notEqual(ex, no, no + ' excludes 不应含自身');
    }
  }
}

// byNo / byId
for (const [no] of EXPECT) {
  assert.equal(MCR.byNo(no), MCR.fans[no - 1], 'byNo(' + no + ') 应命中');
  assert.equal(MCR.byId(MCR.fans[no - 1].id), MCR.fans[no - 1], 'byId 应命中 ' + no);
  assert.equal(MCR.byNo(String(no)), MCR.fans[no - 1], 'byNo 字符串应命中 ' + no);
}
for (const bad of [null, undefined, NaN, 0, -1, 82, 3.5, Infinity, {}, [], 'x', '', ' ']) {
  assert.equal(MCR.byNo(bad), null, 'byNo(' + String(bad) + ') 应返回 null 而非抛错');
}
for (const bad of [null, undefined, 1, {}, [], '', 'nope']) {
  assert.equal(MCR.byId(bad), null, 'byId 非法输入应返回 null');
}

// groupByPoints：12 档、分值顺序、组内官方序号顺序、总数 81
const groups = MCR.groupByPoints();
assert.ok(Array.isArray(groups));
assert.equal(groups.length, 12, '应返回 12 档');
let total = 0;
for (let t = 0; t < 12; t++) {
  assert.equal(groups[t].points, TIERS[t], '第 ' + (t + 1) + ' 档分值应为 ' + TIERS[t]);
  const expectedNos = EXPECT.filter((row) => row[1] === TIERS[t]).map((row) => row[0]);
  const actualNos = groups[t].fans.map((f) => f.no);
  assert.deepEqual(actualNos, expectedNos, TIERS[t] + ' 分档内应按官方序号排列');
  total += groups[t].fans.length;
}
assert.equal(total, 81, '分组总数应为 81');
// 空值或非法输入不导致抛错
MCR.groupByPoints(null);
MCR.groupByPoints(undefined);
MCR.groupByPoints('bad', {});

// 查询函数与返回结构不得修改底层数据
const snapshot = JSON.stringify(MCR.fans.map((f) => [f.no, f.points, f.name.zh, f.id]));
const g2 = MCR.groupByPoints();
try { g2[0].fans.push(MCR.fans[0]); } catch (e) { assert.ok(e instanceof TypeError, '分组数组应为安全结果'); }
try { g2[0].points = 1; } catch (e) { assert.ok(e instanceof TypeError, '分组对象应为安全结果'); }
try { MCR.fans[0].points = 999; } catch (e) { assert.ok(e instanceof TypeError, '番对象应冻结'); }
assert.ok(Object.isFrozen(MCR.fans), 'fans 数组应冻结');
for (const fan of MCR.fans) assert.ok(Object.isFrozen(fan), fan.no + ' 未冻结');
assert.equal(JSON.stringify(MCR.fans.map((f) => [f.no, f.points, f.name.zh, f.id])), snapshot,
  '数据在查询后被改变');

// SOURCE：官方链接、版本、8 分门槛与花牌说明
const src = JSON.stringify(MCR.SOURCE);
assert.ok(src.includes('https://www.mindmahjong.com/adobe/MCR2021.pdf'), '缺少官方中文链接');
assert.ok(src.includes('https://mahjong-europe.org/portal/images/docs/mcr_ENa5.pdf'), '缺少官方英文链接');
assert.ok(MCR.SOURCE.editions.some((e) => e.includes('2006')), '应记录 2006 版本');
assert.ok(MCR.SOURCE.editions.some((e) => e.includes('2014')), '应记录 2014 版本');
assert.ok(/8/.test(MCR.SOURCE.minimumWin) && MCR.SOURCE.minimumWin.includes('起和'), '应有 8 分起和摘要');
assert.ok(MCR.SOURCE.flowers.includes('花') && MCR.SOURCE.flowers.includes('8'), '应有花牌不计起和摘要');
assert.ok(MCR.SOURCE.languagePolicy.includes('中'), '应声明中文文本为准');

// 三语完整抽查：关键番种解释须含正确要点
function sum(no, lang) { return MCR.byNo(no).summary[lang]; }
assert.ok(sum(81, 'zh').includes('8') && sum(81, 'zh').includes('起和'), '花牌须说明不计入起和 8 分');
assert.ok(sum(81, 'en').includes('8-point'), 'flower summary must mention the 8-point minimum');
assert.ok(sum(43, 'zh').includes('8'), '无番和须说明计 8 分');
assert.ok(sum(4, 'zh').includes('1112345678999'), '九莲宝灯须给出牌型');
assert.ok(sum(40, 'zh').includes('白板'), '推不倒须列出可用牌');
assert.ok(sum(20, 'zh').includes('147'), '七星不靠须说明 147/258/369 结构');
assert.ok(MCR.byNo(1).excludes.includes(38), '大四喜应排除三风刻');
assert.ok(MCR.byNo(2).excludes.includes(59), '大三元应排除箭刻');

// 浏览器双载入口
assert.equal(globalThis.MahjongMCRFans, MCR, '浏览器入口 globalThis.MahjongMCRFans 应可用');

console.log('PASS MCR 81 fans: 官方 81 项序号/分值/简体名逐条一致、三语完整、12 档分组、冻结数据与空值安全');
