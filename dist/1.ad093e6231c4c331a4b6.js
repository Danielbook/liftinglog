webpackJsonp([1],{900:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,n,r,o){var u=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&u)for(var a in u)void 0===n[a]&&(n[a]=u[a]);else n||(n=u||{});if(1===i)n.children=o;else if(i>1){for(var l=Array(i),f=0;f<i;f++)l[f]=arguments[f+3];n.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(0),c=r(f),s=n(113),p=r(s),d=n(902),y=r(d),b=function(e){function t(e){o(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={secretData:""},n}return i(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this,t=new XMLHttpRequest;t.open("get","/api/dashboard"),t.setRequestHeader("Content-type","application/x-www-form-urlencoded"),t.setRequestHeader("Authorization","bearer "+p["default"].getToken()),t.responseType="json",t.addEventListener("load",function(){200===t.status&&e.setState({secretData:t.response.message})}),t.send()}},{key:"render",value:function(){return a(y["default"],{secretData:this.state.secretData})}}]),t}(c["default"].Component);t["default"]=b},901:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,n,r,o){var u=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&u)for(var a in u)void 0===n[a]&&(n[a]=u[a]);else n||(n=u||{});if(1===i)n.children=o;else if(i>1){for(var l=Array(i),f=0;f<i;f++)l[f]=arguments[f+3];n.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(0),c=(r(f),n(59)),s=n(320),p=r(s),d=n(321),y=r(d),b=a(c.Link,{to:"/workout"}),v=a(y["default"],{}),h=function(e){function t(e){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),l(t,[{key:"render",value:function(){return a("div",{},void 0,a("h1",{},void 0,"New Workout",a(p["default"],{containerElement:b,style:{marginLeft:20}},void 0,v)))}}]),t}(f.Component);t["default"]=h},902:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,n,r,o){var u=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&u)for(var a in u)void 0===n[a]&&(n[a]=u[a]);else n||(n=u||{});if(1===i)n.children=o;else if(i>1){for(var l=Array(i),f=0;f<i;f++)l[f]=arguments[f+3];n.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),u=n(0),i=(r(u),n(186)),a=o(i.CardTitle,{title:"Dashboard",subtitle:"You should get access to this page only after authentication."}),l=function(e){var t=e.secretData;return o(i.Card,{className:"container"},void 0,a,t&&o(i.CardText,{style:{fontSize:"16px",color:"green"}},void 0,t))};t["default"]=l}});