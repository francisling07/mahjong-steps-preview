// 四川关键局面教学对局：不可变状态，严格校验已答历史；结算由 SichuanLearningScore 计算。
// 浏览器读取全局 MahjongBridgeData.rounds / SichuanLearningScore；Node 通过相对路径 require。
// 纯函数：不修改源数据与输入；非法类型、空值、越界、伪造历史安全返回 null/{state:null}/false，不抛异常。

(function (global) {
  'use strict';

  var isModule = typeof module !== 'undefined' && module.exports;
  var rounds = isModule
    ? (require('./bridge-data.js') || {}).rounds || null
    : (global.MahjongBridgeData && global.MahjongBridgeData.rounds) || null;
  var scorer = isModule ? require('./sichuan-score.js') : global.SichuanLearningScore || null;

  function copy(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function plain(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value) &&
      (Object.getPrototypeOf(value) === Object.prototype || Object.getPrototypeOf(value) === null);
  }

  function scenario(id) {
    if (!Array.isArray(rounds) || typeof id !== 'string') {
      return null;
    }
    for (var i = 0; i < rounds.length; i++) {
      if (plain(rounds[i]) && Array.isArray(rounds[i].steps) && rounds[i].final && rounds[i].id === id) {
        return rounds[i];
      }
    }
    return null;
  }

  // 历史必须逐条等于对应步骤的正确答案；长度、游标、类型任何不符都视为伪造。
  function historyValid(sc, state) {
    if (!Number.isInteger(state.cursor) || state.cursor < 0 || state.cursor > sc.steps.length) {
      return false;
    }
    if (!Array.isArray(state.history) || state.history.length !== state.cursor) {
      return false;
    }
    for (var i = 0; i < state.cursor; i++) {
      if (typeof state.history[i] !== 'string' || state.history[i] !== sc.steps[i].correct) {
        return false;
      }
    }
    return true;
  }

  function validated(state) {
    if (!plain(state)) {
      return null;
    }
    var sc = scenario(state.scenarioId);
    if (!sc || !historyValid(sc, state)) {
      return null;
    }
    return sc;
  }

  function start(id) {
    return scenario(id) ? { scenarioId: id, cursor: 0, history: [] } : null;
  }

  function snapshot(state) {
    return { scenarioId: state.scenarioId, cursor: state.cursor, history: state.history.slice() };
  }

  // 错误选项或非法输入：不推进，返回原状态的新副本；正确：返回新状态。输入不被修改。
  function advance(state, answerId) {
    var sc = validated(state);
    if (!sc) {
      return { state: null, correct: false, reason: 'invalid' };
    }
    var next = snapshot(state);
    if (state.cursor === sc.steps.length || typeof answerId !== 'string') {
      return { state: next, correct: false, reason: 'invalid' };
    }
    if (answerId !== sc.steps[state.cursor].correct) {
      return { state: next, correct: false, reason: 'different' };
    }
    next.history.push(answerId);
    next.cursor += 1;
    return { state: next, correct: true, reason: 'correct' };
  }

  // 进行中返回当前步骤副本；结束返回最终描述与 SichuanLearningScore 结算（无输入则 null）。
  function current(state) {
    var sc = validated(state);
    if (!sc) {
      return null;
    }
    if (state.cursor < sc.steps.length) {
      return { done: false, cursor: state.cursor, total: sc.steps.length, step: copy(sc.steps[state.cursor]) };
    }
    var score = null;
    var kongPayment = null;
    if (scorer) {
      if (sc.final.scoreInput) {
        score = scorer.score(sc.final.scoreInput);
      }
      if (sc.final.kongInput) {
        kongPayment = scorer.kongPayment(sc.final.kongInput);
      }
    }
    return {
      done: true,
      cursor: state.cursor,
      total: sc.steps.length,
      title: copy(sc.title),
      description: copy(sc.final.description),
      score: score,
      kongPayment: kongPayment
    };
  }

  function verify(id, answers) {
    var sc = scenario(id);
    if (!sc || !Array.isArray(answers) || answers.length !== sc.steps.length) {
      return false;
    }
    var state = start(id);
    for (var i = 0; i < answers.length; i++) {
      var out = advance(state, answers[i]);
      if (!out.correct) {
        return false;
      }
      state = out.state;
    }
    var final = current(state);
    return !!final && final.done === true;
  }

  var api = { start: start, current: current, advance: advance, verify: verify };

  global.SichuanRoundEngine = api;

  if (isModule) {
    module.exports = api;
  }
})(typeof globalThis !== 'undefined'
  ? globalThis
  : typeof window !== 'undefined'
    ? window
    : typeof self !== 'undefined'
      ? self
      : this);
