/* Deterministic training Bot AI decisions for all four Mahjong rulesets.
   Decoupled from full-engine.js so AI strategies can evolve and benchmark independently.
   Dual-loaded: browser global `MahjongBotAI` + Node CommonJS `module.exports`. */
(function (global) {
  'use strict';

  const isNode = typeof module !== 'undefined' && module.exports;
  const Utils = isNode ? require('../tile-utils.js') : global.MahjongUtils;

  const order = Utils
    ? Utils.tileOrder
    : x => ({ m: 0, p: 1, s: 2, z: 3, f: 4, j: 5 })[x[0]] * 10 + Number(x[1]);

  const counts = Utils
    ? Utils.countTiles
    : h => {
      const c = Object.create(null);
      for (const t of h) c[t] = (c[t] || 0) + 1;
      return c;
    };

  function chooseMissing(hand) {
    const c = { m: 0, p: 0, s: 0 };
    for (const x of hand) c[x[0]]++;
    return ['m', 'p', 's'].sort((a, b) => c[a] - c[b] || a.localeCompare(b))[0];
  }

  function chooseExchange(hand) {
    const suits = ['m', 'p', 's'].sort(
      (a, b) => hand.filter(x => x[0] === a).length - hand.filter(x => x[0] === b).length
    );
    for (const suit of suits) {
      const indices = hand.map((x, i) => (x[0] === suit ? i : -1)).filter(i => i >= 0);
      if (indices.length >= 3) return indices.slice(0, 3);
    }
    return null;
  }

  function tileSupport(hand, tile) {
    const c = counts(hand);
    const n = Number(tile[1]);
    const suit = tile[0];
    let score = (c[tile] - 1) * 4;
    if ('mps'.includes(suit)) {
      for (const d of [-2, -1, 1, 2]) {
        const x = n + d;
        if (x >= 1 && x <= 9) {
          score += (c[suit + x] || 0) * (Math.abs(d) === 1 ? 1.8 : 0.7);
        }
      }
    }
    if (tile === 'j1') score += 8;
    return score;
  }

  function chooseCharlestonPass(hand) {
    const ranked = hand
      .map((t, i) => ({ t, i, v: tileSupport(hand, t) }))
      .filter(x => x.t !== 'j1')
      .sort((a, b) => a.v - b.v || order(b.t) - order(a.t) || a.i - b.i);
    return ranked.slice(0, 3).map(x => x.i).sort((a, b) => a - b);
  }

  function chooseDiscard(state, seat, legalIndices) {
    if (!legalIndices || !legalIndices.length) return -1;
    const hand = state.hands[seat];
    let best = legalIndices[0];
    let value = Infinity;
    for (const i of legalIndices) {
      const t = hand[i];
      const v = tileSupport(hand, t) + (state.mode === 'am' && t === 'j1' ? 100 : 0);
      if (v < value || (v === value && order(t) > order(hand[best]))) {
        best = i;
        value = v;
      }
    }
    return best;
  }

  function chooseClaim(state, discarder, tile, claimChoicesFn) {
    if (state.mode === 'mcr') {
      const calls = [];
      for (let gap = 1; gap < 4; gap++) {
        const seat = (discarder + gap) % 4;
        if (seat === 0) continue;
        for (const option of claimChoicesFn(state, seat, discarder, tile)) {
          calls.push({ seat, gap, option });
        }
      }
      calls.sort(
        (a, b) =>
          (a.option.kind === 'chow' ? 1 : 0) - (b.option.kind === 'chow' ? 1 : 0) ||
          a.gap - b.gap ||
          (a.option.kind === 'kong' ? 0 : 1) - (b.option.kind === 'kong' ? 0 : 1)
      );
      return calls.length ? { seat: calls[0].seat, option: calls[0].option } : null;
    }

    for (let gap = 1; gap < 4; gap++) {
      const seat = (discarder + gap) % 4;
      if (seat === 0 || !state.active[seat]) continue;
      const options = claimChoicesFn(state, seat, discarder, tile);
      const chow = options.find(x => x.kind === 'chow');
      const hkFlush =
        state.mode === 'hk' &&
        new Set(
          state.hands[seat]
            .concat(state.melds[seat].flatMap(m => m.tiles), tile)
            .filter(t => 'mps'.includes(t[0]))
            .map(t => t[0])
        ).size === 1;
      const chosen = options.find(x => x.kind === 'pung') || (state.mode === 'hk' && !hkFlush ? null : chow);
      if (chosen) return { seat, option: chosen };
    }
    return null;
  }

  function chooseSelfKong(state, seat) {
    if (state.mode !== 'mcr' || !state.wall.length) return null;
    const added = state.melds[seat]
      .map((m, i) => ({ m, i }))
      .find(x => x.m.type === 'pung' && state.hands[seat].includes(x.m.tiles[0]));
    if (added) {
      return { kind: 'added', tile: added.m.tiles[0], meldIndex: added.i };
    }
    const c = counts(state.hands[seat]);
    const four = Object.keys(c).find(t => c[t] === 4);
    if (four && state.melds[seat].length < 4) {
      return { kind: 'concealed', tile: four };
    }
    return null;
  }

  const api = {
    chooseMissing,
    chooseExchange,
    tileSupport,
    chooseCharlestonPass,
    chooseDiscard,
    chooseClaim,
    chooseSelfKong
  };

  global.MahjongBotAI = api;
  if (isNode) module.exports = api;
})(typeof globalThis !== 'undefined' ? globalThis : window);
