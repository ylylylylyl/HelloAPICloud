webpackJsonp([39],{HluR:function(t,e){},N642:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Dd8w"),s=n.n(a),i=n("NYxO"),c={components:{Header:n("tyqc").a},mounted:function(){this.init()},computed:s()({},Object(i.c)(["curUserInfo"])),data:function(){return{root:"http://192.168.43.129:8080/",walletbalance:""}},methods:{toRouter:function(t){switch(t){case 1:this.$router.push("/recharge");break;case 2:this.$router.push({path:"/deposit",query:{walletbalance:this.walletbalance}})}},init:function(){var t=this,e=this.$cookies.get("CUR_USERINFO").userid;this.$ajax.post({url:this.root+"user/selectByUserId",data:{userid:e}}).then(function(e){e.status&&(t.walletbalance=e.object.walletbalance)})}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-container"},[n("Header",[t._v("零钱")]),t._v(" "),n("div",{staticClass:"wallet-container"},[n("svg",{staticClass:"icon wallet-icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-icon-"}})]),t._v(" "),n("div",{staticClass:"wallet-info"},[n("p",{staticClass:"wallet-info-p"},[t._v("我的零钱")]),t._v(" "),n("span",{staticClass:"wallet-info-span"},[t._v("￥"+t._s(t.walletbalance))])]),t._v(" "),n("div",{staticClass:"btn-container"},[n("button",{staticClass:"mui-btn mui-btn-outlined l-btn",attrs:{type:"button"},on:{click:function(e){return t.toRouter(1)}}},[t._v("充值")]),t._v(" "),n("button",{staticClass:"mui-btn mui-btn-outlined l-btn",attrs:{type:"button"},on:{click:function(e){return t.toRouter(2)}}},[t._v("提现")])])])],1)},staticRenderFns:[]};var l=n("VU/8")(c,o,!1,function(t){n("HluR")},"data-v-24605d03",null);e.default=l.exports}});
//# sourceMappingURL=39.6b148fd2856c2098433e.js.map