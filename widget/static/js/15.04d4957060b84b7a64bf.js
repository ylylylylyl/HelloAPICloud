webpackJsonp([15],{"/+cB":function(t,e){},CsIc:function(t,e){},rcGs:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("tyqc"),s=a("0EwI"),n={name:"Pie",data:function(){return{num:0}},props:{humidity:{default:60}},computed:{delay:function(){return"-"+this.num+"s"}},mounted:function(){this.startAnimate(1,this.humidity,25)},watch:{humidity:function(){this.startAnimate(1,this.humidity,25)}},methods:{startAnimate:function(t,e,a){var i=this;setTimeout(function(){i.num<e?(i.num+=t,i.startAnimate(t,e,a)):i.num=e},a)}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pie-wrap"},[e("div",{class:["pie",{"pie-all":100==this.num}],style:{animationDelay:this.delay}},[e("div",{staticClass:"pie-inner"},[e("p",{staticClass:"percent"},[this._v(this._s(this.num)+"%")]),this._v(" "),e("p",{staticClass:"txt"},[this._v("空气湿度")])])])])},staticRenderFns:[]};var c=a("VU/8")(n,r,!1,function(t){a("/+cB")},"data-v-5942d997",null).exports,o={components:{Header:i.a,Pie:c,Loading:s.a},mounted:function(){this.init()},data:function(){return{root:"http://192.168.43.129:8080/",feathure:{},weather:{},num:"",loading:!1}},methods:{init:function(){var t=this,e=Number(this.$cookies.get("CUR_BINDINFO").villageid)||Number(this.$cookies.get("CUR_USERINFO").villageid);this.loading=!0,this.$ajax.post({url:this.root+"village/getDetail",data:{villageid:e}}).then(function(e){t.loading=!1,t.getWeather(e.object.cityid),t.getFeathure(e.object.cityid)})},getWeather:function(t){var e=this;this.$ajax.get({url:"https://restapi.amap.com/v3/weather/weatherInfo",params:{key:"8224cb94492d645e544a7b13df3ea7db",city:t,extensions:"base"}}).then(function(t){e.weather=t.lives[0]})},getFeathure:function(t){var e=this;this.$ajax.get({url:"https://restapi.amap.com/v3/weather/weatherInfo",params:{key:"8224cb94492d645e544a7b13df3ea7db",city:t,extensions:"all"}}).then(function(t){e.feathure=t.forecasts[0]})}},filters:{week:function(t){switch(t){case"1":return"星期一";case"2":return"星期二";case"3":return"星期三";case"4":return"星期四";case"5":return"星期五";case"6":return"星期六";case"7":return"星期日"}}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-container"},[a("Header",[t._v("天气预报")]),t._v(" "),t.weather.city?a("div",{staticClass:"weather-container"},[a("div",{staticClass:"top-container"},[a("span",{staticClass:"area-span"},[t._v(t._s(t.weather.city))]),t._v(" "),a("span",{staticClass:"area-span mui-icon mui-icon-location"})]),t._v(" "),a("div",{staticClass:"temprature-container"},[a("span",{staticClass:"temp-span"},[t._v(t._s(t.weather.temperature||"")+"℃")])]),t._v(" "),a("div",{staticClass:"last-time-container"},[a("span",{staticClass:"last-time"},[t._v("上次更新时间："+t._s(t.weather.reporttime))])]),t._v(" "),a("div",{staticClass:"main-container"},t._l(t.feathure.casts,function(e,i){return a("div",{key:i,staticClass:"item"},[a("span",[t._v(t._s(e.date)+" "+t._s(t._f("week")(e.week)))]),t._v(" "),a("span",[t._v(t._s(e.dayweather))]),t._v(" "),a("span",[t._v(t._s(e.daytemp)+"℃/"+t._s(e.nighttemp)+"℃")])])}),0),t._v(" "),a("div",{staticClass:"comfort-container"},[a("span",[t._v("舒适度")]),t._v(" "),a("Pie",{attrs:{humidity:t.weather.humidity}})],1),t._v(" "),a("div",{staticClass:"comfort-container"},[a("span",[t._v("风向风力")]),t._v(" "),a("div",{staticClass:"svg-container"},[a("svg",{staticClass:"icon icon-fengche",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-fengche1"}})])]),t._v(" "),a("div",{staticClass:"span-container"},[a("span",[t._v(t._s(t.weather.winddirection)+"方向")])])])]):t._e(),t._v(" "),t.loading?a("Loading"):t._e()],1)},staticRenderFns:[]};var h=a("VU/8")(o,u,!1,function(t){a("CsIc")},"data-v-08111933",null);e.default=h.exports}});
//# sourceMappingURL=15.04d4957060b84b7a64bf.js.map