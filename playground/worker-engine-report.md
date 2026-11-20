# T533 Worker 报告：共用操练场纯状态引擎

## 变更文件（仅任务允许的三个新文件，未改动其他任何文件）

- 新增 `playground/engine.js`：分支情境纯状态引擎，浏览器/CommonJS 双载。
- 新增 `qa/playground-engine-check.cjs`：独立 Node assert 检查。
- 新增 `playground/worker-engine-report.md`：本报告。

## 实现要点

- `createEngine(scenarios)`：逐项校验数据契约，不合规抛含 `scenarios[i].nodes.x.actions[j].field` 路径的 `TypeError`；校验后 `JSON` 深拷贝存储，与外部数据完全隔离。
- 契约校验覆盖：`mode∈{hk,sc/am}`、三语非空（title/intro/prompt/label/explanation/reason/result.title/result.summary）、牌 ID 正则 `[mps][1-9]|z[1-7]|f[1-8]|j1`、普通牌 ≤4 张、`j1` ≤8 张、hand 0–14、table 为普通对象、非终点必有 prompt+非空 actions、终点必有 result 且无 actions、合法动作必有存在的 next+三语 explanation、非法动作必无 next 且有三语 reason、动作 id 同节点唯一、情境 id 唯一、根节点 ≥2 合法动作、合法动作图全节点 DFS 无环且每条合法路径到终点（死端与悬空 next 均拒绝）。
- 状态只含 `{scenarioId, history}`，形状严格（多一键如 `nodeId` 即视为伪造）；`current`/`choose`/`restart` 一律从 history 逐步重放，任一步不是当时节点合法动作即拒绝。
- `choose`：合法→新 state+accepted+feedback=explanation 副本+done；节点内非法动作→原状态新副本+illegal+feedback=reason 副本、不推进；伪造状态→`state:null`；状态有效但动作不存在/类型非法/已终点→原状态副本+invalid。输入永不被修改。
- 全程无 `eval`/函数调用执行情境数据；运行期非法输入返回 `null`/`{accepted:false}` 不抛异常。

## 实际执行命令与退出码

本机 PATH 无 `node`，使用 Codex 运行时 Node `v24.22.1`（`…/Codex/artifact-sessions/runtime-generations/generation-KSJ9dN/runtime/bin/node`）：

```sh
node --check mahjong-gym-prototype/playground/engine.js   # exit=0
node mahjong-gym-prototype/qa/playground-engine-check.cjs # exit=0
# 输出：PASS playground engine: branch/replay/forgery/immutability/contract checks on frozen + live fixtures, dual-load verified
```

## 检查覆盖的边界

- 两条合法分支（hk-1 keep-a→ending-a、keep-b→mid→go-c→ending-b；am-2 a1/a2 到不同终点）与 `done` 标志。
- 非法动作（opening.bad、mid.oops）返回 illegal+reason 副本、状态深相等但不推进、不入历史。
- restart 到同情境起点（含终点后重启）。
- 多步历史重放、跳过节点的动作 ID、越过终点、终态后 choose、重复选择。
- 伪造/空值/越界拒绝：null、undefined、数组、字符串、数字、缺键、多键（nodeId）、未知情境 id、history 非数组、history 项为对象/null/数字、choose 动作 ID 非字符串。
- 不可变性：输入数据 `deepFreeze` 后全流程通过（引擎零修改输入）；返回值就地污染后重新获取不变；创建后修改原始数据不影响引擎；返回的 state/对象均为新副本（引用不等、深相等）。
- 建模错误 24 例逐个断言 `TypeError` 且信息含路径：重复情境 id、空 id、非法 mode、缺三语（title.tw/intro.en/reason.tw/explanation/result.summary）、start 悬空、next 丢节点、环、根节点仅 1 合法动作、节点内动作 id 重复、非法动作带 next、终点带 actions、非终点无 prompt/actions、死端无合法动作、legal 非布尔、非法牌（x9/m0/z8/f9/j2）、超 14 张、普通牌 5 张、Joker 9 张、table 为数组、hand 为字符串、节点非对象。
- 合法边界：14 张（含 8 Joker）通过；0 张终点手牌通过；`createEngine([])` 通过。
- 双载：`require` 得 `module.exports={createEngine}`；vm 无 `module` 环境加载后 `globalThis.MahjongPlaygroundEngine.createEngine` 可用并能跑通流程。

## 已知限制

- `plain()` 沿用现有引擎的原型校验（`Object.prototype`/`null`），跨 realm 对象（如 vm 沙箱外构造的数据）会被视为非法——与 `course/sichuan-round-engine.js` 行为一致，浏览器内不受影响。
- `JSON` 深拷贝意味着拒绝函数、循环引用与 `undefined` 语义（`next: undefined` 等同缺失，会被按契约报错），符合"普通 JSON 对象"契约但比结构化克隆更严。
- `restart` 要求状态可完整重放；已损坏历史的状态返回 null（无法仅凭 scenarioId 重启），按任务"无效返回 null"从严执行。
- 未做 UI、未加载真实操练场课程数据；`table` 内容不做任何规则校验，原样透传。
