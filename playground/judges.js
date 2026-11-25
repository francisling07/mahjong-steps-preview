/* Bounded training adjudication for complete rounds. It names its scoring subset. */
(function (g) {
  'use strict';
  const isNode = typeof module !== 'undefined' && module.exports;
  const HK = isNode ? require('../course/hk-rules.js') : g.HKLearningRules;
  const SC = isNode ? require('../course/sichuan-rules.js') : g.SichuanLearningRules;
  const SCScore = isNode ? require('../course/sichuan-score.js') : g.SichuanLearningScore;
  const MCR = isNode ? require('../course/mcr-score.js') : g.MahjongMCRScore;
  const T = (zh,tw,en)=>({zh,tw,en});
  const seats=['z1','z2','z3','z4'];
  const americanLines=[
    {id:'pungs-pair',title:T('原创卡 A · 四组三张加一对','原創卡 A · 四組三張加一對','Original A · four pungs and a pair'),sizes:[3,3,3,3,2],value:25,concealed:false},
    {id:'kongs-pungs',title:T('原创卡 B · 两组四张加两组三张','原創卡 B · 兩組四張加兩組三張','Original B · two kongs and two pungs'),sizes:[4,4,3,3],value:30,concealed:false},
    {id:'quint-pungs',title:T('原创卡 C · 一组五张加三组三张','原創卡 C · 一組五張加三組三張','Original C · one quint and three pungs'),sizes:[5,3,3,3],value:35,concealed:false},
    {id:'seven-pairs',title:T('原创卡 D · 七对自然牌','原創卡 D · 七對自然牌','Original D · seven natural pairs'),sizes:[2,2,2,2,2,2,2],value:50,concealed:true}
  ];
  function count(list){const c=Object.create(null);for(const x of list)c[x]=(c[x]||0)+1;return c;}
  function sum(c){return Object.values(c).reduce((a,b)=>a+b,0);}
  function clone(x){return JSON.parse(JSON.stringify(x));}
  function meldTiles(melds){return melds.flatMap(m=>m.tiles);}
  function decompose(concealed,melds){
    const c=count(concealed),need=4-melds.length,out=[];
    if(need<0)return out;
    const exposed=melds.map(m=>({type:m.type,tiles:m.tiles}));
    function groups(left,chosen,pair){
      if(out.length>100)return;
      const keys=Object.keys(c).filter(k=>c[k]>0).sort();
      if(left===0){if(keys.length===0)out.push({groups:exposed.concat(chosen.map(x=>({type:x.type,tiles:x.tiles}))),pair});return;}
      if(!keys.length)return;
      const first=keys[0];
      if(c[first]>=3){c[first]-=3;groups(left-1,chosen.concat([{type:'pung',tiles:[first,first,first]}]),pair);c[first]+=3;}
      if(/^[mps][1-7]$/.test(first)){
        const suit=first[0],n=Number(first[1]),b=suit+(n+1),d=suit+(n+2);
        if(c[b]>0&&c[d]>0){c[first]--;c[b]--;c[d]--;groups(left-1,chosen.concat([{type:'chow',tiles:[first,b,d]}]),pair);c[first]++;c[b]++;c[d]++;}
      }
    }
    for(const key of Object.keys(c).sort())if(c[key]>=2){c[key]-=2;groups(need,[],key);c[key]+=2;}
    return out;
  }
  function isOrphans(hand,melds){
    if(melds.length||hand.length!==14)return false;
    const required=['m1','m9','p1','p9','s1','s9','z1','z2','z3','z4','z5','z6','z7'];
    const c=count(hand);return Object.keys(c).length===13&&required.every(x=>c[x]>=1)&&Object.values(c).filter(n=>n===2).length===1;
  }
  function hkScore(hand,melds,seat,source,roundWind){
    if(!HK.isWinning(hand,melds))return null;
    if(isOrphans(hand,melds)){
      const fan=10,settlement=HK.settlement(fan,source);
      return {legal:true,fan,breakdown:[{id:'orphans',fan:10}],settlement,limited:true};
    }
    const all=hand.concat(meldTiles(melds)),suits=new Set(all.filter(x=>/^[mps]/.test(x)).map(x=>x[0])),hasHonor=all.some(x=>x[0]==='z');
    let best=null;
    for(const layout of decompose(hand,melds)){
      const details=[];const add=(id,fan)=>details.push({id,fan});
      if(layout.groups.every(x=>x.type==='chow'))add('allSequences',1);
      if(layout.groups.every(x=>x.type==='pung'||x.type==='kong'))add('allTriplets',3);
      if(suits.size===0&&hasHonor)add('allHonors',10);
      else if(suits.size===1&&!hasHonor)add('fullFlush',7);
      else if(suits.size===1&&hasHonor)add('halfFlush',3);
      for(const group of layout.groups){
        if(group.type==='chow')continue;
        const tile=group.tiles[0];
        if(['z5','z6','z7'].includes(tile))add('dragon',1);
        if(tile===seats[seat])add('seatWind',1);
        if(tile===(roundWind||'z1'))add('roundWind',1);
      }
      if(melds.every(m=>!!m.concealed))add('concealed',1);
      if(source==='selfDraw')add('selfDraw',1);
      const fan=details.reduce((n,x)=>n+x.fan,0);
      if(!best||fan>best.fan)best={fan,breakdown:details};
    }
    if(!best)return null;
    return {legal:best.fan>=3,fan:best.fan,breakdown:best.breakdown,
      reason:best.fan<3?'insufficient-fan':null,
      settlement:best.fan>=3?HK.settlement(best.fan,source):null,limited:true};
  }
  function sevenPairs(hand,melds){
    if(melds.length||hand.length!==14)return false;
    const c=count(hand);return Object.values(c).every(n=>n===2||n===4)&&sum(c)===14;
  }
  function scScore(hand,melds,missingSuit,source,activeOpponents,wallEmpty){
    if(!SC.isWinning(hand,melds,missingSuit))return null;
    const all=hand.concat(meldTiles(melds)),suits=new Set(all.map(x=>x[0]));
    let base='ordinary';
    if(sevenPairs(hand,melds))base='sevenPairs';
    else if(suits.size===1)base='fullFlush';
    else if(decompose(hand,melds).some(x=>x.groups.every(m=>m.type==='pung'||m.type==='kong')))base='allTriplets';
    const roots=SCScore.countRoots(hand,melds);
    const extras=wallEmpty?['lastTile']:[];
    const settlement=SCScore.score({base,roots,extras,mode:source,activeOpponents});
    return settlement?{legal:true,base,roots,extras,settlement,limited:true}:null;
  }
  function norm(tile){return tile[0]==='f'?'F':tile;}
  function validExposure(m){
    if(!m||!Array.isArray(m.tiles)||m.tiles.length<3||m.tiles.length>5)return false;
    const natural=m.tiles.filter(x=>x!=='j1').map(norm);
    return natural.length>0&&natural.every(x=>x===natural[0])&&(!m.baseTile||norm(m.baseTile)===natural[0]);
  }
  function fitGroups(rawHand,melds,sizes){
    if(melds.some(m=>!validExposure(m)))return false;
    const remaining=sizes.slice();
    for(const m of melds){const i=remaining.indexOf(m.tiles.length);if(i<0)return false;remaining.splice(i,1);}
    const c=count(rawHand.map(norm));
    if(sum(c)!==remaining.reduce((x,y)=>x+y,0))return false;
    function solve(i){
      if(i===remaining.length)return sum(c)===0;
      const size=remaining[i];
      if(size===1){for(const key of Object.keys(c))if(key!=='j1'&&c[key]>0){c[key]--;if(solve(i+1))return true;c[key]++;}return false;}
      if(size===2){for(const key of Object.keys(c))if(key!=='j1'&&c[key]>=2){c[key]-=2;if(solve(i+1))return true;c[key]+=2;}return false;}
      for(const key of Object.keys(c))if(key!=='j1'&&c[key]>0){
        for(let natural=1;natural<=Math.min(size,c[key]);natural++){
          const jokers=size-natural;if((c.j1||0)<jokers)continue;
          c[key]-=natural;c.j1=(c.j1||0)-jokers;
          if(solve(i+1))return true;
          c[key]+=natural;c.j1+=jokers;
        }
      }
      if((c.j1||0)>=size){c.j1-=size;if(solve(i+1))return true;c.j1+=size;}
      return false;
    }
    return solve(0);
  }
  function americanScore(hand,melds,source){
    if(hand.length+melds.reduce((n,m)=>n+m.tiles.length,0)!==14)return null;
    for(const line of americanLines){
      if(line.concealed&&(melds.length||hand.includes('j1')))continue;
      if(!fitGroups(hand,melds,line.sizes))continue;
      const jokerless=!hand.includes('j1')&&!melds.some(m=>m.tiles.includes('j1'));
      const base=line.value*(jokerless&&!line.concealed?2:1);
      return {legal:true,lineId:line.id,lineTitle:clone(line.title),value:line.value,base,jokerless,source,limited:true,
        settlement:source==='selfDraw'?{paymentEach:base*2,payerCount:3,total:base*6}:{discarder:base*2,others:base,total:base*4}};
    }
    return null;
  }
  function judge(mode,state,seat,source,discardTile){
    if(!state||!Array.isArray(state.hands)||!Array.isArray(state.melds)||!Array.isArray(state.hands[seat])||!Array.isArray(state.melds[seat]))return null;
    const hand=discardTile?state.hands[seat].concat([discardTile]):state.hands[seat].slice(),melds=state.melds[seat];
    if(mode==='hk')return hkScore(hand,melds,seat,source,state.roundWind);
    if(mode==='sc')return scScore(hand,melds,state.missingSuit?.[seat],source,state.active.filter((x,i)=>x&&i!==seat).length,state.wall.length===0);
    if(mode==='am')return americanScore(hand,melds,source);
    if(mode==='mcr'){
      const winTile=source==='discard'?discardTile:state.lastDraw?.seat===seat?state.lastDraw.tile:null;
      const visible=state.discards.flat().concat(state.melds.flatMap(ms=>ms.filter(m=>!m.concealed).flatMap(m=>m.tiles)));
      const before=winTile?visible.filter(t=>t===winTile).length-(source==='discard'?1:0):0;
      return MCR.evaluate(hand,melds,{source,seatWind:seats[seat],roundWind:state.roundWind||'z1',flowers:state.flowers?.[seat]?.length||0,winTile,method:source==='selfDraw'?state.lastDraw?.method:state.lastDiscardMethod,lastTile:before===3});
    }
    return null;
  }
  const api={judge,hkScore,scScore,americanScore,americanLines,decompose,fitGroups};
  g.MahjongPlaygroundJudges=api;
  if(isNode)module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:window);
