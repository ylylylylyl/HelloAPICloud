webpackJsonp([1],{"2yKt":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={data:function(){return{typedata:[{value:1,text:"消防"},{value:2,text:"照明"},{value:3,text:"暖气"},{value:4,text:"马桶"},{value:5,text:"桌椅"},{value:6,text:"其他"}],uploadimg:""}},mounted:function(){},methods:{initRepair:function(){var t=new mui.PopPicker;t.setData(this.typedata);document.getElementById("type-btn");var i=document.getElementById("type-result");t.show(function(t){i.innerText=t[0].text})},initDate:function(){var t=new Date;t.setMonth(t.getMonth()+1);var i=new mui.DtPicker({beginDate:new Date,endDate:new Date(t)});i.show(function(t){document.getElementById("date-result").innerText=t.text,i.dispose()})},upload:function(){this.$refs.fileBtn.click()},goback:function(){this.$router.go(-1)},changeImage:function(t){var i=this,s=t.target.files[0];if(s){var e=new FileReader;e.readAsDataURL(s),e.onload=function(t){i.uploadimg=e.result}}},toRecords:function(){this.$router.push("/repairreport")}}},a={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("div",{staticClass:"back-header"},[s("div",[s("span",{staticClass:"mui-icon mui-icon-arrowleft",on:{click:function(i){return t.goback()}}}),t._v(" "),s("span",[t._v("我要报修")])]),t._v(" "),s("span",{staticClass:"records-span",on:{click:function(i){return t.toRecords()}}},[t._v("报修记录")])]),t._v(" "),s("div",{staticClass:"com-container repair-container"},[s("button",{staticClass:"btn mui-btn mui-btn-block",attrs:{id:"type-btn"},on:{click:function(i){return t.initRepair()}}},[t._m(0),t._v(" "),t._m(1)]),t._v(" "),s("button",{staticClass:"btn mui-btn mui-btn-block",attrs:{id:"type-btn"},on:{click:function(i){return t.initDate()}}},[t._m(2),t._v(" "),t._m(3)]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),s("div",{staticClass:"problem-container"},[t._m(7),t._v(" "),s("div",{staticClass:"upload-container"},[s("button",{staticClass:"upload-btn",on:{click:t.upload}},[s("span",{directives:[{name:"show",rawName:"v-show",value:!t.uploadimg,expression:"!uploadimg"}],staticClass:"mui-icon mui-icon-plusempty"}),t._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:t.uploadimg,expression:"uploadimg"}],staticClass:"upload-img",attrs:{src:t.uploadimg}})]),t._v(" "),s("input",{ref:"fileBtn",staticStyle:{display:"none",position:"absolute"},attrs:{type:"file",accept:"image/png, image/jpeg, image/gif, image/jpg",id:"btn-upload"},on:{change:function(i){return t.changeImage(i)}}})])]),t._v(" "),t._m(8)])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("span",{staticClass:"iconfont icon-leixing"}),this._v(" "),i("span",[this._v("维修类型")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("span",{attrs:{id:"type-result"}},[this._v("点击选择")]),this._v(" "),i("span",{staticClass:"mui-icon mui-icon-arrowright"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("span",{staticClass:"iconfont icon-shijian"}),this._v(" "),i("span",[this._v("预约时间")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("span",{attrs:{id:"date-result"}},[this._v("点击选择")]),this._v(" "),i("span",{staticClass:"mui-icon mui-icon-arrowright"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("button",{staticClass:"btn mui-btn mui-btn-block"},[i("div",[i("span",{staticClass:"iconfont icon-fangjian"}),this._v(" "),i("span",[this._v("房间选择")])]),this._v(" "),i("span",{staticClass:"room-span"},[this._v("1-101")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"repair-user-container"},[i("div",{staticClass:"repair-user"},[i("span",{staticClass:"iconfont icon-lianxiren"}),this._v(" "),i("span",{staticClass:"repair-user-title"},[this._v("联系人")]),this._v(" "),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入联系人"}})]),this._v(" "),i("div",{staticClass:"repair-user"},[i("span",{staticClass:"iconfont icon-lianxidianhua"}),this._v(" "),i("span",{staticClass:"repair-user-title"},[this._v("联系电话")]),this._v(" "),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入联系电话"}})])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"problem-container"},[i("div",{staticClass:"problem-container-title"},[i("span",{staticClass:"iconfont icon-asterisks-1-copy"}),this._v(" "),i("span",[this._v("请描述您遇到的问题")])]),this._v(" "),i("textarea",{staticClass:"mui-input-speech",attrs:{type:"textarea",rows:"5",placeholder:"请输入内容"}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"problem-container-title"},[i("span",{staticClass:"iconfont icon-asterisks-1-copy"}),this._v(" "),i("span",[this._v("上传照片")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"submit-container"},[i("button",{staticClass:"mui-btn submit-btn",attrs:{type:"button"}},[this._v("确认提交")])])}]};var n=s("VU/8")(e,a,!1,function(t){s("dORK")},"data-v-480d2e84",null);i.default=n.exports},dORK:function(t,i){}});
//# sourceMappingURL=1.79efeb2db62741517e09.js.map