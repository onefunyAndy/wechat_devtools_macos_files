'use strict';!function(require,directRequire){async function a(){const a=D().project.current;return a&&a.attr&&a.attr.gameApp?void nw.Shell.openExternal('https://mp.weixin.qq.com/debug/wxagame/dev/index.html'):void nw.Shell.openExternal('https://mp.weixin.qq.com/debug/wxadoc/dev/index.html')}function b(a){const b=global.contentWindow.document.activeElement;if('WEBVIEW'===b.tagName)'persist:editor'===b.getAttribute('partition')?c.sendMessage(E,F(a)):b.executeScript({code:`document.execCommand('${a}')`});else{let b;const c=D().window.mainWindow;if(c===e.MAIN_WINDOW_TYPE.WEB_DEBUGGER){const a=global.windowMap.get('WEB_DEBUGGER');b=a&&a.window.document}else if(c===e.MAIN_WINDOW_TYPE.DEV){const a=global.windowMap.get('MAIN');b=a&&a.window.document}else b=global.contentWindow.document;b&&b.execCommand(a)}}const c=require('./ff946754202ecf377034d29daac7c8d9.js'),d=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),e=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),f=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),g=require('./37d8b9297fb1bd87f9a3ac407b8006a0.js'),h=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),i=require('./9c906d27ca74e18d0deaaa231e71fdfa.js'),j=require('./6ff091369f442a4678a2ed4a1f758495.js'),k=require('./a8c87029da0fa06e986298d447ab0fe2.js'),l=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),m=require('./fc137838572a83604db39acff8e909e0.js'),n=require('./e98c60a262d8d98e69e574a9d12a21df.js'),o=require('./c4b43629b4de3d73a79d27fb0314f46a.js'),p=require('./ba23d8b47b1f4ea08b9fd49939b9443f.js'),q=require('./db2217eb4cff896bdcbc50abe005058f.js'),r=require('./f171257bbcaef547a3cf27266ccb0db2.js'),s=require('./common/locales/index.js'),t=require('./15ba1827c7f6564a45df6bd44da3a977.js'),u=require('./e5184416014aff2809a9dee32cc447c8.js'),v=require('./dc59f57d54946e61d27c95ab24d8cb4f.js'),w=require('./eadce02c750c875a10680bcfedadec88.js'),x=require('./c4190a2430506f3602ca550e1e75d620.js'),y=require('./84b183688a46c9e2626d3e6f83365e13.js'),z=require('./9ebfd1a4a241684455002e8c6d889fd7.js'),A=require('./bc2b895ee57942c71d19191b1e204b79.js'),B=require('path'),C=d.dispatch.bind(d),D=d.getState.bind(d),E='EDITOR',F=(a)=>JSON.stringify({type:'COMMAND',command:a});module.exports={buildNpm:async function(){C(h.setConfirmInfo({show:!0,showConfirm:!1,showCancel:!1,content:s.config.BUILDING}));const a=D(),b=a.project.current,c=Date.now();let d,f=!1;try{const a=B.join(b.projectpath,b.miniprogramRoot||'');d=await A(a)}catch(a){console.error(a),f=!0,C(h.setConfirmInfo({show:!0,showConfirm:!0,showCancel:!1,content:s.config.ERROR_OCCURRED+'\n'+(a&&a.toString()||a)+(a.stack||'')}))}f||(d?C(h.setConfirmInfo({show:!0,showConfirm:!0,confirmText:s.config.CONFIRM,content:[s.config.BUILD_TIMEOUT.format(Date.now()-c)+'\n',...(d||[]).map((a,b)=>{const c='number'==typeof a.startLine?`${a.jsPath}:${a.startLine}-${a.endLine}`:a.jsPath;return`${b+1}. ${c}: ${a.msg}`})].join('\n')})):C(h.setConfirmInfo({show:!0,showConfirm:!0,showCancel:!0,content:s.config.NOT_FOUND_NODE_MODULES,confirmText:s.config.READ_DOCUMENTATION,callback:async(a)=>{a&&nw.Shell.openExternal('https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html')}})))},about:function(){nw.Shell.openExternal('https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html')},checkUpdate:async function(){await v.refresh();u.resetAlreadyNotify();const a=await u.checkNeedUpdate();a?C(h.showError(s.config.APP_NEED_UPDATE.format(a))):C(h.showConfirmPopup({id:s.config.APP_NEED_NOT_UPDATE.format(global.appVersion),title:s.config.APP_NEED_NOT_UPDATE.format(global.appVersion),showCancel:!1,enableSelected:!0}))},helpAndFeedback:function(){a()},switchAccount:function(){C(i.loginExpired())},inspectApp:function(){global.isDevWindow?global.Win.showDevTools():chrome.developerPrivate.openDevTools({renderViewId:-1,renderProcessId:-1,extensionId:chrome.runtime.id})},inspectEditor:function(){for(const[a,b]of global.windowMap){const a=b.window.document.querySelector('webview[partition="persist:editor"]');a&&a.showDevTools(!0)}},inspectGitManager:function(){for(const[a,b]of global.windowMap){const a=b.window.document.querySelector('webview[data-plugin-id="gitmanager"]');if(a){a.showDevTools(!0);break}}},Doc:a,BBS:async function(a,b=e.IDE_SCENE.MENU_BAR){try{const{resp:c,body:d}=await t({url:`${r.getBbsTicket}?idescene=${b}`,needToken:1}),e=d.open_ticket;e&&(a?-1<a.indexOf('?')?nw.Shell.openExternal(`${a}&devcode=${e}&idescene=${b}`):nw.Shell.openExternal(`${a}?devcode=${e}&idescene=${b}`):nw.Shell.openExternal(`https://developers.weixin.qq.com?devcode=${e}&idescene=${b}`))}catch(a){nw.Shell.openExternal('https://developers.weixin.qq.com')}},exit:function(){y.quit()},newFile:function(){c.sendMessage(E,F('newFile'))},save:function(){c.sendMessage(E,F('save'))},saveAll:function(){c.sendMessage(E,F('saveAll'))},closeFile:function(){c.sendMessage(E,F('closeFile'))},newProject:function(){const a=D();if(a.window.mainWindow===e.MAIN_WINDOW_TYPE.DEV){const b=q.get(e.WINDOW_REGISTRY.CREATE_PROJECT);b?b.focus():a.window.popup.createProject&&a.window.popup.createProject.show?(C(l.createProjectClose()),C(l.createProjectOpen())):C(l.createProjectOpen())}else if(a.window.mainWindow===e.MAIN_WINDOW_TYPE.SELECT_PROJECT)C(l.createProjectRequest());else;},viewProjects:function(){const a=D();if(a.window.mainWindow===e.MAIN_WINDOW_TYPE.DEV){const b=q.get(e.WINDOW_REGISTRY.SELECT_PROJECT);b?b.focus():a.window.popup.selectProject&&a.window.popup.selectProject.show?(C(l.selectProjectClose()),C(l.selectProjectOpen())):C(l.selectProjectOpen())}else if(a.window.mainWindow===e.MAIN_WINDOW_TYPE.ENTRANCE)C(l.selectProjectRequest());else;},newMiniCode:function(){global.isDevWindow?C(l.createMiniCodeOpen('create')):C(l.createMiniCodeRequest('create'))},importMiniCode:function(){global.isDevWindow?C(l.createMiniCodeOpen('import')):C(l.createMiniCodeRequest('import'))},openProject:function(a){const b=D().project.current;if(b&&b.projectid===a)return;let c=a.split('_')[1];c=c&&decodeURIComponent(c)||'',z.openProject(a)},closeProject:function(){C(l.closeProject())},openAppearanceSettings:function(){C(n.openIDESettings('appearance'))},openShortcutSettings:function(){C(n.openIDESettings('shortcut'))},openEditSettings:function(){C(n.openIDESettings('edit'))},openProxySettings:function(){C(n.openIDESettings('proxy'))},openNotificationSettings:function(){C(n.openIDESettings('notification'))},openProjectSettings:function(){C(m.toggleClickKey(w.PROJECTINFO)),C(h.setProjectInfo({selected:'setting'}))},gotoFile:function(){c.sendMessage(E,F('gotoFile'))},gotoRecentFile:function(){c.sendMessage(E,F('gotoRencentFile'))},gotoPreviousEditor:function(){c.sendMessage(E,F('gotoPreviousEditor'))},gotoNextEditor:function(){c.sendMessage(E,F('gotoNextEditor'))},rebuild:function(){C(p.compile({origin:e.COMPILE_ORIGIN.SHORT_CUT}))},customRebuild:function(a){C(l.selectCompileCondiction(a)),C(p.compile({origin:e.COMPILE_ORIGIN.SHORT_CUT}))},openBuildSettings:function(){},toggleForegroundBackgroundStatus:function(){C(p.toggleBackground())},clearFileCache:function(){C(m.cleanFileCache())},clearAuthCache:function(){C(m.clearAuth())},clearStorageCache:function(){C(m.cleanStorageCache())},preview:function(){const a=D();let b=!1;try{b=a.settings.compiler.autoPreview}catch(a){}b?C(m.autoPreview()):C(m.togglePreviewCode())},upload:function(){C(m.toggleClickKey(w.NONE)),C(h.setUploadInfo({show:!0}))},customAnalysis:function(){C(j.openCustomAnalysis())},autoTest:function(){C(j.openMobileTest())},openProjectDetailInformation:function(){C(m.toggleClickKey(w.PROJECTINFO))},toggleFileTree:function(){c.sendMessage(E,F('toggleFileTree'))},focusDebugWindow:function(){},toggleSimulatorWindow:function(){C(k.toggleSimulatorWindow())},toggleSimulatorPopup:function(){C(k.toggleSimulatorPopup()),C(p.compile())},moveSimulatorLeft:function(){C(k.setSimulator({position:'left'}))},moveSimulatorRight:function(){C(k.setSimulator({position:'right'}))},toggleEditorWindow:function(){C(k.toggleEditorWindow())},undo:function(){b('undo')},redo:function(){b('redo')},copy:function(){b('copy')},cut:function(){b('cut')},paste:function(){b('paste')},unindent:function(){c.sendMessage(E,F('unindent'))},indent:function(){c.sendMessage(E,F('indent'))},format:function(){c.sendMessage(E,F('format'))},moveLineUp:function(){c.sendMessage(E,F('moveLinesUp'))},moveLineDown:function(){c.sendMessage(E,F('moveLinesDown'))},copyLineUp:function(){c.sendMessage(E,F('copyLinesUp'))},copyLineDown:function(){c.sendMessage(E,F('copyLinesDown'))},find:function(){c.sendMessage(E,F('find'))},findInFiles:function(){c.sendMessage(E,F('findInFiles'))},replace:function(){c.sendMessage(E,F('replace'))},collapseAll:function(){c.sendMessage(E,F('collapseAll'))},toggleDebugWindow:function(){C(k.toggleDebugWindow())},createCustomCompile:function(a){C(k.setCustomCompile({show:a,id:-1}))},switchToMiniProgramDev:function(){D().window.mainWindow===e.MAIN_WINDOW_TYPE.WEB_DEBUGGER&&z.switchToMiniProgramDev()&&nw.Window.get().close()},switchToWebDev:function(){D().window.mainWindow===e.MAIN_WINDOW_TYPE.DEV&&z.switchToWebDev()&&C(l.closeProject())},back:function(){C(x.setActions('back'))},forward:function(){C(x.setActions('forward'))},focusAddress:function(){C(x.setActions('focusAddress'))},refresh:function(){C(x.setActions('reload'))},selectAll:function(){b('selectAll')},jumpQCloudPage:async function(a){try{const{body:b}=await t({url:r.gettmpcode,needToken:1,needAppID:1});a=0<a.indexOf('?')?`${a}&tmpcode=${b.tmp_code}`:`${a}?tmpcode=${b.tmp_code}`,nw.Shell.openExternal(a)}catch(a){C(h.showError(a.toString()))}},toggleToolbar:function(){C(k.toggleToolbar())},toggleMiniMode:function(){global.onlySimulator=!global.onlySimulator},clearWebviewCache:function(){C(m.cleanWebViewCache())},clearSession:function(){C(m.clearSession())},clearAllCache:function(){C(m.cleanAll())},toggleCos:function(){C(o.openCosManager())},toolsManager:function(){C(m.toggleClickKey(w.TOOLBARCONFIGLIST))},jumpTGit:function(){C(m.jumpTGit())},showMultiAccountBox:function(){C(k.setMultiAccountBox({show:!0}))},openPlugin:function(a){C(k.setPluginPopUpWindow({pluginId:a,show:!0}))},changeLocale:function(a){C(n.updateIDESetting('appearance','locale',a))}}}(require('lazyload'),require);