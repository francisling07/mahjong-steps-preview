const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const path=require('node:path');
const {pathToFileURL}=require('node:url');
const E=require('../course/american-engine.js');
const url=pathToFileURL(path.resolve(__dirname,'../index.html')).href;
let browser;
async function click(page,selector){await page.locator(selector).first().click();}
async function answer(page,q){
  if(q.type==='choice')await click(page,`[data-american-choice="${q.answerId}"]`);
  else if(q.type==='tile-pick')for(const i of q.answerIndexes)await click(page,`[data-american-pick="${i}"]`);
  else for(const id of q.answerOrder)await click(page,`[data-american-order="${id}"]`);
  assert(!(await page.locator('[data-american-submit]').isDisabled()),q.id);
  await click(page,'[data-american-submit]');
  assert((await page.locator('.course-feedback').innerText()).includes('答对了'),q.id);
  await click(page,'[data-american-next]');
}
(async()=>{
  browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_BIN || undefined});
  const page=await browser.newPage({viewport:{width:1365,height:900}});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(url);
  await page.evaluate(()=>{
    localStorage.removeItem('mahjong-american-v1');localStorage.removeItem('mj-language');
    localStorage.setItem('mahjong-steps-course-v1','hk-preserve');
    localStorage.setItem('mahjong-bridge-v1','sichuan-preserve');
  });
  await page.reload();await click(page,'[data-rule="3"]');
  assert.equal(await page.locator('.american-root .course-chapter').count(),9);
  assert.equal(await page.locator('.american-root .course-lesson').count(),36);
  assert((await page.locator('.american-root').innerText()).includes('原创教学样例'));
  console.log('PASS American route, nine chapters and 36 lessons');
  const first=E.lessons[0].questions[0];
  await click(page,'[data-american-open="am-1-1"]');
  await click(page,`[data-american-choice="${first.options.find(o=>o.id!==first.answerId).id}"]`);
  await click(page,'[data-american-submit]');
  assert((await page.locator('.course-feedback').innerText()).includes('再试一次'));
  assert.equal(await page.locator('[data-american-next]').count(),0);
  await click(page,`[data-american-choice="${first.answerId}"]`);
  await click(page,'[data-american-submit]');
  assert((await page.locator('.course-feedback').innerText()).includes('答对了'));
  await click(page,'[data-american-next]');
  for(let li=0;li<E.lessons.length;li++){
    const l=E.lessons[li];
    if(li>0)assert((await page.locator('.american-root h1').innerText()).includes(l.title.zh),l.id);
    for(const q of l.questions.slice(li===0?1:0))await answer(page,q);
    assert((await page.locator('.american-root h1').innerText()).includes('本课完成'),l.id);
    if(li+1<E.lessons.length){
      assert((await page.locator('[data-american-open]').first().getAttribute('data-american-open'))===E.lessons[li+1].id,l.id+' next');
      await click(page,`[data-american-open="${E.lessons[li+1].id}"]`);
    }
  }
  assert((await page.locator('.american-root').innerText()).includes('九章三十六课已全部掌握'));
  await click(page,'[data-american-map]');
  assert((await page.locator('.course-stats').innerText()).includes('108 / 108'));
  assert.equal(await page.locator('.american-root .course-lesson-state.done').count(),36);
  const saved=await page.evaluate(()=>({am:JSON.parse(localStorage.getItem('mahjong-american-v1')),hk:localStorage.getItem('mahjong-steps-course-v1'),sc:localStorage.getItem('mahjong-bridge-v1')}));
  assert.equal(saved.am.solved.length,108);assert.equal(saved.hk,'hk-preserve');assert.equal(saved.sc,'sichuan-preserve');
  console.log('PASS all 108 questions, sequential next links, wrong answer retry, and separate progress');
  await page.selectOption('#lang','en');assert((await page.locator('.american-root h1').innerText()).includes('American'));
  await page.selectOption('#lang','tw');assert((await page.locator('.american-root h1').innerText()).includes('美式麻雀'));
  await page.reload();assert((await page.locator('#lang').inputValue())==='tw');
  await click(page,'[data-rule="3"]');assert((await page.locator('.course-stats').innerText()).includes('108 / 108'));
  await page.setViewportSize({width:390,height:844});
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
  await click(page,'[data-american-open="am-9-1"]');
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
  console.log('PASS language persistence and 390px mobile layout');
  assert.deepEqual(errors,[]);
  await browser.close();console.log('ALL AMERICAN BROWSER CHECKS PASSED');
})().catch(async e=>{console.error(e);if(browser)await browser.close();process.exitCode=1});
