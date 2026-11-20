const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),listeners={},store=new Map();
function elem(id){return {id,value:'',textContent:'',innerHTML:'',addEventListener(name,fn){listeners[id+':'+name]=fn},querySelectorAll(){return []},querySelector(){return null},scrollIntoView(){}};}
const nodes={app:elem('app'),lang:elem('lang'),homeBtn:elem('homeBtn'),learnBtn:elem('learnBtn'),foot:elem('foot')};
const document={documentElement:{lang:''},querySelector(sel){return nodes[sel.slice(1)]||null}};
const localStorage={getItem(k){return store.get(k)||null},setItem(k,v){store.set(k,String(v))}};
const fixedMath=Object.create(Math);fixedMath.random=()=>1/4294967295;
const ctx=vm.createContext({document,localStorage,console,window:null,Math:fixedMath});ctx.window=ctx;ctx.scrollTo=()=>{};
const index=fs.readFileSync(path.join(root,'index.html'),'utf8');
for(const [,src] of index.matchAll(/<script src="([^"]+)"/g))vm.runInContext(fs.readFileSync(path.join(root,src),'utf8'),ctx,{filename:src});
function click(dataset){const el={dataset,hasAttribute(k){return k.replace(/^data-/,'').replace(/-([a-z])/g,(_,c)=>c.toUpperCase()) in dataset},getAttribute(){return null},focus(){}};listeners['app:click']({target:{closest(){return el}}});return nodes.app.innerHTML;}
function start(mode){click({playEnter:''});click({fullMode:mode});return click({fullStart:''});}
function firstDiscard(){const state=ctx.MahjongFullPlayUI.getState(),a=ctx.MahjongFullPlayEngine.available(state);assert.equal(a.phase,'turn');click({fullSelect:String(a.discards[0])});return click({fullDiscard:''});}
let html=start('hk');assert.equal(ctx.MahjongFullPlayUI.getState().seed,1);
assert(html.includes('fp-draw-slot')&&html.includes('new-draw moving'),'dealer opening draw should be separated and animated');
assert(html.includes('class="fp-game fp-page"'),'play view should be a dedicated game surface');
assert(!html.includes('class="workspace pg-page fp-page"'),'play view should not use the long article layout');
assert(!html.includes('class="pg-hand"')&&!html.includes('class="pg-melds"')&&!html.includes('class="pg-discards"'),'hand, melds and rivers should not be separate article cards');
for(const pos of ['top','left','right','bottom'])assert(html.includes(`fp-river-${pos}`));
assert(html.includes('fp-opponent-top')&&html.includes('fp-opponent-left')&&html.includes('fp-opponent-right'));
assert(html.includes('fp-own-seat')&&html.includes('fp-rack')&&html.includes('data-full-discard'));
html=firstDiscard();
let s=ctx.MahjongFullPlayUI.getState();assert.equal(s.phase,'claim');assert(s.pending&&s.pending.discarder!==0);
assert(html.includes('fp-table-last active'),'current discard must be prominently highlighted on the table');
assert(html.includes('fp-table-last active moving'),'new opponent discard should animate in the center');
assert(html.includes('fp-river-tile current landed'),'new opponent discard should animate into the river');
assert(html.includes('fp-river-tile current'),'current discard must be highlighted in its river');
assert(html.includes('data-full-claim="pass"')&&html.includes('继续摸打'));
assert(html.includes('data-full-discard')===false,'discard button must not compete with response actions');
assert.equal((html.match(/class="fp-river-tile(?: |")/g)||[]).length,s.discards.flat().length,'all public discards must be on the table');
html=click({fullHint:''});assert(!html.includes('fp-table-last active moving'),'opening a hint must not replay the tile animation');
let guard=0;
while(ctx.MahjongFullPlayUI.getState().phase==='claim'&&guard++<20)html=click({fullClaim:'pass'});
assert.equal(ctx.MahjongFullPlayUI.getState().phase,'turn');
assert(html.includes('fp-table-last draw-event moving'),'a newly drawn tile should animate from the wall');
assert(html.includes('new-draw moving'),'the drawn tile should be marked in the hand');
assert(html.includes('fp-draw-slot'),'newly drawn tile should stay separated on the right of the rack');
assert(html.includes('摸进'));
nodes.lang.value='tw';listeners['lang:change']();assert(nodes.app.innerHTML.includes('繼續摸打')||ctx.MahjongFullPlayUI.getState().phase!=='claim');
for(const mode of ['sc','am']){
  html=start(mode);let s=ctx.MahjongFullPlayUI.getState(),step=0;
  while(s.phase!=='claim'&&step++<20){const a=ctx.MahjongFullPlayEngine.available(s);let d;
    if(a.phase==='missing')d={fullMissing:'m'};
    else if(a.phase==='charleston'){
      const idx=s.hands[0].map((t,i)=>t==='j1'?-1:i).filter(i=>i>=0).slice(0,3);
      for(const i of idx)click({fullSelect:String(i)});d={fullSend:''};
    }else if(a.phase==='turn'){click({fullSelect:String(a.discards[0])});d={fullDiscard:''};}
    else throw Error(`unexpected ${mode} ${a.phase}`);
    html=click(d);s=ctx.MahjongFullPlayUI.getState();
  }
  assert.equal(s.phase,'claim',`${mode} should pause for an opponent discard`);
  assert(html.includes('fp-table-last active')&&html.includes('data-full-claim="pass"'));
  assert.equal((html.match(/class="fp-river-tile(?: |")/g)||[]).length,s.discards.flat().length);
  if(mode==='sc'){
    let a=ctx.MahjongFullPlayEngine.available(s),steps=0;
    while(!a.actions.some(x=>x.kind==='pung'||x.kind==='kong')&&steps++<20){
      html=click({fullClaim:'pass'});s=ctx.MahjongFullPlayUI.getState();
      if(s.phase==='turn'){const d=ctx.MahjongFullPlayEngine.available(s);click({fullSelect:String(d.discards[0])});html=click({fullDiscard:''});s=ctx.MahjongFullPlayUI.getState();}
      assert.equal(s.phase,'claim');a=ctx.MahjongFullPlayEngine.available(s);
    }
    const call=a.actions.find(x=>x.kind==='pung'||x.kind==='kong');assert(call,'expected a callable Sichuan discard');
    html=click({fullClaim:call.id});s=ctx.MahjongFullPlayUI.getState();
    assert(s.melds[0].length>0);
    assert(html.includes('fp-river-bottom')&&html.includes('fp-zone-melds'),'player meld must be on the table');
    assert(html.includes('fp-meld-set fresh moving'),'new exposed group should animate');
    assert(!html.includes('fp-own-melds')&&!html.includes('fp-opponent-melds'),'exposed groups should not be outside the play area');
  }
}
let endSteps=0;
while(ctx.MahjongFullPlayUI.getState().phase!=='ended'&&endSteps++<300){
  const state=ctx.MahjongFullPlayUI.getState(),a=ctx.MahjongFullPlayEngine.available(state);
  if(a.phase==='claim')html=click({fullClaim:'pass'});
  else if(a.phase==='turn'){click({fullSelect:String(a.discards[0])});html=click({fullDiscard:''});}
  else throw Error('unexpected phase before result: '+a.phase);
}
assert.equal(ctx.MahjongFullPlayUI.getState().phase,'ended');
assert(html.includes('data-full-result-close'));
html=click({fullResultClose:''});assert(!html.includes('class="pg-result"')&&html.includes('data-full-result-open'));
html=click({fullResultOpen:''});assert(html.includes('data-full-result-close'));
const css=fs.readFileSync(path.join(root,'playground/full-style.css'),'utf8');
assert(css.includes('@keyframes fp-draw-into-hand')&&css.includes('@keyframes fp-discard-land')&&css.includes('@media(prefers-reduced-motion:reduce)'));
assert(css.includes('.fp-game{position:fixed')&&css.includes('height:100dvh'),'game should fit the viewport');
console.log('PASS table events, on-table melds, responsive river structure, dismissible result, response actions and reduced-motion support');
