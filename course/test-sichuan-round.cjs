const assert=require('node:assert/strict');
const D=require('./bridge-data.js'),E=require('./sichuan-round-engine.js'),S=require('./sichuan-rules.js'),Score=require('./sichuan-score.js');
assert.equal(D.rounds.length,11);
for(const r of D.rounds){
  let state=E.start(r.id);assert.deepEqual(state,{scenarioId:r.id,cursor:0,history:[]});
  assert.equal(E.current(state).total,3);
  for(let i=0;i<r.steps.length;i++){
    const step=r.steps[i],before=structuredClone(state),wrong=step.options.find(o=>o.id!==step.correct).id;
    assert.equal(E.advance(state,wrong).correct,false,r.id+' wrong step '+i);
    assert.deepEqual(state,before,'input state mutated');
    assert.equal(E.current(state).cursor,i);
    const out=E.advance(state,step.correct);assert.equal(out.correct,true,r.id+' step '+i);
    state=out.state;assert.equal(state.cursor,i+1);
    assert.equal(state.history[i],step.correct);
    const count={};for(const t of step.scene.hand){count[t]=(count[t]||0)+1;assert(count[t]<=4,r.id+' fifth '+t);}
    assert([13,14].includes(step.scene.hand.length),r.id+' impossible hand length');
  }
  const end=E.current(state);assert(end.done,r.id);assert.equal(E.verify(r.id,r.steps.map(s=>s.correct)),true);
  assert.equal(E.verify(r.id,r.steps.map((s,i)=>i===0?s.options.find(o=>o.id!==s.correct).id:s.correct)),false);
  assert.deepEqual(end.score,r.final.scoreInput?Score.score(r.final.scoreInput):null);
  assert.deepEqual(end.kongPayment,r.final.kongInput?Score.kongPayment(r.final.kongInput):null);
  assert.equal(E.advance(state,'anything').correct,false);
}
assert.equal(E.start('nonexistent'),null);
for(const bad of [null,{},[],{scenarioId:'clear-win',cursor:2,history:[]},{scenarioId:'clear-win',cursor:1,history:['wrong']},{scenarioId:'clear-win',cursor:4,history:['m','s5','win','extra']}])assert.equal(E.current(bad),null);
assert.equal(E.verify('clear-win',null),false);
assert.equal(E.advance(null,'m').correct,false);
const win=D.rounds.find(r=>r.id==='clear-win').steps[2].scene.hand;
assert(S.isWinning(win,[],'m'));
const pair=D.rounds.find(r=>r.id==='seven-pairs-win').steps[2].scene.hand;
assert(S.isWinning(pair,[],'m'));
const pung=D.rounds.find(r=>r.id==='pung-win').steps[2].scene;
assert.equal(pung.hand.length,13);assert(S.isWinning([...pung.hand,pung.lastDiscard],[],'m'));
for(const id of ['golden-hook-win','double-discard-win','kong-discard-transfer','rob-kong-win','last-tile-win']){
  const r=D.rounds.find(x=>x.id===id);assert(r,id);assert(S.isWinning(r.steps[2].scene.hand,[],'m'),id+' final hand');
}
assert.equal(Score.score(D.rounds.find(r=>r.id==='golden-hook-win').final.scoreInput).total,4);
assert.equal(Score.score(D.rounds.find(r=>r.id==='kong-discard-transfer').final.scoreInput).total,2);
assert.equal(Score.score(D.rounds.find(r=>r.id==='rob-kong-win').final.scoreInput).total,2);
assert.equal(Score.score(D.rounds.find(r=>r.id==='last-tile-win').final.scoreInput).total,9);
assert.deepEqual(D.rounds.find(r=>r.id==='double-discard-win').steps[1].scene.active,['east','north']);
assert(D.rounds.find(r=>r.id==='kong-discard-transfer').final.description.zh.includes('共收8'));
console.log('PASS eleven Sichuan guided rounds: step integrity, scoring, tile bounds, winning shapes and invalid input');
