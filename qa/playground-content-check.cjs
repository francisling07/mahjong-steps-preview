const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const data = require('../playground/data.js');
const {createEngine} = require('../playground/engine.js');
const hk = require('../course/hk-rules.js');
const sc = require('../course/sichuan-rules.js');
const engine = createEngine(data);
const list = engine.list();
assert.equal(list.length, 9);
for (const mode of ['hk','sc','am']) assert.equal(list.filter(s=>s.mode===mode).length,3,mode);

function visibleTiles(node) {
  const tb=node.table||{};
  return node.hand.concat(tb.lastDiscard?[tb.lastDiscard]:[],tb.discards||[],...(tb.melds||[]).map(m=>m.tiles));
}
for (const scene of data) {
  const root=scene.nodes[scene.start];
  const legal=root.actions.filter(a=>a.legal);
  const illegal=root.actions.filter(a=>!a.legal);
  assert(legal.length>=2,scene.id);
  assert(illegal.length>=1,scene.id);
  assert.equal(new Set(legal.map(a=>a.next)).size,legal.length,scene.id+' needs distinct branch nodes');
  for (const [id,node] of Object.entries(scene.nodes)) {
    const counts={};
    for(const tile of visibleTiles(node)) {
      assert(/^(?:[mps][1-9]|z[1-7]|f[1-8]|j1)$/.test(tile),`${scene.id}.${id}: ${tile}`);
      counts[tile]=(counts[tile]||0)+1;
      assert(counts[tile]<= (tile==='j1'?8:tile[0]==='f'?1:4),`${scene.id}.${id}: too many ${tile}`);
      if(scene.mode==='sc')assert(/^[mps]/.test(tile),`${scene.id}.${id}: Sichuan tile ${tile}`);
      if(scene.mode==='hk')assert(!/^[fj]/.test(tile),`${scene.id}.${id}: Hong Kong tile ${tile}`);
    }
    if(node.table?.wallRemaining!==undefined)assert(Number.isInteger(node.table.wallRemaining)&&node.table.wallRemaining>=0);
  }
  for (const action of illegal) {
    const started=engine.start(scene.id),out=engine.choose(started,action.id);
    assert.equal(out.accepted,false);assert.equal(out.reason,'illegal');assert.deepEqual(out.state,started);
  }
  const terminalSummaries=[];
  for (const action of legal) {
    const start=engine.start(scene.id),out=engine.choose(start,action.id);
    assert(out.accepted,scene.id+':'+action.id);
    assert(out.done,scene.id+':'+action.id);
    const cur=engine.current(out.state);
    assert(cur.done);terminalSummaries.push(cur.node.result.summary.zh);
    assert.deepEqual(engine.restart(out.state),start);
    assert.deepEqual(engine.current(out.state),engine.current({scenarioId:scene.id,history:[action.id]}));
  }
  assert.equal(new Set(terminalSummaries).size,legal.length,scene.id+' needs different outcomes');
}

assert(hk.isWinning(data.find(s=>s.id==='hk-win').nodes.start.hand,[]));
const hkCalls=hk.claimOptions(data.find(s=>s.id==='hk-call').nodes.start.hand,'m3','previous');
assert(hkCalls.some(x=>x.type==='chow'&&x.used.join(',')==='m1,m2'));
assert(hkCalls.some(x=>x.type==='pung'&&x.used.join(',')==='m3,m3'));
assert.deepEqual(sc.legalDiscards(data.find(s=>s.id==='sc-missing').nodes.start.hand,'s'),['s1','s9']);
assert(sc.claimOptions(data.find(s=>s.id==='sc-pung').nodes.start.hand,'p5','m').includes('pung'));
assert.deepEqual(sc.activeAfterWin(['east','south','west','north'],'east'),['south','west','north']);
const amCharleston=data.find(s=>s.id==='am-charleston').nodes.start;
assert.equal(amCharleston.hand.length,13);
assert(amCharleston.actions.filter(a=>a.legal).every(a=>!a.label.en.toLowerCase().includes('joker')));
const originalA=['m2','m2','m2','p4','p4','p4','s6','s6','s6','z1','z1','z1','f1','f2'];
assert.deepEqual(data.find(s=>s.id==='am-card').nodes.start.hand,originalA);
function sorted(tiles){return tiles.slice().sort().join('|');}
for(const id of ['hk-call','sc-pung']){
  const s=data.find(x=>x.id===id),root=s.nodes.start;
  for(const move of root.actions.filter(x=>x.legal&&x.kind!=='pass')){
    const end=s.nodes[move.next];
    assert.equal(sorted(root.hand.concat(root.table.lastDiscard)),sorted(end.hand.concat(...end.table.melds.map(m=>m.tiles))),`${id}:${move.id} must preserve physical tiles`);
  }
}
{
  const s=data.find(x=>x.id==='am-joker');
  for(const move of s.nodes.start.actions.filter(x=>x.legal)){
    const end=s.nodes[move.next];
    assert.equal(sorted(s.nodes.start.hand.concat(...s.nodes.start.table.melds.map(m=>m.tiles))),sorted(end.hand.concat(...end.table.melds.map(m=>m.tiles))),`am-joker:${move.id} must preserve physical tiles`);
  }
}

const root=path.join(__dirname,'..');
function boot(storage) {
  const context=vm.createContext({localStorage:storage,console});context.window=context;
  for(const file of ['tile-art.js','playground/data.js','playground/engine.js','playground/ui.js'])
    vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
  return context.MahjongPlaygroundUI;
}
const store=new Map();
const ui=boot({getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,String(v))});
ui.enter();assert(ui.html().includes('牌桌操练场'));
ui.dispatch({dataset:{playMode:'am'}});assert(ui.html().includes('Charleston'));
ui.dispatch({dataset:{playOpen:'am-charleston'}});assert(ui.html().includes('向右传三张牌'));
ui.dispatch({dataset:{playAction:'joker'}});assert(ui.html().includes('Charleston 中 Joker 不能传'));
ui.dispatch({dataset:{playAction:'spares'}});assert(ui.html().includes('目标组得到补强'));
assert(JSON.parse(store.get('mahjong-playground-v1')).completed.includes('am-charleston'));
ui.dispatch({dataset:{playRestart:''}});assert(ui.html().includes('向右传三张牌'));
ui.setLang('tw');assert(ui.html().includes('向右傳三張牌'));
ui.setLang('en');assert(ui.html().includes('Which three tiles do you pass right?'));
ui.dispatch({dataset:{playMap:''}});assert(ui.html().includes('Table Playground'));
ui.setLang('zh');
for(const scene of data){
  for(const move of scene.nodes.start.actions.filter(x=>x.legal)){
    ui.enter(scene.mode);
    ui.dispatch({dataset:{playOpen:scene.id}});
    assert(ui.html().includes(scene.nodes.start.prompt.zh),scene.id+' start render');
    ui.dispatch({dataset:{playAction:move.id}});
    assert(ui.html().includes(scene.nodes[move.next].result.title.zh),scene.id+':'+move.id+' end render');
  }
}
const blocked=boot({getItem(){throw Error('blocked')},setItem(){throw Error('blocked')}});
blocked.enter();assert(blocked.html().includes('浏览器存储不可用'));

console.log('PASS playground content: 9 scenes, 3 modes, two distinct legal routes each, rule checks, restart, browser-global UI and storage fallback');
