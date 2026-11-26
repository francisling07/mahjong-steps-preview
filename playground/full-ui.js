/* One shared, playable table for four rule sets.
   Supports auto-advance pacing, tap-twice/keyboard shortcuts, real-time Tenpai preview,
   full discard pool overview, winner hand decomposition, Web Audio feedback & partial DOM patching. */
(function (g) {
  'use strict';

  const E = g.MahjongFullPlayEngine;
  const A = g.MahjongFullPlayAdvisor;
  const J = g.MahjongPlaygroundJudges;
  const art = g.MahjongTileArt;
  const MCRF = g.MahjongMCRFans;
  const Utils = g.MahjongUtils || null;
  const Sound = g.MahjongSound || null;

  const PACE_KEY = 'mj-play-pace';
  const PACE_ORDER = ['medium', 'fast', 'slow', 'manual'];
  const PACE_MS = { slow: 950, medium: 500, fast: 200 };

  const L = {
    zh: {
      title: '完整牌桌操练',
      liveTable: '单屏牌桌',
      sub: '从发牌一直打到本局结束。你坐东家，其他三家由练习对手操作。',
      modes: { hk: '香港麻将', sc: '四川血战到底', am: '美式麻将', mcr: '中国国标' },
      start: '开始完整一局',
      restart: '同样牌序重开',
      new: '换一副牌',
      back: '返回首页',
      short: '单次关键决策局',
      scExchange: '开启换三张',
      amSecond: '再进行第二轮 Charleston',
      you: '你 · 东',
      seats: ['你 · 东', '南家', '西家', '北家'],
      winds: ['东', '南', '西', '北'],
      roundWind: '东圈',
      dealer: '庄',
      acting: '出牌中',
      missingBadge: '缺',
      wall: '牌墙',
      turn: '轮到',
      hand: '你的手牌',
      discards: '弃牌',
      melds: '公开牌组',
      points: '分数变化',
      choose: '点击手牌选择',
      submit: '打出所选牌',
      tapAgain: '再点打出',
      selectToDiscard: '轮到你出牌：点选一次预览，再点一次直接打出',
      currentDiscard: '当前弃牌',
      latestDiscard: '最近弃牌',
      justDiscarded: '打出',
      drew: '摸进',
      replacementDraw: '补摸',
      newTile: '新摸',
      continue: '继续摸打',
      autoAdvancing: '自动推进中…',
      pass3: '传出所选三张',
      exchange3: '换出所选三张',
      missing: '选择定缺花色',
      win: '胡牌',
      winBadge: '胡',
      selfDraw: '自摸',
      discardWin: '点炮胡',
      chow: '吃',
      pung: '碰',
      kong: '杠',
      addedKong: '加杠',
      concealedKong: '暗杠',
      roots: '根',
      pass: '过牌',
      hint: '局面提示',
      advice: '出牌建议',
      pool: '牌池总览',
      poolTitle: '完整牌河与剩余张数',
      poolDiscards: '四家完整出牌',
      poolRemaining: '公开可见剩余张数（仅计公开牌与你的手牌）',
      poolEmpty: '暂无弃牌',
      remainingUnit: '剩',
      close: '关闭',
      scopeLabel: '教学规则范围',
      keep: '建议保留',
      visible: '只依据你的手牌和公开牌；不会查看对手暗牌或未来牌墙。',
      scope: '教学版裁定：香港采用无花、三番起胡的常见番种子集；四川采用已实现的基础番型与杠分；美式使用原创教学卡样及简化支付。复杂桌规和全部番种仍以正式规则为准。',
      amScope: '原创卡样不代表 NMJL 年度卡，也不能用于官方对局。',
      exchange: '换牌',
      charleston: 'Charleston 传牌',
      claim: '响应弃牌',
      playing: '摸打中',
      ended: '本局结束',
      draw: '牌墙摸尽',
      winResult: '有人胡牌',
      threeWins: '三家胡牌，本局结束',
      safety: '本局因保护限制结束',
      error: '此步无法执行，请重新选择。',
      revealed: '已公开',
      unknown: '暗牌',
      replay: '本局经过',
      resultLabel: '结算',
      winHandTitle: '胡牌牌型',
      seed: '牌序编号',
      suits: { m: '万', p: '筒', s: '条' },
      suitFull: { m: '万子', p: '筒子', s: '条子', z: '字牌' },
      phaseNotice: '先完成开局步骤',
      flower: '花牌按练习版作为普通牌处理。',
      mcrScope: '国标牌桌使用 144 张牌、自动补花和 8 分起和。自动算番只覆盖已验证的常用番种；其他完整牌型可自主核分并继续此局。',
      mcrReview: '自主核分',
      mcrExplain: '这手牌结构成立。请选择你已核对的有效番种；系统只检查合计达到 8 分，不验证所选番种及排除关系。花牌在起和后另加。',
      mcrConfirm: '按所选番种和牌',
      mcrCancel: '返回牌桌',
      mcrSelected: '已选番种',
      mcrFlower: '花牌',
      mcrAuto: '系统已识别',
      paceLabels: { fast: '节奏：快', medium: '节奏：中', slow: '节奏：慢', manual: '逐步观察' },
      soundOn: '音效开',
      soundOff: '静音',
      tenpaiDot: '听',
      tenpaiLabel: '打出后听牌',
      tenpaiTotal: '共剩 {n} 张',
      tenpaiFanNote: '牌型听牌，注意起胡番数',
      keysHint: '快捷键：←/→ 选牌 · Enter 出牌 · Space 过牌'
    },
    tw: {
      title: '完整牌桌操練',
      liveTable: '單屏牌桌',
      sub: '從發牌一直打到本局結束。你坐東家，其他三家由練習對手操作。',
      modes: { hk: '香港麻雀', sc: '四川血戰到底', am: '美式麻雀', mcr: '中國國標' },
      start: '開始完整一局',
      restart: '同樣牌序重開',
      new: '換一副牌',
      back: '返回首頁',
      short: '單次關鍵決策局',
      scExchange: '開啟換三張',
      amSecond: '再進行第二輪 Charleston',
      you: '你 · 東',
      seats: ['你 · 東', '南家', '西家', '北家'],
      winds: ['東', '南', '西', '北'],
      roundWind: '東圈',
      dealer: '莊',
      acting: '出牌中',
      missingBadge: '缺',
      wall: '牌牆',
      turn: '輪到',
      hand: '你的手牌',
      discards: '棄牌',
      melds: '公開牌組',
      points: '分數變化',
      choose: '點擊手牌選擇',
      submit: '打出所選牌',
      tapAgain: '再點打出',
      selectToDiscard: '輪到你出牌：點選一次預覽，再點一次直接打出',
      currentDiscard: '當前棄牌',
      latestDiscard: '最近棄牌',
      justDiscarded: '打出',
      drew: '摸進',
      replacementDraw: '補摸',
      newTile: '新摸',
      continue: '繼續摸打',
      autoAdvancing: '自動推進中…',
      pass3: '傳出所選三張',
      exchange3: '換出所選三張',
      missing: '選擇定缺花色',
      win: '胡牌',
      winBadge: '胡',
      selfDraw: '自摸',
      discardWin: '放銃胡',
      chow: '吃',
      pung: '碰',
      kong: '槓',
      addedKong: '加槓',
      concealedKong: '暗槓',
      roots: '根',
      pass: '過牌',
      hint: '局面提示',
      advice: '出牌建議',
      pool: '牌池總覽',
      poolTitle: '完整牌河與剩餘張數',
      poolDiscards: '四家完整出牌',
      poolRemaining: '公開可見剩餘張數（僅計公開牌與你的手牌）',
      poolEmpty: '暫無棄牌',
      remainingUnit: '剩',
      close: '關閉',
      scopeLabel: '教學規則範圍',
      keep: '建議保留',
      visible: '只依據你的手牌和公開牌；不會查看對手暗牌或未來牌牆。',
      scope: '教學版裁定：香港採用無花、三番起胡的常見番種子集；四川採用已實作的基礎番型與槓分；美式使用原創教學卡樣及簡化支付。複雜桌規和全部番種仍以正式規則為準。',
      amScope: '原創卡樣不代表 NMJL 年度卡，也不能用於官方對局。',
      exchange: '換牌',
      charleston: 'Charleston 傳牌',
      claim: '響應棄牌',
      playing: '摸打中',
      ended: '本局結束',
      draw: '牌牆摸盡',
      winResult: '有人胡牌',
      threeWins: '三家胡牌，本局結束',
      safety: '本局因保護限制結束',
      error: '此步無法執行，請重新選擇。',
      revealed: '已公開',
      unknown: '暗牌',
      replay: '本局經過',
      resultLabel: '結算',
      winHandTitle: '胡牌牌型',
      seed: '牌序編號',
      suits: { m: '萬', p: '筒', s: '索' },
      suitFull: { m: '萬子', p: '筒子', s: '索子', z: '字牌' },
      phaseNotice: '先完成開局步驟',
      flower: '花牌按練習版作為普通牌處理。',
      mcrScope: '國標牌桌使用 144 張牌、自動補花和 8 分起和。自動算番只涵蓋已驗證的常用番種；其他完整牌型可自主核分並繼續此局。',
      mcrReview: '自主核分',
      mcrExplain: '這手牌結構成立。請選擇已核對的有效番種；系統只檢查合計達 8 分，不驗證所選番種及排除關係。花牌在起和後另加。',
      mcrConfirm: '按所選番種和牌',
      mcrCancel: '返回牌桌',
      mcrSelected: '已選番種',
      mcrFlower: '花牌',
      mcrAuto: '系統已識別',
      paceLabels: { fast: '節奏：快', medium: '節奏：中', slow: '節奏：慢', manual: '逐步觀察' },
      soundOn: '音效開',
      soundOff: '靜音',
      tenpaiDot: '聽',
      tenpaiLabel: '打出後聽牌',
      tenpaiTotal: '共剩 {n} 張',
      tenpaiFanNote: '牌型聽牌，注意起胡番數',
      keysHint: '快捷鍵：←/→ 選牌 · Enter 出牌 · Space 過牌'
    },
    en: {
      title: 'Full Table Playground',
      liveTable: 'Live table',
      sub: 'Play from the deal until the hand ends. You sit East against three training bots.',
      modes: { hk: 'Hong Kong', sc: 'Sichuan Blood Battle', am: 'American', mcr: 'Chinese Official (MCR)' },
      start: 'Start a full hand',
      restart: 'Replay same deal',
      new: 'New deal',
      back: 'Back home',
      short: 'One-decision scenes',
      scExchange: 'Exchange three tiles',
      amSecond: 'Add second Charleston',
      you: 'You · East',
      seats: ['You · East', 'South', 'West', 'North'],
      winds: ['E', 'S', 'W', 'N'],
      roundWind: 'East Round',
      dealer: 'Dealer',
      acting: 'Turn',
      missingBadge: 'Void',
      wall: 'Wall',
      turn: 'Turn',
      hand: 'Your hand',
      discards: 'Discards',
      melds: 'Exposed groups',
      points: 'Point change',
      choose: 'Select tiles in your hand',
      submit: 'Discard selected tile',
      tapAgain: 'Tap to discard',
      selectToDiscard: 'Your turn: tap once to preview waits, tap again to discard',
      currentDiscard: 'Current discard',
      latestDiscard: 'Latest discard',
      justDiscarded: 'discarded',
      drew: 'drew',
      replacementDraw: 'drew a replacement',
      newTile: 'New draw',
      continue: 'Continue',
      autoAdvancing: 'Auto advancing…',
      pass3: 'Pass selected three',
      exchange3: 'Exchange selected three',
      missing: 'Choose missing suit',
      win: 'Declare win',
      winBadge: 'Win',
      selfDraw: 'Self draw',
      discardWin: 'Discard win',
      chow: 'Chow',
      pung: 'Pung',
      kong: 'Kong',
      addedKong: 'Added kong',
      concealedKong: 'Concealed kong',
      roots: 'roots',
      pass: 'Pass',
      hint: 'Situation hint',
      advice: 'Discard suggestion',
      pool: 'Discard pool',
      poolTitle: 'All discards & visible counts',
      poolDiscards: 'Complete discard rivers',
      poolRemaining: 'Visible tiles remaining (public table + your hand only)',
      poolEmpty: 'No discards yet',
      remainingUnit: 'left',
      close: 'Close',
      scopeLabel: 'Teaching rules',
      keep: 'Keep connected tiles',
      visible: 'Uses only your hand and public tiles. It never reads hidden hands or future wall tiles.',
      scope: 'Teaching adjudication: Hong Kong uses a no-flower, three-fan common-pattern subset; Sichuan uses implemented core patterns and kong payments; American uses an original teaching card and simplified payments. Check formal rules for advanced cases.',
      amScope: 'The original practice card is not an NMJL annual card and cannot be used for official play.',
      exchange: 'Exchange',
      charleston: 'Charleston',
      claim: 'Respond to discard',
      playing: 'Playing',
      ended: 'Hand ended',
      draw: 'Wall exhausted',
      winResult: 'A player won',
      threeWins: 'Three players won',
      safety: 'Hand ended at safety limit',
      error: 'That action is unavailable. Choose again.',
      revealed: 'Exposed',
      unknown: 'Hidden tiles',
      replay: 'Hand history',
      resultLabel: 'Result',
      winHandTitle: 'Winning hand',
      seed: 'Deal seed',
      suits: { m: 'Craks', p: 'Dots', s: 'Bams' },
      suitFull: { m: 'Characters', p: 'Dots', s: 'Bamboo', z: 'Honors' },
      phaseNotice: 'Complete the opening step',
      flower: 'Flowers are treated as ordinary teaching tiles.',
      mcrScope: 'MCR uses 144 tiles, automatic flower replacement and an eight-point minimum. Automatic scoring covers a verified common subset; use self review for other completed shapes.',
      mcrReview: 'Self review score',
      mcrExplain: 'This hand has a winning shape. Select fans you have verified. The tool checks the eight-point total only; it does not verify selected fan conditions or exclusions. Add flowers after qualifying.',
      mcrConfirm: 'Declare with selected fans',
      mcrCancel: 'Return to table',
      mcrSelected: 'Selected fans',
      mcrFlower: 'Flowers',
      mcrAuto: 'Automatically recognized',
      paceLabels: { fast: 'Pace: Fast', medium: 'Pace: Med', slow: 'Pace: Slow', manual: 'Step by step' },
      soundOn: 'Sound on',
      soundOff: 'Muted',
      tenpaiDot: 'W',
      tenpaiLabel: 'Waits after discard',
      tenpaiTotal: '{n} visible outs',
      tenpaiFanNote: 'Shape ready — verify min score',
      keysHint: 'Keys: ←/→ select · Enter discard · Space pass'
    }
  };

  let lang = 'zh';
  let mode = 'hk';
  let state = null;
  let selected = [];
  let showHint = false;
  let showAdvice = false;
  let showPool = false;
  let feedback = '';
  let motion = null;
  let showResult = true;
  let showMcrReview = false;
  let manualFans = [];
  let pace = readPace();
  let autoTimer = null;
  let onAsyncUpdate = null;
  let tenpaiCacheState = null;
  let tenpaiCache = Object.create(null);

  // Partial DOM patch cache (real browser only)
  let patchMeta = null;

  const options = { scExchange: false, amSecondCharleston: false };

  function readPace() {
    const saved = Utils ? Utils.storage.get(PACE_KEY) : (() => { try { return g.localStorage?.getItem(PACE_KEY); } catch (_) { return null; } })();
    return PACE_ORDER.includes(saved) ? saved : 'medium';
  }

  function savePace(next) {
    if (!PACE_ORDER.includes(next)) return;
    pace = next;
    if (Utils) Utils.storage.set(PACE_KEY, pace);
    else { try { g.localStorage?.setItem(PACE_KEY, pace); } catch (_) {} }
  }

  function clearAutoTimer() {
    if (autoTimer !== null && typeof g.clearTimeout === 'function') {
      g.clearTimeout(autoTimer);
    }
    autoTimer = null;
  }

  function isAutoPassEligible(s) {
    if (!s || s.phase !== 'claim' || pace === 'manual') return false;
    const a = E.available(s);
    return !!(a && a.actions && a.actions.length === 1 && a.actions[0].kind === 'pass');
  }

  function scheduleAutoPass() {
    clearAutoTimer();
    if (!isAutoPassEligible(state) || typeof g.setTimeout !== 'function') return;
    const delay = PACE_MS[pace] || 500;
    autoTimer = g.setTimeout(() => {
      autoTimer = null;
      if (!isAutoPassEligible(state)) return;
      apply({ type: 'claim', id: 'pass' });
      if (typeof onAsyncUpdate === 'function') onAsyncUpdate();
    }, delay);
  }

  const c = () => L[lang];
  const esc = Utils
    ? Utils.esc
    : x => String(x ?? '').replace(/[&<>"']/g, y => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[y]));

  function tileName(t) {
    if (Utils) return Utils.tileName(t, lang, 'short');
    if (t === 'j1') return 'Joker';
    if (t[0] === 'f') {
      const names = lang === 'en'
        ? ['Spring', 'Summer', 'Autumn', 'Winter', 'Plum', 'Orchid', 'Chrysanthemum', 'Bamboo']
        : lang === 'tw'
          ? ['春', '夏', '秋', '冬', '梅', '蘭', '菊', '竹']
          : ['春', '夏', '秋', '冬', '梅', '兰', '菊', '竹'];
      return names[Number(t[1]) - 1] || t;
    }
    if (t[0] === 'z') {
      const names = lang === 'en'
        ? ['East', 'South', 'West', 'North', 'Red', 'Green', 'White']
        : lang === 'tw'
          ? ['東', '南', '西', '北', '中', '發', '白']
          : ['东', '南', '西', '北', '中', '发', '白'];
      return names[Number(t[1]) - 1] || t;
    }
    return `${t[1]} ${c().suits[t[0]]}`;
  }

  function tile(t) {
    return `<span class="tile" role="img" aria-label="${esc(tileName(t))}">${art.svg(t)}</span>`;
  }

  function getTenpaiMap() {
    if (!state || state.phase !== 'turn' || state.turn !== 0 || state.mode === 'am') return Object.create(null);
    const key = `${state.mode}|${state.hands[0].join(',')}|${state.melds[0].length}|${state.discards.reduce((n, d) => n + d.length, 0)}|${state.missingSuit?.[0] || ''}`;
    if (tenpaiCacheState !== key) {
      tenpaiCacheState = key;
      tenpaiCache = A && typeof A.tenpaiMap === 'function' ? A.tenpaiMap(state) : Object.create(null);
    }
    return tenpaiCache;
  }

  function activeSeatIndex() {
    if (!state || state.phase === 'ended') return -1;
    if (state.phase === 'claim' && state.pending) return state.pending.discarder;
    if (state.phase === 'turn') return state.turn;
    return 0;
  }

  function missingBadgeHtml(seat) {
    if (!state || state.mode !== 'sc') return '';
    const ms = state.missingSuit?.[seat];
    if (!['m', 'p', 's'].includes(ms)) return '';
    return `<span class="fp-missing-badge fp-suit-${ms}">${c().missingBadge}${c().suits[ms]}</span>`;
  }

  function choices() {
    return ['hk', 'sc', 'am', 'mcr']
      .map(x => `<button class="pg-tab ${mode === x ? 'active' : ''}" data-full-mode="${x}" aria-pressed="${mode === x}">${c().modes[x]}</button>`)
      .join('');
  }

  function setup() {
    return `<div class="workspace pg-page fp-page">
      <button class="back" data-full-back>${c().back}</button>
      <div class="eyebrow pg-eyebrow">FULL TABLE PLAYGROUND</div>
      <h1>${c().title}</h1>
      <p class="sub">${c().sub}</p>
      <div class="pg-tabs">${choices()}</div>
      <div class="fp-setup">
        <h2>${c().modes[mode]}</h2>
        ${mode === 'sc' ? `<button class="fp-toggle" data-full-option="scExchange" aria-pressed="${options.scExchange}">${options.scExchange ? '✓ ' : '○ '}${c().scExchange}</button>` : ''}
        ${mode === 'am' ? `<button class="fp-toggle" data-full-option="amSecondCharleston" aria-pressed="${options.amSecondCharleston}">${options.amSecondCharleston ? '✓ ' : '○ '}${c().amSecond}</button><p class="pg-scope">${c().amScope} ${c().flower}</p>` : ''}
        ${mode === 'mcr' ? `<p class="pg-scope">${c().mcrScope}</p>` : ''}
        <div class="fp-setup-actions">
          <button class="btn" data-full-start>${c().start} →</button>
          ${mode === 'mcr' ? '' : `<button class="btn alt" data-full-short>${c().short} →</button>`}
        </div>
      </div>
      <p class="pg-scope">${c().scope}</p>
    </div>`;
  }

  function latestVisibleEvent() {
    for (let i = state.history.length - 1; i >= 0; i--) {
      const e = state.history[i];
      if (['draw', 'replacement'].includes(e.type) && e.seat === 0) return e;
      if (['discard', 'claim', 'kong', 'kong-attempt', 'joker-exchange', 'win', 'flower'].includes(e.type)) return e;
    }
    return null;
  }

  function focusLabel(e) {
    if (e.type === 'kong-attempt') return `${c().seats[e.seat]} ${c().addedKong}`;
    if (e.type === 'flower') return `${c().seats[e.seat]} ${c().mcrFlower}`;
    if (e.type === 'discard') return `${c().seats[e.seat]} ${c().justDiscarded}`;
    if (['draw', 'replacement'].includes(e.type)) return `${c().seats[0]} ${e.type === 'replacement' ? c().replacementDraw : c().drew}`;
    if (e.type === 'claim') return `${c().seats[e.seat]} ${c()[e.kind] || c().claim}`;
    if (e.type === 'kong') return `${c().seats[e.seat]} ${c().kong}`;
    return `${c().seats[e.seat]} ${eventName(e.type)}`;
  }

  function exposed(i, focus, animate) {
    return state.melds[i]
      .map((m, j) => {
        const isFresh = focus?.seat === i && ['claim', 'kong'].includes(focus.type) && j === state.melds[i].length - 1;
        return `<span class="fp-meld-set${isFresh ? ' fresh' : ''}${animate && isFresh ? ' moving' : ''}"><small>${c()[m.type] || c().melds}</small>${m.tiles.map(tile).join('')}</span>`;
      })
      .join('');
  }

  function opponentInner(i) {
    const n = state.hands[i].length;
    const pts = `${state.points[i] > 0 ? '+' : ''}${state.points[i]}`;
    const isTurn = activeSeatIndex() === i;
    return `<div class="fp-opponent-label">
        <b><span class="fp-wind-pill">${c().winds[i]}</span>${c().seats[i]}${missingBadgeHtml(i)}</b>
        <span>${n} ${c().unknown} · ${pts}${isTurn ? ` · <em>${c().acting}</em>` : ''}</span>
      </div>
      <div class="fp-backs" aria-label="${esc(c().unknown)} ${n}">${Array.from({ length: Math.min(n, 11) }, () => '<i aria-hidden="true"></i>').join('')}</div>`;
  }

  function opponent(i, pos) {
    const isTurn = activeSeatIndex() === i;
    return `<div class="fp-opponent fp-opponent-${pos}${state.active[i] ? '' : ' inactive'}${isTurn ? ' is-turn' : ''}" data-seat="${i}">${opponentInner(i)}</div>`;
  }

  function riverTileHtml(t, isCurrent, isLanded) {
    return `<span class="fp-river-tile${isCurrent ? ' current' : ''}${isLanded ? ' landed' : ''}">${tile(t)}</span>`;
  }

  function river(i, pos, focus, animate) {
    const pile = state.discards[i];
    const isCurrent = state.phase === 'claim' && !state.pending?.robKong && state.pending?.discarder === i;
    const landed = animate && focus?.type === 'discard' && focus.seat === i;
    return `<div class="fp-river fp-river-${pos}" data-river-seat="${i}" aria-label="${esc(c().seats[i] + ' · ' + c().discards + ' · ' + c().melds)}">
      <button type="button" class="fp-river-label" data-full-pool title="${esc(c().pool)}">
        <span>${c().seats[i]}</span>
        <small>${pile.length} ${c().discards}</small>
      </button>
      <div class="fp-flower-zone"${state.mode === 'mcr' && state.flowers[i].length ? '' : ' hidden'}>${state.mode === 'mcr' && state.flowers[i].length ? `<span>${c().mcrFlower}</span>${state.flowers[i].map(tile).join('')}` : ''}</div>
      <div class="fp-zone-melds"${state.melds[i].length ? '' : ' hidden'}>${state.melds[i].length ? `<span>${c().melds}</span>${exposed(i, focus, animate)}` : ''}</div>
      <div class="fp-river-tiles">${pile.map((t, j) => riverTileHtml(t, isCurrent && j === pile.length - 1, landed && j === pile.length - 1)).join('') || '<span class="fp-river-empty">·</span>'}</div>
    </div>`;
  }

  function tableCenterInner(focus, animate) {
    return `<div class="fp-wall-mark">
        <span class="fp-round-badge">${c().roundWind}</span>
        <span class="fp-wall-backs"><i></i><i></i><i></i></span>
        <b>${state.wall.length}</b>
        <small>${c().wall}</small>
      </div>
      ${focus ? `<div class="fp-table-last${state.phase === 'claim' ? ' active' : ''}${focus.type === 'draw' || focus.type === 'replacement' ? ' draw-event' : ''}${animate ? ' moving' : ''}" role="status" aria-live="polite"><small>${esc(focusLabel(focus))}</small>${focus.tile ? tile(focus.tile) : ''}<b>${focus.tile ? esc(tileName(focus.tile)) : ''}</b></div>` : ''}`;
  }

  function tableCenter(focus, animate) {
    return `<div class="fp-table-center">${tableCenterInner(focus, animate)}</div>`;
  }

  function board(focus, animate) {
    return `<div class="fp-table" aria-label="${esc(c().title)}">
      ${opponent(2, 'top')}${opponent(3, 'left')}${opponent(1, 'right')}
      <div class="fp-play-area">
        ${river(2, 'top', focus, animate)}
        ${river(3, 'left', focus, animate)}
        ${tableCenter(focus, animate)}
        ${river(1, 'right', focus, animate)}
        ${river(0, 'bottom', focus, animate)}
      </div>
    </div>`;
  }

  function drawnTileIndex(focus) {
    return focus?.seat === 0 && ['draw', 'replacement'].includes(focus.type)
      ? state.hands[0].lastIndexOf(focus.tile)
      : -1;
  }

  function rackContent(focus, animate) {
    const a = E.available(state);
    const canChoose = ['turn', 'exchange', 'charleston'].includes(a?.phase);
    const canDiscard = a?.phase === 'turn' ? a.discards : [];
    const drawn = drawnTileIndex(focus);
    const tMap = getTenpaiMap();

    const handButton = (t, i, isDraw) => {
      const isSelected = selected.includes(i);
      const hasTenpai = a?.phase === 'turn' && !!tMap[i];
      const showTapAgain = isSelected && a?.phase === 'turn';
      return `<button class="fp-tile${isSelected ? ' selected' : ''}${isDraw ? ' new-draw' : ''}${isDraw && animate ? ' moving' : ''}${hasTenpai ? ' has-tenpai' : ''}" data-full-select="${i}" aria-pressed="${isSelected}" aria-label="${esc(tileName(t))}" ${!canChoose || (a.phase === 'turn' && !canDiscard.includes(i)) ? 'disabled' : ''}>${tile(t)}${isDraw ? `<small class="fp-new-label">${c().newTile}</small>` : ''}${hasTenpai ? `<span class="fp-tenpai-dot" aria-hidden="true">${c().tenpaiDot}</span>` : ''}${showTapAgain ? `<small class="fp-tap-hint">${c().tapAgain}</small>` : ''}</button>`;
    };

    const regular = state.hands[0].map((t, i) => (i === drawn ? '' : handButton(t, i, false))).join('');
    const newTile = drawn >= 0 ? `<span class="fp-draw-slot">${handButton(state.hands[0][drawn], drawn, true)}</span>` : '';
    return { regular, newTile, drawn, a, tMap };
  }

  function ownLabelHtml() {
    const pts = `${state.points[0] > 0 ? '+' : ''}${state.points[0]}`;
    return `<b><span class="fp-dealer-badge">${c().dealer}</span><span class="fp-wind-pill">${c().winds[0]}</span>${c().seats[0]}${missingBadgeHtml(0)}</b><span>${pts} · ${c().hand} ${state.hands[0].length}</span><small class="fp-keys-hint">${c().keysHint}</small>`;
  }

  function rack(focus, animate) {
    const { regular, newTile } = rackContent(focus, animate);
    const isTurn = activeSeatIndex() === 0;
    return `<section class="fp-own-seat${isTurn ? ' is-turn' : ''}">
      <div class="fp-own-label">${ownLabelHtml()}</div>
      <div class="fp-rack">${regular}${newTile}</div>
    </section>`;
  }

  function tenpaiPreviewHtml(a) {
    if (!a || a.phase !== 'turn' || selected.length !== 1) return '';
    const info = getTenpaiMap()[selected[0]];
    if (!info || !info.waits.length) return '';
    return `<div class="fp-tenpai-bar" role="status">
      <span class="fp-tenpai-title">${c().tenpaiLabel}</span>
      <div class="fp-tenpai-waits">${info.waits.map(w => `<span class="fp-tenpai-wait${w.remaining === 0 ? ' empty' : ''}${w.legal ? '' : ' warn'}">${tile(w.tile)}<small>${c().remainingUnit} ${w.remaining}</small></span>`).join('')}</div>
      <span class="fp-tenpai-meta">${c().tenpaiTotal.replace('{n}', info.totalRemaining)}${!info.hasLegalWin ? ` · <em>${c().tenpaiFanNote}</em>` : ''}</span>
    </div>`;
  }

  function actions() {
    const a = E.available(state);
    if (!a || a.phase === 'ended') return '';
    let buttons = '';
    let lead = '';
    if (a.phase === 'exchange' || a.phase === 'charleston') {
      lead = c().phaseNotice;
      buttons = `<button class="btn" data-full-send ${selected.length !== 3 ? 'disabled' : ''}>${a.phase === 'exchange' ? c().exchange3 : c().pass3}</button>`;
    }
    if (a.phase === 'missing') {
      lead = c().missing;
      buttons = a.suits.map(x => `<button class="btn alt" data-full-missing="${x}">${c().suits[x]}</button>`).join('');
    }
    if (a.phase === 'turn') {
      lead = c().selectToDiscard;
      buttons = `<button class="btn" data-full-discard ${selected.length !== 1 ? 'disabled' : ''}>${c().submit}${selected.length === 1 ? ' · ' + esc(tileName(state.hands[0][selected[0]])) : ''}</button>`
        + (a.canWin ? `<button class="btn fp-win-button" data-full-win>${c().win} · ${a.win.fan ?? a.win.base ?? a.win.value ?? a.win.totalFan}</button>` : '')
        + (a.reviewWin ? `<button class="btn alt" data-full-mcr-review>${c().mcrReview}</button>` : '')
        + a.kongs.map((k, i) => `<button class="btn alt" data-full-kong="${i}">${k.kind === 'added' ? c().addedKong : c().concealedKong} ${esc(tileName(k.tile))}</button>`).join('')
        + a.exchanges.map((x, i) => `<button class="btn alt" data-full-joker="${i}">Joker ↔ ${esc(tileName(x.tile))}</button>`).join('');
    }
    if (a.phase === 'claim') {
      const autoHint = isAutoPassEligible(state) ? `<span class="fp-auto-tag">${c().autoAdvancing}</span>` : '';
      lead = `${c().seats[a.from]} ${a.robKong ? c().addedKong : c().justDiscarded} ${tile(a.discard)} <strong>${esc(tileName(a.discard))}</strong>${autoHint}`;
      buttons = a.actions.map(x => {
        const label = x.kind === 'pass' ? c().continue
          : x.kind === 'win' ? c().win
            : x.kind === 'review' ? c().mcrReview
              : x.kind === 'chow' ? c().chow
                : x.kind === 'pung' ? c().pung
                  : c().kong;
        return `<button class="btn ${x.kind === 'pass' ? 'fp-continue' : 'fp-call'}" data-full-claim="${esc(x.id)}">${label}${x.used.length ? ' · ' + x.used.map(tileName).join(' ') : ''}</button>`;
      }).join('');
    }
    return `<section class="fp-decision-bar${a.phase === 'claim' ? ' is-claim' : ''}" aria-label="${esc(a.phase === 'claim' ? c().claim : c().choose)}">
      ${tenpaiPreviewHtml(a)}
      <div class="fp-decision-row">
        <div class="fp-decision-lead">${lead}</div>
        <div class="fp-actions">${buttons}</div>
      </div>
    </section>`;
  }

  function guidance() {
    if (!showHint && !showAdvice) return '';
    const h = showHint ? A.hint(state) : null;
    const ad = showAdvice ? A.advice(state) : null;
    return `<aside class="fp-guide-panel">
      <button class="fp-guide-close" data-full-close-guide aria-label="${esc(c().close)}">×</button>
      ${showHint ? `<h2>${c().hint}</h2><p>${esc(h?.[lang] || '')}</p>` : ''}
      ${showAdvice && ad ? `<div class="fp-advice"><h2>${c().advice}</h2><b>${tile(ad.tile)} ${esc(tileName(ad.tile))}</b><p>${esc(ad.reason[lang])}</p>${ad.keep.length ? `<small>${c().keep}: ${ad.keep.map(group => group.map(tileName).join(' + ')).join(' / ')}</small>` : ''}${ad.waitNote ? `<small>${esc(ad.waitNote[lang])}</small>` : ''}<small>${c().visible}</small></div>` : ''}
    </aside>`;
  }

  function poolOverviewPanel() {
    if (!showPool || !state) return '';
    const groups = state.mode === 'sc' ? ['m', 'p', 's'] : ['m', 'p', 's', 'z'];
    const suitTiles = s => Array.from({ length: s === 'z' ? 7 : 9 }, (_, i) => s + (i + 1));

    const riversHtml = [0, 1, 2, 3].map(seat => {
      const pile = state.discards[seat];
      const melds = state.melds[seat];
      return `<div class="fp-pool-seat">
        <div class="fp-pool-seat-head"><strong>${c().seats[seat]}${missingBadgeHtml(seat)}</strong><span>${pile.length} ${c().discards}</span></div>
        ${melds.length ? `<div class="fp-pool-melds">${melds.map(m => `<span class="fp-meld-set"><small>${c()[m.type] || c().melds}</small>${m.tiles.map(tile).join('')}</span>`).join('')}</div>` : ''}
        <div class="fp-pool-tiles">${pile.length ? pile.map(t => `<span class="fp-pool-tile">${tile(t)}</span>`).join('') : `<span class="fp-pool-empty">${c().poolEmpty}</span>`}</div>
      </div>`;
    }).join('');

    const counterHtml = groups.map(s => `<div class="fp-counter-row">
      <span class="fp-counter-suit">${c().suitFull[s]}</span>
      <div class="fp-counter-tiles">${suitTiles(s).map(t => {
        const rem = A.remaining(state, t);
        return `<span class="fp-counter-cell${rem === 0 ? ' zero' : ''}">${tile(t)}<b>${rem}</b></span>`;
      }).join('')}</div>
    </div>`).join('');

    return `<section class="fp-pool-panel" role="dialog" aria-label="${esc(c().poolTitle)}">
      <button class="fp-result-close" data-full-pool-close aria-label="${esc(c().close)}">×</button>
      <h2>${c().poolTitle}</h2>
      <h3>${c().poolDiscards}</h3>
      <div class="fp-pool-grid">${riversHtml}</div>
      <h3>${c().poolRemaining}</h3>
      <div class="fp-counter-grid">${counterHtml}</div>
    </section>`;
  }

  function winDetails(w) {
    const j = w.judged || {};
    if (state.mode === 'am') return esc(j.lineTitle?.[lang] || j.lineId || '');
    if (state.mode === 'mcr') {
      return esc((j.breakdown || []).map(x => `${x.name?.[lang] || x.no} ${x.fan}`).join(' · ') + (j.coverage === 'self-reviewed' ? ' · ' + c().mcrReview : ''));
    }
    if (state.mode === 'sc') return esc(`${j.base || ''}${j.roots ? ` · ${j.roots} ${c().roots}` : ''}`);
    const names = {
      allSequences: ['平胡', '平胡', 'All sequences'],
      allTriplets: ['对对胡', '對對胡', 'All triplets'],
      allHonors: ['字一色', '字一色', 'All honors'],
      fullFlush: ['清一色', '清一色', 'Full flush'],
      halfFlush: ['混一色', '混一色', 'Half flush'],
      dragon: ['三元牌', '三元牌', 'Dragon'],
      seatWind: ['门风', '門風', 'Seat wind'],
      roundWind: ['圈风', '圈風', 'Round wind'],
      concealed: ['门清', '門清', 'Concealed'],
      selfDraw: ['自摸', '自摸', 'Self draw'],
      orphans: ['十三幺', '十三么', 'Thirteen orphans']
    };
    const k = lang === 'zh' ? 0 : lang === 'tw' ? 1 : 2;
    return esc((j.breakdown || []).map(x => `${names[x.id]?.[k] || x.id} ${x.fan}`).join(' · '));
  }

  function findWinningTileFor(w) {
    if (w.tile) return w.tile;
    const winIdx = state.history.findIndex(e => e.type === 'win' && e.seat === w.seat);
    const slice = winIdx >= 0 ? state.history.slice(0, winIdx) : state.history;
    for (let i = slice.length - 1; i >= 0; i--) {
      const e = slice[i];
      if (e.seat === w.seat && ['draw', 'replacement'].includes(e.type) && e.tile) return e.tile;
    }
    return null;
  }

  function winningHandVisual(w) {
    const melds = state.melds[w.seat] || [];
    const flowers = state.flowers?.[w.seat] || [];
    const rawConcealed = (state.hands[w.seat] || []).slice();
    const winTile = findWinningTileFor(w);
    const fullConcealed = w.source === 'discard' && w.tile ? rawConcealed.concat([w.tile]) : rawConcealed;

    let markedWin = false;
    const renderWinTile = t => {
      const isWin = !markedWin && winTile && t === winTile;
      if (isWin) markedWin = true;
      return `<span class="fp-win-tile${isWin ? ' is-win-tile' : ''}">${tile(t)}${isWin ? `<small class="fp-win-badge">${c().winBadge}</small>` : ''}</span>`;
    };

    const exposedGroupsHtml = melds.map(m =>
      `<span class="fp-win-group exposed"><small>${c()[m.type] || c().melds}</small>${m.tiles.map(t => `<span class="fp-win-tile">${tile(t)}</span>`).join('')}</span>`
    ).join('');

    let concealedGroupsHtml = '';
    const layouts = state.mode !== 'am' && J && typeof J.decompose === 'function'
      ? J.decompose(fullConcealed, melds)
      : [];

    if (layouts.length > 0) {
      const layout = layouts[0];
      const concealedMelds = layout.groups.slice(melds.length);
      concealedGroupsHtml = concealedMelds.map(gItem =>
        `<span class="fp-win-group">${gItem.tiles.map(renderWinTile).join('')}</span>`
      ).join('') + `<span class="fp-win-group pair">${[layout.pair, layout.pair].map(renderWinTile).join('')}</span>`;
    } else {
      // Seven pairs, Thirteen Orphans, American lines, or MCR special shapes
      const sorted = Utils ? Utils.sortHand(fullConcealed.slice()) : fullConcealed.slice().sort();
      const isSevenPairs = !melds.length && sorted.length === 14 && sorted.every((t, idx) => idx % 2 === 1 || sorted[idx + 1] === t);
      if (isSevenPairs) {
        const pairs = [];
        for (let i = 0; i < sorted.length; i += 2) pairs.push([sorted[i], sorted[i + 1]]);
        concealedGroupsHtml = pairs.map(p => `<span class="fp-win-group pair">${p.map(renderWinTile).join('')}</span>`).join('');
      } else {
        concealedGroupsHtml = `<span class="fp-win-group">${sorted.map(renderWinTile).join('')}</span>`;
      }
    }

    const flowersHtml = flowers.length
      ? `<div class="fp-win-flowers"><small>${c().mcrFlower}</small>${flowers.map(tile).join('')}</div>`
      : '';

    return `<div class="fp-win-hand" aria-label="${esc(c().winHandTitle)}">
      <div class="fp-win-groups">${exposedGroupsHtml}${concealedGroupsHtml}</div>
      ${flowersHtml}
    </div>`;
  }

  function result() {
    if (state.phase !== 'ended' || !showResult) return '';
    const r = state.result || {};
    const title = r.type === 'draw' ? c().draw
      : r.type === 'three-wins' ? c().threeWins
        : r.type === 'safety-stop' ? c().safety
          : c().winResult;
    return `<section class="pg-result">
      <button class="fp-result-close" data-full-result-close aria-label="${esc(c().close)}">×</button>
      <h2>${title}</h2>
      ${state.winners.map(w => {
        const scoreLabel = w.judged?.totalFan !== undefined
          ? w.judged.totalFan + (lang === 'en' ? ' points' : ' 分')
          : w.judged?.fan !== undefined
            ? w.judged.fan + ' 番'
            : w.judged?.base !== undefined
              ? String(w.judged.base)
              : (w.judged?.value ?? '');
        return `<div class="fp-winner-card">
          <p class="fp-winner-head"><strong>${c().seats[w.seat]}</strong> · ${w.source === 'selfDraw' ? c().selfDraw : c().discardWin} · <b>${scoreLabel}</b><br><small>${winDetails(w)}</small></p>
          ${winningHandVisual(w)}
        </div>`;
      }).join('')}
      <div class="fp-score">${state.points.map((p, i) => `<span>${c().seats[i]} <b>${p > 0 ? '+' : ''}${p}</b></span>`).join('')}</div>
      <div class="fp-actions">
        <button class="btn" data-full-restart>${c().restart}</button>
        <button class="btn alt" data-full-new>${c().new}</button>
      </div>
    </section>`;
  }

  function eventName(type) {
    const names = {
      deal: ['发牌', '發牌', 'Deal'],
      draw: ['摸牌', '摸牌', 'Draw'],
      replacement: ['补牌', '補牌', 'Replacement draw'],
      'exchange-three': ['换三张', '換三張', 'Exchange three'],
      charleston: ['传牌', '傳牌', 'Charleston'],
      missing: ['定缺', '定缺', 'Missing suit'],
      discard: ['出牌', '出牌', 'Discard'],
      claim: ['吃碰杠', '吃碰槓', 'Claim'],
      'kong-payment': ['杠分', '槓分', 'Kong payment'],
      pass: ['过牌', '過牌', 'Pass'],
      win: ['胡牌', '胡牌', 'Win'],
      'round-draw': ['流局', '流局', 'Drawn hand'],
      kong: ['杠牌', '槓牌', 'Kong'],
      'joker-exchange': ['换 Joker', '換 Joker', 'Joker exchange'],
      'kong-attempt': ['加杠待响应', '加槓待回應', 'Added kong offered for robbing'],
      flower: ['补花', '補花', 'Flower replacement']
    };
    return names[type]?.[lang === 'zh' ? 0 : lang === 'tw' ? 1 : 2] || type;
  }

  function historyItemsHtml() {
    return state.history.slice(-40).reverse().map(h =>
      `<li>${h.seat === null ? '' : c().seats[h.seat] + ' · '}${esc(eventName(h.type))}${h.tile && !(h.seat !== 0 && ['draw', 'replacement'].includes(h.type)) ? ' · ' + esc(tileName(h.tile)) : ''}</li>`
    ).join('');
  }

  function history() {
    return `<details class="fp-history-menu">
      <summary>${c().replay} · ${state.history.length}</summary>
      <ol>${historyItemsHtml()}</ol>
    </details>`;
  }

  function mcrReviewPanel() {
    if (!showMcrReview || state?.mode !== 'mcr') return '';
    const total = manualFans.reduce((n, no) => n + (MCRF.byNo(no)?.points || 0), 0);
    const assessed = E.available(state)?.assessment;
    const unit = lang === 'en' ? 'points' : '分';
    let h = `<section class="pg-result fp-mcr-review" role="dialog" aria-modal="true">
      <button class="fp-result-close" data-full-mcr-cancel aria-label="${esc(c().mcrCancel)}">×</button>
      <h2>${c().mcrReview}</h2>
      <p>${c().mcrExplain}</p>
      ${assessed?.breakdown?.length ? `<p class="fp-mcr-auto">${c().mcrAuto}: ${assessed.baseFan} ${unit} · ${assessed.breakdown.map(x => esc(x.name?.[lang] || x.no)).join('、')}</p>` : ''}
      <p><strong>${c().mcrSelected}: ${total} ${unit}</strong> · ${c().mcrFlower}: ${state.flowers[0].length}</p>
      <div class="fp-mcr-fans">`;
    for (const group of MCRF.groupByPoints()) {
      if (group.points === 1 && group.fans.every(f => f.no === 81)) continue;
      h += `<details><summary>${group.points} ${unit}</summary><div>`;
      for (const f of group.fans) {
        if (f.no !== 81) {
          h += `<button class="fp-mcr-fan${manualFans.includes(f.no) ? ' selected' : ''}" data-full-mcr-fan="${f.no}" aria-pressed="${manualFans.includes(f.no)}">${esc(f.name[lang])} · ${f.points}</button>`;
        }
      }
      h += '</div></details>';
    }
    return h + `</div><div class="fp-actions"><button class="btn" data-full-mcr-confirm ${total < 8 ? 'disabled' : ''}>${c().mcrConfirm}</button><button class="btn alt" data-full-mcr-cancel>${c().mcrCancel}</button></div></section>`;
  }

  function soundLabel() {
    const on = Sound ? Sound.isEnabled() : false;
    return (on ? '🔊 ' : '🔇 ') + (on ? c().soundOn : c().soundOff);
  }

  function game() {
    const focus = latestVisibleEvent();
    const animate = !!motion && motion === focus;
    const canAdvice = state.phase === 'turn' && state.turn === 0 && E.available(state)?.discards?.length > 0;
    motion = null;
    const scopeText = c().scope + (state.mode === 'am' ? ' ' + c().amScope + ' ' + c().flower : state.mode === 'mcr' ? ' ' + c().mcrScope : '');
    const soundOn = Sound ? Sound.isEnabled() : false;
    return `<div class="fp-game fp-page" data-fp-seed="${state.seed}" data-fp-mode="${state.mode}" data-fp-lang="${lang}">
      <div class="fp-game-head">
        <button class="fp-game-back" data-full-back>${c().back}</button>
        <div class="fp-game-title"><strong>${c().modes[state.mode]} · ${c().liveTable}</strong><small>${c().seed} ${state.seed}</small></div>
        <div class="fp-game-tools">
          <button data-full-pace aria-pressed="${pace !== 'manual'}">${c().paceLabels[pace]}</button>
          ${Sound ? `<button data-full-sound aria-pressed="${soundOn}">${soundLabel()}</button>` : ''}
          <button data-full-pool aria-pressed="${showPool}">${c().pool}</button>
          <button data-full-hint aria-pressed="${showHint}">${c().hint}</button>
          <button data-full-advice aria-pressed="${showAdvice}"${canAdvice ? '' : ' hidden'}>${c().advice}</button>
          <button data-full-result-open${state.phase === 'ended' && !showResult ? '' : ' hidden'}>${c().resultLabel}</button>
          ${history()}
          <details class="fp-scope-menu"><summary>${c().scopeLabel}</summary><p>${scopeText}</p></details>
          <button data-full-restart>${c().restart}</button>
          <button data-full-new>${c().new}</button>
        </div>
      </div>
      <div class="fp-table-frame">
        ${board(focus, animate)}
        <div class="fp-decision-slot">${actions()}</div>
        ${rack(focus, animate)}
      </div>
      <div class="fp-toast-slot">${feedback ? `<div class="fp-game-toast" role="status">${c().error}</div>` : ''}</div>
      <div class="fp-guide-slot">${guidance()}</div>
      <div class="fp-pool-slot">${poolOverviewPanel()}</div>
      <div class="fp-modal-slot">${mcrReviewPanel()}${result()}</div>
    </div>`;
  }

  /* Partial DOM patcher: updates only changed sub-regions while preserving <details open>,
     river scroll positions, focus, and existing tile <img> elements (zero white-tile rebuilds). */
  function renderInto(container) {
    if (!container) return;
    if (!state || typeof container.querySelector !== 'function') {
      patchMeta = null;
      container.innerHTML = state ? game() : setup();
      scheduleAutoPass();
      return;
    }

    const root = container.querySelector('.fp-game');
    if (
      !root ||
      root.dataset.fpSeed !== String(state.seed) ||
      root.dataset.fpMode !== state.mode ||
      root.dataset.fpLang !== lang
    ) {
      container.innerHTML = game();
      patchMeta = {
        riverTiles: state.discards.map(d => d.slice()),
        meldsKey: state.melds.map(ms => JSON.stringify(ms)),
        flowersLen: state.flowers.map(f => f.length),
        handKey: buildHandKey(latestVisibleEvent()),
        centerKey: '',
        toastHtml: '',
        guideHtml: '',
        poolHtml: '',
        modalHtml: ''
      };
      scheduleAutoPass();
      return;
    }

    const focus = latestVisibleEvent();
    const animate = !!motion && motion === focus;
    motion = null;

    // 1. Toolbar controls (keep <details open> state intact!)
    const paceBtn = root.querySelector('[data-full-pace]');
    if (paceBtn) {
      paceBtn.textContent = c().paceLabels[pace];
      paceBtn.setAttribute('aria-pressed', String(pace !== 'manual'));
    }
    const soundBtn = root.querySelector('[data-full-sound]');
    if (soundBtn && Sound) {
      soundBtn.textContent = soundLabel();
      soundBtn.setAttribute('aria-pressed', String(Sound.isEnabled()));
    }
    const poolBtn = root.querySelector('[data-full-pool]');
    if (poolBtn) poolBtn.setAttribute('aria-pressed', String(showPool));
    const hintBtn = root.querySelector('[data-full-hint]');
    if (hintBtn) hintBtn.setAttribute('aria-pressed', String(showHint));
    const advBtn = root.querySelector('[data-full-advice]');
    if (advBtn) {
      const canAdvice = state.phase === 'turn' && state.turn === 0 && E.available(state)?.discards?.length > 0;
      advBtn.hidden = !canAdvice;
      advBtn.setAttribute('aria-pressed', String(showAdvice));
    }
    const resOpenBtn = root.querySelector('[data-full-result-open]');
    if (resOpenBtn) resOpenBtn.hidden = !(state.phase === 'ended' && !showResult);

    const histSummary = root.querySelector('.fp-history-menu > summary');
    if (histSummary) histSummary.textContent = `${c().replay} · ${state.history.length}`;
    const histList = root.querySelector('.fp-history-menu > ol');
    if (histList) histList.innerHTML = historyItemsHtml();

    // 2. Opponent cards
    const activeSeat = activeSeatIndex();
    for (const [seat, pos] of [[2, 'top'], [3, 'left'], [1, 'right']]) {
      const el = root.querySelector(`.fp-opponent-${pos}`);
      if (!el) continue;
      el.classList.toggle('inactive', !state.active[seat]);
      el.classList.toggle('is-turn', activeSeat === seat);
      const nextHtml = opponentInner(seat);
      if (el.innerHTML !== nextHtml) el.innerHTML = nextHtml;
    }

    // 3. Rivers (preserve scroll & existing tile <img> elements!)
    for (const [seat, pos] of [[2, 'top'], [3, 'left'], [1, 'right'], [0, 'bottom']]) {
      const rEl = root.querySelector(`.fp-river-${pos}`);
      if (!rEl) continue;
      const pile = state.discards[seat];
      const lblSmall = rEl.querySelector('.fp-river-label small');
      if (lblSmall) lblSmall.textContent = `${pile.length} ${c().discards}`;

      // Flowers
      const fZone = rEl.querySelector('.fp-flower-zone');
      if (fZone && (!patchMeta || patchMeta.flowersLen[seat] !== state.flowers[seat].length)) {
        const hasFlowers = state.mode === 'mcr' && state.flowers[seat].length > 0;
        fZone.hidden = !hasFlowers;
        fZone.innerHTML = hasFlowers ? `<span>${c().mcrFlower}</span>${state.flowers[seat].map(tile).join('')}` : '';
      }

      // Exposed melds
      const mZone = rEl.querySelector('.fp-zone-melds');
      const mKey = JSON.stringify(state.melds[seat]);
      if (mZone && (!patchMeta || patchMeta.meldsKey[seat] !== mKey)) {
        const hasMelds = state.melds[seat].length > 0;
        mZone.hidden = !hasMelds;
        mZone.innerHTML = hasMelds ? `<span>${c().melds}</span>${exposed(seat, focus, animate)}` : '';
      }

      // Discard tiles — incremental append / class toggle!
      const tilesBox = rEl.querySelector('.fp-river-tiles');
      if (tilesBox) {
        const savedTop = tilesBox.scrollTop;
        const savedLeft = tilesBox.scrollLeft;
        const prev = patchMeta ? patchMeta.riverTiles[seat] : null;
        const isCurrent = state.phase === 'claim' && !state.pending?.robKong && state.pending?.discarder === seat;
        const landed = animate && focus?.type === 'discard' && focus.seat === seat;
        const prefixMatches = prev && prev.length <= pile.length && prev.every((t, idx) => pile[idx] === t);

        if (prefixMatches && prev.length > 0) {
          const existing = tilesBox.querySelectorAll('.fp-river-tile');
          existing.forEach(node => { node.classList.remove('current', 'landed'); });
          if (pile.length > prev.length) {
            for (let j = prev.length; j < pile.length; j++) {
              tilesBox.insertAdjacentHTML('beforeend', riverTileHtml(pile[j], isCurrent && j === pile.length - 1, landed && j === pile.length - 1));
            }
            tilesBox.scrollTop = tilesBox.scrollHeight;
          } else {
            const lastNode = existing[existing.length - 1];
            if (lastNode && isCurrent) lastNode.classList.add('current');
            tilesBox.scrollTop = savedTop;
            tilesBox.scrollLeft = savedLeft;
          }
        } else if (prefixMatches && prev.length === 0 && pile.length > 0) {
          tilesBox.innerHTML = pile.map((t, j) => riverTileHtml(t, isCurrent && j === pile.length - 1, landed && j === pile.length - 1)).join('');
          tilesBox.scrollTop = tilesBox.scrollHeight;
        } else {
          tilesBox.innerHTML = pile.map((t, j) => riverTileHtml(t, isCurrent && j === pile.length - 1, landed && j === pile.length - 1)).join('') || '<span class="fp-river-empty">·</span>';
          tilesBox.scrollTop = savedTop;
          tilesBox.scrollLeft = savedLeft;
        }
      }
    }

    // 4. Table center
    const centerEl = root.querySelector('.fp-table-center');
    const cKey = `${state.wall.length}|${state.phase}|${focus ? `${focus.type}:${focus.seat}:${focus.tile || ''}:${animate}` : ''}`;
    if (centerEl && (!patchMeta || patchMeta.centerKey !== cKey)) {
      centerEl.innerHTML = tableCenterInner(focus, animate);
    }

    // 5. Decision bar + Tenpai preview
    const decSlot = root.querySelector('.fp-decision-slot');
    if (decSlot) decSlot.innerHTML = actions();

    // 6. Own hand rack (ZERO tile DOM rebuild when only toggling selection!)
    const ownSeat = root.querySelector('.fp-own-seat');
    if (ownSeat) {
      ownSeat.classList.toggle('is-turn', activeSeat === 0);
      const lbl = ownSeat.querySelector('.fp-own-label');
      if (lbl) lbl.innerHTML = ownLabelHtml();

      const nextHandKey = buildHandKey(focus);
      const rackEl = ownSeat.querySelector('.fp-rack');
      if (rackEl) {
        if (patchMeta && patchMeta.handKey === nextHandKey && !animate) {
          const a = E.available(state);
          const buttons = rackEl.querySelectorAll('.fp-tile');
          buttons.forEach(btn => {
            const idx = Number(btn.dataset.fullSelect);
            const isSel = selected.includes(idx);
            btn.classList.toggle('selected', isSel);
            btn.setAttribute('aria-pressed', String(isSel));
            const existingHint = btn.querySelector('.fp-tap-hint');
            const wantHint = isSel && a?.phase === 'turn';
            if (wantHint && !existingHint) {
              btn.insertAdjacentHTML('beforeend', `<small class="fp-tap-hint">${c().tapAgain}</small>`);
            } else if (!wantHint && existingHint) {
              existingHint.remove();
            }
          });
        } else {
          const { regular, newTile } = rackContent(focus, animate);
          rackEl.innerHTML = regular + newTile;
        }
      }
      if (patchMeta) patchMeta.handKey = nextHandKey;
    }

    // 7. Overlays
    const toastHtml = feedback ? `<div class="fp-game-toast" role="status">${c().error}</div>` : '';
    const guideHtml = guidance();
    const poolHtml = poolOverviewPanel();
    const modalHtml = mcrReviewPanel() + result();

    const patchSlot = (sel, next, key) => {
      const slot = root.querySelector(sel);
      if (slot && (!patchMeta || patchMeta[key] !== next)) {
        slot.innerHTML = next;
        if (patchMeta) patchMeta[key] = next;
      }
    };
    patchSlot('.fp-toast-slot', toastHtml, 'toastHtml');
    patchSlot('.fp-guide-slot', guideHtml, 'guideHtml');
    patchSlot('.fp-pool-slot', poolHtml, 'poolHtml');
    patchSlot('.fp-modal-slot', modalHtml, 'modalHtml');

    if (patchMeta) {
      patchMeta.riverTiles = state.discards.map(d => d.slice());
      patchMeta.meldsKey = state.melds.map(ms => JSON.stringify(ms));
      patchMeta.flowersLen = state.flowers.map(f => f.length);
      patchMeta.centerKey = cKey;
    }

    scheduleAutoPass();
  }

  function buildHandKey(focus) {
    const a = E.available(state);
    const drawn = drawnTileIndex(focus);
    const tMap = getTenpaiMap();
    return [
      state.hands[0].join(','),
      drawn,
      a?.phase || '',
      (a?.discards || []).join(','),
      state.missingSuit?.[0] || '',
      Object.keys(tMap).join(',')
    ].join('|');
  }

  function playActionSound(action, recent) {
    if (!Sound) return;
    if (state.phase === 'ended' && state.winners.length) {
      Sound.play('win');
      return;
    }
    if (state.phase === 'claim' && !isAutoPassEligible(state)) {
      Sound.play('prompt');
      return;
    }
    if (['claim', 'kong'].includes(action.type) && action.id !== 'pass') {
      Sound.play('claim');
      return;
    }
    if (action.type === 'discard' || recent.some(e => e.type === 'discard')) {
      Sound.play('discard');
      return;
    }
    if (recent.some(e => ['draw', 'replacement'].includes(e.type) && e.seat === 0)) {
      Sound.play('draw');
    }
  }

  function apply(action) {
    clearAutoTimer();
    const before = state.history.length;
    const r = E.act(state, action);
    if (r.accepted) {
      state = r.state;
      selected = [];
      feedback = '';
      showAdvice = false;
      showMcrReview = false;
      manualFans = [];
      if (state.phase === 'ended') {
        showResult = true;
        showHint = false;
        showPool = false;
      }
      const recent = state.history.slice(before).reverse();
      motion = recent.find(
        e => ['discard', 'claim', 'kong', 'kong-attempt', 'joker-exchange', 'win', 'flower'].includes(e.type) ||
          (['draw', 'replacement'].includes(e.type) && e.seat === 0)
      ) || null;
      playActionSound(action, recent);
    } else {
      feedback = r.reason;
    }
  }

  function visualHandOrder() {
    const focus = latestVisibleEvent();
    const drawn = drawnTileIndex(focus);
    const a = E.available(state);
    const allowed = a?.phase === 'turn' ? a.discards : state.hands[0].map((_, i) => i);
    const regular = allowed.filter(i => i !== drawn);
    return drawn >= 0 && allowed.includes(drawn) ? regular.concat([drawn]) : regular;
  }

  function handleKey(e) {
    if (!state || !e) return false;
    if (e.metaKey || e.ctrlKey || e.altKey) return false;
    const tag = e.target?.tagName;
    if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return false;

    const key = e.key;
    if (key === 'Escape') {
      if (showMcrReview) { showMcrReview = false; manualFans = []; return true; }
      if (showPool) { showPool = false; return true; }
      if (showHint || showAdvice) { showHint = false; showAdvice = false; return true; }
      if (state.phase === 'ended' && showResult) { showResult = false; return true; }
      if (selected.length) { selected = []; return true; }
      return false;
    }
    if (showMcrReview) return false;

    const a = E.available(state);
    if (!a) return false;

    if ((key === ' ' || e.code === 'Space') && a.phase === 'claim') {
      if (typeof e.preventDefault === 'function') e.preventDefault();
      apply({ type: 'claim', id: 'pass' });
      return true;
    }

    if ((key === 'ArrowLeft' || key === 'ArrowRight') && ['turn', 'exchange', 'charleston'].includes(a.phase)) {
      const list = visualHandOrder();
      if (!list.length) return false;
      if (typeof e.preventDefault === 'function') e.preventDefault();
      const cur = selected.length ? list.indexOf(selected[selected.length - 1]) : -1;
      const nextPos = key === 'ArrowRight'
        ? (cur < 0 ? 0 : (cur + 1) % list.length)
        : (cur < 0 ? list.length - 1 : (cur - 1 + list.length) % list.length);
      selected = [list[nextPos]];
      if (Sound) Sound.play('select');
      return true;
    }

    if (key === 'Enter') {
      if (a.phase === 'turn' && selected.length === 1) {
        if (typeof e.preventDefault === 'function') e.preventDefault();
        apply({ type: 'discard', index: selected[0] });
        return true;
      }
      if ((a.phase === 'exchange' || a.phase === 'charleston') && selected.length === 3) {
        if (typeof e.preventDefault === 'function') e.preventDefault();
        apply({ type: a.phase, indices: selected.slice().sort((x, y) => x - y) });
        return true;
      }
    }

    return false;
  }

  function dispatch(el) {
    const d = el.dataset || {};
    if (d.fullBack !== undefined) { clearAutoTimer(); return 'back'; }
    if (d.fullShort !== undefined) { clearAutoTimer(); return 'short'; }
    if (d.fullMode !== undefined) { clearAutoTimer(); mode = d.fullMode; state = null; return 'view'; }
    if (d.fullOption !== undefined) { options[d.fullOption] = !options[d.fullOption]; return 'local'; }
    if (d.fullPace !== undefined) {
      const next = PACE_ORDER[(PACE_ORDER.indexOf(pace) + 1) % PACE_ORDER.length];
      savePace(next);
      scheduleAutoPass();
      return 'local';
    }
    if (d.fullSound !== undefined) {
      if (Sound) Sound.toggle();
      return 'local';
    }
    if (d.fullStart !== undefined || d.fullNew !== undefined) {
      clearAutoTimer();
      mode = state?.mode || mode;
      state = E.start(mode, Math.floor(Math.random() * 4294967295), options);
      selected = [];
      motion = state?.history.at(-1) || null;
      feedback = '';
      showHint = false;
      showAdvice = false;
      showPool = false;
      showResult = true;
      patchMeta = null;
      if (Sound) Sound.play('draw');
      return 'view';
    }
    if (d.fullMcrReview !== undefined) {
      showMcrReview = true;
      manualFans = [...new Set((E.available(state)?.assessment?.breakdown || []).map(x => x.no).filter(no => no < 81))];
      return 'local';
    }
    if (d.fullMcrCancel !== undefined) { showMcrReview = false; manualFans = []; return 'local'; }
    if (d.fullMcrFan !== undefined) {
      const no = Number(d.fullMcrFan);
      if (MCRF?.byNo(no) && no < 81) {
        manualFans = manualFans.includes(no) ? manualFans.filter(x => x !== no) : manualFans.concat(no);
      }
      return 'local';
    }
    if (d.fullMcrConfirm !== undefined) { apply({ type: 'manual-win', fanNos: manualFans.slice() }); return 'local'; }
    if (d.fullRestart !== undefined) {
      clearAutoTimer();
      state = E.start(state.mode, state.seed, state.options);
      selected = [];
      motion = state?.history.at(-1) || null;
      feedback = '';
      showHint = false;
      showAdvice = false;
      showPool = false;
      showResult = true;
      patchMeta = null;
      if (Sound) Sound.play('draw');
      return 'view';
    }
    if (!state) return 'local';

    if (d.fullSelect !== undefined) {
      const i = Number(d.fullSelect);
      const a = E.available(state);
      if (a?.phase === 'turn') {
        if (selected.length === 1 && selected[0] === i) {
          apply({ type: 'discard', index: i });
          return 'local';
        }
        selected = [i];
        feedback = '';
        if (Sound) Sound.play('select');
        return 'local';
      }
      const max = ['exchange', 'charleston'].includes(a?.phase) ? 3 : 1;
      selected = selected.includes(i) ? selected.filter(x => x !== i) : selected.length < max ? selected.concat(i) : [i];
      feedback = '';
      if (Sound) Sound.play('select');
      return 'local';
    }
    if (d.fullPool !== undefined) { showPool = !showPool; if (showPool) { showHint = false; showAdvice = false; } return 'local'; }
    if (d.fullPoolClose !== undefined) { showPool = false; return 'local'; }
    if (d.fullHint !== undefined) { showHint = !showHint; if (showHint) showPool = false; return 'local'; }
    if (d.fullAdvice !== undefined) { showAdvice = !showAdvice; if (showAdvice) showPool = false; return 'local'; }
    if (d.fullCloseGuide !== undefined) { showHint = false; showAdvice = false; return 'local'; }
    if (d.fullResultClose !== undefined) { showResult = false; return 'local'; }
    if (d.fullResultOpen !== undefined) { showResult = true; return 'local'; }
    if (d.fullSend !== undefined) {
      apply({ type: state.phase === 'exchange' ? 'exchange' : 'charleston', indices: selected.slice().sort((a, b) => a - b) });
    }
    if (d.fullMissing !== undefined) apply({ type: 'missing', suit: d.fullMissing });
    if (d.fullDiscard !== undefined) apply({ type: 'discard', index: selected[0] });
    if (d.fullWin !== undefined) apply({ type: 'win' });
    if (d.fullClaim !== undefined) {
      if (d.fullClaim === 'review') {
        showMcrReview = true;
        manualFans = [...new Set((E.available(state)?.assessment?.breakdown || []).map(x => x.no).filter(no => no < 81))];
        return 'local';
      }
      apply({ type: 'claim', id: d.fullClaim });
    }
    if (d.fullKong !== undefined) {
      const k = E.available(state).kongs[Number(d.fullKong)];
      if (k) apply({ type: 'kong', ...k });
    }
    if (d.fullJoker !== undefined) {
      const x = E.available(state).exchanges[Number(d.fullJoker)];
      if (x) apply({ type: 'joker-exchange', ...x });
    }
    return 'local';
  }

  g.MahjongFullPlayUI = {
    enter(next) {
      clearAutoTimer();
      if (['hk', 'sc', 'am', 'mcr'].includes(next)) mode = next;
      state = null;
      selected = [];
      motion = null;
      showResult = true;
      showMcrReview = false;
      showPool = false;
      manualFans = [];
      patchMeta = null;
    },
    leave() { clearAutoTimer(); patchMeta = null; },
    setLang(v) { if (L[v]) lang = v; },
    setPace(v) { savePace(v); scheduleAutoPass(); },
    getPace() { return pace; },
    setOnUpdate(fn) { onAsyncUpdate = typeof fn === 'function' ? fn : null; },
    handleKey,
    renderInto,
    html() { return state ? game() : setup(); },
    dispatch,
    getState() { return state; }
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);
