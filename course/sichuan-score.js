// 四川血战到底教学计分纯函数（浏览器普通脚本 + Node CommonJS 双载）
// 基准 T/TFMJ 01—2024《四川麻将竞赛规则》第10节、表1 的教学子集：
// 平和1、大对子2、清一色4、七对4；带根/金钩钓/杠上花/杠上炮/抢杠/海底各乘2；
// 累计最多 3 番，基本分封顶 8。自摸每家付「底分1＋封顶后基本分」，点炮由放炮者付封顶后基本分。
// 暗杠未胡各家各付2、引杠提供弃牌者付2、绕杠未胡各家各付1。
// 只换算已确认番种与普通杠分：不识别胡牌形、不退杠、不查叫、不做呼叫转移与赛事处罚。
// 所有函数无副作用，不修改输入，非法输入返回 null，不抛异常。

(function (global) {
  'use strict';

  var TILE_RE = /^[mps][1-9]$/;
  var MAX_POINTS = 8;

  var BASE_POINTS = {
    ordinary: 1,
    allTriplets: 2,
    fullFlush: 4,
    sevenPairs: 4
  };

  var EXTRA_IDS = ['goldenHook', 'kongWin', 'kongDiscard', 'robKong', 'lastTile'];

  var KONG_PAYOUT = {
    concealed: { paymentEach: 2, payerCount: null },
    discard: { paymentEach: 2, payerCount: 1 },
    added: { paymentEach: 1, payerCount: null }
  };

  function isTile(tile) {
    return typeof tile === 'string' && TILE_RE.test(tile);
  }

  function isPlainObject(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  }

  function isIntegerInRange(value, min, max) {
    return typeof value === 'number' && Number.isInteger(value) &&
      value >= min && value <= max;
  }

  function hasOnlyKeys(obj, allowed) {
    var keys = Object.keys(obj);
    var i;
    for (i = 0; i < keys.length; i++) {
      if (allowed.indexOf(keys[i]) < 0) {
        return false;
      }
    }
    return true;
  }

  function validateExtras(extras) {
    if (!Array.isArray(extras)) {
      return false;
    }
    var seen = [];
    var i;
    for (i = 0; i < extras.length; i++) {
      var id = extras[i];
      if (typeof id !== 'string' || EXTRA_IDS.indexOf(id) < 0) {
        return false;
      }
      if (seen.indexOf(id) >= 0) {
        return false;
      }
      seen.push(id);
    }
    return true;
  }

  // base 由调用方按较高主体番种选定，模块不推断手牌；每个根与每个额外因素乘 2，封顶 8。
  function score(input) {
    if (!isPlainObject(input) ||
        !hasOnlyKeys(input, ['base', 'roots', 'extras', 'mode', 'activeOpponents'])) {
      return null;
    }
    if (typeof input.base !== 'string' ||
        !Object.prototype.hasOwnProperty.call(BASE_POINTS, input.base)) {
      return null;
    }
    if (!isIntegerInRange(input.roots, 0, 4)) {
      return null;
    }
    if (!validateExtras(input.extras)) {
      return null;
    }
    if (input.mode !== 'selfDraw' && input.mode !== 'discard') {
      return null;
    }
    if (!isIntegerInRange(input.activeOpponents, 1, 3)) {
      return null;
    }
    var basePoints = BASE_POINTS[input.base];
    var factors = input.roots + input.extras.length;
    var rawPoints = basePoints * Math.pow(2, factors);
    var points = Math.min(MAX_POINTS, rawPoints);
    var selfDraw = input.mode === 'selfDraw';
    var paymentEach = selfDraw ? points + 1 : points;
    var payerCount = selfDraw ? input.activeOpponents : 1;
    return {
      basePoints: basePoints,
      rawPoints: rawPoints,
      points: points,
      paymentEach: paymentEach,
      payerCount: payerCount,
      total: paymentEach * payerCount,
      capped: rawPoints > MAX_POINTS
    };
  }

  // 只算普通杠分：暗杠 2×未胡各家、引杠 2×1、绕杠 1×未胡各家。
  // 不计算已胡者支付，不模拟杠者与点杠者身份。
  function kongPayment(input) {
    if (!isPlainObject(input) ||
        !hasOnlyKeys(input, ['type', 'activeOpponents'])) {
      return null;
    }
    if (typeof input.type !== 'string' ||
        !Object.prototype.hasOwnProperty.call(KONG_PAYOUT, input.type)) {
      return null;
    }
    if (!isIntegerInRange(input.activeOpponents, 1, 3)) {
      return null;
    }
    var payout = KONG_PAYOUT[input.type];
    var paymentEach = payout.paymentEach;
    var payerCount = payout.payerCount === null ? input.activeOpponents : payout.payerCount;
    return {
      paymentEach: paymentEach,
      payerCount: payerCount,
      total: paymentEach * payerCount
    };
  }

  // 统计暗手与已公开 pung/kong 合计恰为 4 张同牌的种类数。
  // 明牌格式与 sichuan-rules.js 一致：只认 pung(3张)/kong(4张) 且同牌；吃牌一律拒绝。
  // 非法牌、面子形状错误、任何牌超 4 张、类型或空值边界返回 null；合法空数组返回 0。
  function countRoots(hand, melds) {
    if (!Array.isArray(hand) || !Array.isArray(melds) || melds.length > 4) {
      return null;
    }
    var counts = Object.create(null);
    var i, j;

    function addTile(tile) {
      if (!isTile(tile)) {
        return false;
      }
      counts[tile] = (counts[tile] || 0) + 1;
      return counts[tile] <= 4;
    }

    for (i = 0; i < hand.length; i++) {
      if (!addTile(hand[i])) {
        return null;
      }
    }
    for (i = 0; i < melds.length; i++) {
      var meld = melds[i];
      if (!isPlainObject(meld) || !Array.isArray(meld.tiles)) {
        return null;
      }
      if (meld.type === 'pung') {
        if (meld.tiles.length !== 3) {
          return null;
        }
      } else if (meld.type === 'kong') {
        if (meld.tiles.length !== 4) {
          return null;
        }
      } else {
        return null;
      }
      for (j = 0; j < meld.tiles.length; j++) {
        if (meld.tiles[j] !== meld.tiles[0] || !addTile(meld.tiles[j])) {
          return null;
        }
      }
    }
    var roots = 0;
    var key;
    for (key in counts) {
      if (counts[key] === 4) {
        roots++;
      }
    }
    return roots;
  }

  var api = {
    score: score,
    kongPayment: kongPayment,
    countRoots: countRoots
  };

  global.SichuanLearningScore = api;

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
