webpackJsonp([39],{"k+sZ":function(t,a){},obMG:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e={components:{Header:i("tyqc").a},data:function(){return{uploadimg:"",root:"http://192.168.43.129:8080/"}},methods:{upload:function(){this.$refs.fileBtn.click()},changeImage:function(t){var a=this,i=t.target.files[0];if(i){var e=new FileReader;e.readAsDataURL(i),e.onload=function(t){a.uploadimg=e.result}}},commitAvatar:function(){var t=this,a=this.$cookies.get("CUR_USERINFO").userid,i=this.uploadimg;this.$ajax.post({url:this.root+"user/updateAvatar",data:{avatar:i,userid:a}}).then(function(a){a.status?t.$router.push("/selfinfo"):mui.toast("提交失败")})}}},n={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"content-contaier"},[i("Header",[t._v("更换头像")]),t._v(" "),i("div",{staticClass:"avatar-container"},[i("div",{staticClass:"upload-container"},[i("button",{staticClass:"upload-btn",on:{click:t.upload}},[i("span",{directives:[{name:"show",rawName:"v-show",value:!t.uploadimg,expression:"!uploadimg"}],staticClass:"mui-icon mui-icon-plusempty"}),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:t.uploadimg,expression:"uploadimg"}],staticClass:"upload-img",attrs:{src:t.uploadimg}})]),t._v(" "),i("input",{ref:"fileBtn",staticStyle:{display:"none",position:"absolute"},attrs:{type:"file",accept:"image/png, image/jpeg, image/gif, image/jpg",id:"btn-upload"},on:{change:function(a){return t.changeImage(a)}}})]),t._v(" "),i("div",{staticClass:"btn-container"},[i("button",{staticClass:"mui-btn mui-btn-primary",attrs:{type:"button"},on:{click:function(a){return t.commitAvatar()}}},[t._v("提交")]),t._v(" "),i("button",{staticClass:"mui-btn mui-btn-primary",attrs:{type:"button"},on:{click:function(a){return t.commitBind()}}},[t._v("返回")])])])],1)},staticRenderFns:[]};var s=i("VU/8")(e,n,!1,function(t){i("k+sZ")},"data-v-2dbd36e4",null);a.default=s.exports}});
//# sourceMappingURL=39.9dce27b5b1d40524d6ee.js.map