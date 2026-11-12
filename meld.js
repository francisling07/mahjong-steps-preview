// 麻将基础牌组判断（浏览器普通脚本 + Node CommonJS 双载）
// 只判断示例牌组结构，不判断完整胡牌、番数或任何地区规则。

(function (global) {
  'use strict';

  var TILE_RE = /^([mps][1-9]|z[1-7])$/;

  function isValidTile(tile) {
    return typeof tile === 'string' && TILE_RE.test(tile);
  }

  function isNumberedTile(tile) {
    return TILE_RE.test(tile) && tile.charAt(0) !== 'z';
  }

  function tilesAreIdentical(tiles) {
    for (var i = 1; i < tiles.length; i++) {
      if (tiles[i] !== tiles[0]) {
        return false;
      }
    }
    return true;
  }

  function classifyMeld(tiles) {
    if (!Array.isArray(tiles)) {
      return null;
    }
    if (tiles.length !== 2 && tiles.length !== 3) {
      return null;
    }
    var i;
    for (i = 0; i < tiles.length; i++) {
      if (!isValidTile(tiles[i])) {
        return null;
      }
    }
    if (tiles.length === 2) {
      return tilesAreIdentical(tiles) ? 'pair' : null;
    }
    if (tilesAreIdentical(tiles)) {
      return 'triplet';
    }
    // 顺子：同一数牌花色的三个不同连续数字；字牌不能顺子。
    var suit = tiles[0].charAt(0);
    if (suit === 'z') {
      return null;
    }
    var nums = [];
    for (i = 0; i < 3; i++) {
      if (tiles[i].charAt(0) !== suit) {
        return null;
      }
      nums.push(tiles[i].charAt(1));
    }
    var sorted = nums.slice().sort();
    if (sorted[0] === sorted[1] || sorted[1] === sorted[2]) {
      return null;
    }
    var a = sorted[0].charCodeAt(0);
    var b = sorted[1].charCodeAt(0);
    var c = sorted[2].charCodeAt(0);
    if (b === a + 1 && c === b + 1) {
      return 'sequence';
    }
    return null;
  }

  function tileKey(tile) {
    return tile;
  }

  // 返回 { counts: {tile: n}, order: [tile...] }，非法输入返回 null。
  function buildCounts(tiles, expectedLength) {
    if (!Array.isArray(tiles) || tiles.length !== expectedLength) {
      return null;
    }
    var counts = Object.create(null);
    var order = [];
    var i;
    for (i = 0; i < tiles.length; i++) {
      if (!isValidTile(tiles[i])) {
        return null;
      }
      var key = tileKey(tiles[i]);
      if (counts[key] === undefined) {
        counts[key] = 0;
        order.push(key);
      }
      counts[key] += 1;
      if (counts[key] > 4) {
        return null;
      }
    }
    return { counts: counts, order: order };
  }

  function compareTile(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }

  // 在去掉将牌后的 count 表上做穷举回溯：每次取最小牌，
  // 尝试刻子或顺子，任何一种成功即成功（遍历不同拆分，非贪心）。
  function canFormMelds(counts) {
    var smallest = null;
    var key;
    for (key in counts) {
      if (counts[key] > 0) {
        if (smallest === null || compareTile(key, smallest) < 0) {
          smallest = key;
        }
      }
    }
    if (smallest === null) {
      return true;
    }
    // 尝试刻子
    if (counts[smallest] >= 3) {
      counts[smallest] -= 3;
      if (canFormMelds(counts)) {
        counts[smallest] += 3;
        return true;
      }
      counts[smallest] += 3;
    }
    // 尝试顺子（仅数牌，且后续两张存在）
    var suit = smallest.charAt(0);
    var num = smallest.charAt(1);
    if (suit !== 'z' && num !== '8' && num !== '9') {
      var next1 = suit + String.fromCharCode(num.charCodeAt(0) + 1);
      var next2 = suit + String.fromCharCode(num.charCodeAt(0) + 2);
      if ((counts[next1] || 0) > 0 && (counts[next2] || 0) > 0) {
        counts[smallest] -= 1;
        counts[next1] -= 1;
        counts[next2] -= 1;
        var ok = canFormMelds(counts);
        counts[smallest] += 1;
        counts[next1] += 1;
        counts[next2] += 1;
        if (ok) {
          return true;
        }
      }
    }
    return false;
  }

  function isBasicWinningHand(tiles) {
    var built = buildCounts(tiles, 14);
    if (built === null) {
      return false;
    }
    var counts = built.counts;
    var order = built.order;
    // 依次尝试每种牌作将牌，剩余 12 张穷举拆成四个三张组。
    for (var i = 0; i < order.length; i++) {
      var pairKey = order[i];
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

  var api = {
    classifyMeld: classifyMeld,
    isBasicWinningHand: isBasicWinningHand
  };

  global.classifyMeld = classifyMeld;
  global.isBasicWinningHand = isBasicWinningHand;

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
