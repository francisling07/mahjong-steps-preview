/* Shared foundation and Sichuan starter course. Keeps Hong Kong progress intact. */
(function(g){
  'use strict';
  var D=g.MahjongBridgeData,S=g.SichuanLearningRules,Art=g.MahjongTileArt,SCo=g.SichuanLearningScore,RE=g.SichuanRoundEngine;
  var KEY='mahjong-bridge-v1',HK_KEY='mahjong-steps-course-v1';
  var lang='zh',track='sichuan',exchange=false,view='map',lessonId=null,index=0,choice=null,picks=[],answered=null,reviewing=false,reviewIds=[],reviewAt=0,roundState=null,roundStep=null;
  var memory={version:1,solved:[],review:[]},storageOk=true;
  var tr={
    zh:{back:'← 返回玩法',foundation:'通用基础',sichuan:'四川血战到底 · 十二章课程',foundationSub:'识数牌、认组合、摸打与胡牌结构。香港、四川和国标可复用；美式只复用部分牌面知识。',sichuanSub:'先看通用基础，再集中学习四川差异。已会香港麻将，可直接进入四川专章。',shared:'通用基础 · 三课九题',diff:'四川专章 · 十二章四十二课',optional:'可选桌规 · 换三张',familiar:'从香港课程已学过',done:'✓ 已掌握',todo:'开始学习',progress:'学习中',start:'直接学四川差异 →',toSichuan:'进入四川课程 →',toHK:'查看香港课程 →',source:'四川竞赛规则原文 ↗',scope:'以 2024 年四川麻将竞赛规则为基准。换三张仅为可选桌规示范；不同桌规的番种、交换方向和结算可能不同。',compare:'香港与四川：先看差异',steps:'第 {i} / {n} 题',submit:'提交答案',next:'下一题 →',finish:'完成本课 →',correct:'✓ 答对了',wrong:'✗ 再试一次',lessonDone:'本课完成',doneDesc:'可以返回目录，或继续下一课。',backMap:'返回课程目录',nextLesson:'下一课：{title} →',review:'待复习 {n} 题',stat:'已掌握 {n} / {total} 项',pick3:'选择三张牌',waits:'可多选全部候选牌',active:'选择仍在摸打的玩家',missing:'定缺',east:'东家',south:'南家',west:'西家',north:'北家',exchangeOn:'已开启：增加一课三题的同花色选牌练习。',exchangeOff:'已关闭：先定缺，不出现换三张练习。',storage:'浏览器存储不可用，本次进度刷新后会丢失。',swipe:'左右滑动查看完整手牌。',keyMoment:'关键局面',keyMomentNote:'这是关键局面推演：只保留决定性的三步，不是完整自由对局。',roundStep:'第 {i} / {n} 步',handLabel:'手牌',playing:'仍在摸打',wall:'剩余 {n} 张',lastDiscard:'最近弃牌',roundResult:'本局结算',winPoints:'胡牌分',kongPoints:'杠分',suitM:'万子',suitP:'筒子',suitS:'条子'},
    tw:{back:'← 返回玩法',foundation:'通用基礎',sichuan:'四川血戰到底 · 十二章課程',foundationSub:'識數牌、認組合、摸打與胡牌結構。香港、四川和國標可重用；美式只重用部分牌面知識。',sichuanSub:'先看通用基礎，再集中學習四川差異。已會香港麻雀，可直接進入四川專章。',shared:'通用基礎 · 三課九題',diff:'四川專章 · 十二章四十二課',optional:'可選桌規 · 換三張',familiar:'從香港課程已學過',done:'✓ 已掌握',todo:'開始學習',progress:'學習中',start:'直接學四川差異 →',toSichuan:'進入四川課程 →',toHK:'查看香港課程 →',source:'四川競賽規則原文 ↗',scope:'以 2024 年四川麻將競賽規則為基準。換三張僅為可選桌規示範；不同桌規的番種、交換方向和結算可能不同。',compare:'香港與四川：先看差異',steps:'第 {i} / {n} 題',submit:'提交答案',next:'下一題 →',finish:'完成本課 →',correct:'✓ 答對了',wrong:'✗ 再試一次',lessonDone:'本課完成',doneDesc:'可以返回目錄，或繼續下一課。',backMap:'返回課程目錄',nextLesson:'下一課：{title} →',review:'待複習 {n} 題',stat:'已掌握 {n} / {total} 項',pick3:'選擇三張牌',waits:'可多選全部候選牌',active:'選擇仍在摸打的玩家',missing:'定缺',east:'東家',south:'南家',west:'西家',north:'北家',exchangeOn:'已開啟：增加一課三題的同花色選牌練習。',exchangeOff:'已關閉：先定缺，不出現換三張練習。',storage:'瀏覽器儲存不可用，本次進度重新整理後會遺失。',swipe:'左右滑動查看完整手牌。',keyMoment:'關鍵局面',keyMomentNote:'這是關鍵局面推演：只保留決定性的三步，不是完整自由對局。',roundStep:'第 {i} / {n} 步',handLabel:'手牌',playing:'仍在摸打',wall:'剩餘 {n} 張',lastDiscard:'最近棄牌',roundResult:'本局結算',winPoints:'胡牌分',kongPoints:'槓分',suitM:'萬子',suitP:'筒子',suitS:'條子'},
    en:{back:'← Back to styles',foundation:'Shared foundations',sichuan:'Sichuan Blood Battle · Twelve-chapter course',foundationSub:'Recognise suits, sets, turns and basic winning shapes. Hong Kong, Sichuan and MCR share these ideas; American mahjong shares only some tile recognition.',sichuanSub:'Start with shared foundations, then focus on Sichuan differences. If you know Hong Kong mahjong, jump straight to the Sichuan chapters.',shared:'Shared foundations · 3 lessons, 9 exercises',diff:'Sichuan chapters · 12 chapters, 42 lessons',optional:'Optional table rule · exchange three',familiar:'Already learned in Hong Kong course',done:'✓ Mastered',todo:'Start',progress:'In progress',start:'Jump to Sichuan differences →',toSichuan:'Explore Sichuan course →',toHK:'View Hong Kong course →',source:'Sichuan competition rule ↗',scope:'Based on the 2024 Sichuan competition rule. Exchanging three tiles is an optional table rule example; pattern values, exchange direction and payments may differ by table.',compare:'Hong Kong and Sichuan: key differences',steps:'Question {i} of {n}',submit:'Submit answer',next:'Next question →',finish:'Finish lesson →',correct:'✓ Correct',wrong:'✗ Try again',lessonDone:'Lesson complete',doneDesc:'Return to the map or continue to the next lesson.',backMap:'Back to course map',nextLesson:'Next lesson: {title} →',review:'Review {n} mistakes',stat:'Mastered {n} of {total} exercises',pick3:'Choose three tiles',waits:'Select every winning candidate',active:'Select players still active',missing:'Missing suit',east:'East',south:'South',west:'West',north:'North',exchangeOn:'On: one extra lesson with three same-suit selection exercises.',exchangeOff:'Off: choose a missing suit without an exchange lesson.',storage:'Browser storage is unavailable; progress will be lost after a refresh.',swipe:'Scroll sideways to see the whole hand.',keyMoment:'Key moment',keyMomentNote:'A guided key-moment scenario: only the three deciding steps, not a full free round.',roundStep:'Step {i} of {n}',handLabel:'Hand',playing:'Still playing',wall:'{n} tiles left',lastDiscard:'Last discard',roundResult:'Round settlement',winPoints:'Winning points',kongPoints:'Kong points',suitM:'Characters',suitP:'Dots',suitS:'Bamboo'}
  };
  var comparison=[
    {key:'tiles',zh:['牌集','香港 136 张无花主线，含字牌','四川 108 张，只用三门数牌'],tw:['牌集','香港 136 張無花主線，含字牌','四川 108 張，只用三門數牌'],en:['Tiles','Hong Kong: 136 without flowers, including honours','Sichuan: 108 numbered tiles only']},
    {key:'chow',zh:['吃牌','可吃上家最新弃牌','不能吃'],tw:['吃牌','可吃上家最新棄牌','不能吃'],en:['Chow','Hong Kong: may chow the previous player’s latest discard','Sichuan: no chow']},
    {key:'special',zh:['特殊胡牌形','十三幺','七对'],tw:['特殊胡牌形','十三幺','七對'],en:['Special win shape','Hong Kong: Thirteen Orphans','Sichuan: Seven Pairs']},
    {key:'win',zh:['一家胡后','该局结束','胡者退出，其余继续'],tw:['一家胡後','該局結束','胡者退出，其餘繼續'],en:['After one win','Hong Kong: hand ends','Sichuan: winner leaves, others continue']},
    {key:'kong',zh:['杠后补牌','香港参考从牌尾补','本四川竞赛规则从牌墙前端补'],tw:['槓後補牌','香港參考從牌尾補','本四川競賽規則從牌牆前端補'],en:['Kong replacement','Hong Kong reference: tail of wall','This Sichuan rule: front of wall']},
    {key:'points',zh:['计分','三番起胡、十番封顶的香港表','四川竞赛分值与三番封顶'],tw:['計分','三番起胡、十番封頂的香港表','四川競賽分值與三番封頂'],en:['Scoring','Hong Kong: three-faan minimum, ten-faan cap','Sichuan: separate points table and three-faan cap']}
  ];
  var all=[...D.foundation,...D.sichuan.flatMap(function(c){return c.lessons;}),D.optionalExchange];
  var byId=Object.create(null),byQuestion=Object.create(null);
  all.forEach(function(l){byId[l.id]=l;l.questions.forEach(function(q){byQuestion[q.id]=q;});});
  function text(key){return tr[lang][key];}
  function local(v){return v && (v[lang]||v.zh)||'';}
  function esc(v){return String(v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');}
  function tile(id){return '<span class="tile" role="img" aria-label="'+esc(tileName(id))+'">'+Art.svg(id)+'</span>';}
  function tileName(id){var n=id.slice(1),s=id[0],word=s==='m'?['万','萬','characters']:s==='p'?['筒','筒','dots']:['条','條','bamboo'];return n+' '+word[lang==='en'?2:lang==='tw'?1:0];}
  function safeRead(key){try{return JSON.parse(g.localStorage.getItem(key)||'null');}catch(e){return null;}}
  function load(){var x=safeRead(KEY);if(!x||x.version!==1||!Array.isArray(x.solved)||!Array.isArray(x.review))return memory;memory={version:1,solved:x.solved.filter(function(id){return !!byQuestion[id];}),review:x.review.filter(function(id){return !!byQuestion[id];})};return memory;}
  function save(p){memory=p;try{g.localStorage.setItem(KEY,JSON.stringify(p));}catch(e){storageOk=false;}}
  var legacy={ 'base-1':['hk-1-1','hk-1-2','hk-1-3'],'base-2':['hk-2-1','hk-2-2','hk-2-3'],'base-3':['hk-4-1','hk-4-2','hk-4-3']};
  function learnedInHongKong(id){var ids=legacy[id],x=safeRead(HK_KEY);if(!ids||!x||!Array.isArray(x.solved))return false;return ids.every(function(lid){return ['a','b','c'].every(function(suffix){return x.solved.indexOf(lid+'-'+suffix)>=0;});});}
  function done(l,p){return l.questions.every(function(q){return p.solved.indexOf(q.id)>=0;})||learnedInHongKong(l.id);}
  function entries(){return track==='foundation'?D.foundation:D.foundation.concat(D.sichuan.flatMap(function(c){return c.lessons;}),exchange?[D.optionalExchange]:[]);}
  function resetAnswer(){choice=null;picks=[];answered=null;roundState=null;roundStep=null;}
  function selectLesson(id){if(!byId[id]||entries().indexOf(byId[id])<0)return false;lessonId=id;index=0;reviewing=false;resetAnswer();view='lesson';return true;}
  function selectReview(){var q=byQuestion[reviewIds[reviewAt]],lesson=all.find(function(l){return l.questions.indexOf(q)>=0;});if(!lesson)return false;lessonId=lesson.id;index=lesson.questions.indexOf(q);resetAnswer();view='lesson';return true;}
  function setLang(value){if(tr[value])lang=value;}
  function enter(nextTrack,nextExchange){track=nextTrack==='foundation'?'foundation':'sichuan';exchange=!!nextExchange;view='map';lessonId=null;reviewing=false;resetAnswer();load();}
  function setExchange(value){exchange=!!value;if(lessonId==='sc-x-1'&&!exchange){view='map';lessonId=null;}resetAnswer();}
  function result(q){
    if(q.type==='choice')return choice===q.answer;
    if(q.type==='discard')return choice!==null&&S.legalDiscards(q.hand,q.missingSuit).indexOf(q.hand[Number(choice)])>=0;
    if(q.type==='pick3')return S.validExchangeSelection(q.hand,picks)&&q.hand[picks[0]][0]===q.targetSuit;
    if(q.type==='waits'){var expected=S.waits(q.hand,[],q.missingSuit).filter(function(id){return q.candidates.indexOf(id)>=0;});return picks.length===expected.length&&expected.every(function(id){return picks.indexOf(id)>=0;});}
    if(q.type==='battle'){var survivors=S.activeAfterWin(q.active,q.winner);return !!survivors&&picks.length===survivors.length&&survivors.every(function(id){return picks.indexOf(id)>=0;});}
    if(q.type==='score'||q.type==='kongScore'){var calc=SCo&&SCo[q.type==='score'?'score':'kongPayment'](q.type==='score'?q.scoreInput:q.kongInput);return !!calc&&choice!==null&&String(calc[q.target])===String(choice);}
    if(q.type==='round'){var cur=RE&&roundState&&RE.current(roundState);return !!cur&&cur.done===true;}
    return false;
  }
  function suitName(suit){return suit==='m'?text('suitM'):suit==='p'?text('suitP'):text('suitS');}
  function markReview(q){var p=load();p.solved=p.solved.filter(function(id){return id!==q.id;});if(p.review.indexOf(q.id)<0)p.review.push(q.id);save(p);}
  function ensureRound(q){if(RE&&!roundState)roundState=RE.start(q.scenarioId);return roundState&&RE&&RE.current(roundState)||null;}
  function roundFinished(){var cur=RE&&roundState&&RE.current(roundState);return !!cur&&cur.done===true;}
  function sceneHtml(sc){
    if(!sc||!Array.isArray(sc.hand))return '';
    var html='<p class="bridge-round-label">'+text('handLabel')+'</p>';
    html+='<div class="course-hand bridge-hand" tabindex="0" role="group" aria-label="'+esc(text('handLabel'))+'">'+sc.hand.map(tile).join('')+'</div>';
    html+='<p class="course-hint">'+text('swipe')+'</p>';
    html+='<div class="bridge-round-meta"><span>'+text('missing')+' · '+esc(suitName(sc.missingSuit))+'</span>';
    html+='<span>'+text('playing')+' · '+esc((Array.isArray(sc.active)?sc.active:[]).map(function(id){return text(id);}).join(lang==='en'?', ':'、'))+'</span>';
    html+='<span>'+esc(text('wall').replace('{n}',Number.isInteger(sc.wallRemaining)?sc.wallRemaining:'—'))+'</span>';
    if(sc.lastDiscard)html+='<span>'+text('lastDiscard')+' · '+tile(sc.lastDiscard)+'</span>';
    return html+'</div>';
  }
  function roundHtml(q){
    if(!RE)return '<p class="course-warn">'+text('back')+'</p>';
    var cur=ensureRound(q),html='<p><span class="bridge-round-badge">'+text('keyMoment')+'</span></p><p class="course-note">'+text('keyMomentNote')+'</p>';
    if(!cur)return html;
    if(roundStep&&!answered)html+='<div class="course-feedback'+(roundStep.ok?'':' bad')+'" role="status"><strong>'+text(roundStep.ok?'correct':'wrong')+'</strong><p>'+esc(local(roundStep.explanation))+'</p></div>';
    if(!cur.done){
      html+='<p class="sub">'+esc(text('roundStep').replace('{i}',cur.cursor+1).replace('{n}',cur.total))+'</p><h3>'+esc(local(cur.step.prompt))+'</h3>'+sceneHtml(cur.step.scene);
      html+='<div class="course-options">'+cur.step.options.map(function(o){return '<button class="course-option" data-bridge-step="'+esc(o.id)+'"><span class="course-opt-label">'+esc(local(o.label))+'</span></button>';}).join('')+'</div>';
      return html;
    }
    var rows='';
    if(cur.score)rows+='<li><span>'+text('winPoints')+'</span><strong>'+cur.score.total+'</strong><small>'+cur.score.paymentEach+' × '+cur.score.payerCount+'</small></li>';
    if(cur.kongPayment)rows+='<li><span>'+text('kongPoints')+'</span><strong>'+cur.kongPayment.total+'</strong><small>'+cur.kongPayment.paymentEach+' × '+cur.kongPayment.payerCount+'</small></li>';
    html+='<div class="course-round-result"><h3>'+text('roundResult')+' · '+esc(local(cur.title))+'</h3><p>'+esc(local(cur.description))+'</p>'+(rows?'<ul>'+rows+'</ul>':'')+'</div>';
    return html;
  }
  function dispatch(el){var d=el.dataset||el;
    if(d.bridgeMap!==undefined){view='map';reviewing=false;resetAnswer();return 'view';}
    if(d.bridgeReview!==undefined){reviewIds=load().review.filter(function(id){var q=byQuestion[id];return q&&entries().some(function(l){return l.questions.indexOf(q)>=0;});});reviewAt=0;reviewing=reviewIds.length>0;return reviewing&&selectReview()?'view':'local';}
    if(d.bridgeOpen!==undefined)return selectLesson(d.bridgeOpen)?'view':'local';
    if(d.bridgeStartSichuan!==undefined)return selectLesson('sc-1-1')?'view':'local';
    if(d.bridgeToSichuan!==undefined){enter('sichuan',exchange);return 'view';}
    if(d.bridgeToHk!==undefined)return 'to-hk';
    if(view!=='lesson'||!byId[lessonId])return 'local';
    var q=byId[lessonId].questions[index];if(!q)return 'local';
    if(d.bridgeOption!==undefined){if(q.type==='score'||q.type==='kongScore'){if(Array.isArray(q.values)&&q.values.map(String).indexOf(d.bridgeOption)>=0){choice=d.bridgeOption;answered=null;}}else{choice=d.bridgeOption;answered=null;}return 'local';}
    if(d.bridgeStep!==undefined){
      if(!RE||typeof d.bridgeStep!=='string')return 'local';
      if(!roundState)roundState=RE.start(q.scenarioId);
      var cur=roundState&&RE.current(roundState);
      if(!cur||cur.done)return 'local';
      var known=cur.step.options.some(function(o){return o.id===d.bridgeStep;});
      if(!known)return 'local';
      var out=RE.advance(roundState,d.bridgeStep);
      if(!out.state)return 'local';
      roundState=out.state;
      roundStep={ok:out.correct,explanation:cur.step.explanation};
      if(out.correct)answered=null;else markReview(q);
      return 'local';
    }
    if(d.bridgeDiscard!==undefined){var ni=Number(d.bridgeDiscard);if(Number.isInteger(ni)&&ni>=0&&ni<q.hand.length){choice=String(ni);answered=null;}return 'local';}
    if(d.bridgePick!==undefined||d.bridgeWait!==undefined||d.bridgeActive!==undefined){var raw=d.bridgePick!==undefined?d.bridgePick:d.bridgeWait!==undefined?d.bridgeWait:d.bridgeActive;var key=q.type==='pick3'?Number(raw):String(raw);var allowed=q.type==='pick3'?Number.isInteger(key)&&key>=0&&key<q.hand.length:q.type==='waits'?q.candidates.indexOf(key)>=0:q.type==='battle'?q.active.indexOf(key)>=0:false;if(allowed){var pos=picks.indexOf(key);if(pos>=0)picks.splice(pos,1);else if(q.type!=='pick3'||picks.length<3)picks.push(key);answered=null;}return 'local';}
    if(d.bridgeSubmit!==undefined){if(answered&&answered.ok)return 'local';var ok=result(q),p=load();answered={ok:ok};if(ok){if(p.solved.indexOf(q.id)<0)p.solved.push(q.id);p.review=p.review.filter(function(id){return id!==q.id;});}else{p.solved=p.solved.filter(function(id){return id!==q.id;});if(p.review.indexOf(q.id)<0)p.review.push(q.id);}save(p);return 'local';}
    if(d.bridgeNext!==undefined&&answered&&answered.ok){if(reviewing){reviewAt++;if(reviewAt<reviewIds.length)selectReview();else{view='map';reviewing=false;}}else if(index+1<byId[lessonId].questions.length){index++;resetAnswer();}else{view='done';}return 'view';}
    return 'local';
  }
  function lessonButton(l,p){var completed=done(l,p),started=l.questions.some(function(q){return p.solved.indexOf(q.id)>=0;}),familiar=learnedInHongKong(l.id);return '<button class="course-lesson" data-bridge-open="'+esc(l.id)+'"><span>'+esc(local(l.title))+'</span><span class="course-lesson-state'+(completed?' done':'')+'">'+esc(familiar?text('familiar'):completed?text('done'):started?text('progress'):text('todo'))+'</span></button>';}
  function mapHtml(){var p=load(),lessons=entries(),total=lessons.reduce(function(n,l){return n+l.questions.length;},0),mastered=lessons.reduce(function(n,l){return n+(learnedInHongKong(l.id)?l.questions.length:l.questions.filter(function(q){return p.solved.indexOf(q.id)>=0;}).length);},0);
    var html='<button class="back" data-bridge-back>'+text('back')+'</button><div class="eyebrow" style="margin-top:28px">MAHJONG STEPS</div><h1>'+text(track==='foundation'?'foundation':'sichuan')+'</h1><p class="sub">'+text(track==='foundation'?'foundationSub':'sichuanSub')+'</p>';
    html+='<div class="course-stats"><span class="course-stat">'+esc(text('stat').replace('{n}',mastered).replace('{total}',total))+'</span><span class="course-stat">'+esc(text('review').replace('{n}',p.review.length))+'</span></div>';
    if(!storageOk)html+='<p class="course-warn">'+text('storage')+'</p>';
    html+='<div class="course-entry">'+(track==='sichuan'?'<button class="btn" data-bridge-start-sichuan>'+text('start')+'</button>':'')+(p.review.length?'<button class="btn alt" data-bridge-review>'+esc(text('review').replace('{n}',p.review.length))+'</button>':'')+'</div>';
    html+='<section class="course-chapter"><h2>'+text('shared')+'</h2><p>'+text('foundationSub')+'</p><div class="course-lessons">'+D.foundation.map(function(l){return lessonButton(l,p);}).join('')+'</div></section>';
    if(track==='foundation')html+='<div class="course-entry"><button class="btn" data-bridge-to-sichuan>'+text('toSichuan')+'</button><button class="btn alt" data-bridge-to-hk>'+text('toHK')+'</button></div>';
    else{html+='<section class="course-chapter"><h2>'+text('diff')+'</h2></section>';D.sichuan.forEach(function(c,ci){html+='<section class="course-chapter"><h2>'+esc(local(c.title))+'</h2><div class="course-lessons">'+c.lessons.map(function(l){return lessonButton(l,p);}).join('')+'</div></section>';if(ci===0&&exchange)html+='<section class="course-chapter"><h2>'+text('optional')+'</h2><p>'+text('exchangeOn')+'</p><div class="course-lessons">'+lessonButton(D.optionalExchange,p)+'</div></section>';});html+='<p class="course-note">'+text(exchange?'exchangeOn':'exchangeOff')+'</p>';}
    html+='<section class="course-chapter bridge-comparison"><h2>'+text('compare')+'</h2><div class="bridge-comparison-grid">'+comparison.map(function(row){var x=row[lang];return '<article><strong>'+esc(x[0])+'</strong><p>'+esc(x[1])+'</p><p>'+esc(x[2])+'</p></article>';}).join('')+'</div></section>';
    html+='<p class="course-note">'+text('scope')+'</p><p class="course-source"><a href="'+esc(D.source)+'" target="_blank" rel="noopener">'+text('source')+'</a></p>';return html;
  }
  function questionHtml(){var l=byId[lessonId],q=l.questions[index],html='<button class="back" data-bridge-map>'+text('backMap')+'</button><div class="eyebrow" style="margin-top:28px">'+(lessonId.indexOf('base-')===0?text('foundation'):text('sichuan'))+'</div><h1>'+esc(local(l.title))+'</h1><p class="sub">'+esc(text('steps').replace('{i}',index+1).replace('{n}',l.questions.length))+'</p><div class="bar"><i style="width:'+(100*(index+1)/l.questions.length)+'%"></i></div><div class="panel"><p class="sub">'+esc(local(l.intro))+'</p><h2>'+esc(local(q.prompt))+'</h2>';
    if(q.tiles)html+='<div class="course-tiles">'+q.tiles.map(tile).join('')+'</div>';
    if(q.hand)html+='<div class="course-hand bridge-hand" tabindex="0" role="group" aria-label="'+esc(text('pick3'))+'">'+q.hand.map(function(id,i){if(q.type==='pick3'||q.type==='discard')return '<button class="bridge-tile-choice'+(q.type==='pick3'&&picks.indexOf(i)>=0||q.type==='discard'&&choice===String(i)?' selected':'')+'" data-'+(q.type==='pick3'?'bridge-pick':'bridge-discard')+'="'+i+'" aria-label="'+esc(tileName(id))+'" aria-pressed="'+(q.type==='pick3'?picks.indexOf(i)>=0:choice===String(i))+'"'+(answered&&answered.ok?' disabled':'')+'>'+tile(id)+'</button>';return tile(id);}).join('')+'</div>';
    if(q.hand&&(q.type==='pick3'||q.type==='discard'))html+='<p class="course-hint">'+text('swipe')+'</p>';
    if(q.type==='pick3')html+='<p class="course-note">'+text('pick3')+' · '+picks.length+' / 3</p>';
    if(q.type==='choice')html+='<div class="course-options">'+q.options.map(function(o){return '<button class="course-option'+(choice===o.id?' selected':'')+'" data-bridge-option="'+esc(o.id)+'" aria-pressed="'+(choice===o.id)+'"'+(answered&&answered.ok?' disabled':'')+'><span class="course-opt-label">'+esc(local(o.label))+'</span></button>';}).join('')+'</div>';
    if(q.type==='waits')html+='<p class="course-note">'+text('waits')+'</p><div class="course-options">'+q.candidates.map(function(id){return '<button class="course-option'+(picks.indexOf(id)>=0?' selected':'')+'" data-bridge-wait="'+esc(id)+'" aria-label="'+esc(tileName(id))+'" aria-pressed="'+(picks.indexOf(id)>=0)+'"'+(answered&&answered.ok?' disabled':'')+'>'+tile(id)+'</button>';}).join('')+'</div>';
    if(q.type==='battle')html+='<p class="course-note">'+text('active')+'</p><div class="course-options">'+q.active.map(function(id){return '<button class="course-option'+(picks.indexOf(id)>=0?' selected':'')+'" data-bridge-active="'+id+'" aria-pressed="'+(picks.indexOf(id)>=0)+'"'+(answered&&answered.ok?' disabled':'')+'><span class="course-opt-label">'+text(id)+'</span></button>';}).join('')+'</div>';
    if(q.type==='score'||q.type==='kongScore')html+='<div class="course-options">'+(Array.isArray(q.values)?q.values:[]).map(function(v){return '<button class="course-option'+(choice===String(v)?' selected':'')+'" data-bridge-option="'+esc(String(v))+'" aria-pressed="'+(choice===String(v))+'"'+(answered&&answered.ok?' disabled':'')+'><span class="course-opt-label bridge-value">'+esc(String(v))+'</span></button>';}).join('')+'</div>';
    if(q.type==='round')html+=roundHtml(q);
    if(answered)html+='<div class="course-feedback'+(answered.ok?'':' bad')+'" role="status"><strong>'+text(answered.ok?'correct':'wrong')+'</strong><p>'+esc(local(q.explanation))+'</p></div>';
    var nextLabel=reviewing?(reviewAt+1===reviewIds.length?(lang==='en'?'Finish review →':lang==='tw'?'完成複習 →':'完成复习 →'):(lang==='en'?'Next review question →':lang==='tw'?'下一道錯題 →':'下一道错题 →')):text(index+1===l.questions.length?'finish':'next');
    var canSubmit=q.type==='choice'||q.type==='discard'||q.type==='score'||q.type==='kongScore'?choice!==null:q.type==='round'?roundFinished()&&!(answered&&answered.ok):picks.length>0;
    html+='<div class="course-actions">'+(answered&&answered.ok?'<button class="btn" data-bridge-next>'+nextLabel+'</button>':'<button class="btn" data-bridge-submit'+(canSubmit?'':' disabled')+'>'+text('submit')+'</button>')+'</div></div>';return html;
  }
  function doneHtml(){var current=byId[lessonId],list=entries(),next=list[list.indexOf(current)+1];return '<button class="back" data-bridge-map>'+text('backMap')+'</button><div class="eyebrow" style="margin-top:28px">MAHJONG STEPS</div><h1>'+text('lessonDone')+'</h1><div class="panel"><p class="sub">'+text('doneDesc')+'</p><div class="course-actions">'+(next?'<button class="btn" data-bridge-open="'+esc(next.id)+'">'+esc(text('nextLesson').replace('{title}',local(next.title)))+'</button>':'')+'<button class="btn alt" data-bridge-map>'+text('backMap')+'</button></div></div>';}
  function html(){return '<div class="workspace course-root bridge-root">'+(view==='lesson'?questionHtml():view==='done'?doneHtml():mapHtml())+'</div>';}
  g.MahjongBridgeUI={enter:enter,setLang:setLang,setExchange:setExchange,dispatch:dispatch,html:html,sharedDoneCount:function(){var p=load();return D.foundation.filter(function(l){return done(l,p);}).length;}};
})(globalThis);
