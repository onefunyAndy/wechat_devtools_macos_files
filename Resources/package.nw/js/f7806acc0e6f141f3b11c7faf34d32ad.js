'use strict';!function(require,directRequire){function a(a,b){if(a._src==b)return;a._src=b;const c=0===b.indexOf('http')&&!k.isLocalId(b);let d;if(c)return void(a.src=b);const g=j.getCurrent(),h=k.getFileRealPath(b,g),i=h.fileRealPath;if(-1!==b.indexOf('durationTime=')){const c=f.extname(b),g=b.replace(/.*durationTime=/,'').replace(c,'');g&&(a._duration=g/1e3),d=e.readFileSync(h.fileRealPath,'utf8'),d.startsWith('data:audio/')||(d=e.readFileSync(h.fileRealPath,{encoding:'base64'}),d=`data:audio/mpeg;base64,${d}`),a.src=d}else d=e.readFileSync(h.fileRealPath),a.src=`data:audio/mpeg;base64,${d.toString('base64')}`}function b(a){const b=i();b.triggerOnEvent({eventName:'onAudioStateChange',data:a})}function c(a){const b=a?a.buffered:'';if(b){const c=a.currentTime;for(let a=0,d=b.length;a<d;a++){if(b.start(a)<=c&&b.end(a)>=c)return b.end(a)}}return 0}function d(a){const c=n[a];c.initStateChage||(c.initStateChage=!0,c.addEventListener('error',(c)=>{const d=c.currentTarget.error.code,e={audioId:a,state:'error',errMsg:'MediaError',errCode:1e4+parseInt(d)};b(e)}),c.addEventListener('pause',()=>{const d=c._isStop?'stop':'pause';c._isStop=!1;b({audioId:a,state:d})}),m.forEach((d)=>{c.addEventListener(d,()=>{b({audioId:a,state:d})})}))}const e=require('fs'),f=require('path'),g=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),h=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),i=require('./dfd9a72b9ff6078018aa4a64eed949a5.js'),j=require('./3bfffbe88b3d923921f851c0697974fe.js'),k=require('./f6cbcecf6ed9f533f6a506310d8f07b6.js'),l=require('./37be435102276ea9cf47609ff6535cd4.js'),m=['play','canplay','ended','stop','waiting','seeking','seeked'];let n={};module.exports={createAudioInstance:async function(a,b){const c=`${Date.now()}${Math.random()}`,d=document.createElement('audio'),e=g.getState();return e.toolbar.muted&&(d.muted=!0),n[c]=d,{errMsg:`${b.api}:ok`,audioId:c}},destroyAudioInstance:function(a,b){const c=b.args,d=c.audioId;return n[d]&&(n[d].pause(),n[d].remove(),delete n[d]),{errMsg:`${b.api}:ok`,audioId:d}},setAudioState:async function(b,c){const e=c.args;let{audioId:f,src:g,startTime:h,autoplay:i,loop:j,obeyMuteSwitch:k,volume:l}=e;const m=n[f];if(m.loop=j||!1,m.autoplay=i||!1,l=parseFloat(l),m.volume=isNaN(l)?1:Math.max(0,Math.min(1,l)),g&&a(m,g),h){const a=()=>{m.removeEventListener('canplay',a),m.currentTime=h/1e3};m.addEventListener('canplay',a)}return m.startTime=h||0,d(f),{errMsg:`${c.api}:ok`}},getAudioState:async function(a,b){const d=b.args,e=d.audioId,f=n[e];let{duration:g,currentTime:h,paused:i,src:j,startTime:k,volume:l}=f;const m=c(f);return g===Infinity&&f._duration&&(g=f._duration),{errMsg:`${b.api}:ok`,duration:1e3*g,currentTime:1e3*h,paused:i,src:j,startTime:1e3*k,buffered:1e3*m}},operateAudio:async function(a,b){const c=b.args,{operationType:d,audioId:e,currentTime:f}=c,g=n[e];return'play'===d?g.play():'pause'===d?g.pause():'stop'===d?(g._isStop=!0,g.pause(),g.currentTime=0):'seek'===d&&(g.currentTime=f/1e3),{errMsg:`${b.api}:ok`}},removeAudio:function(){for(const a in n)n[a].pause(),n[a].remove();n={}},setMuted:function(a){for(const b in n)n[b].muted=a}}}(require('lazyload'),require);