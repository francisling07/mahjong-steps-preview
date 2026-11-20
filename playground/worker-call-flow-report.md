# T535 Worker 报告：对手每张弃牌后暂停供观察

日期：2026-11-08 · Worker：OpenCode（实现者）

## 实际改动

### playground/full-engine.js
仅重写 `resolveDiscard`（原 181–188 行）：

- 新逻辑：`discarder!==0 && s.active[0]` 时直接 `s.pending={discarder,tile}; s.phase='claim'` 返回，即玩家仍在局内时每张对手弃牌都暂停，等待玩家 `pass`（界面“继续”）或合法叫牌。
- 玩家本人弃牌（`discarder===0`）与四川已胡退出（`s.active[0]===false`）走原路径：机器人胡牌按既有优先级处理，然后 `resolveAfterPass`（机器人碰杠）或 `nextTurn`。
- 删除了被新条件覆盖的 `humanWin`/`humanCalls` 死分支；其余接口（`start/available/act/runAuto/tilesInState`）、状态字段、合法动作规则与结算均未动。`available` 在 claim 阶段本就恒含 `{id:'pass',kind:'pass'}`，胡/吃/碰/杠按原有合法性与机器人胡牌优先级规则出现，无需修改。

### qa/playground-call-flow-check.cjs（新文件）
覆盖：三玩法固定种子对手弃牌后“无可叫牌仍暂停”、pending/牌河/历史事件核对、叫牌路径、四川已胡不再暂停、非法 action 拒绝且状态不变、牌张多重集合与分数零和逐步守恒。

## 验证命令与结果（均实际运行）

在 `mahjong-gym-prototype` 目录，使用指定 node 运行时：

1. `node --check playground/full-engine.js` — 通过（无输出）。
2. `node qa/playground-call-flow-check.cjs` — PASS。关键结果：
   - hk/sc/am seed=1 分别在 step 2（南家 z2）、step 3（南家 p6）、step 5（南家 p2）出现仅有 `pass` 的观察暂停。
   - 叫牌路径：hk seed=1 吃牌（step 71）、sc seed=1 碰牌（step 4）、am seed=1 碰/杠（step 9）均可执行并打到终局。
   - sc seed=2（胡牌优先策略）：玩家在 step 60 胡牌退出后，其余机器人自动打完至 `three-wins`，退出后再无任何 claim 暂停（claimsAfterExit=0）。
   - 三玩法非法 claim 动作（错误 id、turn 阶段动作）均 `accepted:false` 且输入与返回状态 JSON 不变；`pass` 被接受并正确推进。
3. `node qa/playground-full-check.cjs` — PASS：三玩法 120+80 局全部正常终局（无 safety-stop），牌张与分数守恒；hk 221 / sc 155 / am 138 次叫牌决策仍被触发。
4. 额外：`node qa/playground-full-ui-check.cjs` — PASS（未修改 UI，确认路由与完整流程未被破坏）。

## 限制与说明

- 观察暂停不窥视：暂停瞬间最后一个历史事件即为该弃牌，无后续摸牌事件；测试断言弃牌仍在牌河顶部且总牌数守恒。
- 若某机器人可胡该弃牌，`available` 沿用既有优先级规则暂不展示玩家的吃碰杠选项（与原行为一致，pass 后机器人依序胡牌）；玩家可选“继续”放行。
- 每局玩家侧操作步数增加（每张对手弃牌一次点击），`runAuto` 在 claim 阶段照常返回，不影响 300 步限制内的现有测试。
- pass 后若机器人胡牌/叫牌，仍由 `resolveAfterPass`/`botClaim` 按原优先级处理；本任务未改动机器人策略。
