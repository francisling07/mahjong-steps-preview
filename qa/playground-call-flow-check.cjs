const assert=require('node:assert/strict');
const Deck=require('../playground/deck.js');
const E=require('../playground/full-engine.js');
function tally(xs){const c={};for(const x of xs)c[x]=(c[x]||0)+1;return c;}
function sameTiles(a,b){assert.deepEqual(tally(a),tally(b));}
function nextActive(s,seat){for(let k=1;k<=4;k++){const x=(seat+k)%4;if(s.active[x])return x;}return -1;}
function opening(s,a){
  if(a.phase==='exchange'){const suit='mps'.split('').find(k=>s.hands[0].filter(x=>x[0]===k).length>=3);
    return {type:'exchange',indices:s.hands[0].map((x,i)=>x[0]===suit?i:-1).filter(i=>i>=0).slice(0,3)};}
  if(a.phase==='missing')return {type:'missing',suit:'m'};
  if(a.phase==='charleston')return {type:'charleston',indices:s.hands[0].map((x,i)=>x==='j1'?-1:i).filter(i=>i>=0).slice(0,3)};
  return null;
}
function drive(mode,seed,options,policy){
  const original=Deck.tilesFor(mode);
  let s=E.start(mode,seed,options),step=0,events=[],exitStep=null,claimsAfterExit=0;
  while(s.phase!=='ended'&&step++<400){
    const a=E.available(s),openingAction=opening(s,a);let action;
    if(openingAction)action=openingAction;
    else if(a.phase==='claim'){
      assert(s.pending,'claim pause must record pending');
      assert(a.actions.some(x=>x.id==='pass'&&x.kind==='pass'),'claim actions must always include pass');
      if(s.active[0]){
        events.push({step,tile:a.discard,from:a.from,actions:a.actions.map(x=>x.kind),pileTop:s.discards[a.from][s.discards[a.from].length-1],lastEvent:s.history[s.history.length-1]});
        const pick=policy==='call'&&a.actions.some(x=>x.kind!=='pass')?a.actions.find(x=>x.kind==='win')||a.actions.find(x=>x.kind!=='pass'):null;
        action=pick?{type:'claim',id:pick.id}:{type:'claim',id:'pass'};
      }else{claimsAfterExit++;action={type:'claim',id:'pass'};}
    }else if(a.phase==='turn'&&s.turn===0){
      const pick=policy==='win'&&(a.canWin||a.kongs.length);
      action=pick&&a.canWin?{type:'win'}:pick?{type:'kong',...a.kongs[0]}:{type:'discard',index:a.discards[0]};
    }else throw Error(`unexpected phase ${mode} seed=${seed} step=${step}`);
    const r=E.act(s,action);
    assert(r.accepted,`${mode} seed=${seed} step=${step} rejected: ${r.reason}`);
    s=r.state;
    sameTiles(E.tilesInState(s),original);
    assert.equal(s.points.reduce((x,y)=>x+y,0),0,`${mode} seed=${seed} step=${step} points not zero`);
    if(mode==='sc'&&!s.active[0]&&exitStep===null)exitStep=step;
  }
  assert.equal(s.phase,'ended',`${mode} seed=${seed} did not finish in ${step} steps`);
  assert.notEqual(s.result.type,'safety-stop');
  return {s,step,events,exitStep,claimsAfterExit};
}
for(const mode of ['hk','sc','am']){
  const {s,events}=drive(mode,1,{},'pass');void s;
  const pause=events.find(e=>e.actions.length===1&&e.actions[0]==='pass');
  assert(pause,`${mode} seed=1 never paused with only a pass option`);
  assert(pause.from!==0&&pause.from>=1&&pause.from<=3,`${mode} pause should follow an opponent discard`);
  assert.equal(pause.lastEvent.type,'discard',`${mode} pause must happen right after the discard event`);
  assert.equal(pause.lastEvent.seat,pause.from);
  assert.equal(pause.lastEvent.tile,pause.tile,'pending tile must match the discard');
  assert.equal(pause.pileTop,pause.tile,`${mode} paused discard must still sit on the discard pile`);
  console.log(`${mode}: seed=1 paused for observation at step ${pause.step} on seat ${pause.from}'s ${pause.tile} with no callable action`);
}
const callSeeds={hk:'chow',sc:'pung',am:'pung'};
for(const mode of Object.keys(callSeeds)){
  const {s,events}=drive(mode,1,{},'call');
  const pause=events.find(e=>e.actions.some(k=>k!=='pass'));
  assert(pause,`${mode} seed=1 never offered a callable action`);
  assert(s.winners.some(w=>w.seat===0)||s.melds[0].some(m=>['chow','pung','kong'].includes(m.type))||s.mode==='sc'&&s.winners.length,
    `${mode} player claim/win had no effect`);
  console.log(`${mode}: seed=1 claim path still works (first offer ${pause.actions.filter(k=>k!=='pass').join('/')} at step ${pause.step}, final result ${s.result.type})`);
}
{
  const {s,events,exitStep,claimsAfterExit}=drive('sc',2,{},'win');
  assert(exitStep!==null,'sc seed=2 expected the player to win and exit');
  assert(s.winners.some(w=>w.seat===0));
  assert.equal(claimsAfterExit,0,`sc exited player was asked ${claimsAfterExit} times after winning`);
  assert(events.every(e=>e.step<=exitStep),'no observation pause may happen after the player exits');
  assert.equal(s.result.type,'three-wins');
  console.log(`sc: seed=2 player exited at step ${exitStep}, bots auto-played to ${s.result.type} without further pauses`);
}
for(const mode of ['hk','sc','am']){
  let s=E.start(mode,1,{});
  while(s.phase!=='claim'&&s.phase!=='ended'){const a=E.available(s),o=opening(s,a);
    const action=o||(a.phase==='turn'&&s.turn===0?{type:'discard',index:a.discards[0]}:{type:'claim',id:'pass'});
    s=E.act(s,action).state;}
  assert.equal(s.phase,'claim',`${mode} seed=1 should reach a claim pause`);
  const before=JSON.stringify(s);
  for(const bad of [{type:'claim',id:'nope'},{type:'discard',index:0},{type:'win'},{type:'kong',kind:'concealed',tile:'m1'}]){
    const r=E.act(s,bad);
    assert(!r.accepted,`${mode} invalid action ${JSON.stringify(bad)} was accepted`);
    assert.equal(JSON.stringify(s),before,`${mode} invalid action mutated the state`);
    const after=r.state;assert.equal(JSON.stringify(after),before,'rejected result state must equal input');
  }
  const r=E.act(s,{type:'claim',id:'pass'});
  assert(r.accepted);
  assert(['claim','turn','ended'].includes(r.state.phase),`${mode} pass left the engine in phase ${r.state.phase}`);
  sameTiles(E.tilesInState(r.state),Deck.tilesFor(mode));
  console.log(`${mode}: invalid claim actions rejected without mutation; pass advanced the turn correctly`);
}
console.log('PASS per-discard observation pauses across hk/sc/am');
