const assert=require('node:assert/strict');
const S=require('./sichuan-rules.js');
const copy=x=>JSON.parse(JSON.stringify(x));
const complete=['p1','p2','p3','p4','p5','p6','p7','p8','p9','s1','s2','s3','s5','s5'];
const sevenPairs=['p1','p1','p2','p2','p3','p3','p4','p4','s5','s5','s6','s6','s7','s7'];
const oneMeld=[{type:'pung',tiles:['p9','p9','p9']}];
const oneKong=[{type:'kong',tiles:['p9','p9','p9','p9']}];
const concealed=['p1','p2','p3','p4','p5','p6','s1','s2','s3','s5','s5'];

for(const id of ['m1','m9','p1','p9','s1','s9'])assert(S.isTile(id));
for(const id of ['z1','f1','j','m0','m10','P1','',null,undefined,42,{}])assert.equal(S.isTile(id),false);
assert(S.isWinning(complete,[],'m'));
assert(S.isWinning(sevenPairs,[],'m'));
assert(S.isWinning(concealed,oneMeld,'m'));
assert(S.isWinning(concealed,oneKong,'m'));
assert(!S.isWinning(complete,[],'p'));
assert(!S.isWinning(complete.concat('m1'),[],'m'));
assert(!S.isWinning(['p1','p1','p1','p1','p1',...complete.slice(5)],[],'m'));
assert(!S.isWinning(concealed,[{type:'chow',tiles:['p7','p8','p9']}],'m'));
assert(!S.isWinning(concealed,[{type:'pung',tiles:['m9','m9','m9']}],'m'));
assert(!S.isWinning(sevenPairs.slice(0,13),[],'m'));
assert(!S.isWinning(complete,[],null));
for(const invalid of [null,undefined,'tiles',42,{},[],['z1']])assert.equal(S.isWinning(invalid,[],'m'),false);
for(const invalid of [null,undefined,'melds',42,{}])assert.equal(S.isWinning(complete,invalid,'m'),false);
const original=copy({complete,sevenPairs,oneMeld,oneKong,concealed});

assert.deepEqual(S.waits(complete.slice(0,13),[],'m'),['s5']);
assert.deepEqual(S.waits(['m1',...complete.slice(0,12)],[],'m'),[]);
assert.deepEqual(S.waits(['p1','p1','p1','p1',...complete.slice(0,9)],[],'m'),[]);
assert.deepEqual(S.waits(null,[],'m'),[]);
assert.deepEqual(S.waits(complete,[],'m'),[]);

const rack=['m1','m4','p1','p2','p3','p4','p5','p6','p7','p8','p9','s5','s5','s9'];
assert.deepEqual(S.legalDiscards(rack,'m'),['m1','m4']);
assert.deepEqual(S.legalDiscards(complete,'m'),['p1','p2','p3','p4','p5','p6','p7','p8','p9','s1','s2','s3','s5']);
assert.deepEqual(S.legalDiscards(rack,'z'),[]);
assert.deepEqual(S.legalDiscards(null,'m'),[]);
assert.deepEqual(S.legalDiscards(rack.slice(0,13),'m'),[]);

const pairHand=['p2','p2','m1','m3','m4','m5','s1','s2','s3','s4','s5','s6','s7'];
const tripleHand=['p2','p2','p2','m1','m3','m4','m5','s1','s2','s3','s4','s5','s6'];
assert.deepEqual(S.claimOptions(pairHand,'p2','s'),['pung']);
assert.deepEqual(S.claimOptions(tripleHand,'p2','s'),['pung','kong']);
assert.deepEqual(S.claimOptions(pairHand,'s2','s'),[]);
assert.deepEqual(S.claimOptions(pairHand,'p3','s'),[]);
assert.deepEqual(S.claimOptions(null,'p2','s'),[]);

const exchange=['m1','m2','m3','p1','p2','p3','p4','p5','p6','s1','s2','s3','s4'];
assert(S.validExchangeSelection(exchange,[0,1,2]));
assert(S.validExchangeSelection(exchange,[1,0,2]));
for(const indices of [[0,0,1],[0,1],[0,1,3],[0,1,13],[0,1,2,3],null,'0,1,2'])assert(!S.validExchangeSelection(exchange,indices));
assert(!S.validExchangeSelection(null,[0,1,2]));

const active=['east','south','west','north'];
assert.deepEqual(S.activeAfterWin(active,'south'),['east','west','north']);
assert.deepEqual(S.activeAfterWin(['east','west','north'],'north'),['east','west']);
for(const args of [[active,'bad'],[['east','east'],'east'],[null,'east'],[active,null]])assert.equal(S.activeAfterWin(...args),null);
assert.deepEqual(active,['east','south','west','north']);
assert.deepEqual({complete,sevenPairs,oneMeld,oneKong,concealed},original);
console.log('PASS Sichuan shapes, seven pairs, missing suit, no chow, exchange selection, discards and blood-battle active players');
