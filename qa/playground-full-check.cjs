const assert=require('node:assert/strict');
const Deck=require('../playground/deck.js');
const E=require('../playground/full-engine.js');
const A=require('../playground/advisor.js');
const J=require('../playground/judges.js');
function tally(xs){const c={};for(const x of xs)c[x]=(c[x]||0)+1;return c;}
function sameTiles(a,b){assert.deepEqual(tally(a),tally(b));}
function next(s){const a=E.available(s);if(a.phase==='exchange'){
  const suit='mps'.split('').find(k=>s.hands[0].filter(x=>x[0]===k).length>=3);
  return {type:'exchange',indices:s.hands[0].map((x,i)=>x[0]===suit?i:-1).filter(i=>i>=0).slice(0,3)};
}if(a.phase==='missing')return {type:'missing',suit:'m'};
if(a.phase==='charleston')return {type:'charleston',indices:s.hands[0].map((x,i)=>x==='j1'?-1:i).filter(i=>i>=0).slice(0,3)};
if(a.phase==='claim')return {type:'claim',id:'pass'};
if(a.phase==='turn')return {type:'discard',index:a.discards[0]};
throw Error('unexpected phase '+a.phase);
}
for(const mode of ['hk','sc','am']){
  const original=Deck.tilesFor(mode);let wins=0,draws=0;
  for(let seed=0;seed<120;seed++){
    let s=E.start(mode,seed,{scExchange:true,amSecondCharleston:seed%2===0}),step=0;
    sameTiles(E.tilesInState(s),original);
    while(s.phase!=='ended'&&step++<300){
      const action=next(s),r=E.act(s,action);
      assert(r.accepted,`${mode} seed=${seed} step=${step} ${r.reason}`);
      s=r.state;sameTiles(E.tilesInState(s),original);
      assert.equal(s.points.reduce((x,y)=>x+y,0),0);
      if(s.phase==='turn'&&s.turn===0){const ad=A.advice(s);assert(ad&&ad.visibleOnly);assert(E.available(s).discards.includes(ad.index));
        const changed=structuredClone(s);changed.hands[1].reverse();changed.hands[2].reverse();changed.wall.reverse();
        assert.deepEqual(A.advice(changed),ad,'advice must ignore hidden hands and wall order');
      }
    }
    assert.equal(s.phase,'ended',`${mode} seed=${seed} did not finish`);
    assert.notEqual(s.result.type,'safety-stop');
    if(s.result.type==='draw')draws++;else wins++;
    assert.deepEqual(E.start(mode,seed,{scExchange:true,amSecondCharleston:seed%2===0}),E.start(mode,seed,{scExchange:true,amSecondCharleston:seed%2===0}));
  }
  console.log(`${mode}: 120 completed rounds, ${wins} wins, ${draws} draws; tile and point conservation passed`);
}
for(const mode of ['hk','sc','am']){
  const original=Deck.tilesFor(mode);let claims=0,kongs=0,jokers=0;
  for(let seed=0;seed<80;seed++){
    let s=E.start(mode,seed,{scExchange:seed%2===0,amSecondCharleston:seed%2===0}),step=0;
    while(s.phase!=='ended'&&step++<300){
      let action=next(s),a=E.available(s);
      if(a.phase==='claim'){
        const pick=a.actions.find(x=>x.kind==='win')||a.actions.find(x=>x.kind!=='pass')||a.actions[0];
        action={type:'claim',id:pick.id};if(pick.kind!=='pass')claims++;
      }else if(a.phase==='turn'){
        if(a.canWin)action={type:'win'};
        else if(a.kongs.length){action={type:'kong',...a.kongs[0]};kongs++;}
        else if(a.exchanges.length){action={type:'joker-exchange',...a.exchanges[0]};jokers++;}
      }
      const r=E.act(s,action);assert(r.accepted,`${mode} ${seed} ${r.reason}`);s=r.state;
      sameTiles(E.tilesInState(s),original);assert.equal(s.points.reduce((x,y)=>x+y,0),0);
    }
    assert.equal(s.phase,'ended');assert.notEqual(s.result.type,'safety-stop');
  }
  assert(claims>0);if(mode!=='am')assert(kongs>0);else assert(jokers>0);
  console.log(`${mode}: 80 active-decision rounds, ${claims} claims, ${kongs} kongs, ${jokers} joker exchanges`);
}
for(const mode of ['hk','sc','am']){
  const s=E.start(mode,3),before=JSON.stringify(s),r=E.act(s,{type:'discard',index:999});
  assert(!r.accepted);assert.equal(JSON.stringify(s),before);
}
assert(!J.americanScore(['m1','m1','m1','m2','m2','m2','m3','m3','m3','p1','p1','p1','s1','j1'],[],'selfDraw'));
console.log('PASS invalid-action immutability and joker pair restriction');
