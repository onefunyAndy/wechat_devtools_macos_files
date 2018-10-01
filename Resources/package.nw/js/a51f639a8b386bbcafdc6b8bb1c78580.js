'use strict';!function(require,directRequire){function a(){m.remove(m.CACHE_KEYS.JS_APPSERVICE_GAME)}function b(a){const b=d.posix.join('game',a);return`<script>\n// ${a} has been hided by project.config.json\n//# sourceURL=http://127.0.0.1:${global.proxyPort}/${b}\n</script>`}function c(a){return`<script>console.warn(\`${a}\`) </script>`}const d=require('path'),e=require('./d28a711224425b00101635efe1034c99.js'),f=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),g=require('./162bf2ee28b76d3b3d95b685cede4146.js'),h=require('./1bd2563d13db26950ae47494b2c34454.js'),i=require('./dbf59194122bf3d143456959d86d6213.js'),j=require('./be8599cf60139a20dca47b3e43647454.js'),k=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),l=require('./common/locales/index.js'),m=require('./2e9637e8a0816a626f7db9a0dee5efe8.js'),n=require('./1c8a8c710417d102ab574145dc51b4b0.js'),{asDebug:o,subAsDebug:p,vendorList:q,devVendorList:r,devSubContextList:s,devWorkerList:t,appservicejslistPlaceholder:u,subvendorList:v,workerVendorList:w,htmlTpl:x,asdebugPlaceholder:y,devtoolsConfigPlaceholder:z,wxConfigPlaceholder:A,vendorPlaceholder:B,subVendorPlaceholder:C,subAppservicejslistPlaceholder:D,canvasPlaceholder:E,subAsdebugPlaceholder:F,workerjslistPlaceholder:G,workerVendorPlaceholder:H,workerAsdebugPlaceholder:I,workerAsDebug:J,alphaVendorPlaceholder:K}=require('./d9ce5316cc172b6017fdd2399a91117a.js'),L=global.appConfig.isDev,M=L&&!nw.App.manifest.forceVendor?r:q,N=L&&!nw.App.manifest.forceVendor?s:v,O=L&&!nw.App.manifest.forceVendor?t:w;let P='';e.on('VENDOR_CONFIG_CHANGE',a),e.on('VENDOR_VERSION_CHANGE',a),module.exports=async function(a,e={}){await m.init(a);const i=m.CACHE_KEYS.JS_APPSERVICE_GAME,q=await g(a),r=(a.debugOptions||{}).hidedInDevtools||[];let s=!1;const t=j(),v=JSON.stringify({setting:a.setting,condiction:a.condiction,devtoolsConfig:t,debugOptions:a.debugOptions});v!==P&&(s=!0,P=v);let w=m.get(i);if(s||!w||e.force){let e=x;e=e.replace(z,()=>`<script>var __devtoolsConfig=${JSON.stringify(t)}</script>`),e=e.replace(y,()=>L?'<script src="__asdebug__/asdebug.js"></script>':`<script>${o}</script>`),e=e.replace(B,()=>{const a=[];for(let c=0,e=M.length;c<e;c++){const e=M[c],f=d.extname(e);'.js'===f?(a.push(`<script src="__dev__/${e}"></script>`),n.isFileHidedInDevtools(e,r)&&a.push(b(`__dev__/${e}`))):'.css'===f&&a.push(`<link rel="stylesheet" type="text/css" href="__dev__/${e}" />`)}return a.join('\n')});const g=await h(a),j=g.openDataContext||g.subContext;j&&(e=e.replace(F,()=>L?'<script src="__subasdebug__/subasdebug.js"></script>':`<script>${p}</script>`));const s=g.workers;s&&(e=e.replace(I,()=>L?'<script src="__workerasdebug__/workerasdebug.js"></script>':`<script>${J}</script>`),e=e.replace(H,()=>{const a=[];for(let b=0,c=O.length;b<c;b++){const c=O[b],e=d.extname(c);'.js'===e&&a.push(`<script src="__workerdev__/${c}"></script>`)}const b=`<script>var __workerVendors__ = ${JSON.stringify(O)}</script>`;return b+'\n'+a.join('\n')})),g.cloud&&(e=e.replace(K,()=>{const a=[K,`<script src="__alphadev__/WACloud.js"></script>`];return a.join('\n')})),e=e.replace(E,()=>{const a=k.getState(),b=a.toolbar.deviceInfo,{screenHeight:c,screenWidth:d}=b;return`<canvas id="myCanvas" width="${d}" height="${c}" ></canvas>`});const v=q.getAllJSFiles();let A='game';const C=[],D=[],N=[];let P=!1;if(v.forEach((e)=>{if(j&&0===e.indexOf(j))D.push(e);else if(s&&0===e.indexOf(s))N.push(e);else{if(g.subPackages&&2001000<=f.getLibVersionNumber(a.libVersion)){const a=f.checkInGameSubPackage(g,e);if(a)return}const h=d.normalize(e.replace(/\.js$/,''));if(A===h)P=!0;else{C.push(`<script src="${encodeURI(e)}"></script>`),n.isFileHidedInDevtools(e,r)&&C.push(b(`${encodeURI(e)}`));const d=n.isIngoreByProjectConfig(a,h+'.js');d&&C.push(c(d))}}}),!P)A=`<script>
        console.group("${new Date} ${l.config.COMPILE_ERROR_PREFIX.format('game')}")
        console.error(\` ${l.config.NOT_FOUND.format(A+'.js')} \`)
        console.groupEnd()
        </script>`;else{const a=A;A=`<script src="${A}.js"></script>`,n.isFileHidedInDevtools(a+'.js',r)&&(A+='\n'+b(a+'.js'))}C.push(A),e=e.replace(u,()=>C.join('\n')),s&&N.length&&(e=e.replace(G,()=>{const a=[];for(let b=0;b<N.length;b++)a.push(`<script src="${encodeURI(N[b])}"></script>`);return a.join('\n')})),w=e,m.set(i,w)}return w}}(require('lazyload'),require);