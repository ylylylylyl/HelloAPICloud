webpackJsonp([48],{"5lmY":function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=n("Xxa5"),i=n.n(e),a=n("exGp"),o=n.n(a),r=n("Dd8w"),u=n.n(r),c=n("Ia3L"),p=n("NYxO"),l={components:{Loading:n("0EwI").a},mounted:function(){mui(".mui-input-row input").input()},data:function(){return{userphone:"",userpassword:"",tip:"",root:"http://192.168.43.129:8080/",loading:!1}},computed:u()({},Object(p.d)(["chooseVillage"])),watch:{userphone:function(t){c.d.test(t)?this.tip="":this.tip="请输入正确的手机号码"}},methods:u()({},Object(p.b)(["onLogin","setRegisterFlag","onRegister"]),{goback:function(){this.$router.go(-1)},regist:function(){this.$router.push("/adminregist")},backtohome:function(){this.$router.push("/home")},login:function(){var t=this;return o()(i.a.mark(function s(){var n,e;return i.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(""!==t.userphone&&null!=t.userphone){s.next=3;break}return t.tip="请输入手机号码",s.abrupt("return");case 3:if(""!==t.userpassword&&null!=t.userpassword){s.next=6;break}return t.tip="请输入密码",s.abrupt("return");case 6:n="http://192.168.43.129:8080/",e={userphone:t.userphone,userpassword:t.userpassword,status:"1"},t.loading=!0,t.$ajax.post({url:n+"user/login",data:e}).then(function(s){if(!s.status)return t.tip=s.msg,null;localStorage.setItem("avatar",s.object.avatar),t.LoginIM(),s.object.avatar=null,t.$cookies.set("CUR_USERINFO",s.object),t.$router.push("admin/home")});case 10:case"end":return s.stop()}},s,t)}))()},LoginIM:function(){this.onLogin({username:this.userphone.toLowerCase(),password:this.userpassword})}})},m={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"l-bg"},[n("div",{staticClass:"l-header"},[n("span",{staticClass:"mui-icon mui-icon-arrowleft",on:{click:function(s){return t.goback()}}}),t._v(" "),n("span",{staticClass:"l-text"},[t._v("管理员登录")])]),t._v(" "),n("div",{staticClass:"mui-input-group"},[n("div",{staticClass:"mui-input-row"},[t._m(0),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userphone,expression:"userphone"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:t.userphone},on:{input:function(s){s.target.composing||(t.userphone=s.target.value)}}})]),t._v(" "),n("div",{staticClass:"mui-input-row"},[t._m(1),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userpassword,expression:"userpassword"}],staticClass:"mui-input-password",attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.userpassword},on:{input:function(s){s.target.composing||(t.userpassword=s.target.value)}}})])]),t._v(" "),n("div",{staticClass:"bottom"},[n("span",{staticClass:"tip"},[t._v(t._s(t.tip))]),t._v(" "),n("p",{staticClass:"regist-btn",on:{click:function(s){return t.regist()}}},[n("span",{staticClass:"mui-icon mui-icon-help"}),t._v("\n      没有账号点击注册\n    ")])]),t._v(" "),n("button",{staticClass:"mui-btn mui-btn-outlined l-btn",attrs:{type:"button"},on:{click:function(s){return t.login()}}},[t._v("登录")]),t._v(" "),n("button",{staticClass:"mui-btn mui-btn-outlined back-btn",attrs:{type:"button"},on:{click:t.backtohome}},[t._v("返回主页")]),t._v(" "),n("div",{staticClass:"change-container"},[n("span",{staticClass:"mui-icon mui-icon-loop"}),t._v(" "),n("a",{on:{click:function(s){return t.$router.push("/login")}}},[t._v("切换用户版本")])]),t._v(" "),n("div",{staticClass:"change-container"},[n("span",{staticClass:"mui-icon mui-icon-loop"}),t._v(" "),n("a",{on:{click:function(s){return t.$router.push("/superadmin")}}},[t._v("切换超级管理员")])]),t._v(" "),t.loading?n("Loading"):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("label",[s("span",{staticClass:"mui-icon mui-icon-person"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",[s("span",{staticClass:"mui-icon mui-icon-compose"})])}]};var d=n("VU/8")(l,m,!1,function(t){n("l/Xb")},"data-v-31a82b82",null);s.default=d.exports},"l/Xb":function(t,s){}});
//# sourceMappingURL=48.0b53d26520d83b0849de.js.map