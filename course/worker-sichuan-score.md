# T522 Worker 报告：四川血战到底教学计分纯函数

## 实际修改文件
- 新建 `mahjong-gym-prototype/course/sichuan-score.js`：普通脚本 + CommonJS 双载（浏览器挂 `globalThis.SichuanLearningScore`，Node `require` 同一对象），沿用 `sichuan-rules.js` 的 IIFE 与导出约定；无任何外部依赖。三个函数均无副作用、不修改输入、非法输入返回 `null`、不抛异常。
  - `score(input)`：`base` 限定 `ordinary/allTriplets/fullFlush/sevenPairs`（1/2/4/4 分）；`roots` 为 0–3 整数；`extras` 为固定五 ID（`goldenHook/kongWin/kongDiscard/robKong/lastTile`）的去重字符串数组，重复、未知 ID、非数组、非字符串元素均拒绝；`mode` 限定 `selfDraw/discard`；`activeOpponents` 为 1–3 整数。`rawPoints = basePoints × 2^(roots+extras.length)`，`points = min(8, rawPoints)`，`capped = rawPoints > 8`；自摸 `paymentEach = points+1, payerCount = activeOpponents`，点炮 `paymentEach = points, payerCount = 1`，`total` 为二者乘积。按「拒绝未知键」的字面口径，`input` 顶层出现 `base/roots/extras/mode/activeOpponents` 之外的键也返回 `null`；若 Codex 的 UI 需要附带上下文字段，请改 `hasOnlyKeys` 白名单或删去该校验。
  - `kongPayment(input)`：只接受 `{type, activeOpponents}` 两键；`type` 限定 `concealed/discard/added`，`activeOpponents` 为 1–3 整数。暗杠 2×人数、引杠 2×1、绕杠 1×人数；已用 `hasOwnProperty` 防 `type:'constructor'` 之类原型键穿透。不计已胡者支付、不模拟杠者与点杠者身份。
  - `countRoots(hand, melds)`：牌形与 `sichuan-rules.js` 一致（`m/p/s`+1–9，字牌一律非法）；明牌只认 `pung`(3 张同牌)/`kong`(4 张同牌)，chow、错长度、非对象、`tiles` 非数组、超 4 组、暗手+明牌合计第 5 张同牌均返回 `null`；合法空数组返回 0；统计合计恰 4 张同牌的种类数（暗刻成 4 张与明杠均计根）。面子对象的额外字段（如 `from`）忽略，与 `sichuan-rules.js` 的宽松口径一致。
- 新建本报告 `worker-sichuan-score.md`。未修改任何现有文件（规则函数、测试、任务文件、调度器均未动）。

## 验证（固定 Node `node`，工作目录 `mahjong-gym-prototype`）
- `node --check course/sichuan-score.js` → 退出码 0。
- `node course/test-sichuan-score.cjs` → 输出 `PASS Sichuan point table, cap, self-draw/payment...`（完整行见测试文件末行），退出码 0。
- 回归既有测试：`test-hk-rules.cjs`、`test-engine.cjs`、`test-round.cjs`、`test-sichuan-rules.cjs` 全部 PASS，退出码 0。
- 另运行独立边界自查（tmp 临时脚本，未入库）→ `EXTRA OK`，退出码 0：七对 3 根 + 全 5 extras 的 1024→封顶 8；`base:'constructor'`/`type:'toString'` 原型键拒绝；`score`/`kongPayment`/`countRoots` 入参 JSON 快照前后相等；自摸封顶 9×3=27；明杠单独计根、暗 2+碰 3 第 5 张拒绝、`m0`/非字符串/嵌套数组/`melds.length>4`/空 `tiles` 拒绝；重复调用与 require 后 `globalThis.SichuanLearningScore` 挂载可用。

## 未处理事项 / 风险
- 「未知键」按最严格口径同时应用于 `score`/`kongPayment` 顶层输入；测试未覆盖此分支，口径以任务文字为准，如需放宽是一行改动（已在上方标注位置）。
- `score` 不做番种互斥与时间序校验（如清一色+大对子同现应由调用方选较高主体番种；七对与已碰面子矛盾由页面负责），与任务「只换算已核对的项」一致。
- 金钩钓仅作为已确认因素的乘 2 换算，模块不验证「四组已公开面子后单钓将」的牌形。
- 退杠（呼叫转移）、查叫、花猪、赛事处罚、血战中已胡者不参与杠分支付等均超出范围；`activeOpponents` 语义为「仍未胡的对手数」，由调用方保证。
- 未提交、未推送、未部署、未调用付费服务、未委派其他 Agent。
