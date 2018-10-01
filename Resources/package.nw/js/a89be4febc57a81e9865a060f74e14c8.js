'use strict';!function(require,directRequire){async function a(a,c){const h='plugin.json',i={};if(c.publicComponents){if('object'!=f.getType(c.publicComponents)){const a=new Error(g.config.JSON_CONTENT_SHOULD_BE.format(['publicComponents','Object']));throw a.code=j.PLUGIN_JSON_CONTENT_ERR,a}const k=[];for(const f in c.publicComponents){const j=c.publicComponents[f];await b(j,`publicComponents['${f}']`),e.existsSync(d.join(a,`${j}\.wxml`))||k.push(g.config.JSON_PAGE_FILE_NOT_EXISTS.format([h,'publicComponents',j,'WXML'])),e.existsSync(d.join(a,`${j}\.js`))||k.push(g.config.JSON_PAGE_FILE_NOT_EXISTS.format([h,'publicComponents',j,'JS'])),e.existsSync(d.join(a,`${j}\.json`))||k.push(g.config.JSON_PAGE_FILE_NOT_EXISTS.format([h,'publicComponents',j,'JSON'])),i[f]=!0}if(0<k.length){const a=new Error(k.join('\n'));throw a.code=j.PLUGIN_JSON_FILE_NOT_FOUND,a}}if(c.pages){if('object'!=f.getType(c.pages)){const a=new Error(g.config.JSON_CONTENT_SHOULD_BE.format(['pages','Object']));throw a.code=j.PLUGIN_JSON_CONTENT_ERR,a}const k=[];for(const f in c.pages){const j=c.pages[f];await b(j,`pages['${f}']`),e.existsSync(d.join(a,`${j}\.wxml`))||k.push(g.config.JSON_PAGE_FILE_NOT_EXISTS.format([h,'pages',j,'WXML'])),e.existsSync(d.join(a,`${j}\.js`))||k.push(g.config.JSON_PAGE_FILE_NOT_EXISTS.format([h,'pages',j,'JS'])),e.existsSync(d.join(a,`${j}\.json`))||k.push(g.config.JSON_PAGE_FILE_NOT_EXISTS.format([h,'pages',j,'JSON'])),i[f]&&k.push(g.config.SAME_KEY_PAGE_PUBLICCOMPONENTS.format(f)),i[f]=!0}if(0<k.length){const a=new Error(k.join('\n'));throw a.code=j.PLUGIN_JSON_FILE_NOT_FOUND,a}}}async function b(a,b){const c=['.','/',' ','\\'];for(let d=0,e=c.length;d<e;d++){const e=c[d];if(0==a.indexOf(e)){const a=new Error(g.config.JSON_SHOULD_NOT_START_WITH.format([b,e]));throw a.code=j.PLUGIN_JSON_CONTENT_ERR,a}}}async function c(a,c){if(c.main){if('string'!=f.getType(c.main)){const a=new Error(g.config.JSON_CONTENT_SHOULD_BE.format(['main','string']));throw a.code=j.PLUGIN_JSON_CONTENT_ERR,a}if(await b(c.main,'main'),!e.existsSync(d.join(a,c.main))){const a=new Error(g.config.JSON_PAGE_FILE_NOT_EXISTS.format(['plugin.json','main',c.main,'JS']));throw a.code=j.PLUGIN_JSON_FILE_NOT_FOUND,a}}}const d=require('path'),e=require('fs'),f=require('./84b183688a46c9e2626d3e6f83365e13.js'),g=require('./common/locales/index.js'),h=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),i=require('./a63026ab5a5a3c59a61a9749a18aa2ca.js'),j=require('./949d8235c744ced2a80121e4dba34c28.js'),k=require('./6238a86bb7a55c11aa0f9eb335d0f34c.js'),l=require('./fcadebce92dacc42ac4bba476b700dee.js'),m=require('./2e9637e8a0816a626f7db9a0dee5efe8.js');module.exports=async function(b){const d=b.compileType;if(d!=h.plugin)return{};await m.init(b);const e=m.CACHE_KEYS.JSON_PLUGIN,f=await i(b);let l=m.get(e);if(!l){const b=f.srcPath,d='plugin.json';let h='';try{h=f.getFile(d)}catch(a){const b=new Error(g.config.FILE_NOT_FOUND.format(d));throw b.code=j.PLUGIN_JSON_READ_ERR,b.ext=a.toString(),b}let i={};try{i=JSON.parse(h)}catch(a){const b=k.parseJsonParseErr({data:h});throw a=new Error(b),a.code=j.PLUGIN_JSON_PARSE_ERR,a}await a(b,i),await c(b,i),l=i,m.set(e,l)}return l}}(require('lazyload'),require);