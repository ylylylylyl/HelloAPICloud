webpackJsonp([56],{Awg9:function(t,i){},O4kh:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("oFuF"),a={data:function(){return{loading:!1,rightData:[],area:"",province:this.$route.query.province,city:this.$route.query.city,leftData:this.$route.query.left}},mounted:function(){this.search(this.city)},methods:{search:function(t){var i=this;this.city=t,this.$cookies.set("chooseCity",t),this.loading=!0,Object(s.e)(t).then(function(t){i.loading=!1,t.status&&(i.rightData=t.districts[0].districts)})},searchArea:function(t){this.area=t,this.$router.push({path:"/village/area",query:{province:this.province,city:this.city,area:this.area,left:this.rightData}})}}},n={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"city-title"},[e("div",[e("span",{on:{click:function(i){return t.$router.push("/village")}}},[t._v(t._s(t.province))]),t._v(" "),t.city?e("span",[t._v(">")]):t._e(),t._v(" "),e("span",[t._v(t._s(t.city))])]),t._v(" "),e("span",{staticClass:"iconfont icon-dingwei"})]),t._v(" "),e("div",{staticClass:"mui-content mui-row"},[e("div",{staticClass:"mui-col-xs-3"},[e("div",{staticClass:"mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical",attrs:{id:"segmentedControls"}},t._l(t.leftData,function(i,s){return e("a",{key:s,staticClass:"mui-control-item",class:{"mui-active":i.name==t.city},attrs:{id:"a","data-index":"0"},on:{click:function(e){return t.search(i.name)}}},[t._v(t._s(i.name))])}),0)]),t._v(" "),e("div",{staticClass:"mui-col-xs-9",staticStyle:{"border-left":"1px solid #c8c7cc"},attrs:{id:"segmentedControlContents"}},[t.loading?e("div",{staticClass:"mui-loading"},[t._m(0),t._v("玩命加载中...\n      ")]):t._e(),t._v(" "),t.loading?t._e():e("div",{staticClass:"mui-control-content"},[e("ul",{staticClass:"mui-table-view"},t._l(t.rightData,function(i){return e("li",{key:i.adcode,staticClass:"mui-table-view-cell",on:{click:function(e){return t.searchArea(i.name)}}},[t._v(t._s(i.name))])}),0)])])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"mui-spinner"},[i("span",{staticClass:"mui-icon mui-icon-spinner-cycle mui-spin"})])}]};var c=e("VU/8")(a,n,!1,function(t){e("Awg9")},"data-v-06bf2fb2",null);i.default=c.exports}});
//# sourceMappingURL=56.a24b310b5ae25eca42b3.js.map