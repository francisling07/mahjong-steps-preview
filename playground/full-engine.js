/* Complete single-hand play loop against deterministic training bots.
   Rules and payment are deliberately limited to the named teaching baseline. */
(function(g){
  'use strict';
  const isNode=typeof module!=='undefined'&&module.exports;
  const Deck=isNode?require('./deck.js'):g.MahjongPlaygroundDeck;
  const Judges=isNode?require('./judges.js'):g.MahjongPlaygroundJudges;
  const HK=isNode?require('../course/hk-rules.js'):g.HKLearningRules;
  const SC=isNode?require('../course/sichuan-rules.js'):g.SichuanLearningRules;
  const SCScore=isNode?require('../course/sichuan-score.js'):g.SichuanLearningScore;
  const MCR=isNode?require('../course/mcr-score.js'):g.MahjongMCRScore;
  const modes=['hk','sc','am','mcr'];
  const copy=x=>JSON.parse(JSON.stringify(x));
  const order=x=>({m:0,p:1,s:2,z:3,f:4,j:5})[x[0]]*10+Number(x[1]);
  const sortHand=h=>h.sort((a,b)=>order(a)-order(b));
  const counts=h=>{const c=Object.create(null);for(const t of h)c[t]=(c[t]||0)+1;return c;};
  const allMeldTiles=ms=>ms.flatMap(m=>m.tiles);
  function validState(s){return !!s&&s.version===1&&modes.includes(s.mode)&&Array.isArray(s.hands)&&s.hands.length===4&&Array.isArray(s.wall)&&Array.isArray(s.melds)&&s.melds.length===4&&Array.isArray(s.discards)&&s.discards.length===4&&Array.isArray(s.active)&&s.active.length===4&&Array.isArray(s.history)&&typeof s.phase==='string';}
  function log(s,type,seat,extra){s.history.push({type,seat,...extra});}
  function nextActive(s,seat){for(let k=1;k<=4;k++){const x=(seat+k)%4;if(s.active[x])return x;}return -1;}
  function draw(s,seat,replacement){
    if(!s.wall.length){endDraw(s);return false;}
    const tile=replacement?s.wall.pop():s.wall.shift();s.hands[seat].push(tile);
    log(s,replacement?'replacement':'draw',seat,{tile});
    s.turnSource='draw';
    if(s.mode==='mcr'){
      if(!replaceFlowers(s,seat))return false;
      s.lastDraw={seat,tile:tile[0]==='f'?s.history.filter(x=>x.seat===seat&&x.type==='replacement').at(-1)?.tile:tile,
        method:tile[0]==='f'?'flower-replacement':replacement?'kong-replacement':s.wall.length===0?'last-draw':'normal'};
      s.turnSource='draw';
    }
    sortHand(s.hands[seat]);return true;
  }
  function replaceFlowers(s,seat){
    if(s.mode!=='mcr')return true;
    const hand=s.hands[seat];let i=0;
    while(i<hand.length){if(hand[i][0]!=='f'){i++;continue;}
      const flower=hand.splice(i,1)[0];s.flowers[seat].push(flower);log(s,'flower',seat,{tile:flower});
      if(!s.wall.length){endDraw(s);return false;}
      const tile=s.wall.pop();hand.push(tile);log(s,'replacement',seat,{tile,forFlower:true});
    }
    return true;
  }
  function endDraw(s){s.phase='ended';s.result={type:'draw',winners:s.winners.slice(),points:s.points.slice(),wallRemaining:s.wall.length};log(s,'round-draw',null,{});}
  function start(mode,seed,options){
    if(!modes.includes(mode)||!Number.isInteger(seed)||seed<0||seed>4294967295)return null;
    const dealt=Deck.deal(mode,seed);if(!dealt)return null;
    const openingTile=dealt.hands[0][13];
    const opt={scExchange:!!options?.scExchange,amSecondCharleston:!!options?.amSecondCharleston};
    const s={version:1,mode,seed,options:opt,hands:dealt.hands.map(sortHand),wall:dealt.wall,
      melds:[[],[],[],[]],discards:[[],[],[],[]],flowers:[[],[],[],[]],active:[true,true,true,true],
      missingSuit:[null,null,null,null],points:[0,0,0,0],phase:mode==='sc'?(opt.scExchange?'exchange':'missing'):mode==='am'?'charleston':'turn',
      turn:0,needDraw:false,lastDiscard:null,pending:null,charlestonStep:0,winners:[],result:null,
      roundWind:'z1',lastDraw:null,lastDiscardMethod:null,turnSource:'draw',history:[]};
    log(s,'deal',null,{mode,seed});log(s,'draw',0,{tile:openingTile,opening:true});
    if(mode==='mcr'){
      for(let seat=0;seat<4;seat++)if(!replaceFlowers(s,seat))return s;
      const actual=openingTile[0]==='f'?s.history.filter(x=>x.seat===0&&x.type==='replacement').at(-1)?.tile:openingTile;
      s.lastDraw={seat:0,tile:actual,method:openingTile[0]==='f'?'flower-replacement':'normal'};
      s.hands.forEach(sortHand);
    }
    return s;
  }
  function botMissing(hand){const c={m:0,p:0,s:0};for(const x of hand)c[x[0]]++;return ['m','p','s'].sort((a,b)=>c[a]-c[b]||a.localeCompare(b))[0];}
  function botExchange(hand){for(const suit of ['m','p','s'].sort((a,b)=>hand.filter(x=>x[0]===a).length-hand.filter(x=>x[0]===b).length)){
    const indices=hand.map((x,i)=>x[0]===suit?i:-1).filter(i=>i>=0);if(indices.length>=3)return indices.slice(0,3);
  }return null;}
  function support(hand,tile){
    const c=counts(hand),n=Number(tile[1]),suit=tile[0];let score=(c[tile]-1)*4;
    if('mps'.includes(suit))for(const d of [-2,-1,1,2]){const x=n+d;if(x>=1&&x<=9)score+=(c[suit+x]||0)*(Math.abs(d)===1?1.8:.7);}
    if(tile==='j1')score+=8;
    return score;
  }
  function botPass(hand){
    const ranked=hand.map((t,i)=>({t,i,v:support(hand,t)})).filter(x=>x.t!=='j1').sort((a,b)=>a.v-b.v||order(b.t)-order(a.t)||a.i-b.i);
    return ranked.slice(0,3).map(x=>x.i).sort((a,b)=>a-b);
  }
  function uniqueIndices(indices,hand,number){return Array.isArray(indices)&&indices.length===number&&new Set(indices).size===number&&indices.every(i=>Number.isInteger(i)&&i>=0&&i<hand.length);}
  function takeIndices(hand,indices){const selected=indices.map(i=>hand[i]);for(const i of indices.slice().sort((a,b)=>b-a))hand.splice(i,1);return selected;}
  function exchangeThree(s,indices){
    if(!uniqueIndices(indices,s.hands[0],3)||new Set(indices.map(i=>s.hands[0][i][0])).size!==1)return false;
    const selections=[indices,...[1,2,3].map(i=>botExchange(s.hands[i]))];
    if(selections.some(x=>!x))return false;
    const outgoing=selections.map((sel,i)=>takeIndices(s.hands[i],sel));
    for(let i=0;i<4;i++){s.hands[(i+1)%4].push(...outgoing[i]);sortHand(s.hands[(i+1)%4]);}
    log(s,'exchange-three',0,{tiles:outgoing[0],direction:'right'});s.phase='missing';return true;
  }
  function charlestonDirection(step){return [1,2,3,3,2,1][step];}
  function charleston(s,indices){
    if(!uniqueIndices(indices,s.hands[0],3)||indices.some(i=>s.hands[0][i]==='j1'))return false;
    const outgoing=[takeIndices(s.hands[0],indices)];
    for(let i=1;i<4;i++)outgoing.push(takeIndices(s.hands[i],botPass(s.hands[i])));
    const direction=charlestonDirection(s.charlestonStep);
    for(let i=0;i<4;i++){s.hands[(i+direction)%4].push(...outgoing[i]);sortHand(s.hands[(i+direction)%4]);}
    log(s,'charleston',0,{step:s.charlestonStep,direction,tiles:outgoing[0]});s.charlestonStep++;
    if(s.charlestonStep===(s.options.amSecondCharleston?6:3))s.phase='turn';
    return true;
  }
  function legalDiscards(s,seat){
    const hand=s.hands[seat];
    if(s.mode==='sc'){
      const missing=s.missingSuit[seat];if(!['m','p','s'].includes(missing))return [];
      const must=hand.some(t=>t[0]===missing);
      return hand.map((t,i)=>!must||t[0]===missing?i:-1).filter(i=>i>=0);
    }
    return hand.map((_,i)=>i);
  }
  function claimChoices(s,seat,discarder,tile){
    if(!s.active[seat]||seat===discarder)return [];
    const hand=s.hands[seat],out=[];
    if(s.mode==='hk'||s.mode==='mcr'){
      const from=discarder===(seat+3)%4?'previous':discarder===(seat+2)%4?'opposite':'next';
      for(const item of HK.claimOptions(hand,tile,from))out.push({id:item.type+':'+item.used.join(','),kind:item.type,used:item.used});
    }else if(s.mode==='sc'){
      for(const kind of SC.claimOptions(hand,tile,s.missingSuit[seat]))out.push({id:kind+':'+tile,kind,used:Array(kind==='kong'?3:2).fill(tile)});
    }else if(s.mode==='am'&&tile!=='j1'){
      const c=counts(hand),natural=c[tile]||0,jokers=c.j1||0;
      for(const size of [3,4]){
        if(!Judges.americanLines.some(line=>line.sizes.includes(size)&&!line.concealed))continue;
        for(let n=1;n<=Math.min(natural,size-1);n++){
          const j=size-1-n;if(j>jokers)continue;
          const used=Array(n).fill(tile).concat(Array(j).fill('j1'));
          const kind=size===3?'pung':'kong';out.push({id:kind+':'+n+'n'+j+'j',kind,used});
        }
      }
    }
    return out.filter(x=>x.kind!=='kong'||s.wall.length>0);
  }
  function getWinnerOptions(s,discarder,tile){
    const winners=[];for(let seat=0;seat<4;seat++)if(seat!==discarder&&s.active[seat]){
      const judged=Judges.judge(s.mode,s,seat,'discard',tile);if(judged?.legal)winners.push({seat,judged});
    }return s.mode==='mcr'?winners.sort((a,b)=>(a.seat-discarder+4)%4-(b.seat-discarder+4)%4):winners;
  }
  function payment(s,winner,source,discarder,judged){
    const other=Array.from({length:4},(_,i)=>i).filter(i=>i!==winner&&s.active[i]);
    if(s.mode==='hk'){
      if(source==='selfDraw')for(const i of other){s.points[i]-=judged.settlement.paymentEach;s.points[winner]+=judged.settlement.paymentEach;}
      else{s.points[discarder]-=judged.settlement.total;s.points[winner]+=judged.settlement.total;}
    }else if(s.mode==='sc'){
      if(source==='selfDraw')for(const i of other){s.points[i]-=judged.settlement.paymentEach;s.points[winner]+=judged.settlement.paymentEach;}
      else{s.points[discarder]-=judged.settlement.paymentEach;s.points[winner]+=judged.settlement.paymentEach;}
    }else if(s.mode==='mcr'){
      const score=judged.totalFan;
      if(source==='selfDraw')for(const i of other){const amount=8+score;s.points[i]-=amount;s.points[winner]+=amount;}
      else for(const i of other){const amount=i===discarder?8+score:8;s.points[i]-=amount;s.points[winner]+=amount;}
    }else{
      const base=judged.base;
      if(source==='selfDraw')for(const i of other){s.points[i]-=base*2;s.points[winner]+=base*2;}
      else for(const i of other){const amount=i===discarder?base*2:base;s.points[i]-=amount;s.points[winner]+=amount;}
    }
  }
  function manualJudged(s,seat,source,tile,fanNos){
    if(s.mode!=='mcr')return null;
    const hand=tile?s.hands[seat].concat(tile):s.hands[seat];
    return MCR.manual(hand,s.melds[seat],{source,flowers:s.flowers[seat].length},fanNos);
  }
  function applyWin(s,seat,source,discarder,tile,judged){
    payment(s,seat,source,discarder,judged);
    const win={seat,source,discarder:source==='discard'?discarder:null,tile:tile||null,judged:copy(judged)};
    s.winners.push(win);log(s,'win',seat,{source,tile:tile||null,discarder:win.discarder});
    if(s.mode==='sc'){
      s.active[seat]=false;
      if(s.active.filter(Boolean).length<=1){s.phase='ended';s.result={type:'three-wins',winners:copy(s.winners),points:s.points.slice(),wallRemaining:s.wall.length};}
    }else{s.phase='ended';s.result={type:'win',winners:copy(s.winners),points:s.points.slice(),wallRemaining:s.wall.length};}
  }
  function nextTurn(s,after){
    if(s.phase==='ended')return;
    if(!s.wall.length){endDraw(s);return;}
    const next=nextActive(s,after);if(next<0){endDraw(s);return;}
    s.turn=next;s.needDraw=true;s.phase='turn';s.pending=null;s.turnSource='await';
  }
  function applyClaim(s,seat,choice){
    const p=s.pending;if(!p)return false;
    const matched=claimChoices(s,seat,p.discarder,p.tile).find(x=>x.id===choice.id);
    if(!matched)return false;
    const hand=s.hands[seat];
    for(const tile of matched.used){const i=hand.indexOf(tile);if(i<0)return false;hand.splice(i,1);}
    const pile=s.discards[p.discarder];if(pile[pile.length-1]!==p.tile)return false;pile.pop();
    const meld={type:matched.kind,tiles:matched.used.concat([p.tile]),baseTile:p.tile,from:p.discarder,concealed:false};
    s.melds[seat].push(meld);sortHand(hand);log(s,'claim',seat,{kind:matched.kind,tile:p.tile,from:p.discarder});
    s.turn=seat;s.needDraw=false;s.phase='turn';s.pending=null;s.lastDiscard=null;s.turnSource='claim';
    if(matched.kind==='kong'){
      if(s.mode==='sc')applyKongPayment(s,seat,'discard',p.discarder);
      if(s.mode!=='am')draw(s,seat,true);
    }
    return true;
  }
  function applyKongPayment(s,seat,type,discarder){
    if(s.mode!=='sc')return;
    const activeOpp=s.active.filter((x,i)=>x&&i!==seat).length;
    const bill=SCScore.kongPayment({type,activeOpponents:activeOpp});if(!bill)return;
    if(type==='discard'){s.points[discarder]-=bill.total;s.points[seat]+=bill.total;}
    else for(let i=0;i<4;i++)if(i!==seat&&s.active[i]){s.points[i]-=bill.paymentEach;s.points[seat]+=bill.paymentEach;}
    log(s,'kong-payment',seat,{type,total:bill.total});
  }
  function robKongTile(s,p){
    const hand=s.hands[p.discarder],i=hand.indexOf(p.tile);if(i<0)return false;
    hand.splice(i,1);s.discards[p.discarder].push(p.tile);s.lastDiscard={seat:p.discarder,tile:p.tile};return true;
  }
  function finishBotAddedKong(s,p){
    const hand=s.hands[p.discarder],i=hand.indexOf(p.tile),m=s.melds[p.discarder][p.meldIndex];
    if(i<0||!m||m.type!=='pung')return false;
    hand.splice(i,1);m.type='kong';m.tiles.push(p.tile);log(s,'kong',p.discarder,{kind:'added',tile:p.tile});
    s.pending=null;s.phase='turn';s.turn=p.discarder;s.needDraw=false;s.lastDiscardMethod=null;
    draw(s,p.discarder,true);return true;
  }
  function botClaim(s,discarder,tile){
    if(s.mode==='mcr'){
      const calls=[];for(let gap=1;gap<4;gap++){const seat=(discarder+gap)%4;if(seat===0)continue;
        for(const option of claimChoices(s,seat,discarder,tile))calls.push({seat,gap,option});}
      calls.sort((a,b)=>(a.option.kind==='chow'?1:0)-(b.option.kind==='chow'?1:0)||a.gap-b.gap||(a.option.kind==='kong'?0:1)-(b.option.kind==='kong'?0:1));
      if(calls.length){s.pending={discarder,tile};applyClaim(s,calls[0].seat,calls[0].option);return true;}
      return false;
    }
    for(let gap=1;gap<4;gap++){
      const seat=(discarder+gap)%4;if(seat===0||!s.active[seat])continue;
      const options=claimChoices(s,seat,discarder,tile);
      const chow=options.find(x=>x.kind==='chow');
      const hkFlush=s.mode==='hk'&&new Set(s.hands[seat].concat(s.melds[seat].flatMap(m=>m.tiles),tile).filter(t=>'mps'.includes(t[0])).map(t=>t[0])).size===1;
      const chosen=options.find(x=>x.kind==='pung')||(s.mode==='hk'&&!hkFlush?null:chow);
      if(chosen){s.pending={discarder,tile};applyClaim(s,seat,chosen);return true;}
    }
    return false;
  }
  function resolveAfterPass(s){
    const p=s.pending;if(!p)return;
    if(p.robKong){
      const winners=getWinnerOptions(s,p.discarder,p.tile).filter(x=>x.seat!==0);
      if(winners.length){robKongTile(s,p);applyWin(s,winners[0].seat,'discard',p.discarder,p.tile,winners[0].judged);return;}
      finishBotAddedKong(s,p);return;
    }
    const winners=getWinnerOptions(s,p.discarder,p.tile).filter(x=>x.seat!==0);
    if(winners.length){
      const chosen=s.mode==='sc'?winners:[winners[0]];
      for(const item of chosen){applyWin(s,item.seat,'discard',p.discarder,p.tile,item.judged);if(s.phase==='ended')return;}
      nextTurn(s,p.discarder);return;
    }
    const d=p.discarder,t=p.tile;s.pending=null;
    if(botClaim(s,d,t))return;
    nextTurn(s,d);
  }
  function resolveDiscard(s,discarder,tile){
    if(discarder!==0&&s.active[0]){s.pending={discarder,tile};s.phase='claim';return;}
    const winners=getWinnerOptions(s,discarder,tile);
    if(winners.length){for(const item of (s.mode==='sc'?winners:[winners[0]])){applyWin(s,item.seat,'discard',discarder,tile,item.judged);if(s.phase==='ended')return;}nextTurn(s,discarder);return;}
    s.pending={discarder,tile};resolveAfterPass(s);
  }
  function discard(s,seat,index){
    if(!legalDiscards(s,seat).includes(index))return false;
    const tile=s.hands[seat].splice(index,1)[0];s.discards[seat].push(tile);s.lastDiscard={seat,tile};s.lastDiscardMethod=s.mode==='mcr'&&s.wall.length===0?'last-discard':'normal';
    log(s,'discard',seat,{tile});resolveDiscard(s,seat,tile);return true;
  }
  function botDiscardIndex(s,seat){
    const legal=legalDiscards(s,seat);if(!legal.length)return -1;
    let best=legal[0],value=Infinity;
    for(const i of legal){const t=s.hands[seat][i],v=support(s.hands[seat],t)+((s.mode==='am'&&t==='j1')?100:0);
      if(v<value||(v===value&&order(t)>order(s.hands[seat][best]))){best=i;value=v;}}
    return best;
  }
  function runAuto(s){
    let guard=0;
    while(s.phase!=='ended'&&guard++<1000){
      if(s.phase==='claim')return s;
      if(s.phase!=='turn')return s;
      const seat=s.turn;
      if(seat===0){if(s.needDraw){if(!draw(s,0,false))return s;s.needDraw=false;}return s;}
      if(s.needDraw){if(!draw(s,seat,false))return s;s.needDraw=false;}
      const judged=s.turnSource!=='draw'?null:Judges.judge(s.mode,s,seat,'selfDraw');
      if(judged?.legal){applyWin(s,seat,'selfDraw',null,null,judged);if(s.phase==='ended')return s;nextTurn(s,seat);continue;}
      if(s.mode==='mcr'&&s.wall.length){
        const added=s.melds[seat].map((m,i)=>({m,i})).find(x=>x.m.type==='pung'&&s.hands[seat].includes(x.m.tiles[0]));
        if(added){const tile=added.m.tiles[0];s.pending={discarder:seat,tile,robKong:true,meldIndex:added.i};s.lastDiscardMethod='rob-kong';
          log(s,'kong-attempt',seat,{tile});const canReview=MCR.shape(s.hands[0].concat(tile),s.melds[0]);
          if(canReview){s.phase='claim';return s;}
          resolveAfterPass(s);if(s.phase==='ended')return s;continue;
        }
        const c=counts(s.hands[seat]),four=Object.keys(c).find(t=>c[t]===4);
        if(four&&s.melds[seat].length<4){for(let n=0;n<4;n++)s.hands[seat].splice(s.hands[seat].indexOf(four),1);
          s.melds[seat].push({type:'kong',tiles:Array(4).fill(four),baseTile:four,from:seat,concealed:true});
          log(s,'kong',seat,{kind:'concealed',tile:four});draw(s,seat,true);if(s.phase==='ended')return s;continue;}
      }
      const idx=botDiscardIndex(s,seat);if(idx<0){endDraw(s);return s;}
      discard(s,seat,idx);
    }
    if(guard>=1000&&s.phase!=='ended'){s.phase='ended';s.result={type:'safety-stop',winners:copy(s.winners),points:s.points.slice(),wallRemaining:s.wall.length};}
    return s;
  }
  function available(state){
    if(!validState(state))return null;
    const s=state;
    if(s.phase==='ended')return {phase:'ended'};
    if(s.phase==='exchange')return {phase:'exchange',selectionCount:3};
    if(s.phase==='missing')return {phase:'missing',suits:['m','p','s']};
    if(s.phase==='charleston')return {phase:'charleston',selectionCount:3,step:s.charlestonStep,direction:charlestonDirection(s.charlestonStep)};
    if(s.phase==='claim'){
      const p=s.pending;if(!p)return null;
      const result=[{id:'pass',kind:'pass',used:[]}];
      const win=Judges.judge(s.mode,s,0,'discard',p.tile);
      const botWinner=s.mode==='mcr'?getWinnerOptions(s,p.discarder,p.tile).find(x=>x.seat!==0):null;
      const myDistance=(4-p.discarder)%4;
      const canOutrankBot=!botWinner||myDistance<(botWinner.seat-p.discarder+4)%4;
      if(win?.legal&&canOutrankBot)result.push({id:'win',kind:'win',used:[]});
      if(s.mode==='mcr'&&win?.shapeValid&&canOutrankBot)result.push({id:'review',kind:'review',used:[]});
      if(!getWinnerOptions(s,p.discarder,p.tile).some(x=>x.seat!==0)){
        const mine=claimChoices(s,0,p.discarder,p.tile),others=s.mode==='mcr'?[1,2,3].filter(i=>i!==p.discarder).flatMap(i=>claimChoices(s,i,p.discarder,p.tile).map(x=>({seat:i,kind:x.kind}))):[];
        if(!p.robKong)result.push(...mine.filter(x=>s.mode!=='mcr'||!others.some(y=>y.kind!=='chow'&&(x.kind==='chow'||(x.kind==='pung'||x.kind==='kong')&&(y.seat-p.discarder+4)%4<(4-p.discarder)%4))));
      }
      return {phase:'claim',discard:p.tile,from:p.discarder,robKong:!!p.robKong,assessment:s.mode==='mcr'?win:null,actions:result};
    }
    if(s.phase!=='turn'||s.turn!==0)return null;
    const win=s.turnSource!=='draw'?null:Judges.judge(s.mode,s,0,'selfDraw');
    const kongs=[];
    if(s.mode!=='am'&&s.wall.length){
      const c=counts(s.hands[0]);for(const tile of Object.keys(c))if(c[tile]===4&&s.melds[0].length<4)kongs.push({kind:'concealed',tile});
      s.melds[0].forEach((m,i)=>{if(m.type==='pung'&&s.hands[0].includes(m.tiles[0]))kongs.push({kind:'added',tile:m.tiles[0],meldIndex:i});});
    }
    const exchanges=[];
    if(s.mode==='am')for(let seat=0;seat<4;seat++)s.melds[seat].forEach((m,mi)=>{
      if(m.tiles.includes('j1')&&m.baseTile&&s.hands[0].includes(m.baseTile))exchanges.push({seat,meldIndex:mi,tile:m.baseTile});
    });
    return {phase:'turn',discards:legalDiscards(s,0),canWin:!!win?.legal,win:win?.legal?win:null,reviewWin:s.mode==='mcr'&&!!win?.shapeValid,assessment:s.mode==='mcr'?win:null,kongs,exchanges};
  }
  function act(state,action){
    if(!validState(state)||!action||typeof action!=='object'||Array.isArray(action))return {state:null,accepted:false,reason:'invalid'};
    const s=copy(state),bad=reason=>({state:copy(state),accepted:false,reason});
    if(s.phase==='ended')return bad('finished');
    if(s.phase==='exchange'){
      if(action.type!=='exchange'||!exchangeThree(s,action.indices))return bad('invalid-exchange');
      return {state:s,accepted:true,reason:'ok'};
    }
    if(s.phase==='missing'){
      if(action.type!=='missing'||!['m','p','s'].includes(action.suit))return bad('invalid-suit');
      s.missingSuit[0]=action.suit;for(let i=1;i<4;i++)s.missingSuit[i]=botMissing(s.hands[i]);
      s.phase='turn';log(s,'missing',0,{suit:action.suit});return {state:s,accepted:true,reason:'ok'};
    }
    if(s.phase==='charleston'){
      if(action.type!=='charleston'||!charleston(s,action.indices))return bad('invalid-pass');
      return {state:s,accepted:true,reason:'ok'};
    }
    if(s.phase==='claim'){
      if(action.type==='manual-win'){
        const p=s.pending,judged=manualJudged(s,0,'discard',p?.tile,action.fanNos);
        if(!p||!judged)return bad('invalid-manual-score');
        if(!available(s).actions.some(x=>x.id==='review'))return bad('claim-priority');
        if(p.robKong&&!robKongTile(s,p))return bad('invalid-rob-kong');
        applyWin(s,0,'discard',p.discarder,p.tile,judged);return {state:s,accepted:true,reason:'ok'};
      }
      const opts=available(s).actions,found=opts.find(x=>x.id===action.id);
      if(action.type!=='claim'||!found)return bad('invalid-claim');
      if(found.kind==='pass'){log(s,'pass',0,{tile:s.pending.tile});resolveAfterPass(s);runAuto(s);return {state:s,accepted:true,reason:'ok'};}
      if(found.kind==='win'){
        const p=s.pending,judged=Judges.judge(s.mode,s,0,'discard',p.tile);
        if(p.robKong&&!robKongTile(s,p))return bad('invalid-rob-kong');
        applyWin(s,0,'discard',p.discarder,p.tile,judged);
        if(s.mode==='sc'&&s.phase!=='ended'){
          for(const item of getWinnerOptions(s,p.discarder,p.tile).filter(x=>x.seat!==0)){applyWin(s,item.seat,'discard',p.discarder,p.tile,item.judged);if(s.phase==='ended')break;}
          if(s.phase!=='ended')nextTurn(s,p.discarder);
          runAuto(s);
        }
        return {state:s,accepted:true,reason:'ok'};
      }
      if(!applyClaim(s,0,found))return bad('invalid-claim');
      return {state:s,accepted:true,reason:'ok'};
    }
    if(s.phase!=='turn'||s.turn!==0)return bad('not-your-turn');
    if(action.type==='manual-win'){
      if(s.mode==='mcr'&&s.turnSource!=='draw')return bad('not-drawn');
      const judged=manualJudged(s,0,'selfDraw',null,action.fanNos);if(!judged)return bad('invalid-manual-score');
      applyWin(s,0,'selfDraw',null,null,judged);return {state:s,accepted:true,reason:'ok'};
    }
    if(action.type==='win'){
      if(s.mode==='mcr'&&s.turnSource!=='draw')return bad('not-drawn');
      const judged=Judges.judge(s.mode,s,0,'selfDraw');if(!judged?.legal)return bad('not-winning');
      applyWin(s,0,'selfDraw',null,null,judged);
      if(s.mode==='sc'&&s.phase!=='ended'){nextTurn(s,0);runAuto(s);}
      return {state:s,accepted:true,reason:'ok'};
    }
    if(action.type==='discard'){
      if(!Number.isInteger(action.index)||!discard(s,0,action.index))return bad('invalid-discard');
      runAuto(s);return {state:s,accepted:true,reason:'ok'};
    }
    if(action.type==='kong'&&s.mode!=='am'){
      const opts=available(s).kongs,match=opts.find(x=>x.kind===action.kind&&x.tile===action.tile&&x.meldIndex===action.meldIndex);
      if(!match)return bad('invalid-kong');
      const hand=s.hands[0];
      if(s.mode==='mcr'&&match.kind==='added'){
        s.lastDiscardMethod='rob-kong';
        const robbers=getWinnerOptions(s,0,match.tile);
        if(robbers.length){hand.splice(hand.indexOf(match.tile),1);s.discards[0].push(match.tile);s.lastDiscard={seat:0,tile:match.tile};
          applyWin(s,robbers[0].seat,'discard',0,match.tile,robbers[0].judged);return {state:s,accepted:true,reason:'ok'};}
        s.lastDiscardMethod=null;
      }
      if(match.kind==='concealed'){
        for(let n=0;n<4;n++)hand.splice(hand.indexOf(match.tile),1);
        s.melds[0].push({type:'kong',tiles:Array(4).fill(match.tile),baseTile:match.tile,from:0,concealed:true});
        applyKongPayment(s,0,'concealed',null);
      }else{
        hand.splice(hand.indexOf(match.tile),1);const meld=s.melds[0][match.meldIndex];meld.type='kong';meld.tiles.push(match.tile);
        applyKongPayment(s,0,'added',null);
      }
      log(s,'kong',0,{kind:match.kind,tile:match.tile});draw(s,0,true);sortHand(hand);
      return {state:s,accepted:true,reason:'ok'};
    }
    if(action.type==='joker-exchange'&&s.mode==='am'){
      const match=available(s).exchanges.find(x=>x.seat===action.seat&&x.meldIndex===action.meldIndex&&x.tile===action.tile);
      if(!match)return bad('invalid-joker-exchange');
      const hand=s.hands[0],m=s.melds[match.seat][match.meldIndex],i=hand.indexOf(match.tile),j=m.tiles.indexOf('j1');
      hand.splice(i,1);hand.push('j1');m.tiles[j]=match.tile;sortHand(hand);log(s,'joker-exchange',0,{tile:match.tile,from:match.seat});
      return {state:s,accepted:true,reason:'ok'};
    }
    return bad('invalid-action');
  }
  function tilesInState(s){return s.hands.flat().concat(s.wall,s.melds.flatMap(allMeldTiles),s.discards.flat(),s.flowers?.flat()||[]);}
  const api={start,available,act,runAuto,tilesInState};
  g.MahjongFullPlayEngine=api;
  if(isNode)module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:window);
