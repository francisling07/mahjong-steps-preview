# Worker 报告 — T528 美式麻将课程内容：第一至三章

日期：2026-11-08。Worker：OpenCode（local）。仅新增两个文件，未修改任何既有文件。

## 变更文件

- 新增 `mahjong-gym-prototype/course/american-part1.js`：`MahjongAmericanPart1` 数据，3 章 × 4 课 × 3 题 = 36 题，普通脚本 + CommonJS 双载。
- 新增本报告 `mahjong-gym-prototype/course/worker-american-part1.md`。

## 执行命令与结果

系统 PATH 无 `node`，使用 Codex 运行时自带 Node。

1. `node --check mahjong-gym-prototype/course/american-part1.js`（node v24.22.1）
   - 退出码 0。
2. Node 加载检查（临时脚本 `check-t528.cjs`，require 后逐条断言，脚本在系统临时目录，不入库）：
   - 退出码 0，输出：
     - `chapters: 3 lessons: 12 questions: 36`
     - 每课可见牌面题数均为 2–3（≥2 达标）
     - `ALL CONTRACT CHECKS PASSED`
   - 断言覆盖：章节/课/题数量；ID 依序 `am-1-1`…`am-3-4`、`am-x-y-a/b/c` 且全局唯一；`title/desc/intro/prompt/explanation` 三语非空；choice 三选项 `a/b/c` + 合法 `answerId`；tile-pick 牌数 5–14、`selectionCount` ∈ {1,3}、`answerIndexes` 等长升序互异且在范围内；sequence 选项 id 与 `answerOrder` 全排列；全部牌 ID 匹配 `/^(?:[mps][1-9]|z[1-7]|f[1-8]|j1)$/`；普通牌每种 ≤4、`f*`/`j1` ≤8；每章非 choice ≥2；`globalThis.MahjongAmericanPart1` 挂载成功。

## 内容结构

- 第 1 章 am-1 牌集与区别：数牌/字牌辨认、花牌与 8 张 Joker、胡牌以年度卡为准（14 张原创样例明示“四组一对”不足以胡）、牌集回顾。
- 第 2 章 am-2 年度卡读法：single/pair/pung/kong/quint 术语、颜色分门惯例、字母与花牌记号、C 隐手与整行 14 张匹配。
- 第 3 章 am-3 Charleston：首轮右→对家→左（sequence 排序）；第二轮全桌同意、左→对家→右（sequence 排序）、盲传仅最后一步且仍 3 张；courtesy pass 对家协商 0–3 张；Joker 全程不可传；综合择牌情境。
- 题型：choice 23、tile-pick 11、sequence 2；所有 choice 的 options 均带三语 `label`，另附加 `tile` 字段（沿用 data.js 中 option.tile 的既有 UI 约定）。tile-pick 均给出明确唯一目标（如“手牌中唯一的三张相同”“仅有的三张条子”）。

## 事实来源

- 本地设计文档 `mahjong-gym-prototype/美国麻将课程设计与来源.md`（未联网）：8 Joker、8 花牌、胡牌以年度卡为准、Charleston 规则摘要（与任务规格一致：首轮右/对/左；第二轮需全桌同意，左/对/右；盲传仅最后一步仍 3 张；courtesy pass 对家协商 0–3；Joker 不可传）。
- 合法牌 ID 取自 `tile-art.js`（z1-z4 风、z5-z7 箭、f1-f8 花、j1）。
- 未复制任何真实 NMJL 年度卡牌型；展示的组合均在 intro/prompt 中标注“原创教学样例，非官方年度牌型”。未写入具体年度卡的字母数值映射（如 S=1/4/7 一类），仅描述“字母代表一类牌、花朵符号代表花牌”的通用读法，避免臆造。

## 风险与遗留

- tile-pick 答案按索引判定；若 UI 对 tiles 做排序/去重渲染，需确认保持原顺序（数据本身不重复乱序）。
- “颜色=门”“字母/花朵记号”按设计文档的通用摘要表述，正式对局仍应以玩家当年卡图例为准（课内已提示）。
- 牌型卡具体规则（Joker 使用限制细节、鸣牌等）超出本任务 1–3 章范围，后续章节需覆盖。
- 未调用其他 Agent，未提交/推送，未改动读取文件与调度器。
