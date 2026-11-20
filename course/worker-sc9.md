# T524 Worker 报告：四川课程第九章 特殊加番与组合

## 修改文件
1. `course/bridge-content-source.cjs`
   - 在 sc-8 之后追加独立的 `sichuan.push(chapter('sc-9',…))`，共 4 课 12 题，ID 为 `sc-9-1-a` … `sc-9-4-c`，全部唯一，沿用现有 `chapter/lesson/Q/scoreQ` 辅助函数与 `L/O/P` 结构；导出与已有 8 章内容未改动。
   - 修复原有语法错误：sc-8 的 push 收尾原为 `]);`（多出一个 `]`，导致整个文件无法通过 `node --check`），改为 `);`。该行在本任务前即存在且使文件解析失败。
2. `course/worker-sc9.md`（本报告）

## 课程内容概要
- `sc-9-1` 金钩钓与根：事件题强调“四组碰杠＋单钓将、胡牌成立后才算金钩钓，并非任何单骑等待自动是金钩钓”；`scoreQ` 大对子 2 分 × 金钩钓加倍＝主体 4 分（points）；根的定义为四张同牌归同一家。
- `sc-9-2` 杠上炮与抢杠：事件题区分“开杠补牌后打出的牌点炮”与“和别家加杠的第四张牌”；两个 `scoreQ` 分别使用 `kongDiscard`、`robKong`，普通主体 1 分单项加倍后均为 2 分（points），并注明杠上炮的普通杠分转移属另项结算、本题不计。
- `sc-9-3` 海底与最后牌：事件题分辨最后一张自摸与最后一张打出被胡；`scoreQ` 普通 1 分＋海底加倍＋自摸底分 1，三位未胡对手共付 9 分（total）；清一色 4 分＋海底加倍，点炮者付 8 分（total）。
- `sc-9-4` 组合与封顶：`scoreQ` 清一色 4＋一根＋海底未封顶 16、主体按 8（points，含封顶说明）；事件题说明两个主体番种按较高分值取、不相加；`scoreQ` 大对子 2＋一根＋抢杠加倍，主体 8 分（points）。
- 章节与课程 intro 均说明这是“已确认牌型后的算分练习”，不暗示自动识别任意手牌；界面用简体“胡牌”。每题的取值字段在题面中标明（points 或 total）。

## 实际运行的命令与结果（在 mahjong-gym-prototype/ 下）
1. `node --check course/bridge-content-source.cjs` — 通过（修复 sc-8 收尾的 `]);` 后无输出、退出码 0）。
2. `node course/test-sichuan-content.cjs` — 输出：`PASS nine Sichuan chapters, 31 lessons, 93 questions; unique IDs, bilingual content, all scoring choices validated`。即 9 章 31 课 93 题、sc-9 四课各三题、所有 scoreQ 数值与 `sichuan-score.js` 计算结果一致且选项不重复。
3. 额外独立核对：直接调用 `SichuanLearningScore.score` 验证七道分值题，结果依次为 4、2、2、9、8、8、8，与题面答案一致。

## 未修改内容
- 未改 `bridge-data.js`、测试、UI、`sichuan-score.js`、调度器与香港课程；未运行生成器；未提交。

## 未解决问题 / 风险
- 三语 `tw` 转换与 `bridge-data.js` 重新生成留待 Codex 执行。
- 抢杠题按计算器语义使用 `mode:'discard'`（加杠者独付），与表列“单项加倍后主体 2 分”一致；若正式规则文本对抢杠支付对象另有细则，以 Codex 对照 2024 规则原文的验收为准。
- 修复的 sc-8 收尾 `]);`→`);` 属既有语法错误，超出“仅新增”字面范围但为使文件可解析所必需，改动一处一行。
