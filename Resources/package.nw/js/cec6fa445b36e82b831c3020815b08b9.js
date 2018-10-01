'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){function a(){return{pluginPopup:{},mainWindow:f.MAIN_WINDOW_TYPE.LOGIN,focus:f.WINDOW_FOCUS.BODY,moveToCenter:Date.now(),tcbLoading:{confirmText:'\u786E\u5B9A',cancelText:'\u53D6\u6D88',showLoading:!1,showConfirm:!0,showCancel:!0,show:!1},tcbActionConfirmInfo:{show:!1,type:'error',title:'',content:'',showConfirm:!0,showCancel:!0,confirmText:'\u786E\u5B9A',cancelText:'\u53D6\u6D88',callback:null},multiAccountBox:{show:!1},additionLogin:{show:!1},about:{show:!1},toolbar:{show:!0},debug:{show:!0,popup:!1,height:100},simulator:{show:!0,position:'left',width:500},customCompile:{show:'none'},editor:{show:!0,fileTreeShow:!0},toolbarConfig:{show:!1},cloud:{console:{show:!1},fnaction:{show:!1}},qcloud:{deployShow:!1,uploadShow:!1,uploadIDCShow:!1,actionType:{deployDev:{ts:Date.now(),options:{}},installDependence:{ts:Date.now(),options:{}},restartService:{ts:Date.now(),options:{}}},info:{uploadSuccessTime:0,deploySuccessTime:0,installSuccessTime:0,restartSuccessTime:0},uploading:{show:!1,status:void 0,content:'',descList:[],estimateTime:void 0}},projectManagement:{show:!1},remoteDebugWindow:{show:!1,debuggingProjectId:null,inspectUrl:'about:blank',usingLocalStorage:!0,disableUrlCheck:!0,noMaps:!1},qcloudDebugWindow:{show:!1,inspectUrl:'about:blank'},selectProjectOptions:{tab:f.SELECT_PROJECT_TAB.PROJECT},miniCodeOptions:{},windowStatus:{mode:f.WINDOW_MODE.FULLSCREEN,position:{}},mask:{show:!1},popup:b()}}function b(){return{customAnalysis:{show:!1},mobileTest:{show:!1},selectProject:{show:!1},createProject:{show:!1},createMiniCode:{show:!1}}}const c=require('lodash'),{REHYDRATE:d}=require('redux-persist/constants'),e=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),f=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),g=require('./84858de8a097c9cf84ff2c2e3d86e2a9.js'),h=require('./fb50036318d6bd7d2a71f03b2ad8f0a5.js');module.exports=function(h=a(),i){switch(i.type){case e.USER_LOGIN_EXPIRED:return h.mainWindow!=f.MAIN_WINDOW_TYPE.DEV&&h.mainWindow!=f.MAIN_WINDOW_TYPE.WEB_DEBUGGER?_extends({},h,{mainWindow:f.MAIN_WINDOW_TYPE.LOGIN}):h;case e.USER_REMOVE_INFO:return _extends({},h,{mainWindow:f.MAIN_WINDOW_TYPE.LOGIN});case e.LOGIN_AND_GOTO:return _extends({},h,{mainWindow:i.goto});case e.WINDOW_RECORD_FOCUS:return h.focus===i.focus?h:_extends({},h,{focus:i.focus});case e.WINDOW_SET_MAIN_WINDOW:return _extends({},h,{mainWindow:i.mainWindow});case e.PROJECT_SELECT_PROJECT_REQUEST:if(h.mainWindow!==f.MAIN_WINDOW_TYPE.DEV)return _extends({},h,{mainWindow:f.MAIN_WINDOW_TYPE.SELECT_PROJECT,selectProjectOptions:_extends({},h.selectProjectOptions,i.options)});case e.PROJECT_CREATE_PROJECT_REQUEST:return h.mainWindow===f.MAIN_WINDOW_TYPE.DEV?_extends({},h,{create_project_popup:!0}):_extends({},h,{mainWindow:f.MAIN_WINDOW_TYPE.CREATE_PROJECT});case e.PROJECT_CREATE_MINICODE_REQUEST:{const a=_extends({},h,{mainWindow:'create'===i.createType?f.MAIN_WINDOW_TYPE.CREATE_MINICODE:f.MAIN_WINDOW_TYPE.IMPORT_MINICODE});return i.options&&(a.miniCodeOptions=i.options),a}case e.WINDOW_CLEAR_MINICODE_OPTIONS:return _extends({},h,{miniCodeOptions:{}});case e.PROJECT_OPEN_PROJECT:return _extends({},h,{popup:b(),mainWindow:f.MAIN_WINDOW_TYPE.DEV});case e.PROJECT_CLOSE_PROJECT:return _extends({},h,{moveToCenter:Date.now(),mainWindow:f.MAIN_WINDOW_TYPE.SELECT_PROJECT,remoteDebugWindow:_extends({},h.remoteDebugWindow||{},{show:!1}),qcloudDebugWindow:_extends({},h.qcloudDebugWindow||{},{show:!1})});case e.PROJECT_SELECT_PROJECT_CANCEL:return h.mainWindow===f.MAIN_WINDOW_TYPE.SELECT_PROJECT?_extends({},h,{mainWindow:f.MAIN_WINDOW_TYPE.ENTRANCE}):h;case e.PROJECT_SELECT_PROJECT_OPEN:return h.popup.selectProject&&!h.popup.selectProject.show?_extends({},h,{popup:_extends({},h.popup,{selectProject:{show:!0}})}):h;case e.PROJECT_SELECT_PROJECT_CLOSE:return h.popup.selectProject&&h.popup.selectProject.show?_extends({},h,{popup:_extends({},h.popup,{selectProject:{show:!1}})}):h;case e.PROJECT_CREATE_PROJECT_OPEN:return h.popup.createProject&&!h.popup.createProject.show?_extends({},h,{popup:_extends({},h.popup,{createProject:{show:!0}})}):h;case e.PROJECT_CREATE_PROJECT_CLOSE:return h.popup.createProject&&h.popup.createProject.show?_extends({},h,{popup:_extends({},h.popup,{createProject:{show:!1}})}):h;case e.PROJECT_CREATE_PROJECT_CANCEL:return h.mainWindow===f.MAIN_WINDOW_TYPE.CREATE_PROJECT?_extends({},h,{mainWindow:f.MAIN_WINDOW_TYPE.SELECT_PROJECT}):h;case e.PROJECT_CREATE_MINICODE_OPEN:return h.popup.createMiniCode&&!h.popup.createMiniCode.show?_extends({},h,{popup:_extends({},h.popup,{createMiniCode:{show:!0,type:i.createType}})}):h;case e.PROJECT_CREATE_MINICODE_CLOSE:return h.popup.createMiniCode&&h.popup.createMiniCode.show?_extends({},h,{popup:_extends({},h.popup,{createMiniCode:{show:!1}})}):h;case e.PROJECT_CREATE_MINICODE_CANCEL:return h.mainWindow===f.MAIN_WINDOW_TYPE.CREATE_MINICODE||h.mainWindow===f.MAIN_WINDOW_TYPE.IMPORT_MINICODE?_extends({},h,{mainWindow:f.MAIN_WINDOW_TYPE.SELECT_PROJECT}):h;case e.WINDOW_MAXIMIZE:return _extends({},h,{windowStatus:{mode:f.WINDOW_MODE.MAX}});case e.WINDOW_MINIMIZE:return _extends({},h,{windowStatus:{mode:f.WINDOW_MODE.MIN}});case e.WINDOW_FULLSCREEN:return _extends({},h,{windowStatus:{mode:f.WINDOW_MODE.FULLSCREEN}});case e.WINDOW_RESIZE:return _extends({},h,{windowStatus:{mode:f.WINDOW_MODE.FREE,position:_extends({},h.windowStatus.position,i.position)}});case e.WINDOW_SET_ABOUT:return _extends({},h,{about:_extends({},h.about,i.data)});case e.WINDOW_SET_DEBUGGER:return _extends({},h,{debug:_extends({},h.debug,i.data)});case e.WINDOW_TOGGLE_DEBUGGER:{const a={};return a.show=!h.debug.show,h.debug.popup&&(a.show=!0,a.popup=!1),_extends({},h,{debug:_extends({},h.debug,a)})}case e.WINDOW_TOGGLE_MINI_MODE:return _extends({},h,{windowStatus:_extends({},h.windowStatus,{mini:!h.windowStatus.mini})});case e.WINDOW_SET_SIMULATOR:return _extends({},h,{simulator:_extends({},h.simulator,i.data)});case e.WINDOW_TOGGLE_SIMULATOR:{const a={};return a.show=!h.simulator.show,'popup'===h.simulator.position&&(a.show=!0,a.position='left'),_extends({},h,{simulator:_extends({},h.simulator,a)})}case e.WINDOW_TOGGLE_SIMULATOR_POSITION:return _extends({},h,{simulator:_extends({},h.simulator,{position:'left'===h.simulator.position?'right':'left'})});case e.WINDOW_SET_SIMULATOR_POSITION:return _extends({},h,{simulator:_extends({},h.simulator,{position:i.position})});case i.WINDOW_TOGGLE_DEBUGGER_POPUP:return _extends({},h,{debug:_extends({},h.debug,{popup:!h.debug.popup})});case e.WINDOW_TOGGLE_EDITOR:{const a=h.debug.show,b=h.simulator.show;let c=!h.editor.show;if(!a&&!b)c=!0;else{const a=h.debug.popup,b='popup'===h.simulator.position;a&&b&&(c=!0)}return _extends({},h,{editor:_extends({},h.editor,{show:c})})}case e.WINDOW_TOGGLE_TOOLBAR:return _extends({},h,{toolbar:{show:!h.toolbar.show}});case e.WINDOW_SET_MASK:return _extends({},h,{mask:{show:i.show,type:i.maskType}});case e.WINDOW_SET_CUSTOMCOMPILE:return _extends({},h,{customCompile:_extends({},h.customCompile,i.data)});case e.WINDOW_SET_CLOUD:return _extends({},h,{cloud:_extends({},h.cloud,i.data)});case e.WINDOW_SET_QCLOUD:return _extends({},h,{qcloud:_extends({},h.qcloud,i.data,{uploading:_extends({},h.qcloud.uploading,i.data.uploading)})});case e.WINDOW_SET_QCLOUD_ACTION:return _extends({},h,{qcloud:_extends({},h.qcloud,{actionType:_extends({},h.qcloud.actionType,{[i.data.actionType]:{ts:Date.now(),options:i.data.options}})})});case e.WINDOW_SET_EDITOR:return _extends({},h,{editor:_extends({},h.editor,i.data)});case e.WINDOW_SET_PROJECT_MANAGEMENT:return _extends({},h,{projectManagement:_extends({},h.projectManagement,i.data)});case e.WINDOW_SET_REMOTE_DEBUG_WINDOW:return _extends({},h,{remoteDebugWindow:_extends({},h.remoteDebugWindow,i.data)});case e.WINDOW_SET_QCLOUD_DEBUG_WINDOW:return _extends({},h,{qcloudDebugWindow:_extends({},h.qcloudDebugWindow,i.data)});case e.INFO_OPEN_EDITOR_FILE:return _extends({},h,{editor:_extends({},h.editor,{show:!0})});case e.WINDOW_SYNC_STORE:{let a=_extends({},h);return a=c.merge(a,i.data.window),a}case e.WINDOW_TOOLBAR_CONFIG:return _extends({},h,{toolbarConfig:_extends({},i.data)});case e.WINDOW_SET_MULTI_ACCOUNT:return _extends({},h,{multiAccountBox:_extends({},h.multiAccountBox,i.data)});case e.WINDOW_SET_ADDITION_LOGIN:return _extends({},h,{additionLogin:_extends({},h.additionLogin,i.data)});case e.WINDOW_SET_PLUGIN_POPUP:return _extends({},h,{pluginPopup:_extends({},h.pluginPopup,{[i.data.pluginId]:i.data.show})});case e.TCB_SET_LOADING:return _extends({},h,{tcbLoading:_extends({},h.tcbLoading,i.data)});case e.TCB_SCF_INFO:return _extends({},h,{tcbActionConfirmInfo:_extends({},h.tcbActionConfirmInfo,i.data)});case d:{const a=global.devInfo&&global.devInfo.projectid?g.getWindowForProject(global.devInfo.projectid):null,b=c.merge(c.cloneDeep(h),_extends({},i.payload.window,a));global.isDevWindow||((b.remoteDebugWindow||{}).debuggingProjectId=null),(b.remoteDebugWindow||{}).show=!1,(b.qcloudDebugWindow||{}).show=!1;let d;const e=b||{};return e.mainWindow?(global.CLI.startedByCLI&&(e.mainWindow=f.MAIN_WINDOW_TYPE.ENTRANCE),d=e.mainWindow===f.MAIN_WINDOW_TYPE.CREATE_PROJECT||e.mainWindow===f.MAIN_WINDOW_TYPE.SELECT_PROJECT||e.mainWindow===f.MAIN_WINDOW_TYPE.CREATE_MINICODE||e.mainWindow===f.MAIN_WINDOW_TYPE.IMPORT_MINICODE?f.MAIN_WINDOW_TYPE.ENTRANCE:e.mainWindow):d=f.MAIN_WINDOW_TYPE.LOGIN,global.isDevWindow?'webdebugger'===global.devType?d=f.MAIN_WINDOW_TYPE.WEB_DEBUGGER:d=f.MAIN_WINDOW_TYPE.DEV:(d===f.MAIN_WINDOW_TYPE.WEB_DEBUGGER||d===f.MAIN_WINDOW_TYPE.DEV)&&(d=f.MAIN_WINDOW_TYPE.ENTRANCE),b.focus=f.WINDOW_FOCUS.BODY,b.mask={show:!1},b.popup=h.popup,b.customCompile.show='none',b.qcloud.uploadShow=!1,b.qcloud.uploadIDCShow=!1,b.qcloud.uploading&&(b.qcloud.uploading.show=!1,b.qcloud.uploading.descList=[]),b.cloud&&(b.cloud.console={show:!1}),b.projectManagement.show=!1,b.debug.popup=!1,'popup'===b.simulator.position&&(b.simulator.position='left'),b.additionLogin.show=!1,b.multiAccountBox.show=!1,b.pluginPopup=h.pluginPopup,b.tcbLoading.show=!1,b.cloud.console.show=!1,b.cloud.fnaction.show=!1,_extends({},b,{mainWindow:d})}default:return h;}}}(require('lazyload'),require);