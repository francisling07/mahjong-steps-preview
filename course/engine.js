// 麻将入门课程引擎（浏览器普通脚本 + Node CommonJS 双载）
// 浏览器需先加载 data.js 与 meld.js；Node 通过相对路径 require。
// 只判定与进度管理，不修改题库内容。

(function (global) {
  'use strict';

  var data, classifyMeld, isBasicWinningHand, HK, Round;
  if (typeof module !== 'undefined' && module.exports) {
    data = require('./data.js');
    HK = require('./hk-rules.js');
    Round = require('./round-engine.js');
    var meld = require('../meld.js');
    classifyMeld = meld.classifyMeld;
    isBasicWinningHand = meld.isBasicWinningHand;
  } else {
    data = global.MahjongCourseData;
    HK = global.HKLearningRules;
    Round = global.MahjongRoundEngine;
    classifyMeld = global.classifyMeld;
    isBasicWinningHand = global.isBasicWinningHand;
  }

  var TILE_RE = /^([mps][1-9]|z[1-7])$/;

  function isTile(t) {
    return typeof t === 'string' && TILE_RE.test(t);
  }

  function isPlainObject(v) {
    return v !== null && typeof v === 'object' && !Array.isArray(v);
  }

  // 章节顺序索引课程与题目；题库加载一次后只读。
  var lessons = [];
  var lessonIds = Object.create(null);
  var questionsById = Object.create(null);
  var lessonIdByQuestionId = Object.create(null);

  (function buildIndex() {
    var chapters = isPlainObject(data) && Array.isArray(data.chapters) ? data.chapters : [];
    var ci, li, qi;
    for (ci = 0; ci < chapters.length; ci++) {
      var lessonList = Array.isArray(chapters[ci].lessons) ? chapters[ci].lessons : [];
      for (li = 0; li < lessonList.length; li++) {
        var lesson = lessonList[li];
        if (!isPlainObject(lesson) || typeof lesson.id !== 'string' || lessonIds[lesson.id]) {
          continue;
        }
        lessonIds[lesson.id] = lesson;
        var qs = Array.isArray(lesson.questions) ? lesson.questions : [];
        for (qi = 0; qi < qs.length; qi++) {
          var q = qs[qi];
          if (isPlainObject(q) && typeof q.id === 'string') {
            questionsById[q.id] = q;
            lessonIdByQuestionId[q.id] = lesson.id;
          }
        }
        lessons.push(lesson);
      }
    }
  })();

  function invalidResult() {
    return { correct: false, reason: 'invalid' };
  }

  function incompleteResult() {
    return { correct: false, reason: 'incomplete' };
  }

  function verdict(ok) {
    return ok
      ? { correct: true, reason: 'correct' }
      : { correct: false, reason: 'wrong' };
  }

  function validOptions(options) {
    if (!Array.isArray(options) || options.length === 0) {
      return false;
    }
    var seen = Object.create(null);
    for (var i = 0; i < options.length; i++) {
      var o = options[i];
      if (!isPlainObject(o) || typeof o.id !== 'string' || seen[o.id]) {
        return false;
      }
      seen[o.id] = true;
    }
    return true;
  }

  function validHand(hand) {
    if (!Array.isArray(hand) || hand.length !== 13) {
      return false;
    }
    var counts = Object.create(null);
    for (var i = 0; i < 13; i++) {
      if (!isTile(hand[i])) {
        return false;
      }
      counts[hand[i]] = (counts[hand[i]] || 0) + 1;
      if (counts[hand[i]] > 4) {
        return false;
      }
    }
    return true;
  }

  function validQuestion(q) {
    if (!isPlainObject(q)) {
      return false;
    }
    if (q.type === 'choice') {
      return validOptions(q.options) && typeof q.answerId === 'string' &&
        q.options.some(function (o) { return o.id === q.answerId; });
    }
    if (q.type === 'faan') {
      if(!Array.isArray(q.hand)||!Array.isArray(q.melds)||!HK.isWinning(q.hand,q.melds)||!validOptions(q.options)||!Array.isArray(q.breakdown)||q.breakdown.length===0)return false;
      var total=0;
      for(var fi=0;fi<q.breakdown.length;fi++){
        var part=q.breakdown[fi];
        if(!isPlainObject(part)||!Number.isSafeInteger(part.fan)||part.fan<1||!isPlainObject(part.title))return false;
        total+=part.fan;
      }
      return Number.isSafeInteger(total)&&q.options.every(function(o){return Number.isSafeInteger(o.value)&&o.value>=0;});
    }
    if (q.type === 'round') return !!Round.start(q.scenarioId);
    if (q.type === 'score') return !!HK.settlement(q.fan,q.winMode) && validOptions(q.options) && q.options.every(function(o){return Number.isFinite(o.value);});
    if (q.type === 'waits') {
      if (!validHand(q.hand) || !validOptions(q.options) || !q.options.every(function(o){return isTile(o.tile);})) return false;
      var tiles=q.options.map(function(o){return o.tile;}), waits=HK.waits(q.hand);
      return new Set(tiles).size===tiles.length && waits.length>0 && waits.every(function(t){return tiles.indexOf(t)>=0;});
    }
    if (q.type === 'complete') {
      return validHand(q.hand) && validOptions(q.options) &&
        q.options.every(function (o) { return isTile(o.tile); });
    }
    if (q.type === 'pick') {
      if (!Array.isArray(q.tiles) || q.tiles.length === 0) {
        return false;
      }
      for (var i = 0; i < q.tiles.length; i++) {
        if (!isTile(q.tiles[i])) {
          return false;
        }
      }
      return q.tiles.length >= q.count && ((q.count === 2 && (q.meld === 'pair' || (q.meld === 'chow-support' && isTile(q.claimTile)))) ||
        (q.count === 3 && (q.meld === 'triplet' || q.meld === 'sequence')));
    }
    return false;
  }

  function grade(question, answer) {
    try {
      if (!validQuestion(question)) {
        return invalidResult();
      }
      if (answer === null || answer === undefined) {
        return incompleteResult();
      }
      var i;
      if (question.type === 'round') {
        if(!Array.isArray(answer))return invalidResult();
        var roundState=Round.start(question.scenarioId);
        for(i=0;i<answer.length;i++){
          var out=Round.advance(roundState,answer[i]);
          if(!out.correct)return out.reason==='invalid'?invalidResult():verdict(false);
          roundState=out.state;
        }
        return Round.current(roundState).done?verdict(true):incompleteResult();
      }
      if (question.type === 'waits') {
        if(!Array.isArray(answer))return invalidResult();
        if(answer.length===0)return incompleteResult();
        if(new Set(answer).size!==answer.length)return invalidResult();
        var chosen=[];
        for(i=0;i<answer.length;i++){
          var option=question.options.find(function(o){return o.id===answer[i];});
          if(typeof answer[i]!=='string'||!option)return invalidResult();
          chosen.push(option.tile);
        }
        var expected=HK.waits(question.hand);
        return verdict(chosen.length===expected.length&&expected.every(function(t){return chosen.indexOf(t)>=0;}));
      }
      if(question.type==='faan'){
        if(typeof answer!=='string')return invalidResult();
        var fo=question.options.find(function(o){return o.id===answer;});
        if(!fo)return invalidResult();
        var sum=question.breakdown.reduce(function(n,p){return n+p.fan;},0);
        return verdict(fo.value===Math.min(10,sum));
      }
      if (question.type === 'score') {
        if(typeof answer!=='string')return invalidResult();
        var selected=question.options.find(function(o){return o.id===answer;});
        return selected?verdict(selected.value===HK.settlement(question.fan,question.winMode).total):invalidResult();
      }
      if (question.type === 'choice') {
        if (typeof answer !== 'string') {
          return invalidResult();
        }
        var known = false;
        for (i = 0; i < question.options.length; i++) {
          if (question.options[i].id === answer) {
            known = true;
            break;
          }
        }
        if (!known) {
          return invalidResult();
        }
        return verdict(answer === question.answerId);
      }
      if (question.type === 'complete') {
        if (typeof answer !== 'string') {
          return invalidResult();
        }
        var opt = null;
        for (i = 0; i < question.options.length; i++) {
          if (question.options[i].id === answer) {
            opt = question.options[i];
            break;
          }
        }
        if (opt === null) {
          return invalidResult();
        }
        return verdict(isBasicWinningHand(question.hand.concat([opt.tile])) === true);
      }
      // pick
      if (!Array.isArray(answer)) {
        return invalidResult();
      }
      var seen = Object.create(null);
      for (i = 0; i < answer.length; i++) {
        var idx = answer[i];
        if (!Number.isInteger(idx) || idx < 0 || idx >= question.tiles.length) {
          return invalidResult();
        }
        if (seen[idx]) {
          return invalidResult();
        }
        seen[idx] = true;
      }
      if (answer.length < question.count) {
        return incompleteResult();
      }
      if (answer.length > question.count) {
        return invalidResult();
      }
      var picked = [];
      for (i = 0; i < answer.length; i++) {
        picked.push(question.tiles[answer[i]]);
      }
      return verdict(question.meld === 'chow-support' ? classifyMeld(picked.concat([question.claimTile])) === 'sequence' : classifyMeld(picked) === question.meld);
    } catch (e) {
      return invalidResult();
    }
  }

  function emptyProgress() {
    return { version: 1, solved: [], review: [], lastLessonId: null };
  }

  function knownIdList(list, index) {
    var out = [];
    if (!Array.isArray(list)) {
      return out;
    }
    for (var i = 0; i < list.length; i++) {
      var id = list[i];
      if (typeof id === 'string' && index[id] && out.indexOf(id) === -1) {
        out.push(id);
      }
    }
    return out;
  }

  function normalizeProgress(raw) {
    if (!isPlainObject(raw) || raw.version !== 1) {
      return emptyProgress();
    }
    var p = emptyProgress();
    p.solved = knownIdList(raw.solved, questionsById);
    p.review = knownIdList(raw.review, questionsById);
    p.lastLessonId = (typeof raw.lastLessonId === 'string' && lessonIds[raw.lastLessonId])
      ? raw.lastLessonId
      : null;
    return p;
  }

  function addTo(list, id) {
    return list.indexOf(id) === -1 ? list.concat([id]) : list;
  }

  function removeFrom(list, id) {
    var i = list.indexOf(id);
    return i === -1 ? list : list.slice(0, i).concat(list.slice(i + 1));
  }

  function recordAnswer(progress, questionId, answer) {
    var p = normalizeProgress(progress);
    var out = {
      version: 1,
      solved: p.solved.slice(),
      review: p.review.slice(),
      lastLessonId: p.lastLessonId
    };
    var q = typeof questionId === 'string' ? (questionsById[questionId] || null) : null;
    var result;
    if (q === null) {
      result = invalidResult();
    } else {
      result = grade(q, answer);
      if (result.correct) {
        out.review = removeFrom(out.review, q.id);
        out.solved = addTo(out.solved, q.id);
        out.lastLessonId = lessonIdByQuestionId[q.id];
      } else if (result.reason === 'wrong') {
        out.solved = removeFrom(out.solved, q.id);
        out.review = addTo(out.review, q.id);
        out.lastLessonId = lessonIdByQuestionId[q.id];
      }
    }
    return { progress: out, result: result };
  }

  function findLesson(id) {
    return typeof id === 'string' && lessonIds[id] ? lessonIds[id] : null;
  }

  function lessonSolved(p, lesson) {
    var qs = Array.isArray(lesson.questions) ? lesson.questions : [];
    if (qs.length === 0) {
      return false;
    }
    for (var i = 0; i < qs.length; i++) {
      var q = qs[i];
      if (!isPlainObject(q) || typeof q.id !== 'string' || p.solved.indexOf(q.id) === -1) {
        return false;
      }
    }
    return true;
  }

  function lessonComplete(progress, lessonId) {
    var lesson = findLesson(lessonId);
    if (lesson === null) {
      return false;
    }
    return lessonSolved(normalizeProgress(progress), lesson);
  }

  function nextLesson(progress) {
    var p = normalizeProgress(progress);
    for (var i = 0; i < lessons.length; i++) {
      if (!lessonSolved(p, lessons[i])) {
        return lessons[i].id;
      }
    }
    return null;
  }

  // Course navigation follows the current lesson, independent of older gaps.
  function followingLesson(lessonId) {
    for (var i = 0; i < lessons.length - 1; i++) {
      if (lessons[i].id === lessonId) return lessons[i + 1].id;
    }
    return null;
  }

  var api = {
    listLessons: function () {
      return lessons.slice();
    },
    getLesson: function (id) {
      return findLesson(id);
    },
    grade: grade,
    emptyProgress: emptyProgress,
    normalizeProgress: normalizeProgress,
    recordAnswer: recordAnswer,
    lessonComplete: lessonComplete,
    nextLesson: nextLesson,
    followingLesson: followingLesson
  };

  global.MahjongCourseEngine = api;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }
})(typeof globalThis !== 'undefined'
  ? globalThis
  : typeof window !== 'undefined'
    ? window
    : typeof self !== 'undefined'
      ? self
      : this);
