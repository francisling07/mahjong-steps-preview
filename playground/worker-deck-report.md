# T534 Worker 报告 — 确定性牌墙与发牌纯函数

日期：2026-11-08　Worker：local（opencode）

## 改动文件（仅允许范围内新增，未修改任何现有文件）

- 新增 `playground/deck.js`：`tilesFor` / `shuffle` / `deal` 纯函数；浏览器挂 `globalThis.MahjongPlaygroundDeck`，CommonJS 导出同一对象（沿用 engine.js 的 IIFE 双载风格）。
- 新增 `qa/playground-deck-check.cjs`：独立 Node assert 验证脚本。
- 新增 `playground/worker-deck-report.md`：本报告。

## 实现要点

- **牌集**：ID 与 tile-art.js/engine.js 的 `TILE_RE` 一致。`hk`=万筒条 1–9 + z1–z7 各 4 共 136；`sc`=万筒条各 4 共 108；`am`=136 + f1–f8 各 1 + j1 共 8 = 152。每次调用返回新数组；未知/非字符串 mode 返回 `null`。
- **PRNG**：xorshift32（状态与输出均为无符号 32 位）。**seed=0 特别处理**：xorshift32 在状态 0 上会退化为全 0 常数序列，故 seed=0 时内部状态改用黄金比例常数 `0x9E3779B9`；测试验证 seed=0 的洗牌既非原序也非其他种子的次序。不使用 `Math.random`。
- **shuffle**：Fisher–Yates，`i` 从 n−1 到 1，`j = rng() % (i+1)`（取模有轻微偏置，对教学操练场的确定性无碍）。seed 仅接受 0–4294967295 的整数，负数/浮点/字符串/NaN/Infinity/超范围/null 均返回 `null`。
- **deal**：对洗牌序列按每轮东→南→西→北各 1 张共 13 轮发牌，东家再得第 53 张（第 14 张），其余按原顺序为墙；`wall[0]` 即下一张摸牌。四家 14/13/13/13，手牌+墙合计守恒、不丢不重。返回全新数组，非法输入返回 `null`。

## 实际执行的命令与结果

本机 PATH 无独立 `node`（沿用前次 worker 结论），用 VS Code 自带 Electron 以 `ELECTRON_RUN_AS_NODE=1` 充当 Node（自报 v24.18.0）：

```sh
node --check mahjong-gym-prototype/playground/deck.js
# → 通过，无输出，退出码 0
node mahjong-gym-prototype/qa/playground-deck-check.cjs
# → PASS playground deck: tilesFor counts, invalid mode/seed, deterministic shuffle,
#    deal order, reference independence, no Math.random, dual-load
#    退出码 0
```

## 测试覆盖（全部实际通过）

1. 三玩法总张数 136/108/152；逐 ID 实体数（普通牌各 4、f1–f8 各 1、j1 共 8）；sc 不含字/花/Joker；ID 集合精确匹配。
2. `tilesFor` 每次返回新数组且互不共享引用。
3. 非法 mode（含 `'HK'`、`''`、数字、null、对象、数组、布尔）与非法 seed（负数、小数、NaN、±Infinity、2^32、字符串、null、对象、布尔）在三个函数上均返回 `null`；合法边界 seed 0/1/2147483647/4294967295 可用。
4. 同 mode+seed 逐张重现；seed=0 非原序；seed=0 与 1/2/99/123456789/4294967295 两两次序不同。
5. 发牌顺序与洗牌序列逐张比对（每轮东南西北、13 轮、东家第 53 张、`wall === shuffle.slice(53)`）；`wall[0]` 为下一张；手牌+墙多重集合与全牌集守恒。
6. 结果数组引用独立：修改一次 deal 结果不影响后续调用与手牌/墙长度。
7. 无全局 `Math.random` 依赖：源码（剔除行注释后）无 `Math.random`，且 monkey-patch `Math.random` 抛异常后 `deal` 仍正常且确定。
8. 浏览器双载：vm 空上下文加载 deck.js 后 `globalThis.MahjongPlaygroundDeck` 三函数可用，输出与 CommonJS 侧逐张一致。

## 调试记录

- 首跑失败 2 处（均为测试脚本问题，非实现缺陷）：① 源码扫描把头部中文注释里的字面 `Math.random` 误判为依赖，改为剔除 `//` 注释后再扫描；② vm 跨 realm 数组用 `assert/strict` 的 deepEqual 因原型不同失败，改用 JSON 串比对。

## 已知限制

- `rng() % (i+1)` 取模有轻微模偏置（108–152 张、32 位状态，偏差 <10⁻⁶ 量级），不影响确定性与验收要求。
- 未对 mode/seed 之外的输入做防御（API 只收两个原始参数）。
- 环境无独立 node，验证经 Electron-as-Node 执行；Codex 若装有原生 Node 可直接复跑同一命令。
