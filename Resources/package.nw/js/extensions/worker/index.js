!function(e){function r(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,r),t.l=!0,t.exports}var o={};r.m=e,r.c=o,r.d=function(e,o,n){r.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,o){if(1&o&&(e=r(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var t in e)r.d(n,t,function(r){return e[r]}.bind(null,t));return n},r.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(o,"a",o),o},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=221)}({221:function(){const e={};let r=1;const o="run",n="triggerOnMsg",t="WeixinWorkerInvoke";WeixinWorker.create=(()=>{const n=new __global.Worker("__workerasdebug__/weixinworker.js");if(e[r]=n,n.onmessage=(e=>{if(e.data)switch(e.data.type){case t:switch(e.data.method){case"postMsgToAppService":e.data.arguments&&e.data.arguments.length&&WeixinWorker.workerMsgHandler&&WeixinWorker.workerMsgHandler.apply(WeixinWorker,e.data.arguments);break;case"postMsgToWorker":e.data.arguments&&e.data.arguments.length&&__WeixinWorker.postMsgToWorker.apply(__WeixinWorker,e.data.arguments)}}}),n.postMessage({type:o,code:"\n  WeixinWorker = {}\n  WeixinWorker.create = scriptName => {\n    self.postMessage({\n      type: 'WeixinWorkerInvoke',\n      method: 'create',\n      arguments: [WeixinWorker.__workerId__, scriptName],\n    })\n  }\n  WeixinWorker.terminate = workerId => {\n    self.postMessage({\n      type: 'WeixinWorkerInvoke',\n      method: 'terminate',\n      arguments: [WeixinWorker.__workerId__, workerId],\n    })\n  }\n  WeixinWorker.postMsgToWorker = (workerId, msg) => {\n    self.postMessage({\n      type: 'WeixinWorkerInvoke',\n      method: 'postMsgToWorker',\n      arguments: [WeixinWorker.__workerId__, workerId, msg],\n    })\n  }\n  WeixinWorker.postMsgToAppService = msg => {\n    try {\n      self.postMessage({\n        type: 'WeixinWorkerInvoke',\n        method: 'postMsgToAppService',\n        arguments: [WeixinWorker.__workerId__, JSON.parse(msg)],\n      })\n    } catch (err) {\n      console.error('send msg to appservice error: ', err)\n    }\n  }\n"+`\nWeixinWorker.__workerId__ = ${r}`}),n.postMessage({type:o,code:`__wxConfig = ${JSON.stringify(__wxConfig)}`}),!__workerVendors__||!__workerVendorCode__)throw new Error("missing worker vendor code");for(let e,r=0,t=__workerVendors__.length;r<t;r++){if(!(e=__workerVendorCode__[__workerVendors__[r]]))throw new Error("missing worker vendor code");n.postMessage({type:o,code:e})}if(!__workersCode__)return-1;for(let e in __workersCode__){let r=__workersCode__[e];n.postMessage({type:o,code:r})}return++r-1}),WeixinWorker.terminate=(r=>{const o=e[r];o&&(o.terminate(),delete e[r])}),WeixinWorker.postMsgToWorker=((r,o)=>{const t=e[r];if(t)try{t.postMessage({type:n,msg:JSON.parse(o)})}catch(e){console.error("post msg to worker err: [workerId] ",r," [msg] ",o)}})}});