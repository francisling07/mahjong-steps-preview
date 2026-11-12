/* Trilingual teaching tables and faan reference, scoped to the course. */
(function (g) {
  'use strict';
  var R=g.MahjongRoundEngine, Rules=g.HKLearningRules;
  var words={
    rulebook:['规则全览','規則全覽','Rules guide'],
    rulebookScope:['按协会公开总例整理的学习摘要，覆盖开局、摸打、叫牌、胡牌、积分、花牌和赛事判罚。具体裁判处理以协会原文为准，民间桌规可能不同。','按協會公開總例整理的學習摘要，涵蓋開局、摸打、叫牌、胡牌、積分、花牌和賽事判罰。具體裁判處理以協會原文為準，民間桌規可能不同。','Original learning summaries of the association reference: setup, turns, calls, wins, payments, flowers and competition penalties. Consult the source for exact adjudication; home tables may differ.'],
    reference:['番种与积分速查','番種與積分速查','Faan & points reference'],
    profile:['香港麻雀协会参考 · 无花主线 · 三番起胡 · 十番封顶','香港麻雀協會參考 · 無花主線 · 三番起胡 · 十番封頂','HKMA reference · no flowers · 3-faan minimum · 10-faan cap'],
    back:['返回目录','返回目錄','Back to lessons'],
    fan:['番','番','faan'], points:['积分','積分','points'],
    scope:['原创教学摘要，按协会公开正文核对（2026-11-06）。下方花牌条目只适用于有花牌桌；实际对局以所选规则及完整条件为准。','原創教學摘要，按協會公開正文核對（2026-11-06）。下方花牌條目只適用於有花牌桌；實際對局以所選規則及完整條件為準。','Original learning summaries checked against the association’s published rules on 2026-11-06. Flower entries apply only when flowers are enabled. Consult the full conditions for actual play.'],
    source:['协会规则目录 ↗','協會規則目錄 ↗','Association rules index ↗'],
    full:['查看完整规则 ↗','查看完整規則 ↗','Read the full rules ↗'],
    calculator:['普通积分计算器','普通積分計算器','Ordinary points calculator'],
    calcNote:['选择已确认的番数和胡牌方式。这里只换算普通积分，不自动识别手牌番种，也不处理包牌、抢杠及花胡等特殊支付。','選擇已確認的番數和胡牌方式。這裡只換算普通積分，不自動識別手牌番種，也不處理包牌、搶槓及花胡等特殊支付。','Choose confirmed faan and the winning method. This converts ordinary points only; it does not identify hand patterns or calculate liability, robbing a kong or flower wins.'],
    discard:['弃牌胡','棄牌胡','Discard win'], selfDraw:['自摸','自摸','Self-draw'],
    each:['每家支付','每家支付','Each pays'], payers:['支付人数','支付人數','Payers'], total:['胡牌者共收','胡牌者共收','Winner receives'],
    common:['常见番种','常見番種','Regular patterns'], limits:['十番例牌','十番例牌','Ten-faan limit hands'], flowers:['有花牌桌专用','有花牌桌專用','With flowers enabled'],
    route:['编排教学局：按本局目标练习，其他玩家的摸打会合并展示。','編排教學局：按本局目標練習，其他玩家的摸打會合併展示。','An arranged teaching round. Follow its learning goal; other players’ turns are summarised.'],
    step:['操作','操作','Step'], wall:['牌墙剩余','牌牆剩餘','Wall remaining'], river:['牌河','牌河','Discards'], empty:['暂无','暫無','None'],
    east:['东家 · 上家','東家 · 上家','East · previous'], north:['北家 · 对家','北家 · 對家','North · opposite'], west:['西家 · 下家','西家 · 下家','West · next'],
    south:['你 · 南家','你 · 南家','You · South'], round:['东圈 · 无花','東圈 · 無花','East round · no flowers'],
    last:['东家刚打出','東家剛打出','East just discarded'],
    hand:['你的暗手','你的暗手','Your concealed tiles'], melds:['已固定的明牌组合','已固定的明牌組合','Fixed exposed sets'],
    deal:['配牌，开始本局','配牌，開始本局','Deal the tiles'], chow:['吃','吃','Chow'], pung:['碰','碰','Pung'], kong:['杠','槓','Kong'],
    replace:['从牌尾补一张','從牌尾補一張','Draw a replacement'], wait:['观察他家出牌','觀察他家出牌','Watch the other players'], draw:['轮到你，从牌头摸一张','輪到你，從牌頭摸一張','Your turn: draw from the wall'],
    play:['打出选中的牌','打出選中的牌','Discard selected tile'], win:['宣布胡牌','宣布胡牌','Declare a win'], pass:['不叫牌','不叫牌','Pass'],
    hint:['查看提示','查看提示','Show hint'], hideHint:['收起提示','收起提示','Hide hint'], restart:['重开本局','重開本局','Restart round'],
    different:['这次选择没有进入本局的教学路线。其他打法可能合法；请按当前目标继续，或展开提示。','這次選擇沒有進入本局的教學路線。其他打法可能合法；請按目前目標繼續，或展開提示。','That choice does not follow this teaching route. Other plays may be legal; follow the current goal or open the hint.'],
    complete:['本局完成','本局完成','Round complete'], breakdown:['番种明细','番種明細','Faan breakdown'],
    physical:['实体牌','實體牌','Physical tiles'], swipe:['手牌可左右滑动；出牌时先选一张，再确认。','手牌可左右滑動；出牌時先選一張，再確認。','Scroll the rack to see every tile. Select a tile, then confirm the discard.'],
    waitNote:['可多选：选出所有能补成牌型的候选牌。这里只判断结构，不保证达到番数或牌墙仍有这些牌。','可多選：選出所有能補成牌型的候選牌。這裡只判斷結構，不保證達到番數或牌牆仍有這些牌。','Select every candidate that completes the shape. This checks structure only, not faan or availability in the wall.'],
    selected:['已选','已選','Selected'], claim:['上家弃牌','上家棄牌','Previous player’s discard']
  };
  function t(key,lang){return words[key][lang==='en'?2:lang==='tw'?1:0];}
  function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');}
  function local(v,lang){return v[lang]||v.zh;}
  function btn(key,attr,value,lang,selected){return '<button type="button" class="btn alt'+(selected?' selected':'')+'" '+attr+'="'+esc(value)+'"'+(selected!==undefined?' aria-pressed="'+!!selected+'"':'')+'>'+esc(t(key,lang))+'</button>';}
  function settlementHtml(r,lang){
    return '<div class="course-payment" role="status"><span>'+t('payers',lang)+'<strong>'+r.payerCount+'</strong></span><span>'+t('each',lang)+'<strong>'+r.paymentEach+'</strong></span><span>'+t('total',lang)+'<strong>'+r.total+' <small>'+t('points',lang)+'</small></strong></span></div>';
  }
  function referenceHtml(lang,fan,mode){
    var profile=g.MahjongCourseData.profile, payment=Rules.settlement(fan,mode);
    var html='<button class="back" data-course-map>'+t('back',lang)+'</button><div class="eyebrow" style="margin-top:28px">'+t('profile',lang)+'</div><h1>'+t('reference',lang)+'</h1><p class="sub">'+t('scope',lang)+'</p><p class="course-source"><a href="'+esc(profile.source)+'" target="_blank" rel="noopener">'+t('source',lang)+'</a> · <a href="'+esc(profile.document)+'" target="_blank" rel="noopener">'+t('full',lang)+'</a></p>';
    html+='<section class="panel course-calculator"><h2>'+t('calculator',lang)+'</h2><p>'+t('calcNote',lang)+'</p><div class="course-fans" role="group" aria-label="'+t('fan',lang)+'">';
    for(var f=3;f<=10;f++)html+='<button class="btn alt'+(fan===f?' selected':'')+'" data-course-fan="'+f+'" aria-pressed="'+(fan===f)+'">'+f+' '+t('fan',lang)+'</button>';
    html+='</div><div class="course-actions">'+btn('discard','data-course-method','discard',lang,mode==='discard')+btn('selfDraw','data-course-method','selfDraw',lang,mode==='selfDraw')+'</div>'+settlementHtml(payment,lang)+'</section>';
    [['common',0,14],['limits',14,25],['flowers',25,30]].forEach(function(group){
      html+='<section class="course-reference-section"><h2>'+t(group[0],lang)+'</h2><div class="course-reference-grid">';
      g.MahjongHKReference.slice(group[1],group[2]).forEach(function(item){
        html+='<article class="course-reference-card" data-reference-id="'+esc(item.id)+'"><div><h3>'+esc(local(item.title,lang))+'</h3><span class="course-faan">'+esc(item.fan)+' '+t('fan',lang)+'</span></div><p>'+esc(local(item.description,lang))+'</p></article>';
      }); html+='</div></section>';
    });return html;
  }
  function rulebookHtml(lang){
    var profile=g.MahjongCourseData.profile;
    var html='<button class="back" data-course-map>'+t('back',lang)+'</button><div class="eyebrow" style="margin-top:28px">'+t('profile',lang)+'</div><h1>'+t('rulebook',lang)+'</h1><p class="sub">'+t('rulebookScope',lang)+'</p><p class="course-source"><a href="'+esc(profile.source)+'" target="_blank" rel="noopener">'+t('source',lang)+'</a> · <a href="'+esc(profile.document)+'" target="_blank" rel="noopener">'+t('full',lang)+'</a></p>';
    g.MahjongHKRulebook.forEach(function(group){
      html+='<section class="course-reference-section"><h2>'+esc(local(group.title,lang))+'</h2><div class="course-reference-grid">';
      group.entries.forEach(function(entry){html+='<article class="course-reference-card" data-rule-id="'+esc(entry.id)+'"><h3>'+esc(local(entry.title,lang))+'</h3><p>'+esc(local(entry.description,lang))+'</p></article>';});
      html+='</div></section>';
    });return html;
  }
  function initRound(q,state){
    if(!state.roundState||state.roundState.scenarioId!==q.scenarioId){
      state.roundState=R.start(q.scenarioId);state.roundTile=null;state.roundFeedback=null;state.roundLastExplanation=null;
      state.roundHint=g.MahjongRoundData.find(function(s){return s.id===q.scenarioId;}).guided;
    }
  }
  function roundHtml(q,state,ctx){
    initRound(q,state);
    var lang=ctx.lang, tile=ctx.tileHtml, name=ctx.tileName, current=R.current(state.roundState), scene=current.scene;
    var scenario=g.MahjongRoundData.find(function(s){return s.id===q.scenarioId;});
    var html='<div class="course-round" data-round-scenario="'+esc(q.scenarioId)+'" data-round-cursor="'+state.roundState.cursor+'"><p class="course-note">'+t('route',lang)+'</p><div class="course-round-heading"><strong>'+esc(local(scenario.title,lang))+'</strong><span>'+t('step',lang)+' '+Math.min(state.roundState.cursor+1,scenario.steps.length)+' / '+scenario.steps.length+'</span></div>';
    html+='<div class="course-table"><div class="course-opponents">';
    ['east','north','west'].forEach(function(seat){
      var river=scene.rivers[seat].slice();
      if(scene.pending&&scene.pending.seat===seat&&river[river.length-1]===scene.pending.tile)river.pop();
      html+='<section class="course-seat"><strong>'+t(seat,lang)+'</strong><div class="course-tile-backs" aria-hidden="true">'+Array(8).fill('<i></i>').join('')+'</div><span>'+t('river',lang)+'</span><div class="course-river">'+(river.length?river.map(tile).join(''):'<small>'+t('empty',lang)+'</small>')+'</div></section>';
    });
    html+='</div><div class="course-table-center"><div><span>'+t('round',lang)+'</span><strong>'+t('wall',lang)+' · '+scene.wallRemaining+'</strong></div>';
    if(scene.pending)html+='<div class="course-pending"><span>'+t('last',lang)+'</span>'+tile(scene.pending.tile)+'</div>';
    html+='</div><section class="course-player"><div class="course-player-label"><strong>'+t('south',lang)+'</strong><span>'+t('hand',lang)+' · '+scene.hand.length+'</span></div>';
    if(scene.melds.length)html+='<div class="course-exposed"><span>'+t('melds',lang)+'</span>'+scene.melds.map(function(m){return '<div class="course-meld" aria-label="'+t(m.type,lang)+'">'+m.tiles.map(tile).join('')+'</div>';}).join('')+'</div>';
    html+='<div class="course-round-hand" tabindex="0" role="group" aria-label="'+t('hand',lang)+'">';
    scene.hand.forEach(function(id,i){
      if(scene.phase==='discard'&&!current.done)html+='<button type="button" class="course-round-tile'+(state.roundTile===i?' selected':'')+'" data-course-round-pick="'+i+'" aria-label="'+esc(name(id))+'" aria-pressed="'+(state.roundTile===i)+'">'+tile(id)+'</button>';
      else html+=tile(id);
    });
    html+='</div><p class="course-rack-note">'+t('swipe',lang)+'</p>';
    if(scene.rivers.south.length)html+='<div class="course-river"><span>'+t('river',lang)+'</span>'+scene.rivers.south.map(tile).join('')+'</div>';
    html+='</section></div>';
    if(state.roundLastExplanation)html+='<p class="course-round-explanation">'+esc(local(state.roundLastExplanation,lang))+'</p>';
    if(current.done){
      html+='<section class="course-round-result"><h3>✓ '+t('complete',lang)+' · '+current.result.fan+' '+t('fan',lang)+'</h3><p>'+t('physical',lang)+' · '+(scene.hand.length+scene.melds.reduce(function(n,m){return n+m.tiles.length;},0))+'</p><h4>'+t('breakdown',lang)+'</h4><ul>'+current.result.breakdown.map(function(b){return '<li>'+esc(local(b.title,lang))+' <strong>+'+b.fan+'</strong></li>';}).join('')+'</ul>'+settlementHtml(current.result.settlement,lang)+'</section>';
    }else{
      html+='<div class="course-round-prompt" role="status"><h3>'+esc(local(current.step.prompt,lang))+'</h3>';
      if(state.roundFeedback)html+='<p class="course-route-message">'+t('different',lang)+'</p>';
      if(state.roundHint)html+='<p class="course-round-hint">'+esc(local(current.step.hint,lang))+'</p>';
      html+='</div><div class="course-actions course-round-actions">';
      var action=function(type,label){return btn(label||type,'data-course-round-action',type,lang);};
      if(scene.phase==='claim'){
        var types=Rules.claimOptions(scene.hand,scene.pending.tile,'previous').map(function(c){return c.type;});
        types.filter(function(type,i){return types.indexOf(type)===i;}).forEach(function(type){html+=action(type);});
        html+=action('pass');
      }else if(scene.phase==='discard'){
        html+='<button type="button" class="btn" data-course-round-action="discard"'+(state.roundTile===null?' disabled':'')+'>'+t('play',lang)+'</button>';
      }else html+=action(scene.phase==='replacement'?'replace':scene.phase);
      html+='</div>';
    }
    html+='<div class="course-actions course-round-tools">'+(!current.done?btn(state.roundHint?'hideHint':'hint','data-course-round-hint','',lang):'')+btn('restart','data-course-round-restart','',lang)+'</div></div>';
    return html;
  }
  function roundDispatch(q,state,d){
    initRound(q,state);
    if(d.courseRoundRestart!==undefined){state.roundState=null;state.answered=null;initRound(q,state);return 'local';}
    if(d.courseRoundHint!==undefined){state.roundHint=!state.roundHint;return 'local';}
    var current=R.current(state.roundState);
    if(current.done)return 'local';
    if(d.courseRoundPick!==undefined){
      var i=Number(d.courseRoundPick);
      if(current.scene.phase==='discard'&&Number.isInteger(i)&&i>=0&&i<current.scene.hand.length)state.roundTile=state.roundTile===i?null:i;
      state.roundFeedback=null;return 'local';
    }
    if(d.courseRoundAction!==undefined){
      var type=d.courseRoundAction,action={type:type};
      if(type==='discard'){
        if(state.roundTile===null)return 'local';
        action.tile=current.scene.hand[state.roundTile];
      }else if(['chow','pung','kong'].indexOf(type)>=0&&current.scene.pending)action.tile=current.scene.pending.tile;
      var out=R.advance(state.roundState,action);
      if(out.correct){state.roundState=out.state;state.roundTile=null;state.roundFeedback=null;state.roundLastExplanation=current.step.explanation;return R.current(out.state).done?'complete':'local';}
      state.roundFeedback=true;
      if(out.reason==='different')return {kind:'wrong',action:action};
    }return 'local';
  }
  g.MahjongCourseExtras={text:t,referenceHtml:referenceHtml,rulebookHtml:rulebookHtml,roundHtml:roundHtml,roundDispatch:roundDispatch};
})(globalThis);

