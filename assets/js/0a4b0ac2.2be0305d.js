"use strict";(self.webpackChunkmindspaces=self.webpackChunkmindspaces||[]).push([[851],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>m});var a=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var o=a.createContext({}),l=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},h=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),u=l(r),p=s,m=u["".concat(o,".").concat(p)]||u[p]||d[p]||i;return r?a.createElement(m,n(n({ref:t},h),{},{components:r})):a.createElement(m,n({ref:t},h))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,n=new Array(i);n[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:s,n[1]=c;for(var l=2;l<i;l++)n[l]=r[l];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2273:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=r(7462),s=(r(7294),r(3905));const i={title:"Microservices"},n="Microservices Architecture",c={unversionedId:"research/architecture/microservices",id:"research/architecture/microservices",title:"Microservices",description:"Microservices are a distributed architecture where each service is a separate process. The services communicate with each other using a message broker. Microservices are becoming increasingly popular because they allow developers to build and deploy applications faster.",source:"@site/docs/research/architecture/microservices.md",sourceDirName:"research/architecture",slug:"/research/architecture/microservices",permalink:"/docs/research/architecture/microservices",draft:!1,editUrl:"https://github.com/Mindspace-Fontys/mindspace-fontys.github.io/edit/main/docs/research/architecture/microservices.md",tags:[],version:"current",frontMatter:{title:"Microservices"},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/docs/research/architecture/"},next:{title:"Serverless",permalink:"/docs/research/architecture/serverless"}},o={},l=[{value:"Architecture",id:"architecture",level:2},{value:"Gateway",id:"gateway",level:3},{value:"Services",id:"services",level:3},{value:"Message Broker",id:"message-broker",level:3},{value:"Advantages",id:"advantages",level:2},{value:"Disadvantages",id:"disadvantages",level:2},{value:"Conclusion",id:"conclusion",level:2}],h={toc:l},u="wrapper";function d(e){let{components:t,...i}=e;return(0,s.kt)(u,(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"microservices-architecture"},"Microservices Architecture"),(0,s.kt)("p",null,"Microservices are a distributed architecture where each service is a separate process. The services communicate with each other using a message broker. Microservices are becoming increasingly popular because they allow developers to build and deploy applications faster."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Microservices Architecture",src:r(1712).Z,width:"790",height:"446"})),(0,s.kt)("h2",{id:"architecture"},"Architecture"),(0,s.kt)("p",null,"First I shall define what I understand by the term 'microservices'. Which I divide up into three parts, the gateway, the services themselves and the message broker. These three integral parts are the foundation of the microservices architecture."),(0,s.kt)("h3",{id:"gateway"},"Gateway"),(0,s.kt)("p",null,"The gateway is its own service. It is the entry point for all requests. It is responsible for routing the requests to the correct service. It also handles authentication and authorization. The gateway is the only service that is exposed to the outside world."),(0,s.kt)("h3",{id:"services"},"Services"),(0,s.kt)("p",null,"The services are the core of the microservices architecture. Each service is responsible for a single task. The services communicate with each other using a message broker. The services are not exposed to the outside world."),(0,s.kt)("p",null,"Each service can also have its own database. These databases are required to\nbe able to scale themselves as they are shared between multiple instances of the same service. They are not allowed to share data with other services."),(0,s.kt)("h3",{id:"message-broker"},"Message Broker"),(0,s.kt)("p",null,"The message broker is responsible for routing messages between the services. It is the glue that holds the system together. The message broker is not exposed to the outside world."),(0,s.kt)("h2",{id:"advantages"},"Advantages"),(0,s.kt)("p",null,"For MindSpaces there are a few advantages to using a microservices architecture. These are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Scalability"),": Each service can be scaled independently. This means that I can scale the 'bottlenecks' in the system without having to scale the entire system.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Separation of Concerns"),": Each service is focused on a single task. Developers will be able to focus on a single service without having to worry about the other services.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Fault Tolerance"),": If one service fails, the other services will continue to work. This means that the system will be more resilient to failures.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Technology Independence"),": Each service can be written in a different programming language. This means that developers can choose the best technology for the job.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Continuous Delivery"),": Each service can be deployed independently. This means that I can deploy new features without\nre-deploying the entire system.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Testing"),": Each service can be tested independently. This means that I can test the system in a more granular way. And find bugs faster."))),(0,s.kt)("h2",{id:"disadvantages"},"Disadvantages"),(0,s.kt)("p",null,"While there are many advantages to using a microservices architecture, there are also some disadvantages. These are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Complexity"),": A distributed architecture is more complex than a monolithic architecture. While each service has its own responsibility (making it easier for the developer to understand a service), it also means that the developer has to understand how the services interact with each other. Additionally, the DevOps team has to manage multiple services instead of a single application.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Performance"),": A distributed architecture can be sloIr than a monolithic architecture. This is because the services have to communicate with each other using a message broker. This adds an extra layer of complexity and increases the latency.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Security"),": A distributed architecture can be less secure than a monolithic architecture. This is because the message broker adds an additional attack surface. This means that the message broker has to be secured properly. Additionally, each service has to be secured properly. This means that the developer has to be aware of security issues and vulnerabilities.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Business Logic"),": A distributed architecture can be more difficult to maintain than a monolithic architecture. This is because the business logic is spread across multiple services. This means that the developer has to understand how the services interact with each other. Additionally, the developer has to understand how the services interact with the database. This can be difficult to grasp."))),(0,s.kt)("h2",{id:"conclusion"},"Conclusion"),(0,s.kt)("p",null,"In this section, I have discussed the microservices architecture. I have also discussed the advantages and disadvantages of this architecture. Finally, I want\nto discuss why I think this architecture is a good fit for MindSpaces."),(0,s.kt)("p",null,"This architecture is a good fit for MindSpaces because it allows us to scale the project independently. For example, if I want to scale the project to support more users, I can scale the user service without having to scale the other services. This is not possible with a monolithic architecture."),(0,s.kt)("p",null,"Initially the microservices architecture was thought to be too complex for MindSpaces. I looked at requirements within college, which required us to use a\nmicroservices (or other distributed) architecture. However, the research has\nshown that it can actually be a good, great even, fit for MindSpaces."),(0,s.kt)("p",null,"While there are some disadvantages, I believe that the advantages outweigh the disadvantages. And that is why I recommend that we go with the microservices architecture."))}d.isMDXComponent=!0},1712:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/microservices-c9e64a7b227d20991b023fb97d875037.png"}}]);