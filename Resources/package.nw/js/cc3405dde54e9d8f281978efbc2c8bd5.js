'use strict';!function(require,directRequire){const{BROADCAST_CHANNEL_NAME:a}=require('./29663300bfa19b7ed51ebc10354be1e9.js'),{syncSettings:b}=require('./e98c60a262d8d98e69e574a9d12a21df.js'),{syncUser:c}=require('./9c906d27ca74e18d0deaaa231e71fdfa.js'),{syncProject:d}=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),{syncToolbar:e}=require('./fc137838572a83604db39acff8e909e0.js'),{select:f}=require('./f2016183e756007d724ae6d6a2e6a3d4.js'),g=new BroadcastChannel(a);let h;const i={user:{},settings:{},project:{},config:{}},j={user:c,settings:b,"toolbar.device.list":e},l={settings:['show','currentCategory'],project:['current']},k=(a,b)=>{const c=i[b]!==a[b]&&i[b].syncTime===a[b].syncTime;if(!c)return!1;if(l[b]){const c=i[b],d=a[b];for(const a in d)if(-1===l[b].indexOf(a)&&d[a]!==c[a])return!0;return!1}return!0},m=()=>{const a=h.getState();for(const b in i)k(a,b)&&g.postMessage({key:b,value:a[b],syncTime:+new Date}),i[b]=f(a,b)};g.onmessage=(a)=>{if(h){const{key:b,value:c,syncTime:d}=a.data;b&&j[b]&&h.dispatch(j[b](c,d))}},module.exports=(a)=>{h=a;const b=h.getState();for(const c in i)i[c]=b[c];h.subscribe(m)}}(require('lazyload'),require);