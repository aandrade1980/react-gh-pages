(this["webpackJsonpserverless-database-app"]=this["webpackJsonpserverless-database-app"]||[]).push([[3],{22:function(e,t,n){var r=n(23);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useAsyncStorage",{enumerable:!0,get:function(){return o.useAsyncStorage}}),t.default=void 0;var u=r(n(24)),o=n(29),a=u.default;t.default=a},23:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},24:function(e,t,n){var r=n(23);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n(25)),o=r(n(26)),a=r(n(27)),l=function(e,t){return new Promise((function(n,r){try{var u=e();t&&t(null,u),n(u)}catch(o){t&&t(o),r(o)}}))},c=function(e,t,n){return Promise.all(e).then((function(e){var r=n?n(e):null;return t&&t(null,r),Promise.resolve(r)}),(function(e){return t&&t(e),Promise.reject(e)}))},i=function(){function e(){(0,u.default)(this,e)}return(0,o.default)(e,null,[{key:"getItem",value:function(e,t){return l((function(){return window.localStorage.getItem(e)}),t)}},{key:"setItem",value:function(e,t,n){return l((function(){window.localStorage.setItem(e,t)}),n)}},{key:"removeItem",value:function(e,t){return l((function(){return window.localStorage.removeItem(e)}),t)}},{key:"mergeItem",value:function(e,t,n){return l((function(){!function(e,t){var n=window.localStorage.getItem(e),r=JSON.parse(n),u=JSON.parse(t),o=JSON.stringify((0,a.default)({},r,u));window.localStorage.setItem(e,o)}(e,t)}),n)}},{key:"clear",value:function(e){return l((function(){window.localStorage.clear()}),e)}},{key:"getAllKeys",value:function(e){return l((function(){for(var e=window.localStorage.length,t=[],n=0;n<e;n+=1){var r=window.localStorage.key(n);t.push(r)}return t}),e)}},{key:"flushGetRequests",value:function(){}},{key:"multiGet",value:function(t,n){var r=t.map((function(t){return e.getItem(t)}));return c(r,n,(function(e){return e.map((function(e,n){return[t[n],e]}))}))}},{key:"multiSet",value:function(t,n){var r=t.map((function(t){return e.setItem(t[0],t[1])}));return c(r,n)}},{key:"multiRemove",value:function(t,n){var r=t.map((function(t){return e.removeItem(t)}));return c(r,n)}},{key:"multiMerge",value:function(t,n){var r=t.map((function(t){return e.mergeItem(t[0],t[1])}));return c(r,n)}}]),e}();t.default=i},25:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},26:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},27:function(e,t,n){"use strict";var r=n(28),u=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function a(e){if(null===e||void 0===e)throw new TypeError("Sources cannot be null or undefined");return Object(e)}function l(e,t,n){var o=t[n];if(void 0!==o&&null!==o){if(u.call(e,n)&&(void 0===e[n]||null===e[n]))throw new TypeError("Cannot convert undefined or null to object ("+n+")");u.call(e,n)&&r(o)?e[n]=c(Object(e[n]),t[n]):e[n]=o}}function c(e,t){if(e===t)return e;for(var n in t=Object(t))u.call(t,n)&&l(e,t,n);if(Object.getOwnPropertySymbols)for(var r=Object.getOwnPropertySymbols(t),a=0;a<r.length;a++)o.call(t,r[a])&&l(e,t,r[a]);return e}e.exports=function(e){e=a(e);for(var t=1;t<arguments.length;t++)c(e,arguments[t]);return e}},28:function(e,t,n){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},29:function(e,t,n){var r=n(23);Object.defineProperty(t,"__esModule",{value:!0}),t.useAsyncStorage=function(e){return{getItem:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return u.default.getItem.apply(u.default,[e].concat(n))},setItem:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return u.default.setItem.apply(u.default,[e].concat(n))},mergeItem:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return u.default.mergeItem.apply(u.default,[e].concat(n))},removeItem:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return u.default.removeItem.apply(u.default,[e].concat(n))}}};var u=r(n(24))}}]);
//# sourceMappingURL=3.27435b64.chunk.js.map