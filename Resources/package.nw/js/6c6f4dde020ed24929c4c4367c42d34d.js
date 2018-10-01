"use strict";!function(require,directRequire){"use strict";var a=this&&this.__decorate||function(a,b,e,f){var g,d=arguments.length,c=3>d?b:null===f?f=Object.getOwnPropertyDescriptor(b,e):f;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(a,b,e,f);else for(var h=a.length-1;0<=h;h--)(g=a[h])&&(c=(3>d?g(c):3<d?g(b,e,c):g(b,e))||c);return 3<d&&c&&Object.defineProperty(b,e,c),c};Object.defineProperty(exports,"__esModule",{value:!0});const b=require('./02a96d04e49a39ea9d70e3d9d372379a.js'),c=require('./739d4ea3b9eb05a989e27e4786abec1a.js'),d=require("eventemitter3"),e=require('./a148d3a11fd5268109e21fb40c9d527b.js'),f=require('./46d7303eb986fa402d60bf5e929aa077.js'),g=require('./56a764ae9cb4336bf6babe1c1da0275b.js'),h=require('./ce02bd5f4368747c4e2fff84ed0fc0de.js'),i=require('./dd320c6b45ca97d2e34cfcab75e86aca.js'),j=require("path"),k=require("fs"),l=require('./c0fcfafba1db9bc540a87c2e027c9aa9.js'),m=require('./6c0b5b7853d43fa4652c05111ca481a7.js'),n=require('./50511dfc9594665ce5e4cf904d385402.js');let o=null;try{const a=require(f.isMac?"node-sync-ipc":"node-sync-ipc-nwjs");o=a.parent()}catch(a){o=null}const p=require('./e9e3fd38aeedddd6db73d1d015ff6952.js'),q=p.get("storage_remotedebug"),r=p.get("wxml_remotedebug"),s=p.get("appdata_remotedebug"),t=require('./66edba052030dfad3a8ba4f689be46c8.js'),u=require('./ebfcad0a5e72b6e693634486564b1394.js').devVendorList,{getAvailablePort:v}=require('./84b183688a46c9e2626d3e6f83365e13.js'),w=(()=>{let a=j.join(j.dirname(process.execPath),"node");return"darwin"!==process.platform&&(a+=".exe"),a})(),x=f.isDev?j.join(__dirname,"../../../libs/remote-helper.js"):j.join(__dirname,"./libs/remote-helper.js"),y=f.isDev?j.join(__dirname,"../../../vendor"):j.join(__dirname,"vendor"),z=g.default("[remotedebug]"),A=g.default("[cp]"),B=f.logInvoke(z),C=f.logStack(z),D=Symbol("storageNotFound"),E=(()=>{let a;return async function(b=!1){return!b&&a?Promise.resolve(a):(a=await v(),Promise.resolve(a))}})(),F=(()=>{let a;return async function(b=!1){return!b&&a?Promise.resolve(a):(a=await v(),Promise.resolve(a))}})(),G=(()=>{let a;return async function(b=!1){return!b&&a?Promise.resolve(a):(a=await v(),Promise.resolve(a))}})(),H={request:1,download:2,upload:3,socket:4,1:"request",2:"download",3:"upload",4:"socket"};class I extends d.EventEmitter{constructor(a){super(),this.deviceInfo=void 0,this.debugServer=null,this.clientNetworkType=void 0,this.clientNetworkSpeed=void 0,this.clientNetworkInterval=0,this.currentSyncSdkName=void 0,this.currentSyncSdkCallId=void 0,this.currentSyncSdkResolver=null,this.messager=null,this.cpReady=!1,this.debugMessageQueued=!1,this.destroyed=!1,this.usingLocalStorage=!1,this.clientProxyPort=void 0,this.debuggerStatus=0,this.debuggerStatusChangeTimeout=void 0,this.cpQueue=[],this.msQueue=[],this.cp=null,this.lastEvalTime=void 0,this.delayedQueue=[],this._askForRetryFn=()=>Promise.resolve(!1),this.autoPingTimeout=void 0,this.autoSaveStorageTimeout=void 0,this.lastPongResponse=void 0,this._storageCache=null,this._onRemoteDebugMessage=void 0,this._onWxmlRemoteDebugMessage=void 0,this._onAppDataRemoteDebugMessage=void 0,this._onRemoteDebugDevtoolsMessage=void 0,this.webviewInfos=null,this.networkDebugMaps={request:{},download:{},upload:{},socket:{}},this.clientSupportCompressAlgo=[],this.cpExchangeResolvers={},this.jsContextIdNames={},this.currentJsContextId="",this.cdpEnabled=!!a.cdpEnabled,this.files=a.files,this.dir=a.dir,this.dataDir=a.dataDir,this.tempDir=a.tempDir,this.initialRoomInfo=Object.assign({},a.initialRoomInfo),this.mode=a.mode||"server",this.usingLocalStorage=!!(a.config||{}).usingLocalStorage,this.clientProxyPort=a.clientProxyPort}onAskForRetry(a){this._askForRetryFn=a,this.messager&&this.messager.onAskForRetry(a)}onAskForChoosingAndroidDevice(a){this._askForChoosingAndroidDevice=a}onAskForAndroidAuthorize(a){this._askForAndroidAuthorize=a}onOpenEditorFile(a){this._openEditorFileFn=a}changeDebuggerStatus(a){this.debuggerStatus=a,this.debuggerStatusChangeTimeout||(this.debuggerStatusChangeTimeout=setTimeout(()=>{this.debuggerStatusChangeTimeout=void 0,this.onDebuggerStatusChange()},500))}async init(){if(global.rd=this,!o)throw z.e("node-sync-ipc is broken"),new Error("node-sync-ipc is broken.");this.messager&&(this.messager.removeAllListeners(),this.messager.destroy());let a;if("android"===this.mode){let b,c=null;try{const d=async()=>{if(!(c&&"device"===c.type.toLowerCase())){const a=await i.listDevices();if(1<a.length){if(z.i("found a lot of android devices",a),c&&0<=a.findIndex((a)=>a.id===c.id)){const d=a.findIndex((a)=>a.id===c.id);b=d}else if(this._askForChoosingAndroidDevice){const c=await this._askForChoosingAndroidDevice(a);if("number"==typeof c)b=c;else throw new Error("unrecognized index "+c)}else throw new Error("choose android function not set");}else if(1>a.length)throw z.i("no android devices found"),new Error("no android devices found");else b=0;if(c=a[b],"device"!==c.type.toLowerCase()){if(this._askForAndroidAuthorize){const a=await this._askForAndroidAuthorize(c);if(!a)throw new Error("user reject authorize")}else throw new Error("android authorize function not set");await d()}}};if(await d(),c)a=c.id;else throw new Error("no valid android device")}catch(a){throw a}}const d=await F(!0);this.debugServer=new h.DebugServer({port:d,mode:this.mode,androidDeviceId:a,clientProxyPort:this.clientProxyPort}),this.messager="server"===this.mode?new b.Messager({tempDir:this.tempDir,initialRoomInfo:this.initialRoomInfo}):new c.LocalMessager({roomInfo:this.initialRoomInfo,debugServerPort:d,debugServer:this.debugServer}),this.debugServer.on("cpmessage",this.onCpWsMessage.bind(this)),this.messager.on("statuschange",this.onMessagerStatusChange.bind(this)),this.messager.on("debugmessage",this.onDebugMessage.bind(this)),this.messager.onAskForRetry(this._askForRetryFn),this.messager.on("accident",this.onMessagerAccident.bind(this)),this.messager.on("event",this.onMessagerEvent.bind(this)),this.messager.on("datasendreport",this.onMessagerDataSendReport.bind(this));try{await this.messager.init(),await this.debugServer.init()}catch(a){throw z.e(a),a}const e=this.destroy.bind(this);if(this.messager.on("destroy",this.onMessagerDestroy.bind(this)),this.cdpEnabled)return void this.onCpMessage({type:"vmReady",data:{inspectUrl:""}});const g={wsurl:`ws://127.0.0.1:${d}`,httpPort:(global.proxyPort||9973)+"",initialInspectPort:(await E(!0))+"",dir:this.dir,tempDir:this.tempDir,dataDir:this.dataDir,usingLocalStorage:this.usingLocalStorage?"yes":"no",isDev:f.isDev?"yes":"no",files:JSON.stringify(this.files),vendorDir:y},j=this.cp=o.fork(x,[],{execPath:w,env:g});j.stdout&&j.stdout.setEncoding("utf8"),j.on("message",this.onCpMessage.bind(this)),j.onSync("sdksyncapi",this.onCpSyncMessage.bind(this)),j.onSync("sdkstorageapi",this.onCpStorageMessage.bind(this)),this.messager.on("destroy",this.onMessagerDestroy.bind(this)),j.on("disconnect",e),j.on("close",e),j.on("exit",(a)=>{z.w("cp exited with code "+a),e("child process exit "+a)}),j.on("error",(a)=>{z.e("cp encountered error",a&&a.toString()),e(a&&a.toString())})}onDebuggerStatusChange(){const a={is_hit:this.debuggerStatus};this.sendMessageToClient(a,e.DebugMessageCategory.Breakpoint),this.emit("statuschange")}onMessagerStatusChange(a){if(a<=b.ConnectionStatus.Dead){this.currentSyncSdkResolver&&this.currentSyncSdkResolver("debug session end");this.sendMessageToCp({type:"debugEnable",data:{enabled:!1}})}else if(0<this.msQueue.length){const a=[...this.msQueue];this.msQueue=[];for(const b of a)this.sendMessageToClient(b.message,b.category,b.extra)}a>=b.ConnectionStatus.ServerBlocked&&!this.autoPingTimeout?this.enableAutoPing():a<b.ConnectionStatus.ServerBlocked&&this.autoPingTimeout&&(clearTimeout(this.autoPingTimeout),this.lastPongResponse=void 0),this.emit("statuschange")}onMessagerDataSendReport(a){l.reportData(this.initialRoomInfo.appid,l.ReportType.DataSend,a)}onMessagerAccident(){this.emit("statuschange")}onMessagerEvent(a){this.emit("event",a)}onMessagerDestroy(){}onCpWsMessage(a){if("string"==typeof a)try{const b=JSON.parse(a);this.onCpMessage(b)}catch(b){z.e("error parsing cp ws message",a)}else if(a&&a.data)try{const b=JSON.parse(a.data);this.onCpMessage(b)}catch(b){z.e("error parsing cp ws message",a.data)}else z.w("invalid cp ws message",a)}async onCpMessage(a){if("sendMessageToClient"===a.type)return void this.sendMessageToClient(a.data.debugObject,a.data.category,a.data.extra);if("vmReady"===a.type){if(this.cpReady)return void z.w("received vm ready while cp ready");const b=a.data.inspectUrl.replace(/^ws\:\/\//i,""),c=await G();this.cdpEnabled&&(this.cdp=new n.default({port:c}),this.cdp.on("chromemessage",this.onCDPChromeMessage.bind(this)),await this.cdp.init());const d=this.cdpEnabled?`127.0.0.1:${c}`:b,e=this.cdpEnabled?`chrome-devtools://devtools/bundled/inspector.html?v8only=true&experiments=true&ws=${d}`:`chrome-devtools://devtools/bundled/inspector.html?experiments=true&ws=${d}`;this.cpReady=!0,this.processCpQueue(),setTimeout(()=>this.emit("initsuccess",{url:e}),0),q.register(this._onRemoteDebugMessage=this.onRemoteDebugMessage.bind(this)),r.register(this._onWxmlRemoteDebugMessage=this.onWxmlRemoteDebugMessage.bind(this)),s.register(this._onAppDataRemoteDebugMessage=this.onAppDataRemoteDebugMessage.bind(this)),t.register(this._onRemoteDebugDevtoolsMessage=this.onRemoteDebugDevtoolsMessage.bind(this)),t.ready=!0}else"error"===a.type?A.e(a.data.error):"wxpagesinfo"===a.type?this.onWxPageRoute(a.data):"wxappdatas"===a.type?this.onWXAppDatas(a.data):"sdkapireport"===a.type?this.onSdkApiReport(a.data):"networkdebug"===a.type?this.onNetworkDebug(a.data,a.timestamp):"exchange"===a.type?this.onCpExchangeResult(a.id,a.result):z.w("invalid cp message type",a)}onCDPChromeMessage(a){const b={op_id:Math.round(100*Math.random()),payload:a,jscontext_id:this.currentJsContextId};this.sendMessageToClient(b,e.DebugMessageCategory.ChromeDevtools,{len:a.length})}onClientCDPResult(a){a.jscontext_id!==this.currentJsContextId&&(z.w("incoming cdp context id",a.jscontext_id,"dost not match",this.currentJsContextId),a.jscontext_id="");const b=a.payload;this.cdp&&this.cdp.sendMessageToChromeInstance(b)}onCpExchangeResult(a,b){const c=this.cpExchangeResolvers[a];c&&c.resolve&&c.resolve.call(this,b),delete this.cpExchangeResolvers[a]}cpExchange(a,b,c){return new Promise((d,e)=>{const g=f.randomString();c?d():this.cpExchangeResolvers[g]={resolve:d,reject:e},this.sendMessageToCp({type:"exchange",id:g,command:a,data:b})})}async onRemoteDebugDevtoolsMessage(a){const{command:b,data:c}=a;if("Network.getResponseBody"===b){const a=c.params||{},b=(a.requestId||"").split("."),d=b[0],e=b[1],f=H[d];if(f){let a=await this.cpExchange("getNetworkResponseBody",{id:e,api:f});a=a||"",t.send({command:"DISPATCH_MESSAGE",data:{id:c.id,result:{body:a,base64Encoded:!1}}})}}else"RESET_NETWORK_CACHE"===b&&this.cpExchange("resetNetworkCache",void 0,!0)}onNetworkDebug(a,b){const c=H[a.api],d=`${c}.${a.id}`,e=a.state,f=a.api,g=this.networkDebugMaps[f];if(!g[d])return void z.w("no record for",a.id,"on network debug");if("headersReceived"===e){if(g[d]=Object.assign({},g[d]||{},{state:a.state,responseHeaders:a.responseHeaders,responseReceivedTimestamp:b||Date.now()}),"open"===a.websocketState){const a={method:"Network.responseReceived",params:{requestId:d,timestamp:(g[d].responseReceivedTimestamp||Date.now())/1e3,type:"XHR",response:{url:g[d].url,status:g[d].statusCode||101,statusText:g[d].statusText||"Switching Protocols",headers:g[d].responseHeaders,connectionId:d,timing:{requestTime:(b||Date.now())/1e3,proxyStart:-1,proxyEnd:-1,dnsStart:-1,dnsEnd:-1,connectStart:-1,connectEnd:-1,sslStart:-1,sslEnd:-1,workerStart:-1,workerReady:-1,sendStart:-1,sendEnd:-1,pushStart:0,pushEnd:0,receiveHeadersEnd:(g[d].responseReceivedTimestamp||0)-(b||Date.now())||-1},protocol:"HTTP/1.1"}}};t.send({command:"DISPATCH_MESSAGE",data:a})}}else if("dataReceived"===e){const c=g[d].datasReceived||[],e={dataLength:a.dataLength,timestamp:b||Date.now()};c.push(e),g[d]=Object.assign({},g[d]||{},{state:a.state,datasReceived:c,dataLength:a.dataLength});const f={method:"Network.dataReceived",params:{requestId:d,timestamp:e.timestamp/1e3,dataLength:a.dataLength,encodedDataLength:a.dataLength}};t.send({command:"DISPATCH_MESSAGE",data:f})}else if("dataSent"===e){const c=g[d].datasSent||[],e={dataLength:a.dataLength,timestamp:b||Date.now()};c.push(e),g[d]=Object.assign({},g[d]||{},{state:a.state,datasSent:c,dataSentLength:a.dataLength})}else if("success"===e){g[d]=Object.assign({},g[d]||{},{state:a.state,statusCode:a.statusCode,statusText:a.statusText,finishedTimestamp:b||Date.now(),dataLength:a.dataLength||g[d].dataLength});const c=g[d].datasSent||[];let e=-1,f=-1;0<c.length&&(e=0,f=(g[d].requestTimestamp||0)-(c[c.length-1].timestamp||0));const h={method:"Network.responseReceived",params:{requestId:d,timestamp:(g[d].responseReceivedTimestamp||Date.now())/1e3,type:"XHR",response:{url:g[d].url,status:g[d].statusCode,statusText:g[d].statusText||"",headers:g[d].responseHeaders,connectionId:d,timing:{requestTime:(g[d].requestTimestamp||Date.now())/1e3,proxyStart:-1,proxyEnd:-1,dnsStart:-1,dnsEnd:-1,connectStart:-1,connectEnd:-1,sslStart:-1,sslEnd:-1,workerStart:-1,workerReady:-1,sendStart:e,sendEnd:f,pushStart:0,pushEnd:0,receiveHeadersEnd:(g[d].responseReceivedTimestamp||0)-(b||Date.now())||-1},protocol:"HTTP/1.1"}}},i={method:"Network.loadingFinished",params:{requestId:d,timestamp:(g[d].finishedTimestamp||Date.now())/1e3,dataLength:g[d].dataLength,encodedDataLength:g[d].dataLength}};"close"!==a.websocketState&&t.send({command:"DISPATCH_MESSAGE",data:h}),t.send({command:"DISPATCH_MESSAGE",data:i})}else"fail"===e&&(g[d]=Object.assign({},g[d]||{},{state:a.state,finishedTimestamp:b||Date.now()}),t.send({command:"DISPATCH_MESSAGE",data:{method:"Network.loadingFailed",params:{requestId:d,timestamp:(g[d].finishedTimestamp||Date.now())/1e3,type:"XHR",errorText:"request failed",canceled:!1}}}))}processCpQueue(){const a=[...this.cpQueue];this.cpQueue=[];for(const b of a)this.sendMessageToCp(b)}onSdkApiReport(a){l.reportData(this.initialRoomInfo.appid,l.ReportType.SDKAPI,a)}onWxPageRoute(a={}){this.webviewInfos={currentWebviewId:a.currentWebviewId||0,webviewIds:a.webviewIds||[]};const b=(this.webviewInfos||{}).webviewIds||[],c={};for(const d in b){const a=this.webviewInfos.webviewIds[d];c[a]={targetId:a}}r.ready=!0,r.triggerOnEvent("CHANGE_DEBUGGEE",{debuggee:{targetId:((this.webviewInfos||{}).currentWebviewId||0)+""},debuggeeMap:c,device:{width:(this.deviceInfo||{}).screenWidth||320,dpr:(this.deviceInfo||{}).pixelRatio||2}})}onWxmlRemoteDebugMessage(a){if(!a||!a.command)return void z.w("invalid wxmlRemoteDebugMessager message");const{data:b,command:c}=a,d=a;if("GET_CURRENT_DEBUGGEE"===c){r.ready=!0;const a={},b=(this.webviewInfos||{}).webviewIds||[];for(const c in b){const d=b[c];a[d]={targetId:d}}r.triggerOnEvent("CHANGE_DEBUGGEE",{debuggee:{targetId:((this.webviewInfos||{}).currentWebviewId||0)+""},debuggeeMap:a,device:{width:(this.deviceInfo||{}).screenWidth||320,dpr:(this.deviceInfo||{}).pixelRatio||2}})}else if("SEND_COMMAND"===c){const a={method:b.method,commandParams:b.commandParams,callbackID:b.callbackID||d.callbackID},c=f.tryCatch(()=>f.jsonStringify(a));if(f.invalidTryCatchResult(c))return void z.e("invalid SEND_COMMAND params",a);const g={params:c,webview_id:(this.webviewInfos||{}).currentWebviewId||0};this.sendMessageToClient(g,e.DebugMessageCategory.DomOp,{len:c.length})}else if("OPEN_FILE"===c)"function"==typeof this._openEditorFileFn&&this._openEditorFileFn(b),z.i("opening file",b);else if("ON_PANEL_HIDE"===c)z.i("wxml panel hide");else if("ON_PANEL_SHOW"===c)z.i("wxml panel show");else if("HIDE_INSPECT_MODE"==c){const a={method:"DOM.hideHighlight",commandParams:{}},b=f.tryCatch(()=>f.jsonStringify(a));if(f.invalidTryCatchResult(b))return void z.e("invalid SEND_COMMAND params",a);const c={params:b,webview_id:(this.webviewInfos||{}).currentWebviewId||0};this.sendMessageToClient(c,e.DebugMessageCategory.DomOp,{len:b.length})}else z.w("unrecognized wxml command",c,b)}setInspectMode(a){const b=f.tryCatch(()=>f.jsonStringify({method:"Overlay.setInspectMode",commandParams:{mode:a}}));if(f.invalidTryCatchResult(b))return void z.w("invalid params str");const c={webview_id:(this.webviewInfos||{}).currentWebviewId||0,params:b};this.sendMessageToClient(c,e.DebugMessageCategory.DomOp,{len:b.length})}onRemoteDebugMessage(a){if(!a||!a.command)return void z.w("invalid remoteDebugMessager message");const{command:b,data:c}=a;return"STORAGE_PANNEL_SHOW"===b?(q.ready=!0,void this.notifyStorageUpdate()):"STORAGE_PANNEL_HIDE"===b?void(q.ready=!1):"EXEC_STORAGE_SDK"===b?void(c?this.sdkStorageOperate(c.api,c.args):z.e("invalid remoteDebugMessager storage operation")):void f.expectFail.fail(()=>{z.e("invalid remoteDebugMessager command",b)})}onAppDataRemoteDebugMessage(a){if(!a||!a.command)return void z.w("invalid AppDataRemoteDebugMessager message");const{command:b,data:c}=a;s.ready=!0,"GET_APP_DATA"===b?this.getAppDatas():"WRITE_APP_DATA"===b?this.setAppDatas(c):z.w("invalid AppDataRemoteDebugMessager command",b)}getAppDatas(){this.sendMessageToCp({type:"getWXAppDatas"})}setAppDatas(a){this.sendMessageToCp({type:"setWXAppDatas",data:a})}onWXAppDatas(a){s.triggerOnEvent("SEND_APP_DATA",a)}notifyStorageUpdate(){if(q&&q.ready){const a=this.storage,b=Object.keys(a),c={};for(const a of b)try{const b=this.sdkStorageOperate("getStorageSync",{key:a});b&&(delete b.errMsg,c[a]=b)}catch(b){z.e("error notify storage update",a)}q.triggerOnEvent("UPDATE_STORAGE",c)}}get storage(){if(!this._storageCache){const a=j.join(this.dataDir,"storage");try{const b=k.readFileSync(a,"utf-8");this._storageCache=JSON.parse(b)}catch(b){z.e("error loading storage cache from",a),this._storageCache={}}}return this._storageCache}autoSaveStorage(){this.autoSaveStorageTimeout||(this.autoSaveStorageTimeout=setTimeout(()=>{this.autoSaveStorageTimeout=void 0;const a=j.join(this.dataDir,"storage"),b=this.storage;try{const c=JSON.stringify(b);k.writeFileSync(a,c,"utf-8")}catch(b){z.e("saving storage file",a,"failed")}this.notifyStorageUpdate()},0))}storageOperate(a,b,c){const d=this.storage;if(!d)throw new Error("storage invalid");if("get"===a){if(!d.hasOwnProperty(b))return D;const a=d[b];return JSON.parse(a)}if("set"===a)d[b]=JSON.stringify(c),this.autoSaveStorage();else if("remove"===a)delete d[b],this.autoSaveStorage();else if("clear"===a){for(const a in d)delete d[a];this.autoSaveStorage()}else{const a={keys:Object.keys(d),limitSize:10240};let b=0;for(const a in d)b+=d[a].length;return b=Math.ceil(b/1024),a.currentSize=b,a}}sdkStorageOperate(a,b){let c;if("getStorage"===a||"getStorageSync"===a){const d=b.key;let e=this.storageOperate("get",d);if(e===D)c={errMsg:`${a}:fail data not found`};else{const b=Object.prototype.toString.call(e).slice(8,-1);"string"!==b.toLowerCase()&&(e=JSON.stringify(e)),c={errMsg:`${a}:ok`,data:e,dataType:b}}}else if("setStorage"===a||"setStorageSync"===a){const d=b,e=d.key;let f=d.data;const g=d.dataType;"string"!==g.toLowerCase()&&(f=JSON.parse(f)),this.storageOperate("set",e,f),c={errMsg:`${a}:ok`}}else if("removeStorage"===a||"removeStorageSync"===a){const d=b.key;this.storageOperate("remove",d),c={errMsg:`${a}:ok`}}else if("clearStorage"===a||"clearStorageSync"===a){this.storageOperate("clear"),c={errMsg:`${a}:ok`}}else c="getStorageInfo"===a||"getStorageInfoSync"===a?Object.assign({},this.storageOperate("info")||{},{errMsg:`${a}:ok`}):void 0;return c}onCpStorageMessage(a,b){if(f.expect(this.usingLocalStorage,z).toFuzzyEqual(!0).fail(()=>{z.e("operating local storage while using local storage is false")}),!b||!b.data||!b.data.debugObject){return void a({error:"debug message broken"})}const c=b.data.debugObject||{},d=c.args||[],e=d[0],g=d[1],h=parseInt(d[2],10),i=isNaN(h)?0:h;let j;try{if(j=this.sdkStorageOperate(e,JSON.parse(g)),!j)throw new Error("invalid sdk invoke")}catch(b){return void a({error:b+""})}const k={error:void 0,result:f.jsonStringify(j)};a(k)}onCpSyncMessage(a,b){if(!b||!b.data||!b.data.debugObject){return void a({error:"debug message broken"})}const c=b.data.debugObject,d=b.data.extra;d&&d.sdkName?this.currentSyncSdkName=d.sdkName:(z.w("invalid sync sdk name"),this.currentSyncSdkName="<unknown>"),this.currentSyncSdkCallId=c.call_id;const e=setTimeout(()=>{this.currentSyncSdkResolver&&this.currentSyncSdkResolver("timeout")},15000);this.currentSyncSdkResolver=(b,c)=>{clearTimeout(e),this.currentSyncSdkResolver=null,this.currentSyncSdkName=void 0,this.currentSyncSdkCallId=void 0;const d={error:b?b:void 0,result:c?c.ret:void 0};a(d),this.emit("statuschange")},this.onCpMessage(b),this.emit("statuschange")}sendMessageToClient(a,b,c){if(this.messager){const d=c&&c.len||0,f=256<d?this.clientSupportCompressAlgo[0]||e.CompressAlgo.None:e.CompressAlgo.None;this.messager.sendDebugMessage(a,b,c,f)}else z.w("messager is not ready sending debug messages"),this.msQueue.push({message:a,category:b,extra:c})}onDebugMessage(a){return a.category===e.DebugMessageCategory.Pong?(z.i("got pong response"),void this.handleDebugMessage(a)):void(this.delayedQueue.push(a),2>this.delayedQueue.length&&this.processDelayedQueue())}processDelayedQueue(){const a=Date.now();for(let b=!1;f.expect(Date.now(),z).as((b)=>10000>b-a).fail(()=>{z.e("loop processDelayedQueue running too long"),b=!0}).fail(()=>{this.emit("event",{type:"assertion",kind:"error",message:"processDelayedQueue loop too long"})}),!b;){const a=this.delayedQueue.shift();if(!a)break;const b=parseInt(a.delay+"",10),c=isNaN(b)?0:b;if(!this.lastEvalTime){this.lastEvalTime=Date.now(),this.handleDebugMessage(a);continue}this.lastEvalTime=Date.now(),this.handleDebugMessage(a)}}handleDebugMessage(a){const b=a.data||{};this.lastPongResponse=Date.now();const c=a.category;if(c===e.DebugMessageCategory.EvaluateJavascript)return void this.handleEvaluateJavascript(b);if(c===e.DebugMessageCategory.CallInterfaceResult)return void this.handleCallInterfaceResult(b);if(c===e.DebugMessageCategory.SetupContext)return void this.handleSetupContext(b);if(c===e.DebugMessageCategory.Pong){const{ping_id:a,network_type:c}=b;let d;return a&&(d=Date.now()-a,z.i("delta =",d),f.expect(d,z).as((a)=>0<=a).fail(()=>{z.e("something went wrong with ping id",a);this.emit("event",{kind:"warn",type:"assertion",message:"ping id is greater than current date"}),d=0-d})),void this.onClientNetworkChange(c,d)}return c===e.DebugMessageCategory.DomEvent?void this.onDomEvent(b):c===e.DebugMessageCategory.NetworkDebugAPI?void this.onNetworkDebugAPI(b):c===e.DebugMessageCategory.ChromeDevtoolsResult?void this.onClientCDPResult(b):c===e.DebugMessageCategory.AddJsContext?void this.onAddJsContext(b):c===e.DebugMessageCategory.RemoveJsContext?void this.onRemoveJsContext(b):void z.e("received invalid debug category",c)}useJsContextId(a){if(this.jsContextIdNames[a]){this.currentJsContextId=a;this.sendMessageToClient({jscontext_id:a},e.DebugMessageCategory.ConnectJsContext),this.emit("jscontextchange")}else z.w("using non-exists context id",a)}onAddJsContext(a){const b=a.jscontext_id,c=a.jscontext_name||"?";return b?void(this.jsContextIdNames[b]=c,!this.currentJsContextId&&this.useJsContextId(b)):void z.w("invalid jscontext id",b)}onRemoveJsContext(a){const b=a.jscontext_id;"number"==typeof b&&delete this.jsContextIdNames[b]}async onNetworkDebugAPI(a){if(!a||!a.task_id||!a.api_name||!a.request_headers)return void z.w("invalid network debug",a);const b=a.task_id;a.api_name=a.api_name.toLowerCase();const c=H[a.api_name],d=`${c}.${b}`,e=this.networkDebugMaps[a.api_name];e[d]&&z.w(a.api_name,"network debug existing task id",d);const g=f.tryCatch(()=>f.jsonParse(a.request_headers));if(f.invalidTryCatchResult(g))return void z.w("broken request header",a.request_headers);e[d]=Object.assign({},e[d]||{},{requestHeaders:g,requestTimestamp:+(a.timestamp||Date.now()).toString()});let h=await this.cpExchange("getNetworkRequestInfo",{id:b,api:a.api_name});if(h=h||{},e[d].url=h.url,e[d].method=h.method,"object"===f.typeOf(h.data))try{h.data=f.jsonStringify(h.data)}catch(a){z.e(a)}const i={method:"Network.requestWillBeSent",params:{requestId:d,documentURL:g.Referer,request:{url:h.url,method:h.method,postData:h.data,headers:g},timestamp:(e[d].requestTimestamp||Date.now())/1e3,type:"XHR"}};t.send({command:"DISPATCH_MESSAGE",data:i})}onDomEvent(a={}){const{params:b,webview_id:c}=a;if(!b||!c)return void z.e("invalid dom event object",a);const d=parseInt(c,10),e=f.tryCatch(()=>f.jsonParse(b));return f.invalidTryCatchResult(e)||isNaN(d)?void z.e("invalid dom event params or webview id",e,d):e&&e.command?void("DEBUGGEE_CALLBACK"==e.command?r.callback(e.callbackID,e.data):"DEBUGGEE_EVENT"==e.command?r.triggerOnEvent("ON_EVENT",e.data):r.triggerOnEvent(e.command,e.data)):void z.e("invalid dom event params",e)}onClientNetworkChange(a,b){"server"===this.mode?"number"==typeof a&&(this.clientNetworkType=a):this.clientNetworkType="ios"===this.mode?e.ClientNetWorkType.IOSCable:e.ClientNetWorkType.AndroidCable,"number"==typeof b&&(this.clientNetworkSpeed=300>b?e.ClientNetWorkSpeed.VeryGood:600>b?e.ClientNetWorkSpeed.Good:1e3>b?e.ClientNetWorkSpeed.Normal:5e3>b?e.ClientNetWorkSpeed.Bad:1e4>b?e.ClientNetWorkSpeed.VeryBad:e.ClientNetWorkSpeed.Lost,this.clientNetworkInterval=b),this.emit("statuschange")}enableAutoPing(){this.autoPingTimeout&&(z.w("already auto ping timeout"),clearTimeout(this.autoPingTimeout),this.lastPongResponse=void 0);const a=()=>{let b=!1;if("number"==typeof this.lastPongResponse&&10000<Date.now()-this.lastPongResponse&&(b=!0,this.onPingTimeout()),!b){const a={ping_id:Date.now()};this.sendMessageToClient(a,e.DebugMessageCategory.Ping,{len:13})}this.autoPingTimeout=setTimeout(a,6000)};this.autoPingTimeout=setTimeout(a,0)}onPingTimeout(){this.onClientNetworkChange(e.ClientNetWorkType.Offline,Infinity)}async handleSetupContext(a){a&&a.public_js_md5&&"63b14c17ccc359080cb7df60f31bb5f3"===a.public_js_md5&&(a.public_js_md5="0b62758bc9c05f817162b1104e800161"),a&&a.support_compress_algo&&0!=(a.support_compress_algo&e.CompressAlgo.Zlib)&&this.clientSupportCompressAlgo.push(e.CompressAlgo.Zlib);const b=a.device_info||{};this.deviceInfo=b,this.debugMessageQueued=!0;const c=this.cpQueue.length;if(b.publib){const a=b.publib,c="WAService.js";try{const{content:b,version:d}=await m.getFile(c,a);k.writeFileSync(j.join(this.tempDir,c),b,"utf-8"),this.deviceInfo.displayPublib=d,this.emit("statuschange")}catch(a){z.e("get publib failed "+a)}}this.debugMessageQueued=!1;this.cpQueue.splice(c,0,{type:"handleSetupContext",data:a}),this.processCpQueue()}async handleCallInterfaceResult(a){const{call_id:b,ret:c}=a;if(this.currentSyncSdkCallId===b&&this.currentSyncSdkResolver)return this.currentSyncSdkResolver(void 0,a),void this.emit("statuschange");this.sendMessageToCp({data:a,type:"handleCallInterfaceResult"})}handleEvaluateJavascript(a){this.sendMessageToCp({data:a,type:"handleEvaluateJavascript"})}sendMessageToCp(a){!this.debugMessageQueued&&this.cpReady&&this.cp&&this.debugServer?this.debugServer.sendMessageToCp(JSON.stringify(a)):(this.cpQueue.push(a),z.w("cp is not ready sending messages",a))}destroy(a){if(this.destroyed)return void z.w("already destroyed");if(this.destroyed=!0,this.cpReady||(z.w("destroy before cp ready"),setTimeout(()=>this.emit("initfail",a))),this.cp){const a=this.cp;setTimeout(()=>{f.tryCatch(()=>a.removeAllListeners()),f.tryCatch(()=>a.kill())},0)}if(this.cp=null,this.cpReady=!1,this.messager){const a=this.messager;a.removeAllListeners(),setTimeout(()=>{a.destroy()},0)}this.messager=null,this.debugServer&&(this.debugServer.removeAllListeners(),this.debugServer.destroy(),this.debugServer=null),"android"===this.mode&&i.kill().catch((a)=>z.w(a)),this.autoPingTimeout&&clearTimeout(this.autoPingTimeout),this._onRemoteDebugMessage&&q.unRegister(this._onRemoteDebugMessage),this._onWxmlRemoteDebugMessage&&r.unRegister(this._onWxmlRemoteDebugMessage),this._onAppDataRemoteDebugMessage&&s.unRegister(this._onAppDataRemoteDebugMessage),this._onRemoteDebugDevtoolsMessage&&t.unRegister(this._onRemoteDebugDevtoolsMessage),this.cdp&&(this.cdp.destroy(),this.cdp=void 0),this.emit("destroy",a)}}a([B],I.prototype,"changeDebuggerStatus",null),a([B],I.prototype,"onCDPChromeMessage",null),a([B],I.prototype,"onClientCDPResult",null),a([B],I.prototype,"onCpExchangeResult",null),a([B],I.prototype,"cpExchange",null),a([B],I.prototype,"onWxmlRemoteDebugMessage",null),a([B],I.prototype,"setInspectMode",null),a([B],I.prototype,"onRemoteDebugMessage",null),a([B],I.prototype,"onAppDataRemoteDebugMessage",null),a([B],I.prototype,"getAppDatas",null),a([B],I.prototype,"setAppDatas",null),a([B],I.prototype,"onWXAppDatas",null),a([B],I.prototype,"notifyStorageUpdate",null),a([B],I.prototype,"onCpStorageMessage",null),a([B],I.prototype,"onCpSyncMessage",null),a([B],I.prototype,"useJsContextId",null),a([B],I.prototype,"onAddJsContext",null),a([B],I.prototype,"onRemoveJsContext",null),a([B],I.prototype,"onNetworkDebugAPI",null),a([B],I.prototype,"onDomEvent",null),a([B],I.prototype,"onClientNetworkChange",null),a([B],I.prototype,"onPingTimeout",null),a([B],I.prototype,"handleSetupContext",null),a([C],I.prototype,"destroy",null),exports.RemoteDebug=I}(require("lazyload"),require);