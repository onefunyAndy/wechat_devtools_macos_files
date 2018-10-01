'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('react'),b=require('classnames'),c=require('./a8c87029da0fa06e986298d447ab0fe2.js'),d=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),e=require('./3b66d845db4d098b7a16cb0357f5c072.js'),f=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),g=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),h=require('./84705760a8692a44a583377e7f3f3b00.js'),i=require('./3c55dff3626a3ee184d599f076158345.js'),j=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),k=require('./72653d4b93cdd7443296229431a7aa9a.js'),l=require('./common/locales/index.js'),m=require('./875171e7b864aa58d026d4fa0999fbd1.js'),{connect:n}=require('react-redux');class o extends a.Component{constructor(a){super(a),this.state=_extends({lazyLoaded:a.show,show:a.show},a.data,{dropDownShow:!1,dropDownList:[],serviceList:a.serviceList||[],queryList:a.serviceList[0]&&a.serviceList[0].query_item||[]})}componentDidMount(){this.props.show&&this.getQueryConfig(),this._cancalLocaleListener=l.onChangeLocale(()=>this.forceUpdate())}componentWillUnmount(){this._cancalLocaleListener()}componentWillReceiveProps(a){let b={};a.data!=this.props.data&&(b=_extends({},b,a.data)),a.serviceList!=this.props.serviceList&&(b.serviceList=a.serviceList,b.queryList=a.serviceList[0]&&a.serviceList[0].query_item||[]),a.show!=this.props.show&&(a.show&&(this.getQueryConfig(),b.lazyLoaded=!0),b.show=a.show),this.setState(b)}getQueryConfig(){h.getQueryConfig().then((a)=>{this.props.updateSearchQueryConfig(a.service_item||[])}).catch((a)=>{k.error(`getQueryConfig catch error ${a}`),this.props.showError(l.config.WIDGET_GET_SEARCH_QUERY_ERROR.format(a))})}onInputChange(a){const b=a.currentTarget,c=b.dataset,d=c.type;this.setState({[d]:b.value})}onClose(){this.setState({show:!1})}onConfirm(){return this.state.name?void(this.props.projectActions.setCompileCondiction({id:this.props.id,name:this.state.name,widgetData:this.state.widgetData,service:this.state.service,query:this.state.query,customQuery:this.state.customQuery,debugUrl:this.state.debugUrl,boxQI:this.state.boxQI}),this.onClose()):void this.refs.nameInput.focus()}onAnimationOut(){this.props.setCustomCompile({show:!1,id:-1})}onDelete(){this.props.projectActions.removeCompileCondiction({id:this.props.id}),this.onClose()}onDropDownSelect(a,b){'service'==a?this.onServiceSelect(b):'query'==a&&this.onQuerySelect(b)}onServiceSelect(a){const b=this.state.serviceList[a];b&&this.setState({query:'',boxQI:'',queryList:b.query_item,dropDownShow:!1,service:b})}onQuerySelect(a){const b=this.state.queryList[a];b&&this.setState({query:b.query,boxQI:b.box_qi,dropDownShow:!1})}onServiceDropDownClick(a){a.stopPropagation();const b=a.currentTarget.getBoundingClientRect(),c=this.props.serviceList.map((a)=>a.wording);this.setState({dropDownHeight:300,dropDownLeft:b.left,dropDownTop:b.top+b.height,dropDownShow:!0,dropDownType:'service',dropDownList:c})}onQueryDropDownClick(a){a.stopPropagation();const b=this.state.queryList.map((a)=>a.query),c=a.currentTarget.getBoundingClientRect();this.setState({dropDownHeight:300,dropDownLeft:c.left,dropDownTop:c.top+c.height,dropDownShow:!0,dropDownType:'query',dropDownList:b})}onContainerClick(){this.setState({dropDownShow:!1})}render(){if(!this.state.lazyLoaded)return null;const c=this.props,d={display:-1==c.id?'none':''},e=this.state.dropDownShow&&'service'==this.state.dropDownType,f=this.state.dropDownShow&&'query'==this.state.dropDownType;return a.createElement('div',{style:{display:this.props.show?'':'none',height:'100%',width:'100%',position:'absolute',zIndex:1e3},onClick:this.onContainerClick.bind(this)},a.createElement(i,{width:455,left:this.state.dropDownLeft,top:this.state.dropDownTop,show:this.state.dropDownShow,list:this.state.dropDownList,height:this.state.dropDownHeight,onSelectClick:this.onDropDownSelect.bind(this,this.state.dropDownType)}),a.createElement(m,{show:this.state.show,inClassName:'ui-animate-pull-down ui-dialog',outClassName:'ui-animate-pull-up ui-dialog',onAnimationOut:this.onAnimationOut.bind(this),style:{width:600,marginLeft:-300}},a.createElement('div',{className:'ui-dialog-hd'},a.createElement('h3',{className:'ui-dialog-title'},l.config.CUSTOM_COMPILATION_CONDITION)),a.createElement('div',{className:'ui-dialog-bd'},a.createElement('div',{className:'ui-form'},a.createElement('div',{className:'ui-form-item ui-form-item-inline'},a.createElement('label',{className:'ui-form-label'},l.config.MODE_NAME),a.createElement('div',{className:'ui-form-controls'},a.createElement('div',{className:'ui-input-box'},a.createElement('input',{type:'text',ref:'nameInput',"data-type":'name',value:this.state.name,onChange:this.onInputChange.bind(this),className:'ui-input'})))),a.createElement('div',{className:'ui-form-item ui-form-item-inline'},a.createElement('label',{className:'ui-form-label'},l.config.SERVICE_CATEGORY),a.createElement('div',{className:'ui-form-controls'},a.createElement('div',{className:'ui-selector ui-selector-default',onClick:this.onServiceDropDownClick.bind(this)},a.createElement('input',{className:'ui-selector-input',value:this.state.service&&this.state.service.wording||l.config.PLEASE_SELECT,readOnly:!0}),a.createElement('div',{className:'ui-selector-dropdown'},a.createElement('i',{className:b({"ui-icon-arrow-down-o":!e,"ui-icon-arrow-up-o":e})}))))),a.createElement('div',{className:'ui-form-item ui-form-item-inline'},a.createElement('label',{className:'ui-form-label'},l.config.QUERY_CRITERIA),a.createElement('div',{className:'ui-form-controls'},a.createElement('div',{className:'ui-selector ui-selector-primary',onClick:this.onQueryDropDownClick.bind(this)},a.createElement('input',{className:'ui-selector-input',value:this.state.query||l.config.PLEASE_SELECT,readOnly:!0}),a.createElement('div',{className:'ui-selector-dropdown'},a.createElement('i',{className:b({"ui-icon-arrow-down-o":!f,"ui-icon-arrow-up-o":f})}))))),a.createElement('div',{className:'ui-form-item ui-form-item-inline'},a.createElement('label',{className:'ui-form-label'},l.config.TEST_SERVER),a.createElement('div',{className:'ui-form-controls'},a.createElement('div',{className:'ui-input-box'},a.createElement('input',{type:'text',"data-type":'debugUrl',value:this.state.debugUrl,onChange:this.onInputChange.bind(this),placeholder:l.config.TEST_SERVER_ADDRESS,className:'ui-input'})))),a.createElement('div',{className:'ui-form-item ui-form-item-inline',style:{display:'none'}},a.createElement('label',{className:'ui-form-label'},l.config.CUSTOM_SEARCH),a.createElement('div',{className:'ui-form-controls'},a.createElement('div',{className:'ui-input-box'},a.createElement('input',{type:'text',"data-type":'customQuery',value:this.state.customQuery,onChange:this.onInputChange.bind(this),className:'ui-input'})))))),a.createElement('div',{className:'ui-dialog-ft'},a.createElement('div',{className:'ui-dialog-action'},a.createElement('button',{className:'ui-button ui-button-warn',style:d,onClick:this.onDelete.bind(this)},l.config.DELETE_THIS_MODE)),a.createElement('div',{className:'ui-dialog-action'},a.createElement('button',{className:'ui-button ui-button-default',onClick:this.onClose.bind(this)},l.config.CANCEL),a.createElement('button',{className:'ui-button ui-button-primary',onClick:this.onConfirm.bind(this)},l.config.CONFIRM)))))}}module.exports=n((a)=>{const b=a.project.current,c=b.compileType,d=b.condiction[c]||{},e=a.window.customCompile,f=e.id,h=d.list&&d.list[f]||{},i=a.config.searchQuery&&a.config.searchQuery.serviceList||[];return{show:a.window.customCompile&&a.window.customCompile.show==g.search,project:a.project.current,id:f,data:h,serviceList:i}},(a)=>({showError:f.bindActionCreators(j.showError,a),setCustomCompile:f.bindActionCreators(c.setCustomCompile,a),projectActions:f.bindActionCreators(d,a),updateSearchQueryConfig:f.bindActionCreators(e.updateSearchQueryConfig,a)}))(o)}(require('lazyload'),require);