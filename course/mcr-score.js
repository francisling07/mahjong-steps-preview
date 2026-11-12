/* Conservative WMO MCR practice adjudication. Uncovered fan combinations remain reviewable. */
(function(g){
  'use strict';
  const isNode=typeof module!=='undefined'&&module.exports;
  const F=isNode?require('./mcr-fans.js'):g.MahjongMCRFans;
  const HK=isNode?require('./hk-rules.js'):g.HKLearningRules;
  const terminal=t=>t[0]==='z'||t[1]==='1'||t[1]==='9';
  const suit=t=>'mps'.includes(t[0]);
  const count=a=>{const c=Object.create(null);for(const x of a)c[x]=(c[x]||0)+1;return c;};
  const points=no=>F.byNo(no).points;
  const ORPHANS=['m1','m9','p1','p9','s1','s9','z1','z2','z3','z4','z5','z6','z7'];
  function decompose(h,ms){const c=count(h),out=[],needed=4-ms.length,exposed=ms.map(m=>({...m,tiles:m.tiles.slice().sort(),exposed:true}));
    function solve(chosen,pair){const keys=Object.keys(c).filter(t=>c[t]>0).sort();if(chosen.length===needed){if(!keys.length)out.push({groups:exposed.concat(chosen),pair});return;}if(!keys.length)return;
      const t=keys[0];if(c[t]>=3){c[t]-=3;solve(chosen.concat({type:'pung',tiles:[t,t,t]}),pair);c[t]+=3;}
      if(/^[mps][1-7]$/.test(t)){const a=t[0]+(Number(t[1])+1),b=t[0]+(Number(t[1])+2);if(c[a]>0&&c[b]>0){c[t]--;c[a]--;c[b]--;solve(chosen.concat({type:'chow',tiles:[t,a,b]}),pair);c[t]++;c[a]++;c[b]++;}}
    }
    for(const p of Object.keys(c).sort())if(c[p]>=2){c[p]-=2;solve([],p);c[p]+=2;}return out;
  }
  function sevenPairs(h,ms){return !ms.length&&h.length===14&&Object.values(count(h)).every(n=>n===2||n===4);}
  function orphans(h,ms){const c=count(h);return !ms.length&&h.length===14&&ORPHANS.every(t=>c[t]>=1)&&Object.keys(c).length===13&&Object.values(c).filter(n=>n===2).length===1;}
  function shiftedSeven(h,ms){if(!sevenPairs(h,ms))return false;const c=count(h),keys=Object.keys(c).sort();return keys.length===7&&keys.every((t,i)=>t[0]===keys[0][0]&&Number(t[1])===Number(keys[0][1])+i&&c[t]===2);}
  function nineGates(h,ms,winTile){if(ms.length||h.length!==14||!winTile||h.some(t=>!suit(t)||t[0]!==h[0][0]))return false;
    const c=count(h),s=h[0][0];if(!c[winTile])return false;c[winTile]--;
    return c[s+'1']===3&&c[s+'9']===3&&Array.from({length:7},(_,i)=>s+(i+2)).every(t=>c[t]===1);
  }
  function knittedKind(h,ms){if(ms.length||h.length!==14||new Set(h).size!==14)return null;
    const honors=['z1','z2','z3','z4','z5','z6','z7'],perms=['mps','msp','pms','psm','smp','spm'];
    for(const perm of perms){const grid=honors.concat([1,4,7].map(n=>perm[0]+n),[2,5,8].map(n=>perm[1]+n),[3,6,9].map(n=>perm[2]+n));
      if(h.every(t=>grid.includes(t)))return honors.every(t=>h.includes(t))?20:34;
    }return null;
  }
  function knittedStraight(h,ms){if(ms.length>1)return false;
    for(const perm of ['mps','msp','pms','psm','smp','spm']){
      const grid=[1,4,7].map(n=>perm[0]+n).concat([2,5,8].map(n=>perm[1]+n),[3,6,9].map(n=>perm[2]+n));
      const c=count(h);if(!grid.every(t=>c[t]>=1))continue;for(const t of grid)c[t]--;
      const rest=Object.entries(c).flatMap(([t,n])=>Array(n).fill(t));
      if(ms.length===1){if(rest.length===2&&rest[0]===rest[1])return true;continue;}
      if(rest.length!==5)continue;
      for(const p of new Set(rest)){if(rest.filter(t=>t===p).length<2)continue;
        const three=rest.slice(),i=three.indexOf(p);three.splice(i,1);three.splice(three.indexOf(p),1);three.sort();
        if(three.every(t=>t===three[0])||three.every(t=>suit(t)&&t[0]===three[0][0])&&Number(three[0][1])+1===Number(three[1][1])&&Number(three[1][1])+1===Number(three[2][1]))return true;
      }
    }return false;
  }
  function validate(h,ms){if(!Array.isArray(h)||!Array.isArray(ms)||ms.length>4||h.some(t=>!/^[mps][1-9]$|^z[1-7]$/.test(t)))return false;
    const all=h.concat(ms.flatMap(m=>m?.tiles||[])),c=count(all);if(Object.values(c).some(n=>n>4)||all.some(t=>!/^[mps][1-9]$|^z[1-7]$/.test(t)))return false;
    if(h.length!==14-3*ms.length)return false;
    return ms.every(m=>{
      if(!m||!['chow','pung','kong'].includes(m.type)||!Array.isArray(m.tiles)||m.tiles.length!==(m.type==='kong'?4:3))return false;
      if(m.type!=='chow')return m.tiles.every(t=>t===m.tiles[0]);
      const ts=m.tiles.slice().sort();return ts.every(t=>suit(t)&&t[0]===ts[0][0])&&Number(ts[0][1])+1===Number(ts[1][1])&&Number(ts[1][1])+1===Number(ts[2][1]);
    });}
  function shape(h,ms){return validate(h,ms)&&(HK.isWinning(h,ms)||sevenPairs(h,ms)||orphans(h,ms)||!!knittedKind(h,ms)||knittedStraight(h,ms));}
  const basicTiles='mps'.split('').flatMap(s=>Array.from({length:9},(_,i)=>s+(i+1))).concat(Array.from({length:7},(_,i)=>'z'+(i+1)));
  function soleWait(h,ms,winTile){if(!winTile||!h.includes(winTile))return false;
    const pre=h.slice();pre.splice(pre.indexOf(winTile),1);const physical=count(pre.concat(ms.flatMap(m=>m.tiles)));
    const waits=basicTiles.filter(t=>(physical[t]||0)<4&&shape(pre.concat(t),ms));
    return waits.length===1&&waits[0]===winTile;
  }
  function waitFan(layout,winTile){if(!layout)return null;
    if(layout.pair===winTile)return 79;
    for(const m of layout.groups)if(m.type==='chow'&&m.tiles.includes(winTile)){
      const start=m.tiles[0];if(start[1]==='1'&&winTile===start[0]+'3'||start[1]==='7'&&winTile===start[0]+'7')return 77;
      if(winTile===m.tiles[1])return 78;
    }return null;
  }
  function settlement(baseFan,flowerFan,source){const score=baseFan+flowerFan;if(source==='selfDraw')return {paymentEach:8+score,total:3*(8+score),payerCount:3};return {discarder:8+score,others:8,total:24+score};}
  function evaluate(h,ms,ctx={}){
    if(!shape(h,ms))return {shapeValid:false,coverage:'partial',legal:false,baseFan:0,flowerFan:0,totalFan:0,breakdown:[],reason:'invalid-shape',settlement:null};
    const source=ctx.source==='discard'?'discard':'selfDraw',all=h.concat(ms.flatMap(m=>m.tiles)),cts=count(all),f=Number.isInteger(ctx.flowers)?Math.max(0,Math.min(8,ctx.flowers)):0;
    const layouts=decompose(h,ms),special=orphans(h,ms)?7:shiftedSeven(h,ms)?6:sevenPairs(h,ms)?19:knittedKind(h,ms)||knittedStraight(h,ms)&&35;
    const onlyWait=soleWait(h,ms,ctx.winTile);
    const alternatives=layouts.length?layouts:[null];let best=null;
    for(const layout of alternatives){
      const found=[],add=(no,n=1)=>{for(let k=0;k<n;k++)found.push(no);};
      const groups=layout?.groups||[],pungs=groups.filter(x=>x.type==='pung'||x.type==='kong'),chows=groups.filter(x=>x.type==='chow'),kongs=groups.filter(x=>x.type==='kong'),pair=layout?.pair;
      const groupTile=x=>x.tiles[0],pungTiles=pungs.map(groupTile),chowStarts=chows.map(groupTile),suits=new Set(all.filter(suit).map(t=>t[0])),honors=all.some(t=>t[0]==='z'),winds=pungTiles.filter(t=>/^z[1-4]$/.test(t)),dragons=pungTiles.filter(t=>/^z[5-7]$/.test(t));
      if(special)add(special);
      if(nineGates(h,ms,ctx.winTile))add(4);
      if(all.every(t=>['s2','s3','s4','s6','s8','z6'].includes(t)))add(3);
      if(all.every(t=>['p1','p2','p3','p4','p5','p8','p9','s2','s4','s5','s6','s8','s9','z7'].includes(t)))add(40);
      if(kongs.length===4)add(5);else if(kongs.length===3)add(17);
      if(winds.length===4)add(1);else if(winds.length===3&&/^z[1-4]$/.test(pair||'')&&!winds.includes(pair))add(9);else if(winds.length===3)add(38);
      if(dragons.length===3)add(2);else if(dragons.length===2&&/^z[5-7]$/.test(pair||'')&&!dragons.includes(pair))add(10);else if(dragons.length===2)add(54);
      if(layout&&all.every(t=>t[0]==='z'))add(11);
      if(layout&&all.every(t=>suit(t)&&['1','9'].includes(t[1]))&&pungs.length===4)add(8);
      if(layout&&all.every(terminal)&&honors&&all.some(suit)&&pungs.length===4)add(18);
      if(layout&&all.every(t=>suit(t)&&['2','4','6','8'].includes(t[1]))&&pungs.length===4)add(21);
      if(layout&&chows.length===4&&suits.size===1&&!honors&&pair&&pair[1]==='5'){
        const starts=chowStarts.map(t=>Number(t[1])).sort((a,b)=>a-b).join(',');if(starts==='1,1,7,7')add(13);
      }
      if(layout&&pungs.length===4)add(49);
      if(layout&&chows.length===4&&pair&&suit(pair))add(63);
      if(suits.size===1&&!honors)add(22);else if(suits.size===1&&honors)add(50);
      if(layout&&all.every(t=>suit(t)&&Number(t[1])>=7))add(25);
      else if(layout&&all.every(t=>suit(t)&&Number(t[1])<=3))add(27);
      else if(layout&&all.every(t=>suit(t)&&Number(t[1])>=4&&Number(t[1])<=6))add(26);
      else if(all.every(t=>suit(t)&&Number(t[1])>=6))add(36);
      else if(all.every(t=>suit(t)&&Number(t[1])<=4))add(37);
      if(layout&&all.every(t=>suit(t)&&![1,9].includes(Number(t[1]))))add(68);
      if(layout&&groups.every(x=>x.tiles.some(terminal))&&pair&&terminal(pair))add(55);
      if(layout&&groups.every(x=>x.tiles.some(t=>t[1]==='5'))&&pair&&pair[1]==='5')add(31);
      if(layout&&suits.size===3&&all.some(t=>/^z[1-4]$/.test(t))&&all.some(t=>/^z[5-7]$/.test(t)))add(52);
      if(layout&&ms.length===4&&source==='discard'&&pair===ctx.winTile)add(53);
      if(layout){
        const same=(arr,size)=>{const c=count(arr);return Object.values(c).some(n=>n>=size);};
        if(same(chowStarts,4))add(14);else if(same(chowStarts,3))add(23);
        const shifted=(tiles,size,sameSuit)=>{
          const unique=[...new Set(tiles)];for(const base of unique){if(!suit(base))continue;
            const n=Number(base[1]);for(const step of [1,2]){const seq=Array.from({length:size},(_,i)=>n+i*step);if(seq.at(-1)>9)continue;
              if(sameSuit?seq.every(x=>unique.includes(base[0]+x)):['m','p','s'].some((s,i)=>i<size&&unique.includes(s+seq[i]))&&size===3)return true;
            }
          }return false;
        };
        if(pungs.length===4&&pungTiles.every(t=>t[0]===pungTiles[0][0])&&shifted(pungTiles,4,true))add(15);
        else if(pungTiles.some(t=>suit(t))&&shifted(pungTiles,3,true))add(24);
        if(chows.length===4&&chowStarts.every(t=>t[0]===chowStarts[0][0])&&shifted(chowStarts,4,true))add(16);
        else if(chowStarts.some(t=>suit(t))&&shifted(chowStarts,3,true))add(30);
        const mixedShift=tiles=>{for(const perm of ['mps','msp','pms','psm','smp','spm'])for(let n=1;n<=7;n++)if(tiles.includes(perm[0]+n)&&tiles.includes(perm[1]+(n+1))&&tiles.includes(perm[2]+(n+2)))return true;return false;};
        if(mixedShift(pungTiles))add(42);
        if(mixedShift(chowStarts))add(51);
        if(chows.length===4&&pair&&suit(pair)&&pair[1]==='5')for(const a of 'mps')for(const b of 'mps')if(a!==b&&pair[0]!==a&&pair[0]!==b&&chowStarts.filter(t=>t===a+'1').length===1&&chowStarts.filter(t=>t===a+'7').length===1&&chowStarts.filter(t=>t===b+'1').length===1&&chowStarts.filter(t=>t===b+'7').length===1)add(29);
        if(chowStarts.some(t=>t[1]==='1'&&chowStarts.includes(t[0]+'4')&&chowStarts.includes(t[0]+'7')))add(28);
        if(['m','p','s'].every(s=>chowStarts.includes(s+'1')||chowStarts.includes(s+'4')||chowStarts.includes(s+'7'))){
          const starts=chowStarts.filter(t=>['m','p','s'].includes(t[0]));
          if([1,4,7].every(n=>starts.some(t=>t[1]===String(n)))&&new Set(starts.filter(t=>['1','4','7'].includes(t[1])).map(t=>t[0])).size===3)add(39);
        }
        for(let n=1;n<=7;n++)if(['m','p','s'].every(s=>chowStarts.includes(s+n))){add(41);break;}
        if(kongs.filter(x=>x.concealed).length>=2)add(48);
        const concealedPungs=pungs.filter(x=>(!x.exposed||x.concealed)&&!(source==='discard'&&ctx.winTile===x.tiles[0]&&!x.concealed));
        if(concealedPungs.length===4)add(12);else if(concealedPungs.length===3)add(33);else if(concealedPungs.length===2)add(66);
        for(const t of pungTiles)if(/^z[5-7]$/.test(t))add(59);
        if(pungTiles.includes(ctx.roundWind||'z1'))add(60);
        if(pungTiles.includes(ctx.seatWind||'z1'))add(61);
        for(const t of pungTiles)if(terminal(t)&&t[0]!=='z'||/^z[1-4]$/.test(t))add(73);
        if(kongs.length===1)add(kongs[0].concealed?67:74);
        if(kongs.length>=2&&kongs.every(x=>!x.concealed))add(57);
        for(const [t,n] of Object.entries(cts))if(n===4&&!kongs.some(x=>x.tiles[0]===t))add(64);
        if(chowStarts.length>=2){
          const c=count(chowStarts);for(const n of Object.values(c))if(n>=2)add(69);
          for(let n=1;n<=7;n++){const hit=['m','p','s'].filter(s=>chowStarts.includes(s+n));if(hit.length>=2)add(70);}
          for(const s of 'mps'){
            for(let n=1;n<=4;n++)if(chowStarts.includes(s+n)&&chowStarts.includes(s+(n+3)))add(71);
            if(chowStarts.includes(s+'1')&&chowStarts.includes(s+'7'))add(72);
          }
        }
        for(let n=1;n<=9;n++){const hit=['m','p','s'].filter(s=>pungTiles.includes(s+n));if(hit.length>=3)add(32);else if(hit.length>=2)add(65);}
      }
      if(ms.length===0)add(source==='selfDraw'?56:62);
      if(ctx.method==='last-draw'&&source==='selfDraw')add(44);
      if(ctx.method==='last-discard'&&source==='discard')add(45);
      if(ctx.method==='kong-replacement'&&source==='selfDraw')add(46);
      if(ctx.method==='rob-kong'&&source==='discard')add(47);
      if(ctx.lastTile===true&&ctx.method!=='rob-kong')add(58);
      if(suits.size<=2)add(75);
      if(!honors)add(76);
      if(source==='selfDraw')add(80);
      if(onlyWait){const w=waitFan(layout,ctx.winTile);if(w)add(w);}
      const exclude={1:[38,49,60,61],2:[54,59],4:[22,62,73,79],5:[79],6:[22,62,79],7:[52,62,79],8:[49,55,65,76],9:[38],10:[54,59],11:[49,55,73,75],12:[33,66,49,62],13:[22,63,69,72,75],14:[23,69,64],15:[24,49],16:[30],18:[49,55,73],19:[62,79],20:[52,62],21:[49,68],22:[76],23:[24,69],24:[23],25:[36,76],26:[68,76],27:[37,76],29:[63,70,72,76],31:[68],34:[52,62,79],36:[76],37:[76],40:[75],41:[70],44:[80],46:[80],47:[58],50:[75],53:[79],56:[62,80],63:[76]};
      const suppressed=new Set(found.flatMap(no=>exclude[no]||[]));
      let selected=found.filter(no=>!suppressed.has(no));
      // The winning method may be counted once, never as both a special method and ordinary self draw.
      const seen=new Set();selected=selected.filter(no=>{if([69,70,71,72,73,74,59,64,65].includes(no))return true;if(seen.has(no))return false;seen.add(no);return true;});
      if(source==='discard'&&ctx.winTile&&selected.length===0)selected=[43];
      const base=selected.reduce((n,no)=>n+points(no),0);
      if(!best||base>best.baseFan)best={baseFan:base,breakdown:selected.map(no=>({no,fan:points(no),name:F.byNo(no).name}))};
    }
    const baseFan=best?.baseFan||0,breakdown=best?.breakdown||[],nos=new Set(breakdown.map(x=>x.no));
    const reliableHigh=breakdown.some(x=>x.fan>=8);
    const independentPair=[49,50,52,53].some(a=>nos.has(a)&&[59,60,61].some(b=>nos.has(b)))||(nos.has(49)&&nos.has(50));
    const legal=baseFan>=8&&(reliableHigh||independentPair),flowerFan=f;
    return {shapeValid:true,coverage:'partial',legal:legal?true:null,baseFan,flowerFan,totalFan:baseFan+flowerFan,breakdown,reason:legal?null:'needs-rule-review',settlement:legal?settlement(baseFan,flowerFan,source):null};
  }
  function manual(h,ms,ctx,fanNos){if(!shape(h,ms)||!Array.isArray(fanNos)||!fanNos.length||new Set(fanNos).size!==fanNos.length||fanNos.some(no=>!Number.isInteger(no)||no<1||no>80||!F.byNo(no)))return null;
    const baseFan=fanNos.reduce((n,no)=>n+points(no),0);if(baseFan<8)return null;
    const flowerFan=Number.isInteger(ctx.flowers)?Math.max(0,Math.min(8,ctx.flowers)):0,source=ctx.source==='discard'?'discard':'selfDraw';
    return {shapeValid:true,coverage:'self-reviewed',legal:true,baseFan,flowerFan,totalFan:baseFan+flowerFan,breakdown:fanNos.map(no=>({no,fan:points(no),name:F.byNo(no).name})),reason:null,settlement:settlement(baseFan,flowerFan,source)};
  }
  const api={evaluate,manual,shape,settlement,sevenPairs,orphans,knittedKind,knittedStraight};g.MahjongMCRScore=api;if(isNode)module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:window);
