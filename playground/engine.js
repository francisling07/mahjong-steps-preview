// 三玩法共用操练场：分支情境纯状态引擎。状态只含 scenarioId 与 history，current/choose 从 history 重放求当前位置。
// 浏览器读取 globalThis.MahjongPlaygroundEngine.createEngine；Node 通过 require 取 module.exports.createEngine。
// createEngine 在构造时对数据契约做校验，不合规抛含路径的 TypeError；输入与源数据均深拷贝隔离，运行期不修改输入。
// 纯函数：非法/伪造状态安全返回 null 或 {accepted:false}，不抛异常、不执行情境数据中的代码。

(function (global) {
  'use strict';

  function copy(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function plain(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value) &&
      (Object.getPrototypeOf(value) === Object.prototype || Object.getPrototypeOf(value) === null);
  }

  function nonEmpty(value) {
    return typeof value === 'string' && value.trim().length > 0;
  }

  function fail(path, message) {
    throw new TypeError(path + ': ' + message);
  }

  function has(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }

  // 三语文本对象：zh/tw/en 必须全部非空，不允许默认补英文。
  function checkText(value, path) {
    if (!plain(value)) {
      fail(path, '必须是 {zh,tw,en} 文本对象');
    }
    var langs = ['zh', 'tw', 'en'];
    for (var i = 0; i < langs.length; i++) {
      if (!nonEmpty(value[langs[i]])) {
        fail(path + '.' + langs[i], '三语文本不能为空');
      }
    }
  }

  var TILE_RE = /^(?:[mps][1-9]|z[1-7]|f[1-8]|j1)$/;

  // hand 允许 0-14 张；普通牌单种最多 4 张，Joker(j1) 最多 8 张。
  function checkHand(hand, path) {
    if (!Array.isArray(hand)) {
      fail(path, 'hand 必须是牌 ID 数组');
    }
    if (hand.length > 14) {
      fail(path, 'hand 最多 14 张');
    }
    var counts = Object.create(null);
    for (var i = 0; i < hand.length; i++) {
      var tile = hand[i];
      if (typeof tile !== 'string' || !TILE_RE.test(tile)) {
        fail(path + '[' + i + ']', '非法牌 ID：' + String(tile));
      }
      counts[tile] = (counts[tile] || 0) + 1;
      var limit = tile === 'j1' ? 8 : 4;
      if (counts[tile] > limit) {
        fail(path, tile + ' 超过上限 ' + limit + ' 张');
      }
    }
  }

  function isTerminal(node) {
    return has(node, 'result');
  }

  function legalActions(node) {
    var out = [];
    for (var i = 0; i < node.actions.length; i++) {
      if (node.actions[i].legal === true) {
        out.push(node.actions[i]);
      }
    }
    return out;
  }

  function checkAction(action, path, seenIds) {
    if (!plain(action)) {
      fail(path, '动作必须是对象');
    }
    if (!nonEmpty(action.id)) {
      fail(path + '.id', '动作 id 必须非空');
    }
    if (seenIds[action.id]) {
      fail(path + '.id', '同节点动作 id 重复：' + action.id);
    }
    seenIds[action.id] = true;
    checkText(action.label, path + '.label');
    if (!nonEmpty(action.kind)) {
      fail(path + '.kind', 'kind 不能为空');
    }
    if (action.legal === true) {
      if (!nonEmpty(action.next)) {
        fail(path + '.next', '合法动作必须指定 next');
      }
      checkText(action.explanation, path + '.explanation');
    } else if (action.legal === false) {
      if (action.next !== undefined) {
        fail(path + '.next', '非法动作不得有 next');
      }
      checkText(action.reason, path + '.reason');
    } else {
      fail(path + '.legal', 'legal 必须是布尔值 true/false');
    }
  }

  function checkNode(nodeId, node, path, isRoot) {
    if (!plain(node)) {
      fail(path, '节点必须是对象');
    }
    checkHand(node.hand, path + '.hand');
    if (!plain(node.table)) {
      fail(path + '.table', 'table 必须是普通 JSON 对象');
    }
    if (isTerminal(node)) {
      var result = node.result;
      if (!plain(result)) {
        fail(path + '.result', 'result 必须是对象');
      }
      checkText(result.title, path + '.result.title');
      checkText(result.summary, path + '.result.summary');
      if (has(node, 'actions')) {
        fail(path + '.actions', '终点节点不能有 actions');
      }
      return;
    }
    checkText(node.prompt, path + '.prompt');
    if (!Array.isArray(node.actions) || node.actions.length === 0) {
      fail(path + '.actions', '非终点节点必须有非空 actions');
    }
    var seenIds = Object.create(null);
    for (var i = 0; i < node.actions.length; i++) {
      checkAction(node.actions[i], path + '.actions[' + i + ']', seenIds);
    }
    if (isRoot && legalActions(node).length < 2) {
      fail(path + '.actions', '根节点至少需要两个合法动作');
    }
  }

  // 合法动作图：全节点 DFS 检查无环、next 存在、每条合法路径到达终点（含所有可达与不可达节点）。
  function checkGraph(scenario, path) {
    var nodes = scenario.nodes;
    var color = Object.create(null); // undefined=未访问 gray=在栈 black=已完成

    function visit(nodeId, trail) {
      if (color[nodeId] === 'gray') {
        fail(path + '.nodes', '合法动作图有环：' + trail + ' -> ' + nodeId);
      }
      if (color[nodeId] === 'black') {
        return;
      }
      color[nodeId] = 'gray';
      var node = nodes[nodeId];
      if (isTerminal(node)) {
        color[nodeId] = 'black';
        return;
      }
      var legal = legalActions(node);
      if (legal.length === 0) {
        fail(path + '.nodes.' + nodeId, '非终点节点没有合法动作，合法路径无法到达终点');
      }
      for (var i = 0; i < legal.length; i++) {
        var next = legal[i].next;
        if (!has(nodes, next)) {
          fail(path + '.nodes.' + nodeId + '.actions', 'next 指向不存在的节点：' + String(next));
        }
        visit(next, trail + ' -> ' + next);
      }
      color[nodeId] = 'black';
    }

    var ids = Object.keys(nodes);
    for (var i = 0; i < ids.length; i++) {
      if (color[ids[i]] === undefined) {
        visit(ids[i], ids[i]);
      }
    }
  }

  function checkScenario(scenario, path) {
    if (!plain(scenario)) {
      fail(path, '情境必须是对象');
    }
    if (!nonEmpty(scenario.id)) {
      fail(path + '.id', '情境 id 必须非空');
    }
    if (['hk', 'sc', 'am'].indexOf(scenario.mode) === -1) {
      fail(path + '.mode', 'mode 只允许 hk/sc/am');
    }
    checkText(scenario.title, path + '.title');
    checkText(scenario.intro, path + '.intro');
    if (!plain(scenario.nodes) || Object.keys(scenario.nodes).length === 0) {
      fail(path + '.nodes', 'nodes 必须是非空对象');
    }
    if (!nonEmpty(scenario.start) || !has(scenario.nodes, scenario.start)) {
      fail(path + '.start', 'start 必须是存在的节点');
    }
    var ids = Object.keys(scenario.nodes);
    for (var i = 0; i < ids.length; i++) {
      checkNode(ids[i], scenario.nodes[ids[i]], path + '.nodes.' + ids[i], ids[i] === scenario.start);
    }
    checkGraph(scenario, path);
  }

  function createEngine(scenarios) {
    if (!Array.isArray(scenarios)) {
      throw new TypeError('createEngine: scenarios 必须是数组');
    }
    var seenIds = Object.create(null);
    for (var i = 0; i < scenarios.length; i++) {
      checkScenario(scenarios[i], 'scenarios[' + i + ']');
      if (seenIds[scenarios[i].id]) {
        throw new TypeError('scenarios[' + i + '].id: 情境 id 重复：' + scenarios[i].id);
      }
      seenIds[scenarios[i].id] = true;
    }
    var data = copy(scenarios); // 与外部数据彻底隔离；后续操作不修改原始输入。
    var store = Object.create(null);
    for (var j = 0; j < data.length; j++) {
      store[data[j].id] = data[j];
    }

    function scenarioOf(id) {
      return typeof id === 'string' && has(store, id) ? store[id] : null;
    }

    // 状态形状：只允许 scenarioId + history 两个键；history 逐项必须是字符串动作 ID。
    function shaped(state, sc) {
      if (!plain(state)) {
        return false;
      }
      var keys = Object.keys(state);
      if (keys.length !== 2 || !has(state, 'scenarioId') || !has(state, 'history')) {
        return false;
      }
      if (state.scenarioId !== sc.id || !Array.isArray(state.history)) {
        return false;
      }
      for (var i = 0; i < state.history.length; i++) {
        if (typeof state.history[i] !== 'string') {
          return false;
        }
      }
      return true;
    }

    // 从 start 重放 history；任何一步不是当时节点的合法动作即视为伪造，返回 null。
    function replay(sc, state) {
      var node = sc.nodes[sc.start];
      for (var i = 0; i < state.history.length; i++) {
        if (isTerminal(node)) {
          return null;
        }
        var moved = false;
        for (var j = 0; j < node.actions.length; j++) {
          var action = node.actions[j];
          if (action.id === state.history[i] && action.legal === true) {
            node = sc.nodes[action.next];
            moved = true;
            break;
          }
        }
        if (!moved) {
          return null;
        }
      }
      return node;
    }

    function findAction(node, actionId) {
      for (var i = 0; i < node.actions.length; i++) {
        if (node.actions[i].id === actionId) {
          return node.actions[i];
        }
      }
      return null;
    }

    var api = {
      list: function () {
        return data.map(function (s) {
          return { id: s.id, mode: s.mode, title: copy(s.title), intro: copy(s.intro) };
        });
      },
      start: function (id) {
        var sc = scenarioOf(id);
        return sc ? { scenarioId: sc.id, history: [] } : null;
      },
      current: function (state) {
        if (!plain(state)) {
          return null;
        }
        var sc = scenarioOf(state.scenarioId);
        if (!sc || !shaped(state, sc)) {
          return null;
        }
        var node = replay(sc, state);
        if (!node) {
          return null;
        }
        return {
          scenarioId: sc.id,
          mode: sc.mode,
          title: copy(sc.title),
          intro: copy(sc.intro),
          node: copy(node),
          done: isTerminal(node)
        };
      },
      choose: function (state, actionId) {
        var invalid = { state: null, accepted: false, reason: 'invalid', feedback: null, done: false };
        if (!plain(state)) {
          return invalid;
        }
        var sc = scenarioOf(state.scenarioId);
        if (!sc || !shaped(state, sc)) {
          return invalid;
        }
        var node = replay(sc, state);
        if (!node) {
          return invalid;
        }
        var kept = copy(state); // 原状态的新副本：动作无效/非法/已终点时返回。
        if (isTerminal(node) || typeof actionId !== 'string') {
          return { state: kept, accepted: false, reason: 'invalid', feedback: null, done: false };
        }
        var action = findAction(node, actionId);
        if (!action) {
          return { state: kept, accepted: false, reason: 'invalid', feedback: null, done: false };
        }
        if (action.legal === false) {
          return { state: kept, accepted: false, reason: 'illegal', feedback: copy(action.reason), done: false };
        }
        var nextNode = sc.nodes[action.next];
        return {
          state: { scenarioId: sc.id, history: state.history.concat([actionId]) },
          accepted: true,
          reason: 'accepted',
          feedback: copy(action.explanation),
          done: isTerminal(nextNode)
        };
      },
      restart: function (state) {
        if (!plain(state)) {
          return null;
        }
        var sc = scenarioOf(state.scenarioId);
        if (!sc || !shaped(state, sc)) {
          return null;
        }
        return replay(sc, state) ? { scenarioId: sc.id, history: [] } : null;
      }
    };
    return api;
  }

  var exportsObj = { createEngine: createEngine };
  global.MahjongPlaygroundEngine = exportsObj;
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exportsObj;
  }
})(globalThis);
