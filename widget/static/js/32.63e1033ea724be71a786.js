webpackJsonp([32],{"+b7l":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={components:{Header:n("tyqc").a},data:function(){return{loading:!1,root:"http://192.168.43.129:8080/",username:""}},computed:{originUsername:function(){return this.$route.query.username}},methods:{commitChange:function(){var t=this;if(this.originUsername===this.username)return mui.toast("新昵称不能和旧昵称相同！"),!1;mui.confirm("确认修改昵称？","修改昵称",["否","是"],function(e){1==e.index&&t.postCommit()})},postCommit:function(){var t=this,e=this.$cookies.get("CUR_USERINFO").userid,n=this.username;this.$ajax.post({url:this.root+"user/updateUsername",data:{userid:e,username:n}}).then(function(e){e.status?(t.$cookies.set("CUR_USERINFO",e.object),t.$router.push("/selfinfo")):mui.toast(e.msg)})}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-container"},[n("Header",[t._v("修改昵称")]),t._v(" "),n("div",{staticClass:"change-container"},[n("div",{staticClass:"input-container"},[n("span",{staticClass:"input-left"},[t._v("原昵称")]),t._v(" "),n("span",[t._v(t._s(t.originUsername))])]),t._v(" "),n("div",{staticClass:"input-container"},[n("span",{staticClass:"input-left"},[t._v("新昵称")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"mui-input-clear inout-right",attrs:{type:"text",placeholder:"请输入新昵称"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"botton-container"},[n("button",{staticClass:"mui-btn mui-btn-primary",attrs:{disabled:!t.username||t.loading,type:"button"},on:{click:function(e){return t.commitChange()}}},[t._v("\n            "+t._s(t.loading?"提交中...":"提交")+"\n            ")])])])],1)},staticRenderFns:[]};var a=n("VU/8")(s,i,!1,function(t){n("vYot")},"data-v-63da72b2",null);e.default=a.exports},vYot:function(t,e){}});
//# sourceMappingURL=32.63e1033ea724be71a786.js.map