'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('redux'),b=require('./bc5fc398d41609901fe7046a373431bf.js'),c=require('./ba23d8b47b1f4ea08b9fd49939b9443f.js'),d=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),{connect:e}=require('react-redux');module.exports=e((a)=>{const b=a.simulator.setting,c=a.toolbar.deviceInfo,d=a.simulator.orientation&&'landscape'==a.simulator.orientation.value;return _extends({},b,{navigationbarHeight:c.navigationbarHeight,screenWidth:d?c.screenHeight:c.screenWidth,screenHeight:d?c.screenWidth:c.screenHeight,appName:a.project.current.appShowName,deviceScale:a.toolbar.deviceScale})},(a)=>({hideSetting:d.bindActionCreators(c.hideSetting,a)}))(b)}(require('lazyload'),require);