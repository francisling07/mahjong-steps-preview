# T525 Worker 报告：四川课程第十章 行牌例外

## 修改文件
1. `course/bridge-content-source.cjs`
   - 在 sc-9 的 push 之后追加独立的 `sichuan.push(chapter('sc-10',…))`，共 3 课 9 题，ID 为 `sc-10-1-a` … `sc-10-3-c`，全部唯一；沿用现有 `chapter/lesson/Q` 辅助函数与 `L/O` 结构。全部为 `choice` 题，未引入新的题型或额外字段。
   - 纯新增：未改动 foundation、sc-1…sc-9、`optionalExchange`、`rounds`、导出与文件其他任何行。
2. `course/worker-sc10.md`（本报告）

## 课程内容概要
- `sc-10-1` 顺和（放过之后的限制）：三题分别考“放过后到下次摸牌前不能胡番数相同的牌”“番数更高仍可胡”“摸牌后限制解除”。题面先给明确场景（已打缺并听牌、放过 1 分普通牌型），解释均强调这是有时段的限制、不是整副永远不能胡，且与花猪无关。
- `sc-10-2` 一炮多响：三题分别辨识胡牌者（同时宣布的多家均可成为胡牌者）、续打（两家先胡后，尚在玩的一家继续，直至第三家胡或牌墙耗尽）、庄家（两位最先胡时点炮者成为下副庄家，题面标注标准第 3.4）。
- `sc-10-3` 定缺特殊情况：三题分别对应天缺（仍须在轮到自己摸牌前确定定缺花色）、从头到尾未打完定缺花色（不按花猪处罚，流局仍参加查叫）、已打缺并打过另一门后又摸回定缺花色（构成花猪：停和陪打并继续打缺）。intro 与解释均避免“凡未打缺都罚花猪”的概括。
- 全部使用简体“胡牌”，未出现“食糊”；intro 注明为本竞赛规则的教学。未触碰换三张内容与开关。

## 实际运行的命令与结果（在 mahjong-gym-prototype/ 下，node 为任务指定路径）
1. 修改前基线：`node course/test-sichuan-content.cjs` → `PASS Sichuan content {"chapters":9,"lessons":31,"questions":93}; …`。
2. `node --check course/bridge-content-source.cjs` → 无输出、退出码 0。
3. `node course/test-sichuan-content.cjs --chapters=10 --lessons=34 --questions=102` → `PASS Sichuan content {"chapters":10,"lessons":34,"questions":102}; unique IDs, bilingual content, all scoring choices validated`。该测试同时断言 sc-10 恰为 3 课且每课 3 题、ID 唯一、双语字段齐全。
4. 额外回归：`test-sichuan-rules`、`test-sichuan-score`、`test-sichuan-round`、`test-engine`、`test-hk-rules`、`test-round` 全部 PASS；并用脚本打印 sc-10 的课题 ID 序列确认为 `sc-10-1-a`…`sc-10-3-c` 顺序无误。

## 未修改内容
- 未改 `bridge-data.js`、任何测试、UI、规则引擎、调度器与香港课程；未运行生成器；未提交、推送或部署。

## 未解决问题 / 风险
- 未能直接核对 PDF 原文（未联网取基准文档）：顺和、一炮多响续打与庄家、三种定缺特殊情况的表述均严格依照任务规格的条款摘要（3.4、3.23–3.25、9.3.5、9.4）撰写；题面细节（如用 1 分与 2 分牌型对比番数高低）系编者自设场景，请 Codex 对照原文验收用词（尤其“番数更高”的比准口径是仅主体番种还是含自摸加底，题面已规避该边界）。
- sc-10-1-b 假设同一听口前后两次可胡分值可不同（2 分对 1 分），为教学简化；实际由当时牌型成立情况决定。
- 繁体转换与 `bridge-data.js` 重新生成留待 Codex 执行。
