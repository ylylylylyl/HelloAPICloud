webpackJsonp([21],{fZQ4:function(s,t){},xM9I:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={components:{Header:a("tyqc").a},data:function(){return{root:"http://192.168.43.129:8080/",user:{}}},mounted:function(){this.init()},methods:{init:function(){var s=this,t=this.$cookies.get("CUR_USERINFO").userid;this.$ajax.post({url:this.root+"user/selectByUserId",data:{userid:t}}).then(function(t){t.status&&(s.user=t.object)})}}},n={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("Header",[s._v("我的资料")]),s._v(" "),a("div",{staticClass:"com-container"},[a("div",{staticClass:"item avatar",on:{click:function(t){return s.$router.push("/changeAvatar")}}},[a("span",[s._v("头像")]),s._v(" "),a("div",{staticClass:"avatar-right-container"},[a("div",{staticClass:"avatarimg-container"},[a("img",{staticClass:"avatar-icon",attrs:{src:s.user.avatar}})]),s._v(" "),a("span",{staticClass:"mui-icon mui-icon-forward"})])]),s._v(" "),a("div",{staticClass:"item"},[a("span",[s._v("昵称")]),s._v(" "),a("div",[a("span",[s._v(s._s(s.user.username||"填写"))]),s._v(" "),a("span",{staticClass:"mui-icon mui-icon-forward"})])]),s._v(" "),a("div",{staticClass:"item"},[a("span",[s._v("电话号码")]),s._v(" "),a("div",[a("span",[s._v(s._s(s.user.userphone||"填写"))]),s._v(" "),a("span",{staticClass:"mui-icon mui-icon-forward"})])]),s._v(" "),a("div",{staticClass:"item"},[a("span",[s._v("真实姓名")]),s._v(" "),a("div",[a("span",[s._v(s._s(s.user.username||"填写"))]),s._v(" "),a("span",{staticClass:"mui-icon mui-icon-forward"})])]),s._v(" "),a("div",{staticClass:"item"},[a("span",[s._v("身份证号")]),s._v(" "),a("div",[a("span",[s._v(s._s(s.user.cardid||"填写"))]),s._v(" "),a("span",{staticClass:"mui-icon mui-icon-forward"})])])])],1)},staticRenderFns:[]};var e=a("VU/8")(i,n,!1,function(s){a("fZQ4")},"data-v-11c9089f",null);t.default=e.exports}});
//# sourceMappingURL=21.5b31f54d5d0f750c0de5.js.map