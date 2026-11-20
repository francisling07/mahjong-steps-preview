'use strict';
const assert=require('node:assert/strict');
const Deck=require('../playground/deck.js');
const Engine=require('../playground/full-engine.js');
const Judges=require('../playground/judges.js');

const expected=Deck.tilesFor('hk').sort();
const stats={hands:120,won:0,drawn:0,selfDraw:0,discardWin:0,botChows:0};
for(let seed=0;seed<stats.hands;seed++){
  let state=Engine.start('hk',seed,{});
  let steps=0;
  while(state.phase!=='ended'&&steps++<300){
    const choices=Engine.available(state);
    const action=choices.phase==='claim'
      ?{type:'claim',id:'pass'}
      :{type:'discard',index:choices.discards[0]};
    const result=Engine.act(state,action);
    assert(result.accepted,`seed ${seed}: ${result.reason}`);
    state=result.state;
  }
  assert.equal(state.phase,'ended',`seed ${seed} did not finish`);
  assert.notEqual(state.result.type,'safety-stop');
  assert.deepEqual(Engine.tilesInState(state).sort(),expected,`seed ${seed} tile conservation`);
  assert.equal(state.points.reduce((sum,n)=>sum+n,0),0,`seed ${seed} point conservation`);
  if(state.result.type==='draw')stats.drawn++;
  else stats.won++;
  for(const winner of state.winners){
    assert.notEqual(winner.seat,0,'scripted player never chooses a win');
    assert(winner.judged?.legal&&winner.judged.fan>=3,`seed ${seed} illegal bot win`);
    stats[winner.source==='selfDraw'?'selfDraw':'discardWin']++;
    if(winner.source==='selfDraw'){
      const winAt=state.history.findIndex(event=>event.type==='win'&&event.seat===winner.seat);
      const previous=state.history.slice(0,winAt).reverse().find(event=>event.seat===winner.seat&&['draw','replacement','claim','discard'].includes(event.type));
      assert(['draw','replacement'].includes(previous?.type),`seed ${seed} self draw without drawing`);
    }
  }
  stats.botChows+=state.history.filter(event=>event.type==='claim'&&event.kind==='chow'&&event.seat!==0).length;
}
assert(stats.won>=60,`Hong Kong bot win rate did not improve enough: ${stats.won}/120`);
assert(stats.botChows>0,'bots should still chow when a flush route is preserved');

const claimed=Engine.start('hk',1,{});
claimed.hands[0]=['m1','m2','m3','m4','m5','m6','m7','m8','m9','m5','m5'];
claimed.melds[0]=[{type:'pung',tiles:['m2','m2','m2'],baseTile:'m2',from:1,concealed:false}];
claimed.turnSource='claim';
assert(Judges.judge('hk',claimed,0,'selfDraw')?.legal,'control hand must have a winning shape');
assert.equal(Engine.available(claimed).canWin,false,'a claim is not a self draw');
const beforeClaimWin=JSON.stringify(claimed);
assert.equal(Engine.act(claimed,{type:'win'}).accepted,false,'direct win action after a claim must be rejected');
assert.equal(JSON.stringify(claimed),beforeClaimWin,'rejected win must not mutate the state');

console.log('HK bot QA passed:',JSON.stringify(stats));
