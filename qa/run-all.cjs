'use strict';

const path = require('node:path');
const { spawnSync } = require('node:child_process');

const root = path.resolve(__dirname, '..');

const suites = [
  'test-meld.cjs',
  'course/test-engine.cjs',
  'course/test-hk-rules.cjs',
  'course/test-mcr-fans.cjs',
  'course/test-round.cjs',
  'course/test-sichuan-content.cjs',
  'course/test-sichuan-round.cjs',
  'course/test-sichuan-rules.cjs',
  'course/test-sichuan-score.cjs',
  'qa/playground-bot-check.cjs',
  'qa/playground-full-check.cjs',
  'qa/playground-call-flow-check.cjs',
  'qa/playground-deck-check.cjs',
  'qa/playground-engine-check.cjs',
  'qa/playground-content-check.cjs',
  'qa/playground-full-ui-check.cjs',
  'qa/playground-table-ui-check.cjs',
  'qa/mcr-playground-check.cjs',
  'qa/mcr-course-check.cjs',
  'qa/mcr-deck-check.cjs',
  'qa/mcr-app-route-check.cjs',
  'qa/american-course-check.cjs',
  'qa/app-route-vm-check.cjs',
  'qa/course-continuation-check.cjs',
  'qa/course-ui-vm-check.cjs',
  'qa/bridge-ui-vm-check.cjs',
  'qa/phase1-regression-check.cjs',
  'qa/phase2-decoupling-check.cjs',
  'qa/phase3-ui-check.cjs',
  'qa/fan-examples-check.cjs',
  'qa/seo-check.cjs'
];

let passed = 0;
let failed = 0;
const startAll = Date.now();

for (const file of suites) {
  const t0 = Date.now();
  const res = spawnSync(process.execPath, [path.join(root, file)], {
    cwd: root,
    encoding: 'utf8'
  });
  const ms = Date.now() - t0;
  if (res.status === 0) {
    passed++;
    const lines = (res.stdout || '').trim().split('\n').filter(Boolean);
    const summary = lines.length ? lines[lines.length - 1] : 'OK';
    console.log(`PASS [${ms}ms] ${file} — ${summary}`);
  } else {
    failed++;
    console.error(`FAIL [${ms}ms] ${file} (exit ${res.status})`);
    if (res.stdout) console.error(res.stdout.trim());
    if (res.stderr) console.error(res.stderr.trim());
  }
}

const totalMs = Date.now() - startAll;
console.log(`\nSummary: ${passed}/${suites.length} passed, ${failed} failed (${totalMs}ms)`);
process.exit(failed ? 1 : 0);
