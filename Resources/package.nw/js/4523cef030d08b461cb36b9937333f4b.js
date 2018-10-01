'use strict';!function(require,directRequire){async function a(a,b={}){const c=b.error;let d=b.title||'';const e=c.code;let h=c.message||c;const k=n.getCurrent();switch(e){case i.APP_JSON_READ_ERR:{d=`${d} ${q.config.FILE_READ_ERROR.format('app.json')}`;break}case i.APP_JSON_PARSE_ERR:{d=`${d} ${q.config.FILE_PARSE_ERROR.format('app.json')}`;break}case i.APP_JSON_PAGES_ERR:case i.APP_JSON_ENTRANCE_NOT_FOUND_ERR:case i.APP_JSON_CONTENT_ERR:case i.APP_JSON_WXML_NOT_FOUND:case i.APP_JSON_JS_NOT_FOUND:{d=`${d} ${q.config.FILE_CONTENT_ERROR.format('app.json')}`;break}case i.PAGES_JSON_PARSE_ERR:{d=`${d} ${q.config.FILE_ERROR.format(c.path+'.json')}`;break}case i.EXT_JSON_PARSE_ERR:{d=`${d} ${q.config.FILE_PARSE_ERROR.format('ext.json')}`;break}case i.EXT_JSON_PAGES_ERR:case i.EXT_JSON_CONTENT_ERR:{d=`${d} ${q.config.FILE_CONTENT_ERROR.format('ext.json')}`;break}case i.APPSERVICE_LOSE_WXML:case i.APPSERVICE_LOSE_JS:case i.FILE_NOT_UTF8:case i.BABEL_TRANS_JS_ERR:case i.UGLIFY_JS_ERR:case i.BABILI_JS_ERR:{d=`${d} ${q.config.GENERATING_ERROR.format('appservice')}`;break}case i.JS_ES6_ERR:{d=`${d} ${q.config.FILE_COMPILE_ERROR.format('JS')}`,h=`${c.path}\n${h}`;break}case i.POST_WXSS_ERR:{d=`${d} ${q.config.TRANSPILE_ERROR.format('wxss')}`;break}case i.TRANS_WXML_JS_ERR:{const a=await j.parseWxmlErr(k,c.msgForConsole);d=`${d} ${q.config.FILE_COMPILE_ERROR.format('WXML')}`,h=`${a.file}\n${a.msg}`;break}case i.TRANS_WXSS_JS_ERR:{const a=await j.parseWxssErr(k,c.msgForConsole);d=`${d} ${q.config.FILE_COMPILE_ERROR.format('WXSS')}`,h=`${a.file}\n${a.msg}`;break}case i.WEBVIEW_NETWORK_ERROR:return void f(a,c.details);case i.APPSERVICE_NETWORK_ERROR:return void g(a,c.details);case i.PLUGIN_TRANS_WXML_JS_ERR:{const a=await j.parsePluginWxmlErr(k,c.msgForConsole);d=`${d} ${q.config.FILE_COMPILE_ERROR.format('WXML')}`,h=`${a.file}\n${a.msg}`;break}case i.PLUGIN_PAGE_JSON_PARSE_ERR:{d=`${d} ${q.config.FILE_PARSE_ERROR.format(c.path)}`;break}case i.PLUGIN_PAGE_JSON_CONTENT_ERR:{d=`${d} ${q.config.FILE_CONTENT_ERROR.format(c.path)}`;break}case i.PLUGIN_JSON_READ_ERR:case i.PLUGIN_JSON_CONTENT_ERR:case i.PLUGIN_JSON_FILE_NOT_FOUND:case i.PLUGIN_JSON_PARSE_ERR:{d=`${d} ${q.config.FILE_ERROR.format('plugin.json')}`;break}case i.PLUGIN_JS_ES6_ERR:d=`${d} ${q.config.FILE_COMPILE_ERROR.format('JS')}`,h=`${c.path}\n${h}`;case i.PLUGIN_ONLINE_CODE_UNPACK_ERR:d=`${d} ${q.config.FILE_COMPILE_ERROR.format('JS')}`,h=`${q.config.FAILED_UNPACK_CODE_PACKAGE}\n${h}`;}y(a,{title:d,msg:h})}function b(a,b){const c=b.target.src,d=l.parse(c),e=d.pathname.replace(/html$/,'wxml'),f=r[b.level],g=(b.message||'').replace(v,'').replace(/\"/g,'\\"');a.executeScript({code:`console.group("${new Date} ${e}")
        console.${f}("${g}")
      console.groupEnd()`})}async function c(a,b){const c=await j.parseWXMLRuntimeErr(b);if(!c)return;const d=r[b.level];let e=d;'warn'===e&&(e='warning'),a.executeScript({code:`console.group("${new Date} WXML Runtime ${e}")
        console.${d}(\`${c.file}\`)
        console.${d}(\`${c.msg}\`)
      console.groupEnd()`})}function d(a,b){const c=r[b.level];let d=c;'warn'===d&&(d='warning');const e=b.message.replace(`${s}:`,'');a.executeScript({code:`console.group("${new Date} WXS Runtime ${d}")
        console.${c}(\`${e}\`)
      console.groupEnd()`})}function e(a,b){const{message:c,level:d}=b;if(2===d){r[b.level];a.executeScript({code:`console.group("${new Date} ${q.config.RENDER_LAYER_ERROR}")
        console.error(\`${c}\`)
      console.groupEnd()`})}}async function f(a,b){const{type:c,url:d}=b,e='image'===c&&-1<d.indexOf('do-not-use-local-path-');let f='',g='',h='';const i=n.getCurrent();if(e){const b=d.replace(/.*do-not-use-local-path-/,''),c=b.split('&'),e=c[0].replace('./',''),f=parseInt(c[1]),h=parseInt(c[2]);try{const b=await o(i.projectpath);let c=b.getFile(e);c=c.toString(),g=q.config.WXSS_IMAGE_ERROR.format([e,'https://mp.weixin.qq.com/debug/wxadoc/dev/qa.html#%E6%9C%AC%E5%9C%B0%E8%B5%84%E6%BA%90%E6%97%A0%E6%B3%95%E9%80%9A%E8%BF%87-css-%E8%8E%B7%E5%8F%96']);const d=m(c,f,h);a.executeScript({code:`console.group("${new Date} ${q.config.NETWORK_LAYER_RENDER_LAYER_ERROR}")
            console.error(\`${g}\n${d}\`)
          console.groupEnd()`})}catch(a){return void p.error(`showconsole.js showWebviewNetworkError ${a.toString()}`)}}else{const c=`http://127.0.0.1:${global.proxyPort}/__pageframe__`,d=-1!=b.url.indexOf(c);d?(f=b.error||`the server responded with a status of ${b.statusCode} (${b.statusLine})`,g=`Failed to load local ${b.type} resource ${b.url.replace(c,'')} \n ${f} `,h=''):(f=b.error||`the server responded with a status of ${b.statusCode} (${b.statusLine})`,g=`Failed to load ${b.type} ${b.url.replace(c,'')}\n${f} `,h=b.ip?`From server ${b.ip}`:''),a.executeScript({code:`console.group("${new Date} ${q.config.NETWORK_LAYER_RENDER_LAYER_ERROR}")
          console.error(\`${g}\n${h}\`)
        console.groupEnd()`})}}function g(a,b){console.log(b);const c=q.config.NETWORK_PROXY_SOLUTIONS.format(b.url);a.executeScript({code:`console.group("${new Date} ${q.config.TOOL_LOADING_ERROR}")
        console.error(\`${c}\`)
      console.groupEnd()`})}function h(a,b={}){a.executeScript({code:`console.group("${new Date} ${b.title||q.config.ERROR}")
        console.error(\`${b.file?b.file+'\n':''}${b.msg}\`)
      console.groupEnd()`})}const i=require('./949d8235c744ced2a80121e4dba34c28.js'),j=require('./6238a86bb7a55c11aa0f9eb335d0f34c.js'),k=require('./6242f55dbdfe53c2f07b7a51568311f2.js').errorPrefix,l=require('url'),m=require('babel-code-frame'),n=require('./3bfffbe88b3d923921f851c0697974fe.js'),o=require('./d62fc37d7aa6416d5dcc240ba94175cd.js'),p=require('./72653d4b93cdd7443296229431a7aa9a.js'),q=require('./common/locales/index.js'),r={0:'info',1:'warn',2:'error',"-1":'debug'},{WXS_RUNTIME_ERROR:s,WEBVIEW_ERROR:t,PAGEJS_FILE_ERROR:u,COMPONENT_FOR_DEVELOPER:v,WXML_RUNTIME_ERROR:w,CODE_ERROR:x}=k,y=(a,b={})=>{let{title:c,msg:d}=b;d=d||'',d=d.replace(/\\/g,'\\\\').replace(/`/g,'\\`'),a.executeScript({code:`console.group("${new Date} ${c}")
        console.error(\`${d}\`)
      console.groupEnd()`})};module.exports=(f,g,i)=>{g==x?a(f,i):g===v?b(f,i):g===w?c(f,i):g===t?e(f,i):g===s?d(f,i):h(f,i)}}(require('lazyload'),require);