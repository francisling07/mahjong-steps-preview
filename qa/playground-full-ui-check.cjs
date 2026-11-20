const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),listeners={},store=new Map();
function elem(id){return {id,value:'',textContent:'',innerHTML:'',addEventListener(name,fn){listeners[id+':'+name]=fn},querySelectorAll(){return []},querySelector(){return null},scrollIntoView(){}};}
const nodes={app:elem('app'),lang:elem('lang'),homeBtn:elem('homeBtn'),learnBtn:elem('learnBtn'),foot:elem('foot')};
const document={documentElement:{lang:''},querySelector(sel){return nodes[sel.slice(1)]||null}};
const localStorage={getItem(k){return store.get(k)||null},setItem(k,v){store.set(k,String(v))}};
const ctx=vm.createContext({document,localStorage,console,window:null,Math});ctx.window=ctx;ctx.scrollTo=()=>{};
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
for(const [,src] of html.matchAll(/<script src="([^"]+)"/g))vm.runInContext(fs.readFileSync(path.join(root,src),'utf8'),ctx,{filename:src});
function click(dataset){const el={dataset,hasAttribute(k){return k.replace(/^data-/,'').replace(/-([a-z])/g,(_,c)=>c.toUpperCase()) in dataset},getAttribute(){return null},focus(){}};listeners['app:click']({target:{closest(){return el}}});return nodes.app.innerHTML;}
let view=click({playEnter:''});assert(view.includes('data-full-start'));assert(view.includes('完整牌桌操练'));
view=click({fullMode:'sc'});view=click({fullOption:'scExchange'});assert(view.includes('aria-pressed="true"'));
view=click({fullStart:''});assert(view.includes('data-full-select'));assert.equal(ctx.MahjongFullPlayUI.getState().phase,'exchange');
let s=ctx.MahjongFullPlayUI.getState(),suit='mps'.split('').find(k=>s.hands[0].filter(x=>x[0]===k).length>=3),indices=s.hands[0].map((x,i)=>x[0]===suit?i:-1).filter(i=>i>=0).slice(0,3);
for(const i of indices)view=click({fullSelect:String(i)});view=click({fullSend:''});assert(view.includes('data-full-missing'));
view=click({fullMissing:'m'});assert(view.includes('data-full-discard'));
view=click({fullHint:''});assert(view.includes('定缺'));
view=click({fullAdvice:''});assert(view.includes('只依据你的手牌和公开牌'));
view=click({fullRestart:''});assert.equal(ctx.MahjongFullPlayUI.getState().phase,'exchange');
view=click({fullBack:''});assert(view.includes('data-play-enter'));
view=click({playEnter:''});view=click({fullMode:'am'});view=click({fullStart:''});assert(view.includes('data-full-select'));assert.equal(ctx.MahjongFullPlayUI.getState().phase,'charleston');
nodes.lang.value='en';listeners['lang:change']();assert(nodes.app.innerHTML.includes('Full Table Playground'));
view=click({fullShort:''});assert(view.includes('data-play-open'));
console.log('PASS full-table app route, variants, opening actions, advice, replay, language and short-scene link');
