webpackJsonp([55],{cVeS:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={components:{Header:a("tyqc").a},computed:{lostid:function(){return this.$route.query.lostid},isAdmin:function(){return"1"===this.$cookies.get("CUR_USERINFO").status}},data:function(){return{root:"http://192.168.43.129:8080/",lost:{},postData:{}}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.$ajax.post({url:this.root+"lost/lostdetail",data:{lostid:this.lostid}}).then(function(s){s.status&&(t.lost=s.object)})},handleLostBack:function(t){var s=this;this.judge()&&(this.postData.lostid=t,this.$ajax.post({url:this.root+"lost/lostback",data:this.postData}).then(function(t){t.status&&s.init()}))},judge:function(){return this.postData.username?!!this.postData.lostphone||(mui.toast("请输入领回人电话"),!1):(mui.toast("请输入领回人"),!1)}}},e={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content-container mui-active"},[a("Header",[t._v("招领详情")]),t._v(" "),a("div",{staticClass:"div-container repair-info"},[a("div",{staticClass:"info-title"},[t._v("失物信息")]),t._v(" "),a("div",{staticClass:"repair-status"},[a("span",[t._v("遗失地点：")]),t._v(" "),a("span",{staticClass:"status-content"},[t._v(t._s(t.lost.lostname))])]),t._v(" "),a("div",{staticClass:"repair-status"},[a("span",[t._v("遗失时间：")]),t._v(" "),a("span",{staticClass:"status-content"},[t._v(t._s(t.lost.losttime))])]),t._v(" "),a("div",{staticClass:"repair-status"},[a("span",[t._v("遗失详情：")]),t._v(" "),a("span",{staticClass:"status-content"},[t._v(t._s(t.lost.lostdes))])]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"repair-status"},[a("span",[t._v("遗失状态：")]),t._v(" "),a("span",{staticClass:"status-content"},[t._v(t._s(t._f("losttype")(t.lost.losttype)))])]),t._v(" "),a("div",{staticClass:"repair-status"},[a("span",[t._v("发布时间：")]),t._v(" "),a("span",{staticClass:"status-content"},[t._v(t._s(t._f("format")(t.lost.publishtime)))])])]),t._v(" "),0!=t.lost.losttype?a("div",{staticClass:"div-container repair-info"},[a("div",{staticClass:"info-title"},[t._v("领回人信息")]),t._v(" "),a("div",{staticClass:"repair-status"},[a("span",[t._v("领回人：")]),t._v(" "),a("span",{staticClass:"status-content"},[t._v(t._s(t.lost.username))])]),t._v(" "),a("div",{staticClass:"repair-status"},[a("span",[t._v("领回人电话：")]),t._v(" "),a("span",{staticClass:"status-content"},[t._v(t._s(t.lost.lostphone))])]),t._v(" "),a("div",{staticClass:"repair-status"},[a("span",[t._v("领回时间：")]),t._v(" "),a("span",{staticClass:"status-content"},[t._v(t._s(t.lost.backtime))])])]):t._e(),t._v(" "),0==t.lost.losttype&&t.isAdmin?a("div",{staticClass:"div-container repair-info"},[a("div",{staticClass:"info-title"},[t._v("领回人信息")]),t._v(" "),a("div",{staticClass:"lost-item"},[a("span",[t._v("领回人：")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.postData.username,expression:"postData.username"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入领回人"},domProps:{value:t.postData.username},on:{input:function(s){s.target.composing||t.$set(t.postData,"username",s.target.value)}}})]),t._v(" "),a("div",{staticClass:"lost-item"},[a("span",[t._v("领回人电话：")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.postData.lostphone,expression:"postData.lostphone"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入领回人电话"},domProps:{value:t.postData.lostphone},on:{input:function(s){s.target.composing||t.$set(t.postData,"lostphone",s.target.value)}}})])]):t._e(),t._v(" "),0==t.lost.losttype&&t.isAdmin?a("div",{staticClass:"submit-container"},[a("button",{staticClass:"mui-btn submit-btn",attrs:{type:"button"},on:{click:function(s){return t.handleLostBack(t.lost.lostid)}}},[t._v("提交")])]):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"repair-status"},[s("span",[this._v("领取地址：")]),this._v(" "),s("span",{staticClass:"status-content"},[this._v("物业处三楼")])])}]};var n=a("VU/8")(i,e,!1,function(t){a("pYO/")},"data-v-1820f1ee",null);s.default=n.exports},"pYO/":function(t,s){}});
//# sourceMappingURL=55.50a88a1babfed458cff3.js.map