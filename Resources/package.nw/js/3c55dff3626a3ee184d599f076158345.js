'use strict';!function(require,directRequire){const a=require('react'),b=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),c=require('./875171e7b864aa58d026d4fa0999fbd1.js'),d=()=>{};class e extends a.Component{constructor(a){super(a),this.state={lazyLoaded:a.show,show:a.show}}componentWillReceiveProps(a){a.show!=this.props.show&&this.setState({show:a.show,lazyLoaded:!0})}onSelectClick(a,b){b.stopPropagation(),'function'==typeof this.props.onSelectClick&&this.props.onSelectClick(a,b)}onMouseEnter(a,b){this.props.onMouseEnter&&this.props.onMouseEnter(a,b)}onMouseLeave(a,b){this.props.onMouseLeave&&this.props.onMouseLeave(a,b)}render(){if(!this.state.lazyLoaded)return null;const b=[];let e;this.props.list&&this.props.list.map((c,d)=>{b.push(a.createElement('div',{className:'ui-dropdown-item ui-hover-trigger',key:d,index:d,onClick:this.onSelectClick.bind(this,d),onMouseEnter:this.onMouseEnter.bind(this,d),onMouseLeave:this.onMouseLeave.bind(this,d)},a.createElement('p',null,c),this.props.rightArrow?a.createElement('span',null,a.createElement('i',{className:'ui-icon-menu-arrow-right'})):null,this.props.hoverExt&&this.props.listExt?a.createElement('p',{className:'ui-desc'},a.createElement('span',{className:'ui-hover-item',style:{whiteSpace:'pre'}},this.props.hoverExt&&this.props.hoverExt[d]||''),this.props.listExt&&this.props.listExt[d]||''):null,this.props.subDropdowns&&this.props.subDropdowns[d]&&this.props.subDropdowns[d].class?(e=this.props.subDropdowns[d].class)&&a.createElement(e,this.props.subDropdowns[d].props):null)),this.props.divider&&0<this.props.divider.length&&0<=this.props.divider.indexOf(d)&&b.push(a.createElement('div',{className:'ui-dropdown-divider',key:`divider_${d}`}))});const f={width:this.props.width||'auto',top:this.props.top||0};return'undefined'!=typeof this.props.left&&(f.left=this.props.left),'undefined'!=typeof this.props.right&&(f.right=this.props.right),a.createElement(c,{show:this.state.show,style:f,inClassName:'ui-popover',outClassName:'ui-animate-fadeOut ui-popover'},a.createElement('div',{className:'ui-dropdown',id:this.props.id,ref:this.props.domRef||d,style:{height:this.props.height||'auto'}},this.props.header?a.createElement('div',{className:'ui-dropdown-item ui-dropdown-item-simple',style:{color:'#00C777'}},' ',this.props.header,' '):null,this.props.header?a.createElement('div',{className:'ui-dropdown-divider'}):null,b))}}module.exports=e}(require('lazyload'),require);