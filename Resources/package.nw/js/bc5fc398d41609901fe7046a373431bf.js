'use strict';!function(require,directRequire){const a=require('react'),b=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),c=require('./3bfffbe88b3d923921f851c0697974fe.js'),d=require('./d559680a1a0c2551cbce1a9fb152cb99.js'),e=require('./4389a88e405d1d37f36c16fc0ec96540.js'),{enterBackground:f,enterForeground:g}=require('./a3959bb900db9f65ed2e9c5dfa6977b7.js'),h=require('./common/locales/index.js');class i extends a.Component{constructor(a){super(a),this.state={scopeList:a.scopeList}}componentDidMount(){f('setting'),this._cancalLocaleListener=h.onChangeLocale(()=>this.forceUpdate())}componentWillUnmount(){g('setting'),this._cancalLocaleListener()}componentWillReceiveProps(a){const b={};a.scopeList!=this.props.scopeList&&(b.scopeList=a.scopeList),this.setState(b)}checkboxChange(a){const b=this.state.scopeList;return()=>{b[a].state=1==b[a].state?2:1,this.setState({scopeList:b})}}onLeftBtnClick(){const a=this.props;a.hideSetting({scopeList:this.state.scopeList,api:a.api,callbackID:a.callbackID})}render(){const b=this.props,c=this.state.scopeList||[],f=c.map((b,c)=>{const d=1==b.state;return a.createElement('div',{className:'weui-cell weui-cell_switch',key:b.scope},a.createElement('div',{className:'weui-cell__bd'},b.scope_desc),a.createElement('div',{className:'weui-cell__ft'},a.createElement('input',{className:'weui-switch auto_test_switch',type:'checkbox',checked:d,onChange:this.checkboxChange(c)})))});let g;return g=global.onlySimulator?{top:0,left:0,display:b.show?'':'none',width:b.screenWidth,height:b.screenHeight,transform:`scale(${b.deviceScale})`,transformOrigin:'50% 0'}:{display:b.show?'':'none',width:b.screenWidth,height:b.screenHeight,marginLeft:-b.screenWidth/2,transform:`scale(${b.deviceScale})`,transformOrigin:'50% 0'},a.createElement('div',{className:'simulator',style:g},a.createElement(e,null),a.createElement(d,{cover:!0,height:b.navigationbarHeight,backgroundColor:'#efeff4',frontColor:'#000000',showLeftBtn:!0,title:h.config.SETTING,onLeftBtnClick:this.onLeftBtnClick.bind(this)}),a.createElement('div',{className:'webview'},a.createElement('div',{className:'user-setting'},a.createElement('div',{className:'weui-cells__title'},a.createElement('p',null,h.config.PERMIT_USE_MY.format(b.appName))),a.createElement('div',{className:'weui-cells weui-cells_form'},f))))}}module.exports=i}(require('lazyload'),require);