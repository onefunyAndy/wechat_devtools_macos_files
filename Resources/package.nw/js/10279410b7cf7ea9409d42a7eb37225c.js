'use strict';!function(require,directRequire){const a=require('redux'),b=require('./5ec5ef3e14ac3d44dc5dd609d7cd5392.js'),c=require('./ba23d8b47b1f4ea08b9fd49939b9443f.js'),d=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),{connect:e}=require('react-redux');module.exports=e((a)=>{const b=a.simulator.pickerInfo||{};return{show:b.show&&'date'==b.mode,current:b.current,fields:b.fields,start:b.start,end:b.end,webviewID:b.webviewID,callbackID:b.callbackID}},(a)=>({hidePicker:d.bindActionCreators(c.hidePicker,a)}))(b)}(require('lazyload'),require);