'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('fs'),b=require('react'),c=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),d=require('./fc137838572a83604db39acff8e909e0.js'),e=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),f=require('./6ff091369f442a4678a2ed4a1f758495.js'),g=require('./eadce02c750c875a10680bcfedadec88.js'),h=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),i=require('./84b183688a46c9e2626d3e6f83365e13.js'),j=require('./3c55dff3626a3ee184d599f076158345.js'),k=require('./d28a711224425b00101635efe1034c99.js'),l=require('./da7c31daaf542cf1796023d8e344b98a.js'),m=require('./e98c60a262d8d98e69e574a9d12a21df.js'),n=require('./common/locales/index.js');let o;const p=require('redux'),{connect:q}=require('react-redux');class r extends b.Component{constructor(a){super(a);const b=k.getVendorConfig();let c=Object.keys(b.libs),d=[],e=[];const f=a.project;if(f&&f.shareInfo&&f.shareInfo.from&&f.shareInfo.from.minLib){const a=f.shareInfo.from.minLib;c=c.filter((b)=>0<=i.compareLibVersion(b,a))}this.mapping={};try{this.props.publicLibUsageRate&&this.props.publicLibUsageRate.total&&(this.buildLibsUsageRateMapping(),d=c.map((a)=>this.mapping[a]&&this.mapping[a].toFixed(2)+'%'||'-'),e=c.map((a,b)=>{return'-'===d[b]?void 0:n.config.USER_RATIO.format(' '.repeat(7-(this.mapping[a]&&this.mapping[a].toFixed(2).length)||7))}))}catch(a){}const g=f.scripts||{};this.state=_extends({vendorVersionDownloading:[],vendorVersionDownloadFailed:!1,lazyLoaded:!!a.show,libs:c,libsExt:d,libsHoverExt:e,libDropDownLeft:0,libDropDownTop:0,libDropDownWidth:'200px'},g),setTimeout(async()=>{try{const b=await k.setVersionAsync(a.project.libVersion);b!=a.project.libVersion&&a.setProjectLibVersion(b)}catch(a){'../../../common/log/index.js'.error(a)}}),this._onVendorChange=this.onVendorChange.bind(this),this._onVendorDownloadStart=this.onVendorDownloadStart.bind(this),this._onVendorDownloadFail=this.onVendorDownloadFail.bind(this),this._onVendorDownloadSuccess=this.onVendorDownloadSuccess.bind(this)}onVendorDownloadStart(a){const b=this.state.vendorVersionDownloading||[],c=Array.from(new Set([...b,a]));this.setState({vendorVersionDownloading:c,vendorVersionDownloadFailed:!1})}onVendorDownloadComplete(a){const b=this.state.vendorVersionDownloading||[],c=b.findIndex((b)=>b===a);0<=c&&(b.splice(c,1),this.setState({vendorVersionDownloading:[...b]}))}onVendorDownloadSuccess(a){this.onVendorDownloadComplete(a)}onVendorDownloadFail(a){this.onVendorDownloadComplete(a),this.setState({vendorVersionDownloadFailed:!0})}onVendorDownloadStatusClick(a){a.stopPropagation(),this.state.vendorVersionDownloadFailed&&k.downloadVendorIfNeeded().catch(()=>{})}componentDidMount(){k.on('VENDOR_CONFIG_CHANGE',this._onVendorChange),k.on('VENDOR_DOWNLOAD_START',this._onVendorDownloadStart),k.on('VENDOR_DOWNLOAD_FAIL',this._onVendorDownloadFail),k.on('VENDOR_DOWNLOAD_SUCCESS',this._onVendorDownloadSuccess),this.onVendorDownloadStart('null'),k.checkInit().then(()=>{this.onVendorDownloadComplete('null')}).catch(()=>{this.onVendorDownloadFail('null')}),this._cancalLocaleListener=n.onChangeLocale(()=>this.forceUpdate())}componentWillUnmount(){k.off('VENDOR_CONFIG_CHANGE',this._onVendorChange),k.off('VENDOR_DOWNLOAD_START',this._onVendorDownloadStart),k.off('VENDOR_DOWNLOAD_FAIL',this._onVendorDownloadFail),k.off('VENDOR_DOWNLOAD_SUCCESS',this._onVendorDownloadSuccess),this._cancalLocaleListener()}componentWillReceiveProps(a){a.showDropDown||this.setState({showLibs:!1}),a.show!=this.props.show&&(a.show?this.setState({lazyLoaded:!0}):this.setState({showLibs:!1})),a.project!=this.props.project&&this.setState(_extends({},a.project.scripts))}componentDidUpdate(a){if(a.publicLibUsageRate!==this.props.publicLibUsageRate)try{this.buildLibsUsageRateMapping();const a=this.state.libs||[],b=a.map((a)=>this.mapping[a]&&this.mapping[a].toFixed(2)+'%'||'-'),c=a.map((a,c)=>{return'-'===b[c]?void 0:n.config.USER_RATIO.format(' '.repeat(7-(this.mapping[a]&&this.mapping[a].toFixed(2).length)||7))});this.setState({libsExt:b,libsHoverExt:c})}catch(a){}}buildLibsUsageRateMapping(){this.mapping={},this.props.publicLibUsageRate.total.forEach((a)=>{this.mapping[a.sdkVer]=a.percentage})}onVendorChange(a){this.setState({libs:Object.keys(a.libs)})}formatTime(a){return a?new Date(a).toTimeString():'----'}onShowLibs(a){if(a.stopPropagation(),this.state.showLibs)this.setState({showLibs:!1});else{const b=a.currentTarget,c=b.getBoundingClientRect();this.setState({showLibs:!this.state.showLibs,libDropDownLeft:c.left,libDropDownTop:c.top+25,libDropDownWidth:c.width+'px'}),this.props.onDropdownShow&&this.props.onDropdownShow(a)}}onSettingChange(a){const b=this.props.project.setting[a];this.props.setProjectSetting({[a]:!b});const c=this.props.project.appid;switch(a){case'es6':{l(b?'weapp_toolbar_details_closees6':'weapp_toolbar_details_openes6',c);break}case'minified':{l(b?'weapp_toolbar_details_closemin':'weapp_toolbar_details_openmin',c);break}case'postcss':{l(b?'weapp_toolbar_details_closecss':'weapp_toolbar_details_opencss',c);break}case'urlCheck':{l(b?'weapp_toolbar_details_closeurl':'weapp_toolbar_details_openurl',c);break}case'nodeModules':{l(b?'weapp_toolbar_details_disablenodemodules':'weapp_toolbar_details_enablenodemodules',c);break}case'uglifyFileName':{l(b?'weapp_toolbar_details_disableuglifyfilename':'weapp_toolbar_details_enableuglifyfilename',c);break}}}onProjectScriptsChange(a,b){const c=b.target.value;this.setState({[a]:c}),clearTimeout(this.scriptChangeTimer),this.scriptChangeTimer=setTimeout(()=>{this.onProjectScriptsBlur()},3e3)}onProjectScriptsBlur(){clearTimeout(this.scriptChangeTimer),this.props.setProjectScripts({beforeCompile:this.state.beforeCompile||'',beforePreview:this.state.beforePreview||'',beforeUpload:this.state.beforeUpload||''})}onSelectClick(a){this.props.setProjectLibVersion(this.state.libs[a]),this.setState({showLibs:!1})}onTestClick(){this.props.openMobileTest()}jumpToWXSDocument(a){a.stopPropagation(),nw.Shell.openExternal('https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&docid=47e9b796f3c941368b1ad9f5d73b14d1')}onNewFeatureDetailClick(){nw.Shell.openExternal('https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=34fde56e6ee55dac840952f4bf46cbfb&lang=zh_CN')}jumpToManagementCenter(){nw.Shell.openExternal('https://kf.qq.com/faq/171128zqiENn171128uyyEZz.html?scene_id=kf4595')}onClusterCompileClick(){const a=!this.props.compilerSettings.clusterCompile;this.props.updateIDESetting('compiler','clusterCompile',a)}render(){if(!this.state.lazyLoaded)return null;const a=this.props,c=a.project,d=c.history||{},e=this.formatTime(d.test),f=this.formatTime(d.upload),g=this.formatTime(d.preview),h=c.setting||{},i=`tab-content ${a.show?'tab-content-active':''}`;try{'number'!=typeof o&&(o=require('os').cpus().length)}catch(a){console.error(a)}const k=this.state.vendorVersionDownloading,l=this.state.vendorVersionDownloadFailed,m='en'===n.getLocale()?'Preprocessing Command':'';return b.createElement('div',{className:i},b.createElement('section',null,!c.isMiniCode&&c.attr&&c.attr.released?b.createElement('div',{className:'meta-item ui-flex'},b.createElement('label',{className:'meta-label'},n.config.MIN_VER_BASE_LIB),b.createElement('p',{className:'ui-flex-item'},c.attr.minPublicLibVersion||n.config.NOT_SET),b.createElement('a',{style:{color:'#0434fc'},onClick:this.jumpToManagementCenter},n.config.VIEW_USER_BASE_LIB)):null,b.createElement('div',{className:'meta-item ui-flex'},b.createElement('label',{className:'meta-label'},n.config.DEBUG_BASE_LIB),b.createElement('div',{className:'meta-value ui-flex-item'},b.createElement('div',{className:'ui-selector ui-selector-default',onClick:this.onShowLibs.bind(this)},b.createElement('i',{className:l?'ui-icon-error':'ui-icon-spinner',style:{width:'22px',height:'20px',position:'absolute',left:'-24px',top:'6px',cursor:l?'pointer':'default',display:l||0<k.length?'':'none'},onClick:this.onVendorDownloadStatusClick.bind(this),title:l?n.config.CHECK_NETWORK_CONNECTION:n.config.LOAD_PUBLIC_LIB}),b.createElement('input',{className:'ui-selector-input',placeholder:'',readOnly:!0,value:c.libVersion}),b.createElement('div',{className:'ui-selector-ext'},this.mapping[c.libVersion]?this.mapping[c.libVersion].toFixed(2)+'%':''),b.createElement('div',{className:'ui-selector-dropdown'},b.createElement('i',{className:this.state.showLibs?'ui-icon-arrow-up-o':'ui-icon-arrow-down-o'})),b.createElement(j,{show:this.state.showLibs,list:this.state.libs,listExt:this.state.libsExt,hoverExt:this.state.libsHoverExt,left:this.state.libDropDownLeft,top:this.state.libDropDownTop,width:this.state.libDropDownWidth,height:250,onSelectClick:this.onSelectClick.bind(this)}))))),b.createElement('section',null,b.createElement('div',{className:'meta-item ui-flex'},b.createElement('div',{className:'meta-value ui-flex-item'},b.createElement('label',{className:'ui-checkbox',onClick:this.onSettingChange.bind(this,'es6')},b.createElement('i',{className:h.es6?'ui-icon-checkbox-o':'ui-icon-checkbox'}),b.createElement('span',{className:'ui-checkbox-text'},n.config.ES6_TO_ES5)))),'game'===c.compileType?null:b.createElement('div',{className:'meta-item ui-flex'},b.createElement('div',{className:'meta-value ui-flex-item'},b.createElement('label',{className:'ui-checkbox',onClick:this.onSettingChange.bind(this,'postcss')},b.createElement('i',{className:h.postcss?'ui-icon-checkbox-o':'ui-icon-checkbox'}),b.createElement('span',{className:'ui-checkbox-text'},n.config.AUTOCOMPLETED_WHEN_UPLOADING)))),b.createElement('div',{className:'meta-item ui-flex'},b.createElement('div',{className:'meta-value ui-flex-item'},b.createElement('label',{className:'ui-checkbox',onClick:this.onSettingChange.bind(this,'minified')},b.createElement('i',{className:h.minified?'ui-icon-checkbox-o':'ui-icon-checkbox'}),b.createElement('span',{className:'ui-checkbox-text'},n.config.AUTO_COMPRESSED_WHEN_UPLOADING)))),b.createElement('div',{className:'meta-item ui-flex'},b.createElement('div',{className:'meta-value ui-flex-item'},b.createElement('label',{className:'ui-checkbox',onClick:this.onSettingChange.bind(this,'nodeModules')},b.createElement('i',{className:h.nodeModules?'ui-icon-checkbox-o':'ui-icon-checkbox'}),b.createElement('span',{className:'ui-checkbox-text'},n.config.USE_NPM_MODLUE)))),b.createElement('div',{className:'meta-item ui-flex'},b.createElement('div',{className:'meta-value ui-flex-item'},b.createElement('label',{className:'ui-checkbox',onClick:this.onSettingChange.bind(this,'scriptsEnable')},b.createElement('i',{className:h.scriptsEnable?'ui-icon-checkbox-o':'ui-icon-checkbox'}),b.createElement('span',{className:'ui-checkbox-text'},n.config.ENABLE_CUSTOM_PROCESSING)))),b.createElement('div',{style:{display:h.scriptsEnable?'':'none'}},b.createElement('div',{className:'meta-item ui-flex'},b.createElement('div',{className:'meta-value ui-flex-item'},b.createElement('div',{className:'ui-form-item ui-form-item-inline'},b.createElement('label',{className:'ui-form-label ui-desc'},n.config.PRE_COMPILATION_PREPROCESSING),b.createElement('div',{className:'ui-form-controls'},b.createElement('div',{className:'ui-input-box'},b.createElement('input',{type:'text',placeholder:m,className:'ui-input',value:this.state.beforeCompile,onBlur:this.onProjectScriptsBlur.bind(this),onChange:this.onProjectScriptsChange.bind(this,'beforeCompile')})))))),b.createElement('div',{className:'meta-item ui-flex'},b.createElement('div',{className:'meta-value ui-flex-item'},b.createElement('div',{className:'ui-form-item ui-form-item-inline'},b.createElement('label',{className:'ui-form-label ui-desc'},n.config.PRE_PREVIEW_PREPROCESSING),b.createElement('div',{className:'ui-form-controls'},b.createElement('div',{className:'ui-input-box'},b.createElement('input',{type:'text',placeholder:m,className:'ui-input',value:this.state.beforePreview,onBlur:this.onProjectScriptsBlur.bind(this),onChange:this.onProjectScriptsChange.bind(this,'beforePreview')})))))),b.createElement('div',{className:'meta-item ui-flex'},b.createElement('div',{className:'meta-value ui-flex-item'},b.createElement('div',{className:'ui-form-item ui-form-item-inline'},b.createElement('label',{className:'ui-form-label ui-desc'},n.config.PRE_UPLOAD_PREPROCESSING),b.createElement('div',{className:'ui-form-controls'},b.createElement('div',{className:'ui-input-box'},b.createElement('input',{type:'text',placeholder:m,className:'ui-input',value:this.state.beforeUpload,onBlur:this.onProjectScriptsBlur.bind(this),onChange:this.onProjectScriptsChange.bind(this,'beforeUpload')})))))))),b.createElement('section',null,b.createElement('div',{className:'meta-item ui-flex'},b.createElement('div',{className:'meta-value ui-flex-item'},b.createElement('label',{className:'ui-checkbox',onClick:this.onSettingChange.bind(this,'urlCheck')},b.createElement('i',{className:h.urlCheck?'ui-icon-checkbox':'ui-icon-checkbox-o'}),b.createElement('span',{className:'ui-checkbox-text'},n.config.NOT_VERIFY_VALIDITY)))),b.createElement('div',{className:'meta-item ui-flex',style:{display:'none'}},b.createElement('div',{className:'meta-value ui-flex-item'},b.createElement('label',{className:'ui-checkbox',onClick:this.onSettingChange.bind(this,'newFeature')},b.createElement('i',{className:h.newFeature?'ui-icon-checkbox-o':'ui-icon-checkbox'}),b.createElement('span',{className:'ui-checkbox-text'},n.config.NEW_FEATURE_SOURCEMAP)),b.createElement('a',{style:{display:'none',color:'#0434fc',userSelect:'none',fontSize:13,verticalAlign:'text-bottom'},onClick:this.onNewFeatureDetailClick.bind(this)},n.config.TOOLBAR_DETAILS)))),4<o&&b.createElement('section',null,b.createElement('div',{className:'meta-item ui-flex'},b.createElement('div',{className:'meta-value ui-flex-item'},b.createElement('label',{className:'ui-checkbox',onClick:this.onClusterCompileClick.bind(this)},b.createElement('i',{className:a.compilerSettings.clusterCompile?'ui-icon-checkbox-o':'ui-icon-checkbox'}),b.createElement('span',{className:'ui-checkbox-text'},n.config.ENABLE_MULTI_CORE_COMPILATION))))))}}module.exports=q((a)=>{const b=a.info.projectInfo||{},c=a.settings;return{show:'setting'===b.selected,publicLibUsageRate:a.public.publicLibUsageRate||{},project:a.project.current||{},compilerSettings:c.compiler||{}}},(a)=>({toggleClickKey:h.bindActionCreators(d.toggleClickKey,a),setProjectSetting:h.bindActionCreators(e.setProjectSetting,a),setProjectLibVersion:h.bindActionCreators(e.setProjectLibVersion,a),setProjectScripts:h.bindActionCreators(e.setProjectScripts,a),openMobileTest:h.bindActionCreators(f.openMobileTest,a),updateIDESetting(){a(m.updateIDESetting.apply(this,arguments))}}))(r)}(require('lazyload'),require);