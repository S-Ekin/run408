!function(){"use strict";var e,t,r,n,o,a={},c={};function i(e){var t=c[e];if(void 0!==t)return t.exports;var r=c[e]={id:e,loaded:!1,exports:{}};return a[e].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=a,e=[],i.O=function(t,r,n,o){if(!r){var a=1/0;for(d=0;d<e.length;d++){r=e[d][0],n=e[d][1],o=e[d][2];for(var c=!0,s=0;s<r.length;s++)(!1&o||a>=o)&&Object.keys(i.O).every((function(e){return i.O[e](r[s])}))?r.splice(s--,1):(c=!1,o<a&&(a=o));if(c){e.splice(d--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,n,o]},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},r=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var a={};t=t||[null,r({}),r([]),r(r)];for(var c=2&n&&e;"object"==typeof c&&!~t.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach((function(t){a[t]=function(){return e[t]}}));return a.default=function(){return e},i.d(o,a),o},i.d=function(e,t){for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,r){return i.f[r](e,t),t}),[]))},i.u=function(e){return"js/"+e+"."+{asyncCommon:"654cb",math:"ec8b1",home:"26e22",problem:"2801d",english:"b7e8e",politics:"f3f57",computer:"99684",life:"32ccc",src_data_course_json:"b9c7d",src_data_firstCourse_json:"d320a",src_data_firstLog_json:"9a490",src_data_logs_json:"9d66e",src_data_taskTip_json:"4a267",src_data_universe_json:"84c25"}[e]+".js"},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},o="runmy:",i.l=function(e,t,r,a){if(n[e])n[e].push(t);else{var c,s;if(void 0!==r)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var f=u[d];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==o+r){c=f;break}}c||(s=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.setAttribute("data-webpack",o+r),c.src=e),n[e]=[t];var l=function(t,r){c.onerror=c.onload=null,clearTimeout(p);var o=n[e];if(delete n[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),s&&document.head.appendChild(c)}},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},i.p="";var s={runtime:0};i.f.compat=function(e,t){var r=function(){try{return document.createElement("link").relList.supports("preload")}catch(e){return!1}}();s[e]?t.push(s[e]):0!==s[e]&&{asyncCommon:1,math:1,problem:1,english:1,politics:1,computer:1,life:1}[e]&&t.push(s[e]=new Promise((function(t,n){for(var o="css/"+e+"."+{asyncCommon:"2996a",math:"9b467",home:"31d6c",problem:"741e6",english:"02a3a",politics:"ee981",computer:"0eb8b",life:"8132d",src_data_course_json:"31d6c",src_data_firstCourse_json:"31d6c",src_data_firstLog_json:"31d6c",src_data_logs_json:"31d6c",src_data_taskTip_json:"31d6c",src_data_universe_json:"31d6c"}[e]+".css",a=i.p+o,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var d=(l=c[u]).getAttribute("data-href")||l.getAttribute("href");if(!("stylesheet"!==l.rel&&"preload"!==l.rel||d!==o&&d!==a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){var l;if((d=(l=f[u]).getAttribute("data-href"))===o||d===a)return t()}var p=document.createElement("link");p.rel=r?"preload":"stylesheet",r?p.as="style":p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete s[e],p.parentNode.removeChild(p),n(o)},p.href=a,document.getElementsByTagName("head")[0].appendChild(p)})).then((function(){if(s[e]=0,r){var t=document.createElement("link");t.href=i.p+"css/"+e+"."+{asyncCommon:"2996a",math:"9b467",home:"31d6c",problem:"741e6",english:"02a3a",politics:"ee981",computer:"0eb8b",life:"8132d",src_data_course_json:"31d6c",src_data_firstCourse_json:"31d6c",src_data_firstLog_json:"31d6c",src_data_logs_json:"31d6c",src_data_taskTip_json:"31d6c",src_data_universe_json:"31d6c"}[e]+".css",t.rel="stylesheet",t.type="text/css",document.body.appendChild(t)}})))},function(){var e={runtime:0};i.f.j=function(t,r){var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if("runtime"!=t){var o=new Promise((function(r,o){n=e[t]=[r,o]}));r.push(n[2]=o);var a=i.p+i.u(t),c=new Error;i.l(a,(function(r){if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,n[1](c)}}),"chunk-"+t,t)}else e[t]=0},i.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,a=r[0],c=r[1],s=r[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(n in c)i.o(c,n)&&(i.m[n]=c[n]);if(s)var d=s(i)}for(t&&t(r);u<a.length;u++)o=a[u],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(d)},r=self.webpackChunkrunmy=self.webpackChunkrunmy||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}()}();