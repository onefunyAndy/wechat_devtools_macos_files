'use strict';!function(require,directRequire){const a=require('ws').Server,b=require('fs'),c=require('path'),d=require('events'),{fork:e,spawn:f}=require('child_process'),g=require('chalk'),h=require('mkdir-p'),{devVendorList:i}=require('./ebfcad0a5e72b6e693634486564b1394.js'),j=c.join(c.dirname(process.argv[0]),'node'),k='o0sTXs3H-KD9fjhoF6HVHR77Q6_s',l=global.appConfig.isDev;let m=0;const n={},o='[REMOTE] ';chrome.windows.onRemoved.addListener((a)=>{n[a]&&n[a].destory()});module.exports=class{constructor(a){const{fileSort:b,fileRootPath:d,WeappRemoteTemp:f,WebSocketServer:g}=a;this.__fileSort__=b,this.__fileRootPath__=d,this.__tempFilePath__=f,this.__WebSocketServer__=g,this.__engineID__=m++,this.__fork_init=!1,this.__fork_msg_queue=[],this.__subprocess__=e(c.join(__dirname,'../../../libs/remotevm.js'),{execArgv:[],env:{fileSort:JSON.stringify(b),fileRootPath:d,tempFilePath:f,isDev:l,devVendorList:l?i:[],devVendorPath:l?c.join(__dirname,'../../../vendor/remotedev/'):''},execPath:j}),this.__subprocess__.on('message',(a)=>{const{type:b,data:c}=a;if('sendMsgToCli'===b){const a=JSON.stringify({cmd:203,openid:k,data:JSON.stringify(c)});console.warn(`${o} [send msg to svr] ${a}`),this.__WebSocketServer__.send(a)}else if('vm_init'===b){const b=a.url.replace('ws://',''),c=`chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=${b}`;chrome.windows.getAll((a)=>{const b={};a.forEach((a)=>{b[a.id]=!0}),nw.Window.open(c,{new_instance:!0,width:799,height:799},()=>{chrome.windows.getAll((a)=>{for(let c=0;c<a.length;c++)b[a[c].id]||(this.__windowId__=a[c].id,n[this.__windowId__]=this,console.warn(`${o} init devtools window`))})})}),this.__fork_init=!0,this.__fork_msg_queue.forEach((a)=>{this.onMessage(a)})}else'error'===b&&console.error(`${o} this.__subprocess__ revice error`)}),this.connection(),g.on('open',()=>{g.send(JSON.stringify({cmd:201,openid:k}))})}destory(){console.warn(`${o} destory ${this.__engineID__}`),this.__subprocess__.kill(),this.__WebSocketServer__.removeListener('connection',this.connection),delete n[this.__windowId__]}connection(){console.warn(`${o} connection ${this.__engineID__}`),this.__WebSocketServer__.onmessage=this.onMessage.bind(this),this.__WebSocketServer__.onclose=this.onClose.bind(this),this.__WebSocketServer__.onerror=this.onError.bind(this),this.__WebSocketServer__.onopen=this.onOpen.bind(this)}onOpen(){}onMessage(a){if(console.warn(`${o} ${this.__engineID__} onMessage`),!this.__fork_init)return console.warn(`${o} ${this.__engineID__} onMessage  push msg to queue`),void this.__fork_msg_queue.push(a);console.warn(`${o} ${this.__engineID__} onMessage msgdata: ${a.data}`);const d=JSON.parse(a.data);if(204==d.cmd){const e=JSON.parse(d.data);if('addInterface'===e.event)this.handleAddInterface(e);else if('evaluateJavascript'===e.event||e.pubLib)a.data&&500>a.data.length&&console.warn(`${o} ${this.__engineID__} onMessage evaluateJavascript ${a.data}`),this.handleEvaluateJavascript(e);else{const{callbackId:a,ret:d}=e;console.warn(`${o} ${this.__engineID__} onMessage sync callbackId: ${a} ret: ${d}`);const f=c.join(this.__tempFilePath__,`${a}`);b.writeFileSync(f,d)}}}onClose(){console.warn(`${o} onClose`),this.destory()}onError(){}handleAddInterface(a){this.__subprocess__.send({cliMsg:a,type:'handleAddInterface'})}handleEvaluateJavascript(a){this.__subprocess__.send({cliMsg:a,type:'handleEvaluateJavascript'})}}}(require('lazyload'),require);