'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('react'),{Provider:b}=require('react-redux'),c=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),d=require('./db2217eb4cff896bdcbc50abe005058f.js'),e=require('react-dom');class f extends a.Component{constructor(a){super(a),this.state={mount:!0}}render(){return this.state.mount?a.createElement('div',_extends({},this.props,{style:{width:'100%',height:'100%'}}),this.props.children):a.createElement('div',null)}}module.exports=class extends a.Component{constructor(a){super(a),this._onMessage=this.onMessage.bind(this)}componentDidMount(){window.addEventListener('message',this._onMessage),this.openWindow(this.props.url)}componentWillReceiveProps(a){a.url!==this.props.url&&this.child&&(this.props.webview?this.setupWebview(a.url):this.child.window.location.href=a.url)}componentWillUnmount(){if(this.unmounted=!0,this.child)try{this.closeWindow()}catch(a){}window.removeEventListener('message',this._onMessage)}openWindow(a){const b=this.props.webview?'html/popup-webview.html':a;nw.Window.open(b,this.getWindowOptions(),(b)=>{if(this.unmounted)return void b.close(!0);this.registryId=this.props.registryId,this.child=b,b.on('close',()=>{setTimeout(this.closeWindow.bind(this),100),this.props.onWindowClose&&this.props.onWindowClose(b)}),b.on('new-win-policy',(a,b,c)=>{console.log(a,b,c),c.forceCurrent()}),this.props.onWindowOpen&&this.props.onWindowOpen(b),this.registryId&&(d.register({id:this.registryId,window:b}),global.windowMap.set(this.registryId,b));const c=b.window;this.props.webview&&('complete'===c.document.readyState?this.setupWebview(a):c.window.document.addEventListener('DOMContentLoaded',this.setupWebview.bind(this,a),!1))})}setupWebview(d){if(this.webview||(this.webview=this.child.window.document.getElementById('webview'),this.webview.setUserAgentOverride(`${navigator.userAgent} wechatdevtools wechatideplugin port/${global.messageCenterPort} ${this.props.userAgent||''}`)),this.webview.src=d,window.consoleWebview=this.webview,this.props.children){const d=document.createElement('div');this.child.window.document.body.appendChild(d),e.render(a.createElement(b,{store:c},a.createElement(f,_extends({ref:(a)=>this.dummy=a},this.props.wrapperProps),this.props.children)),d)}}closeWindow(){this.child&&(this.registryId&&d.unregister(this.registryId),this.child.close(!0),this.child=null)}ensureCloseWindow(){try{this.child.close(!0)}catch(a){}}getWindowOptions(){return function(a){const b={};for(const c of a)this.props.hasOwnProperty(c)&&(b[c]=this.props[c]);return b}.bind(this)(['id','title','icon','position','always_on_top','width','height','min_width','min_height','max_width','max_height','resizable','kiosk','fullscreen','show_in_taskbar','frame','transparent'])}onMessage(a){this.props.onMessage&&this.props.onMessage(a)}render(){return a.createElement('div',{style:{display:'none'}})}}}(require('lazyload'),require);