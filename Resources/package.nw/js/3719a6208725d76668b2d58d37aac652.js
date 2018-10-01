'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('react'),b=require('redux'),c=require('./a8c87029da0fa06e986298d447ab0fe2.js'),d=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),e=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),f=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),g=require('./875171e7b864aa58d026d4fa0999fbd1.js'),{connect:h}=require('react-redux'),i=require('./common/locales/index.js');class j extends a.Component{constructor(a){super(a),this.state=_extends({lazyLoaded:a.show,show:a.show},a.data)}componentDidMount(){this._cancalLocaleListener=i.onChangeLocale(()=>this.forceUpdate())}componentWillUnmount(){this._cancalLocaleListener()}componentWillReceiveProps(a){let b={};a.show&&(b.lazyLoaded=!0),a.data!=this.props.data&&(b=_extends({},b,a.data)),a.show!=this.props.show&&(a.show&&(b.lazyLoaded=!0),b.show=a.show),this.setState(b)}onInputChange(a){const b=a.currentTarget,c=b.dataset,d=c.type;this.setState({[d]:b.value})}onClose(){this.setState({show:!1})}onAnimationOut(){this.props.setCustomCompile({show:!1})}onConfirm(){return this.state.name?void(this.props.projectActions.setCompileCondiction({id:this.props.id,name:this.state.name,pathName:this.state.pathName,title:this.state.title,cachekey:this.state.cachekey}),this.onClose()):void this.refs.nameInput.focus()}onDelete(){this.props.projectActions.removeCompileCondiction({id:this.props.id})}render(){if(!this.state.lazyLoaded)return null;const b=this.props,c={display:-1==b.id?'none':''};return a.createElement(g,{show:this.state.show,inClassName:'ui-animate-pull-down ui-dialog',outClassName:'ui-animate-pull-up ui-dialog',onAnimationOut:this.onAnimationOut.bind(this),style:{width:600,marginLeft:-300}},a.createElement('div',{className:'ui-dialog-hd'},a.createElement('h3',{className:'ui-dialog-title'},i.config.CUSTOM_COMPILATION_CONDITION)),a.createElement('div',{className:'ui-dialog-bd'},a.createElement('div',{className:'ui-form'},a.createElement('div',{className:'ui-form-item ui-form-item-inline'},a.createElement('label',{className:'ui-form-label'},i.config.MODE_NAME),a.createElement('div',{className:'ui-form-controls'},a.createElement('div',{className:'ui-input-box'},a.createElement('input',{type:'text',"data-type":'name',ref:'nameInput',value:this.state.name,onChange:this.onInputChange.bind(this),className:'ui-input'})))),a.createElement('div',{className:'ui-form-item ui-form-item-inline'},a.createElement('label',{className:'ui-form-label'},i.config.SET_TITLE),a.createElement('div',{className:'ui-form-controls'},a.createElement('div',{className:'ui-input-box'},a.createElement('input',{type:'text',"data-type":'title',value:this.state.title,maxLength:8,onChange:this.onInputChange.bind(this),className:'ui-input'})))),a.createElement('div',{className:'ui-form-item ui-form-item-inline'},a.createElement('label',{className:'ui-form-label'},i.config.PATH_AND_PARAMETERS),a.createElement('div',{className:'ui-form-controls'},a.createElement('div',{className:'ui-input-box'},a.createElement('input',{type:'text',"data-type":'pathName',value:this.state.pathName,onChange:this.onInputChange.bind(this),className:'ui-input'})))),a.createElement('div',{className:'ui-form-item ui-form-item-inline'},a.createElement('label',{className:'ui-form-label'},'cachekey'),a.createElement('div',{className:'ui-form-controls'},a.createElement('div',{className:'ui-input-box'},a.createElement('input',{type:'text',"data-type":'cachekey',value:this.state.cachekey,onChange:this.onInputChange.bind(this),className:'ui-input'})))))),a.createElement('div',{className:'ui-dialog-ft'},a.createElement('div',{className:'ui-dialog-action'},a.createElement('button',{className:'ui-button ui-button-warn',style:c,onClick:this.onDelete.bind(this)},i.config.DELETE_THIS_MODE)),a.createElement('div',{className:'ui-dialog-action'},a.createElement('button',{className:'ui-button ui-button-default',onClick:this.onClose.bind(this)},i.config.CANCEL),a.createElement('button',{className:'ui-button ui-button-primary',onClick:this.onConfirm.bind(this)},i.config.CONFIRM))))}}module.exports=h((a)=>{const b=a.project.current,c=b.compileType,d=b.condiction[c]||{},e=a.window.customCompile,g=e.id,h=d.list&&d.list[g]||{};return{show:a.window.customCompile&&a.window.customCompile.show==f.conversation,project:a.project.current,id:g,data:h}},(a)=>({setCustomCompile:e.bindActionCreators(c.setCustomCompile,a),projectActions:e.bindActionCreators(d,a)}))(j)}(require('lazyload'),require);