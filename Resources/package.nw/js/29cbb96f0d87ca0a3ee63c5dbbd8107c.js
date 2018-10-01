'use strict';!function(require,directRequire){const a=require('react'),b=require('react-dom'),{Provider:c}=require('react-redux'),d=require('systeminformation'),e=require('./8e433dffaa20c3a7331f9aeecb1221b0.js'),f=directRequire('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),g=require('./ff946754202ecf377034d29daac7c8d9.js'),h=require('./437e6043fc662374e4f1c2330516ac40.js'),i=require('./c41853777103289d939a4b1503784d4f.js'),j=require('./5451dfc4d939398d913dc724d952b02b.js'),k=require('./84b183688a46c9e2626d3e6f83365e13.js'),l=require('./da7c31daaf542cf1796023d8e344b98a.js'),m=require('./72653d4b93cdd7443296229431a7aa9a.js'),n=require('./d78f3e12fd18e9a066714df1b7cf9fa4.js'),o='darwin'===process.platform,p=require('./84858de8a097c9cf84ff2c2e3d86e2a9.js'),q=require('./common/locales/index.js'),r=async()=>{global.appConfig.isDev||(console.log=()=>{},console.info=()=>{});const r=await k.getAvailablePort();global.proxyPort=r,h.startProxyServer({port:r,rule:i});const s=await k.getAvailablePort();global.messageCenterPort=s,g.start(s),o&&j.init(global.Win);try{-1<nw.App.argv.indexOf('--inspect')&&nw.Window.open('about:blank',{id:'chromeInspect',show:!0,width:799,height:799},(a)=>{a.window.location='chrome://inspect/#devices'})}catch(a){}let t;try{const a=nw.App.argv.indexOf('--cli');if(-1<a){let b=nw.App.argv[a+1];b&&(b=parseInt(b),0<b&&(t=b,global.CLI.cliRemotePort=t)),global.CLI.startedByCLI=!0,o?(global.Win.showFunction=global.Win.show,global.Win.show=()=>{}):(global.Win.show(),!global.online&&setTimeout(()=>global.Win.minimize(),20))}else global.Win.show()}catch(a){global.Win.showFunction&&(global.Win.show=global.Win.showFunction,global.Win.showFunction=void 0),global.Win.show(),m.error('parse process argv error: '+a)}try{k.getAvailablePort().then((a)=>{global.cliPort=a,n.start(a,t)})}catch(a){m.error(`start cli server error: ${a}`)}if(!global.appConfig.isDev){function a(a,b){try{const c=b.filename,d=b.error.stack;m.error(`filename: ${c}, msg: ${d}`),l(a,'',`filename: ${c}, msg: ${d}`)}catch(a){}}process.on('uncaughtException',(a)=>{console.log(a)}),window.addEventListener('error',(b)=>{a('tool_error_nw',b)}),global.contentWindow.addEventListener('error',(b)=>{a('tool_error_web',b)})}else process.on('uncaughtException',(a)=>{console.log(a)});try{setTimeout(async()=>{let a=60;const b=async()=>{try{if(0===Object.keys(p.userInfo||{}).length)return(a--,0>a)?void 0:void setTimeout(b,6e4);const c={};try{const a=await d.osInfo();c.ostype='win32'===a.platform?2:1,c.osversion=a.release,c.osbyte=/64/.test(a.arch)?64:32,global.osVersion=a.release}catch(a){}try{const a=await d.cpu();c.cpumodel=a.brand,c.cpucores=a.cores,c.cpuspeed=parseInt(1e3*parseFloat(a.speed))}catch(a){}try{const a=await d.mem();c.memsize=parseInt(a.total/1024/1024),c.swapsize=parseInt(a.swaptotal/1024/1024)}catch(a){}try{const a=await d.graphics();c.gpumodel=a.controllers[0].model,c.gpuvramsize=a.controllers[0].vram}catch(a){}try{c.systemlanguage=navigator.language,c.ideversion=parseInt(global.appVersion.toString().replace(/\./g,''))}catch(a){}l('system_info_report',null,JSON.stringify(c)),m.info('report')}catch(a){m.error(`report sysinfo error: ${a}`)}};b()},5e3)}catch(a){}let u;if(u=global.isDevWindow?require('./881e653f19d837f2408386047cb8c38c.js'):require('./b543ae2da406cea63b3ad8951f17b6c0.js'),u.init(),q.onChangeLocale((a,b)=>u.notifyChangeLocale(b)),global.CLI.isTestMode||global.appConfig.isDev||global.appConfig.isGamma||window.addEventListener('contextmenu',(a)=>{a.preventDefault()}),b.render(a.createElement(c,{store:f},a.createElement(e,null)),global.contentDocument.getElementById('container')),global.isDevWindow){const a=require('./9ebfd1a4a241684455002e8c6d889fd7.js');a.init()}else{const a=require('./21f514ff4bec9e66868fcf3389b6c5e8.js');a.init()}const v=k.getVersionNum(),w=p.lastVersion;!global.autoTest&&v>w&&(p.lastVersion=v,l('update_success_report'))};'complete'===global.contentDocument.readyState?r():global.contentWindow.addEventListener('load',r)}(require('lazyload'),require);