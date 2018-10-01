'use strict';!function(require,directRequire){function a(a){const b=l.getCurrentConfig().gameApp,c=b?r:q;return 0===a.indexOf(c)}function b(a){return 0===a.indexOf(p)}function c(b){if(a(b)){const a=l.getCurrentConfig().gameApp,c=a?r:q,d=b.replace(c,'').replace(/\/$/,'');return g.join(s,d)}return b}function d(a,b){const c=t();return h.writeFileSync(g.join(s,`${c}${b}`),a),`${q}${c}${b}`}const e=require('crypto'),f=require('os'),g=require('path'),h=require('fs'),i=require('mkdir-p'),j=require('./92320c1386e6db6a6f2556736a9bc280.js'),k=require('./89ba85d67a88f7636d657c22b5d3e038.js'),l=require('./3bfffbe88b3d923921f851c0697974fe.js'),m=require('./37be435102276ea9cf47609ff6535cd4.js'),n='tmp',o='store',p=`${m.LOCAL_PROTOCOL}${m.USER_DIR}`,q='wxfile://',r='http://',s=j.WeappFileCache,t=function(){let a;const b=k.getUserInfo(),c=l.getCurrent(),d=c.hash,f=b?b.openid:'unknow';do{const b=e.createHash('md5');b.update(`${d}${f}${Date.now()}${Math.random()}`),a=`${n}_${d}${f}${b.digest('hex')}`}while(h.existsSync(g.join(s,a)));return a};module.exports={isLocalId:a,isUserFile:b,getRealPath:c,copyFileDataToTemp:d,copyFileToTemp:function(a,b){if(h.existsSync(a)){const c=h.readFileSync(a);return d(c,b)}return!1},saveFileForever:function(a){try{const b=c(a);if(h.existsSync(b)){const d=l.getCurrentConfig().gameApp,e=d?r:q,f=a.replace(`${e}${n}`,`${e}${o}`);return h.renameSync(b,c(f)),f}}catch(a){}return!1},getSavedFileList:function(){const a=k.getUserInfo(),b=l.getCurrent(),c=b.hash,d=a?a.openid:'unknow',e=h.readdirSync(s).filter((a)=>!!~a.indexOf(`${o}_${c}${d}`));let f=0;const i=e.reduce((a,b)=>{const c=h.statSync(g.join(s,b));return f=c.size+f,a.push({filePath:`${q}${b}`,size:c.size,createTime:parseInt(c.ctime.getTime()/1e3)}),a},[]);return{fileList:i,totalSize:f}},getFileStat:function(a){const b=c(a);let d;return h.existsSync(b)&&(d=h.statSync(b)),d},removeSavedFile:function(a){const b=c(a);let d=!1;return h.existsSync(b)&&(h.unlinkSync(b),d=!0),d},saveBase64DataToFile:function(a,b){const c=new Buffer(a,'base64').toString('binary'),d=t();return h.writeFileSync(g.join(s,`${d}${b}`),c,'binary'),`${q}${d}${b}`},cleanProjectFile:function(a){const b=l.getCurrent(),c=h.readdirSync(s).filter((c)=>!!~c.indexOf(a?`_${b.hash}`:`${n}_${b.hash}`));c.map((a)=>{h.unlinkSync(g.join(s,a))})},cleanTempFile:function(){try{h.readdirSync(s).map((a)=>{0<=a.indexOf(n)&&h.unlinkSync(g.join(s,item))})}catch(a){}},createNewLocalId:function(){const a=l.getCurrentConfig().gameApp,b=a?r:q;return`${b}${t()}`},getWriteFilePath:function(a){a=a||l.getCurrent();const b=a.appid,c=g.join(j.WeappFileCache,b);return i.sync(c),c},getUsrFileRealPath:function(a,c){if(b(a)){c=c||l.getCurrent();const b=g.join(s,c.appid);return i.sync(b),g.join(b,a.replace(p,''))}return''}}}(require('lazyload'),require);