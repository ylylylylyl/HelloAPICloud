webpackJsonp([27],{ax4o:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={components:{Header:e("tyqc").a},data:function(){return{phone:"",loading:!1,root:"http://192.168.43.129:8080/"}},computed:{originPhone:function(){return this.$cookies.get("CUR_USERINFO").userphone}},methods:{commitChange:function(){var t=this;if(this.originPhone===this.phone)return mui.toast("新手机号不能和旧手机号一致！"),!1;mui.confirm("确认修改并使用新手机号码登录？","修改手机号码",["否","是"],function(n){1==n.index&&t.postCommit()})},postCommit:function(){var t=this,n=this.$cookies.get("CUR_USERINFO").userid,e=this.phone;this.loading=!0,this.$ajax.post({url:this.root+"user/updatePhone",data:{userid:n,phone:e}}).then(function(n){t.loading=!1,n.status?(t.$cookies.set("CUR_USERINFO",n.object),t.$router.push("/selfinfo")):mui.toast(n.msg)},function(n){t.loading=!1})}}},o={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content-container"},[e("Header",[t._v("修改电话号码")]),t._v(" "),e("div",{staticClass:"change-container"},[e("div",{staticClass:"input-container"},[e("span",{staticClass:"input-left"},[t._v("原电话号码")]),t._v(" "),e("span",[t._v(t._s(t.originPhone))])]),t._v(" "),e("div",{staticClass:"input-container"},[e("span",{staticClass:"input-left"},[t._v("新电话号码")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"mui-input-clear inout-right",attrs:{type:"text",placeholder:"请输入新电话号码"},domProps:{value:t.phone},on:{input:function(n){n.target.composing||(t.phone=n.target.value)}}})]),t._v(" "),e("div",{staticClass:"botton-container"},[e("button",{staticClass:"mui-btn mui-btn-primary",attrs:{disabled:!t.phone||t.loading,type:"button"},on:{click:function(n){return t.commitChange()}}},[t._v("\n            "+t._s(t.loading?"提交中...":"提交")+"\n            ")])])])],1)},staticRenderFns:[]};var s=e("VU/8")(i,o,!1,function(t){e("uIyp")},"data-v-78d834a6",null);n.default=s.exports},uIyp:function(t,n){}});
//# sourceMappingURL=27.9f85be6cfadc750b5760.js.map