# T516 Worker 报告：麻将基础牌组判断

## 修改文件
- `mahjong-gym-prototype/meld.js`（新建）：普通浏览器脚本 + CommonJS 双载（IIFE 挂载全局函数，末尾在 `module.exports` 存在时导出）。
  - `classifyMeld(tiles)`：校验数组、2/3 张、牌面 `m/p/s + 1-9`、`z + 1-7`（正则精确匹配，拒绝大小写、空格、`m10` 等）。两张全同为 `pair`；三张全同为 `triplet`；同数牌花色三个不同连续数字为 `sequence`（内部拷贝排序，不修改输入，不排序原数组）；字牌不判顺子；一切非法/不匹配返回 `null`，不抛错。
  - `isBasicWinningHand(tiles)`：仅接受恰好 14 张合法牌且每种最多 4 张，否则返回 false。依次尝试每种牌作将牌，剩余在计数表上做穷举回溯（每次取最小牌，分别尝试刻子与顺子，失败回退），遍历不同拆分而非贪心。仅判断"四个三张组加一对"的基础结构。
- `mahjong-gym-prototype/test-meld.cjs`（新建）：52 条断言，覆盖 pair、刻子、无序顺子、字牌伪顺子、跨花色、同花色不连续/重复、null/undefined/非数组/非法牌面/非法元素/张数错误、基础成牌、无法成牌、五张同牌、需要尝试不同将牌与不同拆分的牌例、输入不变性、重复调用无状态残留。
- `mahjong-gym-prototype/worker-report.md`（本文件）。

## 运行命令与结果
本机的 PATH 中没有独立的 `node` 可执行文件（已检查常见安装位置、shell 配置与 nvm/brew/volta 目录，均未安装）。改用 VS Code 自带 Electron 以 `ELECTRON_RUN_AS_NODE=1` 充当 Node（自报 `v24.18.0`）执行任务指定的验证命令：

- `node mahjong-gym-prototype/test-meld.cjs`（即 `ELECTRON_RUN_AS_NODE=1 "/Applications/Visual Studio Code.app/Contents/MacOS/Electron" mahjong-gym-prototype/test-meld.cjs`）：52 项全部 PASS，退出码 0。
- `node --check mahjong-gym-prototype/meld.js`：通过（CHECK OK）。
- 浏览器兼容补充检查：用 `vm` 在无 `module`/`require` 的裸上下文加载 `meld.js`，确认 `classifyMeld`、`isBasicWinningHand` 挂到全局且可正常返回 `sequence`。

## 已知限制
- 验证用的 Node 是 VS Code 内嵌 Electron 的 Node 运行时，非独立安装的 node；若 Codex 环境有真实 node，建议原样复跑上述两条命令。
- `isBasicWinningHand` 只判断基础结构（四组加一对），不含七对、十三幺等特殊牌型，也不含任何地区规则的起和、计分限制。
- 牌面视为符号字符串，不处理花色别名（如中文"萬"）或赤宝牌等扩展标记。
