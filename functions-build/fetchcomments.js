!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}({2:function(e,t){e.exports=require("https")},8:function(e,t,n){"use strict";const o=n(2);t.handler=function(e,t,n){var r=e.queryStringParameters.id,i=process.env.netlify_access_token;void 0===r&&n("A product id must be specified.",{statusCode:500});var s={hostname:"api.netlify.com",port:443,method:"GET",headers:{"Content-Type":"application/json"}},u=`access_token=${i}`,a=Object.assign({},s,{path:`/api/v1/sites/${process.env.site_id}/forms?${u}`});o.request(a,function(e){e.setEncoding("utf8");var t="";e.on("data",e=>{t+=e}),e.on("data",e=>{t+=e}),e.on("end",function(){var e=(t=JSON.parse(t)).filter(e=>e.name==`post-${r}`)[0],i=Object.assign({},s,{path:`/api/v1/forms/${e.id}/submissions?${u}`});o.request(i,function(e){e.setEncoding("utf8");var t="";e.on("data",e=>{t+=e}),e.on("end",function(){n(null,{statusCode:200,headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"},body:t})})}).end()})}).end()}}}));