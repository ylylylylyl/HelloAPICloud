webpackJsonp([46],{KZEq:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});a("oFuF");var e={components:{Header:a("tyqc").a},data:function(){return{postData:{},root:"http://192.168.43.129:8080/"}},mounted:function(){this.postData.villageid=this.$cookies.get("CUR_BINDINFO").villageid,this.postData.publisher=this.$cookies.get("CUR_USERINFO").adminname},methods:{goback:function(){this.$router.go(-1)},toLostList:function(){this.$router.push("/lostlist")},handleLost:function(){var t=this;this.$ajax.post({url:this.root+"lost/insertlost",data:this.postData}).then(function(s){s.status?t.$router.push("/adminlost"):mui.toast("提交失败")})}}},i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content-container"},[a("div",{staticClass:"back-header"},[a("div",[a("span",{staticClass:"mui-icon mui-icon-arrowleft",on:{click:function(s){return t.goback()}}}),t._v(" "),a("span",[t._v("失物招领")])]),t._v(" "),a("span",{staticClass:"records-span",on:{click:function(s){return t.toLostList()}}},[t._v("招领记录")])]),t._v(" "),a("div",{staticClass:"com-container repair-container"},[a("div",{staticClass:"repair-user"},[a("span",{staticClass:"mui-icon mui-icon-paperclip"}),t._v(" "),a("span",{staticClass:"repair-user-title"},[t._v("遗失物品:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.postData.lostname,expression:"postData.lostname"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入具体物品"},domProps:{value:t.postData.lostname},on:{input:function(s){s.target.composing||t.$set(t.postData,"lostname",s.target.value)}}})]),t._v(" "),a("div",{staticClass:"repair-user-container"},[a("div",{staticClass:"repair-user"},[a("span",{staticClass:"iconfont icon-shijian1"}),t._v(" "),a("span",{staticClass:"repair-user-title"},[t._v("遗失时间:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.postData.losttime,expression:"postData.losttime"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入遗失时间"},domProps:{value:t.postData.losttime},on:{input:function(s){s.target.composing||t.$set(t.postData,"losttime",s.target.value)}}})]),t._v(" "),a("div",{staticClass:"problem-container"},[t._m(0),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.postData.lostdes,expression:"postData.lostdes"}],staticClass:"mui-input-speech",attrs:{type:"textarea",rows:"5",placeholder:"请输入内容"},domProps:{value:t.postData.lostdes},on:{input:function(s){s.target.composing||t.$set(t.postData,"lostdes",s.target.value)}}})])]),t._v(" "),a("div",{staticClass:"submit-container"},[a("button",{staticClass:"mui-btn submit-btn",attrs:{type:"button"},on:{click:function(s){return t.handleLost()}}},[t._v("确认提交")])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"problem-container-title"},[s("span",{staticClass:"mui-icon mui-icon-info"}),this._v(" "),s("span",[this._v("遗失详情")])])}]};var o=a("VU/8")(e,i,!1,function(t){a("t0w2")},"data-v-0df3ca4a",null);s.default=o.exports},t0w2:function(t,s){}});
//# sourceMappingURL=46.c2887ab5ca0c7d378a62.js.map