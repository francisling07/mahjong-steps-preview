'use strict';
const assert=require('node:assert/strict');
const Deck=require('../playground/deck.js');
const Score=require('../course/mcr-score.js');
const Engine=require('../playground/full-engine.js');
const Fans=require('../course/mcr-fans.js');
const allPungs=['m2','m2','m2','p3','p3','p3','s4','s4','s4','z5','z5','z5','m7','m7'];
const orphan=['m1','m9','p1','p9','s1','s9','z1','z2','z3','z4','z5','z6','z7','z7'];
assert(Score.shape(allPungs,[]));assert(Score.shape(orphan,[]));
assert(!Score.shape(allPungs.slice(1),[]));
assert(Score.evaluate(orphan,[],{source:'selfDraw'}).breakdown.some(x=>x.no===7));
const knitted=['m1','m4','m7','p2','p5','p8','s3','s6','s9','z1','z1','z5','z5','z5'];
assert(Score.knittedStraight(knitted,[]));
assert(Score.evaluate(knitted,[],{source:'discard',winTile:'z5'}).breakdown.some(x=>x.no===35));
for(const [partial,win,fan] of [[['m1','m2'],'m3',77],[['m1','m3'],'m2',78]]){
  const hand=partial.concat(['p1','p2','p3','s1','s2','s3','z5','z5','z5','m5','m5'],win);
  assert(Score.evaluate(hand,[],{source:'discard',winTile:win}).breakdown.some(x=>x.no===fan));
}
const single=['m1','m2','m3','p1','p2','p3','s1','s2','s3','z5','z5','z5','m5','m5'];
assert(Score.evaluate(single,[],{source:'discard',winTile:'m5'}).breakdown.some(x=>x.no===79));
assert.equal(Score.settlement(8,0,'selfDraw').paymentEach,16);
assert.equal(Score.settlement(8,0,'selfDraw').total,48);
assert.equal(Score.settlement(8,0,'discard').total,32);
assert.equal(Score.settlement(8,2,'discard').discarder,18);
assert.equal(Score.manual(allPungs,[],{source:'selfDraw',flowers:1},[49,80]),null,'7 plus flower cannot qualify');
const manual=Score.manual(allPungs,[],{source:'selfDraw',flowers:1},[49,59]);
assert(manual&&manual.baseFan===8&&manual.totalFan===9&&manual.settlement.paymentEach===17);
assert.equal(Score.manual(allPungs,[],{source:'selfDraw'},[49,49]),null,'no duplicate fan selections');
assert.equal(Score.manual(allPungs,[],{source:'selfDraw'},[49,81]),null,'flowers cannot be selected as qualifying fan');
assert.equal(Fans.fans.length,81);
assert.equal(Fans.byNo(16).points,32,'WMO Chinese second edition: Four Pure Shifted Chows is 32');
const expected=Deck.tilesFor('mcr').sort();
let wins=0,draws=0,flowers=0,claims=0;
for(let seed=0;seed<80;seed++){
  let s=Engine.start('mcr',seed,{});assert(s);assert.equal(s.hands[0].length,14);
  assert.deepEqual(s.hands.slice(1).map(h=>h.length),[13,13,13]);
  assert(!s.hands.flat().some(t=>t[0]==='f'),'opening flowers replaced');
  assert.deepEqual(Engine.tilesInState(s).sort(),expected,'opening tile conservation '+seed);
  let guard=0;
  while(s.phase!=='ended'&&guard++<220){
    const a=Engine.available(s);assert(a,'available '+seed);
    const action=a.phase==='claim'?(claims++,{type:'claim',id:a.actions.find(x=>x.kind==='win')?.id||'pass'}):a.phase==='turn'?a.canWin?{type:'win'}:{type:'discard',index:a.discards[0]}:null;
    assert(action,'action '+seed);const r=Engine.act(s,action);assert(r.accepted,`${seed}: ${r.reason}`);s=r.state;
    assert.deepEqual(Engine.tilesInState(s).sort(),expected,'tile conservation '+seed);
    assert.equal(s.points.reduce((n,x)=>n+x,0),0,'point conservation '+seed);
    assert(s.flowers.flat().every(t=>t[0]==='f'));
    assert(!s.hands.flat().some(t=>t[0]==='f'),'drawn flower replaced');
  }
  assert(guard<220,'completed '+seed);
  flowers+=s.flowers.flat().length;
  if(s.result.type==='win')wins++;else draws++;
}
assert(wins>0&&draws>0&&flowers>0&&claims>0);
const s=Engine.start('mcr',38,{});s.hands[0]=allPungs.slice();s.flowers[0]=['f1'];s.phase='turn';s.turn=0;s.needDraw=false;
let r=Engine.act(s,{type:'manual-win',fanNos:[49,80]});assert(!r.accepted);
r=Engine.act(s,{type:'manual-win',fanNos:[49,59]});assert(r.accepted);
assert.equal(r.state.result.type,'win');assert.deepEqual(r.state.points,[51,-17,-17,-17]);
const afterCall=JSON.parse(JSON.stringify(s));afterCall.turnSource='claim';
assert.equal(Engine.available(afterCall).canWin,false,'a call cannot be declared a self draw');
assert.equal(Engine.act(afterCall,{type:'manual-win',fanNos:[49,59]}).accepted,false);
let rob=Engine.start('mcr',5,{});
rob.hands[0]=['m1','m2','m3','p1','p2','p3','s1','s2','s3','z5','z5','z5','m5'];
rob.hands[1]=['m5','m1','m2','m4','p1','p2','p4','s1','s3','z2','z7'];
rob.melds[1]=[{type:'pung',tiles:['m5','m5','m5'],baseTile:'m5',from:3,concealed:false}];
rob.turn=1;rob.needDraw=false;rob.phase='turn';rob=Engine.runAuto(rob);
assert.equal(rob.phase,'claim');assert.equal(rob.pending.robKong,true);
assert(Engine.available(rob).actions.some(x=>x.kind==='win'));
const robbed=Engine.act(rob,{type:'claim',id:'win'});
assert(robbed.accepted);assert(robbed.state.winners[0].judged.breakdown.some(x=>x.no===47));
assert.equal(robbed.state.hands[1].filter(x=>x==='m5').length,0);
assert.equal(robbed.state.discards[1].at(-1),'m5');
assert.equal(robbed.state.points.reduce((n,x)=>n+x,0),0);
const notRobbed=Engine.act(rob,{type:'claim',id:'pass'});
assert(notRobbed.accepted);assert.equal(notRobbed.state.melds[1][0].type,'kong');
assert(notRobbed.state.history.some(x=>x.type==='kong'&&x.kind==='added'));
global.MahjongFullPlayEngine=Engine;global.MahjongFullPlayAdvisor=require('../playground/advisor.js');global.MahjongPlaygroundJudges=require('../playground/judges.js');global.MahjongMCRFans=Fans;global.MahjongTileArt={svg:t=>`<svg data-tile="${t}"></svg>`};
require('../playground/full-ui.js');const UI=global.MahjongFullPlayUI;
for(const lang of ['zh','tw','en']){UI.setLang(lang);UI.enter('mcr');assert(UI.html().includes('data-full-mode="mcr"'));UI.dispatch({dataset:{fullStart:''}});assert.equal(UI.getState().mode,'mcr');assert(UI.html().includes('fp-flower-zone')||UI.getState().flowers.flat().length===0);}
console.log(`MCR table QA passed: 80 complete hands (${wins} wins, ${draws} draws), ${flowers} flowers, ${claims} claim windows; tile/point conservation, 8-point boundary, payments and UI.`);
