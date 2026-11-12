/* Original American Mah Jongg teaching course: validation and progress. */
(function (g) {
  'use strict';
  var parts = typeof module !== 'undefined' && module.exports
    ? [require('./american-part1.js'), require('./american-part2.js'), require('./american-final-data.js')]
    : [g.MahjongAmericanPart1, g.MahjongAmericanPart2, g.MahjongAmericanFinalData];
  var chapters = parts.flatMap(function (p) { return p && Array.isArray(p.chapters) ? p.chapters : []; });
  var lessons = chapters.flatMap(function (c) { return Array.isArray(c.lessons) ? c.lessons : []; });
  var lessonById = Object.create(null), questionById = Object.create(null);
  lessons.forEach(function (l) {
    lessonById[l.id] = l;
    l.questions.forEach(function (q) { questionById[q.id] = q; });
  });
  var KEY = 'mahjong-american-v1';
  function emptyProgress() { return { version: 1, solved: [], review: [], lastLessonId: null }; }
  function normalizeProgress(raw) {
    var p = emptyProgress();
    if (!raw || typeof raw !== 'object' || Array.isArray(raw) || raw.version !== 1) return p;
    ['solved', 'review'].forEach(function (name) {
      if (Array.isArray(raw[name])) raw[name].forEach(function (id) {
        if (typeof id === 'string' && questionById[id] && p[name].indexOf(id) < 0) p[name].push(id);
      });
    });
    if (typeof raw.lastLessonId === 'string' && lessonById[raw.lastLessonId]) p.lastLessonId = raw.lastLessonId;
    return p;
  }
  function sameTileMultiset(a, b) {
    return a.slice().sort().join('|') === b.slice().sort().join('|');
  }
  function grade(q, answer) {
    if (!q || !questionById[q.id]) return { correct: false, reason: 'invalid' };
    if (answer === null || answer === undefined) return { correct: false, reason: 'incomplete' };
    if (q.type === 'choice') {
      if (typeof answer !== 'string' || !q.options.some(function (o) { return o.id === answer; })) return { correct: false, reason: 'invalid' };
      return { correct: answer === q.answerId, reason: answer === q.answerId ? 'correct' : 'wrong' };
    }
    if (q.type === 'tile-pick') {
      if (!Array.isArray(answer) || answer.length !== q.selectionCount) return { correct: false, reason: 'incomplete' };
      if (new Set(answer).size !== answer.length || !answer.every(function (i) { return Number.isInteger(i) && i >= 0 && i < q.tiles.length; })) return { correct: false, reason: 'invalid' };
      var picked = answer.map(function (i) { return q.tiles[i]; });
      var expected = q.answerIndexes.map(function (i) { return q.tiles[i]; });
      var ok = sameTileMultiset(picked, expected);
      return { correct: ok, reason: ok ? 'correct' : 'wrong' };
    }
    if (q.type === 'sequence') {
      if (!Array.isArray(answer) || answer.length !== q.answerOrder.length) return { correct: false, reason: 'incomplete' };
      if (new Set(answer).size !== answer.length || !answer.every(function (id) { return q.options.some(function (o) { return o.id === id; }); })) return { correct: false, reason: 'invalid' };
      var right = answer.every(function (id, i) { return id === q.answerOrder[i]; });
      return { correct: right, reason: right ? 'correct' : 'wrong' };
    }
    return { correct: false, reason: 'invalid' };
  }
  function recordAnswer(raw, questionId, answer, updateCursor) {
    var p = normalizeProgress(raw), q = questionById[questionId], result = grade(q, answer);
    if (result.reason !== 'correct' && result.reason !== 'wrong') return { progress: p, result: result };
    p.solved = p.solved.filter(function (id) { return id !== questionId; });
    p.review = p.review.filter(function (id) { return id !== questionId; });
    if (result.correct) p.solved.push(questionId);
    else p.review.push(questionId);
    if (updateCursor !== false) {
      var lesson = lessons.find(function (l) { return l.questions.some(function (item) { return item.id === questionId; }); });
      if (lesson) p.lastLessonId = lesson.id;
    }
    return { progress: p, result: result };
  }
  function complete(raw, lessonId) {
    var l = lessonById[lessonId], p = normalizeProgress(raw);
    return !!l && l.questions.every(function (q) { return p.solved.indexOf(q.id) >= 0; });
  }
  function following(lessonId) {
    var i = lessons.findIndex(function (l) { return l.id === lessonId; });
    return i >= 0 && i + 1 < lessons.length ? lessons[i + 1] : null;
  }
  function firstIncomplete(raw) {
    return lessons.find(function (l) { return !complete(raw, l.id); }) || null;
  }
  var api = { KEY: KEY, chapters: chapters, lessons: lessons, lessonById: lessonById, questionById: questionById,
    emptyProgress: emptyProgress, normalizeProgress: normalizeProgress, grade: grade, recordAnswer: recordAnswer,
    complete: complete, following: following, firstIncomplete: firstIncomplete };
  g.MahjongAmericanEngine = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof globalThis !== 'undefined' ? globalThis : window);
