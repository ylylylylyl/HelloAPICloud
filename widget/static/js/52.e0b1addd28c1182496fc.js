webpackJsonp([52],{H6pj:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("Dd8w"),s=e.n(n),a=e("NYxO"),o=(e("Ia3L"),{computed:{villagename:function(){return this.$route.query.villagename},villageId:function(){return this.$route.query.villageid}},mounted:function(){mui(".mui-input-row input").input()},created:function(){this.setVillage()},data:function(){return{phone:"",pwd:"",pwdAgain:"",tip:"",adminname:"",loading:!1}},watch:{phone:function(t){/^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/.test(t)?this.tip="":this.tip="请输入正确的手机号码"}},methods:s()({},Object(a.b)(["setCurCity","setVillage","onRegister"]),{goback:function(){this.$router.go(-1)},regist:function(){this.$router.push("/adminlogin")},backtohome:function(){this.$router.push("/home")},userRegist:function(){var t=this;if(this.isNull()){this.loading=!0;var i=this.$cookies.get("chooseProvince")+this.$cookies.get("chooseCity")+this.$cookies.get("chooseArea")+this.villagename,e={phone:this.phone,pwd:this.pwd,villageid:Number(this.villageId),adminname:this.adminname,addr:i};this.$ajax.post({url:"http://192.168.43.129:8080/user/addadmin",data:e}).then(function(i){i.status?(t.registIM(),t.clear(),t.regist(),t.loading=!1,t.user=null):t.tip=i.result},function(i){t.loading=!1})}},initVillage:function(){this.$router.push("/adminvillage")},isNull:function(){return this.phone?this.pwd?this.phone?this.pwd!==this.pwdAgain?(this.tip="两次输入密码不一致",!1):!!this.villageId||(this.tip="请选择要管理的小区",!1):(this.tip="请再次输入密码",!1):(this.tip="密码不能为空",!1):(this.tip="手机号码不能为空",console.log(this.tip),!1)},registIM:function(){this.onRegister({username:this.phone.toLowerCase(),password:this.pwd,nickname:this.adminname})},clear:function(){this.phone=null,this.pwd=null,this.pwdAgain=null,this.adminname=null}})}),u={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"l-bg"},[e("div",{staticClass:"l-header"},[e("span",{staticClass:"mui-icon mui-icon-arrowleft",on:{click:function(i){return t.goback()}}}),t._v(" "),e("span",{staticClass:"l-text"},[t._v("注册")])]),t._v(" "),e("div",{staticClass:"mui-input-group"},[e("div",{staticClass:"mui-input-row"},[t._m(0),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:t.phone},on:{input:function(i){i.target.composing||(t.phone=i.target.value)}}})]),t._v(" "),e("div",{staticClass:"mui-input-row"},[t._m(1),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],staticClass:"mui-input-password",attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.pwd},on:{input:function(i){i.target.composing||(t.pwd=i.target.value)}}})]),t._v(" "),e("div",{staticClass:"mui-input-row"},[t._m(2),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.pwdAgain,expression:"pwdAgain"}],staticClass:"mui-input-password",attrs:{type:"password",placeholder:"请确认密码"},domProps:{value:t.pwdAgain},on:{input:function(i){i.target.composing||(t.pwdAgain=i.target.value)}}})]),t._v(" "),e("div",{staticClass:"mui-input-row village-choose",on:{click:function(i){return t.initVillage()}}},[t._m(3),t._v(" "),e("div",[t.$route.query.villagename?t._e():e("span",{attrs:{id:"comm-result"}},[t._v("点击选择")]),t._v(" "),t.$route.query.villagename?e("span",{attrs:{id:"comm-result"}},[t._v(t._s(t.villagename))]):t._e(),t._v(" "),e("span",{staticClass:"mui-icon mui-icon-arrowright"})])]),t._v(" "),e("div",{staticClass:"mui-input-row"},[t._m(4),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.adminname,expression:"adminname"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入姓名"},domProps:{value:t.adminname},on:{input:function(i){i.target.composing||(t.adminname=i.target.value)}}})])]),t._v(" "),e("div",{staticClass:"bottom"},[e("span",{staticClass:"tip"},[t._v(t._s(t.tip))]),t._v(" "),e("p",{staticClass:"regist-btn",on:{click:function(i){return t.regist()}}},[e("span",{staticClass:"mui-icon mui-icon-help"}),t._v("\n        已有账号点击登录\n        ")])]),t._v(" "),e("button",{staticClass:"mui-btn mui-btn-outlined",attrs:{type:"button"},on:{click:function(i){return t.userRegist()}}},[t._v("\n  注册\n")]),t._v(" "),e("button",{staticClass:"mui-btn mui-btn-outlined back-btn",attrs:{type:"button"},on:{click:t.backtohome}},[t._v("返回主页")])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("label",[i("span",{staticClass:"mui-icon mui-icon-phone"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("label",[i("span",{staticClass:"mui-icon mui-icon-compose"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("label",[i("span",{staticClass:"mui-icon mui-icon-compose"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("span",[this._v("小区")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("label",[i("span",{staticClass:"mui-icon mui-icon-person"})])}]};var l=e("VU/8")(o,u,!1,function(t){e("dfVq")},"data-v-26721060",null);i.default=l.exports},dfVq:function(t,i){}});
//# sourceMappingURL=52.e0b1addd28c1182496fc.js.map