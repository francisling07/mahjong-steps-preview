/* Progress and grading for the WMO MCR course and all 81 fan drill cards. */
(function(g){
  'use strict';
  const isNode=typeof module!=='undefined'&&module.exports;
  const D=isNode?require('./mcr-data.js'):g.MahjongMCRData;
  const F=isNode?require('./mcr-fans.js'):g.MahjongMCRFans;
  const chapters=D.chapters,lessons=chapters.flatMap(c=>c.lessons);
  const lessonById=Object.create(null),questionById=Object.create(null);
  lessons.forEach(l=>{lessonById[l.id]=l;l.questions.forEach(q=>{questionById[q.id]=q;});});
  const tr=(zh,tw,en)=>({zh,tw,en});
  const fanQuestions=Object.create(null);
  const fanValueQuestions=Object.create(null);
  F.fans.forEach(f=>{
    const others=F.fans.filter(x=>x.no!==f.no).sort((a,b)=>Math.abs(a.points-f.points)-Math.abs(b.points-f.points)||Math.abs(a.no-f.no)-Math.abs(b.no-f.no)||a.no-b.no).slice(0,2);
    const group=[f,...others],shift=f.no%3,ordered=group.slice(shift).concat(group.slice(0,shift));
    fanQuestions[`mcr-fan-${f.no}`]={id:`mcr-fan-${f.no}`,type:'choice',
      prompt:tr('这段说明对应哪一个番种？','這段說明對應哪一個番種？','Which fan matches this description?'),
      context:f.summary,
      options:ordered.map((x,i)=>({id:'abc'[i],label:x.name})),
      answerId:'abc'[ordered.indexOf(f)],
      explanation:tr(`${f.name.zh}为 ${f.points} 分。`,`${f.name.tw}為 ${f.points} 分。`,`${f.name.en} scores ${f.points} points.`),
      fanNo:f.no};
    const tiers=[88,64,48,32,24,16,12,8,6,4,2,1],at=tiers.indexOf(f.points);
    const values=[f.points,tiers[(at+1)%tiers.length],tiers[(at+2)%tiers.length]],orderedValues=values.slice(shift).concat(values.slice(0,shift));
    fanValueQuestions[`mcr-fan-${f.no}-value`]={id:`mcr-fan-${f.no}-value`,type:'choice',
      prompt:tr(`${f.name.zh}是多少分？`,`${f.name.tw}是多少分？`,`How many points is ${f.name.en}?`),
      context:f.summary,options:orderedValues.map((n,i)=>({id:'abc'[i],label:tr(`${n} 分`,`${n} 分`,`${n} points`)})),
      answerId:'abc'[orderedValues.indexOf(f.points)],
      explanation:tr(`${f.name.zh}为 ${f.points} 分。`,`${f.name.tw}為 ${f.points} 分。`,`${f.name.en} scores ${f.points} points.`),fanNo:f.no};
  });
  const KEY='mahjong-mcr-v1';
  function emptyProgress(){return {version:1,solved:[],review:[],fanSolved:[],fanReview:[],fanValueSolved:[],fanValueReview:[],lastLessonId:null};}
  function normalizeProgress(raw){
    const p=emptyProgress();if(!raw||typeof raw!=='object'||Array.isArray(raw)||raw.version!==1)return p;
    for(const [field,valid] of [['solved',questionById],['review',questionById],['fanSolved',fanQuestions],['fanReview',fanQuestions],['fanValueSolved',fanValueQuestions],['fanValueReview',fanValueQuestions]]){
      if(Array.isArray(raw[field]))for(const id of raw[field])if(typeof id==='string'&&valid[id]&&!p[field].includes(id))p[field].push(id);
    }
    if(typeof raw.lastLessonId==='string'&&lessonById[raw.lastLessonId])p.lastLessonId=raw.lastLessonId;
    return p;
  }
  function question(id){return questionById[id]||fanQuestions[id]||fanValueQuestions[id]||null;}
  function grade(q,answer){
    if(!q||question(q.id)!==q)return {correct:false,reason:'invalid'};
    if(answer===null||answer===undefined)return {correct:false,reason:'incomplete'};
    if(q.type==='choice'){
      if(typeof answer!=='string'||!q.options.some(o=>o.id===answer))return {correct:false,reason:'invalid'};
      return {correct:answer===q.answerId,reason:answer===q.answerId?'correct':'wrong'};
    }
    if(q.type==='tile-pick'){
      if(!Array.isArray(answer)||answer.length!==q.selectionCount)return {correct:false,reason:'incomplete'};
      if(new Set(answer).size!==answer.length||!answer.every(i=>Number.isInteger(i)&&i>=0&&i<q.tiles.length))return {correct:false,reason:'invalid'};
      const a=answer.map(i=>q.tiles[i]).sort().join('|'),b=q.answerIndexes.map(i=>q.tiles[i]).sort().join('|');
      return {correct:a===b,reason:a===b?'correct':'wrong'};
    }
    return {correct:false,reason:'invalid'};
  }
  function recordAnswer(raw,id,answer,updateCursor=true){
    const p=normalizeProgress(raw),q=question(id),result=grade(q,answer);
    if(!['correct','wrong'].includes(result.reason))return {progress:p,result};
    const fan=!!fanQuestions[id],value=!!fanValueQuestions[id],done=fan?'fanSolved':value?'fanValueSolved':'solved',review=fan?'fanReview':value?'fanValueReview':'review';
    p[done]=p[done].filter(x=>x!==id);p[review]=p[review].filter(x=>x!==id);
    p[result.correct?done:review].push(id);
    if(!fan&&!value&&updateCursor){const l=lessons.find(x=>x.questions.some(z=>z.id===id));if(l)p.lastLessonId=l.id;}
    return {progress:p,result};
  }
  function complete(raw,lessonId){const l=lessonById[lessonId],p=normalizeProgress(raw);return !!l&&l.questions.every(q=>p.solved.includes(q.id));}
  function following(id){const i=lessons.findIndex(l=>l.id===id);return i>=0&&i<lessons.length-1?lessons[i+1]:null;}
  function firstIncomplete(raw){return lessons.find(l=>!complete(raw,l.id))||null;}
  const api={KEY,chapters,lessons,lessonById,questionById,fanQuestions,fanValueQuestions,fanList:F.fans,emptyProgress,normalizeProgress,question,grade,recordAnswer,complete,following,firstIncomplete};
  g.MahjongMCREngine=api;if(isNode)module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:window);
