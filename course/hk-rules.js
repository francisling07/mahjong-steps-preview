// 香港教学用结构、等待牌与积分纯函数（浏览器普通脚本 + Node CommonJS 双载）
// 浏览器需先加载 meld.js；Node 通过相对路径 require。
// 只判断牌型结构与积分表，不判断番数、禁例、弃牌限制或牌墙存量。

(function (global) {
  'use strict';

  var classifyMeld;
  if (typeof module !== 'undefined' && module.exports) {
    classifyMeld = require('../meld.js').classifyMeld;
  } else {
    classifyMeld = global.classifyMeld;
  }

  var TILE_RE = /^([mps][1-9]|z[1-7])$/;
  var SOURCES = ['previous', 'opposite', 'next'];
  var ORPHANS = ['m1', 'm9', 'p1', 'p9', 's1', 's9',
    'z1', 'z2', 'z3', 'z4', 'z5', 'z6', 'z7'];
  var ALL_TILES = (function () {
    var suits = ['m', 'p', 's'];
    var list = [];
    var i, n;
    for (i = 0; i < suits.length; i++) {
      for (n = 1; n <= 9; n++) {
        list.push(suits[i] + n);
      }
    }
    for (n = 1; n <= 7; n++) {
      list.push('z' + n);
    }
    return list;
  })();
  var PAY_TABLE = { 3: 32, 4: 64, 5: 96, 6: 128, 7: 192, 8: 256, 9: 384, 10: 512 };

  function isValidTile(tile) {
    return typeof tile === 'string' && TILE_RE.test(tile);
  }

  function isNumbered(tile) {
    return isValidTile(tile) && tile.charAt(0) !== 'z';
  }

  function tileNumber(tile) {
    return tile.charCodeAt(1) - 48;
  }

  // 每种实体牌（暗手 + 全部面子合计）最多 4 张；非法牌返回 null。
  function buildCounts(groups) {
    var counts = Object.create(null);
    var g, i;
    for (g = 0; g < groups.length; g++) {
      var tiles = groups[g];
      for (i = 0; i < tiles.length; i++) {
        var key = tiles[i];
        if (!isValidTile(key)) {
          return null;
        }
        counts[key] = (counts[key] || 0) + 1;
        if (counts[key] > 4) {
          return null;
        }
      }
    }
    return counts;
  }

  // 面子合法性：只认 type/tiles，额外字段（如 from）忽略。
  function validateMelds(melds) {
    if (!Array.isArray(melds) || melds.length > 4) {
      return false;
    }
    var i;
    for (i = 0; i < melds.length; i++) {
      var m = melds[i];
      if (!m || typeof m !== 'object' || Array.isArray(m) || !Array.isArray(m.tiles)) {
        return false;
      }
      if (m.type === 'chow') {
        if (m.tiles.length !== 3 || classifyMeld(m.tiles) !== 'sequence') {
          return false;
        }
      } else if (m.type === 'pung') {
        if (m.tiles.length !== 3 || classifyMeld(m.tiles) !== 'triplet') {
          return false;
        }
      } else if (m.type === 'kong') {
        if (m.tiles.length !== 4 || classifyMeld(m.tiles.slice(0, 3)) !== 'triplet'
          || m.tiles[3] !== m.tiles[0]) {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  }

  function collectMeldTiles(melds) {
    var tiles = [];
    var i, j;
    for (i = 0; i < melds.length; i++) {
      for (j = 0; j < melds[i].tiles.length; j++) {
        tiles.push(melds[i].tiles[j]);
      }
    }
    return tiles;
  }

  // 穷举回溯：每次取最小牌，尝试刻子或顺子，任何一种成功即成功。
  function canFormMelds(counts) {
    var smallest = null;
    var k;
    for (k in counts) {
      if (counts[k] > 0) {
        if (smallest === null || k < smallest) {
          smallest = k;
        }
      }
    }
    if (smallest === null) {
      return true;
    }
    if (counts[smallest] >= 3) {
      counts[smallest] -= 3;
      var okPung = canFormMelds(counts);
      counts[smallest] += 3;
      if (okPung) {
        return true;
      }
    }
    var suit = smallest.charAt(0);
    var num = smallest.charAt(1);
    if (suit !== 'z' && num !== '8' && num !== '9') {
      var next1 = suit + String.fromCharCode(num.charCodeAt(0) + 1);
      var next2 = suit + String.fromCharCode(num.charCodeAt(0) + 2);
      if ((counts[next1] || 0) > 0 && (counts[next2] || 0) > 0) {
        counts[smallest] -= 1;
        counts[next1] -= 1;
        counts[next2] -= 1;
        var okChow = canFormMelds(counts);
        counts[smallest] += 1;
        counts[next1] += 1;
        counts[next2] += 1;
        if (okChow) {
          return true;
        }
      }
    }
    return false;
  }

  // counts 为 3*(4-melds.length)+2 张暗手：去一对后全部拆成顺子或刻子。
  function canStandardWin(counts) {
    var pairKey;
    for (pairKey in counts) {
      if (counts[pairKey] >= 2) {
        counts[pairKey] -= 2;
        var ok = canFormMelds(counts);
        counts[pairKey] += 2;
        if (ok) {
          return true;
        }
      }
    }
    return false;
  }

  // 十三幺：13 种幺九牌每种至少 1 张，恰有 1 种 2 张，且无其他牌。
  function isThirteenOrphans(counts) {
    var pairSeen = false;
    var i;
    for (i = 0; i < ORPHANS.length; i++) {
      var c = counts[ORPHANS[i]] || 0;
      if (c === 1) {
        continue;
      }
      if (c === 2) {
        if (pairSeen) {
          return false;
        }
        pairSeen = true;
        continue;
      }
      return false;
    }
    var key;
    for (key in counts) {
      if (ORPHANS.indexOf(key) < 0) {
        return false;
      }
    }
    return pairSeen;
  }

  // 仅判断结构，绝不判断番数或禁例。非法输入返回 false，不修改输入。
  function isWinning(concealed, melds) {
    if (melds === undefined) {
      melds = [];
    }
    if (!Array.isArray(concealed) || !validateMelds(melds)) {
      return false;
    }
    if (concealed.length !== 14 - 3 * melds.length) {
      return false;
    }
    // 合计 counts 只用于每种牌最多 4 张的检查；拆牌只针对暗手。
    var counts = buildCounts([concealed, collectMeldTiles(melds)]);
    if (counts === null) {
      return false;
    }
    var concealedCounts = buildCounts([concealed]);
    if (concealedCounts === null) {
      return false;
    }
    if (melds.length === 0 && isThirteenOrphans(concealedCounts)) {
      return true;
    }
    return canStandardWin(concealedCounts);
  }

  // 枚举 34 种候选并用 isWinning 检查；总数已 4 张的牌不再入候选。
  function waits(concealed, melds) {
    if (melds === undefined) {
      melds = [];
    }
    if (!Array.isArray(concealed) || !validateMelds(melds)) {
      return [];
    }
    if (concealed.length !== 13 - 3 * melds.length) {
      return [];
    }
    var counts = buildCounts([concealed, collectMeldTiles(melds)]);
    if (counts === null) {
      return [];
    }
    var result = [];
    var i;
    for (i = 0; i < ALL_TILES.length; i++) {
      var tile = ALL_TILES[i];
      if ((counts[tile] || 0) >= 4) {
        continue;
      }
      if (isWinning(concealed.concat([tile]), melds)) {
        result.push(tile);
      }
    }
    return result;
  }

  // 只检查牌型与来源，非全面合法性裁判。
  function claimOptions(hand, discard, from) {
    if (!Array.isArray(hand) || hand.length > 14) {
      return [];
    }
    if (!isValidTile(discard) || SOURCES.indexOf(from) < 0) {
      return [];
    }
    var counts = buildCounts([hand, [discard]]);
    if (counts === null) {
      return [];
    }
    var result = [];
    var i;
    if (from === 'previous' && isNumbered(discard)) {
      var n = tileNumber(discard);
      var suit = discard.charAt(0);
      var starts = [];
      if (n >= 3) {
        starts.push(n - 2);
      }
      if (n >= 2 && n <= 8) {
        starts.push(n - 1);
      }
      if (n <= 7) {
        starts.push(n);
      }
      // starts 已按起始数字升序；每种顺子按点数唯一，天然去重。
      for (i = 0; i < starts.length; i++) {
        var a = suit + starts[i];
        var b = suit + (starts[i] + 1);
        var c = suit + (starts[i] + 2);
        var used = [];
        var ok = true;
        var parts = [a, b, c];
        var j;
        for (j = 0; j < 3; j++) {
          if (parts[j] === discard) {
            continue;
          }
          used.push(parts[j]);
        }
        var need = Object.create(null);
        for (j = 0; j < used.length; j++) {
          need[used[j]] = (need[used[j]] || 0) + 1;
        }
        var key;
        for (key in need) {
          if ((counts[key] || 0) < need[key]) {
            ok = false;
          }
        }
        if (ok) {
          used.sort();
          result.push({ type: 'chow', used: used });
        }
      }
    }
    if ((counts[discard] || 0) >= 3) {
      // counts 已含弃牌 1 张：手中 2 张成刻，3 张成杠。
      result.push({ type: 'pung', used: [discard, discard] });
      if ((counts[discard] || 0) >= 4) {
        result.push({ type: 'kong', used: [discard, discard, discard] });
      }
    }
    return result;
  }

  // 协会普通半辣上积分表；fan 至少 3、超 10 封顶 10，不含包牌、抢杠。
  function settlement(fan, mode) {
    if (typeof fan !== 'number' || !Number.isSafeInteger(fan) || fan < 3) {
      return null;
    }
    if (mode !== 'discard' && mode !== 'selfDraw') {
      return null;
    }
    var capped = fan > 10 ? 10 : fan;
    var points = PAY_TABLE[capped];
    if (mode === 'discard') {
      return {
        fan: capped,
        mode: 'discard',
        payerCount: 1,
        paymentEach: points,
        total: points
      };
    }
    var half = points / 2;
    return {
      fan: capped,
      mode: 'selfDraw',
      payerCount: 3,
      paymentEach: half,
      total: half * 3
    };
  }

  var api = {
    isWinning: isWinning,
    waits: waits,
    claimOptions: claimOptions,
    settlement: settlement
  };

  global.HKLearningRules = api;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }
})(typeof globalThis !== 'undefined'
  ? globalThis
  : typeof window !== 'undefined'
    ? window
    : typeof self !== 'undefined'
      ? self
      : this);
