'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('react'),b=require('prop-types'),{connect:c}=require('react-redux'),d=require('./fc137838572a83604db39acff8e909e0.js'),e=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),f=require('./a8a5e64abb9f7f8caefeee1a1f0c9d3a.js'),g=require('./56c390e04c10e91a4aa2a2c19d9a885d.js');class h extends a.Component{constructor(a){super(a),this.state={position:{left:0,top:0}}}componentDidMount(){this.checkDropdownPosition()}componentDidUpdate(a){this.context.isPopup&&!a.show&&this.props.show&&this.checkDropdownPosition()}checkDropdownPosition(){if(this.context.isPopup&&this.context.window&&this.props.left+100>this.context.window.width){let a=this.context.window.width-100;0>a&&(a=0),this.setState({position:_extends({},this.state.position,{left:a})})}}onSelectClick(a){event.stopPropagation(),this.props.onSelectClick&&this.props.onSelectClick(a)}render(){return a.createElement(f,_extends({},this.props,{domRef:(a)=>this.dropdownDOM=a,id:this.props.id+'-popup',left:this.state.position.left||this.props.left,top:this.state.position.top||this.props.top,onSelectClick:this.onSelectClick.bind(this)}))}}h.contextTypes={isPopup:b.bool,window:b.object},module.exports=c((a)=>{const b=a.toolbar.network,c=b.list.map((a)=>({name:g.NETWORK_STATUS_DISPLAY[a]||a}));return{list:c,current:b.current}},(a)=>({onSelectClick:e.bindActionCreators(d.selectNetwork,a)}))(h)}(require('lazyload'),require);