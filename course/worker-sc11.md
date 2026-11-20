# T526 Worker 报告：sc-11 复杂结算

## 修改文件
- `course/bridge-content-source.cjs`：在 sc-10 之后追加 `sichuan.push(...)` 的 `sc-11` 章，三课各三题，共 9 题；未改动其他章节、题目或题型。
- `course/worker-sc11.md`：本报告。

## 内容概要
- `sc-11-1` 杠上炮与呼叫转移（sc-11-1-a/b/c）：触发条件（仅杠上炮，普通点炮与自摸不触发）；单人转移 6 分且明示不是重复收取普通杠分、杠上炮胡牌分另算；两位同胡时已收 5 分按位平分取最小整数各 3、合共 6、不足 1 分由点炮方补足。题面均区分“杠分转移”与“胡牌分”两本账。
- `sc-11-2` 查叫查大与退杠（sc-11-2-a/b/c）：a 为 `scoreQ`（`base:'fullFlush'`、`mode:'discard'`、`activeOpponents:1`，target `total`=4），练习可能 1 或 4 分按 4 的查大；b 流局未听牌者本副普通杠分按退杠取消；c 依 10.4.1c：已三家胡牌本副结束，不查叫不退杠，未胡者普通杠分仍有效。
- `sc-11-3` 特殊杠分与活跃人数（sc-11-3-a/b/c）：a 即时雨——手中已有坎、报碰后再杠无普通杠分、胡牌后仍计根；b `scoreQ`（`fullFlush` 自摸、`activeOpponents:2`，每家 4+1=5，`total`=10）；c 一炮多响各算各的胡牌分，杠上炮每人 2 分则点炮者合付 4 分，并注明杠分转移另行处理。
- 全部为原创中英文表述，简体“胡牌”，解释展示计算；表述限定“本 2024 竞赛规则/本规则”，未泛化桌规。

## 实际验证（均实际运行）
在 `mahjong-gym-prototype/` 目录，使用任务指定的运行时 node（本机 `node` 不在 PATH）：
- `.../node --check course/bridge-content-source.cjs` → 通过。
- `.../node course/test-sichuan-content.cjs --chapters=11 --lessons=37 --questions=111` → `PASS Sichuan content {"chapters":11,"lessons":37,"questions":111}; unique IDs, bilingual content, all scoring choices validated`。
- 回归：test-sichuan-score / test-sichuan-rules / test-sichuan-round / test-engine / test-round / test-hk-rules 全部 OK。

## 风险与说明
- sc-11-2-a 用 `scoreQ` 表达查大金额：计算器语义是“清一色点炮=4”，与查叫赔付（未听者按最高可能分支付）借同一数值，解释文字已按查叫口径说明；若 Codex 认为题型语义混淆可改回普通选择题。
- 即时雨（10.2.4）的“报碰后再杠”机制按任务规格的表述转写，未自行扩展标准原文；请 Codex 对照 2024 规则原文复核“碰后加杠不计普通杠分、胡牌后仍计根”的措辞。
- 呼叫转移金额、平分补足与三家胡杠分有效均按任务规格（8.6.1c、9.3.3–9.3.4、10.4.1c）编写，未访问标准 PDF 原文，数值需 Codex 独立核对。
- 编辑过程中一度把 sc-10 收尾括号弄坏并已修复；文件现通过 `node --check` 与全部测试。`bridge-data.js` 未动，留待 Codex 生成。
