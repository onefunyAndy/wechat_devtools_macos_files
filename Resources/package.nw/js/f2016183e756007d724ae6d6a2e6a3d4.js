'use strict';!function(require,directRequire){module.exports={select:(a,b)=>{try{const c=b.split('.');let d=a;for(const a of c)d=d[a];return d}catch(a){return null}},getType:(a)=>Object.prototype.toString.call(a).slice(8,-1),getMergeData:(a,b)=>{try{const c=b.split('.'),d={};let e=d,f=a;for(let a=0,b=c.length;a<b;a++){const b=c[a];a<c.length-1?(e[b]={},e=e[b],f=f[b]||{}):e[b]=f[b]}return d}catch(a){return{}}}}}(require('lazyload'),require);