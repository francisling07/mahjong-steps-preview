'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),listeners={},store=new Map();
function elem(id){return {id,value:'',textContent:'',innerHTML:'',addEventListener(name,fn){listeners[id+':'+name]=fn},querySelectorAll(){return []},querySelector(){return null},scrollIntoView(){}};}
const nodes={app:elem('app'),lang:elem('lang'),homeBtn:elem('homeBtn'),learnBtn:elem('learnBtn'),foot:elem('foot')};
const document={documentElement:{lang:''},querySelector(sel){return nodes[sel.slice(1)]||null}};
const localStorage={getItem(k){return store.get(k)||null},setItem(k,v){store.set(k,String(v))},removeItem(k){store.delete(k)}};
const ctx=vm.createContext({document,localStorage,console,window:null,Math,confirm:()=>true});ctx.window=ctx;ctx.scrollTo=()=>{};
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert(html.includes('course/mcr.css')&&html.includes('course/mcr-score.js'));
for(const [,src] of html.matchAll(/<script src="([^"]+)"/g))vm.runInContext(fs.readFileSync(path.join(root,src),'utf8'),ctx,{filename:src});
function click(dataset){const el={dataset,hasAttribute(k){return k.replace(/^data-/,'').replace(/-([a-z])/g,(_,c)=>c.toUpperCase()) in dataset},getAttribute(){return null},focus(){}};listeners['app:click']({target:{closest(){return el}}});return nodes.app.innerHTML;}
let view=click({rule:'1'});assert(view.includes('九章三十六课'));assert(view.includes('data-mcr-open="mcr-1-1"'));
view=click({mcrOpen:'mcr-1-1'});assert(view.includes('data-mcr-choice'));
view=click({mcrMap:''});assert(view.includes('继续学习：'));
view=click({mcrFoundation:''});assert(view.includes('bridge-root'));
view=click({bridgeBack:''});assert(view.includes('九章三十六课'),'return to MCR after foundation');
view=click({mcrTable:''});assert(view.includes('data-full-mode="mcr"'));
view=click({fullStart:''});assert.equal(ctx.MahjongFullPlayUI.getState().mode,'mcr');assert(view.includes('fp-table'));
nodes.lang.value='en';listeners['lang:change']();assert(nodes.app.innerHTML.includes('Chinese Official (MCR)'));
view=click({fullBack:''});view=click({rule:'1'});assert(view.includes('Nine chapters'));
console.log('MCR app route QA passed: home → course → shared foundation → course → full table, progress and English switch.');
