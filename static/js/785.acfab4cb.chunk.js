"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[785],{6785:function(e,t,r){r.r(t),r.d(t,{Reviews:function(){return p}});var n=r(5861),a=r(8152),i=r(4687),u=r.n(i),c=r(1959),s=r(2791),o=r(6871),d=r(4234),_=r(184),p=function(){var e=(0,o.UO)().movieId,t=(0,s.useState)([]),r=(0,a.Z)(t,2),i=r[0],p=r[1];return(0,s.useEffect)((function(){(0,n.Z)(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=p,t.next=3,(0,d.dW)(e);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})))()}),[e]),(0,_.jsx)(c.x,{children:i?(0,_.jsx)("ul",{children:i.map((function(e){var t=e.id,r=e.author,n=e.author_details,a=n.rating,i=(n.avatar_path,e.content),u=e.created_at,c=e.updated_at;return(0,_.jsxs)("li",{children:[(0,_.jsxs)("p",{children:[(0,_.jsx)("b",{children:"Author:"})," ",r]}),(0,_.jsxs)("p",{children:[(0,_.jsx)("b",{children:"Rating:"})," ",a]}),(0,_.jsxs)("p",{children:[(0,_.jsx)("b",{children:"Created at"})," ",u]}),(0,_.jsx)("p",{children:(0,_.jsx)("b",{children:"Review:"})}),(0,_.jsx)("p",{children:i}),(0,_.jsxs)("p",{children:[(0,_.jsx)("b",{children:"Last updated:"})," ",c]})]},t)}))}):(0,_.jsx)("p",{children:"No reviews"})})}},1959:function(e,t,r){r.d(t,{x:function(){return i}});var n=r(6444),a=r(407),i=(0,n.ZP)("div")(a.$_,a.Dh,a.bK,a.GQ,a.eC,a.Oq,a.Cg,a.AF,a.FK)},4234:function(e,t,r){r.d(t,{Hg:function(){return s},Pg:function(){return o},dW:function(){return _},gI:function(){return d}});var n=r(5861),a=r(4687),i=r.n(a),u=r(4569),c=r.n(u);c().defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("trending/movie/day",{params:{api_key:{NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.API_KEY}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("movie/".concat(t),{params:{api_key:{NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.API_KEY,language:"en-US"}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("movie/".concat(t,"/credits"),{params:{api_key:{NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.API_KEY,language:"en-US"}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n,a=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,c().get("movie/".concat(t,"/reviews"),{params:{api_key:{NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.API_KEY,language:"en-US",page:r}});case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=785.acfab4cb.chunk.js.map