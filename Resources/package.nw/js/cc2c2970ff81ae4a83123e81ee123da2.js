'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('fs'),b=require('path'),c=require('mkdir-p'),d=require('glob'),e=require('lodash'),f=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),g=require('./f171257bbcaef547a3cf27266ccb0db2.js'),h=require('./15ba1827c7f6564a45df6bd44da3a977.js'),i=require('./72653d4b93cdd7443296229431a7aa9a.js'),j=require('./3bfffbe88b3d923921f851c0697974fe.js'),k=require('./d28a711224425b00101635efe1034c99.js'),l=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),m=require('./a8c87029da0fa06e986298d447ab0fe2.js'),n=require('./84858de8a097c9cf84ff2c2e3d86e2a9.js'),o=require('./df6d0ff021a69fb541c733de4dbba0fe.js'),p=require('./da7c31daaf542cf1796023d8e344b98a.js'),q=require('./common/locales/index.js'),r=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),s=require('./42191d95974f14b18961c9f2c730464e.js'),t=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),u=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),v=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),w=require('./84b183688a46c9e2626d3e6f83365e13.js'),x=require('./eb1fe4da47d7ed10884f8b039b058c5b.js'),y=require('./9ebfd1a4a241684455002e8c6d889fd7.js'),z=require('./881e653f19d837f2408386047cb8c38c.js'),A=require('./b543ae2da406cea63b3ad8951f17b6c0.js'),{default_weapp_header:B}=require('./5498e660c05c574f739a28bd5d202cfa.js'),C='darwin'===process.platform,D=(a,b)=>{if(!a)return!1;b=_extends({},b||{});const c=['setting','compileType','condiction','libVersion','appid','projectname','svr','client','qcloudRoot','miniprogramRoot','cloudfunctionRoot','jsserverRoot','pluginRoot','isGameTourist','packOptions','debugOptions','scripts'];for(const d in b)b.hasOwnProperty(d)&&0>c.findIndex((a)=>a===d)&&delete b[d];const d=s.generateConfigTemplate(),e=_extends({},d,{setting:_extends({},a.setting),compileType:a.compileType,condiction:a.condiction,libVersion:a.libVersion,appid:a.appid,projectname:a.projectname,svr:a.svr,client:a.client,qcloudRoot:a.qcloudRoot,miniprogramRoot:a.miniprogramRoot,cloudfunctionRoot:a.cloudfunctionRoot,jsserverRoot:a.jsserverRoot,pluginRoot:a.pluginRoot,packOptions:a.packOptions,debugOptions:a.debugOptions,scripts:a.scripts},b);delete e.setting.scriptsEnable;const f=s.writeObjectToConfigFile(a,e);return!f.error},E=(a,b,c)=>(d)=>{return'parseerror'===a?void d(t.setConfirmInfo({show:!0,showCancel:!0,title:'',content:q.config.RE_CREATE_PROJECT_CONFIG,callback(a){a&&D(b,c)}})):void D(b,c)},F=(a)=>(b,c)=>{const d=c();if(!a){if(a=d.project.current,!a||a.isTemp)return;a.accessTime=+new Date,n.updateProject(a.projectid,a),b({type:f.PROJECT_UPDATE_LIST,list:_extends({},d.project.list,{[a.projectid]:a})})}else a.accessTime=+new Date,n.updateProject(a.projectid,a),b({type:f.PROJECT_UPDATE_LIST,list:_extends({},d.project.list,{[a.projectid]:a})})},G=(a)=>Object.prototype.toString.call(a).toLowerCase().slice(8,-1),H=(a,b,c,d)=>{return G(b)===c?d?0<=d.findIndex((a)=>a===b)?b:a:b:a};module.exports={selectDevType:(a)=>(b,c)=>{if(a!==l.DEV_TYPE.MP_WEB)try{const a=c().project.list;0<Object.keys(a).length?b(m.setMainWindow(l.MAIN_WINDOW_TYPE.SELECT_PROJECT)):b(m.setMainWindow(l.MAIN_WINDOW_TYPE.CREATE_PROJECT))}catch(a){b(m.setMainWindow(l.MAIN_WINDOW_TYPE.SELECT_PROJECT))}else x.openWebDebugger(),n.lastSelect=l.MAIN_WINDOW_TYPE.WEB_DEBUGGER,p('url_open')},selectProjectRequest:(a)=>({type:f.PROJECT_SELECT_PROJECT_REQUEST,options:a}),selectProjectCancel:()=>({type:f.PROJECT_SELECT_PROJECT_CANCEL}),selectProjectOpen:(a)=>()=>{y.selectProjectOpen(a)},selectProjectClose:()=>({type:f.PROJECT_SELECT_PROJECT_CLOSE}),createProjectRequest:()=>({type:f.PROJECT_CREATE_PROJECT_REQUEST}),createProjectSuccess:(g,{initQuickStart:h=!1,quickstartHost:k=''}={})=>(m)=>{const n=e.merge(j.projectConfigDefault(g),g);if(h){const e=g.projectpath;let f=h===l.QUICKSTART_TYPE.WEAPP?'weapp':h===l.QUICKSTART_TYPE.WX_CLOUD?'wxcloud':h===l.QUICKSTART_TYPE.WX_CLOUD_GAME?'wxcloud-game':h===l.QUICKSTART_TYPE.QCLOUD_NODEJS?'node':h===l.QUICKSTART_TYPE.QCLOUD_PHP?'php':h===l.QUICKSTART_TYPE.QCLOUD_NODEJS_GAME?'node-game':h===l.QUICKSTART_TYPE.QCLOUD_PHP_GAME?'php-game':h===l.QUICKSTART_TYPE.PLUGIN?'plugin':h===l.QUICKSTART_TYPE.GAME?'game':h===l.QUICKSTART_TYPE.WEAPP_MINI?'weapp-mini':h===l.QUICKSTART_TYPE.GAME_MINI?'game-mini':h===l.QUICKSTART_TYPE.PLUGIN_MINI?'plugin-mini':'weapp';const j=global.appConfig.isDev?b.join(__dirname,'../../vendor/quickstart',f):b.join(__dirname,'./vendor/quickstart',f);try{const f=d.sync('./**/**',{cwd:j});if(f.forEach((d)=>{const f=b.join(j,d),h=b.join(e,d),i=a.lstatSync(f);if(i.isDirectory())c.sync(h);else{let c=a.readFileSync(f);g.compileType==r.plugin&&'app.json'==b.basename(d)&&(c=c.toString().replace('{{provider}}',g.appid)),a.writeFileSync(h,c)}}),h===l.QUICKSTART_TYPE.QCLOUD_NODEJS){const c=b.join(e,'./server/config.js'),d=a.readFileSync(c,'utf8');if(a.writeFileSync(c,d.replace('appId: \'\',',`appId: '${n.appid}',`).replace('pass: \'\',',`pass: '${n.appid}',`),'utf8'),k){const c=b.join(e,'./client/config.js'),d=a.readFileSync(c,'utf8');a.writeFileSync(c,d.replace('host = \'https://123456.qcloud.la\'',`host = '${k}'`),'utf8')}}else if(h===l.QUICKSTART_TYPE.QCLOUD_PHP){const c=b.join(e,'./server/config.php'),d=a.readFileSync(c,'utf8');if(a.writeFileSync(c,d.replace('\'appId\' => \'\',',`'appId' => '${n.appid}',`).replace('\'pass\' => \'\',',`'pass' => '${n.appid}',`),'utf8'),k){const c=b.join(e,'./client/config.js'),d=a.readFileSync(c,'utf8');a.writeFileSync(c,d.replace('host = \'https://123456.qcloud.la\'',`host = '${k}'`),'utf8')}}else if(h===l.QUICKSTART_TYPE.QCLOUD_NODEJS_GAME){const c=b.join(e,'./server/config.js'),d=a.readFileSync(c,'utf8');if(a.writeFileSync(c,d.replace('appId: \'\',',`appId: '${n.appid}',`).replace('pass: \'\',',`pass: '${n.appid}',`),'utf8'),k){const c=b.join(e,'./client/config.js'),d=a.readFileSync(c,'utf8');a.writeFileSync(c,d.replace('host = \'https://123456.qcloud.la\'',`host = '${k}'`),'utf8')}}else if(h===l.QCLOUD_ACTION_TYPE.QCLOUD_PHP_GAME){const c=b.join(e,'./server/config.php'),d=a.readFileSync(c,'utf8');if(a.writeFileSync(c,d.replace('\'appId\' => \'\',',`'appId' => '${n.appid}',`).replace('\'pass\' => \'\',',`'pass' => '${n.appid}',`),'utf8'),k){const c=b.join(e,'./client/config.js'),d=a.readFileSync(c,'utf8');a.writeFileSync(c,d.replace('host = \'https://123456.qcloud.la\'',`host = '${k}'`),'utf8')}}else if(h===l.QUICKSTART_TYPE.WX_CLOUD){let c=b.join(e,'./project.config.json'),d=a.readFileSync(c,'utf8');a.writeFileSync(c,d.replace(`"appId": "",`,`"appId": "${n.appid}",`))}else if(h===l.QUICKSTART_TYPE.WX_CLOUD_GAME){let c=b.join(e,'./project.config.json'),d=a.readFileSync(c,'utf8');a.writeFileSync(c,d.replace(`"appId": "",`,`"appId": "${n.appid}",`))}}catch(a){i.error(`project.actions.js initProject error ${a.toString()}`)}}const o=s.getConfigFileInfo(g);if(!o.error){const a=_extends({},o.config,{appid:n.appid,projectname:n.projectname});g.isGameTourist&&(a.setting.urlCheck=!1),s.writeObjectToConfigFile(g,a)}else D(g,n);m({type:f.PROJECT_CREATE_PROJECT_SUCCESS,project:n}),m(F(n))},createProjectFail:(a)=>({type:f.PROJECT_CREATE_PROJECT_FAIL,err:a}),createProjectCancel:()=>(a,b)=>{b();try{const c=b().project.list;0<Object.keys(c).length?a(m.setMainWindow(l.MAIN_WINDOW_TYPE.SELECT_PROJECT)):a(m.setMainWindow(l.MAIN_WINDOW_TYPE.ENTRANCE))}catch(b){a(m.setMainWindow(l.MAIN_WINDOW_TYPE.SELECT_PROJECT))}},createProjectOpen:()=>()=>{y.createProjectOpen()},createProjectClose:()=>({type:f.PROJECT_CREATE_PROJECT_CLOSE}),createMiniCodeRequest:(a='create',b)=>({type:f.PROJECT_CREATE_MINICODE_REQUEST,createType:a,options:b}),createMiniCodeOpen:(a,b)=>()=>{y.createMiniCodeOpen(a,b)},createMiniCodeClose:()=>({type:f.PROJECT_CREATE_MINICODE_CLOSE}),removeProject:(a)=>(b)=>{n.removeProject(a),A.closeDevWindow(a),b({type:f.PROJECT_REMOVE_PROJECT,id:a})},openProject:(a)=>(b)=>new Promise(async(c,d)=>{try{const d=n.projectList;d[a]||i.error(`open project with unknown projectid ${a}`);const e=d[a];e&&(e.storage={}),e.accessTime=+new Date;let{appid:f,projectname:g,projectpath:h}=e;h=encodeURIComponent(h),x.openMiniProgram({appid:f,projectname:g,projectpath:h}),c(),b(F()),n.lastSelect=a,p('project_open',e.appid)}catch(a){d(a)}}),closeProject:()=>(a,b)=>{const c=b();c.project.current&&c.window.remoteDebugWindow.debuggingProjectId===c.project.current.projectid&&a(m.setRemoteDebugWindow({show:!1,debuggingProjectId:null})),z.notifyCloseWindow(!0),global.windowMap.forEach((a)=>{try{a!==Win&&a.close(!0)}catch(a){}}),nw.Window.get().close(!0)},requestProjectAttr:()=>(a)=>new Promise(async(b)=>{const c=j.getCurrent();if(!(c&&c.isTourist))try{const d=await j.getLatestProjectAttr();a({type:f.PROJECT_UPDATE_ATTR,data:d}),a({type:f.SIMULATOR_SET_GROUP_INFO,data:{list:d.share_info}}),a(F(c)),b()}catch(d){i.error(`requestProjectAttr catch error ${d}`),d===q.config.CGI_ERR_NOT_BAND?a({type:f.PROJECT_UPDATE_ATTR,data:{userbanded:!1},project:c}):(d===q.config.CGI_ERR_PLATFORM_INVALID_EXT_APPID||d===q.config.CGI_ERR_PLATFORM_EXT_APPID_NOT_AUTH)&&a({type:f.PROJECT_SET_EXT_INFO,data:{errMsg:d}}),b(d)}}),setCompileCondiction:(a)=>(b)=>{b({type:f.PROJECT_SET_COMPILE_CONDICTION,data:a});const c=j.getCurrent(),d=c.compileType,e=s.getConfigFileInfo(c),g=[...c.condiction[d].list];if(e.error)b(E(e.error.type,c,{condiction:_extends({},c.condiction,{[d]:_extends({},c.condiction[d],{list:g})})}));else{const a=_extends({},e.config,{condiction:_extends({},c.condiction,e.config.condiction||{},{[d]:_extends({},c.condiction[d],{list:g})})});s.writeObjectToConfigFile(c,a)}b(F())},removeCompileCondiction:(a)=>(b)=>{b({type:f.PROJECT_REMOVE_COMPILE_CONDICTION,data:a});const c=j.getCurrent(),d=c.compileType,e=s.getConfigFileInfo(c),g=[...c.condiction[d].list];if(e.error)b(E(e.error.type,c,{condiction:_extends({},c.condiction,{[d]:_extends({},c.condiction[d],{list:g})})}));else{const a=_extends({},e.config,{condiction:_extends({},c.condiction,e.config.condiction||{},{[d]:_extends({},c.condiction[d],{list:g})})});s.writeObjectToConfigFile(c,a)}b(F())},setProjectSetting:(a)=>(b)=>{const c=j.getCurrent();b({type:f.PROJECT_SET_SETTING,data:a});const d=s.getConfigFileInfo(c);if(d.error){const e=_extends({},c.setting,a);delete e.scriptsEnable,b(E(d.error.type,c,{setting:e}))}else{const b=_extends({},d.config,{setting:_extends({},c.setting,d.config.setting||{},a)});delete b.setting.scriptsEnable,s.writeObjectToConfigFile(c,b)}b(F())},selectCompileCondiction:(a)=>(b)=>{b({type:f.PROJECT_SELECT_COMPILE_CONDICTION,current:a}),b({type:f.SIMULATOR_COMPILE,data:{}}),b(F())},setProjectLibVersion:(a)=>(b)=>{k.setVersionAsync(a),b({type:f.PROJECT_SET_LIBVERSION,data:a});const c=j.getCurrent(),d=s.getConfigFileInfo(c);if(d.error)b(E(d.error.type,c,{libVersion:a}));else{const b=_extends({},d.config,{libVersion:a});s.writeObjectToConfigFile(c,b)}b(F())},checkUploadStatus:()=>{const a=j.getCurrent();if(a.compileType==r.plugin){const a=q.config.UPLOAD_PLUG_IN_CONTINUE;return{type:f.INFO_SET_UPLOAD,data:{status:1,wording:a}}}if(a&&a.pluginInfo&&a.pluginInfo.length)try{for(const b of a.pluginInfo)if(b.current&&b.onlineVersion&&b.onlineVersion!==b.current.version&&0>w.compareSemVer(b.current.version,b.onlineVersion))return{type:f.INFO_SET_UPLOAD,data:{status:1,wording:q.config.PLUG_IN_VERSION_LOWER.format([b.name,b.current.version,b.onlineVersion])}}}catch(a){i.error(`project.actions.js check plugin info during checkUploadStatus failed with error: ${a.toString()}`)}return(b)=>{h({url:`${g.uploadQrCodeURL}?appid=${a.appid}`,method:'get',needToken:1}).then(({resp:a,body:c})=>{const d=1===c.is_experience?q.config.OVERWRITE_TRIAL_VERSION:q.config.SET_UPLOAD_TRIAL_VERSION;b({type:f.INFO_SET_UPLOAD,data:{status:1,wording:d}})}).catch((a)=>{b({type:f.INFO_SET_UPLOAD,data:{show:!1}}),b({type:f.INFO_SHOW_ERROR,data:{message:a.toString()}})})}},setProjectCompileType:(a)=>(b)=>{b({type:f.PROJECT_SET_COMPILE_TYPE,data:a});const c=j.getCurrent(),d=s.getConfigFileInfo(c);if(d.error)b(E(d.error.type,c,{compileType:a}));else{const b=_extends({},d.config,{compileType:a});s.writeObjectToConfigFile(c,b)}b(F())},setProjectQCloud:(a)=>({type:f.PROJECT_SET_QCLOUD,data:a}),setPkgSize:(a)=>(b)=>{b({type:f.PROJECT_SET_PKG_SIZE,data:a}),b(F())},setPluginInfo:(a)=>(b)=>{b({type:f.PROJECT_SET_PLUGIN_INFO,data:a}),b(F())},setProjectConfig:(a)=>(b)=>{const c=j.getCurrent();a.setting=a.setting||{},a.scripts=H({},a.scripts,'object'),a.condiction=a.condiction||{},a.condiction.weapp=a.condiction.weapp||{},a.condiction.weapp.list=H([...c.condiction.weapp.list],a.condiction.weapp.list,'array'),a.condiction.search=a.condiction.search||{},a.condiction.search.list=H([...c.condiction.search.list],a.condiction.search.list,'array'),a.condiction.conversation=a.condiction.conversation||{},a.condiction.conversation.list=H([...c.condiction.conversation.list],a.condiction.conversation.list,'array'),a.condiction.plugin=a.condiction.plugin||{},a.condiction.plugin.list=H([...c.condiction.plugin.list],a.condiction.plugin.list,'array'),a.condiction.game=a.condiction.game||{},a.condiction.game.list=H([...c.condiction.game.list],a.condiction.game.list,'array'),a.packOptions=a.packOptions||{},a.packOptions.ignore=H([],a.packOptions.ignore,'array'),a.debugOptions=a.debugOptions||{},a.debugOptions.hidedInDevtools=H([],a.debugOptions.hidedInDevtools,'array');const d=[],e=['folder','file','suffix','prefix','glob','regexp'];for(const c of a.packOptions.ignore)c&&'string'===G(c.value)&&0<=e.findIndex((a)=>a===c.type)&&d.push({value:c.value,type:c.type});const g=[],h=['folder','file','suffix','prefix','glob','regexp'];for(const c of a.debugOptions.hidedInDevtools)c&&'string'===G(c.value)&&0<=h.findIndex((a)=>a===c.type)&&g.push({value:c.value,type:c.type});const i=[];for(const c of a.condiction.weapp.list)c&&'number'===G(c.id)&&'string'===G(c.name)&&'string'===G(c.pathName)&&i.push({id:c.id,name:c.name,pathName:c.pathName,query:H('',c.query,'string'),scene:c.scene,shareInfo:H(void 0,c.shareInfo,'object'),referrerInfo:H(void 0,c.referrerInfo,'object')});const l=[];for(const c of a.condiction.plugin.list)c&&'number'===G(c.id)&&'string'===G(c.name)&&'string'===G(c.pathName)&&l.push({id:c.id,name:c.name,pathName:c.pathName,query:H('',c.query,'string'),scene:c.scene,shareInfo:H(void 0,c.shareInfo,'object'),referrerInfo:H(void 0,c.referrerInfo,'object')});const m=[];for(const c of a.condiction.search.list)c&&'number'===G(c.id)&&'string'===G(c.name)&&m.push({id:c.id,name:c.name,widgetData:H('',c.widgetData,'string'),service:H(void 0,c.service,'object'),query:H('',c.query,'string'),customQuery:H('',c.customQuery,'string'),boxQI:H('',c.boxQI,'string'),debugUrl:H('',c.debugUrl,'string')});const n=[];for(const c of a.condiction.conversation.list)c&&'number'===G(c.id)&&'string'===G(c.name)&&n.push({id:c.id,name:c.name,pathName:H(void 0,c.pathName,'string'),title:H(void 0,c.title,'string'),cachekey:H(void 0,c.cachekey,'string')});const p=[];for(const c of a.condiction.game.list)c&&'number'===G(c.id)&&'string'===G(c.name)&&p.push({id:c.id,name:c.name,query:H('',c.query,'string'),scene:c.scene,shareInfo:H(void 0,c.shareInfo,'object'),referrerInfo:H(void 0,c.referrerInfo,'object')});const o=k.getVendorConfig(),q=c.attr&&c.attr.gameApp?['game','search']:['weapp','search','conversation','plugin'],r={setting:{urlCheck:H(c.setting.urlCheck,a.setting.urlCheck,'boolean'),es6:H(c.setting.es6,a.setting.es6,'boolean'),postcss:H(c.setting.postcss,a.setting.postcss,'boolean'),minified:H(c.setting.minified,a.setting.minified,'boolean'),newFeature:H(c.setting.newFeature,a.setting.newFeature,'boolean'),nodeModules:H(c.setting.nodeModules,a.setting.nodeModules,'boolean'),uglifyFileName:H(c.setting.uglifyFileName,a.setting.uglifyFileName,'boolean'),scriptsEnable:c.setting.scriptsEnable},scripts:{beforeCompile:H(c.scripts.beforeCompile,a.scripts.beforeCompile,'string'),beforePreview:H(c.scripts.beforePreview,a.scripts.beforePreview,'string'),beforeUpload:H(c.scripts.beforeUpload,a.scripts.beforeUpload,'string')},compileType:H(c.compileType,a.compileType,'string',['game','weapp','search','conversation','plugin']),condiction:{weapp:{current:c.condiction.weapp.current,list:[...i]},search:{current:c.condiction.search.current,list:[...m]},conversation:{current:c.condiction.conversation.current,list:[...n]},plugin:{current:c.condiction.plugin.current,list:[...l]},game:{current:c.condiction.game.current,list:[...p]}},libVersion:H(c.libVersion,a.libVersion,'string',Object.keys(o.libs)),svr:H(c.svr,a.svr||'','string'),client:H(c.client,a.client||'','string'),qcloudRoot:H(c.qcloudRoot,a.qcloudRoot||'','string'),miniprogramRoot:H(c.miniprogramRoot,a.miniprogramRoot||'','string'),cloudfunctionRoot:H(c.cloudfunctionRoot,a.cloudfunctionRoot||'','string'),jsserverRoot:H(c.jsserverRoot,a.jsserverRoot||'','string'),pluginRoot:H(c.pluginRoot,a.pluginRoot||'','string'),packOptions:{ignore:d},debugOptions:{hidedInDevtools:g}};!r.qcloudRoot&&r.svr&&(r.qcloudRoot=r.svr),!r.miniprogramRoot&&r.client&&(r.miniprogramRoot=r.client),r.libVersion!==c.libVersion&&k.setVersionAsync(r.libVersion),0>q.indexOf(r.compileType)&&(r.compileType=c.attr&&c.attr.gameApp?'game':'weapp'),b({type:f.PROJECT_SET_PROJECT_CONFIG,data:JSON.parse(JSON.stringify(r))}),b(F())},setProjectExtInfo:(a)=>({type:f.PROJECT_SET_EXT_INFO,data:a}),saveUploadInfo:(a)=>(b)=>{b({type:f.PROJECT_SET_UPLOAD_INFO,data:a}),b(F())},saveShareInfo:(a)=>(b,c)=>{try{const d=c(),e=d.project.current;if(!e)return;let g=e.shareInfo||{};const h=g.history||[];h.unshift(a),g=_extends({},g,{history:h}),b({type:f.PROJECT_SET_SHARE_INFO,data:g}),b(F())}catch(a){}},updateProjectCover:(a)=>(b,c)=>{let d=a.project;if(!d){const b=c();if(d=b.project.current,!d)return;n.setProjectCover(d.projectid,a.image)}else n.setProjectCover(d.projectid,a.image)},openTempProject:(a)=>()=>{let{appid:b,projectname:c,projectpath:d}=a;c=encodeURIComponent(c),d=encodeURIComponent(d),x.openTempOnlineMiniProgram({appid:b,projectname:c,projectpath:d})},syncProject:(a,b)=>({type:f.PROJECT_SYNC_STORE,data:a,syncTime:b}),setProjectScripts:(a)=>(b)=>{const c=j.getCurrent();b({type:f.PROJECT_SET_SCRIPTS,data:a});const d=s.getConfigFileInfo(c);if(d.error)b(E(d.error.type,c,{scripts:_extends({},c.scripts,a)}));else{const b=_extends({},d.config,{scripts:_extends({},c.scripts,d.config.scripts||{},a)});s.writeObjectToConfigFile(c,b)}b(F())},setTimeRecords:(a)=>(b)=>{b({type:f.PROJECT_SET_TIME_RECORDS,data:a})},changeProjectAppId:(a)=>(b)=>new Promise(async(c,d)=>{const e=j.getCurrent(),g=e.appid,h=e.projectid,i=h.replace(g,a),k=_extends({},e,{appid:a,projectid:i});k&&k.isTourist&&d();try{const d=await j.getLatestProjectAttr(k,!1);n.updateProjectId(h,i),b({type:f.PROJECT_CHANGE_APPID,data:{appid:a,projectid:i,appName:d.appName,appImageUrl:d.appImageUrl}}),b({type:f.PROJECT_UPDATE_ATTR,data:d}),b({type:f.SIMULATOR_SET_GROUP_INFO,data:{list:d.share_info}});const e=s.getConfigFileInfo(k);if(e.error)b(E(e.error.type,k,{appid:k.appid}));else{const a=_extends({},e.config,{appid:k.appid});s.writeObjectToConfigFile(k,a)}b(F(k)),c()}catch(a){d(a)}}),setTcbFnRoot:(a)=>(b)=>{const c=j.getCurrent();b({type:f.PROJECT_SET_TCBFN_ROOT,data:a});const d=s.getConfigFileInfo(c);if(d.error)b(E(d.error.type,c,{cloudfunctionRoot:a}));else{const b=_extends({},d.config,{cloudfunctionRoot:a});s.writeObjectToConfigFile(c,b)}b(F())}}}(require('lazyload'),require);