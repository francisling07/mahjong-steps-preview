# T521 Worker 报告：四川血战到底基础规则纯函数

## 实际修改文件
- 新建 `mahjong-gym-prototype/course/sichuan-rules.js`：普通脚本 + CommonJS 双载（浏览器挂 `globalThis.SichuanLearningRules`，Node `require` 同一对象），沿用 `hk-rules.js` 的加载约定；Node 下 require `./hk-rules.js`，浏览器需先加载 hk-rules.js（其自身依赖 meld.js）。导出 `isTile`、`isWinning`、`waits`、`legalDiscards`、`claimOptions`、`validExchangeSelection`、`activeAfterWin`。
  - 牌集仅 `m1..m9/p1..p9/s1..s9`，字牌一律非法；每种牌（暗手+明牌合计）超 4 张即非法。
  - `isWinning(hand, melds, missingSuit)`：`missingSuit` 必须为 `m/p/s`；明牌只认 pung/kong（chow 拒绝，格式与 hk-rules 一致，额外字段忽略）；暗手长度须为 `14-3*melds.length`；任何定缺花色残留（含明牌内）拒绝；先排除四川禁项后，无明牌时判七对，其余委托 `HKLearningRules.isWinning` 判普通四组一对（暗手顺子合法，委托不会引入字牌/吃/十三幺误判，因均已先行排除）。七对按"每种牌 2 或 4 张、合计 7 对"实现，即接受龙七对（四张作两对）——测试未覆盖此分支，如教材需禁止龙七对请告知。
  - `waits`：13 张结构量暗手，按 m1..s9 升序枚举 27 种候选；候选跳过定缺门与合计已 4 张者；非法输入 `[]`。
  - `legalDiscards(hand, missingSuit)`：有效 14 张暗手（第 5 张同牌、非法牌、错长度均 `[]`）；暗手仍含定缺花色时只返回定缺花色；去重、按 m,p,s 与数字升序。不计公开组合。
  - `claimOptions(hand, tile, missingSuit)`：只返回 `['pung']`/`['kong']`/`['pung','kong']`，从不返回吃；定缺门弃牌、第 5 张同牌（手中已 4 张）与非法输入返回 `[]`。暗手本身含定缺花色不拒绝（与任务测试 `claimOptions(pairHand,'p2','s')` 行为一致）；只判形状与牌数。
  - `validExchangeSelection(hand, indices)`：有效 13 张暗手中恰三个互不重复的整数下标、均在范围内且三张同花色才为 true；不启用交换、不修改输入。
  - `activeAfterWin(activeIds, winnerId)`：玩家列表须为字符串且不重复、胜者须在列，否则 `null`；返回去除胜者的新数组，不修改输入；界面可由 `length` 判断三家已胡/流局。
  - 所有函数对 null/undefined/字符串/数字/数组对象混淆、空数组、错误明牌结构安全返回失败值，不抛异常；无随机数与文件/存储副作用。
- 新建本报告 `worker-sichuan-rules.md`。未修改任何现有文件（hk-rules.js、meld.js、测试与调度器均未动）。

## 验证（固定 Node `node`，工作目录 `mahjong-gym-prototype`）
- `node --check course/sichuan-rules.js` → 退出码 0。
- `node course/test-sichuan-rules.cjs` → 输出 `PASS Sichuan shapes, seven pairs, missing suit, no chow, exchange selection, discards and blood-battle active players`，退出码 0。
- 回归既有测试：`test-hk-rules.cjs`、`test-engine.cjs`、`test-round.cjs` 全部 PASS，退出码 0。
- 另运行独立边界自查（tmp 临时脚本，未入库）→ `EXTRA OK`：龙七对可胡与 5 张拒绝、暗手顺子合法、明牌吃拒绝、明牌定缺残留拒绝、waits 跳过定缺门/第 5 张并验证两面搭子（s4/s7）、legalDiscards 定缺优先与第 5 张非法、claimOptions 第 5 张与定缺门拒绝、非整数/负数/布尔下标与 4 个下标拒绝、activeAfterWin 重复 ID 与空列表、约 90 组类型混淆入参全部不抛异常、各函数输入 JSON 快照前后深相等。

## 未解决事项 / 风险
- 龙七对（4 张作两对）按可胡实现，测试与任务文字均未明确；若 T/TFMJ 教材口径要求七对必须 7 种不同对子，需一行收紧 `isSevenPairs`。
- 七对/标准形的"不计公开组合只到 4 组"上限沿用 hk-rules（melds ≤ 4）；杠仍占 3 张结构量（14 胡牌形=14+杠数实体张），与任务测试一致。
- 未实现换三张交换方向、叫牌时机优先（碰/杠/胡冲突）、缺一门听牌限制（叫胡时手中不能有定缺门已隐含在残留拒绝中）、杠上花/抢杠/查叫等血战结算，均超出本任务范围。
- 浏览器接入需按 meld.js → hk-rules.js → sichuan-rules.js 顺序加载脚本；本任务未改任何 HTML/UI。
- 未提交、未推送、未部署、未调用付费服务、未委派其他 Agent。
