import{defineComponent as t}from"vue-demi";var n="button-module_storybook-button__dTWiR",e="button-module_storybook-button--primary__na7WB";!function(t,n){void 0===n&&(n={});var e=n.insertAt;if(t&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===e&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}('.button-module_storybook-button__dTWiR {\n  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n\n.button-module_storybook-button--primary__na7WB {\n  color: white;\n  background-color: #1ea7fd;\n}\n\n.button-module_storybook-button--secondary__yk3ln {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n\n.button-module_storybook-button--small__BylaN {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n\n.button-module_storybook-button--medium__1vPyD {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n\n.button-module_storybook-button--large__gy-L0 {\n  font-size: 16px;\n  padding: 12px 24px;\n}');var o,r={};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
o={get exports(){return r},set exports(t){r=t}},function(){var t={}.hasOwnProperty;function n(){for(var e=[],o=0;o<arguments.length;o++){var r=arguments[o];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=n.apply(null,r);a&&e.push(a)}}else if("object"===i){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var s in r)t.call(r,s)&&r[s]&&e.push(s)}}}return e.join(" ")}o.exports?(n.default=n,o.exports=n):window.classNames=n}();var i=r,a=t({props:{label:{type:String,default:"123"}},setup:function(t,o){var r=t.label;o.slots;var a=this.$createElement;return function(){return a("button",{attrs:{className:i(n,e),type:"button"}},[r])}}});export{a as default};
