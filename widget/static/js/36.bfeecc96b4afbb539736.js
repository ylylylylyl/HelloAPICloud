webpackJsonp([36],{"lk6/":function(t,i){},w7lG:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("Dd8w"),n=e.n(s),a=e("NYxO"),o={mounted:function(){this.mui.init({gestureConfig:{tap:!0,doubletap:!0,longtap:!0,swipe:!0,drag:!0,hold:!1,release:!0}}),this.init()},data:function(){return{bindHouseList:[],root:"http://192.168.43.129:8080/"}},computed:n()({},Object(a.c)(["curUserInfo"])),methods:{init:function(){var t=this,i=this.$cookies.get("CUR_USERINFO").villageid;this.$ajax.post({url:this.root+"bindhouse/selectuser",data:{villageid:i}}).then(function(i){t.bindHouseList=i.result})},deleteuser:function(t,i){var e=this;t.stopPropagation();var s=t.target.parentNode;mui.confirm("确认注销当前用户，注销后不可撤回？","注销用户",["否","是"],function(t){1==t.index?e.$ajax.post({url:e.root+"bindhouse/deleteuser",data:{bindid:i}}).then(function(t){if(t.status)return e.init(),void mui.swipeoutClose(s);mui.toast(t.msg)}):mui.swipeoutClose(s)})}}},u={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("header",{staticClass:"header"},[e("span",{staticClass:"mui-icon mui-icon-arrowleft",on:{click:function(i){return t.$router.go(-1)}}}),t._v(" "),e("span",{staticClass:"header-title"},[t._v("用户管理")])]),t._v(" "),e("div",{staticClass:"item-container",attrs:{id:"OA_task_1"}},t._l(t.bindHouseList,function(i){return e("div",{key:i.binid,staticClass:"item mui-table-view-cell",on:{click:function(e){return t.$router.push("/houseinfodet/"+i.bindid)}}},[e("div",{staticClass:"mui-slider-right mui-disabled",on:{click:function(e){return t.deleteuser(e,i.bindid)}}},[e("a",{staticClass:"mui-btn mui-btn-red"},[t._v("注销用户")])]),t._v(" "),e("div",{staticClass:"mui-slider-handle"},[e("div",{staticClass:"item-self"},[e("span",[t._v("业主："+t._s(i.houseowner))]),t._v(" "),e("span",[t._v(t._s(i.phonenumber))])]),t._v(" "),e("div",[e("span",[t._v("房号："+t._s(i.house))])]),t._v(" "),e("div",{staticClass:"item-addr"},[e("span",[t._v("住址："+t._s(i.chooseaddr))]),t._v(" "),e("span",{staticClass:"detail-span",on:{click:function(e){return t.deleteuser(e,i.bindid)}}},[t._v("注销")])])])])}),0)])},staticRenderFns:[]};var r=e("VU/8")(o,u,!1,function(t){e("lk6/")},"data-v-5a890968",null);i.default=r.exports}});
//# sourceMappingURL=36.bfeecc96b4afbb539736.js.map