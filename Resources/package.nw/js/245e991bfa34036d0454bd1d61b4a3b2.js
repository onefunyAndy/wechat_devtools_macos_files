'use strict';!function(require,directRequire){const a=require('react'),{connect:b}=require('react-redux');class c extends a.Component{constructor(a){super(a)}render(){let b={};return b=this.props.landscape?{display:this.props.show?'':'none',zIndex:999,top:'50%',left:0,width:33,height:212,position:'absolute',backgroundSize:'cover',background:'black',marginTop:-106,borderTopRightRadius:20,borderBottomRightRadius:20,border:'1px solid white',borderLeft:'none'}:{display:this.props.show?'':'none',zIndex:999,top:0,left:'50%',width:212,height:33,position:'absolute',backgroundSize:'cover',background:'black',marginLeft:-106,borderBottomLeftRadius:20,borderBottomRightRadius:20,border:'1px solid white',borderTop:'none'},a.createElement('div',{style:b})}}module.exports=b((a)=>{const b=a.toolbar.deviceInfo,c=a.simulator.orientation&&'landscape'==a.simulator.orientation.value;return{show:'iPhone X'==b.model,landscape:c}},()=>({}))(c)}(require('lazyload'),require);