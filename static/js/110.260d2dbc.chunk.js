"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[110],{9110:function(e,r,t){t.r(r),t.d(r,{default:function(){return v}});var n,a=t(5861),c=t(885),u=t(4687),s=t.n(u),i=t(1959),o=t(2791),p=t(6871),f=t(4234),d=t(168),h=t(6444).ZP.img(n||(n=(0,d.Z)(["\n  margin-bottom: 10px;\n  border-radius: 10px;\n"]))),l=t(184),v=function(){var e=(0,p.UO)().movieId,r=(0,o.useState)([]),t=(0,c.Z)(r,2),n=t[0],u=t[1];return(0,o.useEffect)((function(){(0,a.Z)(s().mark((function r(){var t;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,f.gI)(e);case 2:t=r.sent,u(t.cast);case 4:case"end":return r.stop()}}),r)})))()}),[e]),(0,l.jsx)(i.x,{children:!n.length>0?(0,l.jsx)("p",{children:"No cast"}):(0,l.jsx)(i.x,{as:"ul",display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gridGap:"10px",children:n.slice(0,20).map((function(e){var r=e.id,t=e.name,n=e.character,a=e.profile_path;return(0,l.jsxs)(i.x,{as:"li",width:"200px",children:[(0,l.jsx)(h,{src:a?"https://image.tmdb.org/t/p/w500"+a:"https://dummyimage.com/200x300/000/fff&text=No+photo",alt:t}),(0,l.jsx)("p",{children:(0,l.jsx)("b",{children:t})}),(0,l.jsxs)("p",{children:["Character: ",n]})]},r)}))})})}},1959:function(e,r,t){t.d(r,{x:function(){return c}});var n=t(6444),a=t(407),c=(0,n.ZP)("div")(a.$_,a.Dh,a.bK,a.GQ,a.eC,a.Oq,a.Cg,a.AF,a.FK)},4234:function(e,r,t){t.d(r,{Hg:function(){return i},Pg:function(){return p},dW:function(){return d},gI:function(){return f},h$:function(){return o}});var n=t(5861),a=t(4687),c=t.n(a),u=t(4569),s=t.n(u);s().defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("trending/movie/day",{params:{api_key:"500488b6cb2cbb01836cadf7732306e7"}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("search/movie",{params:{api_key:"500488b6cb2cbb01836cadf7732306e7",query:r,language:"en-US",page:1,include_adult:!1}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("movie/".concat(r),{params:{api_key:"500488b6cb2cbb01836cadf7732306e7",language:"en-US"}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("movie/".concat(r,"/credits"),{params:{api_key:"500488b6cb2cbb01836cadf7732306e7",language:"en-US"}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,s().get("movie/".concat(r,"/reviews"),{params:{api_key:"500488b6cb2cbb01836cadf7732306e7",language:"en-US",page:t}});case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=110.260d2dbc.chunk.js.map