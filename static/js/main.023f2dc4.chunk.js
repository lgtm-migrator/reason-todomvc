(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,o){"use strict";var n=o(2),r=o(6),a=o(15),i=o(9);var l=n.createContext((function(e){return 0}));var c=l.Provider;var m={todoDispatchContext:l,makeProps:function(e,t,o){return{value:e,children:t}},make:c,use:function(e){return n.useContext(l)}};t.Todo=0,t.tToJs=function(e){return{todos:e.todos}},t.tFromJs=function(e){return{todos:e.todos}},t.reducer=function(e,t){var o;if("number"===typeof t)o={todos:r.keep(e.todos,(function(e){return!e.complete}))};else switch(0|t.tag){case 0:o={todos:a.$at(e.todos,[t[0],0])};break;case 1:var n=t[0];o={todos:r.map(e.todos,(function(e){return e.id===n?{id:e.id,text:e.text,complete:!e.complete}:e}))};break;case 2:var l=t[0];o={todos:r.map(e.todos,(function(e){return{id:e.id,text:e.text,complete:l}}))};break;case 3:var c=t[0];o={todos:r.keep(e.todos,(function(e){return e.id!==c}))};break;case 4:var m=t[1],s=t[0];o={todos:r.map(e.todos,(function(e){return e.id===s?{id:e.id,text:m,complete:e.complete}:e}))}}return i.map(JSON.stringify(o),(function(e){return localStorage.setItem("todo-state",e),0})),o},t.Dispatch=m},25:function(e,t,o){"use strict";var n=o(4),r=o(2),a=o(44),i=o(48);n.$$global("html, body",[n.margin(-789508312),[n.padding(-789508312),0]]),n.$$global("body",[n.fontFamily("'Helvetica Neue', Helvetica, Arial, sans-serif"),[n.fontSize([25096,14]),[n.lineHeight([22632,1.4]),[n.color([5194459,"4d4d4d"]),[n.background([5194459,"f5f5f5"]),[n.minWidth(n.px(230)),[n.maxWidth(n.px(550)),[n.margin2(-789508312,-1065951377),[n.fontWeight([5496390,300]),[n.unsafe("fontSmoothing","antialiased"),[n.media("(min-width: 899px)",[n.width(-1065951377),[n.paddingLeft([25096,300]),0]]),0]]]]]]]]]]]),n.$$global("button",[n.margin(-789508312),[n.padding(-789508312),[n.borderStyle(-922086728),[n.background(-922086728),[n.verticalAlign(287825029),[n.fontFamily("inherit"),[n.fontWeight(-601204732),[n.unsafe("appearance","none"),[n.unsafe("fontSmoothing","antialiased"),0]]]]]]]]]);var l=document.getElementById("root");l.hasChildNodes()?a.hydrate(r.createElement(i.make,{}),l):a.render(r.createElement(i.make,{}),l),t.rootEl=l},48:function(e,t,o){"use strict";var n=o(4),r=o(5),a=o(0),i=o(2),l=o(6),c=o(3),m=o(49),s=o(50),d=o(51),u=o(52),f=o(53),p=o(55),h=o(10),g=o(59),v=u(8),b=n.style([n.position(903134412),[n.background([5194459,"fff"]),[n.marginTop([25096,130]),[n.marginBottom([25096,40]),[n.unsafe("boxShadow","0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1)"),0]]]]]),y=n.style([n.position(903134412),[n.borderTop([25096,1],12956715,[5194459,"e6e6e6"]),[n.zIndex(2),0]]]),E={container:b,main:y};var k=function(e){var t=i.useState((function(){return c.nullable_to_opt(JSON.parse(localStorage.getItem("todo-state")))}))[0],o=i.useReducer(h.reducer,void 0!==t?t:{todos:0}),n=o[1],u=o[0].todos,E=l.length(u)>0,k=i.useCallback((function(e){return""!==e?a._1(n,r.__(0,[{id:v(),text:e,complete:!1}])):0}),[n]);return i.createElement(i.Fragment,void 0,i.createElement(f.make,{}),i.createElement("section",{className:b},i.createElement("header",void 0,i.createElement(s.make,{}),i.createElement(m.make,{onSubmit:k})),i.createElement(h.Dispatch.make,h.Dispatch.makeProps(n,null,0),i.createElement("main",{className:y,hidden:!E},i.createElement(p.make,{todos:u})),i.createElement("footer",{hidden:!E},i.createElement(g.make,{todos:u})))),i.createElement(d.make,{}))};t.AppState=0,t.makeId=v,t.Styles=E,t.make=k},49:function(e,t,o){"use strict";var n=o(4),r=o(0),a=o(2),i=o(9),l=o(3),c=n.style([n.width(n.pct(100)),0]),m=n.style([n.position(903134412),[n.margin(-789508312),[n.padding4([25096,16],[25096,16],[25096,16],[25096,60]),[n.borderStyle(-922086728),[n.width(n.pct(100)),[n.fontSize([25096,24]),[n.fontFamily("inherit"),[n.fontWeight(-601204732),[n.lineHeight([22632,1.4]),[n.boxSizing(9307263),[n.background([-878128972,[0,0,0,.003]]),[n.boxShadow(n.Shadow.box(void 0,[25096,-2],[25096,1],void 0,!0,[-878128972,[0,0,0,.03]])),[n.placeholder([n.color(n.hex("e6e6e6")),[n.fontStyle(107228912),[n.fontWeight([5496390,300]),0]]]),0]]]]]]]]]]]]]),s={container:c,input:m},d=a.memo((function(e){var t=e.onSubmit,o=a.useRef(null),n=a.useCallback((function(e){return e.preventDefault(),i.map(l.nullable_to_opt(o.current),(function(e){return r._1(t,e.value),e.value=""})),0}),[t]);return a.createElement("form",{onSubmit:n},a.createElement("input",{ref:o,className:m,id:"todo-input",autoComplete:"off",name:"todo-input",placeholder:"What needs to be done?"}))}));t.Styles=s,t.make=d},50:function(e,t,o){"use strict";var n=o(4),r=o(2),a=n.style([n.position(-1013592457),[n.top([25096,-155]),[n.width(n.pct(100)),[n.fontSize([25096,100]),[n.fontWeight([5496390,100]),[n.textAlign(98248149),[n.color(n.rgba(175,47,47,.15)),[n.unsafe("textRendering","optimizeLegibility"),0]]]]]]]]),i={title:a},l=r.memo((function(e){return r.createElement("h1",{className:a},"todos")}));t.Styles=i,t.make=l},51:function(e,t,o){"use strict";var n=o(4),r=o(2),a=n.style([n.margin4([25096,65],-1065951377,-789508312,-1065951377),[n.fontSize([25096,10]),[n.color([5194459,"bfbfbf"]),[n.textAlign(98248149),[n.textShadow(n.Shadow.text(void 0,[25096,1],void 0,[-878128972,[255,255,255,.5]])),[n.selector("> p",[n.lineHeight([22632,1]),0]),[n.selector("& a",[n.color(292050538),[n.fontWeight([5496390,400]),[n.textDecoration(-922086728),[n.hover([n.textDecoration(131142924),0]),0]]]]),0]]]]]]]),i={container:a},l=r.memo((function(e){return r.createElement("footer",{className:a},r.createElement("p",void 0,"Double-click to edit a todo"),r.createElement("p",void 0,"Created by ",r.createElement("a",{href:"https://github.com/cometkim"},"cometkim")),r.createElement("p",void 0,"Part of ",r.createElement("a",{href:"http://todomvc.com"},"TodoMVC")))}));t.Styles=i,t.make=l},53:function(e,t,o){"use strict";var n=o(4),r=o(2),a=o(54),i=n.style([n.media("(min-width: 899px)",[n.left([25096,8]),0]),[n.position(-1013592457),[n.top([25096,8]),[n.left([25096,-300]),[n.width([25096,272]),[n.padding([25096,10]),[n.borderRadius([25096,5]),[n.backgroundColor([-878128972,[255,255,255,.6]]),[n.transitionProperty("left"),[n.transitionDuration(500),[n.selector("h3, h4, h5",[n.margin2([25096,10],-789508312),[n.fontWeight([5496390,500]),[n.lineHeight([22632,1.2]),[n.color(n.hex("000")),0]]]]),[n.selector("h3",[n.fontSize(n.px(24)),0]),[n.selector("h4",[n.fontSize(n.px(18)),0]),[n.selector("h5",[n.marginBottom(-789508312),[n.fontSize(n.px(14)),0]]),[n.selector("hr",[n.margin2([25096,20],-789508312),[n.borderStyle(-922086728),[n.borderTop([25096,1],568403505,[5194459,"c5c5c5"]),[n.borderBottom([25096,1],568403505,[5194459,"f7f7f7"]),0]]]]),[n.selector("a",[n.fontWeight(812216871),[n.textDecoration(-922086728),[n.color([5194459,"b83f45"]),0]]]),[n.selector("ul",[n.padding(-789508312),[n.marginBottom([25096,30]),[n.marginLeft([25096,25]),0]]]),0]]]]]]]]]]]]]]]]]),l={container:i};function c(e){return r.createElement("span",void 0,r.createElement("h5",void 0,"Example"),r.createElement("a",{href:a.home},"Source"))}var m={make:c};function s(e){return r.createElement("blockquote",{className:n.style([n.position(903134412),[n.padding([25096,10]),[n.backgroundColor([-878128972,[0,0,0,.04]]),[n.borderRadius([25096,5]),[n.borderStyle(-922086728),[n.margin4([25096,20],-789508312,[25096,60],-789508312),[n.after([n.contentRule(""),[n.position(-1013592457),[n.top(n.pct(100)),[n.right([25096,30]),[n.border([25096,13],12956715,582626130),[n.borderTopColor([-878128972,[0,0,0,.04]]),0]]]]]]),0]]]]]]])},r.createElement("p",{className:n.style([n.fontSize([25096,15]),[n.fontWeight([5496390,300]),[n.fontStyle(107228912),[n.marginTop(-789508312),[n.marginBottom(-789508312),[n.before([n.contentRule("\u201c"),[n.position(-1013592457),[n.top([25096,-20]),[n.left([25096,3]),[n.fontSize([25096,50]),[n.opacity(.15),[n.height([25096,65]),[n.display(-1010954439),[n.alignItems(98248149),0]]]]]]]]]),[n.after([n.contentRule("\u201d"),[n.position(-1013592457),[n.bottom([25096,-42]),[n.right([25096,3]),[n.fontSize([25096,50]),[n.opacity(.15),[n.height([25096,65]),[n.display(-1010954439),[n.alignItems(98248149),0]]]]]]]]]),0]]]]]]])},"\n          ReasonReact is a safer, simpler way to build React components, in Reason.\n        "),r.createElement("footer",{className:n.style([n.position(-1013592457),[n.bottom([25096,-40]),[n.right(-789508312),0]]])},r.createElement("a",void 0,"ReasonReact")))}var d={make:s};function u(e){return r.createElement("ul",void 0,r.createElement("li",void 0,r.createElement("a",{href:"https://reasonml.github.io/reason-react/docs/en/what-and-why"},"What & Why")),r.createElement("li",void 0,r.createElement("a",{href:"https://reasonml.github.io/reason-react/docs/en/simple"},"Examples")))}var f={make:u};function p(e){return r.createElement("ul",void 0,r.createElement("li",void 0,r.createElement("a",{href:"https://reasonml.chat"},"Forum")),r.createElement("li",void 0,r.createElement("a",{href:"https://discord.gg/reasonml"},"Discord")),r.createElement("li",void 0,r.createElement("a",{href:"https://twitter.com/reasonml"},"Twitter")),r.createElement("li",void 0,r.createElement("a",{href:"https://www.reddit.com/r/reasonml/"},"Reddit")),r.createElement("li",void 0,r.createElement("a",{href:"http://stackoverflow.com/questions/tagged/reason-react"},"Stack Overflow")))}var h={make:p},g=r.memo((function(e){return r.createElement("aside",{className:i},r.createElement("header",void 0,r.createElement("h3",void 0,"ReasonReact"),r.createElement(c,{})),r.createElement("hr",void 0),r.createElement(s,{}),r.createElement("hr",void 0),r.createElement("h4",void 0,"Official Resources"),r.createElement(u,{}),r.createElement("h4",void 0,"Community"),r.createElement(p,{}),r.createElement("footer",void 0,r.createElement("hr",void 0),r.createElement("em",void 0,"If you have other helpful links to share, or find any of the links above no longer work, please ",r.createElement("a",{href:a.home},"let us know"),".")))}));t.Styles=l,t.SourceLinks=m,t.SpeechBubble=d,t.OfficialResourceLinks=f,t.CommunityLinks=h,t.make=g},54:function(e,t,o){"use strict";t.home="https://github.com/cometkim/reason-todomvc",t.repo="https://github.com/cometkim/reason-todomvc.git"},55:function(e,t,o){"use strict";var n=o(4),r=o(5),a=o(0),i=o(2),l=o(6),c=o(56),m=o(10),s=n.style([n.listStyleType(n.none),[n.margin(n.zero),[n.paddingLeft(n.zero),0]]]),d=n.style([n.position(903134412),[n.fontSize([25096,24]),[n.display(-1010954439),[n.alignItems(n.center),0]]]]),u=n.style([n.position(-1013592457),[n.textAlign(98248149),[n.borderStyle(-922086728),[n.opacity(0),[n.selector("& + label",[n.position(-1013592457),[n.top([25096,-52]),[n.left([25096,-13]),[n.width([25096,60]),[n.height([25096,34]),[n.fontSize(-789508312),[n.transform([-887077285,[4995526,90]]),[n.before([n.contentRule("\u276f"),[n.fontSize([25096,22]),[n.color([5194459,"e6e6e6"]),[n.padding2([25096,10],[25096,27]),0]]]]),0]]]]]]]]),[n.selector("&:checked + label",[n.before([n.color([5194459,"737373"]),0]),0]),0]]]]]]),f={container:s,itemWrapper:d,toggleAll:u},p=i.memo((function(e){var t=e.checked,o=m.Dispatch.use(0);return i.createElement(i.Fragment,void 0,i.createElement("input",{className:u,id:"toggle-all",checked:t,type:"checkbox",onChange:function(e){var t=e.target.checked;return a._1(o,r.__(2,[t]))}}),i.createElement("label",{htmlFor:"toggle-all"}))})),h={make:p};var g=function(e){var t=e.todos,o=l.every(t,(function(e){return e.complete}));return i.createElement(i.Fragment,void 0,i.createElement(p,{checked:o}),i.createElement("ul",{className:s},l.toArray(l.map(t,(function(e){return i.createElement("li",{key:e.id,className:d},i.createElement(c.make,{todo:e}))})))))};t.AppState=0,t.Todo=0,t.Styles=f,t.ToggleAll=h,t.make=g},56:function(e,t,o){"use strict";var n=o(4),r=o(5),a=o(0),i=o(2),l=o(9),c=o(3),m=o(24),s=o(57),d=o(58),u=o(10),f=s.default,p=d.default,h=n.style([n.display(888960333),[n.width(n.pct(100)),[n.hover([n.selector("> button",[n.display(n.block),0]),0]),[n.borderBottom([25096,1],12956715,[5194459,"ededed"]),0]]]]),g=n.style([n.position(903134412),[n.margin(-789508312),[n.marginLeft([25096,43]),[n.width(n.pct(100)),[n.fontSize([25096,24]),[n.fontFamily("inherit"),[n.fontWeight(-601204732),[n.lineHeight([22632,1.4]),[n.color(292050538),[n.padding2([25096,12],[25096,16]),[n.border([25096,1],12956715,[5194459,"999"]),[n.borderBottomStyle(-922086728),[n.boxShadow(n.Shadow.box(void 0,[25096,-1],[25096,5],void 0,!0,[-878128972,[0,0,0,.2]])),[n.boxSizing(9307263),[n.unsafe("fontSmoothing","antialiased"),0]]]]]]]]]]]]]]]),v=n.style([n.opacity(0),[n.textAlign(98248149),[n.width([25096,40]),[n.height([25096,40]),[n.position(-1013592457),[n.top(-789508312),[n.bottom(-789508312),[n.margin2(-1065951377,-789508312),[n.borderStyle(-922086728),[n.background(-922086728),[n.selector("& + label",[n.backgroundImage([5843823,p]),[n.backgroundRepeat(-695430532),[n.unsafe("backgroundPosition","center left"),0]]]),[n.selector("&:checked + label",[n.backgroundImage([5843823,f]),[n.color([5194459,"d9d9d9"]),[n.textDecoration(412155569),0]]]),0]]]]]]]]]]]]),b=n.style([n.display(888960333),[n.wordBreak(-323760734),[n.lineHeight([22632,1.2]),[n.padding4([25096,15],[25096,15],[25096,15],[25096,60]),[n.transition(400,void 0,void 0,"color"),0]]]]]),y=n.style([n.display(-922086728),[n.position(-1013592457),[n.top(-789508312),[n.right([25096,10]),[n.bottom(-789508312),[n.width([25096,40]),[n.height([25096,40]),[n.margin2(-1065951377,-789508312),[n.marginBottom([25096,11]),[n.fontSize([25096,30]),[n.color([5194459,"cc9a9a"]),[n.transition(200,void 0,715748672,"color"),[n.hover([n.color([5194459,"af5b5e"]),0]),[n.after([n.contentRule("\xd7"),0]),0]]]]]]]]]]]]]]),E=n.style([n.textDecoration(n.lineThrough),0]),k=n.style([n.display(n.none),0]),x={view:h,edit:g,toggle:v,text:b,destroy:y,completed:E,hidden:k},S=i.memo((function(e){var t=e.todo,o=u.Dispatch.use(0),s=m.useUrl(void 0,0),d=t.complete,f=s.hash,p=d?"active"===f:"completed"===f,E=i.useRef(null),x=i.useState((function(){return!1})),S=x[1],I=x[0];return i.useEffect((function(){I&&l.map(c.nullable_to_opt(E.current),(function(e){return e.focus()}))}),[I]),i.useEffect((function(){var e=E.current,n=I||null==e?t.text:e.value;""!==n&&n!==t.text&&a._1(o,r.__(4,[t.id,n]))}),[t,I]),i.createElement(i.Fragment,void 0,i.createElement("div",{className:n.merge([h,[p?k:"",[I?k:"",0]]])},i.createElement("input",{className:v,checked:t.complete,type:"checkbox",onChange:function(e){return a._1(o,r.__(1,[t.id]))}}),i.createElement("label",{className:b,onDoubleClick:function(e){return a._1(S,(function(e){return!0}))}},t.text),i.createElement("button",{className:y,onClick:function(e){return a._1(o,r.__(3,[t.id]))}})),i.createElement("input",{ref:E,defaultValue:t.text,className:n.merge([g,[p?k:"",[I?"":k,0]]]),autoFocus:!0,onKeyDown:function(e){return"Enter"===e.key?a._1(S,(function(e){return!1})):0},onBlur:function(e){return a._1(S,(function(e){return!1}))}}))}));t.checkedSrc=f,t.uncheckedSrc=p,t.AppState=0,t.Todo=0,t.Styles=x,t.make=S},57:function(e,t,o){"use strict";o.r(t),t.default="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iLTEwIC0xOCAxMDAgMTM1Ij48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYmRkYWQ1IiBzdHJva2Utd2lkdGg9IjMiLz48cGF0aCBmaWxsPSIjNWRjMmFmIiBkPSJNNzIgMjVMNDIgNzEgMjcgNTZsLTQgNCAyMCAyMCAzNC01MnoiLz48L3N2Zz4="},58:function(e,t,o){"use strict";o.r(t),t.default="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iLTEwIC0xOCAxMDAgMTM1Ij48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZWRlZGVkIiBzdHJva2Utd2lkdGg9IjMiLz48L3N2Zz4="},59:function(e,t,o){"use strict";var n=o(4),r=o(0),a=o(2),i=o(6),l=o(24),c=o(10),m=n.style([n.display(-999565626),[n.gridTemplateColumns([n.fr(1),[n.fr(2),[n.fr(1),0]]]),[n.height([25096,20]),[n.padding2([25096,10],[25096,15]),[n.color([5194459,"777"]),[n.before([n.contentRule(""),[n.position(-1013592457),[n.left(-789508312),[n.right(-789508312),[n.bottom(-789508312),[n.height([25096,50]),[n.overflow(-862584982),[n.unsafe("boxShadow","\n          0 1px 1px rgba(0, 0, 0, 0.2),\n          0 8px 0 -3px #f6f6f6,\n          0 9px 1px -3px rgba(0, 0, 0, 0.2),\n          0 16px 0 -6px #f6f6f6,\n          0 17px 2px -6px rgba(0, 0, 0, 0.2)\n        "),0]]]]]]]]),[n.selector("> *",[n.zIndex(1),0]),[n.selector("> :nth-child(1)",[n.textAlign(-944764921),0]),[n.selector("> :nth-child(2)",[n.textAlign(98248149),0]),[n.selector("> :nth-child(3)",[n.textAlign(-379319332),0]),0]]]]]]]]]]),s=n.style(0),d=n.style([n.margin(-789508312),[n.padding(-789508312),[n.listStyleType(-922086728),[n.selector("> li",[n.display(423610969),[n.selector("> a",[n.margin2([25096,3],[25096,5]),[n.padding2([25096,3],[25096,7]),[n.color(292050538),[n.textDecoration(-922086728),[n.border([25096,1],12956715,582626130),[n.borderRadius([25096,3]),[n.hover([n.borderColor([-878128972,[175,47,47,.1]]),0]),[n.selector("&.selected",[n.borderColor([-878128972,[175,47,47,.2]]),0]),0]]]]]]]]),0]]),0]]]]),u=n.style([n.fontSize([25096,14]),[n.color(292050538),[n.cursor(-786317123),[n.lineHeight([25096,20]),[n.hover([n.textDecoration(131142924),0]),0]]]]]),f={container:m,counter:s,filters:d,clearComplete:u},p=a.memo((function(e){var t=e.todos;return a.createElement("div",void 0,String(i.length(i.keep(t,(function(e){return!e.complete}))))+" items left")})),h={make:p},g=a.memo((function(e){var t=l.useUrl(void 0,0);return a.createElement("ul",{className:d},a.createElement("li",void 0,a.createElement("a",{className:""===t.hash?"selected":"",href:"#"},"All")),a.createElement("li",void 0,a.createElement("a",{className:"active"===t.hash?"selected":"",href:"#active"},"Active")),a.createElement("li",void 0,a.createElement("a",{className:"completed"===t.hash?"selected":"",href:"#completed"},"Completed")))})),v={make:g},b=a.memo((function(e){var t=e.hidden,o=c.Dispatch.use(0);return a.createElement("div",{hidden:t},a.createElement("button",{className:u,onClick:function(e){return r._1(o,0)}},"Clear completed"))})),y={make:b},E=a.memo((function(e){var t=e.todos,o=i.length(i.keep(t,(function(e){return e.complete})))>0;return a.createElement("div",{className:m},a.createElement(p,{todos:t}),a.createElement(g,{}),a.createElement(b,{hidden:!o}))}));t.AppState=0,t.Todo=0,t.Styles=f,t.TodoLeftCounter=h,t.TodoFilters=v,t.ClearButton=y,t.make=E}},[[25,1,2]]]);
//# sourceMappingURL=main.023f2dc4.chunk.js.map