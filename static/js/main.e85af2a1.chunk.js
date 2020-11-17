(this.webpackJsonpyalantis_test=this.webpackJsonpyalantis_test||[]).push([[0],{44:function(e,t,c){},45:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(0),a=c(17),r=c.n(a),l=(c(44),c(45),c(23)),i=c(3),o=c(38),j=c(16),b=c(10),u=c(8),d=c(36).create({baseURL:"https://yalantis-react-school-api.yalantis.com/api/task0/users"}),m=function(){return d.get().then((function(e){return e.data}))},O="ADD_EMPLOYEES",h="SELECT_EMPLOYEE",p="UNSELECT_EMPLOYEE",y={employees:[],selectedEmployees:[]},f=function(e){return{type:h,id:e}},x=function(e){return{type:p,id:e}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(u.a)(Object(u.a)({},e),{},{employees:t.employees});case h:return Object(u.a)(Object(u.a)({},e),{},{selectedEmployees:[].concat(Object(j.a)(e.selectedEmployees),[t.id])});case p:return Object(u.a)(Object(u.a)({},e),{},{selectedEmployees:Object(j.a)(e.selectedEmployees.filter((function(e){return e!==t.id})))});default:return e}},v=Object(b.b)((function(e){return{employees:e.employees}}),{getEmployees:function(){return function(e){m().then((function(t){e({type:O,employees:t})}))}},selectEmployee:f,unselectEmployee:x})((function(e){Object(s.useEffect)((function(){e.getEmployees()}),[]);var t=e.employees;return Object(n.jsxs)("div",{className:"employes",children:[Object(n.jsx)("h2",{className:"employee_heading",children:" Employees"}),Object(n.jsx)("div",{className:"alphabet",children:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y"].reduce((function(e,c){var s=c,a=function(e){var c=t.filter((function(t){return t.lastName[0]===e}));return 0===c.length?Object(n.jsx)("div",{children:"-----"}):c.map((function(e){return Object(n.jsx)(N,{id:e.id,lastName:e.lastName,firstName:e.firstName,selectEmployee:f,unselectEmployee:x,birhday:e.dob},e.id)}))}(s);return[].concat(Object(j.a)(e),[Object(n.jsxs)("div",{className:"letter_block",children:[Object(n.jsx)("h2",{children:s}),Object(n.jsx)("div",{children:a})]},c)])}),[])})]})})),N=function(e){var t=e.id,c=e.lastName,a=e.firstName,r=e.selectEmployee,l=Object(b.c)(),i=!1;i="false"!==localStorage.getItem(t);var j=Object(s.useState)(i),u=Object(o.a)(j,2),d=u[0],m=u[1];Object(s.useEffect)((function(){!0===d?(localStorage.setItem(t,!0),l(r(t))):!1===d&&(localStorage.setItem(t,!1),l(x(t)))}),[d]);return Object(n.jsxs)("div",{className:"employee_card",children:[Object(n.jsx)("div",{children:"".concat(c,"   ").concat(a)}),Object(n.jsx)("div",{children:Object(n.jsx)("input",{type:"checkbox",checked:d,onChange:function(){m(!d)}})})]},t)},g=c(15),_=Object(b.b)((function(e){return{selectedEmployees:e.selectedEmployees,employees:e.employees}}))((function(e){var t=e.employees,c=e.selectedEmployees,s=[];t.length&&(s=t.reduce((function(e,t){return Object(u.a)(Object(u.a)({},e),{},Object(g.a)({},t.id,t))}),{}));var a=c.reduce((function(e,t){var c,n=(c=s[t].dob,["January","February","March","April","May","June","July","August","September","October","November","December"][new Date(c).getMonth()]),a=Object(u.a)({},s[t]);return e[n]?(e[n].push(a),e):Object(u.a)(Object(u.a)({},e),{},Object(g.a)({},n,[s[t]]))}),{});return Object(n.jsxs)("div",{className:"employees_birth",children:[Object(n.jsx)("h2",{className:"employees_birth__heading",children:"Employees birhday"}),Object(n.jsx)("div",{children:Object.keys(a).map((function(e){return Object(n.jsx)(M,{monthObj:a[e],month:e,id:a[e].id},a[e][0].id)}))})]})})),M=function(e){var t=e.monthObj,c=e.month;function s(e){var t=e.getDate(),c=e.getMonth(),n=e.getFullYear();return t+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][c]+" "+n}return Object(n.jsxs)("div",{className:"month_card",children:[Object(n.jsx)("div",{className:"month_name",children:c}),Object(n.jsx)("ul",{children:Object.keys(t).map((function(e){return Object(n.jsx)("li",{children:"".concat(t[e].lastName," ").concat(t[e].firstName," - ").concat(s(new Date(t[e].dob)))},t[e].id)}))})]})};var S=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(i.a,{path:"/",exact:!0,children:Object(n.jsx)("div",{className:"employees_link",children:Object(n.jsx)(l.b,{to:"/employees",children:"Go to employees page"})})}),Object(n.jsx)(i.a,{path:"/employees",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"employess_page",children:[Object(n.jsx)(v,{}),Object(n.jsx)(_,{})]})})})]})})},k=c(14),J=c(37),D=E,w=Object(k.c)(D,Object(k.a)(J.a));window.store=w;var L=w;r.a.render(Object(n.jsx)(b.a,{store:L,children:Object(n.jsx)(S,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.e85af2a1.chunk.js.map