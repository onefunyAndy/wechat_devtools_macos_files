'use strict';!function(require,directRequire){const a=require('react'),b=require('moment'),c=require('./3c55dff3626a3ee184d599f076158345.js'),d=require('./72410b6d4968336cd8b2fc1d41f52cdf.js'),e=require('./common/locales/index.js'),f=require('./a8c87029da0fa06e986298d447ab0fe2.js'),g=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),h=require('./fc137838572a83604db39acff8e909e0.js'),i=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),j=require('./25d0beb4120ce2acafb4e03b95444fda.js'),k=require('./d3ce001ab1e75959382f6a7e0156dd17.js'),l=require('./0794878a22a26634e42df858bbaca543.js'),m=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),n=require('./eadce02c750c875a10680bcfedadec88.js'),o=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),{connect:p}=require('react-redux'),{QCLOUD_SVR_NO_FOUND_ERR:q,QCLOUD_SVR_POLL_TIMEOUT:r,QCLOUD_SVR_POLL_DOING:s}=require('./949d8235c744ced2a80121e4dba34c28.js');class t extends a.Component{constructor(a){super(a),this.state={QCloudLeft:a.left,QCloudTop:a.top},this.refreshLists(a.env)}componentDidMount(){this._cancalLocaleListener=e.onChangeLocale(()=>{this.forceUpdate(),this.refreshLists(this.props.env)})}componentWillUnmount(){this._cancalLocaleListener()}refreshLists(a){this.QCloudConstants='nodejs'===a?[{name:e.config.CLOUD_ACTION_UPLOAD,value:d.CLOUD_ACTION_UPLOAD},{name:e.config.CLOUD_ACTION_INSTALL_DEPENDENCE,value:d.CLOUD_ACTION_INSTALL_DEPENDENCE},{name:e.config.CLOUD_ACTION_RESTART_SERVICE,value:d.CLOUD_ACTION_RESTART_SERVICE},{name:e.config.CLOUD_ACTION_STOP_SERVICE,value:d.CLOUD_ACTION_STOP_SERVICE},{name:e.config.CLOUD_ACTION_RESET_SERVICE,value:d.CLOUD_ACTION_RESET_SERVICE},{name:e.config.CLOUD_ACTION_UPLOAD_IDC,value:d.CLOUD_ACTION_UPLOAD_IDC},{name:e.config.CLOUD_ACTION_GOTO_MANAGE_PAGE,value:d.CLOUD_ACTION_GOTO_MANAGE_PAGE},{name:e.config.READ_DOCUMENTATION,value:d.CLOUD_ACTION_GOTO_DOC}]:[{name:e.config.CLOUD_ACTION_UPLOAD,value:d.CLOUD_ACTION_UPLOAD},{name:e.config.CLOUD_ACTION_RESET_ENV,value:d.CLOUD_ACTION_RESET_ENV},{name:e.config.CLOUD_ACTION_UPLOAD_IDC,value:d.CLOUD_ACTION_UPLOAD_IDC},{name:e.config.CLOUD_ACTION_GOTO_MANAGE_PAGE,value:d.CLOUD_ACTION_GOTO_MANAGE_PAGE},{name:e.config.READ_DOCUMENTATION,value:d.CLOUD_ACTION_GOTO_DOC}]}componentWillReceiveProps(a){a.env!==this.props.env&&this.refreshLists(a.env),a.deployDev!=this.props.deployDev&&this.autoDeployDev(),(a.left!=this.props.left||a.top!=this.props.top)&&this.setState({QCloudLeft:a.left,QCloudTop:a.top})}showErr(a,b=e.config.TOOLBAR_ERROR_TITLE,c=()=>{}){this.props.infoActions.setConfirmInfo({show:!0,showCancel:!1,title:b,content:a,callback:async()=>{c()}})}showQcloudErr(a,b){let c=this.QCloudConstants.find((b)=>b.value===a);c=c&&c.name||'';const d=b.code;let f;f=d===q?e.config.QCLOUD_SVR_NO_FOUND_ERR:d===r?e.config.QCLOUD_SVR_POLL_TIMEOUT.format(c):d===s?e.config.QCLOUD_SVR_POLL_DOING.format(c):JSON.stringify(b),this.showErr(f,e.config.QCLOUD_SVR_ACTION_ERR.format(c)),this.props.windowActions.setQCloud({uploading:{show:!1}})}notify(a,b){k({priority:1,title:a,message:b})}async onQCloudSelect(a){const b=this.QCloudConstants[a];switch(b.value){case d.CLOUD_ACTION_UPLOAD:{this.props.qcloud&&this.props.qcloud.uploadStatus===o.STATUS.LOADING?this.showErr(e.config.QCLOUD_WAIT_UPLOAD_ERR1,e.config.QCLOUD_WAIT_UPLOAD_ERR2):this.props.windowActions.setQCloud({uploadShow:!0});break}case d.CLOUD_ACTION_UPLOAD_IDC:{this.props.qcloud&&this.props.qcloud.uploadStatus===o.STATUS.LOADING?this.showErr(e.config.QCLOUD_WAIT_UPLOAD_ERR1,e.config.QCLOUD_WAIT_UPLOAD_ERR2):this.props.windowActions.setQCloud({uploadIDCShow:!0});break}case d.CLOUD_ACTION_DEPLOY_DEV:{this.deployDev();break}case d.CLOUD_ACTION_DEPLOY_PHP_DEV:{this.deployDev();break}case d.CLOUD_ACTION_DEBUG:{this.qcloudDebug();break}case d.CLOUD_ACTION_INSTALL_DEPENDENCE:{this.qcloudInstallDep();break}case d.CLOUD_ACTION_RESTART_SERVICE:{this.qcloudRestartService();break}case d.CLOUD_ACTION_STOP_SERVICE:{this.qcloudStopService();break}case d.CLOUD_ACTION_RESET_SERVICE:{this.qcloudResetService();break}case d.CLOUD_ACTION_RESET_ENV:{this.qcloudResetService();break}case d.CLOUD_ACTION_DEPLOY_PRODUCT:{this.qcloudDeployProduct();break}case d.CLOUD_ACTION_GOTO_MANAGE_PAGE:{j.jumpQCloudPage('https://www.qcloud.com/login/laAccessCallback');break}case d.CLOUD_ACTION_GOTO_DOC:{nw.Shell.openExternal('https://developers.weixin.qq.com/miniprogram/dev/qcloud/qcloud.html');break}}this.props.toolbarActions.toggleClickKey(n.QCLOUD)}async qcloudDebug(){try{this.props.setProjectQCloud({currentOperation:d.CLOUD_ACTION_DEBUG});const a=await l.operatecvm({action:d.CLOUD_ACTION_DEBUG,beforePoll:()=>{this.props.infoActions.showSuccessTip(e.config.QCLOUD_DEBUG_BEGIN_CONTENT)}}),b=l.forMatDebugURL(a.ip,a.tunnelUrl);this.props.windowActions.setQCloudDebugWindow({show:!0,inspectUrl:b}),this.props.setProjectQCloud({currentOperation:''})}catch(a){this.props.setProjectQCloud({currentOperation:''}),this.showQcloudErr(d.CLOUD_ACTION_DEBUG,a)}}async autoDeployDev(){setTimeout(async()=>{let a=await this.deployDev();a&&(this.props.deployDev.options&&this.props.deployDev.options.installDependence&&(a=await this.qcloudInstallDep(!0)),a&&(a=await this.qcloudRestartService(!0),a&&this.props.windowActions.setQCloud({uploading:{show:!0,status:o.QCLOUD_STATUS.DONE,text:e.config.QCLOUD_AUTO_DEPLOY_SUCCESS}})))})}async deployDev(){const a=this.props.env;if(!this.props.qcloud||!this.props.qcloud.data||!this.props.qcloud.data.fileName)return this.showErr(e.config.QCLOUD_DEPLOY_DEV_NEED_UPLOAD,e.config.QCLOUD_DEPLOY_DEV_FAIL_TITLE,()=>{this.props.setProjectQCloud({uploadShow:!0})}),!1;try{this.props.setProjectQCloud({currentOperation:d.CLOUD_ACTION_DEPLOY_DEV});await l.operatecvm({action:'php'===a?d.CLOUD_ACTION_DEPLOY_PHP_DEV:d.CLOUD_ACTION_DEPLOY_DEV,fileName:this.props.qcloud.data.fileName,beforePoll:()=>{this.props.windowActions.setQCloud({uploading:{show:!0,status:o.QCLOUD_STATUS.DEPLOYING,text:e.config.QCLOUD_WATING_TIP_DEPLOYING}}),l.addToNotificationCenter(e.config.QCLOUD_DEPLOY_DEV_BEGIN_CONTENT,e.config.QCLOUD_DEPLOY_DEV_BEGIN_TITLE)}});return this.props.windowActions.setQCloud({uploading:{show:!0,status:o.QCLOUD_STATUS.DEPLOY_SUCCESS,text:e.config.QCLOUD_DEPLOY_DEV_SUCCESS_TITLE,descList:this.props.descList.concat([e.config.QCLOUD_SUCCESS_TIP_DEPLOY.format(b(new Date).calendar())])}}),l.addToNotificationCenter(e.config.QCLOUD_DEPLOY_DEV_SUCCESS_CONTENT,e.config.QCLOUD_DEPLOY_DEV_SUCCESS_TITLE),this.props.setProjectQCloud({currentOperation:''}),!0}catch(a){return this.props.setProjectQCloud({currentOperation:''}),this.showQcloudErr(d.CLOUD_ACTION_DEPLOY_DEV,a),!1}}async qcloudResetService(){const a=this.props.env;try{this.props.setProjectQCloud({currentOperation:d.CLOUD_ACTION_RESET_SERVICE});await l.operatecvm({action:'php'===a?d.CLOUD_ACTION_RESET_ENV:d.CLOUD_ACTION_RESET_SERVICE,beforePoll:()=>{this.props.infoActions.showSuccessTip(e.config.QCLOUD_RESET_SERVICE_BEGIN_CONTENT),l.addToNotificationCenter(e.config.QCLOUD_RESET_SERVICE_BEGIN_CONTENT,e.config.QCLOUD_RESET_SERVICE_BEGIN_TITLE)}});l.addToNotificationCenter(e.config.QCLOUD_RESET_SERVICE_SUCCESS_CONTENT,e.config.QCLOUD_RESET_SERVICE_SUCCESS_TITLE),this.props.infoActions.showSuccessTip(e.config.QCLOUD_RESET_SERVICE_SUCCESS_CONTENT),this.props.setProjectQCloud({currentOperation:''})}catch(a){this.props.setProjectQCloud({currentOperation:''}),this.showQcloudErr(d.CLOUD_ACTION_RESET_SERVICE,a)}}async qcloudDeployProduct(){try{this.props.setProjectQCloud({currentOperation:d.CLOUD_ACTION_DEPLOY_PRODUCT});await l.operatecvm({action:d.CLOUD_ACTION_DEPLOY_PRODUCT,fileName:this.props.qcloud.data.fileName,beforePoll:()=>{l.addToNotificationCenter(e.config.QCLOUD_DEPLOY_PRODUCT_BEGIN_CONTENT,e.config.QCLOUD_DEPLOY_PRODUCT_BEGIN_TITLE)}});l.addToNotificationCenter(e.config.QCLOUD_DEPLOY_PRODUCT_SUCCESS_CONTENT,e.config.QCLOUD_DEPLOY_PRODUCT_SUCCESS_TITLE),this.props.infoActions.showSuccessTip(e.config.QCLOUD_DEPLOY_PRODUCT_SUCCESS_CONTENT),this.props.setProjectQCloud({currentOperation:''})}catch(a){this.props.setProjectQCloud({currentOperation:''}),this.showQcloudErr(d.CLOUD_ACTION_DEPLOY_PRODUCT,a)}}async qcloudInstallDep(a){try{this.props.setProjectQCloud({currentOperation:d.CLOUD_ACTION_INSTALL_DEPENDENCE});await l.operatecvm({action:d.CLOUD_ACTION_INSTALL_DEPENDENCE,beforePoll:()=>{this.props.windowActions.setQCloud({uploading:{show:!0,status:o.QCLOUD_STATUS.INSTALLING,text:e.config.QCLOUD_WATING_TIP_INSTALLINIG}}),l.addToNotificationCenter(e.config.QCLOUD_INSTALL_DEP_BEGIN_CONTENT,e.config.QCLOUD_INSTALL_DEP_BEGIN_TITLE)}});let c=[e.config.QCLOUD_SUCCESS_TIP_INSTALL.format(b(new Date).calendar())];return a&&(c=this.props.descList.concat(c)),this.props.windowActions.setQCloud({uploading:{show:!0,status:o.QCLOUD_STATUS.DEPLOY_SUCCESS,text:e.config.QCLOUD_INSTALL_DEP_SUCCESS_CONTENT,descList:c}}),l.addToNotificationCenter(e.config.QCLOUD_INSTALL_DEP_SUCCESS_CONTENT,e.config.QCLOUD_INSTALL_DEP_SUCCESS_TITLE),this.props.setProjectQCloud({currentOperation:''}),!0}catch(a){return this.props.setProjectQCloud({currentOperation:''}),this.showQcloudErr(d.CLOUD_ACTION_INSTALL_DEPENDENCE,a),!1}}async qcloudRestartService(a){try{this.props.setProjectQCloud({currentOperation:d.CLOUD_ACTION_RESTART_SERVICE});await l.operatecvm({action:d.CLOUD_ACTION_RESTART_SERVICE,beforePoll:()=>{this.props.windowActions.setQCloud({uploading:{show:!0,status:o.QCLOUD_STATUS.RESTARTING,text:e.config.QCLOUD_WATING_TIP_RESTARTING}}),l.addToNotificationCenter(e.config.QCLOUD_RESTART_SERVICE_BEGIN_CONTENT,e.config.QCLOUD_RESTART_SERVICE_BEGIN_TITLE)}});let c=[e.config.QCLOUD_SUCCESS_TIP_RESTART.format(b(new Date).calendar())];return a&&(c=this.props.descList.concat(c)),this.props.windowActions.setQCloud({uploading:{show:!0,status:o.QCLOUD_STATUS.DEPLOY_SUCCESS,text:e.config.QCLOUD_RESTART_SERVICE_SUCCESS_TITLE,descList:c}}),l.addToNotificationCenter(e.config.QCLOUD_RESTART_SERVICE_SUCCESS_CONTENT,e.config.QCLOUD_RESTART_SERVICE_SUCCESS_TITLE),this.props.setProjectQCloud({currentOperation:''}),!0}catch(a){return this.showQcloudErr(d.CLOUD_ACTION_RESTART_SERVICE,a),this.props.setProjectQCloud({currentOperation:''}),!1}}async qcloudStopService(){try{this.props.setProjectQCloud({currentOperation:d.CLOUD_ACTION_STOP_SERVICE});await l.operatecvm({action:d.CLOUD_ACTION_STOP_SERVICE,beforePoll:()=>{this.props.infoActions.showSuccessTip(e.config.QCLOUD_STOP_SERVICE_BEGIN_CONTENT),l.addToNotificationCenter(e.config.QCLOUD_STOP_SERVICE_BEGIN_CONTENT,e.config.QCLOUD_STOP_SERVICE_BEGIN_TITLE)}});l.addToNotificationCenter(e.config.QCLOUD_STOP_SERVICE_SUCCESS_CONTENT,e.config.QCLOUD_STOP_SERVICE_SUCCESS_TITLE,!1),this.props.infoActions.showSuccessTip(e.config.QCLOUD_STOP_SERVICE_SUCCESS_CONTENT),this.props.setProjectQCloud({currentOperation:''})}catch(a){this.props.setProjectQCloud({currentOperation:''}),this.showQcloudErr(d.CLOUD_ACTION_STOP_SERVICE,a)}}render(){const b=this.props,d=this.QCloudConstants.map((a)=>a.name),f='php'===b.env?'PHP':'Node.JS',g=isNaN(this.props.left)?this.props.left:this.props.left-('zh'===e.getLocale()?0:50);return a.createElement(c,{header:e.config.QCLOUD_DROPDOWN_ENV_HEADER.format(f),width:'zh'===e.getLocale()?152:227,left:g,right:this.props.right,top:this.props.top,show:b.clickkey==n.QCLOUD,list:d,divider:[d.length-2,d.length-3],onSelectClick:this.onQCloudSelect.bind(this)})}}module.exports=p((a,b)=>{const c=a.project.current||{},d=c.attr&&c.attr.userbanded,f=c.isTourist||!d;let g='';f&&(g=c.isTourist?e.config.ALERT_TOURIST_FORBIDDEN_CONTENT:d?'':e.config.CGI_ERR_NOT_BAND);const h=a.window.qcloud.actionType||{},i=a.window.qcloud.uploading&&a.window.qcloud.uploading.descList||[];return{qcloud:c&&c.qcloud,clickkey:a.toolbar.clickKey,deployDev:h.deployDev,installDependence:h.installDependence,restartService:h.restartService,project:c,actionBtnDisabled:f,disabledTips:g,descList:i,env:b.env}},(a)=>({toolbarActions:m.bindActionCreators(h,a),windowActions:m.bindActionCreators(f,a),infoActions:m.bindActionCreators(g,a),setProjectQCloud:m.bindActionCreators(i.setProjectQCloud,a)}))(t)}(require('lazyload'),require);