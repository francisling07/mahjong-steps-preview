/* Shared trilingual tile utilities, escaping, sorting and safe storage helpers.
   Dual-loaded: browser global `MahjongUtils` + Node CommonJS `module.exports`. */
(function (global) {
  'use strict';

  const SUIT_NAMES = {
    default: {
      m: ['万', '萬', 'characters'],
      p: ['筒', '筒', 'dots'],
      s: ['条', '條', 'bamboo']
    },
    short: {
      m: ['万', '萬', 'Craks'],
      p: ['筒', '筒', 'Dots'],
      s: ['条', '索', 'Bams']
    }
  };

  const HONOR_NAMES = {
    default: {
      zh: ['东风', '南风', '西风', '北风', '红中', '发财', '白板'],
      tw: ['東風', '南風', '西風', '北風', '紅中', '發財', '白板'],
      en: ['East', 'South', 'West', 'North', 'Red dragon', 'Green dragon', 'White dragon']
    },
    short: {
      zh: ['东', '南', '西', '北', '中', '发', '白'],
      tw: ['東', '南', '西', '北', '中', '發', '白'],
      en: ['East', 'South', 'West', 'North', 'Red', 'Green', 'White']
    }
  };

  const FLOWER_NAMES = {
    zh: ['春', '夏', '秋', '冬', '梅', '兰', '菊', '竹'],
    tw: ['春', '夏', '秋', '冬', '梅', '蘭', '菊', '竹'],
    en: ['Spring', 'Summer', 'Autumn', 'Winter', 'Plum', 'Orchid', 'Chrysanthemum', 'Bamboo']
  };

  const SUIT_ORDER = { m: 0, p: 1, s: 2, z: 3, f: 4, j: 5 };

  function esc(value) {
    return String(value ?? '').replace(/[&<>"']/g, ch => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[ch]));
  }

  function local(value, lang) {
    if (value && typeof value === 'object') {
      return value[lang] || value.zh || value.en || '';
    }
    return value ?? '';
  }

  function langIndex(lang) {
    return lang === 'en' ? 2 : lang === 'tw' ? 1 : 0;
  }

  function tileName(id, lang, style) {
    if (typeof id !== 'string' || !id) return '';
    const l = lang === 'en' || lang === 'tw' ? lang : 'zh';
    const variant = style === 'short' ? 'short' : 'default';
    if (id === 'j1' || id[0] === 'j') return 'Joker';
    const num = Number(id.slice(1));
    if (id[0] === 'f') {
      return FLOWER_NAMES[l][num - 1] || id;
    }
    if (id[0] === 'z') {
      return HONOR_NAMES[variant][l][num - 1] || id;
    }
    const suitTable = SUIT_NAMES[variant][id[0]];
    if (suitTable) {
      return `${id.slice(1)} ${suitTable[langIndex(l)]}`;
    }
    return id;
  }

  function tileHtml(id, lang, style, art) {
    const renderer = art || global.MahjongTileArt;
    const svg = renderer && typeof renderer.svg === 'function' ? renderer.svg(id) : '';
    return `<span class="tile" role="img" aria-label="${esc(tileName(id, lang, style))}">${svg}</span>`;
  }

  function totalCopies(tile) {
    if (typeof tile !== 'string' || !tile) return 0;
    if (tile[0] === 'f') return 1;
    if (tile === 'j1') return 8;
    return 4;
  }

  function tileOrder(tile) {
    const base = SUIT_ORDER[tile[0]];
    return (base === undefined ? 9 : base) * 10 + Number(tile.slice(1));
  }

  function sortHand(hand) {
    return hand.sort((a, b) => tileOrder(a) - tileOrder(b));
  }

  function countTiles(tiles) {
    const map = Object.create(null);
    for (let i = 0; i < tiles.length; i++) {
      const t = tiles[i];
      map[t] = (map[t] || 0) + 1;
    }
    return map;
  }

  const storage = {
    get(key) {
      try { return global.localStorage.getItem(key); } catch (_) { return null; }
    },
    set(key, value) {
      try { global.localStorage.setItem(key, String(value)); return true; } catch (_) { return false; }
    },
    remove(key) {
      try { global.localStorage.removeItem(key); return true; } catch (_) { return false; }
    },
    readJson(key) {
      const raw = storage.get(key);
      if (raw === null) return null;
      try { return JSON.parse(raw); } catch (_) { return null; }
    },
    writeJson(key, value) {
      return storage.set(key, JSON.stringify(value));
    }
  };

  const api = {
    esc,
    local,
    tileName,
    tileHtml,
    totalCopies,
    tileOrder,
    sortHand,
    countTiles,
    storage
  };

  global.MahjongUtils = api;
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
