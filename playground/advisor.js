/* Advice uses only the player's hand, exposed melds, discards and public settings. */
(function(g){
  'use strict';
  const isNode=typeof module!=='undefined'&&module.exports;
  const Engine=isNode?require('./full-engine.js'):g.MahjongFullPlayEngine;
  const HK=isNode?require('../course/hk-rules.js'):g.HKLearningRules;
  const SC=isNode?require('../course/sichuan-rules.js'):g.SichuanLearningRules;
  const MCR=isNode?require('../course/mcr-score.js'):g.MahjongMCRScore;
  const L=(zh,tw,en)=>({zh,tw,en});
  const suitName={m:L('万','萬','craks'),p:L('筒','筒','dots'),s:L('条','索','bams')};
  function tileName(t,lang){if(t==='j1')return 'Joker';if('mps'.includes(t[0]))return `${t[1]} ${suitName[t[0]][lang]}`;if(t[0]==='z')return (lang==='en'?['East','South','West','North','Red','Green','White']:lang==='tw'?['東','南','西','北','中','發','白']:['东','南','西','北','中','发','白'])[Number(t[1])-1];if(t[0]==='f')return (lang==='en'?['Spring','Summer','Autumn','Winter','Plum','Orchid','Chrysanthemum','Bamboo']:lang==='tw'?['春','夏','秋','冬','梅','蘭','菊','竹']:['春','夏','秋','冬','梅','兰','菊','竹'])[Number(t[1])-1]||t;return t;}
  const cts=h=>{const c={};for(const t of h)c[t]=(c[t]||0)+1;return c;};
  const totalCopies=t=>t[0]==='f'?1:t==='j1'?8:4;
  function visible(s){return s.hands[0].concat(s.melds.flatMap(ms=>ms.flatMap(m=>m.tiles)),s.discards.flat(),s.flowers?.flat()||[]);}
  function remaining(s,tile){return Math.max(0,totalCopies(tile)-(cts(visible(s))[tile]||0));}
  function value(hand,t){
    const c=cts(hand),n=Number(t[1]);let v=(c[t]||0)*3;
    if('mps'.includes(t[0]))for(const d of [-2,-1,1,2]){const x=n+d;if(x>=1&&x<=9)v+=(c[t[0]+x]||0)*(Math.abs(d)===1?2:1);}
    if(t==='j1')v+=12;
    return v;
  }
  function textFor(s,t,retained,seen){
    const c=cts(retained),groups=[];
    for(const x of Object.keys(c))if(c[x]>=3)groups.push([x,x,x]);
    if(s.mode!=='am')for(const suit of 'mps')for(let n=1;n<=7;n++)if(c[suit+n]&&c[suit+(n+1)]&&c[suit+(n+2)])groups.push([suit+n,suit+(n+1),suit+(n+2)]);
    for(const x of Object.keys(c))if(c[x]>=2)groups.push([x,x]);
    if(s.mode!=='am')for(const suit of 'mps')for(let n=1;n<=8;n++)if(c[suit+n]&&c[suit+(n+1)])groups.push([suit+n,suit+(n+1)]);
    const keep=groups.slice(0,2);
    const missing=s.mode==='sc'&&s.missingSuit[0]===t[0];
    return {
      title:L('建议打这张','建議打這張','Suggested discard'),tile:t,
      reason:missing?L('先打完定缺花色；保留其他两门的连接。','先打完定缺花色；保留其他兩門的連接。','Clear the missing suit first; keep links in the other two suits.'):
        s.mode==='am'?L('这张与当前对子、刻子和 Joker 的搭配较少；对照原创教学卡样继续整理。','這張與當前對子、刻子和 Joker 的搭配較少；對照原創教學卡樣繼續整理。','This tile supports fewer current pairs, groups or jokers. Compare your hand with the original practice card.'):
        L('这张与手牌的相邻牌或对子连接较少；尽量保留已有组合。','這張與手牌的相鄰牌或對子連接較少；盡量保留已有組合。','This tile connects less with nearby tiles or pairs. Keep your stronger groups.'),
      keep,seen,remaining:remaining(s,t)
    };
  }
  function advice(s){
    if(!s||s.phase!=='turn'||s.turn!==0)return null;
    const a=Engine.available(s);if(!a?.discards?.length)return null;
    const hand=s.hands[0],scMissing=s.mode==='sc'&&hand.some(x=>x[0]===s.missingSuit[0]);
    const visCounts=cts(visible(s)),handCounts=cts(hand);
    const remOf=tile=>Math.max(0,totalCopies(tile)-(visCounts[tile]||0));
    const choices=s.mode==='sc'?'mps'.split('').flatMap(k=>Array.from({length:9},(_,n)=>k+(n+1))):'mps'.split('').flatMap(k=>Array.from({length:9},(_,n)=>k+(n+1))).concat(Array.from({length:7},(_,n)=>'z'+(n+1)));
    const candidates=a.discards.map(i=>{
      const t=hand[i],rest=hand.slice(0,i).concat(hand.slice(i+1));
      let wait=0;
      if(s.mode==='hk'||s.mode==='sc'||s.mode==='mcr'){
        for(const x of choices){const rem=remOf(x);if(rem<=0)continue;
          const ok=s.mode==='hk'?HK.isWinning(rest.concat(x),s.melds[0]):s.mode==='mcr'?MCR.shape(rest.concat(x),s.melds[0]):SC.isWinning(rest.concat(x),s.melds[0],s.missingSuit[0]);
          if(ok)wait+=rem;
        }
      }
      const isolation=value(rest,t),publicSeen=totalCopies(t)-remOf(t)-(handCounts[t]||0);
      const score=wait*100-isolation*3+Math.max(0,publicSeen)*.5+(scMissing&&t[0]===s.missingSuit[0]?1000:0);
      return {i,t,rest,wait,score,seen:Math.max(0,publicSeen)};
    }).sort((a,b)=>b.score-a.score||a.i-b.i);
    const best=candidates[0],result=textFor(s,best.t,best.rest,best.seen);
    result.index=best.i;result.waitCount=best.wait;result.visibleOnly=true;
    if(best.wait>0)result.waitNote=L(`按牌型可见约 ${best.wait} 张有效牌；实际胡牌仍需核对番数。`,`按牌型可見約 ${best.wait} 張有效牌；實際胡牌仍需核對番數。`,`About ${best.wait} visible outs complete the shape; scoring still needs checking.`);
    return result;
  }
  function hint(s){
    if(!s)return null;
    if(s.phase==='exchange')return L('选三张同一花色交换；看看哪一门最分散。','選三張同一花色交換；看看哪一門最分散。','Pass three tiles of one suit. Look for your least connected suit.');
    if(s.phase==='missing')return L('定缺后必须先打光这一门，且胡牌时不能含这一门。','定缺後必須先打光這一門，且胡牌時不能含這一門。','After choosing a missing suit, clear it first and keep it out of your winning hand.');
    if(s.phase==='charleston')return L('每次传三张，不能传 Joker；优先留下对子和相同牌。','每次傳三張，不能傳 Joker；優先留下對子和相同牌。','Pass three tiles, never a Joker. Keep pairs and matching groups.');
    if(s.phase==='claim')return L('观察这张弃牌能否让你胡牌；碰或吃会公开牌组，也会改变摸牌顺序。','觀察這張棄牌能否讓你胡牌；碰或吃會公開牌組，也會改變摸牌順序。','Check whether this discard completes your hand. Claiming exposes a group and changes turn order.');
    if(s.phase==='ended')return L('复盘：比较公开弃牌和你的手牌，看看哪些等待已经变少。','複盤：比較公開棄牌和你的手牌，看看哪些等待已經變少。','Review your hand against public discards to spot waits that became scarce.');
    const last=s.lastDiscard?.tile,wall=s.wall.length,active=s.active.filter(Boolean).length;
    const publicCount=cts(s.discards.flat().concat(s.melds.flatMap(ms=>ms.flatMap(m=>m.tiles))));
    const top=Object.entries(publicCount).sort((a,b)=>b[1]-a[1])[0];
    const observe=top&&top[1]>=2?L(`公开区已有 ${top[1]} 张 ${tileName(top[0],'zh')}，留意它的剩余张数。`,`公開區已有 ${top[1]} 張 ${tileName(top[0],'tw')}，留意它的剩餘張數。`,`There are ${top[1]} public copies of ${tileName(top[0],'en')}; check how many remain.`):L('查看各家的弃牌，判断等待是否变少。','查看各家的棄牌，判斷等待是否變少。','Check each discard pool for shrinking waits.');
    const join=base=>L(`${base.zh} ${observe.zh}`,`${base.tw} ${observe.tw}`,`${base.en} ${observe.en}`);
    if(s.mode==='sc')return join(L(`仍有 ${active} 人摸打，牌墙 ${wall} 张。`,`仍有 ${active} 人摸打，牌牆 ${wall} 張。`,`${active} players remain; the wall has ${wall} tiles.`));
    if(s.mode==='am')return join(L(`牌墙 ${wall} 张。Joker 只能用于三张及以上的组。`,`牌牆 ${wall} 張。Joker 只能用於三張及以上的組。`,`Wall: ${wall}. Jokers go in groups of three or more.`));
    if(s.mode==='mcr')return join(L(`牌墙 ${wall} 张，已补花 ${s.flowers[0].length} 张；起和须有 8 个非花番种分。`,`牌牆 ${wall} 張，已補花 ${s.flowers[0].length} 張；起和須有 8 個非花番種分。`,`Wall: ${wall}; your flowers: ${s.flowers[0].length}. A win needs eight non-flower points.`));
    return join(L(`牌墙 ${wall} 张；胡牌还需满足本桌最低番数。`,`牌牆 ${wall} 張；胡牌還需滿足本桌最低番數。`,`Wall: ${wall}. A win must meet the table's minimum fan.`));
  }
  const api={advice,hint,remaining,visible};g.MahjongFullPlayAdvisor=api;if(isNode)module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:window);
