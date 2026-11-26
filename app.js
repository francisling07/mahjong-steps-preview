'use strict';

const copy = {
  zh: {
    home: '首页',
    learn: '选择玩法',
    foot: '一个为学习而生的麻将练习场',
    eyebrow: 'A LITTLE PRACTICE, A LOT OF JOY',
    title: '从第一张牌开始，<br>慢慢学会麻将。',
    desc: '不必一次记住所有规则。认识牌、动手练习、理解每一步，带着自信走上真正的牌桌。',
    start: '我是完全新手',
    practice: '我会一点，想练习',
    playground: '牌桌操练场',
    note: '无需注册 · 5 分钟开始 · 三种语言',
    float: '✦ 每天进步一点点',
    choose: '选择你想学的玩法',
    chooseDesc: '每张牌桌都有自己的规则，从你感兴趣的一种开始。',
    tags: ['推荐学习路径', '完整课程', '首批课程', '完整课程'],
    names: ['香港麻将', '中国国标麻将', '四川血战到底', '美式麻将'],
    summaries: ['认识牌、拼牌与出牌思路', '了解竞赛麻将与番种', '定缺、血战与桌规选择', '认识 Joker 与换牌'],
    paths: '香港麻将 · 学习路径',
    back: '← 返回首页',
    begin: '从零开始',
    advanced: '进阶练习',
    step: '练习',
    of: ' / ',
    introTitle: '先认识一张牌',
    introText: '麻将有万、筒、条三门数牌。每门都有 1 到 9；同一门相邻的三张数字牌可以组成顺子。',
    introQuestion: '下面哪一张是「三万」？',
    next: '继续',
    correct: '答对了！三万属于万牌。',
    wrong: '再看看：牌面上的数字是三，下面是「万」。',
    buildTitle: '拼出一副基础牌型',
    buildDesc: '四组面子加一对将，是一种常见的基础结构。请为下面的 13 张牌选一张，使其形成完整结构。',
    buildQuestion: '还缺哪一张？',
    winCorrect: '很好！加上这张牌后，手牌可以拆成四组和一对。',
    winWrong: '这张牌暂时不能让它组成四组和一对，再试一次。',
    caution: '这里只练习牌型结构；实际能否胡牌，还需要核对该桌的最低胡牌番数和其他规则。',
    advTitle: '这一手，你会打哪张？',
    advDesc: '教学情境：先练习保留已经组成的顺子，并为一张孤张寻找搭配。此题暂不考虑对手、牌池和番数。',
    advQuestion: '点击一张牌选择出牌',
    advCorrect: '建议打东风：这手牌中它暂时没有搭配；保留已有顺子与五筒，后者仍可等待另一张五筒组成对子。',
    advWrong: '再观察一下：选择一张暂时没有搭配、不会拆掉现有顺子的字牌。',
    done: '完成练习',
    again: '再练一次',
    complete: '做得很好！',
    completeDesc: '你刚刚完成了一次小练习。下一步是把牌型、摸打流程和实际桌规串起来。',
    other: '试试另一条路径',
    ruleIntro: '规则入门',
    ruleBody: [
      '香港麻将使用万、筒、条以及字牌。面子、将牌和番数是学习重点。',
      '国标麻将是竞赛规则体系；学习牌型之外，还要学习番种和胡牌条件。',
      '四川血战到底一般只使用万、筒、条，定缺后继续出牌；一人胡牌后其余玩家继续。',
      '美式麻将使用年度牌型卡，并有 Charleston 换牌和 Joker 等机制。'
    ],
    ruleNote: '这里是概览，不代表完整规则。不同桌规和规则版本可能有差异。',
    hkNote: '香港课程参照香港麻雀协会公开总例（2026-11-06核对），采用无花、三番起胡、十番封顶路线。含40课、12局教学对局、规则全览及番种积分速查。',
    switch: '换三张',
    switchNote: '开局是否换三张因桌规而异；开启后增加换三张练习；它不属于本站采用的2024竞赛基准。',
    on: '开启',
    off: '关闭',
    open: '体验香港课程 →',
    ref: '查看香港麻雀协会规则 ↗',
    answer: '选择你的答案',
    finishHint: '继续探索',
    shape: '基础结构示意'
  },
  tw: {
    home: '首頁',
    learn: '選擇玩法',
    foot: '一個為學習而生的麻雀練習場',
    eyebrow: 'A LITTLE PRACTICE, A LOT OF JOY',
    title: '從第一張牌開始，<br>慢慢學會麻雀。',
    desc: '不必一次記住所有規則。認識牌、動手練習、理解每一步，帶著自信走上真正的牌桌。',
    start: '我是完全新手',
    practice: '我會一點，想練習',
    playground: '牌桌操練場',
    note: '無需註冊 · 5 分鐘開始 · 三種語言',
    float: '✦ 每天進步一點點',
    choose: '選擇你想學的玩法',
    chooseDesc: '每張牌桌都有自己的規則，從你感興趣的一種開始。',
    tags: ['推薦學習路徑', '完整課程', '首批課程', '完整課程'],
    names: ['香港麻雀', '中國國標麻將', '四川血戰到底', '美式麻將'],
    summaries: ['認識牌、拼牌與出牌思路', '了解競賽麻將與番種', '定缺、血戰與桌規選擇', '認識 Joker 與換牌'],
    paths: '香港麻雀 · 學習路徑',
    back: '← 返回首頁',
    begin: '從零開始',
    advanced: '進階練習',
    step: '練習',
    of: ' / ',
    introTitle: '先認識一張牌',
    introText: '麻雀有萬、筒、條三門數牌。每門都有 1 到 9；同一門相鄰的三張數字牌可以組成順子。',
    introQuestion: '下面哪一張是「三萬」？',
    next: '繼續',
    correct: '答對了！三萬屬於萬牌。',
    wrong: '再看看：牌面上的數字是三，下面是「萬」。',
    buildTitle: '拼出一副基礎牌型',
    buildDesc: '四組面子加一對將，是一種常見的基礎結構。請為下面的 13 張牌選一張，使其形成完整結構。',
    buildQuestion: '還缺哪一張？',
    winCorrect: '很好！加上這張牌後，手牌可以拆成四組和一對。',
    winWrong: '這張牌暫時不能讓它組成四組和一對，再試一次。',
    caution: '這裡只練習牌型結構；實際能否胡牌，還需要核對該桌的最低胡牌番數和其他規則。',
    advTitle: '這一手，你會打哪張？',
    advDesc: '教學情境：先練習保留已經組成的順子，並為一張孤張尋找搭配。此題暫不考慮對手、牌池和番數。',
    advQuestion: '點擊一張牌選擇出牌',
    advCorrect: '建議打東風：這手牌中它暫時沒有搭配；保留已有順子與五筒，後者仍可等待另一張五筒組成對子。',
    advWrong: '再觀察一下：選擇一張暫時沒有搭配、不會拆掉現有順子的字牌。',
    done: '完成練習',
    again: '再練一次',
    complete: '做得很好！',
    completeDesc: '你剛剛完成了一次小練習。下一步是把牌型、摸打流程和實際桌規串起來。',
    other: '試試另一條路徑',
    ruleIntro: '規則入門',
    ruleBody: [
      '香港麻雀使用萬、筒、條以及字牌。面子、將牌和番數是學習重點。',
      '國標麻將是競賽規則體系；學習牌型之外，還要學習番種和胡牌條件。',
      '四川血戰到底一般只使用萬、筒、條，定缺後繼續出牌；一人胡牌後其餘玩家繼續。',
      '美式麻將使用年度牌型卡，並有 Charleston 換牌和 Joker 等機制。'
    ],
    ruleNote: '這裡是概覽，不代表完整規則。不同桌規和規則版本可能有差異。',
    hkNote: '香港課程參照香港麻雀協會公開總例（2026-11-06核對），採用無花、三番起胡、十番封頂路線。含40課、12局教學對局、規則全覽及番種積分速查。',
    switch: '換三張',
    switchNote: '開局是否換三張因桌規而異；開啟後增加換三張練習；它不屬於本站採用的2024競賽基準。',
    on: '開啟',
    off: '關閉',
    open: '體驗香港課程 →',
    ref: '查看香港麻雀協會規則 ↗',
    answer: '選擇你的答案',
    finishHint: '繼續探索',
    shape: '基礎結構示意'
  },
  en: {
    home: 'Home',
    learn: 'Explore styles',
    foot: 'A little practice for the real table',
    eyebrow: 'A LITTLE PRACTICE, A LOT OF JOY',
    title: 'Every great game<br>starts with one tile.',
    desc: 'You don’t need to learn everything at once. Get to know the tiles, practise at your own pace, and feel ready for a real table.',
    start: 'I’m brand new',
    practice: 'I know a little',
    playground: 'Table playground',
    note: 'No sign-up · Start in 5 minutes · Three languages',
    float: '✦ A little progress every day',
    choose: 'Find your way to play',
    chooseDesc: 'Every table has its own rules. Start with the style that interests you.',
    tags: ['Featured learning path', 'Complete course', 'Starter course', 'Complete course'],
    names: ['Hong Kong Mahjong', 'Chinese Official (MCR)', 'Sichuan Blood Battle', 'American Mahjong'],
    summaries: ['Tiles, hand shapes and discards', 'Competition play and scoring patterns', 'Missing suit, blood battle and table rules', 'Meet jokers and the Charleston'],
    paths: 'HONG KONG MAHJONG · LEARNING PATH',
    back: '← Back to home',
    begin: 'Start from scratch',
    advanced: 'Practice a decision',
    step: 'Practice',
    of: ' / ',
    introTitle: 'Meet your first tile',
    introText: 'There are three numbered suits: characters, dots and bamboo. Each runs from 1 to 9. Three consecutive tiles of the same suit make a sequence.',
    introQuestion: 'Which tile is the three of characters?',
    next: 'Continue',
    correct: 'That’s right! This is the three of characters.',
    wrong: 'Look for the number three above the character 萬.',
    buildTitle: 'Build a basic hand shape',
    buildDesc: 'Four sets and a pair form one common basic shape. Choose a tile to complete the 13 tiles below.',
    buildQuestion: 'Which tile completes the shape?',
    winCorrect: 'Nice! This hand can now be divided into four sets and a pair.',
    winWrong: 'This tile does not complete four sets and a pair. Try again.',
    caution: 'This exercise checks shape only. A legal win also depends on the table’s minimum score and other rules.',
    advTitle: 'What would you discard?',
    advDesc: 'Practice scenario: keep completed sequences and look for a partner for an isolated tile. Opponents, discards and scoring are outside this exercise.',
    advQuestion: 'Choose a tile to discard',
    advCorrect: 'East is a reasonable discard here: it has no partner. Keep the sequences and the five dots, which can still pair with another five dots.',
    advWrong: 'Look again for an honour tile with no partner that leaves the completed sequences intact.',
    done: 'Finish practice',
    again: 'Try again',
    complete: 'Nicely done!',
    completeDesc: 'You completed a short practice. Next, connect hand shapes with the flow of play and your table’s rules.',
    other: 'Try the other path',
    ruleIntro: 'A first look',
    ruleBody: [
      'Hong Kong Mahjong uses characters, dots, bamboo and honour tiles. Sets, pairs and faan are key concepts.',
      'Chinese Official Mahjong is a competition ruleset with scoring patterns and a minimum score.',
      'Sichuan Blood Battle generally uses only the three numbered suits. Players choose a missing suit and play continues after a win.',
      'American Mahjong uses an annual hand card, with the Charleston exchange and jokers.'
    ],
    ruleNote: 'This is an introduction, not a complete ruleset. Table rules and editions can differ.',
    hkNote: 'The 40-lesson course follows the published HKMA reference checked on 2026-11-06: no flowers, a three-faan minimum and ten-faan cap, with 12 teaching rounds, a rules guide, and a faan and points reference.',
    switch: 'Exchange three tiles',
    switchNote: 'The opening exchange varies by table; enabling it adds an optional exchange lesson outside the 2024 competition baseline.',
    on: 'On',
    off: 'Off',
    open: 'Try the Hong Kong lesson →',
    ref: 'Hong Kong Mahjong Association rules ↗',
    answer: 'Choose your answer',
    finishHint: 'Keep exploring',
    shape: 'Basic shape illustration'
  }
};

const app = document.querySelector('#app');
const langEl = document.querySelector('#lang');
const Utils = typeof window !== 'undefined' && window.MahjongUtils ? window.MahjongUtils : null;

function lsGet(k) {
  if (Utils) return Utils.storage.get(k);
  try { return localStorage.getItem(k); } catch (_) { return null; }
}

function lsSet(k, v) {
  if (Utils) { Utils.storage.set(k, v); return; }
  try { localStorage.setItem(k, v); } catch (_) {}
}

let lang = lsGet('mj-language') || 'zh';
let page = 'home';
let mode = 'begin';
let step = 0;
let feedback = null;
let selectedTile = null;
let rule = 0;
let exchange = lsGet('mj-sichuan-exchange') === '1';
let bridgeTrack = 'sichuan';
let bridgeReturnPage = 'rule';
let lastSyncedHash = '';

if (!copy[lang]) lang = 'zh';
langEl.value = lang;

const t = () => copy[lang];

const seoMeta = {
  zh: {
    brand: '雀步 Mahjong Steps',
    homeTitle: '免费在线麻将网页版 - 免下载即开即玩 | 雀步 Mahjong Steps',
    homeDesc: '免费在线麻将网页版，免下载、免注册即开即玩！雀步 Mahjong Steps 提供香港麻将、中国国标麻将（MCR）、四川血战到底与美式麻将四套牌桌实战与零基础互动课程，含 125 组番种牌型图解与实时听牌提示，支持简体中文、繁體中文与 English。',
    routes: {
      fullplay: { title: '在线麻将牌桌操练场（免费免下载）', desc: '免下载在线体验香港麻将、中国国标 MCR、四川血战到底与美式麻将实战牌桌，支持实时听牌预览与自动出牌节奏。' },
      course: { title: '香港麻将零基础课程与 30 组番种速查', desc: '40 课香港麻将零基础互动课程、12 局教学对局与 30 组真实牌型番种积分速查。' },
      mcr: { title: '中国国标麻将 MCR 课程与 81 番种图解', desc: '系统学习中国国标麻将 MCR 8 番起和规则，查阅全部 81 番种的完整真实牌型示例。' },
      bridge: { title: '四川血战到底课程与番型速查', desc: '学习四川血战到底定缺、血战与换三张规则，附常见番型牌面示例与牌桌实战。' },
      american: { title: '美式麻将教程、Charleston 换牌与 Joker 指南', desc: '互动掌握美式麻将牌型卡、Charleston 换牌流程、Joker 替代规则与经典示例牌型。' },
      gallery: { title: '完整麻将牌图鉴（万筒条字花与 Joker）', desc: '高清查看全部 43 张麻将牌面：万子、筒子、条子、风牌、三元牌、花牌与 Joker。' },
      playground: { title: '短局牌桌练习', desc: '快速体验数巡短局摸打与基础听牌决策练习。' },
      rule: { title: '麻将规则入门概览', desc: '快速对比香港麻将、国标麻将、四川血战到底与美式麻将的核心规则与特色。' },
      lesson: { title: '麻将基础互动练习', desc: '通过互动识牌、拼牌与出牌决策题快速建立麻将牌感。' }
    },
    overviewEyebrow: 'FREE ONLINE MAHJONG · PLAY & LEARN',
    overviewTitle: '免费在线麻将网页版：免下载即开即玩，四套玩法一站练习',
    overviewBody: '雀步（Mahjong Steps）是一款专为学习与实战打造的纯网页麻将练习场，无需下载 App 或注册账号，手机与电脑打开浏览器即可开局。支持香港麻将（三番起胡、十番封顶）、中国国标麻将 MCR（81 番种速查与 8 番起和）、四川血战到底（定缺与血战）及美式麻将（Charleston 换牌与 Joker），并配有 125 组真实牌面番种图解、实时听牌预览与可调节奏牌桌。',
    faqs: [
      ['雀步是免费的吗？需要下载或注册吗？', '完全免费，免下载、免注册。直接打开网页就能进入牌桌操练场或零基础互动课程，支持简体中文、繁體中文与 English。'],
      ['支持哪些麻将规则与番种查询？', '内置香港、中国国标（MCR）、四川血战到底与美式麻将四套完整玩法，每套玩法均附带静态牌型示例与番种积分速查表。'],
      ['零基础新手怎么最快上手？', '推荐从「我是完全新手」进入 40 课香港麻将路径，先认识万筒条字牌与顺子刻子，再开启牌桌实时听牌提示与「逐步观察」模式实战练习。'],
      ['手机浏览器能看清全部手牌吗？', '支持。手机端采用双排完整手牌布局与全览牌河视图，点选一张牌可实时预览听牌与场上余张，再次点击即可出牌。']
    ]
  },
  tw: {
    brand: '雀步 Mahjong Steps',
    homeTitle: '免費線上麻雀網頁版 - 免下載即開即玩 | 雀步 Mahjong Steps',
    homeDesc: '免費線上麻雀網頁版，免下載、免註冊即開即玩！雀步 Mahjong Steps 提供香港麻雀、中國國標麻將（MCR）、四川血戰到底與美式麻將四套牌桌實戰與零基礎互動課程，含 125 組番種牌型圖解與即時聽牌提示。',
    routes: {
      fullplay: { title: '線上麻雀牌桌操練場（免費免下載）', desc: '免下載線上體驗香港麻雀、中國國標 MCR、四川血戰到底與美式麻將實戰牌桌，支援即時聽牌預覽。' },
      course: { title: '香港麻雀零基礎課程與 30 組番種速查', desc: '40 課香港麻雀零基礎互動課程、12 局教學對局與 30 組真實牌型番種積分速查。' },
      mcr: { title: '中國國標麻將 MCR 課程與 81 番種圖解', desc: '系統學習中國國標麻將 MCR 8 番起和規則，查閱全部 81 番種的完整真實牌型示例。' },
      bridge: { title: '四川血戰到底課程與番型速查', desc: '學習四川血戰到底定缺、血戰與換三張規則，附常見番型牌面示例與牌桌實戰。' },
      american: { title: '美式麻將教學、Charleston 換牌與 Joker 指南', desc: '互動掌握美式麻將牌型卡、Charleston 換牌流程、Joker 替代規則與經典示例牌型。' },
      gallery: { title: '完整麻雀牌圖鑑（萬筒索字花與 Joker）', desc: '高清查看全部 43 張麻雀牌面：萬子、筒子、索子、風牌、三元牌、花牌與 Joker。' },
      playground: { title: '短局牌桌練習', desc: '快速體驗數巡短局摸打與基礎聽牌決策練習。' },
      rule: { title: '麻雀規則入門概覽', desc: '快速對比香港麻雀、國標麻將、四川血戰到底與美式麻將的核心規則。' },
      lesson: { title: '麻雀基礎互動練習', desc: '透過互動識牌、拼牌與出牌決策題快速建立牌感。' }
    },
    overviewEyebrow: 'FREE ONLINE MAHJONG · PLAY & LEARN',
    overviewTitle: '免費線上麻雀網頁版：免下載即開即玩，四套玩法一站練習',
    overviewBody: '雀步（Mahjong Steps）是專為學習與實戰打造的純網頁麻雀練習場，無需下載 App 或註冊帳號，手機與電腦打開瀏覽器即可開局。支援香港麻雀（三番起胡、十番封頂）、中國國標麻將 MCR（81 番種速查與 8 番起和）、四川血戰到底（定缺與血戰）及美式麻將（Charleston 換牌與 Joker），並配有 125 組真實牌面番種圖解與即時聽牌預覽。',
    faqs: [
      ['雀步是免費的嗎？需要下載或註冊嗎？', '完全免費，免下載、免註冊。直接打開網頁即可進入牌桌操練場或零基礎互動課程，支援簡體中文、繁體中文與 English。'],
      ['支援哪些麻雀規則與番種查詢？', '內置香港、中國國標（MCR）、四川血戰到底與美式麻將四套完整玩法，每套玩法均附帶靜態牌型示例與番種積分速查表。'],
      ['零基礎新手怎麼最快上手？', '推薦從「我是完全新手」進入 40 課香港麻雀路徑，先認識萬筒索字牌與順子刻子，再開啟牌桌即時聽牌提示實戰練習。'],
      ['手機瀏覽器能看清全部手牌嗎？', '支援。手機端採用雙排完整手牌佈局與全覽牌河視圖，點選一張牌可即時預覽聽牌與場上餘張，再次點擊即可出牌。']
    ]
  },
  en: {
    brand: 'Mahjong Steps',
    homeTitle: 'Free Online Mahjong Web Game & Interactive Course | Mahjong Steps',
    homeDesc: 'Play free online Mahjong directly in your browser with no download or sign-up. Learn and practise Hong Kong, Chinese Official (MCR), Sichuan Blood Battle, and American Mahjong with 125 visual pattern examples and live tenpai hints.',
    routes: {
      fullplay: { title: 'Free Online Mahjong Table Playground', desc: 'Play full Hong Kong, Chinese Official (MCR), Sichuan Blood Battle, and American Mahjong tables directly in your browser with live wait hints.' },
      course: { title: 'Hong Kong Mahjong Course & 30 Faan Examples', desc: '40 interactive Hong Kong Mahjong lessons, 12 guided rounds, and a visual faan and points reference.' },
      mcr: { title: 'Chinese Official (MCR) Course & All 81 Scoring Patterns', desc: 'Learn the 8-point minimum and explore visual hand examples for all 81 Chinese Official (MCR) scoring patterns.' },
      bridge: { title: 'Sichuan Blood Battle Course & Pattern Guide', desc: 'Practise missing suit selection, Blood Battle flow, and Sichuan scoring patterns with visual hand examples.' },
      american: { title: 'American Mahjong Course, Charleston & Joker Guide', desc: 'Learn the Charleston pass, Joker rules, and visual American Mahjong hand card examples.' },
      gallery: { title: 'Complete Mahjong Tile Library', desc: 'Inspect all 43 Mahjong tiles including characters, dots, bamboo, winds, dragons, flowers, and jokers.' },
      playground: { title: 'Short Table Practice', desc: 'Practise quick hands and discard decisions in a focused short table.' },
      rule: { title: 'Mahjong Rules Overview', desc: 'Compare Hong Kong, Chinese Official (MCR), Sichuan Blood Battle, and American Mahjong rules.' },
      lesson: { title: 'Interactive Mahjong Practice', desc: 'Build tile recognition, hand shapes, and discard instincts step by step.' }
    },
    overviewEyebrow: 'FREE ONLINE MAHJONG · PLAY & LEARN',
    overviewTitle: 'Free online Mahjong in your browser — no download, four complete rulesets',
    overviewBody: 'Mahjong Steps is a zero-install web practice table and interactive learning studio. Play and learn Hong Kong Mahjong, Chinese Official (MCR, all 81 scoring patterns), Sichuan Blood Battle, and American Mahjong on desktop or mobile, complete with 125 visual scoring-hand examples and live wait previews.',
    faqs: [
      ['Is Mahjong Steps free to play with no download?', 'Yes — completely free with no app install or account required. Open it in any desktop or mobile browser to play immediately.'],
      ['Which Mahjong rulesets are included?', 'Four full rulesets are built in: Hong Kong Mahjong, Chinese Official (MCR), Sichuan Blood Battle, and American Mahjong, each with visual scoring examples.'],
      ['Can a complete beginner learn here?', 'Yes. Start with the 40-lesson guided course to learn tiles, melds, and winning shapes, then turn on live tenpai wait hints at the table.'],
      ['Does it work smoothly on mobile phones?', 'Yes. The mobile table uses a two-row full-hand view, tap-twice-to-discard controls, and a complete discard pool layout.']
    ]
  }
};

function updateDocumentMeta() {
  if (typeof document === 'undefined') return;
  const m = seoMeta[lang] || seoMeta.zh;
  const routeEntry = (m.routes && m.routes[page]) || null;
  const titleText = routeEntry ? `${routeEntry.title} | ${m.brand}` : m.homeTitle;
  const descText = routeEntry ? routeEntry.desc : m.homeDesc;
  try { document.title = titleText; } catch (_) {}
  try {
    const descEl = typeof document.querySelector === 'function'
      ? document.querySelector('meta[name="description"]')
      : null;
    if (descEl && typeof descEl.setAttribute === 'function') {
      descEl.setAttribute('content', descText);
    }
  } catch (_) {}
}

function renderSeoOverview() {
  const m = seoMeta[lang] || seoMeta.zh;
  const label = lang === 'en' ? 'About Mahjong Steps' : lang === 'tw' ? '關於雀步線上麻雀網頁版' : '关于雀步在线麻将网页版';
  return `<section class="seo-overview" aria-label="${label}">
    <div class="eyebrow">${m.overviewEyebrow}</div>
    <h2>${m.overviewTitle}</h2>
    <p>${m.overviewBody}</p>
    <div class="seo-faq">${m.faqs.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div>
  </section>`;
}
const hand = ['m1', 'm2', 'm3', 'p1', 'p2', 'p3', 's1', 's2', 's3', 'm7', 'm8', 'm9', 'p5'];
const advanced = ['m1', 'm2', 'm3', 'p2', 'p3', 'p4', 's3', 's4', 's5', 'm7', 'm8', 'm9', 'p5', 'z1'];

function tile(id) {
  return `<span class="tile" aria-hidden="true">${MahjongTileArt.svg(id)}</span>`;
}

function name(id) {
  if (Utils) return Utils.tileName(id, lang, 'default');
  const i = lang === 'zh' ? 0 : lang === 'tw' ? 1 : 2;
  const suits = { m: ['万', '萬', 'characters'], p: ['筒', '筒', 'dots'], s: ['条', '條', 'bamboo'] };
  const honors = [
    null,
    ['东风', '東風', 'East'],
    ['南风', '南風', 'South'],
    ['西风', '西風', 'West'],
    ['北风', '北風', 'North'],
    ['红中', '紅中', 'Red dragon'],
    ['发财', '發財', 'Green dragon'],
    ['白板', '白板', 'White dragon']
  ];
  if (id[0] === 'z') return honors[Number(id[1])][i];
  if (id[0] === 'f') {
    const flowers = [
      ['春', '春', 'Spring'], ['夏', '夏', 'Summer'], ['秋', '秋', 'Autumn'], ['冬', '冬', 'Winter'],
      ['梅', '梅', 'Plum'], ['兰', '蘭', 'Orchid'], ['菊', '菊', 'Chrysanthemum'], ['竹', '竹', 'Bamboo']
    ];
    return flowers[Number(id[1]) - 1][i];
  }
  if (id[0] === 'j') return 'Joker';
  return `${id[1]} ${suits[id[0]][i]}`;
}

function buttonTile(id, index) {
  return `<button class="choice ${selectedTile === id ? 'selected' : ''}" data-tile="${id}" data-index="${index}" aria-label="${name(id)}">${tile(id)}</button>`;
}

function routeHash() {
  if (page === 'home') return '#home';
  if (page === 'rule') return `#rule/${rule}`;
  if (page === 'course') return '#course';
  if (page === 'bridge') return `#bridge/${bridgeTrack}`;
  if (page === 'american') return '#american';
  if (page === 'mcr') return '#mcr';
  if (page === 'fullplay') return '#play';
  if (page === 'playground') return '#short';
  if (page === 'gallery') return '#gallery';
  if (page === 'lesson') return `#lesson/${mode}`;
  if (page === 'complete') return '#complete';
  return '#home';
}

function syncHash() {
  if (typeof location === 'undefined' || !location) return;
  const target = routeHash();
  lastSyncedHash = target;
  if (location.hash !== target) {
    try { location.hash = target; } catch (_) {}
  }
}

function applyHash(rawHash, shouldRender) {
  const clean = String(rawHash || '').replace(/^#\/?/, '').trim();
  if (!clean || clean === 'home') {
    page = 'home';
    feedback = null;
  } else if (clean === 'course' && window.MahjongCourseUI) {
    page = 'course';
    MahjongCourseUI.enter();
  } else if (clean === 'american' && window.MahjongAmericanUI) {
    page = 'american';
    MahjongAmericanUI.enter();
  } else if (clean === 'mcr' && window.MahjongMCRUI) {
    page = 'mcr';
    MahjongMCRUI.enter();
  } else if (clean === 'short' && window.MahjongPlaygroundUI) {
    page = 'playground';
    MahjongPlaygroundUI.enter();
  } else if (clean === 'gallery') {
    page = 'gallery';
  } else if (clean === 'play' || clean.startsWith('play/')) {
    const subMode = clean.split('/')[1];
    page = 'fullplay';
    if (window.MahjongFullPlayUI) {
      MahjongFullPlayUI.enter(['hk', 'sc', 'am', 'mcr'].includes(subMode) ? subMode : undefined);
    }
  } else if (clean.startsWith('bridge/')) {
    const track = clean.split('/')[1] === 'foundation' ? 'foundation' : 'sichuan';
    bridgeTrack = track;
    bridgeReturnPage = 'rule';
    page = 'bridge';
    if (window.MahjongBridgeUI) MahjongBridgeUI.enter(bridgeTrack, exchange);
  } else if (clean.startsWith('rule/')) {
    const r = Number(clean.split('/')[1]);
    if (r === 1 && window.MahjongMCRUI) {
      rule = 1;
      page = 'mcr';
      MahjongMCRUI.enter();
    } else if (r === 3 && window.MahjongAmericanUI) {
      rule = 3;
      page = 'american';
      MahjongAmericanUI.enter();
    } else if (r === 0 || r === 2) {
      rule = r;
      page = 'rule';
    } else {
      page = 'home';
    }
  } else if (clean.startsWith('lesson/')) {
    const m = clean.split('/')[1];
    if (m === 'advanced') {
      mode = 'advanced';
      step = 0;
      feedback = null;
      selectedTile = null;
      page = 'lesson';
    } else {
      page = 'course';
      if (window.MahjongCourseUI) MahjongCourseUI.enter();
    }
  } else {
    return false;
  }
  if (shouldRender) {
    render();
    window.scrollTo(0, 0);
  }
  return true;
}

function syncLangToModules() {
  if (window.MahjongCourseUI) MahjongCourseUI.setLang(lang);
  if (window.MahjongBridgeUI) MahjongBridgeUI.setLang(lang);
  if (window.MahjongAmericanUI) MahjongAmericanUI.setLang(lang);
  if (window.MahjongMCRUI) MahjongMCRUI.setLang(lang);
  if (window.MahjongPlaygroundUI) MahjongPlaygroundUI.setLang(lang);
  if (window.MahjongFullPlayUI) MahjongFullPlayUI.setLang(lang);
}

function init(fromHash) {
  syncLangToModules();
  document.documentElement.lang = lang === 'en' ? 'en' : lang === 'tw' ? 'zh-Hant' : 'zh-Hans';
  document.querySelector('#homeBtn').textContent = t().home;
  document.querySelector('#learnBtn').textContent = t().learn;
  document.querySelector('#foot').textContent = t().foot;
  if (fromHash && typeof location !== 'undefined' && location && location.hash && location.hash !== '#' && location.hash !== '#home') {
    applyHash(location.hash, false);
  }
  render();
}

function renderHome() {
  const c = t();
  const boardFooter = lang === 'en' ? 'Your seat is waiting' : lang === 'tw' ? '準備好，一起學麻雀' : '准备好，一起学麻将';
  const galleryLabel = lang === 'en' ? 'Explore all tiles →' : lang === 'tw' ? '查看完整麻雀圖鑑 →' : '查看完整麻将图鉴 →';
  return `<section class="hero">
    <div>
      <div class="eyebrow">${c.eyebrow}</div>
      <h1>${c.title}</h1>
      <p>${c.desc}</p>
      <div class="actions">
        <button class="btn" data-mode="begin">${c.start} →</button>
        <button class="btn alt" data-mode="advanced">${c.practice}</button>
        <button class="btn alt" data-play-enter>${c.playground} →</button>
      </div>
      <div class="caption">${c.note}</div>
    </div>
    <div class="illustration" aria-hidden="true">
      <div class="mahjong-board">
        <div class="wall wall-top">${'<i></i>'.repeat(13)}</div>
        <div class="wall wall-left">${'<i></i>'.repeat(11)}</div>
        <div class="wall wall-right">${'<i></i>'.repeat(11)}</div>
        <div class="board-center">
          <span class="board-label">MAHJONG STEPS</span>
          <div class="board-scatter">${['s2', 'p4', 'm6', 'z4', 'm3', 'p8'].map((x, i) => `<span class="scatter scatter-${i}">${tile(x)}</span>`).join('')}</div>
        </div>
        <div class="board-rack">${['s2', 's3', 's4', 'p3', 'p3', 'p3', 'm7', 'm8', 'm9', 'z6', 'z6', 'z6', 'z1'].map(tile).join('')}</div>
        <span class="board-footer">${boardFooter}</span>
      </div>
    </div>
  </section>
  <section id="styles">
    <div class="sectionhead">
      <div>
        <div class="eyebrow">EXPLORE THE STYLES</div>
        <h2>${c.choose}</h2>
      </div>
      <p>${c.chooseDesc}</p>
    </div>
    <div class="cards">${c.names.map((n, i) => `<button class="card" data-rule="${i}"><span class="icon">${['港', '中', '川', '美'][i]}</span><h3>${n}</h3><p>${c.summaries[i]}</p><span class="tag">${c.tags[i]} →</span></button>`).join('')}</div>
    <div class="gallery-link"><button class="btn alt" data-gallery>${galleryLabel}</button></div>
  </section>
  ${renderSeoOverview()}`;
}

function renderRule() {
  const c = t();
  const sharedLabel = lang === 'en' ? 'Shared foundations' : lang === 'tw' ? '通用基礎' : '通用基础';
  const sichuanLabel = lang === 'en' ? 'Start Sichuan course →' : lang === 'tw' ? '開始四川課程 →' : '开始四川课程 →';
  return `<div class="workspace">
    <button class="back" data-home>${c.back}</button>
    <div class="eyebrow" style="margin-top:30px">${c.ruleIntro}</div>
    <h1>${c.names[rule]}</h1>
    <p class="sub">${c.ruleBody[rule]}</p>
    <div class="panel">
      <h2>${c.names[rule]}</h2>
      <p class="sub">${c.ruleNote}</p>
      ${rule === 0 ? `<p class="hint">${c.hkNote}</p><a href="https://www.hkmahjong.org/rules?lang=en" target="_blank" rel="noopener">${c.ref}</a><div class="actions"><button class="btn" data-mode="begin">${c.open}</button><button class="btn alt" data-mode="advanced">${c.practice}</button><button class="btn alt" data-bridge-enter="foundation">${sharedLabel}</button></div>` : ''}
      ${rule === 2 ? `<label class="switch"><input id="exchange" type="checkbox" ${exchange ? 'checked' : ''}> ${c.switch} <strong>${exchange ? c.on : c.off}</strong></label><p class="hint">${c.switchNote}</p><div class="actions"><button class="btn" data-bridge-enter="sichuan">${sichuanLabel}</button><button class="btn alt" data-bridge-enter="foundation">${sharedLabel}</button></div>` : ''}
    </div>
  </div>`;
}

function renderLesson() {
  const c = t();
  const isBegin = mode === 'begin';
  const total = isBegin ? 2 : 1;
  const question = isBegin && step === 0 ? c.introQuestion : isBegin ? c.buildQuestion : c.advQuestion;
  const title = isBegin && step === 0 ? c.introTitle : isBegin ? c.buildTitle : c.advTitle;
  const desc = isBegin && step === 0 ? c.introText : isBegin ? c.buildDesc : c.advDesc;
  const buttons = isBegin && step === 0
    ? ['m3', 'p3', 'm6'].map(buttonTile).join('')
    : isBegin
      ? ['p5', 's8', 'm2'].map(buttonTile).join('')
      : advanced.map(buttonTile).join('');
  const rackHint = lang === 'en' ? 'Swipe to see all tiles →' : lang === 'tw' ? '左右滑動查看完整手牌 →' : '左右滑动查看完整手牌 →';
  const rack = isBegin && step === 1 ? `<div class="rack">${hand.map(tile).join('')}</div><p class="rack-hint">${rackHint}</p>` : '';
  const showNext = feedback && feedback.ok;

  return `<div class="workspace">
    <button class="back" data-home>${c.back}</button>
    <div class="eyebrow" style="margin-top:28px">${c.paths}</div>
    <h1>${isBegin ? c.begin : c.advanced}</h1>
    <p class="sub">${c.step} ${step + 1}${c.of}${total}</p>
    <div class="bar"><i style="width:${100 * (step + 1) / total}%"></i></div>
    <div class="panel">
      <span class="eyebrow">${isBegin ? '01 / LEARN' : '02 / PRACTICE'}</span>
      <h2>${title}</h2>
      <p class="sub">${desc}</p>
      ${rack}
      <h3>${question}</h3>
      <div class="choices" role="group" aria-label="${c.answer}">${buttons}</div>
      ${feedback ? `<div class="feedback ${feedback.ok ? '' : 'wrong'}" role="status">${feedback.text}</div>` : ''}
      ${isBegin && step === 1 ? `<p class="hint">${c.caution}</p>` : ''}
      ${showNext ? `<button class="btn" data-next>${step + 1 < total ? c.next : c.done} →</button>` : ''}
    </div>
    <p class="hint">${c.hkNote}</p>
  </div>`;
}

function renderComplete() {
  const c = t();
  return `<div class="workspace">
    <button class="back" data-home>${c.back}</button>
    <div class="panel" style="text-align:center;padding:60px 30px">
      <div class="icon" style="margin:auto">✦</div>
      <h1>${c.complete}</h1>
      <p class="sub">${c.completeDesc}</p>
      <div class="actions" style="justify-content:center">
        <button class="btn" data-mode="${mode}">${c.again}</button>
        <button class="btn alt" data-mode="${mode === 'begin' ? 'advanced' : 'begin'}">${c.other}</button>
      </div>
    </div>
  </div>`;
}

function renderGallery() {
  const title = lang === 'en' ? 'The tile library' : lang === 'tw' ? '麻雀牌圖鑑' : '麻将牌图鉴';
  const sub = lang === 'en'
    ? 'Explore the tiles in detail. Flower and joker use depends on the ruleset.'
    : lang === 'tw'
      ? '仔細認識每張牌；花牌及 Joker 的使用取決於玩法。'
      : '仔细认识每张牌；花牌及 Joker 的使用取决于玩法。';
  const groups = [
    ['m', lang === 'en' ? 'Characters' : lang === 'tw' ? '萬子' : '万子'],
    ['p', lang === 'en' ? 'Dots' : '筒子'],
    ['s', lang === 'en' ? 'Bamboo' : lang === 'tw' ? '索子' : '条子'],
    ['z', lang === 'en' ? 'Winds & dragons' : lang === 'tw' ? '風牌與三元牌' : '风牌与三元牌'],
    ['f', lang === 'en' ? 'Flowers & seasons' : lang === 'tw' ? '花牌與季節牌' : '花牌与季节牌'],
    ['j', 'Joker']
  ];
  return `<div class="workspace gallery">
    <button class="back" data-home>${t().back}</button>
    <div class="eyebrow gallery-eyebrow">THE TILE LIBRARY</div>
    <h1>${title}</h1>
    <p class="sub">${sub}</p>
    ${groups.map(([group, label]) => `<section class="gallery-section"><h2>${label}</h2><div class="gallery-grid">${MahjongTileArt.ids.filter(id => id[0] === group).map(id => `<figure>${tile(id)}<figcaption>${name(id)}</figcaption></figure>`).join('')}</div></section>`).join('')}
  </div>`;
}

function render() {
  if (page !== 'home' && window.MahjongTileArt && typeof MahjongTileArt.preloadAll === 'function') {
    MahjongTileArt.preloadAll(true);
  }
  if (page === 'fullplay' && window.MahjongFullPlayUI) {
    if (typeof MahjongFullPlayUI.renderInto === 'function') {
      MahjongFullPlayUI.renderInto(app);
    } else {
      app.innerHTML = MahjongFullPlayUI.html();
    }
    syncHash();
    updateDocumentMeta();
    return;
  }
  if (window.MahjongFullPlayUI && typeof MahjongFullPlayUI.leave === 'function') {
    MahjongFullPlayUI.leave();
  }
  app.innerHTML = page === 'course'
    ? MahjongCourseUI.html()
    : page === 'bridge'
      ? MahjongBridgeUI.html()
      : page === 'american'
        ? MahjongAmericanUI.html()
        : page === 'mcr'
          ? MahjongMCRUI.html()
          : page === 'playground'
            ? MahjongPlaygroundUI.html()
            : page === 'home'
              ? renderHome()
              : page === 'rule'
                ? renderRule()
                : page === 'lesson'
                  ? renderLesson()
                  : page === 'gallery'
                    ? renderGallery()
                    : renderComplete();
  syncHash();
  updateDocumentMeta();
}

function home() {
  page = 'home';
  feedback = null;
  render();
  window.scrollTo(0, 0);
}

app.addEventListener('click', e => {
  const el = e.target.closest('button');
  if (!el) return;

  if (el.hasAttribute('data-home')) return home();

  if (el.dataset.playEnter !== undefined) {
    page = 'fullplay';
    MahjongFullPlayUI.enter();
    render();
    window.scrollTo(0, 0);
    return;
  }

  if (page === 'fullplay' && Object.keys(el.dataset).some(k => k.startsWith('full'))) {
    const r = MahjongFullPlayUI.dispatch(el);
    if (r === 'back') { home(); return; }
    if (r === 'short') {
      page = 'playground';
      MahjongPlaygroundUI.enter();
      render();
      window.scrollTo(0, 0);
      return;
    }
    render();
    if (r === 'view') window.scrollTo(0, 0);
    return;
  }

  if (page === 'playground' && Object.keys(el.dataset).some(k => k.startsWith('play'))) {
    const r = MahjongPlaygroundUI.dispatch(el);
    if (r === 'back') { home(); return; }
    render();
    if (r === 'view') window.scrollTo(0, 0);
    return;
  }

  if (el.hasAttribute('data-gallery')) {
    page = 'gallery';
    render();
    window.scrollTo(0, 0);
    return;
  }

  if (el.dataset.bridgeEnter !== undefined) {
    bridgeTrack = el.dataset.bridgeEnter;
    bridgeReturnPage = 'rule';
    page = 'bridge';
    MahjongBridgeUI.enter(bridgeTrack, exchange);
    render();
    window.scrollTo(0, 0);
    return;
  }

  if (el.dataset.rule !== undefined) {
    rule = Number(el.dataset.rule);
    if (rule === 3) {
      page = 'american';
      MahjongAmericanUI.enter();
    } else if (rule === 1) {
      page = 'mcr';
      MahjongMCRUI.enter();
    } else {
      page = 'rule';
    }
    render();
    window.scrollTo(0, 0);
    return;
  }

  if (el.dataset.mode) {
    if (el.dataset.mode === 'begin') {
      page = 'course';
      MahjongCourseUI.enter();
      render();
      window.scrollTo(0, 0);
      return;
    }
    mode = el.dataset.mode;
    step = 0;
    feedback = null;
    selectedTile = null;
    page = 'lesson';
    render();
    window.scrollTo(0, 0);
    return;
  }

  if (page === 'mcr' && Object.keys(el.dataset).some(k => k.startsWith('mcr'))) {
    const r = MahjongMCRUI.dispatch(el);
    if (r === 'back') { home(); return; }
    if (r === 'foundation') {
      bridgeTrack = 'foundation';
      bridgeReturnPage = 'mcr';
      page = 'bridge';
      MahjongBridgeUI.enter('foundation', exchange);
      render();
      window.scrollTo(0, 0);
      return;
    }
    if (r === 'table') {
      page = 'fullplay';
      MahjongFullPlayUI.enter('mcr');
      render();
      window.scrollTo(0, 0);
      return;
    }
    if (r === 'view' || r === 'local') {
      render();
      if (r === 'view') window.scrollTo(0, 0);
    }
    return;
  }

  if (page === 'american' && Object.keys(el.dataset).some(k => k.startsWith('american'))) {
    const r = MahjongAmericanUI.dispatch(el);
    if (r === 'back') { home(); return; }
    if (r === 'view' || r === 'local') {
      render();
      if (r === 'view') window.scrollTo(0, 0);
    }
    return;
  }

  if (page === 'bridge' && Object.keys(el.dataset).some(k => k.startsWith('bridge'))) {
    if (el.hasAttribute('data-bridge-back')) {
      if (bridgeReturnPage === 'mcr') {
        page = 'mcr';
        MahjongMCRUI.enter();
      } else {
        page = 'rule';
        rule = bridgeTrack === 'foundation' ? 0 : 2;
      }
      render();
      window.scrollTo(0, 0);
      return;
    }
    if (el.hasAttribute('data-bridge-to-sichuan')) bridgeTrack = 'sichuan';
    const r = MahjongBridgeUI.dispatch(el);
    if (r === 'to-hk') {
      page = 'course';
      MahjongCourseUI.enter();
      render();
      window.scrollTo(0, 0);
    } else {
      const focusAttr = [
        'data-bridge-option', 'data-bridge-pick', 'data-bridge-discard',
        'data-bridge-wait', 'data-bridge-active', 'data-bridge-step', 'data-bridge-submit'
      ].find(a => el.hasAttribute(a));
      const focusValue = focusAttr ? el.getAttribute(focusAttr) : null;
      render();
      if (r === 'view') {
        window.scrollTo(0, 0);
      } else if (r === 'local' && focusAttr) {
        const focused = [...app.querySelectorAll('button[' + focusAttr + ']')].find(x => x.getAttribute(focusAttr) === focusValue);
        if (focused && !focused.disabled) focused.focus({ preventScroll: true });
        else app.querySelector('[data-bridge-next]')?.focus({ preventScroll: true });
      }
    }
    return;
  }

  if (page === 'course' && Object.keys(el.dataset).some(k => k.startsWith('course'))) {
    const r = MahjongCourseUI.dispatch(el);
    if (r === 'to-bridge') {
      bridgeTrack = 'foundation';
      page = 'bridge';
      MahjongBridgeUI.enter('foundation', exchange);
      render();
      window.scrollTo(0, 0);
    } else if (r === 'view') {
      render();
      window.scrollTo(0, 0);
    } else if (r === 'local') {
      const focusAttr = [
        'data-course-option', 'data-course-pick', 'data-course-submit',
        'data-course-wait', 'data-course-round-pick', 'data-course-round-action',
        'data-course-round-hint', 'data-course-round-restart', 'data-course-fan', 'data-course-method'
      ].find(a => el.hasAttribute(a));
      const focusValue = focusAttr ? el.getAttribute(focusAttr) : null;
      render();
      if (focusAttr) {
        const focused = [...app.querySelectorAll('button[' + focusAttr + ']')].find(b => b.getAttribute(focusAttr) === focusValue);
        if (focused && !focused.disabled) focused.focus({ preventScroll: true });
        else (app.querySelector('[data-course-next]') || app.querySelector('[data-course-round-action]'))?.focus({ preventScroll: true });
      }
    }
    return;
  }

  if (el.dataset.tile) {
    const id = el.dataset.tile;
    selectedTile = id;
    const ok = mode === 'begin'
      ? (step === 0 ? id === 'm3' : isBasicWinningHand([...hand, id]))
      : id === 'z1';
    feedback = {
      ok,
      text: mode === 'begin'
        ? (step === 0 ? (ok ? t().correct : t().wrong) : (ok ? t().winCorrect : t().winWrong))
        : (ok ? t().advCorrect : t().advWrong)
    };
    render();
    return;
  }

  if (el.hasAttribute('data-next')) {
    if (mode === 'begin' && step === 0) {
      step = 1;
      feedback = null;
      selectedTile = null;
    } else {
      page = 'complete';
    }
    render();
    window.scrollTo(0, 0);
  }
});

app.addEventListener('change', e => {
  if (e.target.id === 'exchange') {
    exchange = e.target.checked;
    lsSet('mj-sichuan-exchange', exchange ? '1' : '0');
    if (window.MahjongBridgeUI) MahjongBridgeUI.setExchange(exchange);
    render();
  }
});

langEl.addEventListener('change', () => {
  lang = langEl.value;
  lsSet('mj-language', lang);
  feedback = null;
  selectedTile = null;
  init(false);
});

document.querySelector('#homeBtn').addEventListener('click', home);
document.querySelector('#learnBtn').addEventListener('click', () => {
  home();
  document.querySelector('#styles').scrollIntoView({ behavior: 'smooth' });
});

const brandEl = document.querySelector('.brand');
if (brandEl) {
  brandEl.addEventListener('click', e => {
    e.preventDefault();
    home();
  });
}

if (window.MahjongFullPlayUI && typeof MahjongFullPlayUI.setOnUpdate === 'function') {
  MahjongFullPlayUI.setOnUpdate(() => {
    if (page === 'fullplay') render();
  });
}

if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
  window.addEventListener('hashchange', () => {
    if (typeof location === 'undefined' || !location) return;
    if (location.hash === lastSyncedHash) return;
    applyHash(location.hash, true);
  });
  window.addEventListener('keydown', e => {
    if (page === 'fullplay' && window.MahjongFullPlayUI && typeof MahjongFullPlayUI.handleKey === 'function') {
      if (MahjongFullPlayUI.handleKey(e)) render();
    }
  });
}

init(true);
