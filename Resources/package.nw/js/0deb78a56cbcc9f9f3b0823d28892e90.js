'use strict';!function(require,directRequire){const a=require('react'),{connect:b}=require('react-redux'),{DEV_TYPE:c,MAIN_WINDOW_TYPE:d}=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),e=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),f=require('./9c906d27ca74e18d0deaaa231e71fdfa.js'),g=require('./a8c87029da0fa06e986298d447ab0fe2.js'),h=require('./666e1aa25aa78d4ecc84d4180aada59f.js'),i=require('./da7c31daaf542cf1796023d8e344b98a.js');module.exports=b((a)=>({user:a.user}),(a)=>{const b={[c.MINI_PROGRAM]:()=>{i('app_choose_weapp'),a(e.selectDevType(c.MINI_PROGRAM))},[c.MP_WEB]:()=>{i('app_choose_url'),a(e.selectDevType(c.MP_WEB))}};return{logout:()=>{a(f.loginExpired())},onDevTypeSelected:(a)=>{b[a]()}}})(h)}(require('lazyload'),require);