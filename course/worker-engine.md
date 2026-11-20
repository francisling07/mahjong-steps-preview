# T517 Worker 报告：课程引擎实现

## 实际修改文件
- `mahjong-gym-prototype/course/engine.js`（新建）：课程引擎，浏览器普通脚本挂载 `globalThis.MahjongCourseEngine`，同时支持 CommonJS require（Node 下相对 require `./data.js` 与 `../meld.js`）。实现 `listLessons`、`getLesson`、`grade`、`emptyProgress`、`normalizeProgress`、`recordAnswer`、`lessonComplete`、`nextLesson`。
- `mahjong-gym-prototype/course/worker-engine.md`（本报告）。

未修改测试、题库、meld.js、既有网站与调度器文件；未提交、推送、部署。

## 实际运行命令与退出码
Node：`node`
- `<Node> --check mahjong-gym-prototype/course/engine.js` → 退出码 0
- `<Node> mahjong-gym-prototype/course/test-engine.cjs` → 退出码 0，输出 `PASS: 9 lessons / 27 authored questions, all answers, retries, review, completion, persistence boundaries and immutability`
- 附加自测（非任务要求）：用 `node:vm` 在无 `module` 的上下文按 meld.js → data.js → engine.js 顺序加载并调用 listLessons/grade/nextLesson → 输出 `BROWSER-MODE PASS`，确认浏览器路径不依赖 require。

## 实现要点
- 判定复用现有确定性模块：complete 用 `isBasicWinningHand(hand+tile)`，pick 用 `classifyMeld(所选牌)`；未新增任何规则逻辑。
- schema 校验先于答案检查：非法题面（非对象、未知 type、非法 options/hand/tiles/count/meld 组合）一律 invalid；合法题面下 answer 为 null/undefined 才返回 incomplete。
- pick 索引要求整数、去重、在范围内；数量小于 count 为 incomplete，大于 count 为 invalid；仅允许 2/pair 或 3/triplet|sequence。
- 进度不可变：`normalizeProgress`/`recordAnswer` 全程构造新数组与新对象，不修改输入 progress 或题目。
- `recordAnswer` 先规范化再查找题目；correct 加入 solved 并移出 review，wrong 反之，且仅这两种更新 lastLessonId；invalid/incomplete/未知题号状态不变；每次返回全新 progress。

## 限制
- 题库加载时按章节顺序建索引；重复 lesson id 会跳过后续项（现有题库无重复）。
- complete 选项的 tile 不预校验牌面合法性，非法牌面由 `isBasicWinningHand` 返回 false 判为 wrong（现有题库不受影响）。
- 空 questions 的 lesson 视为未完成；现有 9 课均为 3 题。
- 未做浏览器实机页面接入（本任务范围仅引擎模块）。
