(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),o=a.n(r),l=a("Wbzz"),s=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),u=a.n(b),d=a("QH2O"),m=a.n(d),p=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(p.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},x=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,o=i.subDirectory,s=r+"/edit/"+i.branch+o+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+x.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:x.link,href:s},"Edit this page on GitHub"))):null},j=a("FCXl"),O=a("9Hrx"),f=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=o()(e,{lower:!0,strict:!0}),r=i===n,s=new RegExp(n+"/?(#.*)?$"),c=a.replace(s,i);return Object(p.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(p.b)(l.Link,{className:f.link,to:""+c},e))}));return Object(p.b)("div",{className:f.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:f.list},i))))))},t}(i.a.Component),v=a("MjG9"),w=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,b=void 0===r?{}:r,u=t.relativePagePath,d=t.titleType,m=b.tabs,x=b.title,O=b.theme,f=b.description,k=b.keywords,y=Object(w.a)().interiorTheme,P=Object(l.useStaticQuery)("2456312558").site.pathPrefix,N=P?n.pathname.replace(P,""):n.pathname,I=m?N.split("/").filter(Boolean).slice(-1)[0]||o()(m[0],{lower:!0}):"",q=O||y;return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:q,pageTitle:x,pageDescription:f,pageKeywords:k,titleType:d},Object(p.b)(g,{title:i?Object(p.b)(i,null):x,label:"label",tabs:m,theme:q}),m&&Object(p.b)(T,{slug:N,tabs:m,currentTab:I}),Object(p.b)(v.a,{padded:!0},a,Object(p.b)(h,{relativePagePath:u})),Object(p.b)(j.a,{pageContext:t,location:n,slug:N,tabs:m,currentTab:I}),Object(p.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},yxpn:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a("k1TG"),i=a("8o2o"),r=(a("q1tI"),a("7ljp")),o=a("013z"),l=a("T0C+"),s=(a("qKvR"),{}),c={_frontmatter:s},b=o.a;function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(b,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In IBM Garage Method, one of the Develop practices is ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/code/practice_continuous_integration/"}),"continuous integration"),".\nThe ",Object(r.b)(l.a,{name:"env",mdxType:"Globals"})," uses a Jenkins pipeline to automate continuous integration."),Object(r.b)("h2",null,"What is continuous integration"),Object(r.b)("p",null,"Continuous integration is a software development technique where software is built regularly by a team in an automated fashion.\nThis quote helps explain it:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Continuous Integration is a software development practice where members of a team integrate their work frequently,\nusually each person integrates at least daily - leading to multiple integrations per day.\nEach integration is verified by an automated build (including test) to\ndetect integration errors as quickly as possible. Many teams find that this approach leads to significantly\nreduced integration problems and allows a team to develop cohesive software more rapidly"),Object(r.b)("cite",null,"– Martin Fowler")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-day-1-continuous-integration-index-mdx-1e7e57e4240b510b4b7a.js.map