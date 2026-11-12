/* Shared interface for bounded Hong Kong, Sichuan and American practice scenes. */
(function (g) {
  'use strict';
  const data = g.MahjongPlaygroundData;
  const engine = g.MahjongPlaygroundEngine.createEngine(data);
  const art = g.MahjongTileArt;
  const KEY = 'mahjong-playground-v1';
  const language = {
    zh: { title:'牌桌操练场',sub:'在同一张桌面比较不同的合法选择。每局只呈现一个关键时刻，可按原样重开。',modes:{hk:'香港麻将',sc:'四川血战到底',am:'美式麻将'},list:'选择局面',back:'← 返回首页',map:'返回局面列表',restart:'原样重开',again:'重开并试另一条路线',done:'已体验',try:'开始操练',hand:'你的手牌',last:'最近弃牌',discard:'已弃牌',melds:'公开组',opponent:'对手',you:'你',wall:'牌墙剩余',tiles:'张',missing:'定缺',target:'教学目标',phase:'当前阶段',active:'仍在摸打',note:'局面说明',choose:'选择一个行动',result:'这一条路线的结果',legal:'这一步有效',illegal:'这一步不符合本局规则',history:'已走 {n} 步',scope:'短局面练习：其他玩家的行动已省略。这里不模拟完整自由对局或自动裁定所有番数。',amScope:'美式牌型仅使用原创教学卡样，不是 NMJL 年度卡牌型。',storage:'浏览器存储不可用，完成记录仅在本次页面中保留。' },
    tw: { title:'牌桌操練場',sub:'在同一張桌面比較不同的合法選擇。每局只呈現一個關鍵時刻，可按原樣重開。',modes:{hk:'香港麻雀',sc:'四川血戰到底',am:'美式麻將'},list:'選擇局面',back:'← 返回首頁',map:'返回局面列表',restart:'原樣重開',again:'重開並試另一條路線',done:'已體驗',try:'開始操練',hand:'你的手牌',last:'最近棄牌',discard:'已棄牌',melds:'公開組',opponent:'對手',you:'你',wall:'牌牆剩餘',tiles:'張',missing:'定缺',target:'教學目標',phase:'當前階段',active:'仍在摸打',note:'局面說明',choose:'選擇一個行動',result:'這一條路線的結果',legal:'這一步有效',illegal:'這一步不符合本局規則',history:'已走 {n} 步',scope:'短局面練習：其他玩家的行動已省略。這裡不模擬完整自由對局或自動裁定所有番數。',amScope:'美式牌型僅使用原創教學卡樣，不是 NMJL 年度卡牌型。',storage:'瀏覽器儲存不可用，完成記錄僅在本次頁面中保留。' },
    en: { title:'Table Playground',sub:'Compare legal decisions on one shared table. Each scene captures a key moment and can be restarted exactly.',modes:{hk:'Hong Kong',sc:'Sichuan Blood Battle',am:'American'},list:'Choose a situation',back:'← Back home',map:'All situations',restart:'Restart same situation',again:'Restart and try another route',done:'Tried',try:'Start practice',hand:'Your hand',last:'Latest discard',discard:'Discard pool',melds:'Exposed sets',opponent:'Opponent',you:'You',wall:'Wall remaining',tiles:'tiles',missing:'Missing suit',target:'Practice target',phase:'Current phase',active:'Still playing',note:'Situation note',choose:'Choose an action',result:'Result of this route',legal:'Valid move',illegal:'This action is not legal here',history:'{n} move(s) taken',scope:'A short practice scene: other players’ turns are omitted. This is not a complete free game or a full scoring referee.',amScope:'American patterns here are original teaching lines, not official NMJL annual-card hands.',storage:'Browser storage is unavailable. Completion marks last only in this page.' }
  };
  let lang='zh', mode='hk', state=null, feedback=null, completed=[], storageBlocked=false;
  const t=()=>language[lang];
  function kindLabel(kind,currentMode){
    const labels={
      discard:['出牌','出牌','Discard'],chow:['吃','吃','Chow'],pung:['碰','碰','Pung'],
      win:['胡牌','胡牌','Win'],call:['叫牌','叫牌','Call'],pass:currentMode==='am'?['传牌','傳牌','Pass tiles']:['过牌','過牌','Pass'],
      exchange:['换 Joker','換 Joker','Exchange joker'],hold:['保留','保留','Keep'],check:['核对','核對','Check'],stop:['结束','結束','End']
    };
    const index=lang==='zh'?0:lang==='tw'?1:2;
    return (labels[kind]||[kind,kind,kind])[index];
  }
  function local(v){return v && typeof v==='object' ? (v[lang] || v.zh || '') : (v ?? '');}
  function esc(v){return String(v ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function load(){try{const p=JSON.parse(localStorage.getItem(KEY)||'{}');completed=Array.isArray(p.completed)?p.completed.filter(id=>engine.list().some(s=>s.id===id)):[];}catch(e){storageBlocked=true;completed=[];}}
  function save(){try{localStorage.setItem(KEY,JSON.stringify({completed:[...new Set(completed)]}));}catch(e){storageBlocked=true;}}
  function tileName(id){
    if(id==='j1')return 'Joker';
    const n=Number(id.slice(1));
    if(id[0]==='m')return lang==='en'?`${n} Crak`:`${n}${lang==='tw'?'萬':'万'}`;
    if(id[0]==='p')return lang==='en'?`${n} Dot`:`${n}筒`;
    if(id[0]==='s')return lang==='en'?`${n} Bam`:`${n}${lang==='tw'?'索':'条'}`;
    if(id[0]==='z')return ({zh:['东风','南风','西风','北风','红中','发财','白板'],tw:['東風','南風','西風','北風','紅中','發財','白板'],en:['East','South','West','North','Red dragon','Green dragon','White dragon']})[lang][n-1];
    return ({zh:['春','夏','秋','冬','梅','兰','菊','竹'],tw:['春','夏','秋','冬','梅','蘭','菊','竹'],en:['Spring','Summer','Autumn','Winter','Plum','Orchid','Chrysanthemum','Bamboo']})[lang][n-1];
  }
  function tile(id){return `<span class="tile" role="img" aria-label="${esc(tileName(id))}">${art.svg(id)}</span>`;}
  function tiles(items){return (items||[]).map(tile).join('');}
  function labelSeat(id){return id==='you'?t().you:id==='opponent'?t().opponent:({east:{zh:'东家',tw:'東家',en:'East'},south:{zh:'南家',tw:'南家',en:'South'},west:{zh:'西家',tw:'西家',en:'West'},north:{zh:'北家',tw:'北家',en:'North'}}[id]||{})[lang]||id;}
  function namesOfSuits(id){return id==='m'?(lang==='en'?'Characters':lang==='tw'?'萬子':'万子'):id==='p'?(lang==='en'?'Dots':'筒子'):(lang==='en'?'Bamboo':lang==='tw'?'索子':'条子');}
  function mapHtml(){
    const all=engine.list().filter(s=>s.mode===mode), c=t();
    return `<div class="workspace pg-page"><button class="back" data-play-back>${c.back}</button><div class="eyebrow pg-eyebrow">TABLE PLAYGROUND</div><h1>${c.title}</h1><p class="sub">${c.sub}</p><div class="pg-tabs" role="group" aria-label="${esc(c.list)}">${['hk','sc','am'].map(id=>`<button class="pg-tab${mode===id?' active':''}" data-play-mode="${id}" aria-pressed="${mode===id}">${c.modes[id]}</button>`).join('')}</div><h2 class="pg-list-title">${c.modes[mode]} · ${c.list}</h2><div class="pg-list">${all.map((s,i)=>`<button class="pg-card" data-play-open="${s.id}"><span class="pg-number">${String(i+1).padStart(2,'0')}</span><strong>${esc(local(s.title))}</strong><span>${esc(local(s.intro))}</span><small>${completed.includes(s.id)?'✓ '+c.done:c.try+' →'}</small></button>`).join('')}</div><p class="pg-scope">${c.scope}</p>${mode==='am'?`<p class="pg-scope">${c.amScope}</p>`:''}${storageBlocked?`<p class="pg-scope">${c.storage}</p>`:''}</div>`;
  }
  function tableHtml(cur){
    const n=cur.node, tb=n.table||{}, c=t();
    const active=tb.activeSeats||['east','south','west','north'];
    const center=tb.lastDiscard?[tile(tb.lastDiscard)]:[];
    return `<div class="pg-board" aria-label="${esc(c.title)}"><div class="pg-seats"><span class="pg-seat${active.includes('north')?'':' inactive'}">${labelSeat('north')}</span><span class="pg-seat${active.includes('west')?'':' inactive'}">${labelSeat('west')}</span><span class="pg-seat${active.includes('east')?'':' inactive'}">${labelSeat('east')}</span></div><div class="pg-board-center"><span>雀步 · MAHJONG STEPS</span>${center.length?`<div class="pg-last"><small>${c.last}</small>${center.join('')}</div>`:'<div class="pg-felt-mark">✦</div>'}<b>${labelSeat('you')}</b></div></div>`;
  }
  function sceneHtml(){
    const c=t(), cur=engine.current(state);if(!cur){state=null;return mapHtml();}
    const n=cur.node,tb=n.table||{};
    const meta=[tb.phase&&[c.phase,local(tb.phase)],tb.wallRemaining!==undefined&&[c.wall,`${tb.wallRemaining} ${c.tiles}`],tb.missingSuit&&[c.missing,namesOfSuits(tb.missingSuit)],tb.activeSeats&&[c.active,tb.activeSeats.map(labelSeat).join(' · ')],tb.target&&[c.target,local(tb.target)]].filter(Boolean);
    const actionButtons=!cur.done?`<div class="pg-actions" role="group" aria-label="${esc(c.choose)}">${n.actions.map(x=>`<button class="pg-action" data-play-action="${esc(x.id)}"><span class="pg-action-kind">${esc(kindLabel(x.kind,cur.mode))}</span><span>${esc(local(x.label))}</span><i>→</i></button>`).join('')}</div>`:'';
    return `<div class="workspace pg-page"><button class="back" data-play-map>${c.map}</button><div class="eyebrow pg-eyebrow">${c.modes[cur.mode]} · TABLE PLAYGROUND</div><h1>${esc(local(cur.title))}</h1><p class="sub">${esc(local(cur.intro))}</p><div class="pg-toolbar"><span>${c.history.replace('{n}',state.history.length)}</span><button data-play-restart>${c.restart}</button></div>${tableHtml(cur)}<div class="pg-meta">${meta.map(([k,v])=>`<div><small>${esc(k)}</small><strong>${esc(v)}</strong></div>`).join('')}</div>${tb.note?`<p class="pg-note">${esc(c.note)}：${esc(local(tb.note))}</p>`:''}${tb.melds?.length?`<section class="pg-melds"><h3>${c.melds}</h3>${tb.melds.map(m=>`<div class="pg-meld"><strong>${esc(labelSeat(m.seat))}</strong><div class="pg-tiles">${tiles(m.tiles)}</div></div>`).join('')}</section>`:''}${tb.discards?.length?`<section class="pg-discards"><h3>${c.discard}</h3><div class="pg-tiles">${tiles(tb.discards)}</div></section>`:''}<section class="pg-hand"><h2>${c.hand} <small>· ${n.hand.length} ${c.tiles}</small></h2><div class="pg-rack">${tiles(n.hand)}</div></section>${feedback?`<div class="pg-feedback ${feedback.type}" role="status"><strong>${feedback.type==='illegal'?c.illegal:c.legal}</strong><p>${esc(local(feedback.text))}</p></div>`:''}${cur.done?`<section class="pg-result"><div class="eyebrow">${c.result}</div><h2>${esc(local(n.result.title))}</h2><p>${esc(local(n.result.summary))}</p><div class="pg-result-actions"><button class="btn" data-play-restart>${c.again} →</button><button class="btn alt" data-play-map>${c.map}</button></div></section>`:`<section class="pg-decisions"><h2>${esc(local(n.prompt))}</h2>${actionButtons}</section>`}<p class="pg-scope">${c.scope}${cur.mode==='am'?' '+c.amScope:''}</p></div>`;
  }
  function enter(nextMode){if(['hk','sc','am'].includes(nextMode))mode=nextMode;state=null;feedback=null;load();}
  function dispatch(el){const d=el.dataset||{};
    if(d.playBack!==undefined)return 'back';
    if(d.playMap!==undefined){state=null;feedback=null;return 'view';}
    if(d.playMode!==undefined){if(['hk','sc','am'].includes(d.playMode))mode=d.playMode;state=null;feedback=null;return 'view';}
    if(d.playOpen!==undefined){const next=engine.start(d.playOpen);if(next){state=next;const meta=engine.current(state);mode=meta.mode;feedback=null;}return 'view';}
    if(d.playRestart!==undefined){if(state)state=engine.restart(state);feedback=null;return 'view';}
    if(d.playAction!==undefined&&state){const out=engine.choose(state,d.playAction);if(out.state)state=out.state;if(out.reason==='illegal')feedback={type:'illegal',text:out.feedback};else if(out.accepted){feedback={type:'legal',text:out.feedback};if(out.done&&!completed.includes(state.scenarioId)){completed.push(state.scenarioId);save();}}return 'local';}
    return 'local';
  }
  g.MahjongPlaygroundUI={enter,setLang(value){if(language[value])lang=value;},html(){return state?sceneHtml():mapHtml();},dispatch,engine};
})(typeof globalThis!=='undefined'?globalThis:window);
