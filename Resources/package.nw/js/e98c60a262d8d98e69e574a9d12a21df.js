'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){function a(a,b){f.remoteEmit('REMOTE_CONFIG_CHANGE',{[a]:b})}function b(a){const b={};for(const c in a)for(const d in a[c])b[d]=a[c][d];f.remoteEmit('REMOTE_CONFIG_CHANGE',_extends({},b))}const c=require('lodash'),d=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),e=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),f=require('./83822ab95828f61bf6a61c04d53246a8.js'),g=require('./db2217eb4cff896bdcbc50abe005058f.js'),h=require('./common/locales/index.js'),i={appearance:{theme:a.bind(null,'theme'),fontFamily:a.bind(null,'fontFamily'),fontSize:a.bind(null,'fontSize'),lineHeight:a.bind(null,'lineHeight'),locale:function(a,b){h.setLocale(b)}.bind(null,'locale')},edit:{autoSave:a.bind(null,'autoSave'),autoRefresh:a.bind(null,'autoRefresh'),saveBeforeCompile:a.bind(null,'saveBeforeCompile'),wrap:a.bind(null,'wrap'),minimap:a.bind(null,'minimap'),insertSpaces:a.bind(null,'insertSpaces'),tabSize:a.bind(null,'tabSize'),alwaysOpenFileInNewTab:a.bind(null,'alwaysOpenFileInNewTab')},proxy:{proxyType:function(){}},notification:{bbs:function(){},sys:function(){}}};module.exports={setProxySetting:(a)=>({type:d.SETTINGS_SET_PROXY,data:a}),openIDESettings:(a)=>(b)=>{let c;(c=g.get(e.WINDOW_REGISTRY.SETTINGS))?c.focus():b({type:d.SETTINGS_OPEN_IDE_SETTINGS,category:a})},closeIDESettings:()=>({type:d.SETTINGS_CLOSE_IDE_SETTINGS}),saveIDESettings:(a)=>async(c)=>{return b(a),c({type:d.SETTINGS_SAVE_IDE_SETTINGS,newSettings:a})},updateIDESetting:(a,b,c)=>(e)=>{return i[a]&&i[a][b]&&i[a][b](c),e({type:d.SETTINGS_PARTIAL_UPDATE_IDE_SETTINGS,section:a,option:b,value:c})},setGeoSetting:(a)=>({type:d.SETTINGS_SET_GEO,data:a}),resetShortcutsToDefault:()=>({type:d.SETTINGS_RESET_SHORTCUTS}),syncSettings:(a,c)=>async(e)=>{return a=a.settings||{},b(a),e({type:d.SETTINGS_SYNC_STORE,data:a,syncTime:c})}}}(require('lazyload'),require);