// 三玩法确定性牌墙：tilesFor/shuffle/deal 均为纯函数，不依赖 Math.random，不修改输入。
// 浏览器读取 globalThis.MahjongPlaygroundDeck，Node 通过 require 取 module.exports（与 engine.js 相同双载风格）。
// shuffle 用 xorshift32 PRNG + Fisher–Yates；seed=0 时以固定常数替换内部状态，避免 xorshift 卡在 0 的常数序列。

(function (global) {
  'use strict';

  var MODES = { hk: 1, sc: 1, am: 1, mcr: 1 };

  function isMode(mode) {
    return typeof mode === 'string' && Object.prototype.hasOwnProperty.call(MODES, mode);
  }

  function isSeed(seed) {
    return typeof seed === 'number' && Number.isInteger(seed) && seed >= 0 && seed <= 4294967295;
  }

  function tilesFor(mode) {
    if (!isMode(mode)) {
      return null;
    }
    var tiles = [];
    var i, t;
    if (mode === 'mcr') {
      var mcrSuits = ['m', 'p', 's'];
      for (var ms = 0; ms < mcrSuits.length; ms++) {
        for (var mn = 1; mn <= 9; mn++) {
          for (var mc = 0; mc < 4; mc++) {
            tiles.push(mcrSuits[ms] + mn);
          }
        }
      }
      for (t = 1; t <= 7; t++) {
        for (i = 0; i < 4; i++) {
          tiles.push('z' + t);
        }
      }
      for (t = 1; t <= 8; t++) {
        tiles.push('f' + t);
      }
      return tiles;
    }
    if (mode !== 'sc') {
      for (t = 1; t <= 7; t++) {
        for (i = 0; i < 4; i++) {
          tiles.push('z' + t);
        }
      }
    }
    if (mode === 'am') {
      for (t = 1; t <= 8; t++) {
        tiles.push('f' + t);
      }
      for (i = 0; i < 8; i++) {
        tiles.push('j1');
      }
    }
    var suits = ['m', 'p', 's'];
    for (var s = 0; s < suits.length; s++) {
      for (var n = 1; n <= 9; n++) {
        for (var c = 0; c < 4; c++) {
          tiles.push(suits[s] + n);
        }
      }
    }
    return tiles;
  }

  // xorshift32：状态为无符号 32 位整数；0 不是有效不动点以外的值，seed=0 时换用黄金比例常数。
  function makeRng(seed) {
    var state = seed >>> 0;
    if (state === 0) {
      state = 0x9e3779b9;
    }
    return function () {
      state ^= state << 13;
      state >>>= 0;
      state ^= state >>> 17;
      state ^= state << 5;
      state >>>= 0;
      return state;
    };
  }

  function shuffle(mode, seed) {
    if (!isMode(mode) || !isSeed(seed)) {
      return null;
    }
    var tiles = tilesFor(mode);
    var rng = makeRng(seed);
    for (var i = tiles.length - 1; i > 0; i--) {
      var j = rng() % (i + 1);
      var tmp = tiles[i];
      tiles[i] = tiles[j];
      tiles[j] = tmp;
    }
    return tiles;
  }

  function deal(mode, seed) {
    var tiles = shuffle(mode, seed);
    if (tiles === null) {
      return null;
    }
    var hands = [[], [], [], []];
    var idx = 0;
    for (var round = 0; round < 13; round++) {
      for (var seat = 0; seat < 4; seat++) {
        hands[seat].push(tiles[idx]);
        idx++;
      }
    }
    hands[0].push(tiles[idx]);
    idx++;
    return { hands: hands, wall: tiles.slice(idx) };
  }

  var exportsObj = { tilesFor: tilesFor, shuffle: shuffle, deal: deal };
  global.MahjongPlaygroundDeck = exportsObj;
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exportsObj;
  }
})(globalThis);
