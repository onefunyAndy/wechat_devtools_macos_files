'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){async function a(a){let b=C[a];if(b)return b;const c=k.join(x,a);return b=C[a]=j.readFileSync(k.join(E,a)),j.writeFile(c,b,(a)=>{a&&n.error(`getUnVersionVendorCache writeFile error ${a}`)}),b}function b(a){return new Promise(async(b)=>{const c=A?Object.keys(A.libs):await s.getVendorList();return c.sort((a,b)=>t(b,a)),0<=c.indexOf(a)?B!=a&&(B=a,z.emit('VENDOR_VERSION_CHANGE',B)):'dev'===a?(B='dev',z.emit('VENDOR_VERSION_CHANGE',B)):c[0]!==a&&(B=c[0],z.emit('VENDOR_VERSION_CHANGE',B)),'dev'!==B&&(z.emit('VENDOR_DOWNLOAD_START',B),s.getVendor(B,!1).then(()=>{z.emit('VENDOR_DOWNLOAD_SUCCESS',B)}).catch((a)=>{n.error(a),s.getVendor(B,!0).then(()=>{z.emit('VENDOR_DOWNLOAD_SUCCESS',B)}).catch((a)=>{n.error(a),z.emit('VENDOR_DOWNLOAD_FAIL',B)})})),b(B)})}function c(a){const b=j.existsSync(y)?JSON.parse(j.readFileSync(y,'utf8')):F;let c=[];try{c=Object.keys(b.libs)}catch(a){c=[]}a&&a.list&&(c=a.list),F.includedLibs&&(c=Array.from(new Set(c.concat(Object.keys(F.includedLibs))))),c.sort((a,b)=>t(b,a));const d=_extends({},b,{onlineVersion:Date.now(),currentLibVersion:c[0],libs:{}});for(const b of c)d.libs[b]={};return b.dev&&(d.libs.dev={}),d}function d(a){return new Promise(async(b)=>{let c=await s.getVendorList();F.includedLibs&&(c=Array.from(new Set(c.concat(Object.keys(F.includedLibs))))),c.sort((a,b)=>t(b,a));const d=_extends({},a,{onlineVersion:Date.now(),currentLibVersion:c[0],libs:{}});for(const a of c)d.libs[a]={};return a.dev&&(d.libs.dev={}),b(d)})}function e(a,b){if(!1!==A.md5){const c=A[a],d=m.createHash('md5');d.update(b);const e=d.digest('hex');if(c!==e){const b=new Error(`${a} ${e}!=${c}`);throw b.code=p.VENDOR_MD5_NOT_MATCH,b}}}async function f(){A=await d(F),console.log('generated vendor config from template',A);const a=JSON.stringify(A);j.writeFileSync(y,a),b(B),z.emit('VENDOR_CONFIG_CHANGE',A)}function g(a){if(C[a])return C[a];const b=v?a:`${a}.exe`;if(u&&!nw.App.manifest.forceVendor)return C[a]=k.join(E,b),C[a];let c=k.join(x,b);if(j.existsSync(c))try{return e(b,j.readFileSync(c)),C[a]=c,c}catch(a){n.error(`getParsePath catch error ${a}`)}if(c=k.join(E,b),!j.existsSync(c)){const b=new Error(`${a} file not found in install package`);throw b.code='wcc'==a?p.VENDOR_WCC_FILE_NOT_FOUND:p.VENDOR_WCSC_FILE_NOT_FOUND,b}C[a]=c;try{j.writeFileSync(k.join(x,b),j.readFileSync(c),{mode:511}),f()}catch(a){}return c}function h(){try{for(const a in w){const b=k.join(x,a),c=j.readFileSync(k.join(E,a));w[a]?j.writeFileSync(b,c,{mode:511}):j.writeFileSync(b,c)}f(),l(k.join(x,'alpha'),(a)=>{if(!a){const a=j.readdirSync(k.join(E,'alpha'));for(const b of a){let a=k.join(x,'alpha',b);const c=j.readFileSync(k.join(E,'alpha',b));j.writeFileSync(a,c)}}})}catch(a){n.error(`copyUnVersionVendor catch error ${a}`)}}function i(){return new Promise(async(a)=>{await s.updateVendorInfos();try{const a=j.existsSync(y)?JSON.parse(j.readFileSync(y,'utf8')):F;A=await d(a);const b=await s.getVendorList();if(b){let a=[...b];a.sort((a,b)=>t(b,a)),a=a.slice(0,5),A.currentLibVersion&&a.unshift(A.currentLibVersion);for(const b of a)console.log('auto downloading vendor if not exists',b),s.getVendor(b,!1).catch(n.error)}K=!1,z.emit('VENDOR_CONFIG_CHANGE',A)}catch(a){K=!0,n.error(a)}a()})}const j=require('fs'),k=require('path'),l=require('mkdir-p'),m=require('crypto'),n=require('./72653d4b93cdd7443296229431a7aa9a.js'),o=require('./92320c1386e6db6a6f2556736a9bc280.js'),p=require('./949d8235c744ced2a80121e4dba34c28.js'),q=require('./15ba1827c7f6564a45df6bd44da3a977.js'),r=require('events').EventEmitter,s=require('./b15113dd543cbfb6f4172e5f5fa6563e.js'),{compareVersion:t}=require('./5ead33d5f1f76ea8589e734afc83b139.js'),u=global.appConfig.isDev,v='darwin'===process.platform;let w=v?{wcc:!0,wcsc:!0,DevToolProtector:!0}:{"wcc.exe":!0,"wcsc.exe":!0};w=Object.assign(w,{"hls.js":!1,"WARemoteDebug.js":!1,"devtools-native-components.js":!1});const x=o.WeappVendor,y=k.join(x,'cfg.json'),z=new r;let A,B;const C={},D=k.join(__dirname,'../../vendor/dev'),E=u?k.join(__dirname,'../../vendor/'):k.join(__dirname,'./vendor/'),F=JSON.parse(j.readFileSync(k.join(E,'config.json'),'utf8')),G=k.join(x,'dev'),H=k.join(E,'alpha');let I=[],J=!1,K=!1;(function(){const a=s.getNullableVendorInfos();return a||console.warn('got vendor info null'),A=c(a),(async()=>{try{await s.updateVendorInfos();const a=j.existsSync(y),c=a?JSON.parse(j.readFileSync(y,'utf8')):F;A=await d(c),b(B),a&&A.configVersion&&!(A.configVersion<F.configVersion)||h(),i(),K=!1}catch(a){K=!0,n.error(`init catch error ${a}`)}J=!0,0<I.length&&(I.forEach((a)=>{K?a.reject():a.resolve()}),I=[])})()})().catch((a)=>n.error('vendor manager init error',a)),module.exports={on(a,b){z.on(a,b)},off(a,b){z.removeListener(a,b)},getFile:function(b,c){return new Promise(async(d,f)=>{if(!c&&u&&!nw.App.manifest.forceVendor)return d(j.readFileSync(k.join(D,b),'utf8'));if(!c&&w.hasOwnProperty(b))return d(a(b));let e;const g=c||B;if('dev'===g){const a=k.join(G,b);let c;try{c=j.readFileSync(a,'utf-8').toString()}catch(a){return f(a)}return d(c)}try{if(z.emit('VENDOR_DOWNLOAD_START',g),e=await s.getVendor(g),z.emit('VENDOR_DOWNLOAD_SUCCESS',g),!e)throw new Error('empty map from vendor downloader')}catch(a){return z.emit('VENDOR_DOWNLOAD_FAIL',g),f(a)}const h=e.get(b)||e.get('/'+b);return h?c?d({content:h.toString('utf-8'),version:e.get('version')}):d(h.toString('utf-8')):f(new Error(b+' not found in vendor contens map'))})},getAlphaFile:async function(a){const b=k.join(H,a),c=j.readFileSync(b,'utf-8').toString();return c},setVersionAsync:b,setVersion:function(a){b(a).catch(n.error);const c=s.getNullableVendorInfos();if(!c||!c.list)return B=a,B;const d=c.list;return d.sort((a,b)=>t(b,a)),0<=d.indexOf(a)?B!=a&&(B=a):'dev'===a?B='dev':d[0]!==a&&(B=d[0]),B},getVersion:function(){return B},getVendorConfig:function(){const a=A||F;return a},getWXMLParsePath:function(){return g('wcc')},getWXSSParsePath:function(){return g('wcsc')},getFixpreferencesPath:function(){if(!v)return;if(C.DevToolProtector)return C.DevToolProtector;const a='DevToolProtector';if(u)return C.DevToolProtector=k.join(E,a),C.DevToolProtector;let b=k.join(x,a);if(!j.existsSync(b)&&(b=k.join(E,a),!j.existsSync(b))){const a=new Error('DevToolProtector file not found in install package');throw a.code=p.VENDOR_WCC_FILE_NOT_FOUND,a}return C.DevToolProtector=b,b},updateVendorConfig:function(){return new Promise((a)=>{a(A)})},checkInit:function(){return new Promise((a,b)=>{return J?K?b():a():void I.push({resolve:a,reject:b})})},updateInfos:i,downloadVendorIfNeeded:async function(a){const b=a||B;if('dev'===b)return null;try{z.emit('VENDOR_DOWNLOAD_START',b);const a=await s.getVendor(b);return z.emit('VENDOR_DOWNLOAD_SUCCESS',b),a}catch(a){throw z.emit('VENDOR_DOWNLOAD_FAIL',b),a}}}}(require('lazyload'),require);