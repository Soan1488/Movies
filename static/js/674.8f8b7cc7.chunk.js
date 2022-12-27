"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[674],{961:function(e,t,n){n.d(t,{Z:function(){return s}});var r="ShowMoreBtn_btn__L3mNF",o=n(184);function s(e){var t=e.onClick;return(0,o.jsx)("button",{type:"button",className:r,onClick:t,children:"Show More"})}},674:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(433),o=n(439),s=n(791),a=n(87),c=n(689),u=n(299),l=n.n(u),i=n(327),p=n(961),g="HomePage_title__UFLA3",f="HomePage_list__99c8-",h="HomePage_item__PHN05",d="HomePage_link__-d+Of",m="HomePage_text__2XixT",v=n(184);function _(){var e=(0,s.useState)([]),t=(0,o.Z)(e,2),n=t[0],u=t[1],_=(0,s.useState)(!1),x=(0,o.Z)(_,2),b=x[0],y=x[1],k=(0,s.useState)(1),w=(0,o.Z)(k,2),Z=w[0],j=w[1],q=(0,s.useState)(!1),N=(0,o.Z)(q,2),H=N[0],P=N[1],S=(0,c.TH)();(0,s.useEffect)((function(){y(!0),(0,i.z5)(Z).then((function(e){var t=e.data,n=e.total_pages;u((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(t.results))})),P(!(Z>=n))})).catch((function(e){return console.log(e)})).finally((function(){y(!1)}))}),[Z]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h1",{className:g,children:"Trending Today"}),n.length>0&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("ul",{className:f,children:n.map((function(e){var t=e.id,n=e.original_title,r=e.poster_path;return(0,v.jsx)("li",{className:h,children:(0,v.jsxs)(a.rU,{className:d,to:"movies/".concat(t),state:{from:S},children:[(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w500//".concat(r),alt:n,width:"250"}),(0,v.jsx)("p",{className:m,children:n})]})},t)}))}),H&&(0,v.jsx)(p.Z,{onClick:function(){j((function(e){return e+1}))}})]}),b&&(0,v.jsx)(l(),{size:80,"aria-label":"Loading Spinner","data-testid":"loader",color:"#36d7b7",cssOverride:{margin:"50px auto",display:"block"}})]})}},327:function(e,t,n){n.d(t,{M8:function(){return h},TP:function(){return g},Wf:function(){return i},tx:function(){return m},z5:function(){return u}});var r=n(861),o=n(757),s=n.n(o),a=n(388),c="0edadbafab79c4249d030320f49f37e6";function u(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,a.Z)("https://api.themoviedb.org/3/movie/popular",{params:{api_key:c,page:t}});case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),e.t0.response?(console.log(e.t0.response.data),console.log(e.t0.response.status),console.log(e.t0.response.headers)):e.t0.request?console.log(e.t0.request):console.log("Error",e.t0.message),console.log(e.t0.config);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function i(e,t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(s().mark((function e(t,n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,a.Z)("https://api.themoviedb.org/3/search/movie",{params:{api_key:c,query:t,page:n}});case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),e.t0.response?(console.log(e.t0.response.data),console.log(e.t0.response.status),console.log(e.t0.response.headers)):e.t0.request?console.log(e.t0.request):console.log("Error",e.t0.message),console.log(e.t0.config);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function g(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,a.Z)("https://api.themoviedb.org/3/movie/".concat(t),{params:{api_key:c}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),e.t0.response?(console.log(e.t0.response.data),console.log(e.t0.response.status),console.log(e.t0.response.headers)):e.t0.request?console.log(e.t0.request):console.log("Error",e.t0.message),console.log(e.t0.config);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function h(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,a.Z)("https://api.themoviedb.org/3/movie/".concat(t,"/credits"),{params:{api_key:c}});case 3:return n=e.sent,e.abrupt("return",n.data.cast);case 7:e.prev=7,e.t0=e.catch(0),e.t0.response?(console.log(e.t0.response.data),console.log(e.t0.response.status),console.log(e.t0.response.headers)):e.t0.request?console.log(e.t0.request):console.log("Error",e.t0.message),console.log(e.t0.config);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function m(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,a.Z)("https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),{params:{api_key:c}});case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),e.t0.response?(console.log(e.t0.response.data),console.log(e.t0.response.status),console.log(e.t0.response.headers)):e.t0.request?console.log(e.t0.request):console.log("Error",e.t0.message),console.log(e.t0.config);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=674.8f8b7cc7.chunk.js.map