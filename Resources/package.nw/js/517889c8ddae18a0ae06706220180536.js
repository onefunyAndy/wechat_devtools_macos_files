'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('react'),b=require('prop-types'),c=require('path'),{connect:d}=require('react-redux'),e=require('classnames'),f=require('./fc137838572a83604db39acff8e909e0.js'),g=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),h=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),i=require('./a8a5e64abb9f7f8caefeee1a1f0c9d3a.js'),j=require('./875171e7b864aa58d026d4fa0999fbd1.js'),k=require('./ff946754202ecf377034d29daac7c8d9.js'),l=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),m=require('./common/locales/index.js');class n extends a.Component{constructor(a){super(a),this.blinkObjects={},this.state={position:{left:0,top:0}}}componentDidMount(){this.checkDropdownPosition(),this._cancalLocaleListener=m.onChangeLocale(()=>this.forceUpdate())}componentWillUnmount(){this._cancalLocaleListener()}componentDidUpdate(a){this.context.isPopup&&!a.show&&this.props.show&&this.checkDropdownPosition()}checkDropdownPosition(){if(this.context.isPopup&&this.context.window&&this.props.left+260>this.context.window.width){let a=this.context.window.width-260;0>a&&(a=0),this.setState({position:_extends({},this.state.position,{left:a})})}}handleDropdownClick(a){a.stopPropagation()}handleCopyClick(a){const b=a.currentTarget.dataset.type,c=nw.Clipboard.get();c.set(this.props[b].toString());const d=this.blinkObjects[b];d&&(d.style.opacity='0.5',!this._blinkTimeout&&(this._blinkTimeout=setTimeout(()=>{d.style.opacity='1',this._blinkTimeout=null},200))),this.props.showSuccessTip(m.config.CONSOLE_COPY_SUCCESS)}handlePathOpenClick(){k.sendMessage('EDITOR',JSON.stringify({type:'COMMAND',command:'openFile',data:{path:('/'+c.posix.join(this.props.clientPath,(this.props.pathName||'')+'.js')).replace(/\/+/g,'/')}}))}render(){if(global.onlySimulator)return null;const b=this.props;return a.createElement(j,{show:b.show,style:{left:this.state.position.left||this.props.left,top:this.state.position.top||this.props.top,width:260},inClassName:'ui-popover',outClassName:'ui-animate-fadeOut ui-popover'},a.createElement('div',{className:'ui-dropdown',onClick:this.handleDropdownClick.bind(this)},a.createElement('div',{className:'ui-dropdown-item'},a.createElement('div',{className:'ui-dropdown-item-bd'},a.createElement('div',{className:'ui-flex ui-dropdown-status-item'},a.createElement('label',{htmlFor:''},m.config.PAGE_PATH),a.createElement('div',{className:'ui-flex-item'},a.createElement('p',{ref:(a)=>this.blinkObjects.pathName=a,className:'ui-selectable',title:b.pathName},b.pathName?b.pathName:`(${m.config.EMPTY})`)),a.createElement('div',null,b.pathName?a.createElement('a',{onClick:this.handleCopyClick.bind(this),"data-type":'pathName'},m.config.COPY):null,b.pathName?a.createElement('a',{onClick:this.handlePathOpenClick.bind(this)},m.config.OPEN):null)))),a.createElement('div',{className:'ui-dropdown-item'},a.createElement('div',{className:'ui-dropdown-item-bd'},a.createElement('div',{className:'ui-flex ui-dropdown-status-item'},a.createElement('label',{htmlFor:''},m.config.SCENE_VALUE),a.createElement('div',{className:'ui-flex-item'},a.createElement('p',{ref:(a)=>this.blinkObjects.scene=a,className:'ui-selectable'},b.scene?b.scene:`(${m.config.EMPTY})`,b.scene?' '+b.sceneMap[b.scene]||'':null))))),a.createElement('div',{className:'ui-dropdown-item'},a.createElement('div',{className:'ui-dropdown-item-bd'},a.createElement('div',{className:'ui-flex ui-dropdown-status-item'},a.createElement('label',{htmlFor:''},m.config.PAGE_PARAMETERS),a.createElement('div',{className:'ui-flex-item'},a.createElement('p',{ref:(a)=>this.blinkObjects.query=a,className:'ui-selectable'},b.query?b.query:`(${m.config.EMPTY})`),b.query?a.createElement('a',{onClick:this.handleCopyClick.bind(this),"data-type":'query'},m.config.COPY):null))))))}}n.contextTypes={isPopup:b.bool,window:b.object},module.exports=d((a)=>{const b=a.simulator,c=b.scene,d=b.currentWebviewID,e=b.webviewInfos,f=e&&e[d]||{},g=f.pathName||'',h=[],i=a.project,j=(i.current||{}).miniprogramRoot||'';for(const b in f.query)h.push(`${b}=${f.query[b]}`);return{scene:c,pathName:g,query:h.join('&'),sceneMap:a.config.sceneMap||[],clientPath:j}},(a)=>({showSuccessTip:h.bindActionCreators(g.showSuccessTip,a)}))(n)}(require('lazyload'),require);