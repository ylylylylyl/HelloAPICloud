webpackJsonp([54],{"0wro":function(t,n){},W9Nn:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s={components:{Header:i("tyqc").a},data:function(){return{root:"http://192.168.43.129:8080/",announce:{}}},computed:{noticeid:function(){return this.$route.query.noticeid}},mounted:function(){this.init()},methods:{init:function(){var t=this,n=this.noticeid;this.$ajax.post({url:this.root+"notice/selectnotice",data:{noticeid:n}}).then(function(n){n.status&&(t.announce=n.object)})}}},a={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"detail-container"},[i("Header",[t._v("公告详情")]),t._v(" "),i("div",{staticClass:"detail-content"},[i("div",{staticClass:"publisher-info"},[i("div",{staticClass:"info-item"},[i("svg",{staticClass:"icon notice-icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-tongzhigonggao"}})]),t._v(" "),i("span",{staticClass:"item-span"},[t._v(t._s(t.announce.noticetitle))])]),t._v(" "),i("div",{staticClass:"info-item"},[i("span",{staticClass:"iconfont icon-yonghu1"}),t._v(" "),i("span",{staticClass:"item-span"},[t._v(t._s(t.announce.noticepusher))])]),t._v(" "),i("div",{staticClass:"info-item"},[i("span",{staticClass:"iconfont  icon-dizhi1"}),t._v(" "),i("span",{staticClass:"item-span"},[t._v(t._s(t.announce.addr))])]),t._v(" "),i("div",{staticClass:"info-item"},[i("span",{staticClass:"iconfont icon-shijian1"}),t._v(" "),i("span",{staticClass:"item-span"},[t._v(t._s(t._f("format")(t.announce.noticetime)))])])]),t._v(" "),i("div",{staticClass:"publish-content"},[i("span",{staticClass:"iconfont icon-neirongguanli"}),t._v(" "),i("p",{staticClass:"publish-content-p"},[t._v("\n                "+t._s(t.announce.noticecontent)+"\n            ")])])])],1)},staticRenderFns:[]};var e=i("VU/8")(s,a,!1,function(t){i("0wro")},"data-v-10e9081f",null);n.default=e.exports}});
//# sourceMappingURL=54.a62ec0bb7f4858a76a71.js.map