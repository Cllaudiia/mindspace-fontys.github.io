(()=>{"use strict";var e,a,t,r,c,d={},f={};function o(e){var a=f[e];if(void 0!==a)return a.exports;var t=f[e]={id:e,loaded:!1,exports:{}};return d[e].call(t.exports,t,t.exports,o),t.loaded=!0,t.exports}o.m=d,o.c=f,e=[],o.O=(a,t,r,c)=>{if(!t){var d=1/0;for(i=0;i<e.length;i++){t=e[i][0],r=e[i][1],c=e[i][2];for(var f=!0,n=0;n<t.length;n++)(!1&c||d>=c)&&Object.keys(o.O).every((e=>o.O[e](t[n])))?t.splice(n--,1):(f=!1,c<d&&(d=c));if(f){e.splice(i--,1);var b=r();void 0!==b&&(a=b)}}return a}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[t,r,c]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var c=Object.create(null);o.r(c);var d={};a=a||[null,t({}),t([]),t(t)];for(var f=2&r&&e;"object"==typeof f&&!~a.indexOf(f);f=t(f))Object.getOwnPropertyNames(f).forEach((a=>d[a]=()=>e[a]));return d.default=()=>e,o.d(c,d),c},o.d=(e,a)=>{for(var t in a)o.o(a,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,t)=>(o.f[t](e,a),a)),[])),o.u=e=>"assets/js/"+({53:"935f2afb",68:"53a46639",687:"51ef4594",948:"8717b14a",1557:"f3d63649",1914:"d9f32620",1962:"4edb6289",2028:"363e41e5",2096:"7d985055",2267:"59362658",2362:"e273c56f",2535:"814f3328",2555:"4d75c683",3085:"1f391b9e",3089:"a6aa9e1f",3237:"1df93b7f",3365:"55377612",3514:"73664a40",3608:"9e4087bc",3657:"85984397",4013:"01a85c17",4234:"d58a2a62",4443:"65d193f2",4732:"d8f5548a",5304:"255c0877",5880:"a1d749d9",6047:"503b2b8b",6103:"ccc49370",6547:"d7c31c9e",6602:"50404dab",6810:"26a60291",7017:"1bd57496",7279:"b43ccd00",7381:"7eee4dd0",7414:"393be207",7536:"75b3ea27",7616:"306a8c6c",7641:"9e3d2366",7918:"17896441",7920:"1a4e3797",7933:"508f3d2f",8031:"ea888f59",8076:"2d040e93",8161:"804e1185",8610:"6875c492",8636:"f4f34a3a",8698:"7da41e27",8833:"3cc43e76",9003:"925b3f96",9202:"6371a7ad",9514:"1be78505",9642:"7661071f"}[e]||e)+"."+{53:"d56f323b",68:"047bb509",143:"b5a63ef7",687:"22125b71",948:"87214a86",1557:"b917ff60",1914:"3da6fa3c",1962:"31b171a2",2028:"b358b291",2096:"12b416a3",2267:"3366af81",2362:"6c88c4f3",2529:"5a8de42b",2535:"cee5b791",2555:"b8ade4ea",3085:"f7cc88af",3089:"d138a33e",3237:"9fe2c44b",3365:"a1106b1d",3514:"fa6c4406",3608:"573a9f84",3657:"8fc236d3",4013:"164366c7",4234:"8d54b342",4443:"03a60709",4732:"038a05a3",4972:"b0a6749c",5304:"0efe4988",5525:"5f511f2f",5880:"d32bbe7d",6047:"f407897f",6103:"d47b473b",6547:"af4cb9e1",6602:"b21afa3f",6810:"97bcb4df",7017:"051920f7",7279:"8ca4796d",7381:"39edfe66",7414:"8bf3a7a5",7536:"971ea3bf",7616:"27169ffc",7641:"7d90fc9a",7918:"d0ac653c",7920:"78f49439",7933:"6c19db43",8031:"3ef5e169",8076:"95ba4633",8161:"6ab70286",8443:"31712f91",8610:"e6aeea5c",8636:"eb6fc442",8698:"f6fa79fb",8833:"eed84ec0",9003:"73057b40",9202:"946c7dc8",9514:"efe24b1a",9642:"861a73b5"}[e]+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r={},c="mindspaces:",o.l=(e,a,t,d)=>{if(r[e])r[e].push(a);else{var f,n;if(void 0!==t)for(var b=document.getElementsByTagName("script"),i=0;i<b.length;i++){var u=b[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==c+t){f=u;break}}f||(n=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,o.nc&&f.setAttribute("nonce",o.nc),f.setAttribute("data-webpack",c+t),f.src=e),r[e]=[a];var l=(a,t)=>{f.onerror=f.onload=null,clearTimeout(s);var c=r[e];if(delete r[e],f.parentNode&&f.parentNode.removeChild(f),c&&c.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),n&&document.head.appendChild(f)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/nl/",o.gca=function(e){return e={17896441:"7918",55377612:"3365",59362658:"2267",85984397:"3657","935f2afb":"53","53a46639":"68","51ef4594":"687","8717b14a":"948",f3d63649:"1557",d9f32620:"1914","4edb6289":"1962","363e41e5":"2028","7d985055":"2096",e273c56f:"2362","814f3328":"2535","4d75c683":"2555","1f391b9e":"3085",a6aa9e1f:"3089","1df93b7f":"3237","73664a40":"3514","9e4087bc":"3608","01a85c17":"4013",d58a2a62:"4234","65d193f2":"4443",d8f5548a:"4732","255c0877":"5304",a1d749d9:"5880","503b2b8b":"6047",ccc49370:"6103",d7c31c9e:"6547","50404dab":"6602","26a60291":"6810","1bd57496":"7017",b43ccd00:"7279","7eee4dd0":"7381","393be207":"7414","75b3ea27":"7536","306a8c6c":"7616","9e3d2366":"7641","1a4e3797":"7920","508f3d2f":"7933",ea888f59:"8031","2d040e93":"8076","804e1185":"8161","6875c492":"8610",f4f34a3a:"8636","7da41e27":"8698","3cc43e76":"8833","925b3f96":"9003","6371a7ad":"9202","1be78505":"9514","7661071f":"9642"}[e]||e,o.p+o.u(e)},(()=>{var e={1303:0,532:0};o.f.j=(a,t)=>{var r=o.o(e,a)?e[a]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var c=new Promise(((t,c)=>r=e[a]=[t,c]));t.push(r[2]=c);var d=o.p+o.u(a),f=new Error;o.l(d,(t=>{if(o.o(e,a)&&(0!==(r=e[a])&&(e[a]=void 0),r)){var c=t&&("load"===t.type?"missing":t.type),d=t&&t.target&&t.target.src;f.message="Loading chunk "+a+" failed.\n("+c+": "+d+")",f.name="ChunkLoadError",f.type=c,f.request=d,r[1](f)}}),"chunk-"+a,a)}},o.O.j=a=>0===e[a];var a=(a,t)=>{var r,c,d=t[0],f=t[1],n=t[2],b=0;if(d.some((a=>0!==e[a]))){for(r in f)o.o(f,r)&&(o.m[r]=f[r]);if(n)var i=n(o)}for(a&&a(t);b<d.length;b++)c=d[b],o.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return o.O(i)},t=self.webpackChunkmindspaces=self.webpackChunkmindspaces||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();