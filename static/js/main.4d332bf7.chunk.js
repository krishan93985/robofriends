(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{16:function(e,n,t){e.exports=t(29)},26:function(e,n,t){},28:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(2),i=t.n(a),c=t(1),s=t(3),l={searchField:""},u={isPending:!0,robots:[],error:""},d=t(10),h=t(11),f=(t(26),t(27),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function b(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var g=t(12),m=t(13),p=t(14),v=t(15),E=function(e){var n=e.robots;return o.a.createElement("button",null,"Count:",n.length)},w=Object(r.memo)((function(e){var n=e.robots;return o.a.createElement("div",null,o.a.createElement("h1",{style:{fontSize:"2.9rem",maxWidth:"100%"}},"Robofriends"),o.a.createElement(E,{robots:n}))})),y=function(e){var n=e.id,t=e.username,r=e.email;return o.a.createElement("div",{className:"tc grow bg-light-green dib br3 pa3 ma2 bw2 shadow-3"},o.a.createElement("img",{alt:"icon",src:"https://robohash.org/".concat(n,"?size=250x250"),style:{display:"block",maxWidth:"100%"}}),o.a.createElement("h2",null,t),o.a.createElement("p",null,r))},O=function(e){var n=e.robots;return o.a.createElement("div",null,n.map((function(e,n){return o.a.createElement(y,{key:n,id:e.id,name:e.name,username:e.username,email:e.email})})))},S=function(e){var n=e.onsearch;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{"aria-label":"Search friends",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search friends",onChange:n}))},R=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",height:"600px",border:"2px solid black"}},e.children)},C=(t(28),function(e){Object(v.a)(t,e);var n=Object(p.a)(t);function t(){return Object(g.a)(this,t),n.apply(this,arguments)}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchRobots()}},{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.onSearchChange,r=e.robots,a=e.isPending,i=r.filter((function(e){return e.username.toLowerCase().includes(n.toLowerCase())}));return o.a.createElement("div",{className:"tc"},o.a.createElement(w,{robots:i}),o.a.createElement(S,{onsearch:t}),o.a.createElement(R,null,a?o.a.createElement("h1",{className:"tc"},"Loading..."):o.a.createElement(O,{robots:i})))}}]),t}(o.a.Component)),j=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,isPending:e.requestRobots.isPending,robots:e.requestRobots.robots,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(n){return e({type:"CHANGE_INPUT_FIELD",payload:n.target.value})},fetchRobots:function(){return e((function(e){e({type:"SEARCH_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users",{mode:"cors",headers:{"Access-Control-Allow-Origin":"https://krishan93985.github.io/robofriends/"}}).then((function(e){return e.json()})).then((function(n){return e({type:"SEARCH_ROBOTS_SUCCESS",payload:n})})).catch((function(n){return e({type:"SEARCH_ROBOTS_FAILED",payload:n})}))}))}}}))(C),k=Object(d.createLogger)(),A=Object(c.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_INPUT_FIELD":return Object.assign({},e,{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"SEARCH_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"SEARCH_ROBOTS_SUCCESS":return Object.assign({},e,{isPending:!1,robots:n.payload});case"SEARCH_ROBOTS_FAILED":return Object.assign({},e,{error:n.payload});default:return e}}}),_=Object(c.d)(A,Object(c.a)(h.a,k));i.a.render(o.a.createElement(s.a,{store:_},o.a.createElement(j,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robofriends","/service-worker.js");f?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):b(n,e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.4d332bf7.chunk.js.map