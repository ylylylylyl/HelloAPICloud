webpackJsonp([51],{NprL:function(i,s){},xM9I:function(i,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={components:{Header:t("tyqc").a},data:function(){return{root:"http://192.168.43.129:8080/",user:{}}},mounted:function(){this.init()},computed:{userid:function(){return this.$cookies.get("CUR_USERINFO").userid},adminid:function(){return this.$cookies.get("CUR_USERINFO").adminid}},methods:{init:function(){this.userid?this.initUser(this.userid):this.initAdmin(this.adminid)},initUser:function(i){var s=this;this.$ajax.post({url:this.root+"user/selectByUserId",data:{userid:i}}).then(function(i){i.status&&(s.user=i.object)})},initAdmin:function(i){var s=this;this.$ajax.post({url:this.root+"adminuser/selectByAdminId",data:{adminid:i}}).then(function(i){i.status&&(s.user=i.object)})}}},n={render:function(){var i=this,s=i.$createElement,t=i._self._c||s;return t("div",[t("div",{staticClass:"back-header"},[t("span",{staticClass:"mui-icon mui-icon-arrowleft",on:{click:function(s){return i.$router.push("/selfcenter")}}}),i._v(" "),t("span",[i._v("\n          我的资料\n      ")])]),i._v(" "),i.userid?t("div",{staticClass:"com-container"},[t("div",{staticClass:"item avatar",on:{click:function(s){return i.$router.push("/changeAvatar")}}},[t("span",[i._v("头像")]),i._v(" "),t("div",{staticClass:"avatar-right-container"},[t("div",{staticClass:"avatarimg-container"},[t("img",{staticClass:"avatar-icon",attrs:{src:i.user.avatar}})]),i._v(" "),t("span",{staticClass:"mui-icon mui-icon-forward"})])]),i._v(" "),t("div",{staticClass:"item",on:{click:function(s){return i.$router.push("/changephone")}}},[t("span",[i._v("电话号码")]),i._v(" "),t("div",[t("span",[i._v(i._s(i.user.userphone||"填写"))]),i._v(" "),t("span",{staticClass:"mui-icon mui-icon-forward"})])]),i._v(" "),t("div",{staticClass:"item",on:{click:function(s){return i.$router.push("/changeusername?username="+i.user.username)}}},[t("span",[i._v("昵称")]),i._v(" "),t("div",[t("span",[i._v(i._s(i.user.username||"填写"))]),i._v(" "),t("span",{staticClass:"mui-icon mui-icon-forward"})])]),i._v(" "),t("div",{staticClass:"item",on:{click:function(s){return i.$router.push("/changecardid?cardid="+i.user.cardid)}}},[t("span",[i._v("身份证号")]),i._v(" "),t("div",[t("span",[i._v(i._s(i.user.cardid||"填写"))]),i._v(" "),t("span",{staticClass:"mui-icon mui-icon-forward"})])])]):i._e(),i._v(" "),i.adminid?t("div",{staticClass:"com-container"},[t("div",{staticClass:"item avatar",on:{click:function(s){return i.$router.push("/changeAvatar")}}},[t("span",[i._v("头像")]),i._v(" "),t("div",{staticClass:"avatar-right-container"},[t("div",{staticClass:"avatarimg-container"},[t("svg",{staticClass:"icon avatar-icon",attrs:{"aria-hidden":"true"}},[t("use",{attrs:{"xlink:href":"#icon-user__easyico"}})])]),i._v(" "),t("span",{staticClass:"mui-icon mui-icon-forward"})])]),i._v(" "),t("div",{staticClass:"item",on:{click:function(s){return i.$router.push("/changephone")}}},[t("span",[i._v("电话号码")]),i._v(" "),t("div",[t("span",[i._v(i._s(i.user.phone||"填写"))]),i._v(" "),t("span",{staticClass:"mui-icon mui-icon-forward"})])]),i._v(" "),t("div",{staticClass:"item",on:{click:function(s){return i.$router.push("/changeusername?username="+i.user.username)}}},[t("span",[i._v("昵称")]),i._v(" "),t("div",[t("span",[i._v(i._s(i.user.adminname||"填写"))]),i._v(" "),t("span",{staticClass:"mui-icon mui-icon-forward"})])]),i._v(" "),t("div",{staticClass:"item",on:{click:function(s){return i.$router.push("/changecardid?cardid="+i.user.cardid)}}},[t("span",[i._v("身份证号")]),i._v(" "),t("div",[t("span",[i._v(i._s(i.user.cardid||"填写"))]),i._v(" "),t("span",{staticClass:"mui-icon mui-icon-forward"})])])]):i._e()])},staticRenderFns:[]};var r=t("VU/8")(a,n,!1,function(i){t("NprL")},"data-v-2b3228e8",null);s.default=r.exports}});
//# sourceMappingURL=51.ad31255f70bdade62017.js.map