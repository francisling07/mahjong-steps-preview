// 课程页面 UI：目录、课程介绍、六种题型、错题复习与本机进度。
// 挂载 MahjongCourseUI，由 app.js 的课程路由调用；判定与进度均走 MahjongCourseEngine。
(function (global) {
  'use strict';

  var Engine = global.MahjongCourseEngine;
  var Art = global.MahjongTileArt;
  var Data = global.MahjongCourseData;
  var Extras = global.MahjongCourseExtras;
  var calcFan=3, calcMode="discard";
  if (!Engine || !Art || !Data) {
    global.MahjongCourseUI = null;
    return;
  }

  var KEY = 'mahjong-steps-course-v1';

  var T = {
    zh: {
      eyebrow: '香港麻将 · 学习路径',
      courseTitle: '香港麻将入门课程',
      courseDesc: '八章共四十课，从认识牌到吃碰杠、计番与完成教学对局。进度只保存在这台设备的浏览器中。',
      storageWarn: '浏览器存储不可用：本次学习进度只保留在当前页面，刷新后会丢失。',
      completedStats: '已完成 {done} / {total} 课',
      masteredStats: '已掌握 {done} / {total} 题',
      continueBtn: '继续学习：{title} →',
      reviewBtn: '错题复习（{n}）',
      resetBtn: '清除学习记录',
      resetConfirm: '确定要清除本课程在本浏览器中的学习记录吗？只删除学习进度，不影响其他数据。',
      doneMark: '✓ 已完成',
      todoMark: '未开始',
      progressMark: '学习中',
      incompleteShape: '这张牌还不能把手牌补成四组面子加一对将。先看看哪些牌已经成组，再观察剩余的牌。',
      exampleLabel: '示例牌面',
      beginBtn: '开始练习 →',
      backToMap: '返回目录',
      backHome: '← 返回首页',
      stepLabel: '第 {i} / {n} 题',
      submit: '提交答案',
      pickedCount: '已选 {x} / {count}',
      needPick: '请选满 {count} 张后再提交。',
      correct: '✓ 答对了',
      wrong: '✗ 答错了',
      retryHint: '看完解释后修改选择，再提交一次；本题已放入错题复习。',
      nextQuestion: '下一题 →',
      finishLesson: '完成本课 →',
      keepNext: '保留并继续 →',
      keepEnd: '保留，结束复习 →',
      endReview: '结束复习 →',
      lessonDone: '本课完成',
      lessonDoneDesc: '本课练习都已掌握。可以返回目录查看进度，或继续下一课。',
      pathEndDesc: '已到课程末尾。可以返回目录查看其他课程和错题。',
      nextLessonBtn: '下一课：{title} →',
      allDone: '八章四十课全部完成！你已走完整条入门路径，可以重练教学局或用番种速查继续巩固。',
      completeNote: '这里只检查基础牌型结构；实际胡牌还受番数等其他规则条件限制。',
      swipeHand: '左右滑动查看完整手牌 →',
      reviewTitle: '错题复习',
      reviewDesc: '这里只包含之前答错过的题目，可跨课复习。答对即从列表移除，答错会继续保留。',
      reviewEmptyTitle: '暂时没有需要复习的题目',
      reviewEmptyDesc: '练习中答错的题目会自动收进这里。',
      reviewDoneTitle: '本轮复习结束',
      reviewRemaining: '还有 {n} 题保留在复习列表中，下次可以接着练。',
      reviewCleared: '复习列表已清空，所有错题都已改正。'
    },
    tw: {
      eyebrow: '香港麻雀 · 學習路徑',
      courseTitle: '香港麻雀入門課程',
      courseDesc: '八章共四十課，從認識牌到吃碰槓、計番與完成教學對局。進度只儲存在此瀏覽器的本機記錄中。',
      storageWarn: '瀏覽器儲存不可用：本次學習進度只保留在目前頁面，重新整理後會遺失。',
      completedStats: '已完成 {done} / {total} 課',
      masteredStats: '已掌握 {done} / {total} 題',
      continueBtn: '繼續學習：{title} →',
      reviewBtn: '錯題複習（{n}）',
      resetBtn: '清除學習記錄',
      resetConfirm: '確定要清除此課程在此瀏覽器的學習記錄嗎？只刪除學習進度，不影響其他資料。',
      doneMark: '✓ 已完成',
      todoMark: '未開始',
      progressMark: '學習中',
      incompleteShape: '這張牌還不能把手牌補成四組面子加一對將。先看看哪些牌已經成組，再觀察剩餘的牌。',
      exampleLabel: '示例牌面',
      beginBtn: '開始練習 →',
      backToMap: '返回目錄',
      backHome: '← 返回首頁',
      stepLabel: '第 {i} / {n} 題',
      submit: '提交答案',
      pickedCount: '已選 {x} / {count}',
      needPick: '請選滿 {count} 張後才提交。',
      correct: '✓ 答對了',
      wrong: '✗ 答錯了',
      retryHint: '看完解釋後修改選擇，再提交一次；本題已放入錯題複習。',
      nextQuestion: '下一題 →',
      finishLesson: '完成本課 →',
      keepNext: '保留並繼續 →',
      keepEnd: '保留，結束複習 →',
      endReview: '結束複習 →',
      lessonDone: '本課完成',
      lessonDoneDesc: '本課練習都已掌握。可以返回目錄查看進度，或繼續下一課。',
      pathEndDesc: '已到課程末尾。可以返回目錄查看其他課程和錯題。',
      nextLessonBtn: '下一課：{title} →',
      allDone: '八章四十課全部完成！你已走完整條入門路徑，可以重練教學局或用番種速查繼續鞏固。',
      completeNote: '這裡只檢查基礎牌型結構；實際胡牌還受番數等其他規則條件限制。',
      swipeHand: '左右滑動查看完整手牌 →',
      reviewTitle: '錯題複習',
      reviewDesc: '這裡只包含之前答錯的題目，可跨課複習。答對即從列表移除，答錯會繼續保留。',
      reviewEmptyTitle: '暫時沒有需要複習的題目',
      reviewEmptyDesc: '練習中答錯的題目會自動收進這裡。',
      reviewDoneTitle: '本輪複習結束',
      reviewRemaining: '還有 {n} 題保留在複習列表中，下次可以繼續。',
      reviewCleared: '複習列表已清空，所有錯題均已改正。'
    },
    en: {
      eyebrow: 'HONG KONG MAHJONG · LEARNING PATH',
      courseTitle: 'Hong Kong Mahjong: First Steps',
      courseDesc: 'Eight chapters and 40 lessons, from recognising tiles to calls, scoring and complete teaching rounds. Progress is saved in this browser on this device only.',
      storageWarn: 'Browser storage is unavailable: this session\u2019s progress is kept on this page only and will be lost after a refresh.',
      completedStats: '{done} of {total} lessons completed',
      masteredStats: '{done} of {total} questions mastered',
      continueBtn: 'Continue: {title} →',
      reviewBtn: 'Review mistakes ({n})',
      resetBtn: 'Clear learning record',
      resetConfirm: 'Clear this course\u2019s learning record for this browser? Only your progress is deleted; other data is untouched.',
      doneMark: '✓ Completed',
      todoMark: 'Not started',
      progressMark: 'In progress',
      incompleteShape: 'This tile does not yet complete four sets and a pair. Look at the groups you already have, then check the tiles left over.',
      exampleLabel: 'Example',
      beginBtn: 'Start practice →',
      backToMap: 'Back to course map',
      backHome: '← Back to home',
      stepLabel: 'Question {i} of {n}',
      submit: 'Submit answer',
      pickedCount: 'Selected {x} of {count}',
      needPick: 'Select {count} tiles before submitting.',
      correct: '✓ Correct',
      wrong: '✗ Not quite',
      retryHint: 'Read the explanation, change your choice and submit again. This question is now in your review list.',
      nextQuestion: 'Next question →',
      finishLesson: 'Finish lesson →',
      keepNext: 'Keep and continue →',
      keepEnd: 'Keep it and finish review →',
      endReview: 'Finish review →',
      lessonDone: 'Lesson complete',
      lessonDoneDesc: 'You completed every exercise in this lesson. Return to the course map to see your progress, or move on.',
      pathEndDesc: 'You reached the end of this course. Return to the map for other lessons and reviews.',
      nextLessonBtn: 'Next lesson: {title} →',
      allDone: 'All 40 lessons are complete. Revisit the teaching rounds and faan reference to keep practising.',
      completeNote: 'Only the basic hand structure is checked here. A legal win also depends on faan and other conditions of the ruleset.',
      swipeHand: 'Swipe sideways to see every tile →',
      reviewTitle: 'Review mistakes',
      reviewDesc: 'Only questions you previously missed, from any lesson. Get one right and it leaves the list; miss it and it stays.',
      reviewEmptyTitle: 'Nothing to review right now',
      reviewEmptyDesc: 'Questions you miss in practice will appear here.',
      reviewDoneTitle: 'Review finished',
      reviewRemaining: '{n} questions remain in your review list for next time.',
      reviewCleared: 'Your review list is empty \u2014 every mistake has been corrected.'
    }
  };

  var lang = 'zh';
  var storageOk = null;
  var memProgress = null;
  var state = newState();

  function newState() {
    return { view: 'map', lessonId: null, qIndex: 0, option: null, picked: [], waitChoices: [], roundState: null, roundTile: null, roundHint: null, roundFeedback: null, roundLastExplanation: null, answered: null, queue: [], qi: 0 };
  }

  function resetAnswer() {
    state.option = null;
    state.picked = [];
    state.waitChoices = [];
    state.roundState = null;
    state.roundTile = null;
    state.roundHint = null;
    state.roundFeedback = null;
    state.roundLastExplanation = null;
    state.answered = null;
  }

  function tt(key, vars) {
    var table = T[lang] || T.zh;
    var text = key in table ? table[key] : T.zh[key];
    if (text === undefined) text = key;
    if (vars) Object.keys(vars).forEach(function (k) { text = text.split('{' + k + '}').join(String(vars[k])); });
    return text;
  }

  function esc(v) {
    return String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  }

  function langText(obj) {
    if (!obj) return '';
    return obj[lang] || obj.zh || '';
  }

  // —— 本机进度（仅存 Engine 规范化后的 progress）——
  function probeStorage() {
    if (storageOk !== null) return storageOk;
    try {
      var probe = KEY + '.probe';
      global.localStorage.setItem(probe, '1');
      global.localStorage.removeItem(probe);
      storageOk = true;
    } catch (e) {
      storageOk = false;
    }
    return storageOk;
  }

  function rawRead() {
    if (!probeStorage()) return null;
    try { return global.localStorage.getItem(KEY); } catch (e) { storageOk = false; return null; }
  }

  function rawWrite(serialized) {
    if (!probeStorage()) return;
    try { global.localStorage.setItem(KEY, serialized); } catch (e) { storageOk = false; }
  }

  function loadProgress() {
    if (memProgress) return memProgress;
    var stored = rawRead();
    var parsed = null;
    if (stored !== null) {
      try { parsed = JSON.parse(stored); } catch (e) { parsed = null; }
    }
    memProgress = Engine.normalizeProgress(parsed);
    if (!probeStorage()) return memProgress;
    if (stored === null || stored !== JSON.stringify(memProgress)) rawWrite(JSON.stringify(memProgress));
    return memProgress;
  }

  function saveProgress(p) {
    memProgress = Engine.normalizeProgress(p);
    if (probeStorage()) rawWrite(JSON.stringify(memProgress));
    return memProgress;
  }

  function clearProgress() {
    memProgress = Engine.emptyProgress();
    if (probeStorage()) {
      try { global.localStorage.removeItem(KEY); } catch (e) { storageOk = false; }
    }
    return memProgress;
  }

  // —— 牌面与牌名 ——
  var SUITS = { m: ['万', '萬', 'characters'], p: ['筒', '筒', 'dots'], s: ['条', '條', 'bamboo'] };
  var HONORS = {
    z1: ['东风', '東風', 'East'], z2: ['南风', '南風', 'South'], z3: ['西风', '西風', 'West'], z4: ['北风', '北風', 'North'],
    z5: ['红中', '紅中', 'Red dragon'], z6: ['发财', '發財', 'Green dragon'], z7: ['白板', '白板', 'White dragon']
  };
  function langIndex() { return lang === 'en' ? 2 : lang === 'tw' ? 1 : 0; }
  function tileName(id) {
    var i = langIndex();
    if (HONORS[id]) return HONORS[id][i];
    var suit = SUITS[id && id.charAt(0)];
    if (suit) return id.charAt(1) + ' ' + suit[i];
    var flowers = [['春', '春', 'Spring'], ['夏', '夏', 'Summer'], ['秋', '秋', 'Autumn'], ['冬', '冬', 'Winter'], ['梅', '梅', 'Plum'], ['兰', '蘭', 'Orchid'], ['菊', '菊', 'Chrysanthemum'], ['竹', '竹', 'Bamboo']];
    if (/^f[1-8]$/.test(id)) return flowers[Number(id.charAt(1)) - 1][i];
    if (id === 'j1') return 'Joker';
    return String(id);
  }
  function tileHtml(id) {
    return '<span class="tile" role="img" aria-label="' + esc(tileName(id)) + '">' + Art.svg(id) + '</span>';
  }

  // —— 课程与题目 ——
  function questionsOf(lesson) {
    return lesson && Array.isArray(lesson.questions) ? lesson.questions : [];
  }
  function totalQuestions() {
    return Engine.listLessons().reduce(function (n, l) { return n + questionsOf(l).length; }, 0);
  }
  function findQuestion(id) {
    var lessons = Engine.listLessons();
    for (var i = 0; i < lessons.length; i++) {
      var qs = questionsOf(lessons[i]);
      for (var j = 0; j < qs.length; j++) {
        if (qs[j].id === id) return { lesson: lessons[i], q: qs[j] };
      }
    }
    return null;
  }
  function currentEntry() {
    if (state.view === 'review') return findQuestion(state.queue[state.qi]);
    var lesson = Engine.getLesson(state.lessonId);
    var q = questionsOf(lesson)[state.qIndex];
    return q ? { lesson: lesson, q: q } : null;
  }
  function firstUnmasteredIndex(lesson, progress) {
    var qs = questionsOf(lesson);
    for (var i = 0; i < qs.length; i++) {
      if (progress.solved.indexOf(qs[i].id) === -1) return i;
    }
    return 0;
  }
  function continueTarget() {
    var p = loadProgress();
    var lesson = Engine.getLesson(p.lastLessonId);
    if (lesson && !Engine.lessonComplete(p, lesson.id)) return lesson;
    var nid = lesson ? Engine.followingLesson(lesson.id) : Engine.nextLesson(p);
    return nid ? Engine.getLesson(nid) : null;
  }

  // —— 交互状态机 ——
  function openLesson(id) {
    var lesson = Engine.getLesson(id);
    if (!lesson) return;
    state = newState();
    state.view = 'intro';
    state.lessonId = id;
  }
  function startContinue() {
    var lesson = continueTarget();
    if (!lesson) return;
    state = newState();
    state.lessonId = lesson.id;
    var p = Engine.normalizeProgress(loadProgress());
    p.lastLessonId = lesson.id;
    saveProgress(p);
    state.qIndex = firstUnmasteredIndex(lesson, p);
    state.view = 'question';
  }
  function startPractice() {
    var lesson = Engine.getLesson(state.lessonId);
    if (!lesson) { state = newState(); return; }
    var p = Engine.normalizeProgress(loadProgress());
    p.lastLessonId = lesson.id;
    saveProgress(p);
    resetAnswer();
    state.qIndex = firstUnmasteredIndex(lesson, p);
    state.view = 'question';
  }
  function startReview() {
    state = newState();
    state.view = 'review';
    state.queue = loadProgress().review.slice();
  }
  function selectOption(id) {
    if (state.answered && state.answered.ok) return;
    state.option = id;
    state.answered = null;
  }
  function togglePick(index) {
    if (state.answered && state.answered.ok) return;
    var entry = currentEntry();
    if (!entry || entry.q.type !== 'pick') return;
    var at = state.picked.indexOf(index);
    if (at > -1) state.picked.splice(at, 1);
    else if (state.picked.length < entry.q.count) state.picked.push(index);
    state.answered = null;
  }
  function canSubmit(q) {
    if (q.type === 'round') return !!state.roundState && global.MahjongRoundEngine.current(state.roundState).done;
    if (q.type === 'waits') return state.waitChoices.length > 0;
    if (q.type === 'pick') return state.picked.length === q.count;
    return state.option !== null && state.option !== undefined;
  }
  function buildAnswer(q) {
    if(q.type === 'round') return state.roundState.history;
    if(q.type === 'waits') return state.waitChoices.slice();
    return q.type === 'pick' ? state.picked.slice() : state.option;
  }
  function submitAnswer() {
    var entry = currentEntry();
    if (!entry) return;
    var q = entry.q;
    if (state.answered && state.answered.ok) return;
    if (!canSubmit(q)) { state.answered = { ok: false, pending: true }; return; }
    // invalid/incomplete 不会修改进度，也不记错；UI 层已先行拦截。
    var out = Engine.recordAnswer(loadProgress(), q.id, buildAnswer(q));
    if (state.view === 'review') out.progress.lastLessonId = loadProgress().lastLessonId;
    saveProgress(out.progress);
    if (out.result.reason === 'invalid' || out.result.reason === 'incomplete') {
      state.answered = { ok: false, pending: true };
    } else {
      state.answered = { ok: out.result.correct === true };
    }
  }
  function goNext() {
    var entry = currentEntry();
    if (!entry) { state.view = 'map'; resetAnswer(); return; }
    if (state.view === 'review') {
      if (state.qi + 1 >= state.queue.length) {
        state.view = 'reviewDone';
      } else {
        state.qi += 1;
      }
      resetAnswer();
      return;
    }
    if (state.qIndex + 1 >= questionsOf(entry.lesson).length) {
      state.view = 'done';
    } else {
      state.qIndex += 1;
    }
    resetAnswer();
  }
  function doReset() {
    if (!global.confirm(tt('resetConfirm'))) return false;
    clearProgress();
    state = newState();
    return true;
  }

  // el 为带 data-course-* dataset 的按钮（或同形对象）。返回 'view' | 'local' | 'none' | false。
  function dispatch(el) {
    var d = (el && el.dataset) || {};
    if (d.courseShared !== undefined) return 'to-bridge';
    if (d.courseRules !== undefined) { state.view='rules'; return 'view'; }
    if (d.courseReference !== undefined) { state.view='reference'; return 'view'; }
    if (d.courseFan !== undefined) { var f=Number(d.courseFan); if(Number.isInteger(f)&&f>=3&&f<=10)calcFan=f; return 'local'; }
    if (d.courseMethod !== undefined) { if(['discard','selfDraw'].indexOf(d.courseMethod)>=0)calcMode=d.courseMethod; return 'local'; }
    if (d.courseWait !== undefined) {
      if(state.answered&&state.answered.ok)return 'none';
      var item=currentEntry();
      if(item&&item.q.type==='waits'&&item.q.options.some(function(o){return o.id===d.courseWait;})){
        var at=state.waitChoices.indexOf(d.courseWait);
        if(at>=0)state.waitChoices.splice(at,1);else state.waitChoices.push(d.courseWait);
        state.answered=null;
      }return 'local';
    }
    if (Object.keys(d).some(function(k){return k.indexOf('courseRound')===0;})) {
      var entry=currentEntry();if(!entry||entry.q.type!=='round')return 'none';
      var result=Extras.roundDispatch(entry.q,state,d);
      if(result==='complete')submitAnswer();
      else if(result && result.kind==='wrong'){
        var previous=loadProgress(),recorded=Engine.recordAnswer(previous,entry.q.id,state.roundState.history.concat([result.action])).progress;
        if(state.view==='review')recorded.lastLessonId=previous.lastLessonId;
        saveProgress(recorded);
      }
      return 'local';
    }
    if (d.courseOpen !== undefined) { openLesson(d.courseOpen); return 'view'; }
    if (d.courseContinue !== undefined) { startContinue(); return 'view'; }
    if (d.courseBegin !== undefined) { startPractice(); return 'view'; }
    if (d.courseMap !== undefined) { state = newState(); return 'view'; }
    if (d.courseReview !== undefined) { startReview(); return 'view'; }
    if (d.courseOption !== undefined) { selectOption(d.courseOption); return 'local'; }
    if (d.coursePick !== undefined) { togglePick(Number(d.coursePick)); return 'local'; }
    if (d.courseSubmit !== undefined) { submitAnswer(); return 'local'; }
    if (d.courseNext !== undefined) { goNext(); return 'view'; }
    if (d.courseReset !== undefined) { return doReset() ? 'view' : 'none'; }
    return false;
  }

  // —— 渲染 ——
  function warnHtml() {
    return probeStorage() ? '' : '<p class="course-warn" role="status">' + esc(tt('storageWarn')) + '</p>';
  }
  function mapView() {
    var p = loadProgress();
    var lessons = Engine.listLessons();
    var doneCount = lessons.filter(function (l) { return Engine.lessonComplete(p, l.id); }).length;
    var target = continueTarget();
    var html = '<button class="back" data-home>' + esc(tt('backHome')) + '</button>' +
      '<div class="eyebrow" style="margin-top:28px">' + esc(tt('eyebrow')) + '</div>' +
      '<h1>' + esc(tt('courseTitle')) + '</h1><p class="sub">' + esc(tt('courseDesc')) + '</p>' +
      '<p class="course-profile">' + esc(Extras.text('profile',lang)) + '</p>' + warnHtml() +
      '<div class="course-stats"><span class="course-stat">' + esc(tt('completedStats', { done: doneCount, total: lessons.length })) + '</span>' +
      '<span class="course-stat">' + esc(tt('masteredStats', { done: p.solved.length, total: totalQuestions() })) + '</span></div>' +
      '<div class="course-entry">';
    if (target) html += '<button type="button" class="btn" data-course-continue>' + esc(tt('continueBtn', { title: langText(target.title) })) + '</button>';
    html += '<button type="button" class="btn alt" data-course-rules>' + esc(Extras.text('rulebook',lang)) + '</button>' +
      '<button type="button" class="btn alt" data-course-review>' + esc(tt('reviewBtn', { n: p.review.length })) + '</button>' +
      '<button type="button" class="btn alt" data-course-reference>' + esc(Extras.text('reference',lang)) + '</button>' +
      '<button type="button" class="btn alt" data-course-reset>' + esc(tt('resetBtn')) + '</button></div>';
    if (global.MahjongBridgeUI) {
      var sharedCount=global.MahjongBridgeUI.sharedDoneCount();
      var sharedText=lang==='en'?'Shared foundations ('+sharedCount+'/3)':lang==='tw'?'通用基礎（'+sharedCount+'/3）':'通用基础（'+sharedCount+'/3）';
      var jumpText=lang==='en'?'Know Sichuan? Learn Hong Kong honours next →':lang==='tw'?'已會四川？先認香港字牌 →':'已会四川？先认香港字牌 →';
      html+='<div class="course-entry"><button type="button" class="btn alt" data-course-shared>'+esc(sharedText)+'</button><button type="button" class="btn alt" data-course-open="hk-1-2">'+esc(jumpText)+'</button></div>';
    }
    (Data.chapters || []).forEach(function (ch) {
      html += '<section class="course-chapter"><h2>' + esc(langText(ch.title)) + '</h2><p>' + esc(langText(ch.summary)) + '</p><div class="course-lessons">';
      (ch.lessons || []).forEach(function (l) {
        var done = Engine.lessonComplete(p, l.id);
        var started = p.lastLessonId === l.id || questionsOf(l).some(function (q) { return p.solved.indexOf(q.id) !== -1 || p.review.indexOf(q.id) !== -1; });
        html += '<button type="button" class="course-lesson" data-course-open="' + esc(l.id) + '">' +
          '<span>' + esc(langText(l.title)) + '</span>' +
          '<span class="course-lesson-state' + (done ? ' done' : '') + '">' + esc(done ? tt('doneMark') : started ? tt('progressMark') : tt('todoMark')) + '</span></button>';
      });
      html += '</div></section>';
    });
    return html;
  }
  function introView() {
    var lesson = Engine.getLesson(state.lessonId);
    if (!lesson) { state = newState(); return mapView(); }
    var example = lesson.example && Array.isArray(lesson.example.tiles) ? lesson.example : null;
    return '<button class="back" data-course-map>' + esc(tt('backToMap')) + '</button>' +
      '<div class="eyebrow" style="margin-top:28px">' + esc(tt('eyebrow')) + '</div>' +
      '<h1>' + esc(langText(lesson.title)) + '</h1>' +
      '<div class="panel"><p class="sub">' + esc(langText(lesson.intro)) + '</p>' +
      (example ? '<h3>' + esc(tt('exampleLabel')) + '</h3><div class="course-tiles">' +
        example.tiles.map(tileHtml).join('') + '</div><p class="course-hint">' + esc(langText(example.caption)) + '</p>' : '') +
      '<div class="course-actions"><button type="button" class="btn" data-course-begin>' + esc(tt('beginBtn')) + '</button>' +
      '<button type="button" class="btn alt" data-course-map>' + esc(tt('backToMap')) + '</button></div></div>' +
      warnHtml();
  }
  function optionsHtml(q, locked) {
    return '<div class="course-options">' + q.options.map(function (o) {
      var sel = state.option === o.id;
      var inner = '';
      if (o.tile) inner = tileHtml(o.tile);
      else if (Array.isArray(o.tiles)) inner = '<span class="course-tiles course-inline-tiles">' + o.tiles.map(tileHtml).join('') + '</span>';
      var label = o.label ? '<span class="course-opt-label">' + esc(langText(o.label)) + '</span>' : '';
      var aria = langText(o.label) || (o.tile ? tileName(o.tile) : (o.tiles || []).map(tileName).join(', '));
      return '<button type="button" class="course-option' + (sel ? ' selected' : '') + '" data-course-option="' + esc(o.id) +
        '" aria-pressed="' + (sel ? 'true' : 'false') + '" aria-label="' + esc(aria) + '"' + (locked ? ' disabled' : '') + '>' +
        inner + label + '</button>';
    }).join('') + '</div>';
  }
  function pickHtml(q, locked) {
    return (q.claimTile ? '<div class="course-claim-preview"><span>' + esc(Extras.text('claim',lang)) + '</span>' + tileHtml(q.claimTile) + '</div>' : '') + '<div class="course-options course-pick">' + q.tiles.map(function (tid, i) {
      var sel = state.picked.indexOf(i) > -1;
      return '<button type="button" class="course-option' + (sel ? ' selected' : '') + '" data-course-pick="' + i +
        '" aria-pressed="' + (sel ? 'true' : 'false') + '" aria-label="' + esc(tileName(tid)) + '"' + (locked ? ' disabled' : '') + '>' +
        tileHtml(tid) + '</button>';
    }).join('') + '</div>' +
      '<p class="course-count">' + esc(tt('pickedCount', { x: state.picked.length, count: q.count })) + '</p>';
  }
  function completeHtml(q, locked) {
    return '<p class="course-hint">' + esc(tt('swipeHand')) + '</p>' +
      '<div class="course-hand" tabindex="0" role="group" aria-label="' + esc(tt('exampleLabel')) + '">' +
      q.hand.map(tileHtml).join('') + '</div>' +
      optionsHtml(q, locked) +
      '<p class="course-note">' + esc(tt('completeNote')) + '</p>';
  }
  function waitsHtml(q, locked) {
    return '<p class="course-note">'+esc(Extras.text('waitNote',lang))+'</p><div class="course-hand" tabindex="0" role="group" aria-label="'+esc(tt('exampleLabel'))+'">'+q.hand.map(tileHtml).join('')+'</div><div class="course-options">'+q.options.map(function(o){
      var sel=state.waitChoices.indexOf(o.id)>=0;
      return '<button type="button" class="course-option'+(sel?' selected':'')+'" data-course-wait="'+esc(o.id)+'" aria-pressed="'+sel+'" aria-label="'+esc(tileName(o.tile))+'"'+(locked?' disabled':'')+'>'+tileHtml(o.tile)+'</button>';
    }).join('')+'</div><p class="course-count">'+esc(Extras.text('selected',lang))+' '+state.waitChoices.length+'</p>';
  }
  function feedbackHtml(q, isReview, isLast) {
    if (!state.answered) return '';
    if (state.answered.pending) {
      return '<div class="course-feedback bad" role="status"><strong>' + esc(tt('wrong')) + '</strong>' +
        '<p>' + esc(tt('needPick', { count: q.count })) + '</p></div>';
    }
    var ok = state.answered.ok;
    var explanation = !ok && q.type === 'complete' ? tt('incompleteShape') : langText(q.explanation);
    var body = '<strong>' + esc(ok ? tt('correct') : tt('wrong')) + '</strong>' +
      (explanation ? '<p>' + esc(explanation) + '</p>' : '');
    if (!ok) body += '<p>' + esc(tt('retryHint')) + '</p>';
    var nextLabel = '';
    if (ok) nextLabel = isReview ? (isLast ? tt('endReview') : tt('nextQuestion')) : (isLast ? tt('finishLesson') : tt('nextQuestion'));
    else if (isReview) nextLabel = isLast ? tt('keepEnd') : tt('keepNext');
    var nextBtn = nextLabel ? '<div class="course-actions"><button type="button" class="btn" data-course-next>' + esc(nextLabel) + '</button></div>' : '';
    return '<div class="course-feedback' + (ok ? '' : ' bad') + '" role="status">' + body + '</div>' + nextBtn;
  }
  function questionView() {
    var entry = currentEntry();
    if (!entry) { state = newState(); return mapView(); }
    var q = entry.q;
    var isReview = state.view === 'review';
    var total = isReview ? state.queue.length : questionsOf(entry.lesson).length;
    var pos = isReview ? state.qi : state.qIndex;
    var locked = !!(state.answered && state.answered.ok);
    var body = '';
    if (q.type === 'round') {
      body += Extras.roundHtml(q,state,{lang:lang,tileHtml:tileHtml,tileName:tileName});
    } else if(q.type === 'waits') {
      body += waitsHtml(q,locked);
    } else if (q.type === 'pick') {
      body += pickHtml(q, locked);
    } else {
      if (q.type === 'choice' && Array.isArray(q.tiles)) body += '<div class="course-tiles">' + q.tiles.map(tileHtml).join('') + '</div>';
      if (q.type === 'faan') {
        body += '<p class="course-note">'+esc(lang==='en'?'Count every qualifying pattern, then apply the ten-faan cap.':lang==='tw'?'逐項計算成立的番種，最後再應用十番封頂。':'逐项计算成立的番种，最后再应用十番封顶。')+'</p>';
        body += '<div class="course-hand" tabindex="0" role="group" aria-label="'+esc(tt('exampleLabel'))+'">'+q.hand.map(tileHtml).join('')+'</div>';
        if(q.melds.length)body += '<div class="course-exposed">'+q.melds.map(function(m){return '<div class="course-meld">'+m.tiles.map(tileHtml).join('')+'</div>';}).join('')+'</div>';
      }
      if (q.type === 'complete') body += completeHtml(q, locked);
      else body += optionsHtml(q, locked);
    }
    var submitDisabled = !canSubmit(q) || locked;
    var actions = q.type === 'round' ? '' : '<button type="button" class="btn" data-course-submit' + (submitDisabled ? ' disabled' : '') + '>' + esc(tt('submit')) + '</button>';
    return '<button class="back" data-course-map>' + esc(tt('backToMap')) + '</button>' +
      '<div class="eyebrow" style="margin-top:28px">' + esc(isReview ? tt('reviewTitle') : tt('eyebrow')) + '</div>' +
      '<h1>' + esc(langText(entry.lesson.title)) + '</h1>' +
      '<p class="sub">' + esc(tt('stepLabel', { i: pos + 1, n: total })) + '</p>' +
      '<div class="bar"><i style="width:' + (100 * (pos + 1) / total) + '%"></i></div>' +
      '<div class="panel' + (q.hideLabels ? ' course-hidelabels' : '') + '"><h2>' + esc(langText(q.prompt)) + '</h2>' +
      (q.context ? '<p class="course-context">'+esc(langText(q.context))+'</p>' : '') + body +
      feedbackHtml(q, isReview, pos + 1 >= total) +
      '<div class="course-actions">' + actions + '</div>' +
      '</div>' + warnHtml();
  }
  function doneView() {
    var p = loadProgress();
    var nid = Engine.followingLesson(state.lessonId);
    var next = nid ? Engine.getLesson(nid) : null;
    var actions = '<button type="button" class="btn alt" data-course-map>' + esc(tt('backToMap')) + '</button>';
    if (next) actions = '<button type="button" class="btn" data-course-open="' + esc(next.id) + '">' + esc(tt('nextLessonBtn', { title: langText(next.title) })) + '</button>' + actions;
    return '<button class="back" data-course-map>' + esc(tt('backToMap')) + '</button>' +
      '<div class="eyebrow" style="margin-top:28px">' + esc(tt('eyebrow')) + '</div>' +
      '<h1>' + esc(tt('lessonDone')) + '</h1>' +
      '<div class="panel"><p class="sub">' + esc(tt(next ? 'lessonDoneDesc' : 'pathEndDesc')) + '</p>' +
      (!next && p.solved.length === totalQuestions() ? '<p class="sub">' + esc(tt('allDone')) + '</p>' : '') +
      '<div class="course-actions">' + actions + '</div></div>' + warnHtml();
  }
  function reviewView() {
    if (state.queue.length === 0) {
      return '<button class="back" data-course-map>' + esc(tt('backToMap')) + '</button>' +
        '<div class="eyebrow" style="margin-top:28px">' + esc(tt('eyebrow')) + '</div>' +
        '<h1>' + esc(tt('reviewTitle')) + '</h1>' +
        '<div class="panel"><div class="course-empty"><h2>' + esc(tt('reviewEmptyTitle')) + '</h2>' +
        '<p>' + esc(tt('reviewEmptyDesc')) + '</p></div>' +
        '<div class="course-actions"><button type="button" class="btn alt" data-course-map>' + esc(tt('backToMap')) + '</button></div></div>' + warnHtml();
    }
    return questionView();
  }
  function reviewDoneView() {
    var p = loadProgress();
    var desc = p.review.length > 0 ? tt('reviewRemaining', { n: p.review.length }) : tt('reviewCleared');
    return '<button class="back" data-course-map>' + esc(tt('backToMap')) + '</button>' +
      '<div class="eyebrow" style="margin-top:28px">' + esc(tt('eyebrow')) + '</div>' +
      '<h1>' + esc(tt('reviewTitle')) + '</h1>' +
      '<div class="panel"><h2>' + esc(tt('reviewDoneTitle')) + '</h2><p class="sub">' + esc(desc) + '</p>' +
      '<div class="course-actions"><button type="button" class="btn alt" data-course-map>' + esc(tt('backToMap')) + '</button></div></div>' + warnHtml();
  }
  function html() {
    var body;
    if (state.view === 'rules') body = Extras.rulebookHtml(lang);
    else if (state.view === 'reference') body = Extras.referenceHtml(lang,calcFan,calcMode);
    else if (state.view === 'intro') body = introView();
    else if (state.view === 'question') body = questionView();
    else if (state.view === 'done') body = doneView();
    else if (state.view === 'review') body = reviewView();
    else if (state.view === 'reviewDone') body = reviewDoneView();
    else body = mapView();
    return '<div class="workspace course-root">' + body + '</div>';
  }

  global.MahjongCourseUI = {
    setLang: function (l) { if (T[l]) lang = l; },
    enter: function () { state = newState(); },
    dispatch: dispatch,
    html: html
  };
})(typeof globalThis !== 'undefined' ? globalThis : window);
