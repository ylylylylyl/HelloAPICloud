webpackJsonp([25],{v6mk:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("oFuF");var a={data:function(){return{href:"https://m.amap.com/around/?locations=116.470098,39.992838&keywords=%E7%BE%8E%E9%A3%9F,KTV,%E5%9C%B0%E9%93%81%E7%AB%99,%E5%85%AC%E4%BA%A4%E7%AB%99&defaultIndex=3&defaultView=&searchRadius=5000&key=9342d0c3e0b2ebe14922871bb6f3189f"}},methods:{initBMap:function(){console.log(222),new AMap.Map("container",{resizeEnable:!0,rotateEnable:!0,pitchEnable:!0,zoom:17,pitch:80,rotation:-15,viewMode:"3D",buildingAnimation:!0,expandZoomRange:!0,zooms:[3,20],center:[106.509879,29.598461]}).addControl(new AMap.ControlBar({showZoomBar:!1,showControlButton:!0,position:{right:"10px",top:"10px"}}))}},created:function(){var t=this;setTimeout(function(){return t.initBMap()},500)}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-container"},[n("Header",[t._v("小区周边")]),t._v(" "),n("div",{staticClass:"back-header"},[n("div",[n("span",{staticClass:"mui-icon mui-icon-arrowleft",on:{click:function(e){return t.$router.push("/home")}}}),t._v(" "),n("span",[t._v("小区周边")])]),t._v(" "),n("a",{staticClass:"records-span",attrs:{href:t.href}},[t._v("周边")])]),t._v(" "),n("div",{staticStyle:{width:"100%",height:"100%",resize:"both"},attrs:{id:"container"}})],1)},staticRenderFns:[]};var i=n("VU/8")(a,o,!1,function(t){n("vCr5")},"data-v-4ce073ad",null);e.default=i.exports},vCr5:function(t,e){}});
//# sourceMappingURL=25.3e3d77c0a31c3a35f994.js.map