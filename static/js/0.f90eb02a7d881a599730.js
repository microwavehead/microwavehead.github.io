webpackJsonp([0],{"76HI":function(e,t){},AqjM:function(e,t,s){e.exports=s.p+"static/img/IMG_20190118_221652.057fb4d.jpg"},G6nb:function(e,t,s){e.exports=s.p+"static/img/IMG_20190113163453773.a7260f2.jpg"},YUo1:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={props:{newsItem:{type:Object,default:function(){return{id:0,title:"test",summary:"",photos:[],coverPhoto:""}}},selected:{type:Boolean}},computed:{imageExists:function(){try{return s("atFt")("./"+this.newsItem.folder+"/"+this.newsItem.coverPhoto),!0}catch(e){return!1}},backgroundImage:function(){return'background-image: url("'+s("hPHs")("./"+this.newsItem.folder+"/"+this.newsItem.coverPhoto)+'");'}},methods:{setSelected:function(){this.$store.commit("setSelected",{item:this.newsItem})}}},i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return null!==e.newsItem&&e.newsItem.publish&&e.imageExists?s("div",{staticClass:"news-item",class:{notSelected:!e.selected,selected:e.selected},on:{click:e.setSelected}},[s("div",{directives:[{name:"show",rawName:"v-show",value:!e.selected,expression:"!selected"}],staticClass:"holder"},[s("div",{staticClass:"cover-image",style:e.backgroundImage}),e._v(" "),s("div",{staticClass:"title-holder"},[s("h3",{staticClass:"title"},[e._v(e._s(null!==e.newsItem?e.newsItem.title:""))]),e._v(" "),s("div",{staticClass:"date"},[e._v(e._s(null!==e.newsItem?e.newsItem.date:""))])])])]):e._e()},staticRenderFns:[]};var o=s("VU/8")(n,i,!1,function(e){s("76HI")},null,null);t.default=o.exports},atFt:function(e,t,s){var n={"./20190113/IMG_20190113163453773.jpg":"G6nb","./20190113/IMG_20190117_192120.jpg":"qWvt","./20190113/IMG_20190117_192210.jpg":"twUb","./20190113/IMG_20190118_221652.jpg":"AqjM","./20190113/cover.jpg":"bSRM"};function i(e){return s(o(e))}function o(e){var t=n[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id="atFt"},bSRM:function(e,t,s){e.exports=s.p+"static/img/cover.bc43c2f.jpg"},hPHs:function(e,t,s){var n={"./20190113/IMG_20190113163453773.jpg":"G6nb","./20190113/IMG_20190117_192120.jpg":"qWvt","./20190113/IMG_20190117_192210.jpg":"twUb","./20190113/IMG_20190118_221652.jpg":"AqjM","./20190113/cover.jpg":"bSRM"};function i(e){return s(o(e))}function o(e){var t=n[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id="hPHs"},qWvt:function(e,t,s){e.exports=s.p+"static/img/IMG_20190117_192120.b2db327.jpg"},twUb:function(e,t,s){e.exports=s.p+"static/img/IMG_20190117_192210.285ef04.jpg"}});
//# sourceMappingURL=0.f90eb02a7d881a599730.js.map