"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[553],{7847:function(n,e,r){r.d(e,{Z:function(){return Z}});var t,a,i,o,c,s=r(6871),u=r(1959),d=r(168),p=r(6444),f=p.ZP.img(t||(t=(0,d.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),l=p.ZP.div(a||(a=(0,d.Z)(["\n  display: block;\n  height: 351px;\n"]))),h=p.ZP.div(i||(i=(0,d.Z)(["\n  padding: 15px;\n  p:first-child {\n    margin-bottom: 10px;\n  }\n"]))),x=p.ZP.span(o||(o=(0,d.Z)(["\n  padding: 5px;\n  background-color: ",";\n  border-radius: 10px;\n  color: ",";\n"])),(function(n){var e=n.rating;return e>6?"#6c3":e>=4&&e<=6?"#fc3":"#f00"}),(function(n){var e=n.rating;return e>=4&&e<=6?"black":"white"})),b=r(184),g=function(n){var e=n.movie,r=e.title,t=e.poster_path,a=e.vote_average;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l,{children:(0,b.jsx)(f,{src:t?"https://image.tmdb.org/t/p/w500"+t:"https://dummyimage.com/216x361/000/fff&text=No+poster",alt:r})}),(0,b.jsxs)(h,{children:[(0,b.jsx)("p",{children:r}),(0,b.jsxs)("p",{children:["Rating:"," ",(0,b.jsx)(x,{rating:a.toFixed(2),children:a.toFixed(2)})]})]})]})},v=r(3504),m=(0,p.ZP)(v.rU)(c||(c=(0,d.Z)(["\n  display: block;\n  text-decoration: none;\n  height: 100%;\n  border: 1px solid #61dafb;\n  border-radius: 10px;\n  overflow: hidden;\n  background-color: #282c34;\n  color: #61dafb;\n  box-shadow: 5px 5px 5px #282c34;\n  transition: all 0.2s ease-in-out;\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: 10px 10px 10px #282c34;\n  }\n"]))),Z=function(n){var e=n.movies,r=(0,s.TH)();return(0,b.jsx)(u.x,{as:"ul",display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gridGap:"20px",gridAutoRows:"auto",children:e.map((function(n){return(0,b.jsx)("li",{children:(0,b.jsx)(m,{to:"/movies/".concat(n.id),state:{from:r},children:(0,b.jsx)(g,{movie:n})})},n.id)}))})}},2623:function(n,e,r){r.d(e,{Z:function(){return d}});var t,a=r(2007),i=r.n(a),o=r(168),c=r(6444).ZP.section(t||(t=(0,o.Z)(["\n  padding: 30px 0;\n"]))),s=r(184),u=function(n){var e=n.children;return(0,s.jsx)(c,{children:e})};u.protoType={children:i().element};var d=u},1959:function(n,e,r){r.d(e,{x:function(){return i}});var t=r(6444),a=r(407),i=(0,t.ZP)("div")(a.$_,a.Dh,a.bK,a.GQ,a.eC,a.Oq,a.Cg,a.AF,a.FK)},6553:function(n,e,r){r.r(e),r.d(e,{default:function(){return q}});var t=r(885),a=r(2791),i=r(7847),o=r(2623),c=r(1413),s=r(5861),u=r(4687),d=r.n(u),p=r(3504),f=r(938),l=r(4234),h=r(168),x=r(6444);var b,g,v,m,Z,w=r.p+"static/media/search.69472df91a4309b9461efa7441c6f021.svg",k=x.ZP.form(b||(b=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 10px;\n  max-width: 300px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),y=x.ZP.button(g||(g=(0,h.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url(",");\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  :hover {\n    opacity: 1;\n  }\n"])),w),j=x.ZP.span(v||(v=(0,h.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),_=x.ZP.input(m||(m=(0,h.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),P=x.ZP.p(Z||(Z=(0,h.Z)(["\n  margin-bottom: 15px;\n  color: red;\n"]))),S=r(184),F=function(n){var e,r=n.setMovies,i=(0,f.cI)({defaultValues:{search:""}}),o=i.register,u=i.handleSubmit,h=i.reset,x=i.formState.errors,b=(0,p.lr)(),g=(0,t.Z)(b,2),v=g[0],m=g[1],Z=(0,a.useState)((function(){var n;return null!==(n=v.get("query"))&&void 0!==n?n:""})),w=(0,t.Z)(Z,2),F=w[0],q=w[1];return(0,a.useEffect)((function(){F&&(0,s.Z)(d().mark((function n(){var e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,l.h$)(F);case 2:e=n.sent,r(e);case 4:case"end":return n.stop()}}),n)})))()}),[F,r]),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(k,{onSubmit:u((function(n){var e=n.search;q(e),m({query:e}),h()})),autoComplete:"off",children:[(0,S.jsx)(y,{type:"submit",children:(0,S.jsx)(j,{children:"Search"})}),(0,S.jsx)(_,(0,c.Z)((0,c.Z)({},o("search",{required:"This field is required"})),{},{placeholder:"Search movie by name",autoFocus:!0}))]}),(0,S.jsx)(P,{children:null===(e=x.search)||void 0===e?void 0:e.message})]})},q=function(){var n=(0,a.useState)(null),e=(0,t.Z)(n,2),r=e[0],c=e[1];return(0,S.jsxs)(o.Z,{children:[(0,S.jsx)(F,{setMovies:c}),r&&(0,S.jsx)(i.Z,{movies:r})]})}},4234:function(n,e,r){r.d(e,{Hg:function(){return s},Pg:function(){return d},dW:function(){return f},gI:function(){return p},h$:function(){return u}});var t=r(5861),a=r(4687),i=r.n(a),o=r(4569),c=r.n(o);c().defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,t.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("trending/movie/day",{params:{api_key:"500488b6cb2cbb01836cadf7732306e7"}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("search/movie",{params:{api_key:"500488b6cb2cbb01836cadf7732306e7",query:e,language:"en-US",page:1,include_adult:!1}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("movie/".concat(e),{params:{api_key:"500488b6cb2cbb01836cadf7732306e7",language:"en-US"}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("movie/".concat(e,"/credits"),{params:{api_key:"500488b6cb2cbb01836cadf7732306e7",language:"en-US"}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t,a=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,c().get("movie/".concat(e,"/reviews"),{params:{api_key:"500488b6cb2cbb01836cadf7732306e7",language:"en-US",page:r}});case 3:return t=n.sent,n.abrupt("return",t.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=553.8a6aa669.chunk.js.map