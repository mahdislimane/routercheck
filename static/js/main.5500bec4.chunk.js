(this.webpackJsonproutercheck=this.webpackJsonproutercheck||[]).push([[0],{40:function(e,t,a){e.exports=a(54)},45:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),o=(a(45),a(11)),i=a(5);function m(e){return r.a.createElement("div",null,r.a.createElement(i.b,{to:"".concat(e.match.url,"/Shoes")},r.a.createElement("button",null,"Shoes")),r.a.createElement(i.b,{to:"".concat(e.match.url,"/Boots")},r.a.createElement("button",null,"Boots")),r.a.createElement(i.b,{to:"".concat(e.match.url,"/Footwear")},r.a.createElement("button",null,"Footwear")),r.a.createElement(o.b,{path:"".concat(e.match.path,"/:category"),render:function(e){return r.a.createElement("h3",null," ",e.match.params.category," ")}}))}function u(e){var t=e.productData.filter((function(t){return t.id==e.match.params.productId}))[0];return r.a.createElement("div",null,r.a.createElement("h1",null," ",t.name," "),r.a.createElement("p",null," ",t.description," "),r.a.createElement("hr",null),r.a.createElement("h4",null," ",t.status," "))}a(23);function s(e){var t=[{id:1,name:"NIKE Liteforce Blue Sneakers",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",status:"Available"},{id:2,name:"Stylised Flip Flops and Slippers",description:"Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",status:"Out of Stock"},{id:3,name:"ADIDAS Adispree Running Shoes",description:"Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",status:"Available"},{id:4,name:"ADIDAS Mid Sneakers",description:"Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",status:"Out of Stock"}],a=t.map((function(t){return r.a.createElement("li",null,r.a.createElement(i.b,{to:"".concat(e.match.url,"/").concat(t.id)}," ",t.name," "))}));return r.a.createElement("div",{className:"container-fluid row"},r.a.createElement("div",{className:"col-6",style:{backgroundColor:"beige"}},r.a.createElement("h3",null,"Products"),r.a.createElement("ul",null," ",a," ")),r.a.createElement("div",{className:"col-6"},r.a.createElement(o.b,{path:"".concat(e.match.path,"/:productId"),render:function(e){return r.a.createElement(u,Object.assign({},e,{productData:t}))}}),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(o.b,{exact:!0,path:"".concat(e.match.path,"/"),render:function(e){return r.a.createElement("p",null,"Please select a product.")}}))))}var d=a(57),p=a(58),E=a(56);function h(e){return r.a.createElement("div",null,r.a.createElement(d.a,{bg:"primary",variant:"dark"},r.a.createElement(p.a,{className:"mr-auto"},r.a.createElement(i.b,{to:"/"},r.a.createElement(E.a,null,"Home")),r.a.createElement(i.b,{to:"/category"},r.a.createElement(E.a,null,"Category")),r.a.createElement(i.b,{to:"/products"},r.a.createElement(E.a,null,"Products")),r.a.createElement(i.b,{to:"/login"},r.a.createElement(E.a,null,"Login")))))}function b(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home"))}var f=a(19),v=a(37),g=a(15);function w(){return r.a.createElement("h1",null,"welcome Admin")}var y=a(38),S=function(e){var t=e.component,a=e.connected,n=Object(y.a)(e,["component","connected"]);return r.a.createElement(o.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(o.a,{to:{pathname:"/login",state:{from:e.location}}})}}))};a(53);function j(e){var t=Object(n.useState)("password"),a=Object(g.a)(t,2),c=a[0],l=a[1],m=Object(n.useState)("show"),u=Object(g.a)(m,2),s=u[0],d=u[1],p=Object(n.useState)({name:"",password:""}),h=Object(g.a)(p,2),b=h[0],y=h[1],j=Object(n.useState)(!1),O=Object(g.a)(j,2),k=O[0],N=O[1],x=function(e){l("password"===c?"text":"password"),e.preventDefault(),d("show"===s?"hide":"show")},F=function(e){y(Object(v.a)({},b,Object(f.a)({},e.target.name,e.target.value)))},A=function(){"admin"===b.name&&"admin"===b.password?N(!0):alert("use 'admin' as a name and password")};return r.a.createElement("div",{className:"container-fluid row",style:{padding:"100px",display:"flex",justifyContent:"center"}},r.a.createElement(o.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(i.b,{to:"/login/log"},r.a.createElement(E.a,null,"Login"))}}),r.a.createElement(o.b,{exact:!0,path:"/login/log",render:function(){return r.a.createElement("form",{className:"container-fluid row",style:{width:"500px"}},r.a.createElement("div",{className:"inputForm col-4 "}," Name: "),r.a.createElement("input",{className:"inputForm col-8",type:"text",placeholder:"admin",name:"name",value:b.name,onChange:F}),r.a.createElement("div",{className:"inputForm col-4"},"Password: "),r.a.createElement("input",{className:"inputForm col-6",type:c,placeholder:"admin",name:"password",value:b.password,onChange:F}),r.a.createElement(E.a,{className:"inputForm col-2",onClick:x},s),r.a.createElement("div",{className:"inputForm col-12",style:{display:"flex",justifyContent:"center"}},r.a.createElement(i.b,{to:"/login/sectionadmin"},r.a.createElement(E.a,{onClick:A},r.a.createElement("h6",{style:{textDecoration:"none",color:"white"}},"Login")))))}}),r.a.createElement("div",null,r.a.createElement(S,{path:"/login/sectionadmin",connected:k,component:w})))}function O(e){return r.a.createElement("div",null,r.a.createElement(o.b,{path:"/",component:h}),r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/",component:b}),r.a.createElement(o.b,{path:"/category",component:m}),r.a.createElement(o.b,{path:"/products",component:s}),r.a.createElement(o.b,{path:"/login",component:j})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null,r.a.createElement(O,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.5500bec4.chunk.js.map