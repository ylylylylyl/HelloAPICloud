webpackJsonp([18],{Wdju:function(t,a){},z6q0:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=n("Dd8w"),s=n.n(i),e=n("NYxO"),o=n("tyqc"),u=n("Ia3L"),r={components:{Header:o.a},computed:s()({},Object(e.c)(["curUserInfo"])),data:function(){return{bankdata:[{value:1,text:"中国银行"},{value:2,text:"招商银行"},{value:3,text:"农业银行"},{value:4,text:"建设银行"},{value:5,text:"中国工商银行"},{value:6,text:"交通银行"}],postData:{bindbankname:"",bankcardnum:"",bankcompany:"点击选择",binduserphone:""},root:"http://192.168.43.129:8080/",tip:"",loading:!1,isCommit:!1}},watch:{"postData.bankcardnum":{handler:function(t){u.a.test(t)?this.tip="":this.tip="请输入正确的银行卡号"},deep:!0},"postData.binduserphone":{handler:function(t){u.d.test(t)?this.tip="":this.tip="请输入正确的电话号码"},deep:!0}},methods:{initBuilding:function(){var t=this,a=new mui.PopPicker;a.setData(this.bankdata);document.getElementById("building-btn");a.show(function(a){t.postData.bankcompany=a[0].text})},addBankCard:function(){var t=this;if(this.judge()){var a=this.$cookies.get("CUR_USERINFO").userid,n=s()({userid:a},this.postData);this.loading=!0,this.$ajax.post({url:this.root+"bankcard/bindbankcard",data:n}).then(function(a){t.loading=!1,a.status&&t.$router.push("/bankcard")},function(a){t.loading=!1})}},judge:function(){return this.postData.bindbankname?this.postData.bankcardnum?"点击选择"===this.postData.bankcompany?(this.tip="请选择银行",!1):this.postData.binduserphone?u.a.test(this.postData.bankcardnum)?!!u.d.test(this.postData.binduserphone)||(this.tip="请填写正确的电话号码",!1):(this.tip="请填写正确的银行卡号",!1):(this.tip="请填写预留号码",!1):(this.tip="请填写银行卡号",!1):(this.tip="请填写用户名",!1)}}},d={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content-container"},[n("Header",[t._v("添加银行卡")]),t._v(" "),n("div",{staticClass:"add-container"},[n("span",{staticClass:"add-title"},[t._v("请绑定持卡人本人的银行卡")]),t._v(" "),n("div",{staticClass:"add-form"},[n("div",{staticClass:"input-container"},[n("span",{staticClass:"input-left"},[t._v("用户名")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.postData.bindbankname,expression:"postData.bindbankname"}],staticClass:"mui-input-clear inout-right",attrs:{type:"text",placeholder:"请输入持卡人姓名"},domProps:{value:t.postData.bindbankname},on:{input:function(a){a.target.composing||t.$set(t.postData,"bindbankname",a.target.value)}}})]),t._v(" "),n("div",{staticClass:"input-container"},[n("span",{staticClass:"input-left"},[t._v("卡号")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.postData.bankcardnum,expression:"postData.bankcardnum"}],staticClass:"mui-input-clear inout-right",attrs:{type:"text",placeholder:"请输入银行卡号"},domProps:{value:t.postData.bankcardnum},on:{input:function(a){a.target.composing||t.$set(t.postData,"bankcardnum",a.target.value)}}})]),t._v(" "),n("button",{staticClass:"btn mui-btn mui-btn-block",attrs:{id:"building-btn"},on:{click:function(a){return t.initBuilding()}}},[t._m(0),t._v(" "),n("div",[n("span",{attrs:{id:"building-result"}},[t._v(t._s(t.postData.bankcompany))]),t._v(" "),n("span",{staticClass:"mui-icon mui-icon-arrowright"})])]),t._v(" "),n("div",{staticClass:"input-container"},[n("span",{staticClass:"input-left"},[t._v("预留号码")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.postData.binduserphone,expression:"postData.binduserphone"}],staticClass:"mui-input-clear inout-right",attrs:{type:"text",placeholder:"请输入预留号码"},domProps:{value:t.postData.binduserphone},on:{input:function(a){a.target.composing||t.$set(t.postData,"binduserphone",a.target.value)}}})]),t._v(" "),n("span",{staticClass:"tip"},[t._v(t._s(t.tip))])]),t._v(" "),n("button",{staticClass:"mui-btn mui-btn-outlined l-btn",attrs:{type:"button"},on:{click:function(a){return t.addBankCard()}}},[t._v("\n        "+t._s(t.loading?"正在添加...":"确认添加")+"\n        ")])])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("span",[this._v("银行")])])}]};var p=n("VU/8")(r,d,!1,function(t){n("Wdju")},"data-v-d35c7472",null);a.default=p.exports}});
//# sourceMappingURL=18.c2cd78bf9a4cb5589071.js.map