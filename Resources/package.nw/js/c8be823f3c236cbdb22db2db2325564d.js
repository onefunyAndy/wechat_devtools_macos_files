'use strict';!function(require,directRequire){const a=require('react'),b=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),c=require('./875171e7b864aa58d026d4fa0999fbd1.js');class d extends a.Component{constructor(a){super(a),this.state={lazyLoaded:a.show,show:a.show}}componentWillReceiveProps(a){const b={show:a.show};a.show&&(b.lazyLoaded=!0),this.setState(b)}handleCancelClick(){this.setState({show:!1}),this.props.hideModal({callbackID:this.props.callbackID,res:{errMsg:'showModal:ok',cancel:1,confirm:0}})}handleConfirmClick(){this.setState({show:!1}),this.props.hideModal({callbackID:this.props.callbackID,res:{errMsg:'showModal:ok',cancel:0,confirm:1}})}onAnimationOut(){}render(){if(!this.state.lazyLoaded)return null;const b=this.props;return a.createElement(c,{style:{position:'absolute',left:0,top:0,width:'100%',height:'100%',zIndex:5},show:this.state.show,inClassName:'ui-animate-fadeIn',outClassName:'ui-animate-fadeOut',onAnimationOut:this.onAnimationOut.bind(this)},a.createElement('div',{className:'weui-mask'}),a.createElement('div',{className:'portrait'===this.props.orientation?'weui-dialog':'weui-dialog weui-dialog-orientation'},a.createElement('div',{className:'weui-dialog__hd'},a.createElement('strong',{className:'weui-dialog__title',id:'wx.showModal.title'},b.title)),a.createElement('div',{className:'weui-dialog__bd',id:'wx.showModal.content'},b.content),a.createElement('div',{className:'weui-dialog__ft'},a.createElement('a',{className:'weui-dialog__btn weui-dialog__btn_default auto_test_btn_default',"data-type":'modal',style:{color:b.cancelColor,display:b.showCancel?'':'none'},onClick:this.handleCancelClick.bind(this),id:'wx.showModal.cancel'},b.cancelText),a.createElement('a',{className:'weui-dialog__btn weui-dialog__btn_primary auto_test_btn_primary',"data-type":'modal',style:{color:b.confirmColor},onClick:this.handleConfirmClick.bind(this),id:'wx.showModal.confirm'},b.confirmText))))}}module.exports=d}(require('lazyload'),require);