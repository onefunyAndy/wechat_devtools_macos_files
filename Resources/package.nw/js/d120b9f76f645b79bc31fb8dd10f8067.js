'use strict';!function(require,directRequire){const a=require('fs'),b=require('path'),c=require('mkdir-p'),d=require('./1bd2563d13db26950ae47494b2c34454.js'),e=require('./50520c51b7863c9a4dab40d19f4e43d9.js'),f=require('./baf0c42a1a275f62a46bf025e8a17de7.js'),g=require('./common/locales/index.js'),{Weappdest:h}=require('./92320c1386e6db6a6f2556736a9bc280.js'),i=()=>{};module.exports=function(a,j){const k=j.onProgressUpdate||i;return new Promise(async(i,l)=>{let m;try{m=await d(a,j)}catch(a){return l(a)}const n=b.join(h,`${+new Date}`);c.sync(n);try{await e(a,{distPath:n,onProgressUpdate:k,onFilesIgnored:j.onFilesIgnored}),k('compileotherfilestart',g.config.COMPLING_OTHER_FILES),await f(a,{distPath:n,gameJSON:m}),k('compileotherfileend',g.config.OTHER_FILES_COMPILATION_COMPLETED)}catch(a){return l(a)}return i(n)})}}(require('lazyload'),require);