'use strict';!function(require,directRequire){function a(a){try{const b=JSON.parse(a.content),c={type:i.DBType.system,title:b.title||'',content:b.content||'',timestamp:a.create_time},d={title:b.title||'',message:b.content||''};switch(b.tips_type){case i.TipsType.toast:{d.priority=1,q||(d.requireInteraction=!1);break}case i.TipsType.info:{d.priority=2,q||(d.requireInteraction=!q);break}case i.TipsType.link:{d.priority=2,q||(d.requireInteraction=!q),d.buttons=[{title:b.confirmText||p.config.VIEW_DETAILS}],d.callback=function(a){0===a&&nw.Shell.openExternal(b.link)},c.link=b.link;break}}return k(d),c}catch(a){h.error(`handleSystemTipsMsg ${a}`)}}function b(a){const b=l.getState(),c=b.settings&&b.settings.notification||{};try{const b=JSON.parse(a.content),d={type:i.DBType.bbs,title:b.title||'',content:b.content||'',timestamp:a.create_time},e={title:b.title||'',message:b.content||'',priority:2,requireInteraction:!q};switch(b.tips_type){case i.CmdTipsType.showNewFeature:return;case i.CmdTipsType.visitBBS:return e.buttons=[{title:b.confirmText||p.config.VIEW_DETAILS}],e.callback=(a)=>{0==a&&m.BBS(b.link,o.IDE_SCENE.NOTIFY)},d.link=b.link,c.bbs&&k(e,!0),d;case i.CmdTipsType.alarm:return d.type=i.DBType.alarm,d.link=b.link,e.callback=(a)=>{0==a&&nw.Shell.openExternal(b.link)},e.buttons=[{title:b.confirmText||p.config.VIEW_DETAILS}],c.alarm&&k(e,!0),d;case i.CmdTipsType.mobileTest:return d.type=i.DBType.system,c.sys&&(e.buttons=[{title:b.confirmText||p.config.VIEW_DETAILS}],e.callback=async(a)=>{if(0==a)try{const{body:a}=await f({url:`${g.getMobileTestOpenTicket}`,needToken:1,needAppID:1});let c=-1<b.link.indexOf('?')?`${b.link}&devcode=${a.open_ticket}`:`${b.link}?devcode=${a.open_ticket}`;nw.Window.open(c,{width:o.SIZE.MOBILE_TEST_REPORT.WIDTH,height:o.SIZE.MOBILE_TEST_REPORT.HEIGHT,min_width:o.SIZE.MOBILE_TEST_REPORT.MIN_WIDTH})}catch(a){console.info(`mobile init open report error: ${a}`)}},k(e)),d;}}catch(a){h.error(`handleSystemTipsMsg ${a}`)}}async function c(c){const d=l.getState(),e=d.settings&&d.settings.notification||{},f=[];for(let d=c.length-1;0<=d;d--){const g=c[d];let h;switch(g.type){case i.MsgType.tips:{e.sys&&(h=a(g));break}case i.MsgType.cmdTips:{h=b(g);break}case i.MsgType.systemMsg:break;default:}h&&f.push(h)}0<f.length&&(await n.open(),await n.insert(f),await n.close())}function d(a){if(a&&a.data){const b=JSON.parse(a.data).list;c(b)}}async function e(){const a=j.syncKey,b=j.batchSyncKey,{body:c}=await f({url:g.syncMessage,method:'post',body:JSON.stringify({sync_key:[a,b]}),needToken:1});let i;try{const a=c.sync_data[0],b=c.sync_data[1];d(a),d(b),a&&(j.syncKey=a.sync_key),b&&(j.batchSyncKey=b.sync_key)}catch(a){i=`sync catch error ${a}`}i&&h.error(i)}const f=require('./15ba1827c7f6564a45df6bd44da3a977.js'),g=require('./f171257bbcaef547a3cf27266ccb0db2.js'),h=require('./72653d4b93cdd7443296229431a7aa9a.js'),i=require('./bcb48ae14d243711d3b31cb0f602d209.js'),j=directRequire('./84858de8a097c9cf84ff2c2e3d86e2a9.js'),k=require('./d3ce001ab1e75959382f6a7e0156dd17.js'),l=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),m=require('./25d0beb4120ce2acafb4e03b95444fda.js'),n=require('./948f9199c1cd0ba6cb9d19ad84972410.js'),o=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),p=require('./common/locales/index.js'),q='darwin'===process.platform;let r=null;module.exports={startSync:function(){global.online||global.isDevWindow||(e().catch((a)=>{h.error(`start sync error: ${a}`)}),r=setInterval(()=>{e().catch((a)=>{h.error(`start sync error: ${a}`)})},600000))},stopSync:function(){clearInterval(r)},sync:e}}(require('lazyload'),require);