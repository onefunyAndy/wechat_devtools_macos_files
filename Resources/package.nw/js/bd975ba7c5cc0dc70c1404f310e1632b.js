'use strict';!function(require,directRequire){const a=require('path'),b=require('./d28a711224425b00101635efe1034c99.js'),c=require('./3e4c71c2a2cc438e1b3afc3fb10bd4b6.js'),d=require('./709f7f8328edb932b1169de8b7e694dd.js'),e=require('./162bf2ee28b76d3b3d95b685cede4146.js'),f=require('./0a856a8f0b27fbeca81fbaabad89dd1e.js'),g=require('./949d8235c744ced2a80121e4dba34c28.js'),h=require('./6238a86bb7a55c11aa0f9eb335d0f34c.js'),i=require('./2dfc6a3df6d6fc51266b293c8420e88b.js'),j=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),k=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),l=require('./6242f55dbdfe53c2f07b7a51568311f2.js').errorPrefix,m=require('./6b5b303ea4d41abf4ecefba647ca75dc.js'),n=require('./7f82ff06abae82ca2b259e9e3ced627f.js'),o=require('./b736009a659b85652dd17b48a9c062d9.js'),p=require('./77b119b473e176b74cae61fa386f7bd9.js'),q=require('./2a5e5cdfba5a7802665ffdcfcb8c054d.js'),{onDocumentStartPlaceholder:r,plugincodePlaceholder:s}=require('./59a36d89a8b99d7d2d809add2cecd72e.js');module.exports={generate:async(a,b={})=>{if(a.isOnline)return await o(a,b);let c=await n(a,b);const d=await m(a),e=q.get({position:'onDocumentStart',type:'simulator'});return c=c.split(r).join(`${e}`),c=c.split(s).join(`${d}`),c},getFile:p}}(require('lazyload'),require);