'use strict';!function(require,directRequire){const a=require('./a63026ab5a5a3c59a61a9749a18aa2ca.js'),b=require('./949d8235c744ced2a80121e4dba34c28.js'),c=require('./common/locales/index.js'),d=require('./6238a86bb7a55c11aa0f9eb335d0f34c.js'),e=require('./fcadebce92dacc42ac4bba476b700dee.js'),f=require('./2e9637e8a0816a626f7db9a0dee5efe8.js');module.exports=async function(g,h){const i=`${h}.json`;await f.init(g);const j=await a(g),k=f.CACHE_KEYS.JSON_FILE,l=path.posix.join(j.srcPath,i),m=f.get(k,l);if(m&&m.code&&m.nodeModules==g.setting.nodeModules)return m.code;const n=j.getFile(i);let o;try{o=JSON.parse(n)}catch(a){const e=d.parseJsonParseErr({data:n,error:a}),f=new Error(`${c.config.JSON_PARSE_ERROR.format(i)}  ${e}`);throw f.path=i,f.code=b.PLUGIN_PAGE_JSON_PARSE_ERR,f}return g.setting&&g.setting.nodeModules&&(await e(j,o,h)),f.set(k,l,{code:o,nodeModules:g.setting.nodeModules}),o}}(require('lazyload'),require);