'use strict';!function(require,directRequire){const a=require('./common/locales/index.js');module.exports={startRecord:async function(a,b){const{api:c,args:d,callbackID:e,runtimeID:f}=b;return{errMsg:`${c}:ok`}},stopRecord:async function(a,b){const{api:c,args:d,callbackID:e,runtimeID:f}=b;return{errMsg:`${c}:ok`,localId:'wxLocalResource://voiceLocalId1234567890123'}},playVoice:async function(a,b){const{api:c,args:d,callbackID:e,runtimeID:f}=b;return{errMsg:`${c}:ok`}},pauseVoice:async function(a,b){const{api:c,args:d,callbackID:e,runtimeID:f}=b;return d.localId?{errMsg:`${c}:ok`}:{errMsg:`${c}:fail,missing localId`}},stopVoice:async function(a,b){const{api:c,args:d,callbackID:e,runtimeID:f}=b;return d.localId?{errMsg:`${c}:ok`}:{errMsg:`${c}:fail,missing localId`}},uploadVoice:async function(a,b){const{api:c,args:d,callbackID:e,runtimeID:f}=b;return d.localId?{errMsg:`${c}:ok`,serverId:'1237378768e7q8e7r8qwesafdasdfasdfaxss111'}:{errMsg:`${c}:fail,missing localId`}},downloadVoice:async function(a,b){const{api:c,args:d,callbackID:e,runtimeID:f}=b;return d.serverId?{errMsg:`${c}:ok`,localId:'wxLocalResource://voiceLocalId1234567890123'}:{errMsg:`${c}:fail,missing serverId`}},translateVoice:async function(b,c){const{api:d,args:e,callbackID:f,runtimeID:g}=c;return e.localId?{errMsg:`${d}:ok`,translateResult:a.config.SIMULATED_DEBUG_RESULT}:{errMsg:`${d}:fail,missing localId`}}}}(require('lazyload'),require);