'use strict';!function(require,directRequire){const a=require('./f171257bbcaef547a3cf27266ccb0db2.js'),b=require('./15ba1827c7f6564a45df6bd44da3a977.js'),c=require('./3bfffbe88b3d923921f851c0697974fe.js'),d=require('./5719b6ded53098ffd9e848abcac30153.js'),e=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),{DEV_INVALID_APPID:f,DEV_APP_NOT_BAND:g,NOT_LOGIN:h,INVALID_LOGIN:i,INVALID_TOKEN:j,DEV_INVALID_SIGNATURE:k,DEV_NEED_RELOGIN:l}=require('./df6d0ff021a69fb541c733de4dbba0fe.js');module.exports={getAppInfo:(c)=>new Promise(async(k,m)=>{try{if(c===e.TOURIST_APPID)return k({});const{resp:n,body:o}=await b({url:`${a.createWeappURL}?appid=${c}`,needToken:1}),p=o.baseresponse,q=p?parseInt(p.errcode):0;switch(q){case h:case i:case j:case f:case l:return m(d.ERROR.NEED_LOGIN());case g:return m(d.ERROR.APPID_NOT_BOUND());case f:return m(d.ERROR.INVALID_APPID());}0===q?k(o):m(d.ERROR.GET_APP_INFO_ERROR(q))}catch(a){console.error('getAppInfo error: ',a),m(d.ERROR.GENERIC_ERROR(a.toString()))}}),getAppAttr:(a)=>new Promise(async(b,f)=>{try{if(a.appid===e.TOURIST_APPID)return b({});const d=await c.getLatestProjectAttr(a);b(d)}catch(a){console.error('getAppAttr error: ',a),f(d.ERROR.GENERIC_ERROR(a.toString()))}})}}(require('lazyload'),require);