const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),data=require('../course/data.js'),rounds=require('../course/round-data.js'),answer=require('./course-answers.cjs');
const lessons=data.chapters.flatMap(c=>c.lessons),store=new Map();
function boot(blocked=false){
  const storage=blocked?{getItem(){throw Error('blocked')},setItem(){throw Error('blocked')},removeItem(){throw Error('blocked')}}:{getItem(k){return store.has(k)?store.get(k):null},setItem(k,v){store.set(k,String(v))},removeItem(k){store.delete(k)}};
  const ctx=vm.createContext({localStorage:storage,confirm(){return true},console,window:null});ctx.window=ctx;
  for(const file of ['meld.js','tile-art.js','course/data.js','course/hk-rules.js','course/round-data.js','course/round-engine.js','course/reference-data.js','course/rulebook-data.js','course/engine.js','course/extras-ui.js','course/ui.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),ctx,{filename:file});
  return ctx.MahjongCourseUI;
}
const U=boot(),action=d=>{const r=U.dispatch({dataset:d});U.html();return r;};
U.enter();let html=U.html();assert.equal((html.match(/data-course-open=/g)||[]).length,40);assert.equal((html.match(/class="course-chapter"/g)||[]).length,8);assert(html.includes('133'));assert(html.includes('data-course-reference'));
for(const l of lessons){action({courseOpen:l.id});assert(U.html().includes(l.title.zh));action({courseBegin:''});for(const q of l.questions){html=U.html();assert(html.includes(q.prompt.zh),q.id);if(q.type==='faan'){assert(html.includes('class="course-hand"'),q.id);assert(html.includes(q.context.zh),q.id);}if(q.type==='round'){
    const sc=rounds.find(x=>x.id===q.scenarioId);assert(html.includes('data-round-cursor="0"'),q.id);
    for(let i=0;i<sc.steps.length;i++){
      const step=sc.steps[i],ex=step.expected;
      if(ex.type==='discard')action({courseRoundPick:String(step.scene.hand.indexOf(ex.tile))});
      action({courseRoundAction:ex.type});
      assert(U.html().includes(step.explanation.zh),q.id+' step '+i);
    }
    html=U.html();assert(html.includes('course-round-result'),q.id);
  }else{
    const a=answer(q);
    if(q.type==='pick')for(const i of a)action({coursePick:String(i)});
    else if(q.type==='waits')for(const id of a)action({courseWait:id});
    else action({courseOption:a});
    action({courseSubmit:''});
  }
  html=U.html();assert(html.includes('data-course-next'),q.id);assert(html.includes('course-feedback'),q.id);action({courseNext:''});}
  assert(U.html().includes('本课完成'),l.id);action({courseMap:''});}
const progress=JSON.parse(store.get('mahjong-steps-course-v1'));assert.equal(progress.solved.length,133);assert.equal(progress.review.length,0);
action({courseRules:''});html=U.html();assert.equal((html.match(/data-rule-id=/g)||[]).length,46);assert(html.includes('轮庄与局数'));for(const [lang,title] of [['tw','輪莊與局數'],['en','Dealer rotation and hand count']]){U.setLang(lang);assert(U.html().includes(title));}U.setLang('zh');action({courseMap:''});action({courseReference:''});html=U.html();assert.equal((html.match(/data-reference-id=/g)||[]).length,30);assert(html.includes('32'));action({courseMethod:'selfDraw'});assert(U.html().includes('48'));action({courseFan:'6'});action({courseMethod:'selfDraw'});assert(U.html().includes('192'));
const full=store.get('mahjong-steps-course-v1');
store.set('mahjong-steps-course-v1',JSON.stringify({version:1,solved:lessons.slice(0,9).flatMap(l=>l.questions.map(q=>q.id)),review:[],lastLessonId:'hk-3-3'}));
const M=boot();M.enter();assert(M.html().includes('27 / 133'));M.dispatch({dataset:{courseOpen:'hk-8-2'}});M.dispatch({dataset:{courseBegin:''}});const chowLesson=lessons.find(l=>l.id==='hk-8-2');for(const q of chowLesson.questions.slice(0,2)){M.dispatch({dataset:{courseOption:answer(q)}});M.dispatch({dataset:{courseSubmit:''}});M.dispatch({dataset:{courseNext:''}});}
assert(M.html().includes('data-round-cursor="0"'));M.dispatch({dataset:{courseRoundAction:'win'}});assert(JSON.parse(store.get('mahjong-steps-course-v1')).review.includes('hk-8-2-c'));assert(M.html().includes('data-round-cursor="0"'));assert(M.html().includes('course-route-message'));M.dispatch({dataset:{courseRoundHint:''}});M.dispatch({dataset:{courseRoundAction:'deal'}});M.setLang('en');assert(M.html().includes('data-round-cursor="1"'));M.dispatch({dataset:{courseRoundRestart:''}});assert(M.html().includes('data-round-cursor="0"'));assert(!JSON.parse(store.get('mahjong-steps-course-v1')).solved.includes('hk-8-2-c'));
const chowRound=rounds.find(s=>s.id==='chow');for(const step of chowRound.steps){if(step.expected.type==='discard')M.dispatch({dataset:{courseRoundPick:String(step.scene.hand.indexOf(step.expected.tile))}});M.dispatch({dataset:{courseRoundAction:step.expected.type}});}assert(M.html().includes('course-round-result'));assert(JSON.parse(store.get('mahjong-steps-course-v1')).solved.includes('hk-8-2-c'));assert(!JSON.parse(store.get('mahjong-steps-course-v1')).review.includes('hk-8-2-c'));store.set('mahjong-steps-course-v1',full);
for(const lang of ['tw','en','zh']){U.setLang(lang);html=U.html();assert(html.includes(lang==='en'?'Faan & points reference':lang==='tw'?'番種與積分速查':'番种与积分速查'));}
action({courseMap:''});U.setLang('en');assert(U.html().includes('40 lessons'));assert(U.html().includes('133'));
const B=boot(true);B.enter();assert(B.html().includes('course-warn'));B.dispatch({dataset:{courseOpen:'hk-1-1'}});B.dispatch({dataset:{courseBegin:''}});B.dispatch({dataset:{courseOption:'a'}});B.dispatch({dataset:{courseSubmit:''}});assert(B.html().includes('答对了'));
console.log('PASS UI VM: all 133 activities / 40 lessons, 12 interactive rounds, 30 reference entries, 3 languages, points calculator, storage fallback');
