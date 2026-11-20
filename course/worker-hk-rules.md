# T519 Worker 报告：香港教学用结构、等待牌与积分纯函数

## 完成内容
- 新建 `mahjong-gym-prototype/course/hk-rules.js`：普通脚本 + CommonJS 双载（浏览器挂 `globalThis.HKLearningRules`，Node 可 `require`），沿用 `engine.js` 的加载约定，复用 `../meld.js` 的 `classifyMeld` 验证顺子/刻子面子。
  - `isWinning(concealed, melds=[])`：校验 0–4 个面子对象（chow/pung/kong 牌型、额外字段如 from 忽略）、暗手长度 `14-3*melds.length`、暗手+面子合计每种牌最多 4 张；无明组时接受十三幺；标准结构为去一对后对暗手计数表做非贪心回溯拆组（面子牌不参与拆牌）。七对不作为独立特殊结构。
  - `waits(concealed, melds=[])`：长度 `13-3*melds.length`，按 m1..z7 顺序枚举 34 种候选，合计已 4 张的牌跳过，其余用 `isWinning` 判定。
  - `claimOptions(hand, discard, from)`：hand 0–14 张合法牌、from 限 previous/opposite/next，否则 `[]`；加弃牌后超 4 张返回 `[]`；chow 仅 previous 且按完整顺子起始数字升序、used 数字升序、同种顺子按点数去重一次；随后 pung（手中 2 张）、kong（手中 3 张），三种来源均可；不修改输入。
  - `settlement(fan,mode)`：`fan` 须为 `Number.isSafeInteger` 且 ≥3（3.5、NaN、Infinity、`Number.MAX_VALUE`、字符串等均拒绝），超 10 封顶 10；mode 限 discard/selfDraw；弃牌胡支付 32,64,96,128,192,256,384,512；自摸每家减半、`payerCount:3`。
- 新建本报告 `worker-hk-rules.md`。未修改任何现有文件。

## 验证（固定 Node `node`）
- `<Node> --check mahjong-gym-prototype/course/hk-rules.js` → 退出码 0。
- `<Node> mahjong-gym-prototype/course/test-hk-rules.cjs` → 输出 `PASS HK teaching rules: ...`，退出码 0。
- 另运行了一组额外边界自查（明组+11 张暗手胡型、字牌顺子面子拒绝、kong 长度错误、from 字段忽略、七对拒绝、无对十三幺、waits 长度非法、claim 非法来源/牌/超 4 张/空 hand、m9 顺子去重、封顶自摸 768、输入不可变性、globalThis 挂载）→ 输出 `EXTRA OK`，退出码 0。临时调试文件写在系统 tmp，未入库。

## 开发中发现并修复的问题
1. `canFormMelds` 内层 `for...in` 曾复用外层 `key` 变量，破坏 `canStandardWin` 的迭代；已改为独立变量。
2. 初版把面子牌合入拆牌计数表导致带明组牌误判；现合计计数仅用于 4 张上限检查，拆牌仅用暗手计数。
3. 顺子起点枚举第三分支误写 `n+1`，会使 high-side 顺子（如 hand m4 m5 吃 m3）丢失；已改为 `n`。

## 限制（按任务规格）
- 只判断牌型结构：不判番数、禁例（如无番胡、十三幺禁例）、弃牌限制、牌墙存量与抢杠、包牌。
- `claimOptions` 非全面合法性裁判，仅检牌型与来源方向。
- 七对不识别为独立特殊结构（能拆成基础结构才为 true）。
- 未联网、未委派、未提交/推送/部署。
