const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const E = require('../course/american-engine.js');
const ids = new Set(), tileRe = /^(?:[mps][1-9]|z[1-7]|f[1-8]|j1)$/;
const langs = ['zh','tw','en'];
const text = (v,where) => langs.forEach(k => assert(typeof v?.[k]==='string' && v[k].trim(),where+':'+k));
assert.equal(E.chapters.length,9);
assert.equal(E.lessons.length,36);
assert.equal(Object.keys(E.questionById).length,108);

for (const [ci,chapter] of E.chapters.entries()) {
  assert.equal(chapter.id,`am-${ci+1}`);
  assert.equal(chapter.lessons.length,4);
  text(chapter.title,chapter.id+'.title'); text(chapter.desc,chapter.id+'.desc');
  for (const [li,lesson] of chapter.lessons.entries()) {
    assert.equal(lesson.id,`am-${ci+1}-${li+1}`);
    assert.equal(lesson.questions.length,3);
    text(lesson.title,lesson.id+'.title'); text(lesson.intro,lesson.id+'.intro');
    let visible=0;
    for (const [qi,q] of lesson.questions.entries()) {
      assert.equal(q.id,`${lesson.id}-${'abc'[qi]}`);
      assert(!ids.has(q.id),q.id); ids.add(q.id);
      text(q.prompt,q.id+'.prompt'); text(q.explanation,q.id+'.explanation');
      if(q.context)text(q.context,q.id+'.context');
      if(q.tiles){visible++;const counts={};for(const tile of q.tiles){assert(tileRe.test(tile),q.id+':'+tile);counts[tile]=(counts[tile]||0)+1;assert(counts[tile]<=(tile==='j1'?8:4),q.id+':'+tile);}}
      if(q.type==='choice'){
        assert.equal(q.options.length,3,q.id);assert.deepEqual(q.options.map(o=>o.id).sort(),['a','b','c']);
        assert(q.options.some(o=>o.id===q.answerId),q.id);
        q.options.forEach(o=>{text(o.label,q.id+'.option');if(o.tile)assert(tileRe.test(o.tile));});
        assert(E.grade(q,q.answerId).correct,q.id);
        assert.equal(E.grade(q,q.options.find(o=>o.id!==q.answerId).id).reason,'wrong',q.id);
      }else if(q.type==='tile-pick'){
        assert(q.tiles.length>=5&&q.tiles.length<=14,q.id);assert([1,3].includes(q.selectionCount),q.id);
        assert.equal(q.answerIndexes.length,q.selectionCount,q.id);
        assert.equal(new Set(q.answerIndexes).size,q.selectionCount,q.id);
        assert(q.answerIndexes.every(i=>Number.isInteger(i)&&i>=0&&i<q.tiles.length),q.id);
        assert(E.grade(q,q.answerIndexes).correct,q.id);
        assert.equal(E.grade(q,[]).reason,'incomplete',q.id);
      }else if(q.type==='sequence'){
        assert.equal(q.options.length,3,q.id);q.options.forEach(o=>text(o.label,q.id+'.option'));
        assert.equal(new Set(q.answerOrder).size,3,q.id);
        assert(q.answerOrder.every(id=>q.options.some(o=>o.id===id)),q.id);
        assert(E.grade(q,q.answerOrder).correct,q.id);
        assert.equal(E.grade(q,q.answerOrder.slice().reverse()).reason,'wrong',q.id);
      }else assert.fail(q.id+': unsupported type '+q.type);
    }
    assert(visible>=2,lesson.id+' needs visible tiles in two questions');
  }
}
assert.equal(E.grade(E.questionById['am-1-1-c'],[0,0,1]).reason,'invalid');
assert.equal(E.grade(null,'a').reason,'invalid');
assert.equal(E.following('am-1-4').id,'am-2-1');
assert.equal(E.following('am-9-4'),null);

let p=E.emptyProgress();
for(const l of E.lessons)for(const q of l.questions){
  const a=q.type==='choice'?q.answerId:q.type==='sequence'?q.answerOrder:q.answerIndexes;
  const r=E.recordAnswer(p,q.id,a,true);assert(r.result.correct,q.id);p=r.progress;
}
assert.equal(p.solved.length,108);assert(E.lessons.every(l=>E.complete(p,l.id)));
assert.equal(E.firstIncomplete(p),null);
assert.equal(E.normalizeProgress({version:99,solved:['am-1-1-a']}).solved.length,0);

const root=path.join(__dirname,'..');
function boot(initial) {
  const store=new Map(initial?[[E.KEY,JSON.stringify(initial)]]:[]);
  const localStorage={getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,String(v)),removeItem:k=>store.delete(k)};
  const context=vm.createContext({localStorage,confirm:()=>true,console});context.window=context;
  for(const file of ['tile-art.js','course/american-part1.js','course/american-part2.js','course/american-final-data.js','course/american-engine.js','course/american-ui.js'])
    vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
  return {UI:context.MahjongAmericanUI,store};
}
function bootBlocked() {
  const localStorage={getItem(){throw Error('blocked')},setItem(){throw Error('blocked')},removeItem(){throw Error('blocked')}};
  const context=vm.createContext({localStorage,confirm:()=>true,console});context.window=context;
  for(const file of ['tile-art.js','course/american-part1.js','course/american-part2.js','course/american-final-data.js','course/american-engine.js','course/american-ui.js'])
    vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
  return context.MahjongAmericanUI;
}
const old=E.emptyProgress();old.lastLessonId='am-5-2';old.solved=E.lessonById['am-5-2'].questions.map(q=>q.id);old.review=['am-1-1-a'];
const {UI,store}=boot(old);UI.enter();
assert(UI.html().includes(E.lessonById['am-5-3'].title.zh));
UI.dispatch({dataset:{americanContinue:''}});
assert(UI.html().includes(E.lessonById['am-5-3'].questions[0].prompt.zh));
const current=E.lessonById['am-5-3'];
for(const q of current.questions){
  if(q.type==='choice')UI.dispatch({dataset:{americanChoice:q.answerId}});
  else if(q.type==='tile-pick')for(const i of q.answerIndexes)UI.dispatch({dataset:{americanPick:String(i)}});
  else for(const id of q.answerOrder)UI.dispatch({dataset:{americanOrder:id}});
  UI.dispatch({dataset:{americanSubmit:''}});assert(UI.html().includes('答对了'),q.id);
  UI.dispatch({dataset:{americanNext:''}});
}
assert(UI.html().includes('data-american-open="am-5-4"'));
UI.dispatch({dataset:{americanMap:''}});assert(UI.html().includes(E.lessonById['am-5-4'].title.zh));
UI.dispatch({dataset:{americanReview:''}});UI.dispatch({dataset:{americanChoice:E.questionById['am-1-1-a'].answerId}});
UI.dispatch({dataset:{americanSubmit:''}});
assert.equal(JSON.parse(store.get(E.KEY)).lastLessonId,'am-5-3');
UI.setLang('en');assert(UI.html().includes('Correct'));
const blocked=bootBlocked();blocked.enter();assert(blocked.html().includes('course-warn'));
blocked.dispatch({dataset:{americanOpen:'am-1-1'}});
blocked.dispatch({dataset:{americanChoice:E.questionById['am-1-1-a'].answerId}});
blocked.dispatch({dataset:{americanSubmit:''}});assert(blocked.html().includes('答对了'));
console.log('PASS American course: 9 chapters, 36 lessons, 108 valid trilingual exercises; progress, review and sequential continuation');
