(this.webpackJsonproutercheck=this.webpackJsonproutercheck||[]).push([[0],{40:function(e,t,a){e.exports=a(54)},45:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),l=(a(45),a(11)),i=a(5);function m(e){return r.a.createElement("div",null,r.a.createElement(i.b,{to:"".concat(e.match.url,"/Shoes")},r.a.createElement("button",null,"Shoes")),r.a.createElement(i.b,{to:"".concat(e.match.url,"/Boots")},r.a.createElement("button",null,"Boots")),r.a.createElement(i.b,{to:"".concat(e.match.url,"/Footwear")},r.a.createElement("button",null,"Footwear")),r.a.createElement(l.b,{path:"".concat(e.match.path,"/:category"),render:function(e){return r.a.createElement("h3",null," ",e.match.params.category," ")}}))}function u(e){var t=e.productData.filter((function(t){return t.id==e.match.params.productId}))[0];return r.a.createElement("div",null,r.a.createElement("h1",null," ",t.name," "),r.a.createElement("p",null," ",t.description," "),r.a.createElement("hr",null),r.a.createElement("h4",null," ",t.status," "))}a(23);function s(e){var t=[{id:1,name:"NIKE Liteforce Blue Sneakers",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",status:"Available"},{id:2,name:"Stylised Flip Flops and Slippers",description:"Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",status:"Out of Stock"},{id:3,name:"ADIDAS Adispree Running Shoes",description:"Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",status:"Available"},{id:4,name:"ADIDAS Mid Sneakers",description:"Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",status:"Out of Stock"}],a=t.map((function(t){return r.a.createElement("li",null,r.a.createElement(i.b,{to:"".concat(e.match.url,"/").concat(t.id)}," ",t.name," "))}));return r.a.createElement("div",{className:"container-fluid row"},r.a.createElement("div",{className:"col-6",style:{backgroundColor:"beige"}},r.a.createElement("h3",null,"Products"),r.a.createElement("ul",null," ",a," ")),r.a.createElement("div",{className:"col-6"},r.a.createElement(l.b,{path:"".concat(e.match.path,"/:productId"),render:function(e){return r.a.createElement(u,Object.assign({},e,{productData:t}))}}),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(l.b,{exact:!0,path:"".concat(e.match.path,"/"),render:function(e){return r.a.createElement("p",null,"Please select a product.")}}))))}var h=a(57),d=a(58),p=a(56);function E(e){return r.a.createElement("div",null,r.a.createElement(h.a,{bg:"primary",variant:"dark"},r.a.createElement(d.a,{className:"mr-auto"},r.a.createElement(i.b,{to:"https://mahdislimane.github.io/routercheck/"},r.a.createElement(p.a,null,"Home")),r.a.createElement(i.b,{to:"https://mahdislimane.github.io/routercheck/category"},r.a.createElement(p.a,null,"Category")),r.a.createElement(i.b,{to:"https://mahdislimane.github.io/routercheck/products"},r.a.createElement(p.a,null,"Products")),r.a.createElement(i.b,{to:"https://mahdislimane.github.io/routercheck/login"},r.a.createElement(p.a,null,"Login")))))}function b(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home"))}var g=a(19),f=a(37),v=a(15);function k(){return r.a.createElement("h1",null,"welcome Admin")}var w=a(38),y=function(e){var t=e.component,a=e.connected,n=Object(w.a)(e,["component","connected"]);return r.a.createElement(l.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(l.a,{to:{pathname:"https://mahdislimane.github.io/routercheck/login",state:{from:e.location}}})}}))};a(53);function S(e){var t=Object(n.useState)("password"),a=Object(v.a)(t,2),c=a[0],o=a[1],m=Object(n.useState)("show"),u=Object(v.a)(m,2),s=u[0],h=u[1],d=Object(n.useState)({name:"",password:""}),E=Object(v.a)(d,2),b=E[0],w=E[1],S=Object(n.useState)(!1),j=Object(v.a)(S,2),O=j[0],N=j[1],x=function(e){o("password"==c?"text":"password"),e.preventDefault(),h("show"==s?"hide":"show")},F=function(e){w(Object(f.a)({},b,Object(g.a)({},e.target.name,e.target.value)))},A=function(){"admin"==b.name&&"admin"==b.password?N(!0):alert("use 'admin' as a name and password")};return r.a.createElement("div",{className:"container-fluid row",style:{padding:"100px",display:"flex",justifyContent:"center"}},r.a.createElement(l.b,{exact:!0,path:"https://mahdislimane.github.io/routercheck/login",render:function(){return r.a.createElement(i.b,{to:"https://mahdislimane.github.io/routercheck/login/log"},r.a.createElement(p.a,null,"Login"))}}),r.a.createElement(l.b,{exact:!0,path:"https://mahdislimane.github.io/routercheck/login/log",render:function(){return r.a.createElement("form",{className:"container-fluid row",style:{width:"500px"}},r.a.createElement("div",{className:"inputForm col-4 "}," Name: "),r.a.createElement("input",{className:"inputForm col-8",type:"text",placeholder:"admin",name:"name",value:b.name,onChange:F}),r.a.createElement("div",{className:"inputForm col-4"},"Password: "),r.a.createElement("input",{className:"inputForm col-6",type:c,placeholder:"admin",name:"password",value:b.password,onChange:F}),r.a.createElement(p.a,{className:"inputForm col-2",onClick:x},s),r.a.createElement("div",{className:"inputForm col-12",style:{display:"flex",justifyContent:"center"}},r.a.createElement(p.a,{onClick:A},r.a.createElement(i.b,{to:"https://mahdislimane.github.io/routercheck/login/sectionadmin"},r.a.createElement("h6",{style:{textDecoration:"none",color:"white"}}," ","Login"," ")))))}}),r.a.createElement("div",null,r.a.createElement(y,{path:"https://mahdislimane.github.io/routercheck/login/sectionadmin",connected:O,component:k})))}function j(e){return r.a.createElement("div",null,r.a.createElement(l.b,{path:"https://mahdislimane.github.io/routercheck/",component:E}),r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"https://mahdislimane.github.io/routercheck/",component:b}),r.a.createElement(l.b,{path:"https://mahdislimane.github.io/routercheck/category",component:m}),r.a.createElement(l.b,{path:"https://mahdislimane.github.io/routercheck/products",component:s}),r.a.createElement(l.b,{path:"https://mahdislimane.github.io/routercheck/login",component:S})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null,r.a.createElement(j,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.2e1a403b.chunk.js.map