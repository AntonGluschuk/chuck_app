(this.webpackJsonpmsi2020=this.webpackJsonpmsi2020||[]).push([[0],Array(18).concat([function(e,t,a){e.exports=a(40)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(14),c=a.n(r),i=(a(23),a(6)),s=a(3),l=a.n(s),u=a(7),m=(a(25),a(26),a(27),a(11)),d=a(1),f=function(e,t){switch(t.type){case"LIKE_JOKE":return[t.prev_jokes.find((function(e){return e.id===t.joke_id}))].concat(Object(i.a)(e));case"UNLIKE_JOKE":return e.filter((function(e){return e.id!==t.favJoke_id}));default:return e}},v=Object(n.createContext)(),p=function(e){var t=Object(n.useReducer)(f,JSON.parse(localStorage.getItem("favourite_jokes"))||[]),a=Object(d.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)([]),s=Object(d.a)(i,2),l=s[0],u=s[1],p=Object(n.useState)("option1"),k=Object(d.a)(p,2),j=k[0],_=k[1],b=Object(n.useState)(!1),E=Object(d.a)(b,2),h=E[0],g=E[1],N=Object(n.useState)([]),O=Object(d.a)(N,2),x=O[0],y=O[1],C=Object(n.useState)("animal"),S=Object(d.a)(C,2),J=S[0],F=S[1],w=Object(n.useState)(""),A=Object(d.a)(w,2),I=A[0],V=A[1],K=Object(n.useState)(!1),L=Object(d.a)(K,2),z=L[0],D=L[1],q=Object(n.useState)(!0),R=Object(d.a)(q,2),B=R[0],H=R[1],M=Object(n.useState)(!0),Q=Object(d.a)(M,2),G=Q[0],P=Q[1],U={jokes:l,favJokes:r,setJokes:u,selected:j,setSelected:_,loading:h,setLoading:g,categories:x,setCategories:y,active:J,setActive:F,query:I,setQuery:V,visibleSide:z,setVisibleSide:D,validSearch:B,setValidSearch:H,validSearchValue:G,setValidSearchValue:P,likeJoke:function(e){r.find((function(t){return t.id===e}))||(c({type:"LIKE_JOKE",joke_id:e,prev_jokes:l}),u((function(t){return t.map((function(t){return t.id===e?Object(m.a)({},t,{isFavourite:!0}):t}))})))},unlikeJoke:function(e){c({type:"UNLIKE_JOKE",favJoke_id:e}),u((function(t){return t.map((function(t){return t.id===e?Object(m.a)({},t,{isFavourite:!1}):t}))}))},calculateHours:function(e){return Math.floor((new Date-new Date(e))/1e3/60/60)},handleOptionChange:function(e){"option1"===j||"option3"===j?(F("animal"),_(e.target.value)):"option1"===j||"option2"===j?(P(!0),_(e.target.value)):_(e.target.value)}};return Object(n.useEffect)((function(){localStorage.setItem("favourite_jokes",JSON.stringify(r))}),[r]),o.a.createElement(v.Provider,{value:U},e.children)};var k=function(e){var t=e.id,a=Object(n.useContext)(v).likeJoke;return o.a.createElement("button",{title:"Add to Favourites",className:"joke__like-btn",onClick:function(){return a(t)}}," ")};a(28);var j=function(e){var t=e.id,a=Object(n.useContext)(v).unlikeJoke;return o.a.createElement("button",{title:"Remove from Favourites",className:"fav-joke__unlike-btn",onClick:function(){return a(t)}}," ")};var _=function(e){var t=e.value,a=e.id,r=e.category,c=e.updated_at,i=e.jokeIsF,s=Object(n.useContext)(v).calculateHours;return o.a.createElement("div",null,t?o.a.createElement("div",{className:"joke"},i?o.a.createElement(j,{id:a}):o.a.createElement(k,{id:a}),o.a.createElement("div",{className:"joke__container"},o.a.createElement("div",{className:"joke__comment-circle"}," "),o.a.createElement("div",{className:"joke__content"},o.a.createElement("div",{className:"joke__id"},"ID: ",o.a.createElement("a",{id:"joke__id-link",href:"https://api.chucknorris.io/jokes/".concat(a)},a)),o.a.createElement("div",{className:"joke__value"},t),o.a.createElement("div",{className:"joke__apps"},o.a.createElement("div",{className:"joke__apps-last-update"},"Last update: ",s(c)," hours ago"),o.a.createElement("div",{className:"joke__apps-category"},r))))):null)};var b=function(){var e=Object(n.useContext)(v),t=e.selected,a=e.handleOptionChange;return o.a.createElement("form",{className:"joke-options__form"},o.a.createElement("input",{className:"joke-options__form-input",id:"random",type:"radio",name:"react-tips",value:"option1",checked:"option1"===t,onChange:a}),o.a.createElement("label",{className:"joke-options__form-label",htmlFor:"random"},"Random"))};var E=function(){var e=Object(n.useContext)(v),t=e.selected,a=e.handleOptionChange;return o.a.createElement("form",{className:"joke-options__form"},o.a.createElement("input",{className:"joke-options__form-input",id:"from-categories",type:"radio",name:"react-tips",value:"option2",checked:"option2"===t,onChange:a}),o.a.createElement("label",{className:"joke-options__form-label",htmlFor:"from-categories"},"From categories"))};var h=function(){var e=Object(n.useContext)(v),t=e.selected,a=e.handleOptionChange;return o.a.createElement("form",{className:"joke-options__form"},o.a.createElement("input",{className:"joke-options__form-input",id:"search",type:"radio",name:"react-tips",value:"option3",checked:"option3"===t,onChange:a}),o.a.createElement("label",{className:"joke-options__form-label",htmlFor:"search"},"Search"))},g=a(8),N=(a(29),a(9));function O(){var e=Object(g.a)(["\n  opacity: 0.6;\n  ","\n"]);return O=function(){return e},e}function x(){var e=Object(g.a)(['\n  color: #ABABAB;\n  background-color: white;\n  font-size: 12px;\n  font-family: "Roboto", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 16px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  padding: 5px 10px;\n  border: 2px solid #F8F8F8;\n  border-radius: 6px;\n  box-sizing: border-box;\n  margin: 8px 8px;\n  cursor: pointer;\n  &:hover {\n    color: #333;\n  };\n']);return x=function(){return e},e}var y=N.a.button(x()),C=Object(N.a)(y)(O(),(function(e){return e.active&&'\n    font-family: "Roboto", sans-serif;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 16px;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n    color: #333333;\n    background-color: #F8F8F8;\n    border: 2px solid #F8F8F8;\n    border-radius: 6px;\n    box-sizing: border-box;\n    opacity: 1;\n  '}));var S=function(){var e=Object(n.useContext)(v),t=e.categories,a=e.active,r=e.setActive;return o.a.createElement("form",{className:"categories",onSubmit:function(e){e.preventDefault()}},t.map((function(e){return o.a.createElement(C,{className:"categories__btn",value:e,key:e,active:a===e,onClick:function(){return r(e)}},e)})))};a(32),a(33);var J=function(e){var t=e.getAJoke,a=Object(n.useContext)(v),r=a.query,c=a.setQuery,i=a.validSearch,s=a.setValidSearch,l=a.validSearchValue;return o.a.createElement("form",{className:"joke-options__search-form"},o.a.createElement("input",{className:"joke-options__search-input",type:"text",placeholder:"Free text search...",value:r,onChange:function(e){e.target.value.length<3||e.target.value.length>120?s(!1):s(!0),c(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),r.length>=3&&t())}}),!i&&o.a.createElement("span",{className:"joke-options__invalid-size"},"Text size must be between 3 and 120 characters"),!l&&o.a.createElement("span",{className:"joke-options__invalid-value"},"Enter a valid search value"))};var F=function(e){var t=e.getAJoke,a=Object(n.useContext)(v).selected;return o.a.createElement("div",{className:"joke-options"},o.a.createElement(b,null),o.a.createElement(E,null),"option2"===a?o.a.createElement(S,null):null,o.a.createElement(h,null),"option3"===a?o.a.createElement(J,{getAJoke:t}):null)};a(34);var w=function(e){var t=e.getAJoke,a=Object(n.useContext)(v),r=a.query,c=a.selected;return o.a.createElement("div",null,"option3"===c?o.a.createElement("button",{className:"joke-btn",onClick:t,disabled:r.length<3},"Get a joke"):o.a.createElement("button",{className:"joke-btn",onClick:t},"Get a joke"))};a(35);var A=function(){var e=Object(n.useContext)(v),t=e.visibleSide,a=e.setVisibleSide;return o.a.createElement("div",{className:"side-button ".concat(t?"side-button_active":""),onClick:function(){a(!t)}},o.a.createElement("div",{className:"side-button__icon"},o.a.createElement("span",{className:"side-button__icon-line first-line"}),o.a.createElement("span",{className:"side-button__icon-line second-line"})),o.a.createElement("div",{className:"side-button__title"},"Favourite"))};var I=function(){var e=Object(n.useContext)(v),t=e.jokes,a=e.setJokes,r=e.selected,c=e.loading,s=e.setLoading,m=e.setCategories,d=e.active,f=e.query,p=e.setQuery,k=e.setValidSearchValue;Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.chucknorris.io/jokes/categories");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,m(a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().catch((function(e){return alert(e)}))}),[]);var j=function(){var e=Object(u.a)(l.a.mark((function e(){var a,n,o,c,i,u,m;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s(!0),"option1"!==r){e.next=12;break}return e.next=4,fetch("https://api.chucknorris.io/jokes/random");case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,h(t,n),s(!1),e.next=32;break;case 12:if("option2"!==r){e.next=23;break}return e.next=15,fetch("https://api.chucknorris.io/jokes/random?category=".concat(d));case 15:return o=e.sent,e.next=18,o.json();case 18:c=e.sent,h(t,c),s(!1),e.next=32;break;case 23:if("option3"!==r){e.next=32;break}return e.next=26,fetch("https://api.chucknorris.io/jokes/search?query=".concat(f));case 26:return i=e.sent,e.next=29,i.json();case 29:u=e.sent,m=E(u.result),b(m);case 32:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(e){void 0===e?(p(""),k(!1),s(!1)):(h(t,e),k(!0),p(""),s(!1))},E=function(e){return e[Math.floor(Math.random()*e.length)]},h=function(e,t){if(e.find((function(e){return e.id===t.id})))return null;a([t].concat(Object(i.a)(e)))};return o.a.createElement("div",{className:"joke-logic"},o.a.createElement("div",{className:"joke-logic__logo"},o.a.createElement("div",{className:"joke-logic__logo-title"},"MSI 2020"),o.a.createElement(A,null)),o.a.createElement("div",{className:"joke-logic__intro"},o.a.createElement("div",{className:"joke-logic__intro-title"},"Hey!"),o.a.createElement("div",{className:"joke-logic__intro-subtitle"},"Let's try to find a joke for you:"),o.a.createElement(F,{getAJoke:j}),o.a.createElement(w,{getAJoke:j})),c&&o.a.createElement("span",{className:"joke-logic__loader"}," "),t.map((function(e){return o.a.createElement(_,{value:e.value,id:e.id,category:e.categories,updated_at:e.updated_at,jokeIsF:e.isFavourite,key:e.id})})))};a(36);var V=function(){var e=Object(n.useContext)(v).visibleSide;return o.a.createElement("div",{className:"content ".concat(e?"content_deactivate":"")},o.a.createElement(I,null))};a(37),a(38);var K=function(e){var t=e.value,a=e.id,r=e.category,c=e.updated_at,i=Object(n.useContext)(v).calculateHours;return o.a.createElement("div",null,t?o.a.createElement("div",{className:"fav-joke"},o.a.createElement(j,{id:a}),o.a.createElement("div",{className:"fav-joke__container"},o.a.createElement("div",{className:"fav-joke__comment-circle"}," "),o.a.createElement("div",{className:"fav-joke__content"},o.a.createElement("div",{className:"fav-joke__id"},"ID: ",o.a.createElement("a",{id:"fav-joke__id-link",href:"https://api.chucknorris.io/jokes/".concat(a)},a)),o.a.createElement("div",{className:"fav-joke__value"},t),o.a.createElement("div",{className:"fav-joke__apps"},o.a.createElement("div",{className:"fav-joke__apps-last-update"},"Last update: ",i(c)," hours ago"),o.a.createElement("div",{className:"fav-joke__apps-category"},r))))):null)};var L=function(){var e=Object(n.useContext)(v),t=e.visibleSide,a=e.favJokes;return o.a.createElement("aside",{className:"sidebar ".concat(t?"sidebar_active":"")},o.a.createElement("div",{className:"sidebar__title"},"Favourite"),o.a.createElement("div",{className:"sidebar__jokes"},a.map((function(e){return o.a.createElement(K,{value:e.value,id:e.id,category:e.categories,updated_at:e.updated_at,key:e.id})}))))};var z=function(){return o.a.createElement(p,null,o.a.createElement("section",{className:"app"},o.a.createElement(V,null),o.a.createElement(L,null)))};a(39);c.a.render(o.a.createElement(z,null),document.getElementById("root"))}]),[[18,1,2]]]);
//# sourceMappingURL=main.1d15630c.chunk.js.map