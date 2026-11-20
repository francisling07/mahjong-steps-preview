const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),D=require('../course/bridge-data.js'),S=require('../course/sichuan-rules.js'),Score=require('../course/sichuan-score.js');
const store=new Map();
function boot(){
  const localStorage={getItem(k){return store.has(k)?store.get(k):null},setItem(k,v){store.set(k,String(v))},removeItem(k){store.delete(k)}};
  const ctx=vm.createContext({localStorage,console,window:null});ctx.window=ctx;
  for(const f of ['meld.js','tile-art.js','course/hk-rules.js','course/sichuan-rules.js','course/bridge-data.js','course/sichuan-score.js','course/sichuan-round-engine.js','course/bridge-ui.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx,{filename:f});
  return ctx.MahjongBridgeUI;
}
function action(U,d){const r=U.dispatch({dataset:d});return [r,U.html()];}
function solve(U,q){
  let html=U.html();assert(html.includes(q.prompt.zh),q.id);
  if(q.type==='choice')action(U,{bridgeOption:q.answer});
  else if(q.type==='discard'){const tile=S.legalDiscards(q.hand,q.missingSuit)[0],i=q.hand.indexOf(tile);assert(i>=0,q.id);action(U,{bridgeDiscard:String(i)});}
  else if(q.type==='pick3'){const ids=q.hand.map((id,i)=>id[0]===q.targetSuit?i:null).filter(x=>x!==null).slice(0,3);assert.equal(ids.length,3);for(const i of ids)action(U,{bridgePick:String(i)});}
  else if(q.type==='waits'){const answer=S.waits(q.hand,[],q.missingSuit).filter(id=>q.candidates.includes(id));assert(answer.length>0,q.id);for(const id of answer)action(U,{bridgeWait:id});}
  else if(q.type==='battle'){for(const id of S.activeAfterWin(q.active,q.winner))action(U,{bridgeActive:id});}
  else if(q.type==='score'||q.type==='kongScore'){const out=q.type==='score'?Score.score(q.scoreInput):Score.kongPayment(q.kongInput);action(U,{bridgeOption:String(out[q.target])});}
  else if(q.type==='round'){
    const round=D.rounds.find(r=>r.id===q.scenarioId);assert(round,q.id);
    for(const step of round.steps){action(U,{bridgeStep:step.correct});}
    assert(U.html().includes('本局结算'),q.id);
  }
  else assert.fail(q.type);
  html=action(U,{bridgeSubmit:''})[1];assert(html.includes('✓ 答对了'),q.id);assert(html.includes(q.explanation.zh),q.id);action(U,{bridgeNext:''});
}

const U=boot();U.enter('sichuan',true);let html=U.html();assert(html.includes('data-bridge-open="base-1"'));assert(html.includes('data-bridge-open="sc-1-1"'));assert(html.includes('data-bridge-open="sc-x-1"'));assert(html.includes('2024'));
assert(S.isWinning(D.sichuan[0].lessons[2].questions[0].hand,[],'m'));
assert(S.isWinning(D.sichuan[0].lessons[2].questions[1].hand,[],'m'));
for(const q of D.sichuan.flatMap(c=>c.lessons).flatMap(l=>l.questions).filter(q=>q.type==='waits')){
  const waits=S.waits(q.hand,[],q.missingSuit);assert(waits.length>0,q.id);assert(waits.every(id=>q.candidates.includes(id)),q.id+' missing a real wait');
}
for(const l of [...D.foundation,...D.sichuan.flatMap(c=>c.lessons),D.optionalExchange]){
  html=action(U,{bridgeOpen:l.id})[1];assert(html.includes(l.title.zh));
  for(const q of l.questions)solve(U,q);
  assert(U.html().includes('本课完成'),l.id);action(U,{bridgeMap:''});
}
action(U,{bridgeOpen:'base-1'});action(U,{bridgeOption:'p3'});action(U,{bridgeSubmit:''});assert(U.html().includes('再试一次'));action(U,{bridgeMap:''});assert(U.html().includes('data-bridge-review'));action(U,{bridgeReview:''});assert(U.html().includes(D.foundation[0].questions[0].prompt.zh));action(U,{bridgeOption:'m3'});action(U,{bridgeSubmit:''});action(U,{bridgeNext:''});assert(U.html().includes('data-bridge-open="base-1"'));
let progress=JSON.parse(store.get('mahjong-bridge-v1'));assert.equal(progress.solved.length,138);assert.equal(progress.review.length,0);assert.equal(U.sharedDoneCount(),3);
U.setLang('tw');assert(U.html().includes('通用基礎'));U.setLang('en');assert(U.html().includes('Sichuan'));U.setLang('zh');
U.setExchange(false);assert(!U.html().includes('data-bridge-open="sc-x-1"'));assert(!action(U,{bridgeOpen:'sc-x-1'})[1].includes('同花色选牌'));
U.enter('foundation',false);assert(U.html().includes('data-bridge-to-sichuan'));assert(!U.html().includes('data-bridge-open="sc-1-1"'));action(U,{bridgeToSichuan:''});assert(U.html().includes('data-bridge-open="sc-1-1"'));
action(U,{bridgeOpen:'sc-8-1'});for(const q of D.sichuan[7].lessons[0].questions.slice(0,2))solve(U,q);
U.setLang('en');assert(U.html().includes(D.rounds[0].steps[0].prompt.en));action(U,{bridgeStep:D.rounds[0].steps[0].correct});assert(U.html().includes(D.rounds[0].steps[1].prompt.en));
U.setLang('tw');assert(U.html().includes(D.rounds[0].steps[1].prompt.tw));action(U,{bridgeMap:''});U.setLang('zh');

const fresh=boot();fresh.enter('sichuan',false);assert(fresh.html().includes('已掌握 135 / 135 项'));assert.equal(fresh.sharedDoneCount(),3);
store.delete('mahjong-bridge-v1');const hkIds=['hk-1-1','hk-1-2','hk-1-3','hk-2-1','hk-2-2','hk-2-3','hk-4-1','hk-4-2','hk-4-3'].flatMap(id=>['a','b','c'].map(s=>id+'-'+s));store.set('mahjong-steps-course-v1',JSON.stringify({version:1,solved:hkIds,review:[]}));
const bridge=boot();bridge.enter('sichuan',false);assert.equal(bridge.sharedDoneCount(),3);assert.equal((bridge.html().match(/从香港课程已学过/g)||[]).length,3);assert.equal(JSON.parse(store.get('mahjong-steps-course-v1')).solved.length,27);

const blocked=vm.createContext({localStorage:{getItem(){throw Error('blocked')},setItem(){throw Error('blocked')}},console,window:null});blocked.window=blocked;for(const f of ['meld.js','tile-art.js','course/hk-rules.js','course/sichuan-rules.js','course/bridge-data.js','course/sichuan-score.js','course/sichuan-round-engine.js','course/bridge-ui.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),blocked,{filename:f});blocked.MahjongBridgeUI.enter('sichuan',false);action(blocked.MahjongBridgeUI,{bridgeOpen:'base-1'});action(blocked.MahjongBridgeUI,{bridgeOption:'m3'});action(blocked.MahjongBridgeUI,{bridgeSubmit:''});assert(blocked.MahjongBridgeUI.html().includes('答对了'));
console.log('PASS shared foundation and Sichuan track: 138 activities, optional exchange, scoring, guided rounds, persistence, Hong Kong transfer, three languages and storage fallback');
