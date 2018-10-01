'use strict';!function(require,directRequire){const a=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,b=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,c=(b)=>b.replace(a,(a,c,d,e)=>c+c+d+d+e+e),d=(a)=>{const c=b.exec(a);return c?c.slice(1,4):null},e=(a)=>{const b=d(c(a));return b?{r:parseInt(b[0],16),g:parseInt(b[1],16),b:parseInt(b[2],16)}:null},f=(a)=>{const b=a.toString(16);return 1==b.length?'0'+b:b},g=(a,c,d)=>'#'+f(a)+f(c)+f(d);class h{constructor(a){this._r=a.r,this._g=a.g,this._b=a.b,this._a=a.hasOwnProperty('a')?a.a:1}get r(){return this._r}set r(a){this._r=a}get g(){return this._g}set g(a){this._g=a}get b(){return this._b}set b(a){this._b=a}get a(){return this._a}set a(a){this._a=a}toRGB(){return`rgb(${this._r}, ${this._g}, ${this._b})`}toRGBA(){return`rgba(${this._r}, ${this._g}, ${this._b}, ${this._a})`}toHex(){return g(this._r,this._g,this._b)}}module.exports={fromHex:(a)=>new h(e(a)),fromRGB:(a,c,d)=>new h({r:a,g:c,b:d}),fromRGBA:(c,d,e,f)=>new h({r:c,g:d,b:e,a:f})}}(require('lazyload'),require);