/* Original Mahjong Steps vector tile artwork with instant inline fallback & SVG preload cache.
   Prevents blank white-tile flashes by pre-caching SVGs into memory and showing instant vector art until decoded. */
(function (g) {
  'use strict';

  const R = '#b94a3d', G = '#286b51', B = '#315a82', K = '#253e3c', Y = '#d4a854';
  const pipLayouts = {
    1: [[0, 0]],
    2: [[0, -18], [0, 18]],
    3: [[-13, -19], [0, 0], [13, 19]],
    4: [[-13, -19], [13, -19], [-13, 19], [13, 19]],
    5: [[-14, -20], [14, -20], [0, 0], [-14, 20], [14, 20]],
    6: [[-14, -22], [14, -22], [-14, 0], [14, 0], [-14, 22], [14, 22]],
    7: [[-14, -23], [14, -23], [-14, -3], [0, -3], [14, -3], [-14, 20], [14, 20]],
    8: [[-14, -24], [14, -24], [-14, -8], [14, -8], [-14, 8], [14, 8], [-14, 24], [14, 24]],
    9: [[-17, -23], [0, -23], [17, -23], [-17, 0], [0, 0], [17, 0], [-17, 23], [0, 23], [17, 23]]
  };

  function rosette(x, y, r, color) {
    return `<g transform="translate(${x} ${y})"><circle r="${r}" fill="#fbf9ea" stroke="${color}" stroke-width="1.6"/><circle r="${r * 0.69}" fill="none" stroke="${color}" stroke-width=".9" stroke-dasharray="1.7 1.3"/><circle r="${r * 0.38}" fill="${color}"/><circle r="${r * 0.14}" fill="#f8efd2"/></g>`;
  }

  function circles(n) {
    const a = pipLayouts[n];
    const r = n === 1 ? 22 : n === 2 ? 13 : n >= 7 ? 7.3 : 10.5;
    return a.map(([x, y], i) => rosette(40 + x, 51 + y, r, [B, G, R][(i + n) % 3])).join('');
  }

  function stalk(x, y, scale, color) {
    return `<g transform="translate(${x} ${y}) scale(${scale})"><rect x="-3.2" y="-10" width="6.4" height="20" rx="2.3" fill="${color}"/><path d="M-3.5 -3.3h7M-3.5 3.3h7" stroke="#f8f3de" stroke-width="1.1"/><path d="M-1.4 -8v16" stroke="#fff" stroke-opacity=".45" stroke-width=".7"/></g>`;
  }

  function bird() {
    return `<g><path d="M23 72Q31 67 34 56Q30 47 33 37Q36 26 45 26Q53 27 55 35L61 38L55 40Q55 51 47 56L45 69Q49 74 56 76Q44 77 39 71Q35 76 23 76Z" fill="${G}" stroke="${K}" stroke-width="1.2"/><path d="M36 45Q45 37 52 46Q50 57 40 59Q43 53 36 45Z" fill="${B}"/><path d="M40 44q4 4 8 4M40 49q4 4 8 4" fill="none" stroke="#f5e6c4" stroke-width="1"/><circle cx="49" cy="33" r="1.5" fill="#f8f3df"/><path d="M40 24q1-7 5-8m0 9q4-6 8-5" stroke="${R}" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M36 71l-5 7m8-5 2 6" stroke="${R}" stroke-width="2"/></g>`;
  }

  function bamboos(n) {
    if (n === 1) return bird();
    const a = pipLayouts[n];
    const sc = n >= 7 ? 0.7 : n >= 5 ? 0.83 : 1;
    return a.map(([x, y], i) => stalk(40 + x, 52 + y, sc, [G, G, R, B][(i + n) % 4])).join('');
  }

  function characters(n) {
    const words = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    return `<text x="40" y="48" text-anchor="middle" font-family="STKaiti,KaiTi,serif" font-size="35" font-weight="700" fill="${K}">${words[n]}</text><text x="40" y="83" text-anchor="middle" font-family="STKaiti,KaiTi,serif" font-size="35" font-weight="700" fill="${R}">萬</text>`;
  }

  function honor(n) {
    const names = ['', '東', '南', '西', '北', '中', '發', ''];
    const colors = [K, K, K, K, K, R, G, B];
    if (n === 7) {
      return `<rect x="20" y="28" width="40" height="49" rx="3" fill="none" stroke="${B}" stroke-width="3"/><rect x="24" y="32" width="32" height="41" rx="1" fill="none" stroke="${B}" stroke-width="1"/><path d="M27 35h7m12 0h7M27 70h7m12 0h7" stroke="${B}" stroke-width="1"/>`;
    }
    return `<text x="40" y="70" text-anchor="middle" font-family="STKaiti,KaiTi,serif" font-size="43" font-weight="700" fill="${colors[n]}">${names[n]}</text>`;
  }

  function flower(n) {
    const col = [R, B, G, R, G, B, R, G][n - 1];
    const ang = (n % 2) * 22.5;
    let petals = '';
    for (let i = 0; i < 6; i++) {
      petals += `<ellipse cx="0" cy="-11" rx="5" ry="10" transform="rotate(${i * 60 + ang})" fill="${col}" opacity=".88" stroke="#fff8e5" stroke-width=".7"/>`;
    }
    return `<path d="M38 77Q40 61 43 54M39 70Q28 65 25 57M41 65Q51 60 54 54" fill="none" stroke="${G}" stroke-width="2" stroke-linecap="round"/><path d="M25 57q8 0 10 8q-8 0-10-8M53 55q-8 1-10 8q8-1 10-8" fill="${G}"/><g transform="translate(42 43)">${petals}<circle r="4.2" fill="${Y}"/><circle r="1.5" fill="#fff3d2"/></g><text x="40" y="90" text-anchor="middle" font-size="7" letter-spacing="1.2" font-family="sans-serif" fill="${K}">${n <= 4 ? 'FLOWER' : 'SEASON'}</text>`;
  }

  function joker() {
    return `<path d="M20 45Q22 26 31 22L40 32L49 22Q58 26 60 45Q59 66 40 75Q21 66 20 45Z" fill="#f8eacf" stroke="${G}" stroke-width="2"/><path d="M23 43l8-18 9 10 9-10 8 18" fill="${R}" stroke="${K}" stroke-width="1"/><circle cx="31" cy="24" r="3" fill="${Y}"/><circle cx="49" cy="24" r="3" fill="${Y}"/><path d="M28 50q3-3 6 0m12 0q3-3 6 0M32 60q8 7 16 0" fill="none" stroke="${K}" stroke-width="2" stroke-linecap="round"/><text x="40" y="88" text-anchor="middle" font-family="sans-serif" font-weight="700" font-size="8" letter-spacing="1.8" fill="${R}">JOKER</text>`;
  }

  function originalSvg(id) {
    if (typeof id !== 'string' || !/^(?:[mps][1-9]|z[1-7]|f[1-8]|j1)$/.test(id)) return '';
    const suit = id[0];
    const n = Number(id[1]);
    const mark = suit === 'z' ? ['', 'E', 'S', 'W', 'N', 'R', 'G', 'W'][n] : suit === 'j' ? 'J' : String(n);
    const art = suit === 'm' ? characters(n)
      : suit === 'p' ? circles(n)
        : suit === 's' ? bamboos(n)
          : suit === 'z' ? honor(n)
            : suit === 'f' ? flower(n)
              : joker();
    return `<svg class="tile-art" viewBox="0 0 80 104" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><text x="8" y="13" font-family="Arial,sans-serif" font-size="8" font-weight="700" fill="${K}">${mark}</text>${art}</svg>`;
  }

  const honors = ['04-east-wind', '05-south-wind', '06-west-wind', '07-north-wind', '03-red-dragon', '02-green-dragon', '01-white-dragon'];
  const flowers = ['35-spring', '36-summer', '37-autumn', '38-winter', '39-plum', '40-orchid', '41-chrysanthemum', '42-bamboo'];
  const ids = [
    ...['m', 'p', 's'].flatMap(s => Array.from({ length: 9 }, (_, i) => s + (i + 1))),
    ...Array.from({ length: 7 }, (_, i) => 'z' + (i + 1)),
    ...Array.from({ length: 8 }, (_, i) => 'f' + (i + 1)),
    'j1'
  ];

  function fileUrlFor(id) {
    const n = Number(id[1]);
    const s = id[0];
    const index = { m: 7, p: 16, s: 25 }[s];
    const file = s === 'z'
      ? honors[n - 1]
      : s === 'f'
        ? flowers[n - 1]
        : String(index + n).padStart(2, '0') + '-' + ({ m: 'characters', p: 'circles', s: 'bamboos' }[s]) + '-' + n;
    return `assets/hongkong/${file}.svg`;
  }

  // In-memory data-URI + decoded-image cache eliminates blank white tiles during play.
  const dataUriCache = Object.create(null);
  const decodedSet = Object.create(null);
  const retainedImages = [];
  let preloadStarted = false;

  function warmImage(id, src) {
    if (typeof Image === 'undefined') return;
    try {
      const img = new Image();
      img.decoding = 'sync';
      img.onload = () => {
        decodedSet[id] = true;
        if (typeof img.decode === 'function') img.decode().catch(() => {});
      };
      img.src = src;
      retainedImages.push(img);
    } catch (_) {}
  }

  function preloadAll() {
    if (preloadStarted) return;
    preloadStarted = true;
    const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof Image !== 'undefined';
    if (!isBrowser) return;

    const canFetch = typeof fetch === 'function' && (typeof location === 'undefined' || location.protocol !== 'file:');
    for (const id of ids) {
      if (id === 'j1') continue;
      const url = fileUrlFor(id);
      if (canFetch) {
        fetch(url)
          .then(res => (res.ok ? res.text() : Promise.reject(new Error('HTTP ' + res.status))))
          .then(svgText => {
            if (!svgText || !svgText.includes('<svg')) return;
            const uri = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgText);
            dataUriCache[id] = uri;
            warmImage(id, uri);
          })
          .catch(() => warmImage(id, url));
      } else {
        warmImage(id, url);
      }
    }
  }

  function detailedSvg(id) {
    if (id === 'j1') return originalSvg(id);
    if (!/^(?:[mps][1-9]|z[1-7]|f[1-8])$/.test(id)) return '';
    const n = Number(id[1]);
    const s = id[0];
    const label = s === 'z' ? ['E', 'S', 'W', 'N', 'R', 'G', 'W'][n - 1] : String(s === 'f' && n > 4 ? n - 4 : n);
    const cachedUri = dataUriCache[id];
    const url = cachedUri || fileUrlFor(id);

    // If already decoded in memory (or in headless VM without Image), render direct crisp <img>.
    if (decodedSet[id] || cachedUri || typeof Image === 'undefined') {
      return `<img class="tile-art" src="${url}" decoding="sync" loading="eager" alt="" draggable="false"><span class="tile-index" aria-hidden="true">${label}</span>`;
    }

    // Cold-load protection: show instant inline vector art behind the loading <img> so tiles NEVER appear blank white.
    return `<span class="tile-fallback" aria-hidden="true">${originalSvg(id)}</span><img class="tile-art tile-art-loading" src="${url}" decoding="async" loading="eager" alt="" draggable="false" onload="this.classList.remove('tile-art-loading');if(this.previousElementSibling)this.previousElementSibling.remove();" onerror="this.remove()"><span class="tile-index" aria-hidden="true">${label}</span>`;
  }

  g.MahjongTileArt = {
    svg: detailedSvg,
    fallbackSvg: originalSvg,
    preloadAll,
    isReady: id => id === 'j1' || !!(decodedSet[id] || dataUriCache[id]),
    ids
  };

  // Start background warm-up automatically in real browsers.
  preloadAll();
})(typeof globalThis !== 'undefined' ? globalThis : window);
