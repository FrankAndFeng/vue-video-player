!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("video.js")):"function"==typeof define&&define.amd?define(["videojs"],t):"object"==typeof exports?exports.VueVideoPlayer=t(require("video.js")):e.VueVideoPlayer=t(e.videojs)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=3)}([function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(i),s=window.videojs||o.default;"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),r=1;r<arguments.length;r++){var i=arguments[r];if(null!=i)for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])}return n},writable:!0,configurable:!0});var a=["loadeddata","canplay","canplaythrough","play","pause","waiting","playing","ended","error"];t.default={name:"video-player",props:{start:{type:Number,default:0},crossOrigin:{type:String,default:""},playsinline:{type:Boolean,default:!1},customEventName:{type:String,default:"statechanged"},options:{type:Object,required:!0},events:{type:Array,default:function(){return[]}},globalOptions:{type:Object,default:function(){return{controls:!0,controlBar:{remainingTimeDisplay:!1,playToggle:{},progressControl:{},fullscreenToggle:{},volumeMenuButton:{inline:!1,vertical:!0}},techOrder:["html5"],plugins:{}}}},globalEvents:{type:Array,default:function(){return[]}},trackList:{type:Array,default:function(){return[]}}},data:function(){return{player:null,reseted:!0}},mounted:function(){this.player||this.initialize()},beforeDestroy:function(){this.player&&this.dispose()},methods:{initialize:function(){var e=this,t=Object.assign({},this.globalOptions,this.options);this.playsinline&&(this.$refs.video.setAttribute("controlsList","nofullscreen nodownload noremoteplayback"),this.$refs.video.setAttribute("playsinline","isiPhoneShowPlaysinline"),this.$refs.video.setAttribute("webkit-playsinline","isiPhoneShowPlaysinline"),this.$refs.video.setAttribute("x5-video-player-type","h5-page"),this.$refs.video.setAttribute("x5-playsinlin",""),this.$refs.video.setAttribute("t7-video-player-type","inline"),this.$refs.video.setAttribute("x-webkit-airplay","")),""!==this.crossOrigin&&(this.$refs.video.crossOrigin=this.crossOrigin,this.$refs.video.setAttribute("crossOrigin",this.crossOrigin));var n=function(t,n){t&&e.$emit(t,e.player),n&&e.$emit(e.customEventName,r({},t,n))};t.plugins&&delete t.plugins.__ob__;var i=this;this.player=s(this.$refs.video,t,function(){for(var e=this,t=a.concat(i.events).concat(i.globalEvents),r={},o=0;o<t.length;o++)"string"==typeof t[o]&&void 0===r[t[o]]&&function(t){r[t]=null,e.on(t,function(){n(t,!0)})}(t[o]);this.on("timeupdate",function(){n("timeupdate",this.currentTime())}),i.$emit("ready",this)})},dispose:function(e){var t=this;this.player&&this.player.dispose&&("Flash"!==this.player.techName_&&this.player.pause&&this.player.pause(),this.player.dispose(),this.player=null,this.$nextTick(function(){t.reseted=!1,t.$nextTick(function(){t.reseted=!0,t.$nextTick(function(){e&&e()})})}))}},watch:{options:{deep:!0,handler:function(e,t){var n=this;this.dispose(function(){e&&e.sources&&e.sources.length&&n.initialize()})}}}}},function(e,t,n){"use strict";function r(e){n(8)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),o=n.n(i);for(var s in i)["default","default"].indexOf(s)<0&&function(e){n.d(t,e,function(){return i[e]})}(s);var a=n(7),u=n(6),l=r,d=u(o.a,a.a,!1,l,"data-v-0255ff62",null);t.default=d.exports},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.install=t.videoPlayer=t.videojs=void 0;var i=n(0),o=r(i),s=n(2),a=r(s),u=window.videojs||o.default,l=function(e,t){t&&(t.options&&(a.default.props.globalOptions.default=function(){return t.options}),t.events&&(a.default.props.globalEvents.default=function(){return t.events})),e.component(a.default.name,a.default)},d={videojs:u,videoPlayer:a.default,install:l};t.default=d,t.videojs=u,t.videoPlayer=a.default,t.install=l},function(e,t,n){t=e.exports=n(5)(),t.push([e.i,".video-cover[data-v-0255ff62]{position:absolute;z-index:1;width:inherit;height:inherit;background-color:transparent}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t){e.exports=function(e,t,n,r,i,o){var s,a=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(s=e,a=e.default);var l="function"==typeof a?a.options:a;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),i&&(l._scopeId=i);var d;if(o?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=d):r&&(d=r),d){var c=l.functional,f=c?l.render:l.beforeCreate;c?(l._injectStyles=d,l.render=function(e,t){return d.call(t),f(e,t)}):l.beforeCreate=f?[].concat(f,d):[d]}return{esModule:s,exports:a,options:l}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.reseted?n("div",{staticClass:"video-player"},[n("video",{ref:"video",staticClass:"video-js"},e._l(e.trackList,function(e){return n("track",{attrs:{kind:e.kind,label:e.label,src:e.src,srcLang:e.srcLang,default:e.default}})}),0),e._v(" "),n("div",{staticClass:"video-cover"})]):e._e()},i=[],o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(9)("3f4355c2",r,!0,{})},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=d[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],i=0;i<n.parts.length;i++)s.push(o(n.parts[i]));d[n.id]={id:n.id,refs:1,parts:s}}}}function i(){var e=document.createElement("style");return e.type="text/css",c.appendChild(e),e}function o(e){var t,n,r=document.querySelector("style["+g+'~="'+e.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(b){var o=p++;r=f||(f=i()),t=s.bind(null,r,o,!1),n=s.bind(null,r,o,!0)}else r=i(),t=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function s(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function a(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),y.ssrId&&e.setAttribute(g,t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(10),d={},c=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,v=!1,h=function(){},y=null,g="data-vue-ssr-id",b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,i){v=n,y=i||{};var o=l(e,t);return r(o),function(t){for(var n=[],i=0;i<o.length;i++){var s=o[i],a=d[s.id];a.refs--,n.push(a)}t?(o=l(e,t),r(o)):o=[];for(var i=0;i<n.length;i++){var a=n[i];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete d[a.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=o[0],a=o[1],u=o[2],l=o[3],d={id:e+":"+i,css:a,media:u,sourceMap:l};r[s]?r[s].parts.push(d):n.push(r[s]={id:s,parts:[d]})}return n}}])});