(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){},20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var c=n(2),o=n.n(c),r=n(7),u=n.n(r),a=(n(14),n(15),n(5)),s=n.n(a),i=n(8),j=n(6),d=(n(17),n(18),n(3)),h=n(1),b=function(t){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{id:"text",children:[Object(h.jsx)(d.a,{}),"\xa0",t.quoteText,"\xa0",Object(h.jsx)(d.b,{})]}),Object(h.jsxs)("div",{id:"author",children:["- ",t.quoteAuthor]})]})},x=(n(20),n(9)),f=function(t){return Object(h.jsxs)("div",{id:"buttons",children:[Object(h.jsx)("a",{href:"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=".concat(encodeURIComponent('"'+t.quoteText+'" -'+t.quoteAuthor)),id:"tweet-quote",className:"btn btn-dark",title:"Tweet quote",children:Object(h.jsx)(d.c,{})}),Object(h.jsxs)("a",{id:"new-quote",className:"btn btn-dark",onClick:function(){return t.updateQuote()},children:[Object(h.jsx)(x.a,{}),"\xa0New Quote"]})]})},O=function(){var t=Object(c.useState)(""),e=Object(j.a)(t,2),n=e[0],o=e[1],r=Object(c.useState)(""),u=Object(j.a)(r,2),a=u[0],d=u[1];Object(c.useEffect)((function(){x()}),[]);var x=function(){var t=Object(i.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("./data.json").then((function(t){return t.json()})).then((function(t){return t[Math.floor(Math.random()*(t.length+1))]}));case 2:e=t.sent,o(e.quote),d(e.author);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(h.jsx)("main",{children:Object(h.jsxs)("div",{id:"quote-box",className:"text-dark bg-light",children:[Object(h.jsx)(b,{quoteText:n,quoteAuthor:a}),Object(h.jsx)(f,{quoteText:n,quoteAuthor:a,updateQuote:x})]})})};u.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.baa4775b.chunk.js.map