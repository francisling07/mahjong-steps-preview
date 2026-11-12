/* Arranged teaching rounds: immutable snapshots, verified action history. */
(function(g){
  'use strict';
  var scenarios=typeof module!=='undefined'&&module.exports?require('./round-data.js'):g.MahjongRoundData;
  var rules=typeof module!=='undefined'&&module.exports?require('./hk-rules.js'):g.HKLearningRules;
  var copy=function(v){return JSON.parse(JSON.stringify(v));};
  function plain(v){return v!==null&&typeof v==='object'&&!Array.isArray(v)&&(Object.getPrototypeOf(v)===Object.prototype||Object.getPrototypeOf(v)===null);}
  function scenario(id){return typeof id==='string'?scenarios.find(function(s){return s.id===id;})||null:null;}
  function actionValid(a){return plain(a)&&typeof a.type==='string'&&a.type.length>0&&(!Object.prototype.hasOwnProperty.call(a,'tile')||typeof a.tile==='string');}
  function matches(a,e){return actionValid(a)&&a.type===e.type&&(Object.prototype.hasOwnProperty.call(e,'tile')?a.tile===e.tile:!Object.prototype.hasOwnProperty.call(a,'tile'));}
  function validated(state){
    if(!plain(state))return null;
    var s=scenario(state.scenarioId);
    if(!s||!Number.isInteger(state.cursor)||state.cursor<0||state.cursor>s.steps.length||!Array.isArray(state.history)||state.history.length!==state.cursor)return null;
    for(var i=0;i<state.cursor;i++)if(!matches(state.history[i],s.steps[i].expected))return null;
    return s;
  }
  function start(id){return scenario(id)?{scenarioId:id,cursor:0,history:[]}:null;}
  function advance(state,action){
    var s=validated(state);
    if(!s)return {state:null,correct:false,reason:'invalid'};
    var out={scenarioId:state.scenarioId,cursor:state.cursor,history:state.history.map(function(a){var v={type:a.type};if('tile' in a)v.tile=a.tile;return v;})};
    if(state.cursor===s.steps.length||!actionValid(action))return {state:out,correct:false,reason:'invalid'};
    if(!matches(action,s.steps[state.cursor].expected))return {state:out,correct:false,reason:'different'};
    out.history.push(copy(s.steps[state.cursor].expected));out.cursor++;
    return {state:out,correct:true,reason:'correct'};
  }
  function current(state){
    var s=validated(state);if(!s)return null;
    if(state.cursor<s.steps.length)return {done:false,scene:copy(s.steps[state.cursor].scene),step:copy(s.steps[state.cursor])};
    return {done:true,scene:copy(s.final.scene),result:{fan:s.final.fan,breakdown:copy(s.final.breakdown),winMode:s.final.winMode,settlement:rules.settlement(s.final.fan,s.final.winMode)}};
  }
  function verify(id,actions){
    var s=scenario(id);if(!s||!Array.isArray(actions)||actions.length!==s.steps.length)return false;
    var state=start(id);for(var i=0;i<actions.length;i++){var out=advance(state,actions[i]);if(!out.correct)return false;state=out.state;}
    return current(state).done;
  }
  var api={start:start,advance:advance,current:current,verify:verify};g.MahjongRoundEngine=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(globalThis);
