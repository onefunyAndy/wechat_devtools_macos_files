'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('react'),b=require('redux'),c=require('classnames'),d=require('./a8c87029da0fa06e986298d447ab0fe2.js'),e=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),f=require('./ba23d8b47b1f4ea08b9fd49939b9443f.js'),g=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),h=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),i=require('./3c55dff3626a3ee184d599f076158345.js'),j=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),k=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),l=require('./875171e7b864aa58d026d4fa0999fbd1.js'),m=require('./da7c31daaf542cf1796023d8e344b98a.js'),n=require('./common/locales/index.js'),{connect:o}=require('react-redux');class p extends a.Component{constructor(a){super(a),this.state=this.resetState(a)}componentDidMount(){this._cancalLocaleListener=n.onChangeLocale(()=>this.forceUpdate())}componentWillUnmount(){this._cancalLocaleListener()}componentWillReceiveProps(a){let b={};if(a.show&&(b.lazyLoaded=!0),a.sceneMap!=this.props.sceneMap){const c=this.state.scene;b.sceneWording=`${c}: ${a.sceneMap[c]}`,b.groupFormShow=c==k.SCENE_SHARE_TICKET}a.id!=this.props.id&&(b=_extends({},b,this.resetState(a))),a.pathName!=this.props.pathName&&(b.pathName=a.data.pathName||a.pathName),a.show!=this.props.show&&(b.show=a.show,b=_extends({},b,this.resetState(a))),a.simulateUpdate!=this.props.simulateUpdate&&(b.simulateUpdate=a.simulateUpdate),this.setState(b)}resetState(a){const b=a.data.scene,c=a.data.shareInfo,d=a.data.referrerInfo,e=a.sceneMap[b],f=b==k.SCENE_SHARE_TICKET;return _extends({simulateUpdate:a.simulateUpdate,lazyLoaded:a.show,pathName:a.pathName,sceneWording:e&&`${b}: ${e}`,groupWording:c&&c.groupName||'',groupFormShow:f},d,a.data)}getSceneWording(){}onInputChange(a){const b=a.currentTarget,c=b.dataset,d=c.type;this.setState({[d]:b.value})}onSimulateUpdateChange(){this.setState({simulateUpdate:!this.state.simulateUpdate})}onClose(){this.setState({show:!1})}onConfirm(){if(!this.state.name)return void this.refs.nameInput.focus();const a=this.state.pathName||this.props.pages[0],b=this.state.scene,c={id:this.props.id,name:this.state.name,pathName:a,query:this.state.query,scene:b};if(b==k.SCENE_SHARE_TICKET&&(c.shareInfo=this.state.shareInfo),(this.couldInputExtralData(b)||this.couldInputAppId(b))&&(c.referrerInfo={},this.couldInputAppId(b)&&(c.referrerInfo.appId=this.state.appId),this.couldInputExtralData(b))){try{this.checkValidExtraData(this.state.extraData)}catch(a){return this.setState({extraDataErr:n.config.PARSE_ERROR+'\uFF0C'+a}),void this.refs.extraInput.focus()}c.referrerInfo.extraData=this.state.extraData}this.props.projectActions.setCompileCondiction(c),this.props.simulatorActions.setSimulateUpdate(this.state.simulateUpdate),this.onClose(),m('weapp_add_debugproto',this.props.project.appid)}onDelete(){this.props.projectActions.removeCompileCondiction({id:this.props.id}),this.onClose(),m('weapp_del_debugproto',this.props.project.appid)}onPageDropDownClick(a){a.stopPropagation();const b=a.currentTarget.getBoundingClientRect(),c=this.refs.pageInput.value,d=this.props.pages.filter((a)=>0<=a.indexOf(c));this.setState({dropDownHeight:300,dropDownLeft:b.left,dropDownTop:b.top+b.height,dropDownShow:!0,dropDownType:'page',dropDownList:d})}onAllPageDropDownClick(a){a.stopPropagation();const b=a.currentTarget.getBoundingClientRect();this.setState({dropDownHeight:300,dropDownLeft:b.left-437,dropDownTop:b.top+b.height,dropDownShow:!0,dropDownType:'page',dropDownList:this.props.pages})}onSceneDropDownClick(a){a.stopPropagation();const b=a.currentTarget.getBoundingClientRect(),c=this.refs.sceneInput.value,d=this.props.sceneList.map((a)=>`${a.value}: ${a.name}`),e=d.filter((a)=>0<=a.indexOf(c));this.setState({dropDownHeight:300,dropDownLeft:b.left,dropDownTop:b.top+b.height,dropDownShow:!0,dropDownType:'scene',dropDownList:e})}onAllSceneDropDownClick(a){a.stopPropagation();const b=a.currentTarget.getBoundingClientRect(),c=this.props.sceneList.map((a)=>`${a.value}: ${a.name}`);this.setState({dropDownHeight:300,dropDownLeft:b.left-437,dropDownTop:b.top+b.height,dropDownShow:!0,dropDownType:'scene',dropDownList:c})}onPageSelect(a){this.setState({pathName:this.state.dropDownList[a],dropDownShow:!1})}onSceneSelect(a){const b=this.state.dropDownList[a],c=b.split(': ')[0],d=c==k.SCENE_SHARE_TICKET;this.setState({scene:c,sceneWording:b,dropDownShow:!1,groupFormShow:d})}couldInputAppId(a){return a==k.SCENE_MINI_PROGRAM||a==k.SCENE_MINI_PROGRAM_BACK||a==k.SCENE_PROFILE||a==k.SCENE_CUSTOM_MENU||a==k.SCENE_APP_SHARE_MESSAGE||a==k.SCENE_TEMPLETE_MESSAGE}couldInputExtralData(a){return a==k.SCENE_MINI_PROGRAM||a==k.SCENE_MINI_PROGRAM_BACK}onGroupDropDownClick(a){a.stopPropagation();const b=a.currentTarget.getBoundingClientRect(),c=this.props.groupList.map((a)=>`${a.room_topic}`);this.setState({dropDownHeight:'auto',dropDownLeft:b.left,dropDownTop:b.top,dropDownShow:!0,dropDownType:'group',dropDownList:c})}onGroupSelect(a){const b=this.props.groupList[a],c=b.room_topic;this.setState({shareInfo:{groupName:c,shareName:b.share_name,shareKey:b.share_key},groupWording:c,dropDownShow:!1})}onDropDownSelect(a,b){'group'==a?this.onGroupSelect(b):'scene'==a?this.onSceneSelect(b):'page'==a&&this.onPageSelect(b)}checkValidExtraData(a){const b=JSON.parse(a);if('[object Object]'!=Object.prototype.toString.call(b))throw new Error(n.config.MUST_BE_OBJECT)}changeExtraData(a){const b=a.target.value;let c='';try{this.checkValidExtraData(b)}catch(a){c=n.config.PARSE_ERROR+'\uFF0C'+a}this.setState({extraData:b,extraDataErr:c})}onContainerClick(a){a.stopPropagation(),this.setState({dropDownShow:!1})}onPagePathChange(a){const b=a.currentTarget.value,c=this.props.pages.filter((a)=>0<=a.indexOf(b));this.setState({pathName:b,dropDownList:c})}onSceneChange(a){const b=a.currentTarget.value,c=this.props.sceneList.map((a)=>`${a.value}: ${a.name}`),d=c.filter((a)=>0<=a.indexOf(b));this.setState({sceneWording:b,dropDownList:d})}onAnimationOut(){this.props.setCustomCompile({show:!1})}render(){if(!this.state.lazyLoaded)return null;const b=this.props,d={display:-1==b.id?'none':''};return a.createElement('div',{onClick:this.onContainerClick.bind(this),style:{display:this.props.show?'':'none',height:'100%',width:'100%',position:'absolute',zIndex:1e3}},a.createElement(i,{width:455,left:this.state.dropDownLeft,top:this.state.dropDownTop,show:this.state.dropDownShow,list:this.state.dropDownList,height:this.state.dropDownHeight,onSelectClick:this.onDropDownSelect.bind(this,this.state.dropDownType)}),a.createElement(l,{show:this.state.show,inClassName:'ui-animate-pull-down ui-dialog',outClassName:'ui-animate-pull-up ui-dialog',onAnimationOut:this.onAnimationOut.bind(this),style:{width:600,marginLeft:-300}},a.createElement('div',{className:'ui-dialog-hd'},a.createElement('h3',{className:'ui-dialog-title'},n.config.CUSTOM_COMPILATION_CONDITION)),a.createElement('div',{className:'ui-dialog-bd'},a.createElement('div',{className:'ui-form'},a.createElement('div',{className:'ui-form-item ui-form-item-inline'},a.createElement('label',{className:'ui-form-label'},n.config.MODE_NAME),a.createElement('div',{className:'ui-form-controls'},a.createElement('div',{className:'ui-input-box'},a.createElement('input',{type:'text',"data-type":'name',ref:'nameInput',value:this.state.name,onChange:this.onInputChange.bind(this),className:'ui-input'})))),a.createElement('div',{className:'ui-form-item ui-form-item-inline'},a.createElement('label',{className:'ui-form-label'},n.config.STARTUP_PAGE),a.createElement('div',{className:'ui-form-controls'},a.createElement('div',{className:'ui-selector ui-selector-default',onClick:this.onPageDropDownClick.bind(this)},a.createElement('input',{className:'ui-selector-input',ref:'pageInput',placeholder:n.config.SELECT_DEFAULT_PAGE,value:this.state.pathName,onChange:this.onPagePathChange.bind(this)}),a.createElement('div',{className:'ui-selector-dropdown',onClick:this.onAllPageDropDownClick.bind(this),style:{display:b.pages&&0<b.pages.length?'':'none'}},a.createElement('i',{className:c({"ui-icon-arrow-down-o":!this.state.dropDownShow||'page'!=this.state.dropDownType,"ui-icon-arrow-up-o":this.state.dropDownShow&&'page'==this.state.dropDownType})}))))),a.createElement('div',{className:'ui-form-item ui-form-item-inline'},a.createElement('label',{className:'ui-form-label'},n.config.STARTUP_PARAMETERS),a.createElement('div',{className:'ui-form-controls'},a.createElement('div',{className:'ui-selector ui-selector-primary'},a.createElement('input',{className:'ui-selector-input',value:this.state.query,"data-type":'query',placeholder:`${n.config.FOR_EXAMPLE}：name=vendor&color=black`,onChange:this.onInputChange.bind(this)})))),a.createElement('div',{className:'ui-form-item ui-form-item-inline'},a.createElement('label',{className:'ui-form-label'},n.config.ENTER_SCENE),a.createElement('div',{className:'ui-form-controls',onClick:this.onSceneDropDownClick.bind(this)},a.createElement('div',{className:'ui-selector ui-selector-default'},a.createElement('input',{className:'ui-selector-input',ref:'sceneInput',placeholder:n.config.DEFAULT,value:this.state.sceneWording,onChange:this.onSceneChange.bind(this)}),a.createElement('div',{className:'ui-selector-dropdown',onClick:this.onAllSceneDropDownClick.bind(this)},a.createElement('i',{className:c({"ui-icon-arrow-down-o":!this.state.dropDownShow||'scene'!=this.state.dropDownType,"ui-icon-arrow-up-o":this.state.dropDownShow&&'scene'==this.state.dropDownType})}))))),a.createElement('div',{className:'ui-form-item ui-form-item-inline',style:this.state.groupFormShow?{}:j.displayNone},a.createElement('label',{className:'ui-form-label'},n.config.SELECT_GROUP),a.createElement('div',{className:'ui-form-controls',onClick:this.onGroupDropDownClick.bind(this)},a.createElement('div',{className:'ui-selector ui-selector-primary'},a.createElement('input',{className:'ui-selector-input',placeholder:n.config.PLEASE_SELECT,readOnly:!0,value:this.state.groupWording}),a.createElement('div',{className:'ui-selector-dropdown'},a.createElement('i',{className:c({"ui-icon-arrow-down-o":!this.state.dropDownShow||'group'!=this.state.dropDownType,"ui-icon-arrow-up-o":this.state.dropDownShow&&'group'==this.state.dropDownType})}))))),a.createElement('div',{className:'ui-form-item ui-form-item-inline',style:this.couldInputAppId(this.state.scene)?{}:j.displayNone},a.createElement('label',{className:'ui-form-label'},n.config.SET,' appid'),a.createElement('div',{className:'ui-form-controls'},a.createElement('div',{className:'ui-input-box'},a.createElement('input',{type:'text',"data-type":'appId',value:this.state.appId,onChange:this.onInputChange.bind(this),placeholder:n.config.STARTED_APPID,className:'ui-input'})))),a.createElement('div',{className:'ui-form-item ui-form-item-inline',style:this.couldInputExtralData(this.state.scene)?{}:j.displayNone},a.createElement('label',{className:'ui-form-label'},n.config.SET,' extraData'),a.createElement('div',{className:'ui-form-controls'},a.createElement('div',{className:'ui-input-box'},a.createElement('input',{type:'text',ref:'extraInput',value:this.state.extraData,onChange:this.changeExtraData.bind(this),className:'ui-input'}))),a.createElement('p',{style:this.state.extraDataErr?{}:j.displayNone},' ',this.state.extraDataErr,' ')),a.createElement('div',{className:'ui-form-item ui-form-item-inline'},a.createElement('label',{className:'ui-form-label'}),a.createElement('div',{className:'ui-form-controls'},a.createElement('label',{className:'ui-checkbox',onClick:this.onSimulateUpdateChange.bind(this)},a.createElement('i',{className:this.state.simulateUpdate?'ui-icon-checkbox-o':'ui-icon-checkbox'}),a.createElement('span',{className:'ui-checkbox-text'},n.config.SIMULATION_UPDATE_AT_COMPILE_DETAIL.format('1.9.90'))))))),a.createElement('div',{className:'ui-dialog-ft'},a.createElement('div',{className:'ui-dialog-action'},a.createElement('button',{className:'ui-button ui-button-warn',style:d,onClick:this.onDelete.bind(this)},n.config.DELETE_THIS_MODE)),a.createElement('div',{className:'ui-dialog-action'},a.createElement('button',{className:'ui-button ui-button-default',onClick:this.onClose.bind(this)},n.config.CANCEL),a.createElement('button',{className:'ui-button ui-button-primary',onClick:this.onConfirm.bind(this)},n.config.CONFIRM)))))}}module.exports=o((a)=>{const b=a.project.current;let c=b.compileType;c==h.plugin&&(c=h.weapp);const d=b.condiction&&b.condiction[c]||{},e=a.window.customCompile,f=e.id,g=d.list&&d.list[f]||{},i=a.simulator.appConfig&&a.simulator.appConfig.pages||[],j=b.attr&&b.attr.share_info||[],k=a.simulator,l=a.simulator.webviewInfos[a.simulator.currentWebviewID]||{},m=l.pathName;return{show:e&&(e.show==h.weapp||e.show==h.plugin),project:a.project.current,appConfig:a.simulator.appConfig||{},sceneMap:a.config.sceneMap||{},sceneList:a.config.sceneList||[],pathName:m,groupList:j,pages:i,id:f,data:g,simulateUpdate:k.simulateUpdate}},(a)=>({setCustomCompile:g.bindActionCreators(d.setCustomCompile,a),projectActions:g.bindActionCreators(e,a),simulatorActions:g.bindActionCreators(f,a)}))(p)}(require('lazyload'),require);