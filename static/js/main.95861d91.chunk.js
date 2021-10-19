(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,function(e,t,n){e.exports={form:"Form_form__2qeiG",label:"Form_label__3ihlF",input:"Form_input__2i1Ps",button:"Form_button__1nAV2",btnText:"Form_btnText__34TkL"}},,,,,function(e,t,n){e.exports={text:"Filter_text__8ENZt",value:"Filter_value__1B7ST"}},,function(e,t,n){e.exports={name:"Contact_name__1FW0f",number:"Contact_number__pDekG"}},function(e,t,n){e.exports={item:"ContactsList_item__ywsUb",button:"ContactsList_button__3TDsn"}},function(e,t,n){e.exports={title:"App_title__2uNi9",contactTitle:"App_contactTitle__3mvhZ"}},,function(e,t,n){e.exports={container:"Container_container__1RDR6"}},function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},,,,,,function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(12),o=n.n(r),s=(n(20),n(15)),i=n(3),u=n(13),l=n.n(u),b=n(0);function m(e){var t=e.children;return Object(b.jsx)("div",{className:l.a.container,children:t})}var j=n(26),d=n(2),p=n.n(d);function f(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(""),u=Object(i.a)(s,2),l=u[0],m=u[1],d=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":m(a);break;default:return}},f=function(){o(""),m("")};return Object(b.jsxs)("form",{className:p.a.form,onSubmit:function(e){e.preventDefault();var n={id:Object(j.a)(),name:r,number:l};t(n),f()},children:[Object(b.jsxs)("label",{className:p.a.label,children:["Name",Object(b.jsx)("input",{onChange:d,value:r,className:p.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(b.jsxs)("label",{className:p.a.label,children:["Phone",Object(b.jsx)("input",{value:l,className:p.a.input,onChange:d,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(b.jsx)("button",{className:p.a.button,type:"submit",children:Object(b.jsx)("span",{className:p.a.btnText,children:" Add contacts"})})]})}var _=n(7),h=n.n(_);function x(e){var t=e.value,n=e.onChange;return Object(b.jsxs)("label",{className:h.a.text,children:["Find contacts by name",Object(b.jsx)("input",{className:h.a.value,type:"text",value:t,onChange:n})]})}var O=n(8),v=n.n(O),C=n(9),N=n.n(C);function g(e){var t=e.name,n=e.number;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("span",{className:N.a.name,children:[t,":"]}),Object(b.jsx)("span",{className:N.a.number,children:n})]})}g.propType={name:v.a.string.isRequired,number:v.a.number.isRequired};var S=n(10),w=n.n(S);function k(e){var t=e.contacts,n=e.onDeleteContact;return Object(b.jsx)("ul",{children:t.map((function(e){var t=e.name,a=e.number,c=e.id;return Object(b.jsxs)("li",{className:w.a.item,children:[Object(b.jsx)(g,{name:t,number:a}),Object(b.jsx)("button",{className:w.a.button,type:"button",onClick:function(){return n(c)},children:"Delete"})]},c)}))})}var y=n(14),F=n(11),A=n.n(F);var T=function(){var e=Object(a.useState)((function(){var e;return JSON.parse(null!==(e=window.localStorage.getItem("contacts"))&&void 0!==e?e:y)})),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),u=o[0],l=o[1];return Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]),Object(b.jsxs)(m,{children:[Object(b.jsx)("h1",{className:A.a.title,children:"Phonebook"}),Object(b.jsx)(f,{onSubmit:function(e){if(n.some((function(t){return t.name.toLowerCase()===e.name.toLowerCase()})))return alert("contact is already in the directory");c([].concat(Object(s.a)(n),[e]))}}),Object(b.jsx)(x,{value:u,onChange:function(e){l(e.target.value)}}),Object(b.jsx)("h2",{className:A.a.contactTitle,children:"Contacts"}),Object(b.jsx)(k,{contacts:function(){var e=u.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),onDeleteContact:function(e){c(n.filter((function(t){return t.id!==e})))}})]})};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(T,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.95861d91.chunk.js.map