'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('fs'),b=require('path'),c=require('mkdir-p'),d=require('./5321b622f9bab971490e99e09b2389a9.js'),f=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),e=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),g=require('./3e74bc0c6a5fa450386148788cc0cf44.js'),h=require('./db2217eb4cff896bdcbc50abe005058f.js'),i=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),j=require('./874074ba4ecebc4e49310ccc42243ff5.js'),k=require('./3bfffbe88b3d923921f851c0697974fe.js'),l=require('./3892cb9d0783075a973c350c41401370.js'),m=(d,e)=>{for(let f,g=0,h=e.length;g<h;g++)f=b.join(d,e[g].FunctionName),a.existsSync(f)||c.sync(f)},n=async(a)=>{const b=k.getCurrentTcbInfo();let c=b.currentEnv&&b.currentEnv.namespace;if(c)return c;let d,e=(await o()(a))||[];if(0>=e.length)(d=h.get(i.WINDOW_REGISTRY.CLOUD_CONSOLE))?d.focus():a({type:f.WINDOW_SET_CLOUD,data:{console:{show:!0}}});else{if(1==e.length)return a(p(0)),c=e[0].namespace,c;(d=h.get(i.WINDOW_REGISTRY.CLOUD_SCF_ACTION))?d.focus():a({type:f.WINDOW_SET_CLOUD,data:{fnaction:{show:!0},cloudfunctionRoot:{show:!0}}})}},o=()=>{return async(a)=>{try{let b=await g.getEnvList();return a({type:f.TCB_SET_ENV_LIST,data:b.env_list}),b.env_list}catch(b){a({type:f.INFO_SHOW_ERROR,data:{message:b.toString()}})}}},p=(a)=>{return{type:f.TCB_SELECT_ENV,data:a}},q=(a)=>{return async(c,e)=>{try{let h=await n(c,e);if(!h)return;const i=e(),j=i.project.current||{},k=b.join(j.projectpath,j.cloudfunctionRoot);a.showTips&&c(w({show:!0,title:'\u6B63\u5728\u540C\u6B65\u4E91\u51FD\u6570\u5217\u8868',content:'',showCancel:!1,showLoading:!0}));let l=`${Date.now()}${Math.random()}`,o=await g.getTcbFuncList({namespace:h,pageIndex:0,pageSize:d.FUNC_LIST_PAGE_SIZE}),p=[].concat(o.Functions);if(a.writeFile&&m(k,o.Functions),c({type:f.TCB_SET_SCF_LIST,data:{list:o.Functions,pageIndex:0,total:o.total,namespace:h,updateKey:l}}),o.total>d.FUNC_LIST_PAGE_SIZE){let b=parseInt((o.total-1)/d.FUNC_LIST_PAGE_SIZE);for(let e,j=1;j<b;j++)e=await g.getTcbFuncList({namespace:h,pageIndex:j,pageSize:d.FUNC_LIST_PAGE_SIZE}),p=p.concat(e.Functions),a.writeFile&&m(k,e.Functions),c({type:f.TCB_SET_SCF_LIST,data:{list:e.Functions,pageIndex:j,total:o.total,namespace:h,updateKey:l}})}return c({type:f.TCB_CLEAN_SCF_LIST,data:{namespace:h,updateKey:l}}),a.showTips&&c(w({show:!0,title:'\u540C\u6B65\u4E91\u51FD\u6570\u5217\u8868\u6210\u529F',content:'',showCancel:!1,showLoading:!1})),p}catch(b){a.showTips&&c(w({show:!0,title:'\u540C\u6B65\u4E91\u51FD\u6570\u5217\u8868\u5931\u8D25',content:b.toString(),showCancel:!1,showLoading:!1}))}}},r=(a)=>{return{type:f.TCB_CONSOLE_COMMAND,data:a}},s=(a)=>{return 1024>a?`${a} B`:1048576>a?`${(a/1024).toFixed(1)} KB`:`${(a/1024/1024).toFixed(1)} MB`},t=(a)=>{let b=[];return a.hasOwnProperty('packSize')&&b.push(`上传包大小：${s(a.packSize)}`),a.hasOwnProperty('filesCount')&&b.push(`文件数量：${a.filesCount}`),b.join('\uFF0C')},u=(a)=>{return async(c,d)=>{const f=await n(c,d);if(!f)return;const{dirPath:h,showTips:i,runtime:j,syncFunctions:k,createFunction:m}=a,o=b.basename(h);i&&c(w({show:!0,title:`正在${m?'\u521B\u5EFA':'\u4E0A\u4F20'} ${o}`,content:'',showCancel:!1,showLoading:!0}));try{const a=await g.uploadTcbFunc({functionName:o,dirPath:h,runtime:j,namespace:f});i&&(m?(c(w({show:!1})),c(e.setConfirmInfo({show:!0,content:`创建 ${o} 成功\n是否立即本地安装依赖 wx-server-sdk ？\n需保证 node & npm 已安装，且网络正常`,callback:(a)=>{if(a){const a='npm install --production';l(h,`echo ${a} && ${a}`)}}}))):c(w({show:!0,title:`上传 ${o} 成功`,content:t(a),showCancel:!1,showLoading:!1}))),k&&q({showTips:!1,writeFile:!1})(c,d)}catch(a){i&&c(w({show:!0,title:`${m?'\u521B\u5EFA':'\u4E0A\u4F20'} ${o} 失败`,content:a.toString(),showCancel:!1,showLoading:!1}))}}},v=(d)=>{return async(g,e)=>{const h=d.namespace||(await n(g,e));if(h)try{d.showTips&&g(w({show:!0,title:`正在下载 ${d.functionName}`,content:'',showCancel:!1,showLoading:!0}));let e=await j.getFunctionData({functionName:d.functionName,forceUpdate:!0,namespace:h});if(d.writeFile)for(var i in e){let f=b.join(d.dirPath,i),g=b.dirname(f);c.sync(g),a.writeFileSync(f,e[i])}g({type:f.TCB_SET_FILE,data:{functionName:d.functionName,fileList:Object.keys(e),namespace:h}}),d.showTips&&g(w({show:!0,title:'\u4E0B\u8F7D\u6210\u529F',content:'',showCancel:!1,showLoading:!1}))}catch(a){d.showTips&&g(w({show:!0,title:'\u4E0B\u8F7D\u5931\u8D25',content:a.toString(),showCancel:!1,showLoading:!1}))}}},w=(a)=>{return{type:f.TCB_SET_LOADING,data:a}};module.exports={getEnvList:o,selectEnv:p,getTcbFuncList:q,uploadTcbFunc:u,consoleCommand:r,showActionMsg:(a)=>{return{type:f.TCB_SCF_INFO,data:{show:!0,message:a}}},setConfirmInfo:(a)=>{return{type:f.TCB_SCF_INFO,data:a}},showConsoleAddSCF:()=>{return async(a,b)=>{const c=k.getCurrentTcbInfo(),d=await n(a,b);if(!d)return;let e;(e=h.get(i.WINDOW_REGISTRY.CLOUD_CONSOLE))?e.focus():a({type:f.WINDOW_SET_CLOUD,data:{console:{show:!0}}}),a(r({command:'SHOW_CREATE_SCF',data:{namespace:d,envId:c.currentEnv&&c.currentEnv.id}}))}},downloadTcbFunc:v,downloadAllTcbFunc:(d)=>{return async(g,e)=>{const h=e(),i=h.project.current.cloudfunctionRoot,k=await n(g,e);if(k){d.showTips&&g(w({show:!0,title:'\u6B63\u5728\u4E0B\u8F7D\u8BF7\u7A0D\u7B49',content:'',showCancel:!1,showLoading:!0}));try{const h=(await q(d)(g,e))||[];let m=[];for(let e,n=0,o=h.length;n<o;n++){e=h[n],d.showTips&&g(w({show:!0,title:`正在下载 ${e.FunctionName}`,content:'',showCancel:!1,showLoading:!0}));try{let h=await j.getFunctionData({functionName:e.FunctionName,forceUpdate:d.forceUpdate,namespace:k});if(d.writeFile){let d=b.join(i,e.FunctionName);for(var l in h){let e=b.join(d,l),f=b.dirname(e);c.sync(f),a.writeFileSync(e,h[l])}}g({type:f.TCB_SET_FILE,data:{functionName:e.FunctionName,fileList:Object.keys(h),namespace:k}})}catch(a){m.push(a.toString()),d.showTips&&g(w({show:!0,title:'\u90E8\u5206\u4E0B\u8F7D\u5931\u8D25',content:m.join('\n'),showCancel:!1,showLoading:!0}))}}d.showTips&&g(w({show:!0,title:'\u4E0B\u8F7D\u6210\u529F',content:'',showCancel:!1,showLoading:!1}))}catch(a){d.showTips&&g(w({show:!0,title:'\u4E0B\u8F7D\u5931\u8D25',content:a.toString(),showCancel:!1,showLoading:!1}))}}}},setLoading:w,uploadTcbFunctions:(a)=>{return async(b,c)=>{const d=a.dirPaths;for(let e,f=0;f<d.length;f++)e=d[f],await u({showTips:a.showTips,syncFunctions:!1,dirPath:e})(b,c);q({showTips:!1,writeFile:!1})(b,c)}},downloadTcbFunctions:(a)=>{return async(c,d)=>{for(let e,f=0;f<a.functionNames.length;f++)e=a.functionNames[f],await v(_extends({},a,{dirPath:b.join(a.dirPath,e),functionName:e}))(c,d)}},setCurrentEnv:(a)=>{return async(b)=>{const c=k.getCurrentTcbInfo();let d=c.envList;if(0>=d.length){let a=await g.getEnvList();b({type:f.TCB_SET_SCF_LIST,data:a.env_list}),d=a.env_list}const e=d.findIndex((b)=>{return b.namespace==a});-1!=e&&b(p(e))}}}}(require('lazyload'),require);