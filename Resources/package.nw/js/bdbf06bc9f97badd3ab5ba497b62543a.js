'use strict';!function(require,directRequire){const a=require('react'),{connect:b}=require('react-redux'),c=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),d=require('./a8c87029da0fa06e986298d447ab0fe2.js'),e=require('./307ad3efda2e8a1e598cb73a16972c84.js'),f=require('./1fcc6bd55b687d154a4247e57fe3011d.js');module.exports=b((a)=>({project:a.project}),(a)=>({createProjectSuccess:(b,d)=>a(c.createProjectSuccess(b,d)),openProject:(b)=>{a(c.openProject(b))},closeProject:()=>a(c.closeProject()),cancel:()=>a(c.createProjectCancel()),close:()=>a(c.createProjectClose()),setConfirmInfo:(b)=>a(f.setConfirmInfo(b))}))(e)}(require('lazyload'),require);