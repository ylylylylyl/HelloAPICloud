webpackJsonp([23],{"5WvR":function(t,e){},bOTl:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Dd8w"),n=s.n(a),i=s("PJh5"),c=s.n(i),r=s("NYxO"),o={data:function(){return{data:"",type:"contact",activedKey:{contact:"",group:"",chatroom:""},status:{sending:"发送中",sent:"已发送",read:"已读"}}},mounted:function(){this.onGetContactUserList(),this.getCurrentMsg()},computed:n()({chatId:function(){return this.$route.params.id}},Object(r.c)({msgList:"onGetCurrentChatObjMsg",contact:"onGetContactUserList"}),{username:function(){return this.$route.params.username},toname:function(){return this.$route.params.toname}}),methods:n()({},Object(r.b)(["onSendText","onGetCurrentChatObjMsg","onGetContactUserList"]),{onSendTextMsg:function(){console.log(this.activedKey[this.type]),this.onSendText({chatType:this.type,chatId:this.chatId,message:this.data}),this.data=""},select2:function(t,e){this.$data.selectedKeys=[e],this.select(t),this.$data.activedKey[this.type]=t},getCurrentMsg:function(t){this.onGetCurrentChatObjMsg({type:"contact",id:this.chatId}),Vue.$store.commit("updateMessageStatus",{action:"oneUserReadMsgs",readUser:this.chatId})},renderTime:function(t){var e=new Date,s=t?new Date(t):e;return c()(s).format("MM-DD hh:mm A")}}),filters:{avatar:function(t){return t.slice(t.length-4)}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chat-container"},[s("span",{staticClass:"name"},[t._v(t._s(t.toname))]),t._v(" "),t._l(t.msgList,function(e,a){return s("div",{staticClass:"chat-item"},[e.bySelf?t._e():s("div",{staticClass:"chat-item-left"},[s("div",{staticClass:"avatar-box"}),t._v(" "),s("div",{staticClass:"bubble-box"},[s("div",{staticClass:"message-container bubble-container"},[s("span",{staticClass:"message-span"},[t._v(t._s(e.msg))])]),t._v(" "),"recall"!==e.status?s("div",{staticClass:"time-style",style:{"text-align":e.bySelf?"right":"left"}},[t._v(t._s(t.renderTime(e.time))+" "+t._s(e.bySelf?t.status[e.status]:"")+"\n          ")]):t._e()])]),t._v(" "),e.bySelf?s("div",{staticClass:"chat-item-right"},[s("div",{staticClass:"bubble-box"},[s("div",{staticClass:"message-container-right bubble-container-right"},[s("span",{staticClass:"message-span"},[t._v(t._s(e.msg))])])])]):t._e()])}),t._v(" "),s("div",{staticClass:"send-container"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.data,expression:"data"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入"},domProps:{value:t.data},on:{input:function(e){e.target.composing||(t.data=e.target.value)}}}),t._v(" "),s("button",{staticClass:"mui-btn",attrs:{type:"button"},on:{click:function(e){return t.onSendTextMsg()}}},[t._v("发送")])])],2)},staticRenderFns:[]};var d=s("VU/8")(o,u,!1,function(t){s("5WvR")},"data-v-9091e5c8",null);e.default=d.exports}});
//# sourceMappingURL=23.3e0f8522bb77cdab1891.js.map