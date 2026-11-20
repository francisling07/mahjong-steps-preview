const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const data = require('../course/data.js');
const answer = require('./course-answers.cjs');

const root = path.join(__dirname, '..');
const lessons = data.chapters.flatMap(chapter => chapter.lessons);
const byId = Object.fromEntries(lessons.map(lesson => [lesson.id, lesson]));
const storage = new Map();
const key = 'mahjong-steps-course-v1';
const current = byId['hk-4-1'];
const reviewQuestion = byId['hk-1-2'].questions[0];
storage.set(key, JSON.stringify({
  version: 1,
  solved: current.questions.map(question => question.id),
  review: [reviewQuestion.id],
  lastLessonId: current.id
}));

const localStorage = {
  getItem(k) { return storage.get(k) ?? null; },
  setItem(k, v) { storage.set(k, String(v)); },
  removeItem(k) { storage.delete(k); }
};
const context = vm.createContext({ localStorage, confirm: () => true, console });
context.window = context;
for (const file of [
  'meld.js', 'tile-art.js', 'course/data.js', 'course/hk-rules.js',
  'course/round-data.js', 'course/round-engine.js', 'course/reference-data.js',
  'course/rulebook-data.js', 'course/engine.js', 'course/extras-ui.js', 'course/ui.js'
]) vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });

const ui = context.MahjongCourseUI;
const dispatch = dataset => ui.dispatch({ dataset });
const saved = () => JSON.parse(storage.get(key));
ui.enter();
assert(ui.html().includes(`继续学习：${byId['hk-4-2'].title.zh}`));
dispatch({ courseContinue: '' });
assert(ui.html().includes(byId['hk-4-2'].title.zh));
assert.equal(saved().lastLessonId, 'hk-4-2');

const lesson = byId['hk-4-2'];
for (const question of lesson.questions) {
  dispatch({ courseOption: answer(question) });
  dispatch({ courseSubmit: '' });
  dispatch({ courseNext: '' });
}
assert(ui.html().includes('data-course-open="hk-4-3"'));
assert(!ui.html().includes('data-course-open="hk-1-1"'));
dispatch({ courseMap: '' });
assert(ui.html().includes(`继续学习：${byId['hk-4-3'].title.zh}`));

dispatch({ courseReview: '' });
dispatch({ courseOption: reviewQuestion.options.find(option => option.id !== reviewQuestion.answerId).id });
dispatch({ courseSubmit: '' });
assert.equal(saved().lastLessonId, 'hk-4-2');
dispatch({ courseOption: answer(reviewQuestion) });
dispatch({ courseSubmit: '' });
dispatch({ courseNext: '' });
assert.equal(saved().lastLessonId, 'hk-4-2');
dispatch({ courseMap: '' });
assert(ui.html().includes(`继续学习：${byId['hk-4-3'].title.zh}`));

dispatch({ courseOpen: lessons.at(-1).id });
dispatch({ courseBegin: '' });
for (const question of lessons.at(-1).questions) {
  if (question.type === 'round') {
    const scenario = require('../course/round-data.js').find(item => item.id === question.scenarioId);
    for (const step of scenario.steps) {
      if (step.expected.type === 'discard') {
        dispatch({ courseRoundPick: String(step.scene.hand.indexOf(step.expected.tile)) });
      }
      dispatch({ courseRoundAction: step.expected.type });
    }
  } else {
    dispatch({ courseOption: answer(question) });
    dispatch({ courseSubmit: '' });
  }
  dispatch({ courseNext: '' });
}
assert(!ui.html().includes('data-course-open='));
assert(!ui.html().includes('八章四十课全部完成'));
assert(ui.html().includes('已到课程末尾'));
dispatch({ courseMap: '' });
assert(!ui.html().includes('data-course-continue'));
console.log('PASS continuation follows current Hong Kong lesson; review preserves cursor; last lesson has no false completion link');
