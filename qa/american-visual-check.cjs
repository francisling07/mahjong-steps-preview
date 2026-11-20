const {chromium}=require('playwright');
const path=require('node:path');const {pathToFileURL}=require('node:url');
(async()=>{
  const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_BIN || undefined});
  try{
    const page=await browser.newPage({viewport:{width:1365,height:900}});
    await page.goto(pathToFileURL(path.resolve(__dirname,'../index.html')).href);
    await page.locator('[data-rule="3"]').click();
    await page.screenshot({path:path.join(__dirname,'american-map-desktop.png'),fullPage:true});
    await page.setViewportSize({width:390,height:844});
    await page.screenshot({path:path.join(__dirname,'american-map-mobile.png'),fullPage:true});
    await page.locator('[data-american-open="am-9-1"]').click();
    await page.screenshot({path:path.join(__dirname,'american-lesson-mobile.png'),fullPage:true});
    console.log('Visual screenshots saved; width=',await page.evaluate(()=>({viewport:innerWidth,scroll:document.documentElement.scrollWidth})));
  }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
