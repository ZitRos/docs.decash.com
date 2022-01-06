"use strict";(self.webpackChunkdocs_decash_com=self.webpackChunkdocs_decash_com||[]).push([[728],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,g=u["".concat(d,".").concat(m)]||u[m]||c[m]||l;return a?n.createElement(g,o(o({ref:t},s),{},{components:a})):n.createElement(g,o({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},19:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],i={},d="CreateDelegatedWallet",p={unversionedId:"api/algorand/create-delegated-wallet",id:"api/algorand/create-delegated-wallet",title:"CreateDelegatedWallet",description:"Create a DelegatedWallet, given an owner wallet that controls it.",source:"@site/docs/api/algorand/create-delegated-wallet.mdx",sourceDirName:"api/algorand",slug:"/api/algorand/create-delegated-wallet",permalink:"/docs/api/algorand/create-delegated-wallet",editUrl:"https://github.com/DeCash-Official/docs.decash.com/edit/main/docs/api/algorand/create-delegated-wallet.mdx",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"CreateDelegatedPayment",permalink:"/docs/api/algorand/create-delegated-payment"},next:{title:"ManyToOneTransfer",permalink:"/docs/api/algorand/many-to-one-transfer"}},s=[{value:"Request Parameters",id:"request-parameters",children:[],level:2},{value:"Responses",id:"responses",children:[{value:"Regular response",id:"regular-response",children:[],level:3},{value:"Validation rerors",id:"validation-rerors",children:[],level:3}],level:2},{value:"Example Usage",id:"example-usage",children:[],level:2},{value:"Example Success Response",id:"example-success-response",children:[],level:2}],c={toc:s};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"createdelegatedwallet"},"CreateDelegatedWallet"),(0,l.kt)("p",null,"Create a ",(0,l.kt)("a",{parentName:"p",href:"/docs/concepts/delegated-wallets"},"DelegatedWallet"),", given an owner wallet that controls it."),(0,l.kt)("h2",{id:"request-parameters"},"Request Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"owner")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The algorand address of the account that will manage the funds in the created DelegatedWallet.")))),(0,l.kt)("h2",{id:"responses"},"Responses"),(0,l.kt)("h3",{id:"regular-response"},"Regular response"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"wallet")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The algorand address of the created DelegatedWallet.")))),(0,l.kt)("h3",{id:"validation-rerors"},"Validation rerors"),(0,l.kt)("p",null,"Returned when the parameters are invalid"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Content"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Status code"),(0,l.kt)("td",{parentName:"tr",align:null},"400")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"errorId")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"INVALID_PARAMS"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"message")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Validation errors in CreateDelegatedPayment request."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"errors")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of strings containing additional informations.")))),(0,l.kt)("h2",{id:"example-usage"},"Example Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const response = await fetch('https://api.decash.com/CreateDelegatedWallet', {\n  method: 'POST',\n  body: JSON.stringify({\n    owner: 'LX2XVJP7F5TQVOJ6DL4NPR5RH77XEG5US76WL7LIJL7OW6YPXDNPGIFWPM',\n  })\n});\nconst data = await response.json();\n")),(0,l.kt)("h2",{id:"example-success-response"},"Example Success Response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "wallet": "V55LRWVEWZCXO5Z5A6LVEF4DK2AWE7VWKVUKBA6ZWCMA55ODBZKSDDQRBU"\n}\n')))}u.isMDXComponent=!0}}]);