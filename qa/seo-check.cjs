'use strict';

const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

// 1. TDK, canonical, favicon, OG, Twitter Card
assert.match(html, /<title>[^<]*免费在线麻将网页版[^<]*雀步[^<]*<\/title>/, 'Title must contain target keywords and brand');
assert.match(html, /<meta name="description" content="[^"]{60,}"/, 'Meta description must be present and descriptive');
assert.match(html, /<meta name="robots" content="index,\s*follow"/, 'Robots meta must allow indexing');
assert.match(html, /<link rel="canonical" href="https:\/\/mahjongsteps\.com\/"/, 'Canonical URL must point to production root');
assert.match(html, /<link rel="icon" type="image\/svg\+xml" href="assets\/favicon\.svg"/, 'Favicon SVG must be linked');

for (const prop of [
  'og:type', 'og:site_name', 'og:url', 'og:title', 'og:description',
  'og:image', 'og:image:width', 'og:image:height', 'og:locale'
]) {
  assert.ok(html.includes(`property="${prop}"`), `Missing Open Graph tag: ${prop}`);
}
assert.ok(html.includes('https://mahjongsteps.com/assets/og-cover.png'), 'OG image must reference absolute production PNG URL');
for (const name of ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image']) {
  assert.ok(html.includes(`name="${name}"`), `Missing Twitter Card tag: ${name}`);
}

// 2. JSON-LD structured data parses cleanly
const ldMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
assert.ok(ldMatch, 'JSON-LD structured data block must exist');
const ld = JSON.parse(ldMatch[1]);
assert.ok(Array.isArray(ld['@graph']) && ld['@graph'].length >= 2, 'JSON-LD @graph must include WebApplication and FAQPage');
assert.ok(ld['@graph'].some(item => item['@type'] === 'WebApplication'), 'JSON-LD must include WebApplication');
assert.ok(ld['@graph'].some(item => item['@type'] === 'FAQPage'), 'JSON-LD must include FAQPage');

// 3. Pre-rendered static HTML inside <main id="app" data-prerendered="zh"> (no empty SPA shell for crawlers, and preserves first-paint LCP on hydration)
const mainMatch = html.match(/<main id="app" data-prerendered="zh">([\s\S]*?)<\/main>/);
assert.ok(mainMatch, '<main id="app" data-prerendered="zh"> must exist');
const mainHtml = mainMatch[1];
assert.match(mainHtml, /<h1>[\s\S]*从第一张牌开始[\s\S]*<\/h1>/, 'Pre-rendered <main> must contain hero H1');
for (const styleName of ['香港麻将', '中国国标麻将', '四川血战到底', '美式麻将']) {
  assert.ok(mainHtml.includes(styleName), `Pre-rendered <main> must include ${styleName}`);
}
assert.ok(mainHtml.includes('<noscript>'), 'Pre-rendered <main> should include a <noscript> notice');
const visibleText = mainHtml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
assert.ok(visibleText.length >= 300, `Pre-rendered visible text too short (${visibleText.length} chars)`);

// 3b. Only critical style.css is render-blocking; subpage stylesheets load asynchronously
const headHtml = html.slice(0, html.indexOf('</head>')).replace(/<noscript>[\s\S]*?<\/noscript>/g, '');
const blockingCss = [...headHtml.matchAll(/<link\b[^>]*rel="stylesheet"[^>]*>/g)]
  .map(m => m[0])
  .filter(tag => !tag.includes('media="print"'));
assert.equal(blockingCss.length, 1, `Expected only 1 render-blocking stylesheet (style.css), found ${blockingCss.length}`);
assert.ok(blockingCss[0].includes('href="style.css"'), 'The single render-blocking stylesheet must be style.css');

// 3c. Verify app.js preserves pre-rendered homepage DOM on first Chinese paint so LCP is not reset
const appJs = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
assert.ok(appJs.includes("app.dataset.prerendered === 'zh'"), 'app.js must skip innerHTML overwrite when pre-rendered homepage matches');

// 4. All <script src="..."> tags use defer AND preserve src-first ordering for VM test regex
const scriptTags = [...html.matchAll(/<script\b[^>]*>/g)].map(m => m[0]).filter(tag => tag.includes('src='));
const regexSrcMatches = [...html.matchAll(/<script src="([^"]+)"/g)].map(m => m[1]);
assert.equal(scriptTags.length, regexSrcMatches.length, 'Every <script> with src must place src first for test harness compatibility');
assert.ok(scriptTags.length >= 30, 'Expected full script bundle');
for (const tag of scriptTags) {
  assert.ok(/\bdefer\b/.test(tag), `Script tag should be non-blocking (defer): ${tag}`);
}

// 5. Verify OG PNG cover (1200x630), favicon SVG, robots.txt, and sitemap.xml
const ogPath = path.join(root, 'assets', 'og-cover.png');
assert.ok(fs.existsSync(ogPath), 'assets/og-cover.png must exist');
const ogBuf = fs.readFileSync(ogPath);
assert.equal(ogBuf.toString('hex', 0, 8), '89504e470d0a1a0a', 'assets/og-cover.png must be a valid PNG');
const ogWidth = ogBuf.readUInt32BE(16);
const ogHeight = ogBuf.readUInt32BE(20);
assert.equal(ogWidth, 1200, `Expected OG cover width 1200, got ${ogWidth}`);
assert.equal(ogHeight, 630, `Expected OG cover height 630, got ${ogHeight}`);

const favPath = path.join(root, 'assets', 'favicon.svg');
assert.ok(fs.existsSync(favPath), 'assets/favicon.svg must exist');
assert.ok(fs.readFileSync(favPath, 'utf8').includes('<svg'), 'assets/favicon.svg must be valid SVG');

const robotsTxt = fs.readFileSync(path.join(root, 'robots.txt'), 'utf8');
assert.ok(robotsTxt.includes('Sitemap: https://mahjongsteps.com/sitemap.xml'), 'robots.txt must declare production sitemap');
assert.ok(robotsTxt.includes('Disallow: /qa/'), 'robots.txt should disallow /qa/');

const sitemapXml = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
assert.ok(sitemapXml.includes('<loc>https://mahjongsteps.com/</loc>'), 'sitemap.xml must include canonical root URL');
assert.ok(!sitemapXml.includes('#'), 'sitemap.xml must not contain hash fragments');

console.log(`SEO check passed: ${visibleText.length} pre-rendered chars, ${scriptTags.length} deferred scripts, OG ${ogWidth}x${ogHeight} PNG, robots.txt & sitemap.xml OK.`);
