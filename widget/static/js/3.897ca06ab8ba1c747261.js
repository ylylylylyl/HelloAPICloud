webpackJsonp([3],{"1mWv":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("oFuF"),a=s("+pfy"),o=s("0EwI"),r={components:{Loading:o.a,Nothing:a.a},mounted:function(){this.init()},methods:{toDetail:function(t){this.$router.push({path:"/forumdetail",query:{forumid:t.forumid,userid:t.userid}})},toZan:function(t){this.isclick=!this.isclick;var i=this.$cookies.get("CUR_USERINFO").userid;this.$ajax.post({url:this.root+"praise/insertpraise",data:{userid:i,forumid:t}}).then(function(t){t.status})},init:function(){var t=this;this.loading=!0;var i=this.$cookies.get("CUR_BINDINFO").villageid;this.$ajax.post({url:this.root+"forum/selectAll",data:{villageid:i}}).then(function(i){i.status&&(t.loading=!1,t.forum=i.result)})}},data:function(){return{forum:[],root:"http://192.168.43.129:8080/",isclick:!1,loading:!1}}},n={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[this.forum.length?t._e():s("Nothing"),t._v(" "),t._l(t.forum,function(i,e){return s("div",{key:i.forumid,staticClass:"forum-item "},[s("div",{staticClass:"left"},[s("b",{staticClass:"num"},[t._v(t._s(e+1))]),t._v(" "),s("div",[s("div",{on:{click:function(s){return t.toDetail(i)}}},[s("span",{staticClass:"item-title"},[t._v(t._s(i.forum.forumtitle))]),t._v(" "),s("div",{staticClass:"user-info"},[s("img",{staticClass:"user-avatar",attrs:{src:i.userinfo.avatar}}),t._v(" "),s("span",[t._v(t._s(i.userinfo.username))])]),t._v(" "),s("p",{staticClass:"item-des"},[t._v(t._s(i.forum.forumcontent))])]),t._v(" "),s("span",{staticClass:"datetime"},[t._v(t._s(t._f("format")(i.forum.forumtime)))]),t._v(" "),s("span",[t._v(t._s(i.forum.count))]),t._v(" "),s("svg",{staticClass:"icon icon-zan",attrs:{"aria-hidden":"true"},on:{click:function(s){return t.toZan(i.forum.forumid)}}},[s("use",{attrs:{"xlink:href":"#icon-zan1"}})])])]),t._v(" "),i.forum.picture?s("div",{staticClass:"right"},[s("img",{staticClass:"des-img",attrs:{src:i.forum.picture}})]):t._e()])}),t._v(" "),t.loading?s("Loading"):t._e()],2)},staticRenderFns:[]};var u=s("VU/8")(r,n,!1,function(t){s("DNU5")},"data-v-09281a22",null).exports,c={components:{Loading:o.a,Nothing:a.a},mounted:function(){this.init()},methods:{toDetail:function(t){this.$router.push({path:"/forumdetail",query:{forumid:t.forumid,userid:t.userid}})},toZan:function(t){this.isclick=!this.isclick;var i=this.$cookies.get("CUR_USERINFO").userid;this.$ajax.post({url:this.root+"praise/insertpraise",data:{userid:i,forumid:t}}).then(function(t){t.status})},init:function(){var t=this;console.log("init"),this.loading=!0;var i=this.$cookies.get("CUR_BINDINFO").villageid;this.$ajax.post({url:this.root+"forum/selectAllStatus",data:{villageid:i,status:1}}).then(function(i){i.status&&(t.loading=!1,t.forum=i.result)})}},data:function(){return{forum:[],root:"http://192.168.43.129:8080/",loading:!1}}},m={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[t._l(t.forum,function(i,e){return s("div",{key:i.forumid,staticClass:"forum-item "},[s("div",{staticClass:"left"},[s("b",{staticClass:"num"},[t._v(t._s(e+1))]),t._v(" "),s("div",[s("div",{on:{click:function(s){return t.toDetail(i)}}},[s("span",{staticClass:"item-title"},[t._v(t._s(i.forum.forumtitle))]),t._v(" "),s("div",{staticClass:"user-info"},[s("img",{staticClass:"user-avatar",attrs:{src:i.userinfo.avatar}}),t._v(" "),s("span",[t._v(t._s(i.userinfo.username))])]),t._v(" "),s("p",{staticClass:"item-des"},[t._v(t._s(i.forum.forumcontent))])]),t._v(" "),s("span",{staticClass:"datetime"},[t._v(t._s(t._f("format")(i.forum.forumtime)))]),t._v(" "),s("span",[t._v(t._s(i.forum.count))]),t._v(" "),s("svg",{staticClass:"icon icon-zan",attrs:{"aria-hidden":"true"},on:{click:function(s){return t.toZan(i.forum.forumid)}}},[s("use",{attrs:{"xlink:href":"#icon-zan1"}})])])]),t._v(" "),i.forum.picture?s("div",{staticClass:"right"},[s("img",{staticClass:"des-img",attrs:{src:i.forum.picture}})]):t._e()])}),t._v(" "),t.loading?s("Loading"):t._e(),t._v(" "),this.forum.length?t._e():s("Nothing")],2)},staticRenderFns:[]};var l=s("VU/8")(c,m,!1,function(t){s("DG/P")},"data-v-01c9f680",null).exports,d={components:{Loading:o.a,Nothing:a.a},mounted:function(){this.init()},methods:{toDetail:function(t){this.$router.push({path:"/forumdetail",query:{forumid:t.forumid,userid:t.userid}})},toZan:function(t){this.isclick=!this.isclick;var i=this.$cookies.get("CUR_USERINFO").userid;this.$ajax.post({url:this.root+"praise/insertpraise",data:{userid:i,forumid:t}}).then(function(t){t.status})},init:function(){var t=this;console.log(111),this.loading=!0;var i=this.$cookies.get("CUR_BINDINFO").villageid;this.$ajax.post({url:this.root+"forum/selectAllStatus",data:{villageid:i,status:0}}).then(function(i){i.status&&(t.loading=!1,t.forum=i.result)})}},data:function(){return{forum:[],root:"http://192.168.43.129:8080/",loading:!1}}},f={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[t._l(t.forum,function(i){return s("div",{key:i.forumid,staticClass:"forum-item "},[s("div",{staticClass:"left"},[s("b",{staticClass:"num"},[t._v("1")]),t._v(" "),s("div",[s("div",{on:{click:function(s){return t.toDetail(i)}}},[s("span",{staticClass:"item-title"},[t._v(t._s(i.forum.forumtitle))]),t._v(" "),s("div",{staticClass:"user-info"},[s("img",{staticClass:"user-avatar",attrs:{src:i.userinfo.avatar}}),t._v(" "),s("span",[t._v(t._s(i.userinfo.username))])]),t._v(" "),s("p",{staticClass:"item-des"},[t._v(t._s(i.forum.forumcontent))])]),t._v(" "),s("span",{staticClass:"datetime"},[t._v(t._s(t._f("format")(i.forum.forumtime)))]),t._v(" "),s("span",[t._v(t._s(i.forum.count))]),t._v(" "),s("svg",{staticClass:"icon icon-zan",attrs:{"aria-hidden":"true"},on:{click:function(s){return t.toZan(i.forum.forumid)}}},[s("use",{attrs:{"xlink:href":"#icon-zan1"}})])])]),t._v(" "),i.forum.picture?s("div",{staticClass:"right"},[s("img",{staticClass:"des-img",attrs:{src:i.forum.picture}})]):t._e()])}),t._v(" "),t.loading?s("Loading"):t._e(),t._v(" "),this.forum.length?t._e():s("Nothing")],2)},staticRenderFns:[]};var v={components:{Hot:u,Question:l,Share:s("VU/8")(d,f,!1,function(t){s("bkST")},"data-v-fb851656",null).exports},data:function(){return{itemmobile:"item1mobile",searchtext:"",root:"http://192.168.43.129:8080/",forum:[],searchShow:!1,isRouterAlive:!0}},created:function(){this.debouncednewFormName=Object(e.a)(this.newFormName,500)},mounted:function(){this.init()},beforeDestroy:function(){document.getElementsByClassName("mui-backdrop")[0]&&(document.getElementsByClassName("mui-backdrop")[0].style.display="none")},watch:{searchtext:function(t){""==t?(this.itemmobile="item1mobile",this.searchShow=!1,this.$refs.input.actived=!1):(this.debouncednewFormName(),this.searchShow=!0)}},methods:{init:function(){mui(".mui-input-row input").input(),mui(".mui-slider").slider()},toRouter:function(t){switch(t){case 1:this.$router.push("/publishforum");break;case 2:this.$router.push("/home");break;case 3:this.$router.push("/myforum")}},toForum:function(t){switch(t){case 1:this.itemmobile="item1mobile";break;case 2:this.itemmobile="item2mobile";break;case 3:this.itemmobile="item3mobile"}return!0},newFormName:function(){var t=this,i=this.$cookies.get("CUR_BINDINFO").villageid;this.$ajax.post({url:this.root+"forum/selectByKey",data:{villageid:i,key:this.searchtext}}).then(function(i){i.status&&(t.forum=i.result)})}}},h={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"body-container"},[s("div",{staticClass:"header"},[s("span",{staticClass:"mui-icon iconfont icon-shouye",on:{click:function(i){return t.toRouter(2)}}}),t._v(" "),s("div",{staticClass:"mui-input-row mui-search"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchtext,expression:"searchtext"}],ref:"input",staticClass:"search mui-input-clear",attrs:{type:"search",placeholder:"请输入关键字"},domProps:{value:t.searchtext},on:{input:function(i){i.target.composing||(t.searchtext=i.target.value)}}})]),t._v(" "),s("a",{staticClass:"mui-action-menu mui-icon mui-icon-bars mui-pull-right",attrs:{id:"menu",href:"#topPopover"}})]),t._v(" "),t.searchShow?t._e():s("div",{staticClass:"mui-slider",attrs:{id:"slider"}},[s("div",{staticClass:"mui-slider-indicator mui-segmented-control mui-segmented-control-inverted",attrs:{id:"sliderSegmentControl"}},[s("a",{staticClass:"mui-control-item mui-active",attrs:{href:"#item1mobile"},on:{click:function(i){return t.toForum(1)}}},[t._v("最新")]),t._v(" "),s("a",{staticClass:"mui-control-item",attrs:{href:"#item2mobile"},on:{click:function(i){return t.toForum(2)}}},[t._v("提问帖")]),t._v(" "),s("a",{staticClass:"mui-control-item",attrs:{href:"#item3mobile"},on:{click:function(i){return t.toForum(3)}}},[t._v("分享帖")])]),t._v(" "),s("div",{staticClass:"mui-slider-group"},["item1mobile"==t.itemmobile?s("div",{staticClass:"md-f1 mui-slider-item mui-control-content detailInfos md-box md-ver mui-active",attrs:{id:"item1mobile"}},[s("Hot")],1):t._e(),t._v(" "),"item2mobile"==t.itemmobile?s("div",{staticClass:"bg md-f1 mui-slider-item mui-control-content detailInfos1 md-box md-ver",attrs:{id:"item2mobile"}},[s("Question")],1):t._e(),t._v(" "),"item3mobile"==t.itemmobile?s("div",{staticClass:"bg md-f1 mui-slider-item mui-control-content detailInfos2 md-box md-ver",attrs:{id:"item3mobile"}},[s("Share")],1):t._e()])]),t._v(" "),t.searchShow?s("div",{staticClass:"forum-container"},t._l(t.forum,function(i,e){return s("div",{key:i.forumid,staticClass:"forum-item",on:{click:function(s){return t.toDetail(i.forum)}}},[s("div",{staticClass:"left"},[s("b",{staticClass:"num"},[t._v(t._s(e+1))]),t._v(" "),s("div",[s("span",{staticClass:"item-title"},[t._v(t._s(i.forum.forumtitle))]),t._v(" "),s("div",{staticClass:"user-info"},[s("img",{staticClass:"user-avatar",attrs:{src:i.userinfo.avatar}}),t._v(" "),s("span",[t._v(t._s(i.userinfo.username))])]),t._v(" "),s("p",{staticClass:"item-des"},[t._v(t._s(i.forum.forumcontent))]),t._v(" "),s("span",{staticClass:"datetime"},[t._v(t._s(t._f("format")(i.forum.forumtime)))]),t._v(" "),s("span",[t._v(t._s(i.forum.count))]),t._v(" "),s("svg",{staticClass:"icon icon-zan",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-zan"}})])])]),t._v(" "),i.forum.picture?s("div",{staticClass:"right"},[s("img",{staticClass:"des-img",attrs:{src:i.forum.picture}})]):t._e()])}),0):t._e(),t._v(" "),s("div",{staticClass:"mui-popover",attrs:{id:"topPopover"}},[s("div",{staticClass:"mui-popover-arrow"}),t._v(" "),s("div",{staticClass:"mui-scroll-wrapper"},[s("div",{staticClass:"mui-scroll"},[s("ul",{staticClass:"mui-table-view"},[s("li",{staticClass:"mui-table-view-cell",on:{click:function(i){return t.toRouter(1)}}},[s("span",{staticClass:"mui-icon mui-icon-compose"}),t._v("\n            我要发帖\n        ")]),t._v(" "),s("li",{staticClass:"mui-table-view-cell",on:{click:function(i){return t.toRouter(3)}}},[s("span",{staticClass:"mui-icon mui-icon-chatboxes"}),t._v("\n          我的发帖\n        ")])])])])])])},staticRenderFns:[]};var _=s("VU/8")(v,h,!1,function(t){s("KCPN")},"data-v-71f825d5",null);i.default=_.exports},"DG/P":function(t,i){},DNU5:function(t,i){},KCPN:function(t,i){},bkST:function(t,i){}});
//# sourceMappingURL=3.897ca06ab8ba1c747261.js.map