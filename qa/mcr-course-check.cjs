'use strict';
const assert=require('node:assert/strict');
const D=require('../course/mcr-data.js');
const F=require('../course/mcr-fans.js');
const E=require('../course/mcr-engine.js');
assert.equal(D.chapters.length,9);
assert.deepEqual(D.chapters.map(x=>x.lessons.length),Array(9).fill(4));
assert.equal(E.lessons.length,36);
assert.equal(Object.keys(E.questionById).length,108);
assert(E.questionById['mcr-9-4-c'].options.find(o=>o.id===E.questionById['mcr-9-4-c'].answerId).label.zh.includes('20'), 'two concealed wind pungs add two points');
for(const l of E.chapters[8].lessons)for(const q of l.questions){
  assert.equal(q.type,'choice');
  assert.equal(q.tiles.length,14,`${q.id} needs 14 tiles`);
  const counts={};
  for(const t of q.tiles){
    assert(/^[mps][1-9]$|^z[1-7]$/.test(t),`${q.id} tile ${t}`);
    counts[t]=(counts[t]||0)+1;assert(counts[t]<=4,q.id);
  }
}
const answerPositions=[0,0,0];
for(const q of Object.values(E.questionById))if(q.type==='choice')answerPositions['abc'.indexOf(q.answerId)]++;
assert(answerPositions.every(n=>n>=20),`unbalanced choices: ${answerPositions}`);
assert.equal(F.fans.length,81);
assert.equal(Object.keys(E.fanQuestions).length,81);
assert.equal(Object.keys(E.fanValueQuestions).length,81);
const ids=new Set();
for(const l of E.lessons){
  assert(!ids.has(l.id));ids.add(l.id);
  for(const lang of ['zh','tw','en'])assert(l.title[lang]&&l.intro[lang],`${l.id} ${lang}`);
  assert.equal(l.questions.length,3);
  for(const q of l.questions){
    assert(!ids.has(q.id));ids.add(q.id);
    for(const lang of ['zh','tw','en'])assert(q.prompt[lang]&&q.explanation[lang],`${q.id} ${lang}`);
    assert(q.tiles.every(t=>/^[mps][1-9]$|^z[1-7]$|^f[1-8]$/.test(t)),q.id);
    if(q.type==='choice'){
      assert.equal(q.options.length,3);assert(q.options.some(x=>x.id===q.answerId));
      assert(E.grade(q,q.answerId).correct,q.id);
      assert(!E.grade(q,q.options.find(x=>x.id!==q.answerId).id).correct,q.id);
    }else{
      assert.equal(q.type,'tile-pick');assert.equal(q.selectionCount,1);
      assert(q.answerIndexes.every(i=>i>=0&&i<q.tiles.length),q.id);
      assert(E.grade(q,q.answerIndexes).correct,q.id);
    }
  }
}
for(const f of F.fans){
  const q=E.fanQuestions[`mcr-fan-${f.no}`];
  assert(q&&E.grade(q,q.answerId).correct);
  assert(!E.grade(q,q.options.find(x=>x.id!==q.answerId).id).correct);
  const v=E.fanValueQuestions[`mcr-fan-${f.no}-value`];
  assert(v&&E.grade(v,v.answerId).correct);
  assert(!E.grade(v,v.options.find(x=>x.id!==v.answerId).id).correct);
}
let p=E.emptyProgress();
const first=E.lessons[0];
for(const q of first.questions)p=E.recordAnswer(p,q.id,q.type==='choice'?q.answerId:q.answerIndexes).progress;
assert(E.complete(p,first.id));assert.equal(E.following(first.id).id,'mcr-1-2');
assert.equal(E.firstIncomplete(p).id,'mcr-1-2');
const wrong=E.lessons[1].questions[0];
p=E.recordAnswer(p,wrong.id,wrong.options.find(o=>o.id!==wrong.answerId).id).progress;
assert(p.review.includes(wrong.id));
p=E.recordAnswer(p,wrong.id,wrong.answerId).progress;
assert(!p.review.includes(wrong.id)&&p.solved.includes(wrong.id));
assert.deepEqual(E.normalizeProgress({version:1,solved:['bad',first.questions[0].id,first.questions[0].id]}).solved,[first.questions[0].id]);
const mem=new Map();
global.localStorage={getItem:k=>mem.get(k)||null,setItem:(k,v)=>mem.set(k,v),removeItem:k=>mem.delete(k)};
global.confirm=()=>true;
global.MahjongMCREngine=E;global.MahjongMCRFans=F;global.MahjongTileArt={svg:id=>`<svg data-tile="${id}"></svg>`};
require('../course/mcr-ui.js');
const UI=global.MahjongMCRUI;
for(const lang of ['zh','tw','en']){
  UI.setLang(lang);UI.enter();assert(UI.html().includes('mcr-9-4'));
  UI.dispatch({dataset:{mcrReference:''}});assert.equal((UI.html().match(/<details>/g)||[]).length,81);
  UI.dispatch({dataset:{mcrFanMap:''}});assert.equal((UI.html().match(/class="mcr-fan-card"/g)||[]).length,81);
  UI.dispatch({dataset:{mcrOpen:'mcr-1-1'}});assert(UI.html().includes('data-mcr-choice'));
  UI.dispatch({dataset:{mcrMap:''}});assert(UI.html().includes('data-mcr-open="mcr-1-4"'));
}
UI.setLang('zh');UI.enter();UI.dispatch({dataset:{mcrOpen:'mcr-1-1'}});
const q=E.lessons[0].questions[0];
UI.dispatch({dataset:{mcrChoice:q.options.find(o=>o.id!==q.answerId).id}});
UI.dispatch({dataset:{mcrSubmit:''}});assert(UI.html().includes('再试一次'));
UI.dispatch({dataset:{mcrMap:''}});UI.dispatch({dataset:{mcrReview:'course'}});assert(UI.html().includes(q.prompt.zh));
UI.dispatch({dataset:{mcrChoice:q.answerId}});UI.dispatch({dataset:{mcrSubmit:''}});
assert(UI.html().includes('下一题'));
UI.dispatch({dataset:{mcrFan:'16'}});
const fanName=E.fanQuestions['mcr-fan-16'];
UI.dispatch({dataset:{mcrChoice:fanName.answerId}});UI.dispatch({dataset:{mcrSubmit:''}});UI.dispatch({dataset:{mcrNext:''}});
assert(UI.html().includes('一色四步高是多少分'));
const fanValue=E.fanValueQuestions['mcr-fan-16-value'];
UI.dispatch({dataset:{mcrChoice:fanValue.answerId}});UI.dispatch({dataset:{mcrSubmit:''}});
assert(E.normalizeProgress(JSON.parse(mem.get(E.KEY))).fanValueSolved.includes(fanValue.id));
UI.dispatch({dataset:{mcrReset:''}});
UI.dispatch({dataset:{mcrOpen:'mcr-9-4'}});
for(const item of E.lessonById['mcr-9-4'].questions){
  if(item.type==='choice')UI.dispatch({dataset:{mcrChoice:item.answerId}});
  else for(const i of item.answerIndexes)UI.dispatch({dataset:{mcrPick:String(i)}});
  UI.dispatch({dataset:{mcrSubmit:''}});
  UI.dispatch({dataset:{mcrNext:''}});
}
UI.dispatch({dataset:{mcrMap:''}});
assert(UI.html().includes('data-mcr-continue'), 'continue must remain after the last lesson when earlier lessons are unfinished');
UI.dispatch({dataset:{mcrContinue:''}});
assert.equal(UI.getState().lessonId,'mcr-1-1');
console.log('MCR course QA passed: 9 chapters, 36 lessons, 108 questions, 162 fan drills, 3 languages, review and progress.');
