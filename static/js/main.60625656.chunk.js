(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),s=n(8),i=n.n(s),o=(n(14),n(6)),b=n(2),j=n(3),u=n(5),d=n(4),l=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{children:this.props.title}),this.props.children]})}}]),n}(r.Component),p=function(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e){return function(e){var t=e.feedback,n=e.onLeaveFeedback;return Object(c.jsx)("button",{type:"button","data-feedback":t,onClick:n,children:t},t)}({feedback:e,onLeaveFeedback:n})}))},h=function(e){var t=e.message;return Object(c.jsx)("p",{children:t})},O=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return 0===this.props.total?Object(c.jsx)(h,{message:"No feedback given"}):Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:["Good: ",this.props.good]}),Object(c.jsxs)("li",{children:["Neutral: ",this.props.neutral]}),Object(c.jsxs)("li",{children:["Bad: ",this.props.bad]}),Object(c.jsxs)("li",{children:["Total: ",this.props.total]}),Object(c.jsxs)("li",{children:["Positive feedbacks: ",this.props.positivePercentage]})]})}}]),n}(r.Component),f=["good","neutral","bad"];var v=function(){var e=Object(r.useState)(0),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(0),i=Object(o.a)(s,2),b=i[0],j=i[1],u=Object(r.useState)(0),d=Object(o.a)(u,2),h=d[0],v=d[1],x=function(){return Object.values({good:n,neutral:b,bad:h}).reduce((function(e,t){return e+t}),0)};return Object(c.jsxs)("div",{children:[Object(c.jsx)(l,{title:"Please leave feedback",children:Object(c.jsx)(p,{options:f,onLeaveFeedback:function(e){switch(e.target.textContent){case"good":a(n+1);break;case"neutral":j(b+1);break;case"bad":v(h+1)}}})}),Object(c.jsx)(l,{title:"Statistics",children:Object(c.jsx)(O,{good:n,neutral:b,bad:h,total:x(),positivePercentage:function(){var e=x();return e?Math.round(n/e*100):0}()})})]})};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.60625656.chunk.js.map