webpackJsonp([21],{KWQn:function(t,s){},SZjg:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=n("Xxa5"),a=n.n(e),i=n("exGp"),r=n.n(i),u={components:{Loading:n("0EwI").a},mounted:function(){mui(".mui-input-row input").input()},data:function(){return{username:"",userpassword:"",tip:"",root:"http://192.168.43.129:8080/",loading:!1}},methods:{goback:function(){this.$router.go(-1)},login:function(){var t=this;return r()(a.a.mark(function s(){var n,e;return a.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(t.username){s.next=3;break}return t.tip="请输入用户名",s.abrupt("return");case 3:if(""!==t.userpassword&&null!=t.userpassword){s.next=6;break}return t.tip="请输入密码",s.abrupt("return");case 6:n="http://192.168.43.129:8080/",e={username:t.username,userpassword:t.userpassword,status:"1"},t.loading=!0,t.$ajax.post({url:n+"user/superlogin",data:e}).then(function(s){if(!s.status)return t.tip=s.msg,null;t.$router.push("super/home")});case 10:case"end":return s.stop()}},s,t)}))()}}},o={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"l-bg"},[n("div",{staticClass:"l-header"},[n("span",{staticClass:"mui-icon mui-icon-arrowleft",on:{click:function(s){return t.goback()}}}),t._v(" "),n("span",{staticClass:"l-text"},[t._v("超级管理员登录")])]),t._v(" "),n("div",{staticClass:"mui-input-group"},[n("div",{staticClass:"mui-input-row"},[t._m(0),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:t.username},on:{input:function(s){s.target.composing||(t.username=s.target.value)}}})]),t._v(" "),n("div",{staticClass:"mui-input-row"},[t._m(1),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userpassword,expression:"userpassword"}],staticClass:"mui-input-password",attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.userpassword},on:{input:function(s){s.target.composing||(t.userpassword=s.target.value)}}})])]),t._v(" "),n("div",{staticClass:"bottom"},[n("span",{staticClass:"tip"},[t._v(t._s(t.tip))])]),t._v(" "),n("button",{staticClass:"mui-btn mui-btn-outlined l-btn",attrs:{type:"button"},on:{click:function(s){return t.login()}}},[t._v("登录")]),t._v(" "),n("div",{staticClass:"change-container"},[n("span",{staticClass:"mui-icon mui-icon-loop"}),t._v(" "),n("a",{on:{click:function(s){return t.$router.push("/login")}}},[t._v("切换用户版本")])]),t._v(" "),n("div",{staticClass:"change-container"},[n("span",{staticClass:"mui-icon mui-icon-loop"}),t._v(" "),n("a",{on:{click:function(s){return t.$router.push("/adminlogin")}}},[t._v("切换管理员")])]),t._v(" "),t.loading?n("Loading"):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("label",[s("span",{staticClass:"mui-icon mui-icon-person"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",[s("span",{staticClass:"mui-icon mui-icon-compose"})])}]};var c=n("VU/8")(u,o,!1,function(t){n("KWQn")},"data-v-9f2b277c",null);s.default=c.exports}});
//# sourceMappingURL=21.d6eb04261d68e2d95538.js.map