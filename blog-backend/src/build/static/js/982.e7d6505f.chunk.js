"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[982,791],{982:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var c=n(885),s=n(791),a=n(871),r=n(388),i=n(960),o=n(184),l=function(e){var t=e.articleName,n=e.comments,a=e.setArticle,r=(0,s.useState)(""),l=(0,c.Z)(r,2),m=l[0],d=l[1],u=(0,s.useState)(""),h=(0,c.Z)(u,2),f=h[0],x=h[1];return(0,o.jsxs)("section",{id:"comment-section",children:[(0,o.jsx)("h3",{children:"Comments"}),(0,o.jsxs)("div",{id:"comment-form",children:[(0,o.jsxs)("label",{children:["Name:",(0,o.jsx)("input",{type:"text",className:"db mt2 mb3 br2 ba ",value:m,onChange:function(e){return d(e.target.value)}})]}),(0,o.jsxs)("label",{className:"mt4",children:["Comment:",(0,o.jsx)("textarea",{name:"comments",className:"br2 b--gray db mt2 mb4",id:"comment-textarea",cols:"50",rows:"6",placeholder:"Leave a comment here...",value:f,onChange:function(e){return x(e.target.value)}})]}),(0,o.jsx)("button",{className:"bg-black ba br2 white ph3 pv2 pointer",id:"add-comment",onClick:function(){fetch("/api/articles/".concat(t,"/add-comment"),{method:"post",body:JSON.stringify({username:m,text:f}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){a(e),d(""),x("")})).catch((function(e){return console.log(e)}))},children:"Add Comment"})]}),(0,o.jsx)("div",{className:"comments mv4 tl ml3",children:(0,o.jsx)(i.Z,{children:n.map((function(e,t){return(0,o.jsxs)("div",{className:"mv3 flex items-start",children:[(0,o.jsxs)("h4",{className:"pr2 ma0",children:[e.username,":"]}),(0,o.jsx)("p",{className:"pa0 ma0 ",children:e.text})]},t)}))})})]})},m=n(692),d=function(e){var t=e.articleName,n=e.upvotes,c=e.setArticle;return(0,o.jsx)("div",{id:"upvote-section",children:(0,o.jsxs)("button",{onClick:function(){fetch("/api/articles/".concat(t,"/upvote"),{method:"post"}).then((function(e){return e.json()})).then((function(e){c(e)})).catch((function(e){return console.log(e)}))},className:"tl orange pointer",children:[(0,o.jsx)(m.WzD,{}),n]})})},u=n(680),h=function(){var e=(0,a.UO)().name,t=(0,s.useState)({upvotes:0,comments:[]}),n=(0,c.Z)(t,2),i=n[0],m=n[1],h=(0,s.useState)([]),f=(0,c.Z)(h,2),x=f[0],p=f[1];(0,s.useEffect)((function(){fetch("/api/articles/").then((function(e){return e.json()})).then((function(t){var n=t.find((function(t){return t.name===e}));console.log(n),m(n),p(t)})).catch((function(e){return console.log(e)}))}),[e]);var j=i?x.filter((function(e){return e.name!==i.name})):null;return i?(0,o.jsxs)("div",{id:"article-page",children:[(0,o.jsx)("div",{className:"banner"}),(0,o.jsx)("section",{children:(0,o.jsxs)("div",{id:"page-content",children:[(0,o.jsxs)("section",{id:"content-section",children:[(0,o.jsx)("h1",{className:"mt5",children:i.name}),(0,o.jsx)(d,{articleName:i.name,upvotes:i.upvotes,setArticle:m}),(0,o.jsx)("p",{className:"mb5",children:i.content})]}),(0,o.jsx)(l,{articleName:i.name,comments:i.comments,setArticle:m}),(0,o.jsxs)("div",{className:"mt5 pt3",id:"recent-articles-blocks",children:[(0,o.jsx)("hr",{className:"hr-text","data-content":"Other Articles"}),(0,o.jsx)("div",{id:"articles-container",children:(0,o.jsx)(r.Z,{articles:j,listType:"card"})})]})]})})]}):(0,o.jsx)(u.default,{})}},680:function(e,t,n){n.r(t);n(791);var c=n(556),s=n(184);t.default=function(){return(0,s.jsx)("div",{className:"mv5 ",id:"not-found-page",children:(0,s.jsxs)("div",{id:"page-content",children:[(0,s.jsx)("img",{className:"w5 center db",src:c,alt:"404"}),(0,s.jsx)("h2",{className:"fw3 tc mt3 f2",children:"Sorry, we couldn't find that page"})]})})}},556:function(e,t,n){e.exports=n.p+"static/media/404-error.2eb4792d5302702a29d3.png"}}]);
//# sourceMappingURL=982.e7d6505f.chunk.js.map