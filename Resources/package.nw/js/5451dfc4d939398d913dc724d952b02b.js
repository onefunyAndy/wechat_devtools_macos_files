'use strict';!function(require,directRequire){const a=require('./c8f9a38f906c462500d1d8c38f4bac7a.js'),b=require('./d6a4005cc6e9fb5b030ef47f546d825f.js'),c=require('./535a84422c995fb798afe973987dd942.js'),d=require('./41f4eba9fb17703b7d61eca8b05aa076.js'),e=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),f=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),g=require('./common/locales/index.js');let h,i=global.isSimple?b:a;g.onChangeLocale(()=>{i.init(h)});const j=()=>{i.update(h)},k=(a,b)=>a.project&&a.project.current&&b.project&&b.project.current&&a.project.current.condiction!=b.project.current.condiction,l=(a,b)=>a.project&&a.project.current&&b.project&&b.project.current&&a.project.current.attr!=b.project.current.attr,m=(a,b)=>a.settings&&a.settings.shortcuts&&b.settings&&b.settings.shortcuts&&a.settings.shortcuts!==b.settings.shortcuts,n=(a,b)=>{return a.config.pluginManifests!==b.config.pluginManifests};let o=e.getState();e.subscribe(()=>{const a=e.getState();(o.git!==a.git||o.window!==a.window||m(o,a)||k(o,a)||l(o,a)||n(o,a))&&j(),o=a}),module.exports={init:(d)=>{const g=e.getState();i=g.window&&g.window.mainWindow===f.MAIN_WINDOW_TYPE.WEB_DEBUGGER?c:global.isSimple?b:a,i.init(d),h=d,o=g},update:j}}(require('lazyload'),require);