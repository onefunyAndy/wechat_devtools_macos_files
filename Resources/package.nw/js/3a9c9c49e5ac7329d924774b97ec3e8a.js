'use strict';!function(require,directRequire){const a=require('path'),b=require('babel-code-frame'),c=require('babel-core'),d=require('./d28a711224425b00101635efe1034c99.js'),e=require('./1dea83a77e99a7c94f6b6f01f5c175b0.js'),f=require('./45368a4f5c9761935178081387ad6a7c.js'),g=require('./be8599cf60139a20dca47b3e43647454.js'),h=require('./87c0ac209c25d8bb448550638bb17663.js'),i=require('./d91180fcab2f484fb84a83a404a2b678.js'),j=require('./201ace05546fc16e3d5cf71cb558f2c4.js'),k=require('./aad21dcccf13014aad2c69c95e9c8152.js'),l=require('./334bc661e13bd1837a230f0835d0a1ee.js'),m=require('./5d3b2444c61491ce6f88523a60ba3f37.js'),n=require('./3e4c71c2a2cc438e1b3afc3fb10bd4b6.js'),o=require('./2a5e5cdfba5a7802665ffdcfcb8c054d.js'),p=require('./67215eab3bfc7c289ded3daeaf0ac81e.js'),{onDocumentStartPlaceholder:q,devtoolsConfigPlaceholder:r,wxConfigPlaceholder:s,wxmlXCJSPlaceholder:t,wxappcodePlaceholder:u,plugincodePlaceholder:v}=require('./ebfcad0a5e72b6e693634486564b1394.js');module.exports={generate:async function(a,b){if(a.isOnline)return await k(a,b);let c=await j(a,b);const d=await f(a),e=g(),h=await n(a,{app:!0,cut:!0}),i=await l(a),v=await m(a),w=o.get({position:'onDocumentStart',type:'appservice'});c=c.split(q).join(`${w}`),c=c.split(u).join(`<script>${i}</script>`),c=c.split(t).join(`<script>${h.code}</script>`),c=c.split(s).join(`<script>var __wxConfig=${JSON.stringify(d)}</script>`),c=c.split(r).join(`<script>var __devtoolsConfig=${JSON.stringify(e)}</script>`);const x=await p(a);return c+=`<script>${x}</script>`,c},getJSFile:h,getJSMapFile:i}}(require('lazyload'),require);