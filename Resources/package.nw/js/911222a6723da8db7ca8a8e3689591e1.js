'use strict';!function(require,directRequire){const a=require('fs'),b=require('path'),c=require('mkdir-p'),d=require('./1dea83a77e99a7c94f6b6f01f5c175b0.js'),e=require('./551bb965e1f344281d555a429cd2140c.js'),f=require('./aca8387a2744eff1c61b81cdb985e514.js'),g=require('./a89be4febc57a81e9865a060f74e14c8.js'),h=require('./1bd2563d13db26950ae47494b2c34454.js'),i=require('./3d1dfba33285839f5aa317a53698f4c5.js'),j=require('./1f28f42c846af07c2adfb1a5eb2d92b6.js'),k=require('./59a4de6f8f83ea2bc7d7a501d45d5c9d.js'),l=require('./3bfffbe88b3d923921f851c0697974fe.js'),m=require('./162bf2ee28b76d3b3d95b685cede4146.js'),n=require('./efc820e1b92d6e4063535296d4a24213.js'),o=require('./common/locales/index.js'),p=require('./949d8235c744ced2a80121e4dba34c28.js'),q=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),r=require('./91813390c7af1ab7c0fa362a5ecb48b9.js'),{Weappdest:s}=require('./92320c1386e6db6a6f2556736a9bc280.js'),t=require('./da7c31daaf542cf1796023d8e344b98a.js'),u=()=>{};module.exports=function(a,h){if(a.attr&&a.attr.gameApp){const b=require('./d120b9f76f645b79bc31fb8dd10f8067.js');return b(a,h)}const m=h.onProgressUpdate||u;return new Promise(async(n,p)=>{const r=a.compileType;m('checkfilestart',o.config.CHECKING_FILE);try{await d(a,h),await e(a,h),await f(a,h),r==q.plugin&&(await g(a,h))}catch(a){return p(a)}m('checkfileend',o.config.FILE_CHECK_COMPLETED);l.getCurrentConfig();const v=1*new Date,w=b.join(s,`${+new Date}`);c.sync(w);try{m('compilejsfilestart',o.config.COMPILING_JS_FILE),await i(a,{distPath:w,onProgressUpdate:m,onFilesIgnored:h.onFilesIgnored||u}),m('compilejsfilestart',o.config.JS_COMPILATION_COMPLETED),m('compileotherfilestart',o.config.COMPLING_OTHER_FILES),await j(a,{distPath:w}),await k(a,{distPath:w}),m('compileotherfileend',o.config.OTHER_FILES_COMPILATION_COMPLETED)}catch(a){return p(a)}const x=1*new Date;return t('client_pack_source_time',a.appid,`${x-v}`),n(w)})}}(require('lazyload'),require);