const assert=require('node:assert/strict');
const data=require('./data.js');
const meld=require('../meld.js');
const E=require('./engine.js');
const lessons=data.chapters.flatMap(c=>c.lessons),qs=lessons.flatMap(l=>l.questions);
assert.equal(lessons.length,40);assert.equal(qs.length,133);assert.equal(new Set(qs.map(q=>q.id)).size,133);
assert.equal(E.listLessons().length,40);assert.equal(E.getLesson(null),null);assert.equal(E.getLesson('unknown'),null);
const freeze=x=>JSON.parse(JSON.stringify(x));
const answer=require('../qa/course-answers.cjs');
let p=E.emptyProgress();assert.equal(E.nextLesson(p),'hk-1-1');
for(const l of lessons){assert.equal(E.lessonComplete(p,l.id),false);for(const q of l.questions){for(const v of [q.prompt,q.explanation,l.title,l.intro,l.example.caption])for(const lang of ['zh','tw','en'])assert.equal(typeof v[lang],'string');const before=freeze(q),ans=answer(q);assert.notEqual(ans,undefined,`answer exists ${q.id}`);assert.equal(E.grade(q,ans).correct,true,q.id);assert.deepEqual(q,before);const saved=freeze(p);const result=E.recordAnswer(p,q.id,ans);assert.deepEqual(p,saved);p=result.progress;assert.equal(result.result.reason,'correct');p=E.recordAnswer(p,q.id,ans).progress;}assert.equal(E.lessonComplete(p,l.id),true)}
assert.equal(p.solved.length,133);assert.equal(p.review.length,0);assert.equal(E.nextLesson(p),null);
const q=qs[0];const wrong=q.options.find(o=>o.id!==q.answerId).id;let r=E.recordAnswer(p,q.id,wrong);assert.equal(r.result.reason,'wrong');assert(!r.progress.solved.includes(q.id));assert(r.progress.review.includes(q.id));assert.equal(E.lessonComplete(r.progress,'hk-1-1'),false);r=E.recordAnswer(r.progress,q.id,q.answerId);assert(!r.progress.review.includes(q.id));assert.equal(r.progress.solved.length,133);
assert.equal(E.grade(q,null).reason,'incomplete');assert.equal(E.grade(q,undefined).reason,'incomplete');assert.equal(E.grade(q,42).reason,'invalid');assert.equal(E.grade(q,'unknown').reason,'invalid');
const pick=qs.find(q=>q.type==='pick');for(const v of [42,'0',[-1],[0,0],[0,1.5],[999],[0,1,2,3]])assert.equal(E.grade(pick,v).reason,'invalid');assert.equal(E.grade(pick,[]).reason,'incomplete');assert.equal(E.grade(pick,[0]).reason,'incomplete');assert.equal(E.grade(pick,[0,1,3]).reason,'wrong');
for(const v of [null,undefined,[],42,'bad',{version:2}])assert.deepEqual(E.normalizeProgress(v),E.emptyProgress());
const raw={version:1,solved:[q.id,q.id,'bad',null,3],review:[q.id,'bad',q.id],lastLessonId:'bad'};const old=freeze(raw);const clean=E.normalizeProgress(raw);assert.deepEqual(raw,old);assert.deepEqual(clean.solved,[q.id]);assert.deepEqual(clean.review,[q.id]);assert.equal(clean.lastLessonId,null);
for(const v of [null,[],{},42,{type:'unknown'},{type:'pick',tiles:['m1'],count:0,meld:'pair'}])assert.equal(E.grade(v,[]).reason,'invalid');
const broken={...pick,tiles:['m1','bad','m3','p1']};assert.equal(E.grade(broken,[0,1,2]).reason,'invalid');
assert.equal(E.grade({...qs.find(q=>q.type==='complete'),hand:[]},'0').reason,'invalid');
assert.equal(E.grade({...q,answerId:'missing'},q.options[0].id).reason,'invalid');
assert.equal(E.grade({...qs.find(q=>q.type==='complete'),options:[{id:'x',tile:'bad'}]},'x').reason,'invalid');
const saved=freeze(p);assert.deepEqual(E.recordAnswer(p,'bad','a').progress,saved);assert.deepEqual(E.recordAnswer(p,q.id,null).progress,saved);assert.deepEqual(p,saved);
assert.equal(E.lessonComplete(p,'bad'),false);
console.log('PASS: 40 lessons / 133 authored activities, all answers, retries, review, completion, persistence boundaries and immutability');

const waiting=qs.find(q=>q.type==='waits');const answers=answer(waiting);assert.equal(answers.length,2);assert.equal(E.grade(waiting,answers.slice(0,1)).correct,false);assert.equal(E.grade(waiting,answers.concat(answers[0])).reason,'invalid');assert.equal(E.grade(waiting,['bad']).reason,'invalid');assert.equal(E.grade(waiting,[]).reason,'incomplete');
const scoring=qs.find(q=>q.type==='score');assert.equal(E.grade({...scoring,fan:2},'1').reason,'invalid');assert.equal(E.grade(scoring,'0').reason,'wrong');
const round=qs.find(q=>q.type==='round');assert.equal(E.grade(round,true).reason,'invalid');assert.equal(E.grade(round,[]).reason,'incomplete');assert.equal(E.grade(round,answer(round).slice(0,-1)).reason,'incomplete');assert.equal(E.grade(round,[{type:'win'}]).reason,'wrong');assert.equal(E.grade(round,answer(round).concat({type:'win'})).reason,'invalid');
const oldProgress={version:1,solved:qs.slice(0,27).map(q=>q.id),review:[],lastLessonId:'hk-3-3'};assert.deepEqual(E.normalizeProgress(oldProgress),oldProgress);assert.equal(E.nextLesson(oldProgress),'hk-4-1');
assert.equal(E.followingLesson('hk-3-3'),'hk-4-1');assert.equal(E.followingLesson(lessons.at(-1).id),null);assert.equal(E.followingLesson('unknown'),null);
console.log('PASS new activity boundaries and original 27-question progress migration');

const f=qs.find(q=>q.type==='faan');assert.equal(E.grade(f,answer(f)).correct,true);assert.equal(E.grade({...f,hand:[]},answer(f)).reason,'invalid');
const high=qs.find(q=>q.type==='faan'&&q.breakdown.reduce((n,p)=>n+p.fan,0)>=10);assert.equal(E.grade(high,answer(high)).correct,true);
for(const chapter of data.chapters)for(const lesson of chapter.lessons){for(const lang of ['zh','tw','en']){assert(lesson.title[lang]&&lesson.intro[lang]&&lesson.example.caption[lang]);for(const item of lesson.questions){assert(item.prompt[lang]&&item.explanation[lang],item.id+':'+lang);if(item.context)assert(item.context[lang]);}}}
console.log('PASS faan cases, cap and complete lesson translations');
