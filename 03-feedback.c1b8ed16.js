function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="Expected a function",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,g=Math.max,m=Math.min,p=function(){return s.Date.now()};function v(e,t,n){var o,i,a,f,u,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function O(t){var n=o,r=i;return o=i=void 0,l=t,f=e.apply(r,n)}function S(e){return l=e,u=setTimeout(h,t),s?O(e):f}function j(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function h(){var e=p();if(j(e))return T(e);u=setTimeout(h,function(e){var n=t-(e-c);return d?m(n,a-(e-l)):n}(e))}function T(e){return u=void 0,v&&o?O(e):(o=i=void 0,f)}function w(){var e=p(),n=j(e);if(o=arguments,i=this,c=e,n){if(void 0===u)return S(c);if(d)return u=setTimeout(h,t),O(c)}return void 0===u&&(u=setTimeout(h,t)),f}return t=y(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(y(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=c=i=u=void 0},w.flush=function(){return void 0===u?f:T(p())},w}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||f.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:o,maxWait:t,trailing:i})};const O=document.querySelector(".feedback-form");O.addEventListener("input",e(t)((function(e){const t=JSON.parse(localStorage.getItem("feedback-form-state"))||{};t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))}),250)),function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);t&&Object.entries(t).forEach((([e,t])=>{O.elements[e].value=t}))}(),O.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.c1b8ed16.js.map