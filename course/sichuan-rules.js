// 四川血战到底教学基础规则纯函数（浏览器普通脚本 + Node CommonJS 双载）
// 浏览器需先加载 hk-rules.js（其自身依赖 meld.js）；Node 通过相对路径 require。
// 基准 T/TFMJ 01—2024《四川麻将竞赛规则》：仅万筒条 108 张；不能吃，可碰杠；
// 开局定缺；基本胡牌形四组一对，七对为无明牌的特殊胡牌形；一家胡后退出继续血战。
// 换三张仅验证所选三张是否同花色，不模拟交换方向或结算；不套用香港番数与补杠规则。

(function (global) {
  'use strict';

  var HK;
  if (typeof module !== 'undefined' && module.exports) {
    HK = require('./hk-rules.js');
  } else {
    HK = global.HKLearningRules;
  }

  var TILE_RE = /^[mps][1-9]$/;
  var SUITS = ['m', 'p', 's'];
  var ALL_TILES = (function () {
    var list = [];
    var i, n;
    for (i = 0; i < SUITS.length; i++) {
      for (n = 1; n <= 9; n++) {
        list.push(SUITS[i] + n);
      }
    }
    return list;
  })();

  // 四川牌只有万筒条，字牌一律非法。
  function isTile(tile) {
    return typeof tile === 'string' && TILE_RE.test(tile);
  }

  function isValidMissingSuit(missingSuit) {
    return missingSuit === 'm' || missingSuit === 'p' || missingSuit === 's';
  }

  // 每种牌最多 4 张；任何非法牌或第 5 张同牌返回 null。不修改输入。
  function buildCounts(tiles) {
    var counts = Object.create(null);
    var i;
    for (i = 0; i < tiles.length; i++) {
      var key = tiles[i];
      if (!isTile(key)) {
        return null;
      }
      counts[key] = (counts[key] || 0) + 1;
      if (counts[key] > 4) {
        return null;
      }
    }
    return counts;
  }

  // 明牌只认 pung/kong，格式同 hk-rules.js；吃牌（chow）在四川规则下一律拒绝。
  function validateMelds(melds) {
    if (!Array.isArray(melds) || melds.length > 4) {
      return false;
    }
    var i, j;
    for (i = 0; i < melds.length; i++) {
      var m = melds[i];
      if (!m || typeof m !== 'object' || Array.isArray(m) || !Array.isArray(m.tiles)) {
        return false;
      }
      if (m.type === 'pung') {
        if (m.tiles.length !== 3) {
          return false;
        }
      } else if (m.type === 'kong') {
        if (m.tiles.length !== 4) {
          return false;
        }
      } else {
        return false;
      }
      if (!isTile(m.tiles[0])) {
        return false;
      }
      for (j = 1; j < m.tiles.length; j++) {
        if (m.tiles[j] !== m.tiles[0]) {
          return false;
        }
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

  // 共用前置校验：定缺门合法、暗手/明牌类型与长度、4 张上限、无定缺花色残留。
  // 通过返回 { counts, concealedCounts }，任何禁项返回 null。
  function validateState(hand, melds, missingSuit, concealedTarget) {
    if (!isValidMissingSuit(missingSuit)) {
      return null;
    }
    if (!Array.isArray(hand) || !Array.isArray(melds)) {
      return null;
    }
    if (!validateMelds(melds)) {
      return null;
    }
    if (hand.length !== concealedTarget - 3 * melds.length) {
      return null;
    }
    var counts = buildCounts(hand.concat(collectMeldTiles(melds)));
    if (counts === null) {
      return null;
    }
    var key;
    for (key in counts) {
      if (key.charAt(0) === missingSuit) {
        return null;
      }
    }
    var concealedCounts = buildCounts(hand);
    if (concealedCounts === null) {
      return null;
    }
    return { counts: counts, concealedCounts: concealedCounts };
  }

  // 七对：仅暗手 14 张，每种牌 2 或 4 张（四张作两对，即龙七对），合计 7 对。
  function isSevenPairs(concealedCounts) {
    var pairs = 0;
    var key;
    for (key in concealedCounts) {
      var c = concealedCounts[key];
      if (c !== 2 && c !== 4) {
        return false;
      }
      pairs += c / 2;
    }
    return pairs === 7;
  }

  // 四川禁项先排除，再判七对（仅无明牌）或委托 HK 判普通四组一对结构。
  function isWinning(hand, melds, missingSuit) {
    var state = validateState(hand, melds, missingSuit, 14);
    if (state === null) {
      return false;
    }
    if (melds.length === 0 && isSevenPairs(state.concealedCounts)) {
      return true;
    }
    return HK.isWinning(hand, melds);
  }

  // 13 张结构量暗手；按 m1..s9 升序枚举候选，跳过定缺门与第 5 张同牌。
  function waits(hand, melds, missingSuit) {
    var state = validateState(hand, melds, missingSuit, 13);
    if (state === null) {
      return [];
    }
    var result = [];
    var i;
    for (i = 0; i < ALL_TILES.length; i++) {
      var tile = ALL_TILES[i];
      if (tile.charAt(0) === missingSuit) {
        continue;
      }
      if ((state.counts[tile] || 0) >= 4) {
        continue;
      }
      if (isWinning(hand.concat([tile]), melds, missingSuit)) {
        result.push(tile);
      }
    }
    return result;
  }

  // 有效 14 张暗手的可打牌；仍有定缺花色时只能打定缺花色。不计公开组合。
  function legalDiscards(hand, missingSuit) {
    if (!isValidMissingSuit(missingSuit)) {
      return [];
    }
    if (!Array.isArray(hand) || hand.length !== 14) {
      return [];
    }
    var counts = buildCounts(hand);
    if (counts === null) {
      return [];
    }
    var missing = [];
    var others = [];
    var i;
    for (i = 0; i < ALL_TILES.length; i++) {
      var tile = ALL_TILES[i];
      if (!counts[tile]) {
        continue;
      }
      if (tile.charAt(0) === missingSuit) {
        missing.push(tile);
      } else {
        others.push(tile);
      }
    }
    return missing.length > 0 ? missing : others;
  }

  // 对弃牌只可碰/杠，从不返回吃；只做形状与牌数判断，不叫时机。
  function claimOptions(hand, tile, missingSuit) {
    if (!isValidMissingSuit(missingSuit)) {
      return [];
    }
    if (!Array.isArray(hand) || !isTile(tile)) {
      return [];
    }
    if (tile.charAt(0) === missingSuit) {
      return [];
    }
    var counts = buildCounts(hand.concat([tile]));
    if (counts === null) {
      return [];
    }
    var inHand = counts[tile] - 1;
    var result = [];
    if (inHand >= 2) {
      result.push('pung');
    }
    if (inHand >= 3) {
      result.push('kong');
    }
    return result;
  }

  // 可选换三张：恰好三个互不重复的范围内下标，且三张同一花色。不修改输入。
  function validExchangeSelection(hand, indices) {
    if (!Array.isArray(hand) || hand.length !== 13) {
      return false;
    }
    if (buildCounts(hand) === null) {
      return false;
    }
    if (!Array.isArray(indices) || indices.length !== 3) {
      return false;
    }
    var seen = [];
    var suit = null;
    var i;
    for (i = 0; i < 3; i++) {
      var idx = indices[i];
      if (typeof idx !== 'number' || !Number.isInteger(idx) || idx < 0 || idx >= 13) {
        return false;
      }
      if (seen.indexOf(idx) >= 0) {
        return false;
      }
      seen.push(idx);
      var tileSuit = hand[idx].charAt(0);
      if (suit === null) {
        suit = tileSuit;
      } else if (tileSuit !== suit) {
        return false;
      }
    }
    return true;
  }

  // 血战：胡牌者退出本副。玩家 ID 须为字符串且不重复，胜者须在列，否则 null。
  function activeAfterWin(activeIds, winnerId) {
    if (!Array.isArray(activeIds)) {
      return null;
    }
    if (typeof winnerId !== 'string' || winnerId === '') {
      return null;
    }
    var seen = Object.create(null);
    var found = false;
    var i;
    for (i = 0; i < activeIds.length; i++) {
      var id = activeIds[i];
      if (typeof id !== 'string' || id === '' || seen[id]) {
        return null;
      }
      seen[id] = true;
      if (id === winnerId) {
        found = true;
      }
    }
    if (!found) {
      return null;
    }
    var result = [];
    for (i = 0; i < activeIds.length; i++) {
      if (activeIds[i] !== winnerId) {
        result.push(activeIds[i]);
      }
    }
    return result;
  }

  var api = {
    isTile: isTile,
    isWinning: isWinning,
    waits: waits,
    legalDiscards: legalDiscards,
    claimOptions: claimOptions,
    validExchangeSelection: validExchangeSelection,
    activeAfterWin: activeAfterWin
  };

  global.SichuanLearningRules = api;

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
