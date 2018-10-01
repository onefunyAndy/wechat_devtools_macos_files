'use strict';!function(require,directRequire){const a=require('react'),b=require('./e6c156a6815c8adb17a51ec940f64b68.js'),c=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),d=require('./c4190a2430506f3602ca550e1e75d620.js'),e=require('./4389a88e405d1d37f36c16fc0ec96540.js'),f=require('./common/locales/index.js'),{connect:g}=require('react-redux');class h extends a.Component{constructor(a){super(a),this.state={lazyLoaded:a.show}}componentDidMount(){this._cancalLocaleListener=f.onChangeLocale(()=>this.forceUpdate())}componentWillUnmount(){this._cancalLocaleListener()}componentWillReceiveProps(a){a.show!=this.props.show&&a.show&&this.setState({lazyLoaded:!0})}chooseCard(a){const b=a.currentTarget.dataset,c=[{card_id:b.cardid,encrypt_code:b.encryptcode}];this.props.debuggerActions.hideCardView({callbackID:this.props.callbackID,runtimeID:this.props.runtimeID,res:{errMsg:`${this.props.api}:ok`,choose_card_info:JSON.stringify(c)}})}cancel(){this.props.debuggerActions.hideCardView({runtimeID:this.props.runtimeID,callbackID:this.props.callbackID,res:{errMsg:`${this.props.api}:cancel`}})}render(){if(!this.state.lazyLoaded)return null;const c=this.props,d=this.props.cardInfo,g=f.config.MY_CARDS,h=d.map((b,c)=>a.createElement('div',{onClick:this.chooseCard.bind(this),key:c,"data-appid":b.app_id,"data-cardid":b.card_tp_id,"data-encryptcode":b.encrypt_code,className:'webview-card-choose-item'},a.createElement('div',{className:'webview-card-choose_m'},a.createElement('div',{className:'webview-card-choose_left'},a.createElement('img',{className:'webview-card-choose-item_img',src:b.logo_url})),a.createElement('div',{className:'webview-card-choose_details'},a.createElement('div',{className:'webview-card-choose-item_name'},b.sub_title),a.createElement('div',{className:'webview-card-choose-item_info'},b.title)))));let i;return i=h.length?a.createElement('div',{className:'webview-card-choose-item'},h):a.createElement('span',{className:'webview-card-choose-mycard webview-card-choose-mycardEmpty'},f.config.NO_CARDS_ADDED),a.createElement('div',{className:'simulator',style:{marginLeft:-c.width/2,width:c.width,height:c.height,transform:`scale(${c.deviceScale})`,transformOrigin:'50% 0'}},a.createElement(e,{height:20,titleStyle:'white',backgroundColor:'#000000'}),a.createElement(b,{cover:!0,width:c.width,height:c.navigationbarHeight,title:f.config.MY_CARDS,backgroundColor:'#000000',frontColor:'#ffffff',showLeftBtn:!0,onLeftBtnClick:this.cancel.bind(this)}),a.createElement('div',{className:'webview'},a.createElement('div',{className:'coupons'},i)))}}module.exports=g((a)=>{const b=a.webdebugger||{},c=a.toolbar.deviceInfo,d=b.cardInfo;return{deviceScale:a.toolbar.deviceScale,width:c.screenWidth,height:c.screenHeight,navigationbarHeight:c.navigationbarHeight,api:d.api,cardInfo:d.cardInfo||[],callbackID:d.callbackID,runtimeID:d.runtimeID,show:'choosecard'==d.show}},(a)=>({debuggerActions:c.bindActionCreators(d,a)}))(h)}(require('lazyload'),require);