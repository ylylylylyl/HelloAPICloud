webpackJsonp([21],{HreC:function(t,n){},MLdH:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i("Dd8w"),s=i.n(e),o=i("tyqc"),a=i("NYxO"),r=i("Ia3L"),u=i("oFuF"),c={components:{Header:o.a},data:function(){return{money:"",root:"http://192.168.43.129:8080/",bindInfo:{},loading:!1}},computed:s()({},Object(a.c)(["curUserInfo"]),{type:function(){return console.log(this.$route.query.type),this.$route.query.type},livingnumid:function(){return this.$route.query.livingnumid}}),created:function(){var t=this;this.$nextTick(function(){t.init(),t.initData()})},methods:{init:function(){var t=this;document.getElementById("promptBtn").addEventListener("tap",function(n){if(n.detail.gesture.preventDefault(),r.c.test(t.money)){mui.prompt("请输入支付密码：","","提现到银行卡",["取消","确定"],function(n){if(1==n.index){var i=t.$cookies.get("CUR_USERINFO").userid;t.$ajax.post({url:t.root+"user/selectPayPwd",data:{userid:i}}).then(function(i){i.result===n.value?t.toPay():mui.toast("密码错误")})}}),document.querySelector(".mui-popup-input input").type="password"}else mui.toast("请输入正确的金额")})},initClick:function(t){switch(t){case 1:this.money=10;break;case 2:this.money=50;break;case 3:this.money=100;break;case 4:this.money=200}},initData:function(){var t=this;this.$ajax.post({url:this.root+"bindhouse/selectbylivingid",data:{livingnumid:Number(this.livingnumid)}}).then(function(n){n.status&&(t.bindInfo=n.object)})},toPay:function(){var t=this;this.loading=!0;var n=this.money,i=this.$cookies.get("CUR_USERINFO").userid;this.$ajax.post({url:this.root+"user/updateWallet",data:{userid:i,money:n}}).then(function(n){t.loading=!1,n.status?(t.getRecord(),t.addDetail()):mui.toast(n.result)},function(n){t.loading=!1})},getRecord:function(){var t=this,n=this.bindInfo,i=n.livingnumid,e=n.houseowner,s=n.chooseaddr,o=String(this.type),a={livingnumid:i,houseowner:e,chooseaddr:s,money:this.money,userid:this.curUserInfo.userid,type:o};this.$ajax.post({url:this.root+"livingorder/insertOrder",data:a}).then(function(n){n.status&&(mui.toast("缴费成功"),t.$router.push("/livingpayment"))})},addDetail:function(){var t={type:1,changemoney:this.money,changedetail:"日常缴费",userid:this.$cookies.get("CUR_USERINFO").userid};Object(u.d)(t)}},filters:{initIcon:function(t){if(t)switch(t){case 1:return"#icon-ranqifei";case 2:return"#icon-dianfei";case 3:return"#icon-shuifei"}},initPayType:function(t){if(t)switch(t){case 1:return"燃气费";case 2:return"电费";case 3:return"水费"}}}},d={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"content-container"},[i("Header",[t._v("生活缴费")]),t._v(" "),i("div",{staticClass:"livingpay-container"},[i("div",{staticClass:"living-title"},[i("svg",{staticClass:"icon living-icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":t._f("initIcon")(t.$route.query.type)}})]),t._v(" "),i("span",{ref:"myP",staticClass:"living-span"},[t._v(" "+t._s(t._f("initPayType")(t.$route.query.type)))])]),t._v(" "),i("div",{staticClass:"living-content-container"},[t._m(0),t._v(" "),i("div",{staticClass:"content-item"},[i("span",[t._v("缴费户号")]),t._v(" "),i("p",[t._v(t._s(t.bindInfo.livingnumid))])]),t._v(" "),i("div",{staticClass:"content-item"},[i("span",[t._v("户名")]),t._v(" "),i("p",[t._v(t._s(t.bindInfo.houseowner))])]),t._v(" "),i("div",{staticClass:"content-item"},[i("span",[t._v("住址信息")]),t._v(" "),i("p",[t._v(t._s(t.bindInfo.chooseaddr))])])]),t._v(" "),i("div",{staticClass:"pay-container"},[i("span",{staticClass:"pay-container-span"},[t._v("选择充值金额")]),t._v(" "),i("div",{staticClass:"btn-container"},[i("button",{attrs:{type:"button"},on:{click:function(n){return t.initClick(1)}}},[t._v("10元")]),t._v(" "),i("button",{attrs:{type:"button"},on:{click:function(n){return t.initClick(2)}}},[t._v("50元")]),t._v(" "),i("button",{attrs:{type:"button"},on:{click:function(n){return t.initClick(3)}}},[t._v("100元")]),t._v(" "),i("button",{attrs:{type:"button"},on:{click:function(n){return t.initClick(4)}}},[t._v("200元")])]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.money,expression:"money"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"输入其他金额"},domProps:{value:t.money},on:{input:function(n){n.target.composing||(t.money=n.target.value)}}}),t._v(" "),i("button",{staticClass:"mui-btn mui-btn-outlined l-btn",attrs:{id:"promptBtn",type:"button",disabled:!t.money}},[t._v("\n            "+t._s(t.loading?"缴费中...":"立即缴费")+"\n            ")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"content-item"},[n("span",[this._v("缴费单位")]),this._v(" "),n("p",[this._v("国网供电公司")])])}]};var l=i("VU/8")(c,d,!1,function(t){i("HreC")},"data-v-7737af75",null);n.default=l.exports}});
//# sourceMappingURL=21.bd5424a0e5d22700838e.js.map