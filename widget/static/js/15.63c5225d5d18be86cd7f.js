webpackJsonp([15],{Q2Ko:function(t,n){},TxbO:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i("tyqc"),c=(i("jkKj"),{components:{Header:e.a},data:function(){return{loading:!1,hotcity:[],cityData:[],chooseCityData:""}},computed:{currentCity:function(){return this.$store.state.chooseCity}},mounted:function(){var t=this;this.$nextTick(function(){t.initData()})},methods:{initData:function(){var t=this,n=document.querySelector("#ajaxLoading");n.style.display="block",this.$http.get("http://www.68party.com/app/cityList").then(function(i){if(i.body.data){var e=i.body.data;t.cityData=e.filter(function(t){return"热门"!=t.nameIndex}),t.hotcity=e.filter(function(t){return"热门"==t.nameIndex}),n.style.display="none",t.loading=!1}},function(t){console.log(t)}).catch(function(t){console.log(t)})},goAnchor:function(t){var n=this.$el.querySelector(t);document.documentElement.scrollTop=n.offsetTop},chooseCityFunc:function(t){this.$store.commit("CHOOSE_CITY",t),this.$router.push("/addpayuser")}}}),a={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"city-container"},[i("Header",[t._v("城市选择")]),t._v(" "),i("div",{staticClass:"mui-content"},[i("div",{staticClass:"mui-row"},[i("div",{staticClass:"mui-col-xs-11"},[i("div",{staticClass:"top",attrs:{id:"current"}},[i("div",{staticClass:"choose-city-container "},[i("span",{staticClass:"city-title"},[t._v("你所在的地区")]),t._v(" "),i("span",{staticClass:"city-name",on:{click:function(n){return t.chooseCityFunc(t.currentCity)}}},[t._v(t._s(t.currentCity))])]),t._v(" "),t.hotcity.length?i("div",{staticClass:"choose-city-container"},[i("span",{staticClass:"city-title"},[t._v(t._s(t.hotcity[0].nameIndex))]),t._v(" "),t._l(t.hotcity[0].singers,function(n){return i("span",{key:n.id,staticClass:"city-name",on:{click:function(i){t.chooseCityFunc(n.cityName.replace(/\([^\)]*\)/g,""))}}},[t._v("\n                    "+t._s(t._f("city")(n.cityName))+"\n                  ")])})],2):t._e()]),t._v(" "),i("div",{staticClass:"bottom"},t._l(t.cityData,function(n){return i("div",{key:n.nameIndex,staticClass:"choose-city-container current-city",attrs:{id:n.nameIndex}},[i("span",{staticClass:"city-title"},[t._v(t._s(n.nameIndex))]),t._v(" "),t._l(n.singers,function(n){return i("span",{key:n.id,staticClass:"city-name-bottom",on:{click:function(i){return t.chooseCityFunc(n.cityName)}}},[t._v(t._s(n.cityName))])})],2)}),0)]),t._v(" "),i("div",{staticClass:"mui-col-xs-1"},[i("div",{staticClass:"mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical",attrs:{id:"segmentedControls"}},[i("a",{staticClass:"mui-control-item mui-active",attrs:{href:"#0","data-index":"0"},on:{click:function(n){return t.goAnchor("#current")}}},[t._v("当前城市")]),t._v(" "),t._l(t.cityData,function(n,e){return i("a",{key:n.nameIndex,staticClass:"mui-control-item",attrs:{href:"#"+n.nameIndex,"data-index":e+1},on:{click:function(i){return t.goAnchor("#"+n.nameIndex)}}},[t._v(t._s(n.nameIndex))])})],2)])])])],1)},staticRenderFns:[]};var s=i("VU/8")(c,a,!1,function(t){i("Q2Ko")},"data-v-a46cc4e8",null);n.default=s.exports}});
//# sourceMappingURL=15.63c5225d5d18be86cd7f.js.map