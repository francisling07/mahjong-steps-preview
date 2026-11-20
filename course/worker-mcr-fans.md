# T536 Worker 报告 — 国标 81 番教学速查数据

## 修改文件（均在允许范围内，未改动其他文件）
- 新建 `mahjong-gym-prototype/course/mcr-fans.js`：浏览器 `globalThis.MahjongMCRFans` + Node `module.exports` 双载，导出 `{ SOURCE, fans, byNo, byId, groupByPoints }`。
  - `fans`：81 个全部冻结（数组、番对象、name/summary/excludes 均 `Object.freeze`）的对象，序号 1–81 唯一，分值 12 档，id 为稳定 kebab 英文；`name`、`summary` 均有非空 `zh/tw/en`，统一采用「和牌」用语（自检确认无「胡」字）。
  - `SOURCE`：记录官方中文 PDF（mindmahjong.com/MCR2021.pdf）与英文 PDF（mahjong-europe.org/mcr_ENa5.pdf）、2006 第一版 / 2014 第二版、8 分起和及花牌和牌后加分但不计起和的摘要，并声明中文文本为准、英文版不作中文解释优先来源、本模块为速查资料非自动裁定器。
  - `byNo(no)` 接受数字或数字字符串；`byId(id)`；两者对 null/undefined/NaN/越界/类型错误均返回 null 不抛错。`groupByPoints()` 忽略任意入参，返回冻结的 12 档新数组（分值 88→1 降序、档内按官方序号升序），调用方改动不影响底层数据。
  - `excludes`：仅收录有可靠依据的主要不计番序号（如大四喜 [38,49,60,61]、大三元 [54,59]、九莲宝灯 [22,56,62]、七对 [56,62,79] 等），未编造全量排除表。不计番依据 1998 规则条文的公开记述（zh.wikipedia「国标麻将番种列表」，与 2006/2014 文本同源）逐条核对；官方 PDF 直连下载在本环境失败，未做逐字比对。
- 新建 `mahjong-gym-prototype/course/test-mcr-fans.cjs`：独立数据测试，内置从任务文件逐条抄录的 81 项「序号:分值 简体名」期望表（非模块自证），另验证 id 唯一/格式、三语非空、无「胡」字、excludes 合法性与示例条目、byNo/byId 空值与非法输入、groupByPoints 的 12 档分值/顺序/档内序号/总数 81 及入参容错、数据冻结与查询后不变、SOURCE 双链接/版本/8 分/花牌要点，及关键番种解释抽查（九莲牌型、推不倒牌集、七星不靠结构、花牌不计起和等）。
- 本报告 `mahjong-gym-prototype/course/worker-mcr-fans.md`。

## 验证命令与真实结果
- `…/node --check mahjong-gym-prototype/course/mcr-fans.js` — 通过（无输出）。
- `…/node mahjong-gym-prototype/course/test-mcr-fans.cjs` — 输出：
  `PASS MCR 81 fans: 官方 81 项序号/分值/简体名逐条一致、三语完整、12 档分组、冻结数据与空值安全`
  （含上述全部断言；另外单独用脚本核对了 tw 字段无残留简体、zh 字段无「胡」字及繁体混入，结果 CLEAN。）

## 未解决问题 / 风险
- 两个官方 PDF 在本环境均无法直接下载，序号/分值/简体名严格按任务清单核对，但三语解释与 excludes 是依据规则条文的公开二手记述整理的原创教学摘要，建议 Codex 对照 PDF 抽查 20（七星不靠）、40（推不倒牌集）、43（无番和括注「花牌、庄家不计算在内」中「庄家」一词的原文语义）三条。
- 部分番种间的复合/排除细节在通行规则与 98 规则间存在争议（如一明杠一暗杠计分、必然门清番种自摸），本模块只列主要不计番，未收全量关系表。
- 模块未接入路由与课程 UI（按任务要求），加载顺序与页面集成由后续任务处理。
