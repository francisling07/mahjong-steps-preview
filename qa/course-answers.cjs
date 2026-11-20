const rules=require('../course/hk-rules.js'),meld=require('../meld.js'),rounds=require('../course/round-data.js');
module.exports=function answer(q){
  if(q.type==='choice')return q.answerId;
  if(q.type==='complete')return q.options.find(o=>meld.isBasicWinningHand([...q.hand,o.tile])).id;
  if(q.type==='faan'){const fan=Math.min(10,q.breakdown.reduce((n,p)=>n+p.fan,0));return q.options.find(o=>o.value===fan).id;}
  if(q.type==='score')return q.options.find(o=>o.value===rules.settlement(q.fan,q.winMode).total).id;
  if(q.type==='waits')return q.options.filter(o=>rules.waits(q.hand).includes(o.tile)).map(o=>o.id);
  if(q.type==='round')return rounds.find(s=>s.id===q.scenarioId).steps.map(s=>({...s.expected}));
  for(let mask=0;mask<2**q.tiles.length;mask++){
    const a=q.tiles.map((_,i)=>i).filter(i=>mask&(1<<i));if(a.length!==q.count)continue;
    const tiles=a.map(i=>q.tiles[i]);if(q.meld==='chow-support'){if(meld.classifyMeld([...tiles,q.claimTile])==='sequence')return a;}
    else if(meld.classifyMeld(tiles)===q.meld)return a;
  }throw Error('No answer '+q.id);
};
