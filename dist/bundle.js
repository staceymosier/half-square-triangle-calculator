!function(e){var t={};function u(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=t,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},u.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u(u.s=5)}([function(e,t,u){"use strict";var n=Math.abs,r=Math.round;function o(e,t){return n(e-t)<=9.5367432e-7}e.exports=function(e){if(0===e||"0"===e)return"0";"string"==typeof e&&(e=parseFloat(e));var t=function(e){for(var t=1;!o(r(e*t)/t,e);)t*=10;return t}(e),u=e*t,l=n(function e(t,u){return o(u,0)?t:e(u,t%u)}(u,t)),a=t/l;return r(u/l)+"/"+r(a)}},function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=u(0),o=(n=r)&&n.__esModule?n:{default:n};var l=[.0625,.125,.1875,.25,.3125,.375,.4375,.5,.5625,.625,.6875,.75,.8125,.875,.9375,1],a=function(e,t){return Number(Math.round(e+"e"+t)+"e-"+t)};t.default={round:a,doMath:function(e,t){return 2===t?e-.875:4===t?.7071*e-.3535:8===t?e/2-.877:0},toFraction:function(e){var t=Math.floor(e),u=a(e-t,3),n=l.filter(function(e){return e<=u}),r=0==n.length?0:n[n.length-1],i=t+" "+(0,o.default)(r);return console.log((0,o.default)(r)),i}}},function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=u(1),o=(n=r)&&n.__esModule?n:{default:n};t.default={buildQuilt:function(){var e=document.querySelector("#block-size").value,t=document.querySelector("#hst-method-type").value,u=document.querySelector("#hst-results"),n=document.createElement("p"),r=o.default.doMath(parseFloat(e),parseInt(t)),l=o.default.toFraction(r);u.innerHTML="",n.innerHTML=l+"&quot;",u.appendChild(n)}}},function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={build:function(e,t){e.forEach(function(e){return t.add(new Option(e.text,e.value,e.selected))})}}},function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=u(3),o=(n=r)&&n.__esModule?n:{default:n};document.getElementById("block-size");var l=document.getElementById("quilt-size"),a=document.getElementById("hst-method-type"),i=[{text:"Twin",value:[63,87]},{text:"Twin XL",value:[63,92]},{text:"Full",value:[78,87]},{text:"Queen",value:[84,92],selected:!0},{text:"King",value:[102,92]},{text:"California King",value:[96,96]}],c=[{text:"Make 2 HSTs",value:2},{text:"Make 4 HSTs",value:4,selected:!0},{text:"Make 8 HSTs",value:8}];t.default={buildForm:function(){o.default.build(i,l),o.default.build(c,a)}}},function(e,t,u){"use strict";var n=o(u(4)),r=o(u(2));function o(e){return e&&e.__esModule?e:{default:e}}n.default.buildForm(),document.querySelector("#hst-go").addEventListener("click",function(){r.default.buildQuilt()})}]);