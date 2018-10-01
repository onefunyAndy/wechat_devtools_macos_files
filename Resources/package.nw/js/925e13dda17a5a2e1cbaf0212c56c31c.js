'use strict';!function(require,directRequire){const a=require('fs'),b=require('path'),c=require('react'),d=require('react-dom'),e=require('classnames'),f=require('redux'),g=require('./8a6bfff9d7b1c7d81421b0982e3dda9e.js'),h=require('child_process').exec,i=require('./a8c87029da0fa06e986298d447ab0fe2.js'),j=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),k=require('./25d0beb4120ce2acafb4e03b95444fda.js'),l=require('./ba23d8b47b1f4ea08b9fd49939b9443f.js'),m=require('./6ff091369f442a4678a2ed4a1f758495.js'),n=require('./c4b43629b4de3d73a79d27fb0314f46a.js'),o=require('./274c496e897a23f75f9287cb59f86a50.js'),p=require('./fc137838572a83604db39acff8e909e0.js'),q=require('./356b2757917fbfdeb38c7afc0271eed9.js'),r=require('./eadce02c750c875a10680bcfedadec88.js'),s=require('./629ccf62fc18c4d6caab59c1e6619a09.js'),t=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),u=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),v=require('./3c55dff3626a3ee184d599f076158345.js'),w=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),x=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),y=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),z=require('./common/locales/index.js'),A=require('./a1dd553cc059d528bb0ef56afed53968.js'),B=require('./e50ed2397425c95bd75b01a4829d289f.js'),C=require('./3bfffbe88b3d923921f851c0697974fe.js'),D=require('./72410b6d4968336cd8b2fc1d41f52cdf.js'),E=require('./da7c31daaf542cf1796023d8e344b98a.js'),{enterBackground:F,enterForeground:G}=require('./a3959bb900db9f65ed2e9c5dfa6977b7.js'),H=require('./db2217eb4cff896bdcbc50abe005058f.js'),I=require('./1dea83a77e99a7c94f6b6f01f5c175b0.js'),J=require('./f0466135fc8b3a662084784e5f4ac792.js'),K=require('./ac78c5d79e26c1024c1fbe65d4c8047e.js'),L=require('./2f0aa63ae61d48294b5e9927ab57e1a4.js'),M=require('./e4d68def70709dc877cb2ba5bdad18cb.js'),N=require('./3e74bc0c6a5fa450386148788cc0cf44.js'),O=require('./052960b25101aefc4f8999b429c19b44.js'),P=require('./442712c301c36d91644f14b62979263d.js'),{showContextMenu:Q}=require('./63b51d67a9665bc74cc0a77e00c26197.js'),{connect:R}=require('react-redux'),S=53,T=-120;class U extends c.Component{constructor(a){super(a),this.state={compileTypeDropDownLeft:0,compileTypeDropDownTop:0,moreDropDownLeft:0,moreDropDownTop:0,moreDropDownList:[],QRCodeLeft:0,QRCodeTop:0,QCloudLeft:0,QCloudTop:0,CleanCacheLeft:0,CleanCacheTop:0,CleanCacheRight:0,marginTop:0,timeStamp:0,autoUploadStatus:null,configListLeft:270,configListTop:20,hasHidedToolbarItem:!1}}componentDidMount(){!global.onlySimulator&&this.props.show?this.setState({marginTop:'0px'}):this.setState({marginTop:`${-d.findDOMNode(this).getBoundingClientRect().height}px`}),this._cancalLocaleListener=z.onChangeLocale(()=>this.forceUpdate()),this.setupResizeHelper()}componentWillUnmount(){this._cancalLocaleListener(),this.cancelResizeHelper()}componentWillReceiveProps(a){if(a.previewQRShow!=this.props.previewQRShow&&a.previewQRShow){const a=this.qrbutton.getBoundingClientRect();this.setState({QRCodeLeft:a.left+T,QRCodeTop:a.top+S})}if(a.remoteDebugCodeShow!==this.props.remoteDebugCodeShow&&a.remoteDebugCodeShow){const a=this.remoteDebugButton.getBoundingClientRect();this.setState({remoteDebugCodeLeft:a.left+T,remoteDebugCodeTop:a.top+S})}a.show!=this.props.show&&(!global.onlySimulator&&a.show?this.setState({marginTop:'0px'}):this.setState({marginTop:`${-d.findDOMNode(this).getBoundingClientRect().height}px`})),a.compilerSettings.autoPreview&&a.autoPreviewTimestamp!==this.props.autoPreviewTimestamp?(clearTimeout(this._autoUploadTimer),this._autoUploadTimer=setTimeout(()=>this.autoUpload(),400)):!a.compilerSettings.autoPreview&&clearTimeout(this._autoUploadTimer)}async autoUpload(){if(clearTimeout(this._autoUploadTimer),this._autoUploading)return void console.warn('already auto uploading');this._autoUploading=!0;const a=this.props,b=a.project;if(b&&b.setting&&b.setting.scriptsEnable&&b.scripts&&b.scripts.beforePreview){a.consoleActions.clear(),a.consoleActions.log(z.config.CONSOLE_PREPROCESS_START);try{await M.run({command:b.scripts.beforePreview,options:{cwd:b.projectpath,shell:!0},stderr:a.consoleActions.error,stdout:a.consoleActions.log})}catch(b){return void a.consoleActions.error(z.config.CONSOLE_PREPROCESS_ERROR)}}const c={test:!0,autoPreview:a.compilerSettings.autoPreview};let d;try{const a=this.props.project,b=a.compileType,e=a.condiction[b];d=e.list[e.current],b==x.search?d&&(c.searchQuery=d.customQuery||d.query,c.boxQI=d.customQuery?'':d.boxQI):(b==x.weapp||b==x.plugin)&&(c.page=d?d.pathName:this.props.appConfig.pages[0],c.query=d?d.query:'')}catch(a){}this.setState({autoUploadFailureText:null,autoUploadStatus:'uploading'}),J(c).then(()=>{this.setState({autoUploadStatus:'success'}),clearTimeout(this._autoUploadStatusTextTimer),this._autoUploadStatusTextTimer=setTimeout(()=>{const a=this.state.autoUploadStatus;'success'===a&&this.setState({autoUploadStatus:''})},3e3),this._autoUploading=!1}).catch((a)=>{console.error(a),this.setState({autoUploadStatus:'fail',autoUploadFailureText:a&&a.toString&&a.toString()||a}),this._autoUploading=!1})}onSetAppservice(){this.props.toolbarConfigShow||(this.props.debugPopup?(this.props.windowActions.toggleDebugWindow(),this.props.compile()):this.props.windowActions.toggleDebugWindow())}onSetEditor(){this.props.toolbarConfigShow||this.props.windowActions.toggleEditorWindow()}onSetSimulator(){this.props.toolbarConfigShow||(this.props.simulatorPopup?(this.props.windowActions.toggleSimulatorWindow(),this.props.compile()):this.props.windowActions.toggleSimulatorWindow())}onLaunchSimulator(){this.props.toolbarConfigShow||this.props.compile({origin:y.COMPILE_ORIGIN.BUTTON})}toggleCompileCondiction(a){if(!this.props.toolbarConfigShow){a.stopPropagation(),this.props.toolbarActions.toggleClickKey(r.COMPILECONDICTION);const b=a.currentTarget.getBoundingClientRect();this.setState({condictionDropDownLeft:b.left,condictionDropDownTop:b.top+20})}}toggleCleanCache(a){if(!this.props.toolbarConfigShow){a.stopPropagation();const b=a.currentTarget.getBoundingClientRect();a.currentTarget.parentElement&&a.currentTarget.parentElement.classList.contains('__auto-hided')?this.setState({CleanCacheTop:b.top+b.height,CleanCacheLeft:void 0,CleanCacheRight:0}):this.setState({CleanCacheTop:b.top+22,CleanCacheLeft:b.left,CleanCacheRight:void 0}),this.props.toolbarActions.toggleClickKey(r.CLEANCACHE)}}togglePreviewCode(a){if(a.stopPropagation(),!(this.props.actionBtnDisabled||this.props.toolbarConfigShow)){const b=a.currentTarget.getBoundingClientRect();this.props.toolbarActions.togglePreviewCode({left:b.left,top:b.top}),this.props.compilerSettings.autoPreview?this.setState({timeStamp:1*new Date}):this.setState({timeStamp:1*new Date,autoUploadStatus:null,autoUploadFailureText:null}),E('weapp_toolbar_preview',this.props.project.appid)}}toggleProjectInfo(a){this.props.toolbarConfigShow||(a.stopPropagation(),this.props.toolbarActions.toggleClickKey(r.PROJECTINFO),E('weapp_toolbar_details',this.props.project.appid))}toggleCompileType(a){if(!this.props.toolbarConfigShow){a.stopPropagation(),this.props.toolbarActions.toggleClickKey(r.COMPILETYPE);const b=a.currentTarget.getBoundingClientRect();this.setState({compileTypeDropDownLeft:b.left,compileTypeDropDownTop:b.top+b.height})}}onUploadClick(){this.props.actionBtnDisabled||this.props.project.isGameTourist||this.props.toolbarConfigShow||(this.props.infoActions.setUploadInfo({show:!0}),E('weapp_toolbar_upload',this.props.project.appid))}onBBSClick(){this.props.actionBtnDisabled||this.props.toolbarConfigShow||k.BBS(null,y.IDE_SCENE.TOOL_BAR)}onTestClick(){this.props.actionBtnDisabled||this.props.toolbarConfigShow||(this.props.debugActions.openMobileTest(),E('weapp_test_save',this.props.project.appid))}onShareClick(){this.props.infoActions.setShareInfo({show:!0})}onSandboxLinkClick(){try{nw.Shell.openExternal('https://developers.weixin.qq.com/miniprogram/dev/devtools/sandbox.html')}catch(a){console.error(a)}}onSetBackground(){if(!this.props.toolbarConfigShow){if(this.props.compileType==x.weapp||this.props.compileType===x.game)if(this.props.backgroundShow){const a=this.props.webviewInfo.pathName,b=this.props.webviewInfo.query,c=this.props.condiction;G('toolbarAndBackMode',{path:a,query:b,scene:c.scene,shareInfo:c.shareInfo,referrerInfo:c.referrerInfo})}else F('toolbarAndBackMode');this.props.setBackground({show:!this.props.backgroundShow})}}onCompileTypeSelect(a){const b=this.props.compileTypeConst[a];b&&this.props.setProjectCompileType(b.value),this.props.toolbarActions.toggleClickKey(r.COMPILETYPE)}onMoreClick(a){if(this.props.toolbarConfigShow)return;const b=this.props.project.attr||{},c=a.currentTarget.getBoundingClientRect(),d=global.windowMap.get('MAIN').width,e=b.qcloud&&b.qcloud.qcloud_status&&1===b.qcloud.qcloud_status.open_qc_account;let f=[];1090>d&&(f=[{name:z.config.TOOLBAR_UPLOAD,type:'upload',show:this.props.project&&!this.props.project.isMiniCode},{name:z.config.SHARE,type:'share',show:this.props.project&&this.props.project.isMiniCode},{name:z.config.TOOLBAR_BBS,type:'bbs',show:!0},{name:z.config.TOOLBAR_TEST,type:'test',show:this.props.project&&!this.props.project.isMiniCode},{name:z.config.TOOLBAR_MATERIAL_MANAGEMENT,type:'cos',show:this.props.project&&!this.props.project.isMiniCode},{name:z.config.TOOLBAR_TENCENT_CLOUD,type:'qcloud',show:this.props.project&&!this.props.project.isMiniCode&&e},{name:z.config.TOOLBAR_DETAILS,type:'project',show:!0}],f=f.filter((a)=>a.show),930>d&&(f=f.concat([{name:this.props.backgroundShow?z.config.TOOLBAR_SWITCH_TO_FOREGROUND:z.config.TOOLBAR_SWITCH_TO_BACKGROUND,type:'background',show:!0},{name:z.config.TOOLBAR_CLEAR_CACHE,type:'cleancache',show:!0}]))),this.setState({moreDropDownTop:c.top+22,moreDropDownList:f}),this.props.toolbarActions.toggleClickKey(r.MORETOOL)}onMoreSelect(a,b){this.props.toolbarActions.toggleClickKey(r.NONE);const c=this.state.moreDropDownList[a];if(c)switch(c.type){case'upload':{this.onUploadClick();break}case'share':{this.onShareClick();break}case'bbs':{this.onBBSClick();break}case'test':{this.onTestClick();break}case'qcloud':{const a=this;this.toggleQCloud({stopPropagation:()=>{},currentTarget:{getBoundingClientRect(){return{right:0,top:a.state.moreDropDownTop-20}}}});break}case'project':{this.toggleProjectInfo(b);break}case'background':{this.onSetBackground();break}case'cleancache':{this.setState({CleanCacheTop:this.state.moreDropDownTop,CleanCacheLeft:void 0,CleanCacheRight:0}),this.props.toolbarActions.toggleClickKey(r.CLEANCACHE);break}case'tgit':{this.toggleTgit();break}case'cos':{this.toggleCos();break}}}showErr(a,b=z.config.TOOLBAR_ERROR_TITLE,c=()=>{}){this.props.infoActions.setConfirmInfo({show:!0,showCancel:!1,title:b,content:a,callback:async()=>{c()}})}async toggleCos(){if(!(this.props.actionBtnDisabled||this.props.project.isGameTourist||this.props.toolbarConfigShow)){const a=await this.checkIsQcloudProject('https://developers.weixin.qq.com/miniprogram/dev/qcloud/material.html');a&&this.props.openCosManager()}}toggleTgit(){this.props.actionBtnDisabled||this.props.project.isGameTourist||this.props.toolbarConfigShow||this.props.toolbarActions.jumpTGit()}onGitManagerClick(){this.props.toolbarConfigShow||(this.props.git.panelShow?this.props.gitActions.panelCloseTs(Date.now()):this.props.gitActions.togglePanelShow(!0))}async checkIsQcloudProject(a){let b=this.props.project,c=C.isQcloudProject(b);if(!c){try{await this.props.requestProjectAttr()}catch(a){}b=this.props.project,c=C.isQcloudProject(b)}return c||this.props.infoActions.setConfirmInfo({show:!0,showCancel:!0,title:z.config.TOOLBAR_QCLOUD_CONFIRM_TITLE,content:z.config.TOOLBAR_QCLOUD_CONFIRM_CONTENT.format(b.appid),confirmText:z.config.CONFIRM,callback:async(b)=>{b&&nw.Shell.openExternal(a||'https://cloud.tencent.com/document/product/619/11447')}}),c}async toggleCloud(a){return a.stopPropagation(),E('weapp_toolbar_cloud',this.props.project.appid),void this.props.windowActions.setCloud({console:{show:!0}})}async toggleQCloud(a){if(a.stopPropagation(),this.props.actionBtnDisabled||this.props.project.isGameTourist||this.props.toolbarConfigShow)return;const b=a.currentTarget.getBoundingClientRect(),c=a.currentTarget.parentElement;if(this.props.actionBtnDisabled)return;const d=this.props.project,e=await this.checkIsQcloudProject();if(!e)return;if(this.props.qcloud&&this.props.qcloud.currentOperation){const a={[D.CLOUD_ACTION_UPLOAD]:z.config.TOOLBAR_QCLOUD_UPLOAD,[D.CLOUD_ACTION_DEBUG]:z.config.TOOLBAR_QCLOUD_DEBUG,[D.CLOUD_ACTION_DEPLOY_DEV]:z.config.TOOLBAR_QCLOUD_DEPLOY_DEV,[D.CLOUD_ACTION_DEPLOY_PRODUCT]:z.config.TOOLBAR_QCLOUD_DEPLOY_PRODUCT,[D.CLOUD_ACTION_INSTALL_DEPENDENCE]:z.config.TOOLBAR_QCLOUD_INSTALL_DEPENDENCE,[D.CLOUD_ACTION_RESET_SERVICE]:z.config.TOOLBAR_QCLOUD_RESET_SERVICE,[D.CLOUD_ACTION_RESTART_SERVICE]:z.config.TOOLBAR_QCLOUD_RESTART_SERVICE,[D.CLOUD_ACTION_STOP_SERVICE]:z.config.TOOLBAR_QCLOUD_STOP_SERVICE,[D.CLOUD_ACTION_UPLOAD_IDC]:z.config.TOOLBAR_QCLOUD_UPLOAD_IDC},b=a[this.props.qcloud.currentOperation];if(b)return void this.showErr(z.config.TOOLBAR_QCLOUD_ERROR.format(b))}const f=(a,b)=>{let c;try{c=a()}catch(a){return void b(a)}return c};let g=!1;try{const a=f(()=>1===parseInt(this.props.project.attr.qcloud.qcloud_status.open_develop_env,10),()=>{}),b=f(()=>{const a=parseInt(this.props.project.attr.qcloud.qcloud_dev_info.current_language,10);return 1===a||2===a},()=>{});g=a||b}catch(a){}return g?void(this.props.toolbarActions.toggleClickKey(r.QCLOUD),c&&c.classList.contains('__auto-hided')?this.setState({QCloudTop:b.top+b.height,QCloudLeft:void 0,QCloudRight:0}):void 0===b.left?this.setState({QCloudLeft:void 0,QCloudRight:b.right,QCloudTop:b.top+20}):this.setState({QCloudRight:void 0,QCloudLeft:b.left,QCloudTop:b.top+20})):void this.props.windowActions.setQCloud({deployShow:!0})}async remoteDebug(a){if(a.stopPropagation(),!(this.props.actionBtnDisabled||this.props.toolbarConfigShow)){const b=H.get(y.WINDOW_REGISTRY.REMOTE_DEBUG_WINDOW);if(b)return void b.focus();if(this.props.remoteDebugWindow.debuggingProjectId)return this.props.project.projectid===this.props.remoteDebugWindow.debuggingProjectId?void 0:void this.showErr(z.config.TOOLBAR_REMOTE_DEBUG_ERROR);this.props.windowActions.setRemoteDebugWindow({debuggingProjectId:this.props.project.projectid});const c=a.currentTarget.getBoundingClientRect();this.props.toolbarActions.toggleRemoteDebugCode({left:c.left,top:c.top}),this.setState({timeStamp:1*new Date})}}getDevEnvType(){let a=1;try{a=2===parseInt(this.props.project.attr.qcloud.qcloud_dev_info.current_language,10)?2:1}catch(a){}return 1==a?'nodejs':'php'}onToolbarMouseDown(a){if(2==a.button){a.preventDefault();const b=163;this.setState({configListLeft:a.pageX+b>window.innerWidth?window.innerWidth-b:a.pageX,configListTop:a.pageY}),this.props.toolbarActions.toggleClickKey(r.TOOLBARCONFIGLIST)}}onPluginClick(a){this.props.windowActions.setPluginPopUpWindow({pluginId:a,show:!0})}rendToolbarPluginIcon(){const a=this.props,b=a.config.title,d=a.config.plugin||{};let e=[];for(const f in a.pluginManifests){const g=a.pluginManifests[f];g.toolbar&&!1!==d[f]&&e.push(c.createElement('div',{className:'toolbar-item',key:f},c.createElement('div',{className:'toolbar-action',onClick:this.onPluginClick.bind(this,f)},c.createElement('div',{className:'toolbar-button'},c.createElement('i',{style:{background:`url(${g.toolbar_icon}) no-repeat 50% 50%`,display:'inline-block',verticalAlign:'middle',width:12,height:12}})),b?c.createElement('p',{className:'toolbar-label'},g.name):null)))}return e}render(){const a=this.props,b=a.project.attr||{};let d='';const f=this.props.compileTypeConst.map((a)=>{return a.value==this.props.compileType&&(d=a.name),a.name}),h=this.state.moreDropDownList.map((a)=>a.name),i=b.gameApp,j=a.project.isMiniCode,k=b.qbaseInfo&&b.qbaseInfo.open,l=b.qcloud&&b.qcloud.qcloud_status&&1===b.qcloud.qcloud_status.open_qc_account,m=a.config.title,n=a.git.panelShow,p='en'===z.getLocale()?{fontSize:10}:{};return c.createElement('div',{className:'header',style:{marginTop:this.state.marginTop},onMouseDown:this.onToolbarMouseDown.bind(this)},c.createElement(g,null),c.createElement(v,{width:'zh'===z.getLocale()?152:187,left:this.state.compileTypeDropDownLeft,top:this.state.compileTypeDropDownTop,show:a.clickkey==r.COMPILETYPE,list:f,onSelectClick:this.onCompileTypeSelect.bind(this)}),c.createElement(B,{env:this.getDevEnvType(),left:this.state.QCloudLeft,top:this.state.QCloudTop,right:this.state.QCloudRight}),c.createElement(v,{right:0,top:this.state.moreDropDownTop,show:a.clickkey==r.MORETOOL,list:h,onSelectClick:this.onMoreSelect.bind(this)}),c.createElement(q,{left:this.state.CleanCacheLeft,top:this.state.CleanCacheTop,right:this.state.CleanCacheRight}),a.previewQRShow?c.createElement(s,{autoUploadFailureText:this.state.autoUploadFailureText,autoUploadStatus:this.state.autoUploadStatus,left:this.state.QRCodeLeft,top:this.state.QRCodeTop,timeStamp:this.state.timeStamp}):null,a.remoteDebugCodeShow?c.createElement(s,{mode:'remotedebug',left:this.state.remoteDebugCodeLeft,top:this.state.remoteDebugCodeTop,timeStamp:this.state.timeStamp}):null,c.createElement(o,{left:this.state.condictionDropDownLeft,top:this.state.condictionDropDownTop}),c.createElement(K,{left:this.state.configListLeft,top:this.state.configListTop}),c.createElement('div',{className:'toolbar',style:{overflowX:'hidden'}},c.createElement('div',{className:'toolbar-items',style:{flex:'none',minWidth:'20%'}},c.createElement('div',{className:'toolbar-item',onClick:this.onSetSimulator.bind(this),id:'toolbar-simulator'},c.createElement('div',{className:e('toolbar-action',{"toolbar-action-active":a.simulatorShow&&!a.simulatorPopup}),disabled:a.toolbarConfigShow},c.createElement('div',{className:'toolbar-button'},c.createElement('i',{className:'ui-icon-simulator'})),m?c.createElement('p',{className:'toolbar-label'},z.config.TOOLBAR_SIMULATOR):null)),c.createElement('div',{className:'toolbar-item',onClick:this.onSetEditor.bind(this),id:'toolbar-editor'},c.createElement('div',{className:e('toolbar-action',{"toolbar-action-active":a.editorShow}),disabled:a.toolbarConfigShow},c.createElement('div',{className:'toolbar-button'},c.createElement('i',{className:'ui-icon-editor'})),m?c.createElement('p',{className:'toolbar-label'},z.config.TOOLBAR_EDITOR):null)),c.createElement('div',{className:'toolbar-item',onClick:this.onSetAppservice.bind(this),id:'toolbar-devtools'},c.createElement('div',{className:e('toolbar-action',{"toolbar-action-active":a.debugShow&&!a.debugPopup}),disabled:a.toolbarConfigShow},c.createElement('div',{className:'toolbar-button'},c.createElement('i',{className:'ui-icon-debug'})),m?c.createElement('p',{className:'toolbar-label'},z.config.TOOLBAR_DEBUGGER):null)),j||b.isSandbox?null:c.createElement('div',{className:'toolbar-item'},c.createElement('div',{className:'toolbar-action',disabled:a.actionBtnDisabled||a.project.isGameTourist,onClick:this.toggleCloud.bind(this),disabled:a.toolbarConfigShow,id:'toolbar-qcloud'},c.createElement('div',{className:'toolbar-button',title:a.disabledTips},c.createElement('i',{className:'ui-icon-cloud-develop'})),m?c.createElement('p',{className:'toolbar-label'},z.config.TOOLBAR_CLOUD):null))),c.createElement('div',{className:'toolbar-items',style:{overflowX:'hidden'}},c.createElement('div',{className:'toolbar-item',style:{display:a.weappCompileTypeShow?'':'none'}},c.createElement('div',{className:'toolbar-action-group'},c.createElement('div',{className:'toolbar-action',onClick:this.toggleCompileType.bind(this),disabled:a.toolbarConfigShow},c.createElement('div',{className:'toolbar-action-selector'},c.createElement('p',null,d),c.createElement('i',{className:e({"ui-icon-arrow-down":a.clickkey!=r.COMPILETYPE,"ui-icon-arrow-up":a.clickkey==r.COMPILETYPE})}))))),c.createElement('div',{className:'toolbar-item-divider',style:{display:a.weappCompileTypeShow?'':'none'}}),c.createElement('div',{className:'toolbar-item'},c.createElement('div',{className:'toolbar-action-group'},c.createElement('div',{className:'toolbar-action',onClick:this.toggleCompileCondiction.bind(this),disabled:a.toolbarConfigShow||a.git.panelShow},c.createElement('div',{className:'toolbar-action-selector',onClick:this.toggleCompileCondiction.bind(this)},c.createElement('p',null,a.condictionName),c.createElement('i',{className:e({"ui-icon-arrow-down":a.clickkey!=r.COMPILECONDICTION,"ui-icon-arrow-up":a.clickkey==r.COMPILECONDICTION})}))),c.createElement('div',{className:'toolbar-action',onClick:this.onLaunchSimulator.bind(this),id:'toolbar-compile',disabled:a.toolbarConfigShow},c.createElement('div',{className:'toolbar-button'},c.createElement('i',{className:'ui-icon-refresh'})),m?c.createElement('p',{style:p,className:'toolbar-label'},z.config.TOOLBAR_COMPILE):null),c.createElement('div',{className:'toolbar-action',ref:'previewBtn',disabled:a.actionBtnDisabled||a.toolbarConfigShow,onClick:this.togglePreviewCode.bind(this),id:'toolbar-preview'},c.createElement('div',{className:'toolbar-button',ref:(a)=>this.qrbutton=a,title:a.disabledTips},c.createElement('style',{dangerouslySetInnerHTML:{__html:'.scale07 { transform: scale(0.7, 0.7); }'}}),c.createElement('i',{className:(()=>{const a=this.state.autoUploadStatus,b=this.props.compilerSettings.autoPreview;return a&&b?'uploading'===a?'ui-icon-spinner scale07 transitioned':'success'===a?'ui-icon-success scale07 transitioned':'fail'===a?'ui-icon-error scale07 transitioned':'ui-icon-eye transitioned':'ui-icon-eye transitioned'})()})),m?c.createElement('p',{style:p,className:'toolbar-label'},z.config.TOOLBAR_PREVIEW):null))),c.createElement('div',{className:'toolbar-item',style:{flex:1,overflowX:'hidden'}},c.createElement('div',{className:'toolbar-item-group __auto-hide-toolbar',ref:(a)=>this.autoHideToolbar=a},'weapp'===this.props.compileType||'game'===this.props.compileType?c.createElement('div',{className:'toolbar-item',"data-label":z.config.TOOLBAR_REMOTE_DEBUG},c.createElement('div',{className:'toolbar-action',disabled:a.actionBtnDisabled||a.toolbarConfigShow,onClick:this.remoteDebug.bind(this)},c.createElement('div',{className:'toolbar-button',ref:(a)=>this.remoteDebugButton=a,title:a.disabledTips},c.createElement('i',{className:'ui-icon-bug'})),m?c.createElement('p',{className:'toolbar-label'},z.config.TOOLBAR_REMOTE_DEBUG):null)):null,c.createElement('div',{className:'toolbar-item',"data-label":a.backgroundShow?z.config.TOOLBAR_SWITCH_TO_FOREGROUND:z.config.TOOLBAR_SWITCH_TO_BACKGROUND},c.createElement('div',{className:'toolbar-action',onClick:this.onSetBackground.bind(this),disabled:a.toolbarConfigShow,id:'toolbar-switch'},c.createElement('div',{className:'toolbar-button'},c.createElement('i',{className:'ui-icon-backstage'})),m?c.createElement('p',{className:'toolbar-label'},a.backgroundShow?z.config.TOOLBAR_SWITCH_TO_FOREGROUND:z.config.TOOLBAR_SWITCH_TO_BACKGROUND):null)),c.createElement('div',{className:'toolbar-item',"data-label":z.config.TOOLBAR_CLEAR_CACHE},c.createElement('div',{className:'toolbar-action',onClick:this.toggleCleanCache.bind(this),disabled:a.toolbarConfigShow,id:'toolbar-cleancache'},c.createElement('div',{className:'toolbar-button'},c.createElement('i',{className:'ui-icon-cache'}),c.createElement('i',{className:e({"ui-icon-arrow-down":a.clickkey!=r.CLEANCACHE,"ui-icon-arrow-up":a.clickkey==r.CLEANCACHE})})),m?c.createElement('p',{className:'toolbar-label'},z.config.TOOLBAR_CLEAR_CACHE):null)),c.createElement('div',{className:'toolbar-item',"data-isgap":'true',style:{flex:1,height:'100%',cursor:'default'}}),b.isSandbox||j||!a.config.upload?null:c.createElement('div',{className:'toolbar-item',"data-label":z.config.TOOLBAR_UPLOAD},c.createElement('div',{className:'toolbar-action',disabled:a.actionBtnDisabled||a.project.isGameTourist,onClick:this.onUploadClick.bind(this),id:'toolbar-upload'},c.createElement('div',{className:'toolbar-button',title:a.disabledTips},c.createElement('i',{className:'ui-icon-upload'})),m?c.createElement('p',{className:'toolbar-label'},z.config.TOOLBAR_UPLOAD):null)),c.createElement('div',{className:'toolbar-item',"data-label":z.config.TOOLBAR_SOURCE_CONTROL},c.createElement('div',{className:e({"toolbar-action":!0,"toolbar-action-active":n}),onClick:this.onGitManagerClick.bind(this),id:'toolbar-bbs'},c.createElement('div',{className:'toolbar-button'},c.createElement('i',{className:'ui-icon-git',style:{background:n?'#FFF':'#000'}})),m?c.createElement('p',{className:'toolbar-label'},z.config.TOOLBAR_SOURCE_CONTROL):null)),a.config.bbs?c.createElement('div',{className:'toolbar-item',"data-label":z.config.TOOLBAR_BBS},c.createElement('div',{className:'toolbar-action',disabled:a.actionBtnDisabled,onClick:this.onBBSClick.bind(this),id:'toolbar-bbs'},c.createElement('div',{className:'toolbar-button',title:a.disabledTips},c.createElement('i',{className:'ui-icon-community'})),m?c.createElement('p',{className:'toolbar-label'},z.config.TOOLBAR_BBS):null)):null,b.isSandbox||j||!a.config.test?null:c.createElement('div',{className:'toolbar-item',style:i?t.displayNone:{},"data-label":z.config.TOOLBAR_TEST},c.createElement('div',{className:'toolbar-action',disabled:a.actionBtnDisabled,onClick:this.onTestClick.bind(this),id:'toolbar-test'},c.createElement('div',{className:'toolbar-button',title:a.disabledTips},c.createElement('i',{className:'ui-icon-beaker'})),m?c.createElement('p',{className:'toolbar-label'},z.config.TOOLBAR_TEST):null)),b.isSandbox||j||!a.config.cos?null:c.createElement('div',{className:'toolbar-item',"data-label":z.config.TOOLBAR_MATERIAL_MANAGEMENT},c.createElement('div',{className:'toolbar-action',disabled:a.actionBtnDisabled||a.project.isGameTourist,onClick:this.toggleCos.bind(this),id:'toolbar-qcloud'},c.createElement('div',{className:'toolbar-button',title:a.disabledTips},c.createElement('i',{className:'ui-icon-material'})),m?c.createElement('p',{className:'toolbar-label'},z.config.TOOLBAR_MATERIAL_MANAGEMENT):null)),b.isSandbox||j||!a.config.qcloud||!l?null:c.createElement('div',{className:'toolbar-item',"data-label":z.config.TOOLBAR_TENCENT_CLOUD},c.createElement('div',{className:'toolbar-action',disabled:a.actionBtnDisabled||a.project.isGameTourist,onClick:this.toggleQCloud.bind(this),id:'toolbar-qcloud'},c.createElement('div',{className:'toolbar-button',title:a.disabledTips},c.createElement('i',{className:'ui-icon-cloud'})),m?c.createElement('p',{className:'toolbar-label'},z.config.TOOLBAR_TENCENT_CLOUD):null)),j?c.createElement('div',{className:'toolbar-item',"data-label":z.config.SHARE},c.createElement('div',{className:'toolbar-action',onClick:this.onShareClick.bind(this),id:'toolbar-qcloud'},c.createElement('div',{className:'toolbar-button'},c.createElement('i',{className:'ui-icon-upload'})),m?c.createElement('p',{className:'toolbar-label'},z.config.SHARE):null)):null,b.isSandbox?c.createElement('div',{className:'toolbar-item',"data-label":z.config.TOOLBAR_TEST_ACCOUNT},c.createElement('div',{className:'toolbar-action',onClick:this.onSandboxLinkClick.bind(this),id:'toolbar-qcloud'},c.createElement('div',{className:'toolbar-button'},c.createElement('i',{className:'ui-icon-link'})),m?c.createElement('p',{className:'toolbar-label'},z.config.TOOLBAR_TEST_ACCOUNT):null)):null,this.rendToolbarPluginIcon(),c.createElement('div',{className:'toolbar-item',"data-label":z.config.TOOLBAR_DETAILS},c.createElement('div',{className:e('toolbar-action',{"toolbar-action-active":a.projectInfoShow}),onClick:this.toggleProjectInfo.bind(this),disabled:a.toolbarConfigShow,id:'toolbar-detail'},c.createElement('div',{className:'toolbar-button'},c.createElement('i',{className:'ui-icon-bars'})),m?c.createElement('p',{className:'toolbar-label'},z.config.TOOLBAR_DETAILS):null))))),c.createElement('a',{ref:(a)=>this.moreIcon=a,className:'toolbar-more',onClick:this.onAutoHideMoreClick.bind(this),style:{display:this.state.hasHidedToolbarItem?'flex':'none'}},c.createElement('i',{className:'ui-icon-double-arrow-right'}))))}onAutoHideMoreClick(a){if(this.autoHideToolbar){a.preventDefault(),a.stopPropagation(),this.props.toolbarActions.toggleClickKey(r.MORETOOL);const b=this.autoHideToolbar,c=b.querySelectorAll('.toolbar-item.__auto-hided'),d=[];for(const b of c)b&&(b.dataset.isgap||d.push({title:b.innerText.trim()||b.dataset.label||'?',onClick:()=>{const c=b.querySelector('.toolbar-action');c&&c.click(a)}}));Q(d,{top:a.pageY,left:a.pageX})}}cancelResizeHelper(){this.autoHideToolbar&&P.unobserve(this.autoHideToolbar)}setupResizeHelper(){this.autoHideToolbar&&P.observe(this.autoHideToolbar,this._onAutoHideToolbarResize=()=>{requestAnimationFrame(this.onAutoHideToolbarResize.bind(this))})}onAutoHideToolbarResize(){if(!this.autoHideToolbar)return;const a=this.autoHideToolbar,b=a.getBoundingClientRect(),c=b.left+b.width,d=a.querySelectorAll('.toolbar-item');let e=!1;for(let a=d.length-1;0<=a;a--){const b=d[a];if(b.dataset.isgap)continue;const f=b.getBoundingClientRect(),g=f.left+f.width;g>c?(e=!0,b.classList.add('__auto-hided')):b.classList.remove('__auto-hided')}this.setState({hasHidedToolbarItem:e})}}module.exports=R((a)=>{const b=[{name:z.config.TOOLBAR_MINI_PROGRAM_MODE,value:x.weapp}],c=[{name:z.config.TOOLBAR_MINI_PROGRAM_MODE,value:x.weapp},{name:z.config.TOOLBAR_SEARCH_DYNAMIC_PAGE,value:x.search},{name:z.config.TOOLBAR_PLUG_IN_MODE,value:x.plugin}],d=[{name:z.config.TOOLBAR_MINI_GAME_MODE,value:x.game}],e=[{name:z.config.TOOLBAR_MINI_PROGRAM_MODE,value:x.weapp},{name:z.config.TOOLBAR_PLUG_IN_MODE,value:x.plugin}],f=[{name:z.config.TOOLBAR_MINI_PROGRAM_MODE,value:x.weapp},{name:z.config.TOOLBAR_SEARCH_DYNAMIC_PAGE,value:x.search}],g=a.project.current||{},h=g.compileType,i=g.condiction&&g.condiction[h];let j={},k=z.config.TOOLBAR_ORDINARY_COMPILATION;i&&i.list&&(j=i.list[i.current],j?k=j.name:j={});const l=a.toolbar.clickKey,m=a.simulator.webviewInfos[a.simulator.currentWebviewID]||{},n=g.attr&&g.attr.userbanded,o=g.isTourist||!n;let p='';o&&(p=g.isTourist?z.config.ALERT_TOURIST_FORBIDDEN_CONTENT:n?'':z.config.CGI_ERR_NOT_BAND);let q=!1,s=b;h==x.weapp?(q=!0,s=c):h==x.search?(q=!0,s=f):h==x.plugin&&(q=!0,s=e),g.attr&&g.attr.gameApp&&(q=!1,s=d);const t=a.toolbar.config;return{compilerSettings:a.settings.compiler||{},autoPreviewTimestamp:a.toolbar.autoPreviewTimestamp,show:a.window.toolbar&&a.window.toolbar.show,qcloud:g.qcloud,searchWidgetShow:!0,actionBtnDisabled:o,disabledTips:p,previewQRShow:r.PREVIEWCODE==l,remoteDebugCodeShow:r.REMOTEDEBUGCODE===l,debugShow:a.window.debug.show,debugPopup:a.window.debug.popup,cloudConsoleShow:a.window.cloud&&a.window.cloud.console&&a.window.cloud.console.show,remoteDebugWindow:a.window.remoteDebugWindow,editorShow:a.window.editor&&a.window.editor.show,simulatorShow:a.window.simulator&&a.window.simulator.show,simulatorPopup:a.window.simulator&&'popup'===a.window.simulator.position,projectInfoShow:r.PROJECTINFO==l,device:a.toolbar.deviceInfo,backgroundShow:a.simulator.backgroundShow,clickkey:a.toolbar.clickKey,project:g,projectAttr:g.attr||{},condiction:j,webviewInfo:m,compileType:h,condictionName:k,compileTypeConst:s,weappCompileTypeShow:q,appConfig:a.simulator.appConfig||{},toolbarConfigShow:a.window.toolbarConfig&&a.window.toolbarConfig.show,config:t,pluginManifests:a.config.pluginManifests,git:a.git}},(a)=>({openCosManager:u.bindActionCreators(n.openCosManager,a),toolbarActions:u.bindActionCreators(p,a),windowActions:u.bindActionCreators(i,a),infoActions:u.bindActionCreators(j,a),openBBS(){return k.BBS.apply(void 0,arguments)},setProjectQCloud:u.bindActionCreators(w.setProjectQCloud,a),requestProjectAttr:u.bindActionCreators(w.requestProjectAttr,a),compile:u.bindActionCreators(l.compile,a),setBackground:u.bindActionCreators(l.setBackground,a),debugActions:u.bindActionCreators(m,a),setProjectCompileType:u.bindActionCreators(w.setProjectCompileType,a),consoleActions:u.bindActionCreators(L,a),gitActions:u.bindActionCreators(O,a)}))(U)}(require('lazyload'),require);