'use strict';!function(require,directRequire){const a=require('react'),b=require('redux'),c=require('./aa9fff323e28f4dcd42f368a90ea14e6.js'),d=require('./fc137838572a83604db39acff8e909e0.js'),e=require('./eadce02c750c875a10680bcfedadec88.js'),f=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),g=require('./7c2dbbb98877b7bbfb1d9a8ea6b5c77c.js'),{connect:h}=require('react-redux'),i=[{name:'100%',value:1},{name:'85%',value:0.85},{name:'75%',value:0.75},{name:'50%',value:0.5}];class j extends a.Component{constructor(a){super(a),this.state={showTs:0}}onShowClick(){this.setState({showTs:Date.now()})}render(){return a.createElement(c,{show:this.props.show,currentWording:this.props.currentWording,onShowClick:this.onShowClick.bind(this),dropdown:g,dropdownType:'devicescale',showTs:this.state.showTs})}}module.exports=h((a)=>{const b=a.toolbar.deviceScale;let c=-1;return i.forEach((a,d)=>{a.value==b&&(c=d)}),{show:a.toolbar.clickKey==e.DEVICESCALE,list:i,currentWording:`${100*b}%`,current:c,width:120,left:109,top:27}},(a)=>({onShowClick:()=>{a(d.toggleClickKey(e.DEVICESCALE))},onSelectClick:(b)=>{a(d.setDeviceScale(i[b].value)),a(d.toggleClickKey(e.NONE))}}))(j)}(require('lazyload'),require);