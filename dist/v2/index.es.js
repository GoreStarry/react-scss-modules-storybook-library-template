import{createVNode as t}from"vue";import{defineComponent as n}from"vue-demi";var o="button-module_storybook-button__dTWiR",e="button-module_storybook-button--primary__na7WB";!function(t,n){void 0===n&&(n={});var o=n.insertAt;if(t&&"undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===o&&e.firstChild?e.insertBefore(r,e.firstChild):e.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}('.button-module_storybook-button__dTWiR {\n  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n\n.button-module_storybook-button--primary__na7WB {\n  color: white;\n  background-color: #1ea7fd;\n}\n\n.button-module_storybook-button--secondary__yk3ln {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n\n.button-module_storybook-button--small__BylaN {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n\n.button-module_storybook-button--medium__1vPyD {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n\n.button-module_storybook-button--large__gy-L0 {\n  font-size: 16px;\n  padding: 12px 24px;\n}');var r,i={};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
r={get exports(){return i},set exports(t){i=t}},function(){var t={}.hasOwnProperty;function n(){for(var o=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)o.push(r);else if(Array.isArray(r)){if(r.length){var a=n.apply(null,r);a&&o.push(a)}}else if("object"===i){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){o.push(r.toString());continue}for(var s in r)t.call(r,s)&&r[s]&&o.push(s)}}}return o.join(" ")}r.exports?(n.default=n,r.exports=n):window.classNames=n}();var a=i,s=n({props:{label:{type:String,default:"123"}},setup:({label:n},{slots:r})=>()=>t("button",{className:a(o,e),type:"button"},[n])});export{s as default};