!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,m=s||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return m.Date.now()};function p(e,t,n){var r,i,a,u,f,l,s=0,c=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,s=t,u=e.apply(o,n)}function j(e){return s=e,f=setTimeout(S,t),c?p(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-s>=a}function S(){var e=b();if(O(e))return w(e);f=setTimeout(S,function(e){var n=t-(e-l);return m?g(n,a-(e-s)):n}(e))}function w(e){return f=void 0,d&&r?p(e):(r=i=void 0,u)}function T(){var e=b(),n=O(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(m)return f=setTimeout(S,t),p(l)}return void 0===f&&(f=setTimeout(S,t)),u}return t=h(t)||0,y(n)&&(c=!!n.leading,a=(m="maxWait"in n)?v(h(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),T.cancel=function(){void 0!==f&&clearTimeout(f),s=0,r=l=i=f=void 0},T.flush=function(){return void 0===f?u:w(b())},T}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var j=document.querySelector("form"),O=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}};j.addEventListener("input",e(t)((function(){!function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}}("feedback-form-state",{email:j.elements.email.value,message:j.elements.message.value})}),500)),j.addEventListener("submit",(function(e){e.preventDefault(),console.log(O("feedback-form-state")),localStorage.removeItem("feedback-form-state"),j.elements.email.value="",j.elements.message.value=""}));var S=O("feedback-form-state");S?(j.elements.email.value=S.email,j.elements.message.value=S.message):(j.elements.email.value="",j.elements.message.value="")}();
//# sourceMappingURL=03-feedback.335efc27.js.map