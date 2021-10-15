(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"Form_form__2qeiG",label:"Form_label__3ihlF",input:"Form_input__2i1Ps",button:"Form_button__1nAV2",btnText:"Form_btnText__34TkL"}},,,,,,function(t,e,n){t.exports={text:"Filter_text__8ENZt",value:"Filter_value__1B7ST"}},,function(t,e,n){t.exports={name:"Contact_name__1FW0f",number:"Contact_number__pDekG"}},function(t,e,n){t.exports={item:"ContactsList_item__ywsUb",button:"ContactsList_button__3TDsn"}},function(t,e,n){t.exports={title:"App_title__2uNi9",contactTitle:"App_contactTitle__3mvhZ"}},,function(t,e,n){t.exports={container:"Container_container__1RDR6"}},,function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},,,,,,function(t,e,n){},,,,function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(13),s=n.n(c),o=(n(22),n(17)),i=n(3),u=n(4),l=n(6),m=n(5),b=n(14),d=n.n(b),h=n(0);function j(t){var e=t.children;return Object(h.jsx)("div",{className:d.a.container,children:e})}var p=n(15),f=n(28),_=n(2),v=n.n(_),x=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(p.a)({},a,r))},t.handleSubmit=function(e){var n=t.state,a=n.name,r=n.number;e.preventDefault();var c={id:Object(f.a)(),name:a,number:r};t.props.onSubmit(c),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=this.handleSubmit,r=this.handleInputChange;return Object(h.jsxs)("form",{className:v.a.form,onSubmit:a,children:[Object(h.jsxs)("label",{className:v.a.label,children:["Name",Object(h.jsx)("input",{onChange:r,value:e,className:v.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(h.jsxs)("label",{className:v.a.label,children:["Phone",Object(h.jsx)("input",{value:n,className:v.a.input,onChange:r,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(h.jsx)("button",{className:v.a.button,type:"submit",children:Object(h.jsx)("span",{className:v.a.btnText,children:" Add contacts"})})]})}}]),n}(a.Component),O=n(8),C=n.n(O);function g(t){var e=t.value,n=t.onChange;return Object(h.jsxs)("label",{className:C.a.text,children:["Find contacts by name",Object(h.jsx)("input",{className:C.a.value,type:"text",value:e,onChange:n})]})}var N=n(9),S=n.n(N),y=n(10),k=n.n(y);function F(t){var e=t.name,n=t.number;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("span",{className:k.a.name,children:[e,":"]}),Object(h.jsx)("span",{className:k.a.number,children:n})]})}F.propType={name:S.a.string.isRequired,number:S.a.number.isRequired};var A=n(11),T=n.n(A);function w(t){var e=t.contacts,n=t.onDeleteContact;return Object(h.jsx)("ul",{children:e.map((function(t){var e=t.name,a=t.number,r=t.id;return Object(h.jsxs)("li",{className:T.a.item,children:[Object(h.jsx)(F,{name:e,number:a}),Object(h.jsx)("button",{className:T.a.button,type:"button",onClick:function(){return n(r)},children:"Delete"})]},r)}))})}var D=n(16),L=n(12),J=n.n(L),q=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:D,filter:""},t.formSubmitHandler=function(e){if(t.state.contacts.some((function(t){return t.name.toLowerCase()===e.name.toLowerCase()})))return alert("contact is already in the directory");t.setState((function(t){var n=t.contacts;return{contacts:[e].concat(Object(o.a)(n))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContact=function(){var e=t.state,n=e.filter,a=e.contacts,r=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(r)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t){this.state.contacts!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.formSubmitHandler,n=this.changeFilter,a=this.deleteContact,r=this.getVisibleContact();return Object(h.jsxs)(j,{children:[Object(h.jsx)("h1",{className:J.a.title,children:"Phonebook"}),Object(h.jsx)(x,{onSubmit:e}),Object(h.jsx)(g,{value:t,onChange:n}),Object(h.jsx)("h2",{className:J.a.contactTitle,children:"Contacts"}),Object(h.jsx)(w,{contacts:r,onDeleteContact:a})]})}}]),n}(a.Component),I=q;s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(I,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.9de63a5f.chunk.js.map