// Regenerate browser-ready, trilingual content from bridge-content-source.cjs.
// Uses macOS CoreFoundation for Simplified-to-Traditional conversion.
const fs=require('node:fs'),os=require('node:os'),path=require('node:path'),{spawnSync}=require('node:child_process');
const source=require('./bridge-content-source.cjs');
function seed(x){
  if(Array.isArray(x))return x.map(seed);
  if(x&&typeof x==='object'){
    const out={};for(const [key,value] of Object.entries(x))out[key]=seed(value);
    if(typeof x.zh==='string'&&typeof x.en==='string')out.tw=x.zh;
    return out;
  }
  return x;
}
const temporary=fs.mkdtempSync(path.join(os.tmpdir(),'mahjong-bridge-'));
try{
  const input=path.join(temporary,'input.json'),output=path.join(temporary,'output.json'),script=path.join(temporary,'convert.swift');
  fs.writeFileSync(input,JSON.stringify(seed(source)));
  fs.writeFileSync(script,`import Foundation\nimport CoreFoundation\nfunc convert(_ value: Any) -> Any {\n  if var dictionary = value as? [String: Any] {\n    if let text = dictionary["tw"] as? String {\n      let mutable = NSMutableString(string: text)\n      _ = CFStringTransform(mutable, nil, "Hans-Hant" as CFString, false)\n      dictionary["tw"] = String(mutable)\n    }\n    for (key, child) in dictionary { if key != "tw" { dictionary[key] = convert(child) } }\n    return dictionary\n  }\n  if let array = value as? [Any] { return array.map(convert) }\n  return value\n}\nlet input = try Data(contentsOf: URL(fileURLWithPath: CommandLine.arguments[1]))\nlet data = try JSONSerialization.jsonObject(with: input)\nlet converted = convert(data)\nlet output = try JSONSerialization.data(withJSONObject: converted, options: [.prettyPrinted, .sortedKeys])\ntry output.write(to: URL(fileURLWithPath: CommandLine.arguments[2]))\n`);
  const result=spawnSync('swift',[script,input,output],{encoding:'utf8',env:{...process.env,SWIFT_MODULECACHE_PATH:path.join(temporary,'swift-cache'),CLANG_MODULE_CACHE_PATH:path.join(temporary,'clang-cache')}});
  if(result.status!==0)throw new Error(result.stderr||result.stdout||'Swift conversion failed');
  const data=JSON.parse(fs.readFileSync(output,'utf8'));
  const target=path.join(__dirname,'bridge-data.js');
  fs.writeFileSync(target,'/* Generated from bridge-content-source.cjs; trilingual browser data. */\n(function(g){const data='+JSON.stringify(data,null,2)+';g.MahjongBridgeData=data;if(typeof module!=="undefined"&&module.exports)module.exports=data;})(globalThis);\n');
  console.log('Updated '+target);
}finally{fs.rmSync(temporary,{recursive:true,force:true});}
