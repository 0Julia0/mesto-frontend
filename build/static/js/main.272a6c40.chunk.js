(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(20),o=n.n(s),i=(n(30),n(24)),r=n(2),l=n(3),u=n(12),p=n(25),j=n(0),d=function(e){var t=e.component,n=Object(p.a)(e,["component"]);return Object(j.jsx)(l.b,{children:function(){return n.loggedIn?Object(j.jsx)(t,Object(u.a)({},n)):Object(j.jsx)(l.a,{to:"/signin"})}})};var b=function(e){var t=e.onLogin,n=c.a.useState(""),a=Object(r.a)(n,2),s=a[0],o=a[1],i=c.a.useState(""),l=Object(r.a)(i,2),u=l[0],p=l[1];return Object(j.jsxs)("form",{className:"start-page",name:"form",onSubmit:function(e){e.preventDefault(),t({email:s,password:u})},children:[Object(j.jsx)("h2",{className:"start-page__title",children:"\u0412\u0445\u043e\u0434"}),Object(j.jsx)("input",{className:"start-page__input",value:s,onChange:function(e){o(e.target.value)},name:"email",placeholder:"Email",type:"email"}),Object(j.jsx)("input",{className:"start-page__input",value:u,onChange:function(e){p(e.target.value)},name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password"}),Object(j.jsx)("button",{className:"start-page__button",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})},m=n(14),h=n(8);var f=function(e){var t=e.onRegister,n=c.a.useState({password:"",email:""}),a=Object(r.a)(n,2),s=a[0],o=a[1],i=function(e){var t=e.target,n=t.name,a=t.value;o((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(m.a)({},n,a))}))};return Object(j.jsxs)("form",{className:"start-page",name:"form",onSubmit:function(e){e.preventDefault(),t(s)},children:[Object(j.jsx)("h2",{className:"start-page__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(j.jsx)("input",{className:"start-page__input",value:s.email,onChange:i,name:"email",placeholder:"Email",type:"email"}),Object(j.jsx)("input",{className:"start-page__input",value:s.password,onChange:i,name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password"}),Object(j.jsx)("button",{className:"start-page__button",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(j.jsx)(h.b,{className:"start-page__link",to:"/signin",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})},O=n.p+"static/media/success.1b6082f8.svg",_=n.p+"static/media/reject.df8eddf6.svg";var x=function(e){var t=e.isOpen,n=e.onClose,a=e.isSuccessfulReg,c=e.title;return Object(j.jsx)("section",{className:"popup ".concat(t?"popup_opened":""),children:Object(j.jsxs)("div",{className:"popup__container",children:[Object(j.jsx)("button",{className:"popup__close-button ","aria-label":"close",type:"button",onClick:n}),Object(j.jsx)("img",{className:"popup__icon",alt:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438",src:a?O:_}),Object(j.jsx)("p",{className:"popup__message",children:c})]})})},g=n.p+"static/media/logo.5f3664ca.svg";var v=function(e){var t=e.onSignOut,n=e.email;return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("img",{src:g,alt:"\u041c\u0435\u0441\u0442\u043e",className:"header__logo"}),Object(j.jsx)(l.b,{path:"/",children:Object(j.jsxs)("div",{className:"header__container",children:[Object(j.jsx)("p",{className:"header__email",children:n}),Object(j.jsx)("button",{onClick:t,to:"/signup",className:"header__sign-out",children:"\u0412\u044b\u0439\u0442\u0438"})]})}),Object(j.jsx)(l.b,{path:"/signin",children:Object(j.jsx)(h.b,{to:"/signup",className:"header__sign",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(j.jsx)(l.b,{path:"/signup",children:Object(j.jsx)(h.b,{to:"/signin",className:"header__sign",children:"\u0412\u043e\u0439\u0442\u0438"})})]})},C=n.p+"static/media/update.a086f758.svg",N=c.a.createContext();var y=function(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,s=e.onCardDelete,o=c.a.useContext(N),i=t.owner===o._id,r="element__remove ".concat(i?"element__remove-visible":"element__remove-hidden"),l=t.likes.some((function(e){return e===o._id})),u="element__heart ".concat(l?"element__heart-active":"element__heart");return Object(j.jsxs)("article",{className:"element",children:[Object(j.jsxs)("div",{className:"element__front",children:[Object(j.jsx)("button",{className:r,onClick:function(){s(t)},"aria-label":"remove",type:"button"}),Object(j.jsx)("img",{className:"element__photo",src:t.link,alt:t.name,onClick:function(){n(t)}})]}),Object(j.jsxs)("div",{className:"element__group",children:[Object(j.jsx)("p",{className:"element__text",children:t.name}),Object(j.jsxs)("div",{className:"element__info",children:[Object(j.jsx)("button",{className:u,onClick:function(){a(t)},"aria-label":"like",type:"button"}),Object(j.jsx)("p",{className:"element__number",children:t.likes.length})]})]})]})};var S=function(e){var t=e.onEditAvatar,n=e.onEditProfile,a=e.onAddPlace,s=e.cards,o=e.onCardClick,i=e.onCardLike,r=e.onCardDelete,l=c.a.useContext(N);return Object(j.jsxs)("main",{className:"content",children:[Object(j.jsxs)("section",{className:"profile",children:[Object(j.jsxs)("div",{className:"profile__group",onClick:t,children:[Object(j.jsx)("span",{className:"profile__opacity",children:Object(j.jsx)("img",{className:"profile__update",src:C,alt:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"})}),Object(j.jsx)("img",{className:"profile__avatar",src:l.avatar,alt:l.name})]}),Object(j.jsxs)("div",{className:"profile__text",children:[Object(j.jsxs)("div",{className:"profile__info",children:[Object(j.jsx)("h1",{className:"profile__name",children:l.name}),Object(j.jsx)("p",{className:"profile__job",children:l.about})]}),Object(j.jsx)("button",{className:"profile__edit","aria-label":"edit",type:"button",onClick:n})]}),Object(j.jsx)("button",{className:"profile__add-button",type:"button",onClick:a})]}),Object(j.jsx)("section",{className:"elements",children:s.map((function(e){return Object(j.jsx)(y,{onCardClick:o,card:e,onCardLike:i,onCardDelete:r},e._id)}))})]})};var k=function(){return Object(j.jsx)("footer",{className:"footer",children:Object(j.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",(new Date).getFullYear()," Mesto Russia"]})})};var T=function(e){var t=e.isOpen,n=e.onClose,a=e.title,c=e.onSubmit,s=e.children,o=e.buttonText;return Object(j.jsx)("section",{className:"popup ".concat(t?"popup_opened":""),children:Object(j.jsxs)("div",{className:"popup__container",children:[Object(j.jsx)("button",{className:"popup__close-button ","aria-label":"close",type:"button",onClick:n}),Object(j.jsx)("h1",{className:"popup__title",children:a}),Object(j.jsxs)("form",{className:"popup__form",name:"form",onSubmit:c,noValidate:!0,children:[s,Object(j.jsx)("button",{className:"popup__button",type:"submit",children:o})]})]})})};var w=function(e){var t=e.isOpen,n=e.onUpdateAvatar,a=e.onClose,s=e.isSaving,o=c.a.useRef(),i=s?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c";return c.a.useEffect((function(){o.current.value=""}),[t]),Object(j.jsxs)(T,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",isOpen:t?"popup_opened":"",onClose:a,buttonText:i,onSubmit:function(e){e.preventDefault(),n({avatar:o.current.value})},isSaving:s,children:[Object(j.jsx)("input",{ref:o,className:"popup__info",placeholder:"\u041d\u043e\u0432\u044b\u0439 \u0430\u0432\u0430\u0442\u0430\u0440",type:"url",name:"avatar",required:!0}),Object(j.jsx)("span",{className:"avatar-error popup__input-error"})]})};var P=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateUser,s=e.isSaving,o=c.a.useState(""),i=Object(r.a)(o,2),l=i[0],u=i[1],p=c.a.useState(""),d=Object(r.a)(p,2),b=d[0],m=d[1],h=c.a.useContext(N),f=s?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c";return c.a.useEffect((function(){u(h.name),m(h.about)}),[h]),Object(j.jsxs)(T,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"profile",isOpen:t?"popup_opened":"",onClose:n,buttonText:f,onSubmit:function(e){e.preventDefault(),a({name:l,about:b})},isSaving:s,children:[Object(j.jsx)("input",{value:l||"",onChange:function(e){u(e.target.value)},className:"popup__info",placeholder:"\u0418\u043c\u044f",type:"text",name:"name",required:!0,minLength:"2",maxLength:"40"}),Object(j.jsx)("span",{className:"name-error popup__input-error"}),Object(j.jsx)("input",{value:b||"",onChange:function(e){m(e.target.value)},className:"popup__info",placeholder:"\u0417\u0430\u043d\u044f\u0442\u0438\u0435",type:"text",name:"job",required:!0,minLength:"2",maxLength:"200"}),Object(j.jsx)("span",{className:"job-error popup__input-error"})]})};var E=function(e){var t=e.isSaving,n=e.onCardDelete,a=e.card,c=e.isOpen,s=e.onClose,o=t?"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...":"\u0414\u0430";return Object(j.jsx)(T,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"delete",isOpen:c,onClose:s,onSubmit:function(e){e.preventDefault(),n(a)},buttonText:o})};var U=function(e){var t=e.isSaving,n=e.isOpen,a=e.onAddPlace,s=e.onClose,o=c.a.useState(""),i=Object(r.a)(o,2),l=i[0],u=i[1],p=c.a.useState(""),d=Object(r.a)(p,2),b=d[0],m=d[1],h=t?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c";return c.a.useEffect((function(){u(""),m("")}),[n]),Object(j.jsxs)(T,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"window",isOpen:n?"popup_opened":"",onClose:s,buttonText:h,onSubmit:function(e){e.preventDefault(),a({name:l,link:b})},isSaving:t,children:[Object(j.jsx)("input",{value:l,onChange:function(e){u(e.target.value)},className:"popup__info",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",type:"text",name:"denomination",required:!0,minLength:"2",maxLength:"30"}),Object(j.jsx)("span",{className:"denomination-error popup__input-error"}),Object(j.jsx)("input",{value:b,onChange:function(e){m(e.target.value)},className:"popup__info",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",type:"url",name:"link",required:!0}),Object(j.jsx)("span",{className:"link-error popup__input-error"})]})};var L=function(e){var t=e.isOpen,n=e.name,a=e.onClose,c=e.card;return Object(j.jsx)("section",{className:"popup ".concat(t?"popup_opened":""),children:Object(j.jsxs)("div",{className:"popup__container",id:"".concat(n,"-container"),children:[Object(j.jsx)("button",{className:"popup__close-button","aria-label":"close",type:"button",onClick:a}),Object(j.jsx)("img",{className:"popup__photo",src:c.link,alt:c.name}),Object(j.jsx)("p",{className:"popup__text",children:c.name})]})})},D=n(22),A=n(23),R=new(function(){function e(t){var n=t.baseUrl;Object(D.a)(this,e),this._baseUrl=n}return Object(A.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}).then(this._checkResponse)}},{key:"postCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"}).then(this._checkResponse)}},{key:"patchProfileInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"patchProfileAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:t?"DELETE":"PUT",headers:{"Content-Type":"application/json"},credentials:"include"}).then(this._checkResponse)}}]),e}())({baseUrl:"https://api.julia.p.nomoredomains.monster"}),I="https://api.julia.p.nomoredomains.monster",J=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))};var q=function(){var e=c.a.useState(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],s=c.a.useState(!1),o=Object(r.a)(s,2),u=o[0],p=o[1],m=c.a.useState(!1),h=Object(r.a)(m,2),O=h[0],_=h[1],g=c.a.useState({}),C=Object(r.a)(g,2),y=C[0],T=C[1],D=c.a.useState({}),A=Object(r.a)(D,2),q=A[0],F=A[1],G=c.a.useState([]),B=Object(r.a)(G,2),H=B[0],M=B[1],V=c.a.useState(!1),Y=Object(r.a)(V,2),z=Y[0],K=Y[1],Q=c.a.useState({}),W=Object(r.a)(Q,2),X=W[0],Z=W[1],$=c.a.useState(!1),ee=Object(r.a)($,2),te=ee[0],ne=ee[1],ae=c.a.useState(!1),ce=Object(r.a)(ae,2),se=ce[0],oe=ce[1],ie=c.a.useState(!1),re=Object(r.a)(ie,2),le=re[0],ue=re[1],pe=c.a.useState({email:"",password:""}),je=Object(r.a)(pe,2),de=je[0],be=je[1],me=c.a.useState(!1),he=Object(r.a)(me,2),fe=he[0],Oe=he[1],_e=Object(l.g)();function xe(){a(!1),p(!1),_(!1),T({isOpen:!1}),ne(!1),oe(!1)}c.a.useEffect((function(){le&&Promise.all([R.getUserInfo(),R.getInitialCards()]).then((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];F(n),M(a)})).catch((function(e){console.log(e)}))}),[le]);var ge=c.a.useCallback((function(){fetch("".concat(I,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include"}).then((function(e){return J(e)})).then((function(e){be({email:e.email,password:e.password}),ue(!0),_e.push("/")})).catch((function(e){console.log(e),_e.push("/signin")}))}),[_e]);return c.a.useEffect((function(){ge()}),[ge]),Object(j.jsx)(N.Provider,{value:q,children:Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)(v,{onSignOut:function(){ue(!1),_e.push("/signin")},loggedIn:le,email:de.email}),Object(j.jsxs)(l.d,{children:[Object(j.jsx)(d,{exact:!0,path:"/",component:S,loggedIn:le,onEditAvatar:function(){a(!0)},onEditProfile:function(){p(!0)},onAddPlace:function(){_(!0)},onCardClick:function(e){T({isOpen:!0,link:e.link,name:e.name})},onCardLike:function(e){var t=e.likes.some((function(e){return e===q._id}));R.changeLikeCardStatus(e._id,t).then((function(t){M((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)}))},onCardDelete:function(e){ne(!0),Z(e)},cards:H}),Object(j.jsx)(l.b,{path:"/signup",children:Object(j.jsx)(f,{onRegister:function(e){var t,n=e.email;e.password;return(t=n,fetch("".concat(I,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:t.email,password:t.password})}).then((function(e){return J(e)}))).then((function(e){return Oe(!0),_e.push("/signin"),e})).catch((function(e){console.log(e),Oe(!1)})).finally((function(){oe(!0)}))}})}),Object(j.jsx)(l.b,{path:"/signin",children:Object(j.jsx)(b,{onLogin:function(e){return function(e){return fetch("".concat(I,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e.email,password:e.password})}).then((function(e){return J(e)}))}(e).then((function(e){be({email:e.email,password:e.password}),ue(!0),_e.push("/")})).catch((function(e){console.log(e)}))}})}),Object(j.jsx)(l.b,{children:le?Object(j.jsx)(l.a,{to:"/"}):Object(j.jsx)(l.a,{to:"/signin"})})]}),Object(j.jsx)(l.b,{path:"/",exact:!0,children:Object(j.jsx)(k,{})}),Object(j.jsx)(w,{isOpen:n,onClose:xe,onUpdateAvatar:function(e){K(!0),R.patchProfileAvatar(e).then((function(e){F(e),xe()})).catch((function(e){console.log(e)})).finally((function(){K(!1)}))},isSaving:z}),Object(j.jsx)(P,{isOpen:u,onClose:xe,onUpdateUser:function(e){K(!0),R.patchProfileInfo(e).then((function(e){F(e),xe()})).catch((function(e){console.log(e)})).finally((function(){K(!1)}))},isSaving:z}),Object(j.jsx)(U,{isOpen:O,onClose:xe,onAddPlace:function(e){K(!0),R.postCard(e).then((function(e){M([e].concat(Object(i.a)(H))),xe()})).catch((function(e){console.log(e)})).finally((function(){K(!1)}))},isSaving:z}),Object(j.jsx)(E,{card:X,isOpen:te,onClose:xe,onCardDelete:function(e){K(!0),R.deleteCard(e._id).then((function(){M((function(t){return t.filter((function(t){return t._id!==e._id}))})),xe()})).catch((function(e){console.log(e)})).finally((function(){K(!1)}))},isSaving:z}),Object(j.jsx)(L,{isOpen:y.isOpen,name:"photo",card:y,onClose:xe}),Object(j.jsx)(x,{isOpen:se,onClose:xe,isSuccessfulReg:fe,title:fe?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(h.a,{children:Object(j.jsx)(q,{})})}),document.getElementById("root")),F()}},[[37,1,2]]]);
//# sourceMappingURL=main.272a6c40.chunk.js.map