(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),i=a("NmYn"),c=a.n(i),r=a("Wbzz"),o=a("Xrax"),b=a("k4MR"),s=a("TSYQ"),u=a.n(s),p=a("QH2O"),m=a.n(p),d=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,l=e.tabs,i=void 0===l?[]:l;return Object(d.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===n,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.a.text},a)))))},O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||n,i=l.baseUrl,c=l.subDirectory,o=i+"/edit/"+l.branch+c+"/src/pages"+t;return i?Object(d.b)("div",{className:"bx--row "+O.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:O.link,href:o},"Edit this page on GitHub"))):null},g=a("FCXl"),N=a("9Hrx"),x=a("I8xM"),k=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],l=t.map((function(e){var t,l=c()(e,{lower:!0,strict:!0}),i=l===n,o=new RegExp(n+"/?(#.*)?$"),b=a.replace(o,l);return Object(d.b)("li",{key:e,className:u()((t={},t[x.selectedItem]=i,t),x.listItem)},Object(d.b)(r.Link,{className:x.link,to:""+b},e))}));return Object(d.b)("div",{className:x.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:x.list},l))))))},t}(l.a.Component),T=a("MjG9"),f=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,l=e.Title,i=t.frontmatter,s=void 0===i?{}:i,u=t.relativePagePath,p=t.titleType,m=s.tabs,O=s.title,N=s.theme,x=s.description,v=s.keywords,y=Object(f.a)().interiorTheme,C=Object(r.useStaticQuery)("2456312558").site.pathPrefix,w=C?n.pathname.replace(C,""):n.pathname,I=m?w.split("/").filter(Boolean).slice(-1)[0]||c()(m[0],{lower:!0}):"",P=N||y;return Object(d.b)(b.a,{tabs:m,homepage:!1,theme:P,pageTitle:O,pageDescription:x,pageKeywords:v,titleType:p},Object(d.b)(h,{title:l?Object(d.b)(l,null):O,label:"label",tabs:m,theme:P}),m&&Object(d.b)(k,{slug:w,tabs:m,currentTab:I}),Object(d.b)(T.a,{padded:!0},a,Object(d.b)(j,{relativePagePath:u})),Object(d.b)(g.a,{pageContext:t,location:n,slug:w,tabs:m,currentTab:I}),Object(d.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},hpo8:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a("k1TG"),l=a("8o2o"),i=(a("q1tI"),a("7ljp")),c=a("013z"),r=a("T0C+"),o=(a("qKvR"),{}),b=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},s=b("PageDescription"),u=b("InlineNotification"),p={_frontmatter:o},m=c.a;function d(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(i.b)(m,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(s,{mdxType:"PageDescription"},Object(i.b)("p",null,"The ",Object(i.b)(r.a,{name:"env",mdxType:"Globals"})," includes the CLI Tools Docker image")),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cli-tools",title:"IBM Garage for Cloud Developer Tools Docker image"}),"IBM Garage command-line tools")," is a Docker image with many useful IBM Cloud CLI tools already installed. Rather than installing all of these tools on your local computer, you can simply pull and run this image."),Object(i.b)("h2",null,"Running the client"),Object(i.b)(u,{mdxType:"InlineNotification"},Object(i.b)("p",null,"You must ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.docker.com/products/docker-desktop"}),"install Docker Desktop")," on your local computer to run this Docker image.")),Object(i.b)("p",null,"Start the client to use it."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"To run the ",Object(i.b)("inlineCode",{parentName:"p"},"icclient")," container:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker run -itd --name icclient ibmgaragecloud/cli-tools\n")),Object(i.b)("p",{parentName:"li"},"  This  assumes the image’s default name, ",Object(i.b)("inlineCode",{parentName:"p"},"ibm-garage-cli-tools"),"."))),Object(i.b)("p",null,"Once the client is running in the backgroud, use it by opening a shell in it."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"To use the ",Object(i.b)("inlineCode",{parentName:"p"},"icclient")," container, exec shell into it:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker exec -it icclient /bin/bash\n")),Object(i.b)("p",{parentName:"li"},"  Your terminal is now in the container. "))),Object(i.b)("p",null,"Use this shell to run commands using the installed tools and scripts."),Object(i.b)("p",null,"When you’re finished running commands, to exit the client."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"To leave the ",Object(i.b)("inlineCode",{parentName:"p"},"icclient")," container shell, as with any shell:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"exit\n")),Object(i.b)("p",{parentName:"li"},"  The container will keep running after you exit its shell."))),Object(i.b)("p",null,"If the client stops:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"To run the ",Object(i.b)("inlineCode",{parentName:"p"},"icclient")," container again:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker start icclient\n")))),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"icclient")," container is just a Docker container, so all ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.docker.com/engine/reference/commandline/cli/"}),"Docker CLI commands")," work."),Object(i.b)("h2",null,"Using the client"),Object(i.b)("p",null,"From a client shell, run ",Object(i.b)("inlineCode",{parentName:"p"},"image-help")," to get a list of available tools, scripts, and ENV properties:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ image-help\nAvailable env properties (can be overridden for individual commands):\n > BM_API_KEY - the IBM Cloud api key\n > REGION - the IBM Cloud region (e.g. us-south)\n > RESOURCE_GROUP - the IBM Cloud resource group\n > CLUSTER_NAME - the name of the kubernetes cluster in IBM Cloud\n > SL_USERNAME - the Classic Infrastructure user name or API user name (e.g. 282165_joe@us.ibm.com)\n > SL_API_KEY - the Classic Infrastructure api key\n\nAvailable tools:\n > terraform (with helm, kube, and ibm provider plugins)\n > calicoctl\n > ibmcloud (with container-service, container-registry, and cloud-databases plugins)\n > kubectl\n > kustomize\n > oc\n > helm\n > docker\n > git\n > nvm\n > node (v11.12.0 currently installed)\n > solsa\n > yo\n\nAvailable scripts:\n > init.sh {BM_API_KEY} {REGION} {RESOURCE_GROUP} {CLUSTER_NAME}\n > createNamespaces.sh\n > deleteNamespace.sh\n > installHelm.sh\n > cluster-pull-secret-apply.sh\n > setup-namespace-pull-secrets.sh\n > checkPodRunning.sh\n > copy-secret-to-namespace.sh\n")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tools-tools-image-index-mdx-5dff7eeba8aa49009c1b.js.map