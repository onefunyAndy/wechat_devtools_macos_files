'use strict';!function(require,directRequire){const a=require('path'),b=require('./949d8235c744ced2a80121e4dba34c28.js'),c=require('./common/locales/index.js'),d=require('./162bf2ee28b76d3b3d95b685cede4146.js'),e=require('./84b183688a46c9e2626d3e6f83365e13.js'),f=require('./6238a86bb7a55c11aa0f9eb335d0f34c.js');module.exports=async function(a,g={}){if(!a.attr||!a.attr.platform)return;const h='ext.json',i=await d(a);let j,k;try{j=i.getFile(h)}catch(a){return}try{k=JSON.parse(j)}catch(a){const c=f.parseJsonParseErr({data:j,error:a}),d=new Error(c);throw d.code=b.EXT_JSON_PARSE_ERR,d}if(!k.extEnable)return{};const l=k.extPages||{},m={};for(const d in l){if(m[d]){const a=new Error(c.config.JSON_PAGES_REPEAT.format([h,d]));throw a.code=b.EXT_JSON_PAGES_ERR,a}m[d]=!0}const n=[],o={};if([{key:'extAppid',type:'string'},{key:'ext',type:'object'},{key:'extPages',type:'object'},{key:'window',type:'object'},{key:'tabBar',type:'object'},{key:'networkTimeout',type:'object'}].forEach((a)=>{const b=k[a.key];b&&(e.getType(b)==a.type?o[a.key]=b:n.push(c.config.EXT_JSON_CONTENT_ERR.format([a.key,a.type])))}),0<n.length){const a=new Error(n.join('\n'));throw a.code=b.EXT_JSON_CONTENT_ERR,a}return k}}(require('lazyload'),require);