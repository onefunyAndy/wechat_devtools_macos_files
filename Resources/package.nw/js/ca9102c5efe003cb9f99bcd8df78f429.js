'use strict';!function(require,directRequire){const a=require('redux'),b=require('./2b040e4313b53c2accd81a26f15a352e.js'),c=require('./ba23d8b47b1f4ea08b9fd49939b9443f.js'),{connect:d}=require('react-redux');module.exports=d((a)=>{const b=a.simulator.currentWebviewID,c=a.simulator.toastInfo,d=c.show&&b==c.showOnWebviewID,e=a.toolbar.deviceInfo;return{show:d,title:c.title,image:c.image,mask:c.mask,icon:c.icon,deviceScale:a.toolbar.deviceScale,screenWidth:e.screenWidth}},()=>({}))(b)}(require('lazyload'),require);