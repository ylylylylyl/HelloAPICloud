webpackJsonp([41],{"+EHi":function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i={components:{Header:n("tyqc").a},data:function(){return{postData:{adminname:this.$cookies.get("CUR_USERINFO").username,addr:this.$cookies.get("CUR_USERINFO").addr,villageid:this.$cookies.get("CUR_USERINFO").villageid},root:"http://192.168.43.129:8080/",loading:!1}},methods:{publish:function(){var t=this;this.judge()&&(this.loading=!0,this.$ajax.post({url:this.root+"notice/insertnotice",data:this.postData}).then(function(a){t.loading=!1,a.status&&t.$router.push("/adminannounce")},function(a){t.loading=!0}))},toList:function(){this.$router.push("/adminannounce")},goback:function(){this.$router.go(-1)},judge:function(){return this.postData.noticetitle?!!this.postData.noticecontent||(mui.toast("请输入内容！"),!1):(mui.toast("请输入标题！"),!1)}}},s={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"detail-container"},[n("div",{staticClass:"back-header"},[n("div",[n("span",{staticClass:"mui-icon mui-icon-arrowleft",on:{click:function(a){return t.goback()}}}),t._v(" "),n("span",[t._v("发布公告")])]),t._v(" "),n("span",{staticClass:"records-span",on:{click:function(a){return t.toList()}}},[t._v("公告列表")])]),t._v(" "),n("div",{staticClass:"detail-content"},[n("div",{staticClass:"publisher-info"},[n("div",{staticClass:"info-item"},[n("svg",{staticClass:"icon notice-icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-tongzhigonggao"}})]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.postData.noticetitle,expression:"postData.noticetitle"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入标题"},domProps:{value:t.postData.noticetitle},on:{input:function(a){a.target.composing||t.$set(t.postData,"noticetitle",a.target.value)}}})]),t._v(" "),n("div",{staticClass:"info-item"},[n("span",{staticClass:"iconfont icon-yonghu1"}),t._v(" "),n("span",{staticClass:"item-span"},[t._v(t._s(t.postData.adminname))])]),t._v(" "),n("div",{staticClass:"info-item"},[n("span",{staticClass:"iconfont  icon-dizhi1"}),t._v(" "),n("span",{staticClass:"item-span"},[t._v(t._s(t.postData.addr))])])]),t._v(" "),n("div",{staticClass:"publish-content"},[n("span",{staticClass:"iconfont icon-neirongguanli"}),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.postData.noticecontent,expression:"postData.noticecontent"}],staticClass:"announce-content",attrs:{placeholder:"请输入内容"},domProps:{value:t.postData.noticecontent},on:{input:function(a){a.target.composing||t.$set(t.postData,"noticecontent",a.target.value)}}})]),t._v(" "),n("div",{staticClass:"btn-container"},[n("button",{staticClass:"mui-btn",on:{click:function(a){return t.publish()}}},[t._v("\n              "+t._s(t.loading?"发布中":"发布公告")+"\n            ")])])])])},staticRenderFns:[]};var o=n("VU/8")(i,s,!1,function(t){n("z+I8")},"data-v-466fa64d",null);a.default=o.exports},"z+I8":function(t,a){}});
//# sourceMappingURL=41.18e7263842fec36b5790.js.map