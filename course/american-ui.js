/* American Mah Jongg learning path. Uses original examples, never a copied NMJL card. */
(function (g) {
  'use strict';
  var E = g.MahjongAmericanEngine, Art = g.MahjongTileArt;
  var messages = {
    zh: { back:'← 返回选择玩法', title:'美式麻将 · 九章课程', sub:'从识牌、读年度卡，到换牌、Joker、选打哪张牌和连续教学局。',
      scope:'以 NMJL 美式麻将为学习基准。所有牌型卡行和标值均为原创教学样例，不是 2026 年度牌型；正式对局请使用当年官方卡并确认桌上支付约定。',
      continue:'继续学习：{title} →', start:'从第一课开始 →', fast:'已会其他玩法？从年度卡读法开始 →', review:'复习错题（{n}）',
      mastered:'已掌握 {n} / {total} 题', completed:'完成 {n} / {total} 课', done:'✓ 已完成', progress:'学习中', todo:'开始学习',
      step:'第 {n} / {total} 题', choose:'请选择答案', pick:'请选择 {n} 张牌', order:'依次点击三个步骤', resetOrder:'重新排序',
      submit:'提交答案', next:'下一题 →', finish:'完成本课 →', correct:'✓ 答对了', wrong:'✗ 再试一次',
      lessonDone:'本课完成', nextLesson:'下一课：{title} →', map:'返回课程目录', reviewDone:'本轮复习结束',
      end:'已到本课程末尾，可以从目录选择旧课或复习错题。', allDone:'九章三十六课已全部掌握！',
      source:'NMJL 官方年度牌型卡 ↗', rules:'美式麻将规则解释 ↗', reset:'清除美式课程进度', confirm:'确定只清除美式麻将课程进度吗？',
      storage:'浏览器存储不可用，刷新后可能丢失本次进度。', noReview:'目前没有错题。', selected:'已选步骤：{n}' },
    tw: { back:'← 返回選擇玩法', title:'美式麻雀 · 九章課程', sub:'從識牌、讀年度卡，到換牌、Joker、選打哪張牌和連續教學局。',
      scope:'以 NMJL 美式麻雀為學習基準。所有牌型卡行和標值均為原創教學樣例，不是 2026 年度牌型；正式對局請使用當年官方卡並確認桌上支付約定。',
      continue:'繼續學習：{title} →', start:'從第一課開始 →', fast:'已會其他玩法？從年度卡讀法開始 →', review:'複習錯題（{n}）',
      mastered:'已掌握 {n} / {total} 題', completed:'完成 {n} / {total} 課', done:'✓ 已完成', progress:'學習中', todo:'開始學習',
      step:'第 {n} / {total} 題', choose:'請選擇答案', pick:'請選擇 {n} 張牌', order:'依次點擊三個步驟', resetOrder:'重新排序',
      submit:'提交答案', next:'下一題 →', finish:'完成本課 →', correct:'✓ 答對了', wrong:'✗ 再試一次',
      lessonDone:'本課完成', nextLesson:'下一課：{title} →', map:'返回課程目錄', reviewDone:'本輪複習結束',
      end:'已到本課程末尾，可以從目錄選擇舊課或複習錯題。', allDone:'九章三十六課已全部掌握！',
      source:'NMJL 官方年度牌型卡 ↗', rules:'美式麻雀規則解釋 ↗', reset:'清除美式課程進度', confirm:'確定只清除美式麻雀課程進度嗎？',
      storage:'瀏覽器儲存不可用，重新整理後可能遺失本次進度。', noReview:'目前沒有錯題。', selected:'已選步驟：{n}' },
    en: { back:'← Back to styles', title:'American Mah Jongg · Nine Chapters', sub:'Learn tiles and the annual card, then practise the Charleston, jokers, discards and guided hands.',
      scope:'Based on NMJL-style American Mah Jongg. Every sample hand and value here is original practice material, not a 2026 card line. Use the current official card and confirm payment rules at your table.',
      continue:'Continue: {title} →', start:'Start with lesson one →', fast:'Know another style? Start with the card →', review:'Review mistakes ({n})',
      mastered:'Mastered {n} of {total} questions', completed:'Completed {n} of {total} lessons', done:'✓ Complete', progress:'In progress', todo:'Start',
      step:'Question {n} of {total}', choose:'Choose an answer', pick:'Select {n} tiles', order:'Tap the three steps in order', resetOrder:'Reset order',
      submit:'Submit answer', next:'Next question →', finish:'Finish lesson →', correct:'✓ Correct', wrong:'✗ Try again',
      lessonDone:'Lesson complete', nextLesson:'Next lesson: {title} →', map:'Back to course map', reviewDone:'Review complete',
      end:'You reached the end of the path. Pick another lesson or review mistakes from the map.', allDone:'All 36 lessons mastered!',
      source:'Official NMJL annual card ↗', rules:'American Mah Jongg rule explanations ↗', reset:'Clear American course progress', confirm:'Clear only the American course progress?',
      storage:'Browser storage is unavailable. Progress may be lost on refresh.', noReview:'No mistakes to review right now.', selected:'Selected steps: {n}' }
  };
  var lang = 'zh', state = fresh(), memory = null, storageOk = null;
  function fresh() { return { view:'map', lessonId:null, index:0, choice:null, picks:[], order:[], answered:null, reviewing:false, reviewIds:[], reviewIndex:0 }; }
  function tr(key, vars) {
    var out = messages[lang][key];
    if (vars) Object.keys(vars).forEach(function (k) { out = out.split('{' + k + '}').join(String(vars[k])); });
    return out;
  }
  function local(value) { return value && (value[lang] || value.zh || value.en) || ''; }
  function esc(value) { return String(value).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function storageWorks() {
    if (storageOk !== null) return storageOk;
    try { g.localStorage.setItem(E.KEY+'.probe','1'); g.localStorage.removeItem(E.KEY+'.probe'); storageOk=true; }
    catch (_) { storageOk=false; }
    return storageOk;
  }
  function load() {
    if (memory) return memory;
    var raw=null;
    if (storageWorks()) try { raw=JSON.parse(g.localStorage.getItem(E.KEY)); } catch (_) { raw=null; }
    memory=E.normalizeProgress(raw);
    return memory;
  }
  function save(p) {
    memory=E.normalizeProgress(p);
    if (storageWorks()) try { g.localStorage.setItem(E.KEY,JSON.stringify(memory)); } catch (_) { storageOk=false; }
  }
  function tileName(id) {
    if (id === 'j1') return 'Joker';
    if (id[0] === 'f') return lang==='en'?'Flower':lang==='tw'?'花牌':'花牌';
    if (id[0] === 'z') {
      var names={zh:['东风','南风','西风','北风','红中','发财','白板'],tw:['東風','南風','西風','北風','紅中','發財','白板'],en:['East','South','West','North','Red Dragon','Green Dragon','White Dragon']};
      return names[lang][Number(id[1])-1];
    }
    var suits={zh:{m:'万',p:'筒',s:'条'},tw:{m:'萬',p:'筒',s:'條'},en:{m:'Craks',p:'Dots',s:'Bams'}};
    return id[1]+' '+suits[lang][id[0]];
  }
  function tile(id) { return '<span class="tile" role="img" aria-label="'+esc(tileName(id))+'">'+Art.svg(id)+'</span>'; }
  function warning() { return storageWorks()?'':'<p class="course-warn" role="status">'+esc(tr('storage'))+'</p>'; }
  function target() {
    var p=load(), current=E.lessonById[p.lastLessonId];
    if (current && !E.complete(p,current.id)) return current;
    return current ? E.following(current.id) : E.firstIncomplete(p);
  }
  function lessonForQuestion(id) { return E.lessons.find(function (l) { return l.questions.some(function (q) { return q.id===id; }); }); }
  function active() {
    if (state.reviewing) {
      var q=E.questionById[state.reviewIds[state.reviewIndex]];
      return q ? { q:q, lesson:lessonForQuestion(q.id) } : null;
    }
    var l=E.lessonById[state.lessonId];
    return l && l.questions[state.index] ? { q:l.questions[state.index], lesson:l } : null;
  }
  function resetAnswer() { state.choice=null; state.picks=[]; state.order=[]; state.answered=null; }
  function open(id) {
    var l=E.lessonById[id]; if (!l) return;
    state=fresh(); state.view='question'; state.lessonId=id;
    var p=load(); p.lastLessonId=id; save(p);
    var first=l.questions.findIndex(function (q) { return p.solved.indexOf(q.id)<0; });
    state.index=first<0?0:first;
  }
  function review() {
    var ids=load().review.filter(function (id) { return !!E.questionById[id]; });
    state=fresh(); state.reviewing=true; state.reviewIds=ids; state.view=ids.length?'question':'reviewDone';
  }
  function answerValue(q) { return q.type==='choice'?state.choice:q.type==='sequence'?state.order.slice():state.picks.slice(); }
  function canSubmit(q) { return q.type==='choice'?state.choice!==null:q.type==='sequence'?state.order.length===q.answerOrder.length:state.picks.length===q.selectionCount; }
  function submit() {
    var entry=active(); if (!entry || state.answered && state.answered.correct || !canSubmit(entry.q)) return;
    var result=E.recordAnswer(load(),entry.q.id,answerValue(entry.q),!state.reviewing);
    if (result.result.reason==='wrong'||result.result.reason==='correct') {
      save(result.progress); state.answered=result.result;
    }
  }
  function next() {
    if (!state.answered || !state.answered.correct) return;
    if (state.reviewing) {
      state.reviewIndex++;
      if (state.reviewIndex>=state.reviewIds.length) { state.view='reviewDone'; state.reviewing=false; }
      resetAnswer(); return;
    }
    var l=E.lessonById[state.lessonId];
    if (state.index+1>=l.questions.length) state.view='done';
    else { state.index++; resetAnswer(); }
  }
  function dispatch(el) {
    var d=el && el.dataset || {};
    if (d.americanBack!==undefined) return 'back';
    if (d.americanMap!==undefined) { state=fresh(); return 'view'; }
    if (d.americanOpen!==undefined) { open(d.americanOpen); return 'view'; }
    if (d.americanContinue!==undefined) { var l=target(); if (l) open(l.id); return 'view'; }
    if (d.americanReview!==undefined) { review(); return 'view'; }
    if (d.americanReset!==undefined) {
      if (!g.confirm(tr('confirm'))) return 'none';
      memory=E.emptyProgress();
      if (storageWorks()) try { g.localStorage.removeItem(E.KEY); } catch (_) { storageOk=false; }
      state=fresh(); return 'view';
    }
    var entry=active(), q=entry && entry.q;
    if (!q || state.answered && state.answered.correct) {
      if (d.americanNext!==undefined) { next(); return 'view'; }
      return 'none';
    }
    if (d.americanChoice!==undefined && q.type==='choice' && q.options.some(function (o) { return o.id===d.americanChoice; })) { state.choice=d.americanChoice; state.answered=null; return 'local'; }
    if (d.americanPick!==undefined && q.type==='tile-pick') {
      var i=Number(d.americanPick), pos=state.picks.indexOf(i);
      if (Number.isInteger(i)&&i>=0&&i<q.tiles.length) {
        if (pos>=0) state.picks.splice(pos,1);
        else if (state.picks.length<q.selectionCount) state.picks.push(i);
        state.answered=null;
      }
      return 'local';
    }
    if (d.americanOrder!==undefined && q.type==='sequence' && q.options.some(function (o) { return o.id===d.americanOrder; }) && state.order.indexOf(d.americanOrder)<0) {
      state.order.push(d.americanOrder); state.answered=null; return 'local';
    }
    if (d.americanOrderReset!==undefined && q.type==='sequence') { state.order=[]; state.answered=null; return 'local'; }
    if (d.americanSubmit!==undefined) { submit(); return 'local'; }
    if (d.americanNext!==undefined) { next(); return 'view'; }
    return false;
  }
  function source() {
    return '<p class="course-note">'+esc(tr('scope'))+'</p><p class="course-source"><a href="https://www.nationalmahjonggleague.org/store.aspx" target="_blank" rel="noopener">'+esc(tr('source'))+'</a> · <a href="https://guide.americanmahjonggassociation.com/how-to-play-american-mah-jongg/" target="_blank" rel="noopener">'+esc(tr('rules'))+'</a></p>';
  }
  function mapView() {
    var p=load(), t=target(), completed=E.lessons.filter(function (l) { return E.complete(p,l.id); }).length;
    var html='<button class="back" data-american-back>'+esc(tr('back'))+'</button><div class="eyebrow">AMERICAN MAH JONGG · LEARNING PATH</div><h1>'+esc(tr('title'))+'</h1><p class="sub">'+esc(tr('sub'))+'</p>'+warning()+
      '<div class="course-stats"><span class="course-stat">'+esc(tr('completed',{n:completed,total:E.lessons.length}))+'</span><span class="course-stat">'+esc(tr('mastered',{n:p.solved.length,total:Object.keys(E.questionById).length}))+'</span></div>'+
      '<div class="course-entry">'+(t?'<button class="btn" data-american-continue>'+esc(tr('continue',{title:local(t.title)}))+'</button>':'')+
      '<button class="btn alt" data-american-open="am-1-1">'+esc(tr('start'))+'</button><button class="btn alt" data-american-open="am-2-1">'+esc(tr('fast'))+'</button>'+
      '<button class="btn alt" data-american-review>'+esc(tr('review',{n:p.review.length}))+'</button><button class="btn alt" data-american-reset>'+esc(tr('reset'))+'</button></div>';
    E.chapters.forEach(function (c) {
      html+='<section class="course-chapter"><h2>'+esc(local(c.title))+'</h2><p>'+esc(local(c.desc))+'</p><div class="course-lessons">';
      c.lessons.forEach(function (l) {
        var done=E.complete(p,l.id),started=l.questions.some(function (q) { return p.solved.indexOf(q.id)>=0; });
        html+='<button class="course-lesson" data-american-open="'+esc(l.id)+'"><span>'+esc(local(l.title))+'</span><span class="course-lesson-state'+(done?' done':'')+'">'+esc(tr(done?'done':started?'progress':'todo'))+'</span></button>';
      }); html+='</div></section>';
    });
    return html+source();
  }
  function shownOptions(q) {
    var options=q.options.slice(), shift=q.id.charCodeAt(q.id.length-1)%options.length;
    return options.slice(shift).concat(options.slice(0,shift));
  }
  function questionView() {
    var entry=active(); if (!entry) return mapView();
    var q=entry.q,l=entry.lesson, pos=state.reviewing?state.reviewIndex:state.index, total=state.reviewing?state.reviewIds.length:l.questions.length;
    var html='<button class="back" data-american-map>'+esc(tr('map'))+'</button><div class="eyebrow">AMERICAN MAH JONGG · '+(state.reviewing?'REVIEW':'LESSON')+'</div><h1>'+esc(local(l.title))+'</h1><p class="sub">'+esc(tr('step',{n:pos+1,total:total}))+'</p><div class="bar"><i style="width:'+(100*(pos+1)/total)+'%"></i></div>'+
      '<div class="panel"><p class="sub">'+esc(local(l.intro))+'</p>'+(q.context?'<p class="course-context">'+esc(local(q.context))+'</p>':'')+'<h2>'+esc(local(q.prompt))+'</h2>';
    if (q.tiles && q.type!=='tile-pick') html+='<div class="'+(q.tiles.length>9?'course-hand american-hand':'course-tiles')+'">'+q.tiles.map(tile).join('')+'</div>';
    if (q.type==='choice') {
      html+='<p class="course-hint">'+esc(tr('choose'))+'</p><div class="course-options">'+shownOptions(q).map(function (o) {
        return '<button class="course-option'+(state.choice===o.id?' selected':'')+'" data-american-choice="'+esc(o.id)+'" aria-pressed="'+(state.choice===o.id)+'"'+(state.answered&&state.answered.correct?' disabled':'')+'>'+(o.tile?tile(o.tile):'')+'<span class="course-opt-label">'+esc(local(o.label))+'</span></button>';
      }).join('')+'</div>';
    } else if (q.type==='tile-pick') {
      html+='<p class="course-hint">'+esc(tr('pick',{n:q.selectionCount}))+' · '+state.picks.length+' / '+q.selectionCount+'</p><div class="course-hand american-hand" role="group" aria-label="'+esc(tr('pick',{n:q.selectionCount}))+'">'+q.tiles.map(function (id,i) {
        return '<button class="american-tile-choice'+(state.picks.indexOf(i)>=0?' selected':'')+'" data-american-pick="'+i+'" aria-label="'+esc(tileName(id))+'" aria-pressed="'+(state.picks.indexOf(i)>=0)+'"'+(state.answered&&state.answered.correct?' disabled':'')+'>'+tile(id)+'</button>';
      }).join('')+'</div>';
    } else if (q.type==='sequence') {
      html+='<p class="course-hint">'+esc(tr('order'))+'</p><div class="course-options">'+shownOptions(q).map(function (o) {
        return '<button class="course-option" data-american-order="'+esc(o.id)+'"'+(state.order.indexOf(o.id)>=0?' disabled':'')+'><span class="course-opt-label">'+esc(local(o.label))+'</span></button>';
      }).join('')+'</div><p class="american-order-state">'+esc(tr('selected',{n:state.order.map(function (id,i) { var o=q.options.find(function (v) { return v.id===id; }); return (i+1)+'. '+local(o.label); }).join(' → ')||'—'}))+'</p><button class="btn alt" data-american-order-reset>'+esc(tr('resetOrder'))+'</button>';
    }
    if (state.answered) html+='<div class="course-feedback'+(state.answered.correct?'':' bad')+'" role="status"><strong>'+esc(tr(state.answered.correct?'correct':'wrong'))+'</strong><p>'+esc(local(q.explanation))+'</p></div>';
    html+='<div class="course-actions">'+(state.answered&&state.answered.correct?'<button class="btn" data-american-next>'+esc(tr(state.reviewing||pos+1<total?'next':'finish'))+'</button>':'<button class="btn" data-american-submit'+(canSubmit(q)?'':' disabled')+'>'+esc(tr('submit'))+'</button>')+'</div></div>'+warning();
    return html;
  }
  function doneView() {
    var next=E.following(state.lessonId),p=load(),all=E.lessons.every(function (l) { return E.complete(p,l.id); });
    return '<button class="back" data-american-map>'+esc(tr('map'))+'</button><div class="eyebrow">AMERICAN MAH JONGG · LEARNING PATH</div><h1>'+esc(tr('lessonDone'))+'</h1><div class="panel"><p class="sub">'+esc(next?tr('sub'):tr('end'))+'</p>'+(all?'<p class="course-note">'+esc(tr('allDone'))+'</p>':'')+'<div class="course-actions">'+(next?'<button class="btn" data-american-open="'+esc(next.id)+'">'+esc(tr('nextLesson',{title:local(next.title)}))+'</button>':'')+'<button class="btn alt" data-american-map>'+esc(tr('map'))+'</button></div></div>';
  }
  function html() { return '<div class="workspace course-root american-root">'+(state.view==='question'?questionView():state.view==='done'?doneView():state.view==='reviewDone'?'<button class="back" data-american-map>'+esc(tr('map'))+'</button><div class="panel"><h1>'+esc(tr('reviewDone'))+'</h1><p>'+esc(tr('noReview'))+'</p></div>':mapView())+'</div>'; }
  g.MahjongAmericanUI={ enter:function () { state=fresh(); }, setLang:function (value) { if(messages[value]) lang=value; }, dispatch:dispatch, html:html };
})(typeof globalThis !== 'undefined' ? globalThis : window);
