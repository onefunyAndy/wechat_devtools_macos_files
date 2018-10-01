'use strict';!function(require,directRequire){const a='darwin'===process.platform,b={},c=require('./common/locales/index.js');b.keyCodeMap={112:{name:'F1'},113:{name:'F2'},114:{name:'F3'},115:{name:'F4'},116:{name:'F5'},117:{name:'F6'},118:{name:'F7'},119:{name:'F8'},120:{name:'F9'},121:{name:'F10'},122:{name:'F11'},123:{name:'F12'},49:{name:'1'},50:{name:'2'},51:{name:'3'},52:{name:'4'},53:{name:'5'},54:{name:'6'},55:{name:'7'},56:{name:'8'},57:{name:'9'},48:{name:'0'},81:{name:'Q'},87:{name:'W'},69:{name:'E'},82:{name:'R'},84:{name:'T'},89:{name:'Y'},85:{name:'U'},73:{name:'I'},79:{name:'O'},80:{name:'P'},65:{name:'A'},83:{name:'S'},68:{name:'D'},70:{name:'F'},71:{name:'G'},72:{name:'H'},74:{name:'J'},75:{name:'K'},76:{name:'L'},90:{name:'Z'},88:{name:'X'},67:{name:'C'},86:{name:'V'},66:{name:'B'},78:{name:'N'},77:{name:'M'},32:{name:' '},189:{name:'-'},187:{name:'='},219:{name:'['},221:{name:']'},186:{name:';'},222:{name:'\''},188:{name:','},190:{name:'.'},191:{name:'/'},192:{name:'`'},37:{name:'left'},39:{name:'right'},38:{name:'up'},40:{name:'down'},18:{isModifier:!0,name:'alt'},17:{isModifier:!0,name:'ctrl'},16:{isModifier:!0,name:'shift'},91:{isModifier:!0,name:'cmd'},8:{name:'backspace',isDelete:!0},46:{name:'delete',isDelete:!0},27:{name:'esc'}},b.modifierDisplayTextMap={ctrl:a?'\u2303':'Ctrl+',shift:a?'\u21E7':'Shift+',cmd:a?'\u2318':'Win+',alt:a?'\u2325':'Alt+'},b.modifierPriorityMap={ctrl:'1',shift:'2',cmd:'4',alt:'3'},b.keyDisplayTextMap={get[' '](){return c.config.SPACE},left:'\u2190',right:'\u2192',up:'\u2191',down:'\u2193',esc:a?'\u238B':'ESC'},b.getDisplayTextFromShortcut=function(a){if(!a)return;const{modifiers:c,key:d}=a;let e=[];c&&(e=c.map((a)=>{return b.modifierDisplayTextMap.hasOwnProperty(a)?b.modifierDisplayTextMap[a]:a}));const f=e?e.join(''):'';return f?`${f}${b.keyDisplayTextMap[d]||d||''}`:b.keyDisplayTextMap[d]||d||''},module.exports=b}(require('lazyload'),require);