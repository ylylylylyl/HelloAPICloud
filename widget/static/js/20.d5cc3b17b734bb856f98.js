webpackJsonp([20],{"3Lc/":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Xxa5"),n=i.n(a),s=i("exGp"),r=i.n(s),c=i("Dd8w"),o=i.n(c),u=i("NYxO"),l={data:function(){return{userid:"",loading:!1,rightData:[],queryleft:""}},computed:o()({},Object(u.c)(["curUserInfo"]),{province:function(){return this.$route.query.province},city:function(){return this.$route.query.city},area:function(){return this.$route.query.area},leftData:function(){return this.$route.query.left}}),mounted:function(){this.search(this.area)},methods:{search:function(t){var e=this;this.$cookies.set("chooseArea",t),this.loading=!0,this.$ajax.post({url:"http://192.168.43.129:8080//village/getVillage",data:{cityname:t}}).then(function(t){e.loading=!1,t.status?e.rightData=t.result:e.rightData=null})},chooseArea:function(t){var e={userid:this.curUserInfo.userid,lastloginchoose:t.villageid};this.$router.push({path:"/bindhouse?villagename="+t.villagename+"&&villageid="+t.villageid}),this.$ajax.post({url:"http://192.168.43.129:8080/user/chooseVillage",data:e}).then(function(t){t.status})},goCity:function(){var t=this;return r()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.goCitySearch(t.province);case 2:t.$router.push({path:"/village/city",query:{province:t.province,city:t.city,left:t.queryleft}});case 3:case"end":return e.stop()}},e,t)}))()},goCitySearch:function(t){var e=this;return this.$ajax.get({url:"https://restapi.amap.com/v3/config/district",params:{key:"8224cb94492d645e544a7b13df3ea7db",keywords:t}}).then(function(t){t.status&&(e.queryleft=t.districts[0].districts)})}}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"city-title"},[i("div",[i("span",{on:{click:function(e){return t.$router.push("/village")}}},[t._v(t._s(t.province))]),t._v(" "),t.city?i("span",[t._v(">")]):t._e(),t._v(" "),i("span",{on:{click:function(e){return t.goCity()}}},[t._v(t._s(t.city))]),t._v(" "),t.area?i("span",[t._v(">")]):t._e(),t._v(" "),i("span",[t._v(t._s(t.area))])]),t._v(" "),i("span",{staticClass:"iconfont icon-dingwei"})]),t._v(" "),i("div",{staticClass:"mui-content mui-row"},[i("div",{staticClass:"mui-col-xs-3"},[i("div",{staticClass:"mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical",attrs:{id:"segmentedControls"}},t._l(t.leftData,function(e,a){return i("a",{key:a,staticClass:"mui-control-item",class:{"mui-active":e.name==t.area},attrs:{id:"a","data-index":"0"},on:{click:function(i){return t.search(e.name)}}},[t._v(t._s(e.name))])}),0)]),t._v(" "),i("div",{staticClass:"mui-col-xs-9",staticStyle:{"border-left":"1px solid #c8c7cc"},attrs:{id:"segmentedControlContents"}},[t.loading?i("div",{staticClass:"mui-loading"},[t._m(0),t._v("玩命加载中...\n      ")]):t._e(),t._v(" "),t.loading||null!=t.rightData?t._e():i("div",{staticClass:"no-content"},[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-apptubiao-"}})]),t._v(" "),i("span",[t._v("该区域暂未开通相关社区")])]),t._v(" "),t.loading||null==t.rightData?t._e():i("div",{staticClass:"mui-control-content"},[i("ul",{staticClass:"mui-table-view"},t._l(t.rightData,function(e){return i("li",{key:e.villageid,staticClass:"mui-table-view-cell",on:{click:function(i){return t.chooseArea(e)}}},[t._v(t._s(e.villagename))])}),0)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mui-spinner"},[e("span",{staticClass:"mui-icon mui-icon-spinner-cycle mui-spin"})])}]};var d=i("VU/8")(l,v,!1,function(t){i("cRqX")},"data-v-75ce4e90",null);e.default=d.exports},cRqX:function(t,e){}});
//# sourceMappingURL=20.d5cc3b17b734bb856f98.js.map