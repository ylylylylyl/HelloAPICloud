webpackJsonp([23],{eO2D:function(t,e){},v6mk:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("tyqc"),i=(n("+aT9"),n("oFuF")),a={components:{Header:o.a},data:function(){return{href:"https://m.amap.com/around/?locations=116.470098,39.992838&keywords=%E7%BE%8E%E9%A3%9F,KTV,%E5%9C%B0%E9%93%81%E7%AB%99,%E5%85%AC%E4%BA%A4%E7%AB%99&defaultIndex=3&defaultView=&searchRadius=5000&key=9342d0c3e0b2ebe14922871bb6f3189f"}},methods:{initBMap:function(){Object(i.a)().then(function(t){new t.Map("container",{resizeEnable:!0,rotateEnable:!0,pitchEnable:!0,zoom:17,pitch:80,rotation:-15,viewMode:"3D",buildingAnimation:!0,expandZoomRange:!0,zooms:[3,20],center:[106.509879,29.598461]}).addControl(new t.ControlBar({showZoomBar:!1,showControlButton:!0,position:{right:"10px",top:"10px"}}))})}},mounted:function(){var t=this;setTimeout(function(){return t.initBMap()},500)}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-container"},[e("Header",[this._v("小区周边")]),this._v(" "),e("div",{staticStyle:{width:"100%",height:"100%",resize:"both"},attrs:{id:"container"}})],1)},staticRenderFns:[]};var c=n("VU/8")(a,r,!1,function(t){n("eO2D")},"data-v-62c09906",null);e.default=c.exports}});
//# sourceMappingURL=23.8a07c21bdb0dc9ab5079.js.map