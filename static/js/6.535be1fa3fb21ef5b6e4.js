webpackJsonp([6],{ag1D:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{sitekey:"6Lc7c6QUAAAAAM4rvLIgFrybsZNDGf2QZsLeLYgs",widgetId:0}},methods:{execute:function(){window.grecaptcha.execute(this.widgetId)},reset:function(){window.grecaptcha.reset(this.widgetId)},render:function(){var e=this;window.grecaptcha&&(this.widgetId=window.grecaptcha.render("g-recaptcha",{sitekey:this.sitekey,size:"invisible",callback:function(t){e.$emit("verify",t),e.reset()}}))}},mounted:function(){this.render()}},c={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"g-recaptcha",attrs:{id:"g-recaptcha","data-sitekey":this.sitekey}})},staticRenderFns:[]},r=i("VU/8")(n,c,!1,null,null,null);t.default=r.exports}});
//# sourceMappingURL=6.535be1fa3fb21ef5b6e4.js.map