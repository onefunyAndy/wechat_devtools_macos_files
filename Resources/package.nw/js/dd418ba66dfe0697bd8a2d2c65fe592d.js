"use strict";!function(require,directRequire){const a=require("xml2js").Parser,b=new a({explicitCharkey:!0,trim:!0,emptyTag:null});module.exports={parseXML:async function(a,c){const d=c.args.xml;return new Promise(function(a,e){b.parseString(d,function(b,d){b?e({errMsg:`${c.api}:fail ${b}`}):a({errMsg:`${c.api}:ok`,result:d})})})}}}(require("lazyload"),require);