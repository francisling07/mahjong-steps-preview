const assert=require('node:assert/strict');
const D=require('./bridge-content-source.cjs'),S=require('./sichuan-score.js');
const chapters=D.sichuan;
const ids=new Set();
for(const c of chapters){
  assert(c.id&&c.title.zh&&c.title.en&&Array.isArray(c.lessons));
  for(const l of c.lessons){
    assert(l.id&&l.title.zh&&l.title.en&&l.intro.zh&&l.intro.en);
    for(const q of l.questions){
      assert(!ids.has(q.id),'duplicate '+q.id);ids.add(q.id);
      assert(q.prompt.zh&&q.prompt.en&&q.explanation.zh&&q.explanation.en,q.id);
      if(q.type==='choice'){assert(q.options.some(o=>o.id===q.answer),q.id);assert(new Set(q.options.map(o=>o.id)).size===q.options.length,q.id);for(const o of q.options)assert(o.label.zh&&o.label.en,q.id);}
      if(q.type==='score'||q.type==='kongScore'){const r=q.type==='score'?S.score(q.scoreInput):S.kongPayment(q.kongInput);assert(r,q.id);assert(Number.isFinite(r[q.target]),q.id);assert(q.values.includes(r[q.target]),q.id);assert(new Set(q.values).size===q.values.length,q.id);}
      if(q.type==='round')assert(D.rounds.some(r=>r.id===q.scenarioId),q.id+' missing round');
    }
  }
}
const c9=chapters.find(c=>c.id==='sc-9');
assert(c9,'chapter 9 missing');assert.equal(c9.lessons.length,4);
assert.deepEqual(c9.lessons.map(l=>l.questions.length),[3,3,3,3]);
for(const id of ['sc-10','sc-11']){const c=chapters.find(x=>x.id===id);if(c){assert.equal(c.lessons.length,3);assert.deepEqual(c.lessons.map(l=>l.questions.length),[3,3,3]);}}
const c12=chapters.find(c=>c.id==='sc-12');if(c12){assert.equal(c12.lessons.length,5);assert(c12.lessons.every(l=>l.questions.length===3));}
const expected=Object.fromEntries(process.argv.slice(2).map(arg=>{const m=/^--(chapters|lessons|questions)=(\d+)$/.exec(arg);assert(m,'bad argument '+arg);return [m[1],Number(m[2])]}));
const counts={chapters:chapters.length,lessons:chapters.flatMap(c=>c.lessons).length,questions:chapters.flatMap(c=>c.lessons).flatMap(l=>l.questions).length};
for(const [key,value] of Object.entries(expected))assert.equal(counts[key],value,key);
console.log('PASS Sichuan content '+JSON.stringify(counts)+'; unique IDs, bilingual content, all scoring choices validated');
