// T533 操练场纯状态引擎独立检查：双合法分支、非法不推进、重启、历史重放、伪造与类型拒绝、
// 返回值与源数据不变、建模错误（重复 ID/环/丢节点/非法牌/缺三语等）拒绝、浏览器全局导出。
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const { createEngine } = require('../playground/engine.js');

const T = (s) => ({ zh: s + '中文', tw: s + '閏語', en: s + ' English' });

function fixtures() {
  return [
    {
      id: 'hk-1', mode: 'hk',
      title: T('标题'), intro: T('简介'),
      start: 'opening',
      nodes: {
        opening: {
          prompt: T('提示'), hand: ['m1', 'm2'], table: { discards: ['p3'] },
          actions: [
            { id: 'keep-a', label: T('留A'), kind: 'discard', legal: true, next: 'ending-a', explanation: T('解释A') },
            { id: 'keep-b', label: T('留B'), kind: 'discard', legal: true, next: 'mid', explanation: T('解释B') },
            { id: 'bad', label: T('错'), kind: 'discard', legal: false, reason: T('理由') }
          ]
        },
        mid: {
          prompt: T('中提示'), hand: ['j1', 'j1'], table: {},
          actions: [
            { id: 'go-c', label: T('去C'), kind: 'discard', legal: true, next: 'ending-b', explanation: T('解释C') },
            { id: 'oops', label: T(' Oops'), kind: 'pong', legal: false, reason: T('拒因') }
          ]
        },
        'ending-a': { hand: ['m1'], table: {}, result: { title: T('结A'), summary: T('要A') } },
        'ending-b': { hand: [], table: {}, result: { title: T('结B'), summary: T('要B') } }
      }
    },
    {
      id: 'am-2', mode: 'am',
      title: T('美标题'), intro: T('美简介'),
      start: 's',
      nodes: {
        s: {
          prompt: T('美提示'), hand: ['z1', 'z2', 'f1', 'j1'], table: {},
          actions: [
            { id: 'a1', label: T('A1'), kind: 'discard', legal: true, next: 't1', explanation: T('E1') },
            { id: 'a2', label: T('A2'), kind: 'discard', legal: true, next: 't2', explanation: T('E2') }
          ]
        },
        t1: { hand: [], table: {}, result: { title: T('T1'), summary: T('S1') } },
        t2: { hand: [], table: {}, result: { title: T('T2'), summary: T('S2') } }
      }
    },
    {
      id: 'sc-3', mode: 'sc',
      title: T('川标题'), intro: T('川简介'),
      start: 'only',
      nodes: {
        only: {
          prompt: T('川提示'), hand: ['s9'], table: {},
          actions: [
            { id: 'u1', label: T('U1'), kind: 'discard', legal: true, next: 'end', explanation: T('UE1') },
            { id: 'u2', label: T('U2'), kind: 'discard', legal: true, next: 'end', explanation: T('UE2') }
          ]
        },
        end: { hand: [], table: {}, result: { title: T('END'), summary: T('ENDS') } }
      }
    }
  ];
}

function deepFreeze(value) {
  if (value && typeof value === 'object') {
    Object.values(value).forEach(deepFreeze);
    Object.freeze(value);
  }
  return value;
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function buildScenario(mutate) {
  const scenarios = fixtures();
  mutate(scenarios);
  return scenarios;
}

function rejects(mutate, messagePart) {
  assert.throws(() => createEngine(buildScenario(mutate)), (error) => {
    assert(error instanceof TypeError, `应抛 TypeError：${messagePart}`);
    assert(String(error.message).includes(messagePart), `错误信息应含 "${messagePart}"，实际：${error.message}`);
    return true;
  }, `应拒绝：${messagePart}`);
}

// —— 构造与输入隔离 ——
{
  assert.throws(() => createEngine(undefined), TypeError);
  assert.throws(() => createEngine(null), TypeError);
  assert.throws(() => createEngine('hk-1'), TypeError);
  assert.throws(() => createEngine({ 0: fixtures()[0] }), TypeError);
  assert.doesNotThrow(() => createEngine([]));
}

// 冻结输入证明引擎全程零修改；操作后再改原数据也证明存储已深拷贝。
const frozen = deepFreeze(fixtures());
const engine = createEngine(frozen);
const live = fixtures();
const liveEngine = createEngine(live);

// —— list() ——
{
  const meta = engine.list();
  assert.equal(meta.length, 3);
  assert.deepEqual(meta.map((m) => m.id), ['hk-1', 'am-2', 'sc-3']);
  assert.deepEqual(Object.keys(meta[0]).sort(), ['id', 'intro', 'mode', 'title']);
  assert.deepEqual(meta[0].title, frozen[0].title);
  meta[0].title.zh = '污染';
  meta.push({ id: 'x' });
  assert.equal(engine.list()[0].title.zh, frozen[0].title.zh);
  assert.notEqual(engine.list(), engine.list());
  assert.deepEqual(engine.list(), createEngine(fixtures()).list());
}

// —— start() ——
{
  assert.deepEqual(engine.start('hk-1'), { scenarioId: 'hk-1', history: [] });
  for (const bad of ['nope', '', null, undefined, 0, {}, ['hk-1']]) {
    assert.equal(engine.start(bad), null, `start 应拒绝 ${JSON.stringify(bad)}`);
  }
}

// —— current() 起点与终点 ——
{
  const s0 = engine.start('hk-1');
  const cur = engine.current(s0);
  assert.deepEqual(Object.keys(cur).sort(), ['done', 'intro', 'mode', 'node', 'scenarioId', 'title']);
  assert.equal(cur.mode, 'hk');
  assert.equal(cur.done, false);
  assert.deepEqual(cur.node, frozen[0].nodes.opening);
  cur.node.hand.push('m9');
  cur.node.actions.length = 0;
  assert.deepEqual(engine.current(s0).node, frozen[0].nodes.opening);
  const a = engine.choose(s0, 'keep-a');
  const endCur = engine.current(a.state);
  assert.equal(endCur.done, true);
  assert.deepEqual(endCur.node, frozen[0].nodes['ending-a']);
  assert.equal(engine.current(undefined), null);
  assert.equal(engine.current(null), null);
}

// —— current() 伪造与非法状态一律 null，不抛异常 ——
{
  const forgeries = [
    null, undefined, 0, 'hk-1', [], ['hk-1', []],
    {}, { scenarioId: 'hk-1' }, { history: [] },
    { scenarioId: 'hk-1', history: [], nodeId: 'opening' },
    { scenarioId: 'nope', history: [] }, { scenarioId: 'hk-1', history: {} },
    { scenarioId: 'hk-1', history: ['keep-a', 'go-c'] },
    { scenarioId: 'hk-1', history: ['bad'] },
    { scenarioId: 'hk-1', history: ['ghost'] },
    { scenarioId: 'hk-1', history: ['keep-a', 'keep-b'] },
    { scenarioId: 'hk-1', history: [{ actionId: 'keep-a' }] },
    { scenarioId: 'hk-1', history: [null] },
    { scenarioId: 'am-2', history: ['go-c'] }
  ];
  for (const state of forgeries) {
    assert.equal(engine.current(state), null, `current 应拒绝 ${JSON.stringify(state)}`);
    assert.equal(engine.restart(state), null, `restart 应拒绝 ${JSON.stringify(state)}`);
    const out = engine.choose(state, 'keep-a');
    assert.equal(out.accepted, false);
    assert.equal(out.reason, 'invalid');
    assert.equal(out.state, null);
  }
}

// —— choose() 合法推进、双分支到不同终点、多步重放 ——
{
  const s0 = engine.start('hk-1');
  const snap = JSON.stringify(s0);
  const r1 = engine.choose(s0, 'keep-a');
  assert.equal(JSON.stringify(s0), snap);
  assert.equal(r1.accepted, true);
  assert.equal(r1.reason, 'accepted');
  assert.equal(r1.done, true);
  assert.deepEqual(r1.feedback, frozen[0].nodes.opening.actions[0].explanation);
  assert.deepEqual(r1.state, { scenarioId: 'hk-1', history: ['keep-a'] });
  assert.equal(engine.current(r1.state).node.result.title.zh, frozen[0].nodes['ending-a'].result.title.zh);

  const mid = engine.choose(s0, 'keep-b');
  assert.equal(mid.accepted, true);
  assert.equal(mid.done, false);
  assert.deepEqual(mid.state, { scenarioId: 'hk-1', history: ['keep-b'] });
  assert.deepEqual(engine.current(mid.state).node, frozen[0].nodes.mid);
  const endB = engine.choose(mid.state, 'go-c');
  assert.equal(endB.accepted, true);
  assert.equal(endB.done, true);
  assert.deepEqual(endB.state, { scenarioId: 'hk-1', history: ['keep-b', 'go-c'] });
  assert.equal(engine.current(endB.state).done, true);

  const r2 = engine.choose(s0, 'keep-a');
  const r2b = engine.choose(r1.state, 'go-c');
  assert.equal(r2b.accepted, false);
  assert.equal(r2b.reason, 'invalid');
  assert.equal(JSON.stringify(r2b.state), JSON.stringify(r1.state));
  assert.notEqual(r2b.state, r1.state);

  const am = engine.start('am-2');
  const w1 = engine.choose(am, 'a1');
  const w2 = engine.choose(am, 'a2');
  assert.equal(w1.done, true);
  assert.equal(w2.done, true);
  assert.equal(engine.current(w1.state).node.result.title.zh, 'T1中文');
  assert.equal(engine.current(w2.state).node.result.title.zh, 'T2中文');

  const nullState = engine.choose(undefined, 'keep-a');
  assert.equal(nullState.accepted, false);
  assert.equal(nullState.reason, 'invalid');
  assert.equal(nullState.state, null);
}

// —— choose() 非法动作不推进、动作不存在/类型越界 ——
{
  const s0 = engine.start('hk-1');
  const bad = engine.choose(s0, 'bad');
  assert.equal(bad.accepted, false);
  assert.equal(bad.reason, 'illegal');
  assert.deepEqual(bad.feedback, frozen[0].nodes.opening.actions[2].reason);
  assert.equal(bad.done, false);
  assert.deepEqual(bad.state, s0);
  assert.notEqual(bad.state, s0);
  assert.deepEqual(engine.current(bad.state).node, frozen[0].nodes.opening);

  const mid = engine.choose(s0, 'keep-b').state;
  const midBad = engine.choose(mid, 'oops');
  assert.equal(midBad.reason, 'illegal');
  assert.deepEqual(engine.current(midBad.state).node, frozen[0].nodes.mid);

  for (const ghost of ['ghost', '', null, undefined, 0, {}, ['keep-a']]) {
    const out = engine.choose(s0, ghost);
    assert.equal(out.accepted, false);
    assert.equal(out.reason, 'invalid');
    assert.equal(out.feedback, null);
    assert.deepEqual(out.state, s0);
  }
  const ended = engine.choose(s0, 'keep-a').state;
  const atEnd = engine.choose(ended, 'keep-a');
  assert.equal(atEnd.reason, 'invalid');
  assert.equal(atEnd.accepted, false);
  assert.deepEqual(atEnd.state, ended);
}

// —— restart() ——
{
  const s0 = engine.start('hk-1');
  const mid = engine.choose(s0, 'keep-b').state;
  assert.deepEqual(engine.restart(mid), { scenarioId: 'hk-1', history: [] });
  assert.deepEqual(engine.restart(s0), { scenarioId: 'hk-1', history: [] });
  assert.deepEqual(engine.current(engine.restart(mid)).node, frozen[0].nodes.opening);
  const ended = engine.choose(s0, 'keep-a').state;
  assert.deepEqual(engine.restart(ended), { scenarioId: 'hk-1', history: [] });
}

// —— 源数据与返回值不变：操作后修改原始输入不影响引擎 ——
{
  const before = JSON.stringify(liveEngine.list());
  const st = liveEngine.start('hk-1');
  const step = liveEngine.choose(st, 'keep-b');
  liveEngine.choose(step.state, 'oops');
  liveEngine.current(step.state);
  live.push('injected');
  live[0].nodes.opening.hand.push('m9');
  live[0].nodes.opening.actions[0].explanation.zh = '污染';
  live[0].nodes.opening.prompt = null;
  assert.equal(JSON.stringify(liveEngine.list()), before);
  assert.deepEqual(liveEngine.current(step.state).node, fixtures()[0].nodes.mid);
  step.state.history.push('go-c');
  assert.deepEqual(liveEngine.choose(st, 'keep-a').state, { scenarioId: 'hk-1', history: ['keep-a'] });
  assert.equal(JSON.stringify(liveEngine.list()), before);
}

// —— 建模错误拒绝（含路径的 TypeError）——
{
  rejects((sc) => { sc.push(clone(sc[0])); }, '情境 id 重复');
  rejects((sc) => { delete sc[0].id; }, 'scenarios[0].id');
  rejects((sc) => { sc[0].mode = 'jp'; }, 'scenarios[0].mode');
  rejects((sc) => { sc[0].title.tw = '  '; }, 'scenarios[0].title.tw');
  rejects((sc) => { delete sc[0].intro.en; }, 'scenarios[0].intro.en');
  rejects((sc) => { sc[0].start = 'ghost'; }, 'scenarios[0].start');
  rejects((sc) => { delete sc[0].nodes['ending-a']; }, 'next 指向不存在的节点');
  rejects((sc) => {
    sc[0].nodes.mid.actions[0].next = 'opening';
  }, '合法动作图有环');
  rejects((sc) => {
    sc[0].nodes.opening.actions = [sc[0].nodes.opening.actions[0], sc[0].nodes.opening.actions[2]];
  }, 'scenarios[0].nodes.opening.actions: 根节点至少需要两个合法动作');
  rejects((sc) => {
    sc[0].nodes.opening.actions.push(clone(sc[0].nodes.opening.actions[0]));
  }, '动作 id 重复');
  rejects((sc) => {
    sc[0].nodes.opening.actions[2].next = 'ending-a';
  }, '非法动作不得有 next');
  rejects((sc) => {
    delete sc[0].nodes.opening.actions[0].explanation;
  }, 'scenarios[0].nodes.opening.actions[0].explanation');
  rejects((sc) => {
    delete sc[0].nodes.opening.actions[2].reason.tw;
  }, 'scenarios[0].nodes.opening.actions[2].reason.tw');
  rejects((sc) => {
    sc[0].nodes['ending-a'].actions = [];
  }, '终点节点不能有 actions');
  rejects((sc) => {
    delete sc[0].nodes.mid.actions;
    delete sc[0].nodes.mid.prompt;
  }, 'scenarios[0].nodes.mid.prompt');
  rejects((sc) => {
    sc[0].nodes.mid.actions = [sc[0].nodes.mid.actions[1]];
  }, '没有合法动作');
  rejects((sc) => {
    sc[0].nodes.opening.actions[0].legal = 'yes';
  }, 'scenarios[0].nodes.opening.actions[0].legal');
  rejects((sc) => { sc[0].nodes.opening.hand = ['x9']; }, '非法牌 ID');
  rejects((sc) => { sc[0].nodes.opening.hand = ['m0']; }, '非法牌 ID');
  rejects((sc) => { sc[0].nodes.opening.hand = ['z8']; }, '非法牌 ID');
  rejects((sc) => { sc[0].nodes.opening.hand = ['f9']; }, '非法牌 ID');
  rejects((sc) => { sc[0].nodes.opening.hand = ['j2']; }, '非法牌 ID');
  rejects((sc) => {
    sc[0].nodes.opening.hand = Array(15).fill(null).map((_, i) => ['m1', 'm2', 'm3', 'm4', 's1', 's2', 's3', 's4', 'p1', 'p2', 'p3', 'p4', 'z1', 'z2', 'z3'][i]);
  }, 'hand 最多 14 张');
  rejects((sc) => { sc[0].nodes.opening.hand = ['m1', 'm1', 'm1', 'm1', 'm1']; }, 'm1 超过上限 4 张');
  rejects((sc) => {
    sc[0].nodes.opening.hand = Array(9).fill('j1');
  }, 'j1 超过上限 8 张');
  rejects((sc) => { sc[0].nodes.opening.table = []; }, 'table 必须是普通 JSON 对象');
  rejects((sc) => { sc[0].nodes.opening.hand = 'm1m2'; }, 'hand 必须是牌 ID 数组');
  rejects((sc) => {
    delete sc[0].nodes['ending-b'].result.summary;
  }, 'scenarios[0].nodes.ending-b.result.summary');
  rejects((sc) => { sc[0].nodes.opening = 'flat'; }, 'scenarios[0].nodes.opening: 节点必须是对象');
}

// —— 合法边界：14 张手牌、8 张 Joker、0 张手牌、终点无 prompt ——
{
  const sc = fixtures()[1];
  sc.nodes.s.hand = Array(8).fill('j1').concat(['m1', 'm1', 'm2', 'm2', 'm3', 'm3']);
  sc.nodes.t1.hand = [];
  assert.doesNotThrow(() => createEngine([sc]));
}

// —— 浏览器全局双载 ——
{
  const source = fs.readFileSync(path.join(__dirname, '..', 'playground', 'engine.js'), 'utf8');
  const context = vm.createContext({ console });
  vm.runInContext(source, context, { filename: 'playground/engine.js' });
  assert.equal(typeof context.MahjongPlaygroundEngine.createEngine, 'function');
  const vmData = vm.runInContext('(' + JSON.stringify(fixtures()) + ')', context);
  const viaGlobal = context.MahjongPlaygroundEngine.createEngine(vmData);
  assert.equal(viaGlobal.start('hk-1').scenarioId, 'hk-1');
}

console.log('PASS playground engine: branch/replay/forgery/immutability/contract checks on frozen + live fixtures, dual-load verified');
