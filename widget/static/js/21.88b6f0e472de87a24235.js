webpackJsonp([21],{G1bo:function(t,n){},pEPQ:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a("Dd8w"),i=a.n(e),s=a("tyqc"),o=a("NYxO"),r=a("Ia3L"),c=a("oFuF"),u={components:{Header:s.a},mounted:function(){this.init(),this.initBankCard()},data:function(){return{money:"",defaultBankCard:"",bankIcon:"",bankid:"",root:"http://192.168.43.129:8080/",bankCardData:[],loading:!1}},computed:i()({},Object(o.c)(["curUserInfo"]),{walletbalance:function(){return this.$route.query.walletbalance}}),methods:{chooseBank:function(){var t=this,n=new mui.PopPicker;n.setData(this.bankCardData),n.show(function(n){t.defaultBankCard=n[0].text,t.bankid=n[0].bankid,t.bankIcon=t.initIcon(n[0].bankcompany)})},init:function(){var t=this;document.getElementById("promptBtn").addEventListener("tap",function(n){if(n.detail.gesture.preventDefault(),r.f.test(t.money)){mui.prompt("请输入支付密码：","","提现到银行卡",["取消","确定"],function(n){if(1==n.index){var a=t.$cookies.get("CUR_USERINFO").userid;t.$ajax.post({url:t.root+"user/selectPayPwd",data:{userid:a}}).then(function(a){a.result===n.value?t.deposit():mui.toast("密码错误")})}}),document.querySelector(".mui-popup-input input").type="password"}else mui.toast("请输入正确的金额！")})},initBankCard:function(){var t=this,n=this.$cookies.get("CUR_USERINFO").userid;this.$ajax.post({url:this.root+"bankcard/selectbankcard",data:{userid:n}}).then(function(n){n.status&&(t.bankCardData=n.result,t.bankCardData.map(function(t){return t.value=t.bankcardnum.slice(t.bankcardnum.length-5,t.bankcardnum.length-1),t.text=t.bankcompany+"("+t.value+")",t}),t.defaultBankCard=t.bankCardData[0].text,t.bankid=t.bankCardData[0].bankid,t.bankIcon=t.initIcon(t.bankCardData[0].bankcompany))})},depositAl:function(t){t.preventDefault(),this.money=this.walletbalance},initIcon:function(t){switch(t){case"中国银行":return"#icon-zhongguoyinhang";case"招商银行":return"#icon-yinhanglogo-";case"农业银行":return"#icon-nongyeyinhang";case"建设银行":return"#icon-jiansheyinhang";case"中国工商银行":return"#icon-ICBC";case"交通银行":return"#icon-jiaotongyinhang";default:return"未知"}},deposit:function(){var t=this;this.loading=!0;var n=this.$cookies.get("CUR_USERINFO").userid,a=this.bankid,e=this.money,i={userid:n,bankid:a,money:e};this.$ajax.post({url:this.root+"bankcard/deposit",data:i}).then(function(n){t.loading=!1,n.status?(t.$router.push("/wallet"),t.insert(e)):mui.toast(n.result)},function(n){t.loading=!1})},insert:function(t){var n={type:1,changemoney:t,changedetail:"零钱提现",userid:this.$cookies.get("CUR_USERINFO").userid};Object(c.d)(n)}}},d={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"content-container"},[a("Header",[t._v("提现")]),t._v(" "),a("div",{staticClass:"deposit-container"},[a("div",{staticClass:"deposit-content"},[a("div",{staticClass:"depodit-title"},[a("span",[t._v("到账银行卡")]),t._v(" "),a("div",[a("div",{staticClass:"recharge-bank",on:{click:function(n){return t.chooseBank()}}},[a("svg",{staticClass:"icon wallet-icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":this.bankIcon}})]),t._v(" "),a("span",{staticClass:"bank-name"},[t._v(t._s(this.defaultBankCard))]),t._v(" "),a("p",{staticClass:"bank-tip"},[t._v("两小时内到账")])])])]),t._v(" "),a("div",{staticClass:"deposit-main"},[a("span",[t._v("提现金额")]),t._v(" "),a("div",{staticClass:"pay-container"},[a("span",{staticClass:"icon-pay"},[t._v("￥")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.money,expression:"money"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入金额"},domProps:{value:t.money},on:{input:function(n){n.target.composing||(t.money=n.target.value)}}})]),t._v(" "),a("div",{staticClass:"btn-container"},[a("p",[t._v("当前零钱余额"+t._s(t.walletbalance)+"元，"),a("a",{on:{click:function(n){return t.depositAl(n)}}},[t._v("全部提现")])]),t._v(" "),a("button",{staticClass:"mui-btn mui-btn-outlined l-btn",attrs:{disabled:!t.money||t.loading,id:"promptBtn",type:"button"}},[t._v("\n                      "+t._s(t.loading?"提现中...":"提现")+"\n                    ")])])])])])],1)},staticRenderFns:[]};var l=a("VU/8")(u,d,!1,function(t){a("G1bo")},"data-v-6c52e328",null);n.default=l.exports}});
//# sourceMappingURL=21.88b6f0e472de87a24235.js.map