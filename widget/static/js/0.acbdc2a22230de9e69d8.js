webpackJsonp([0],{"2yKt":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s={data:function(){return{typedata:[{value:1,text:"消防"},{value:2,text:"照明"},{value:3,text:"暖气"},{value:4,text:"马桶"},{value:5,text:"桌椅"},{value:6,text:"其他"}]}},mounted:function(){this.init()},methods:{init:function(){console.log(111),mui.init({gestureConfig:{tap:!0}});var t=this;mui.plusReady(function(){console.log(111),document.getElementById("faceVali").addEventListener("tap",function(){console.log(111),t.openCamera()},!1)})},initRepair:function(){var t=new mui.PopPicker;t.setData(this.typedata);document.getElementById("type-btn");var i=document.getElementById("type-result");t.show(function(t){i.innerText=t[0].text})},initDate:function(){var t=new Date;t.setMonth(t.getMonth()+1),console.log(t);var i=new mui.DtPicker({beginDate:new Date,endDate:new Date(t)});i.show(function(t){document.getElementById("date-result").innerText=t.text,i.dispose()})},goback:function(){this.$router.go(-1)},openCamera:function(){var t;console.log(111),plus.camera.getCamera().captureImage(function(i){plus.io.resolveLocalFileSystemURL(i,function(e){plus.nativeUI.showWaiting("人脸识别中",""),plus.zip.compressImage({src:e.toLocalURL(),dst:"_doc/camera/"+i,overwrite:!0,format:"jpg",width:"30%"},function(i){if(i.size>1048576)return mui.toast("文件超大,请调整相机重新拍照");t=i.target,uploadToServer(t)},function(t){plus.nativeUI.closeWaiting(),mui.toast("压缩失败！")})},function(t){plus.nativeUI.closeWaiting(),mui.toast("失败："+t.message)})},function(t){plus.nativeUI.closeWaiting(),mui.toast("失败："+t.message)},{filename:"_doc/camera/",index:1})}}},n={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"back-header"},[e("div",[e("span",{staticClass:"mui-icon mui-icon-arrowleft",on:{click:function(i){return t.goback()}}}),t._v(" "),e("span",[t._v("我要报修")])]),t._v(" "),e("span",{staticClass:"records-span"},[t._v("报修记录")])]),t._v(" "),e("div",{staticClass:"repair-container"},[e("button",{staticClass:"btn mui-btn mui-btn-block",attrs:{id:"type-btn"},on:{click:function(i){return t.initRepair()}}},[t._m(0),t._v(" "),t._m(1)]),t._v(" "),e("button",{staticClass:"btn mui-btn mui-btn-block",attrs:{id:"type-btn"},on:{click:function(i){return t.initDate()}}},[t._m(2),t._v(" "),t._m(3)]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),e("input",{attrs:{type:"file"}}),t._v(" "),e("button",{staticClass:"mui-btn submit-btn",attrs:{id:"faceVali",type:"button"}},[t._v("打开摄像头")]),t._v(" "),t._m(7)])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("span",{staticClass:"iconfont icon-leixing"}),this._v(" "),i("span",[this._v("维修类型")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("span",{attrs:{id:"type-result"}},[this._v("点击选择")]),this._v(" "),i("span",{staticClass:"mui-icon mui-icon-arrowright"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("span",{staticClass:"iconfont icon-shijian"}),this._v(" "),i("span",[this._v("预约时间")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("span",{attrs:{id:"date-result"}},[this._v("点击选择")]),this._v(" "),i("span",{staticClass:"mui-icon mui-icon-arrowright"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("button",{staticClass:"btn mui-btn mui-btn-block"},[i("div",[i("span",{staticClass:"iconfont icon-fangjian"}),this._v(" "),i("span",[this._v("房间选择")])]),this._v(" "),i("span",{staticClass:"room-span"},[this._v("1-101")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"repair-user-container"},[i("div",{staticClass:"repair-user"},[i("span",{staticClass:"iconfont icon-lianxiren"}),this._v(" "),i("span",{staticClass:"repair-user-title"},[this._v("联系人")]),this._v(" "),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入联系人"}})]),this._v(" "),i("div",{staticClass:"repair-user"},[i("span",{staticClass:"iconfont icon-lianxidianhua"}),this._v(" "),i("span",{staticClass:"repair-user-title"},[this._v("联系电话")]),this._v(" "),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入联系电话"}})])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"problem-container"},[i("div",{staticClass:"problem-container-title"},[i("span",{staticClass:"iconfont icon-asterisks-1-copy"}),this._v(" "),i("span",[this._v("请描述您遇到的问题")])]),this._v(" "),i("textarea",{staticClass:"mui-input-speech",attrs:{type:"textarea",rows:"5",placeholder:"请输入内容"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"submit-container"},[i("button",{staticClass:"mui-btn submit-btn",attrs:{type:"button"}},[this._v("确认提交")])])}]};var a=e("VU/8")(s,n,!1,function(t){e("HqxD")},"data-v-da079bcc",null);i.default=a.exports},HqxD:function(t,i){}});
//# sourceMappingURL=0.acbdc2a22230de9e69d8.js.map