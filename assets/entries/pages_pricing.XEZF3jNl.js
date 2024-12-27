import{j as e,a as t,L as k,o as S,i as v}from"../chunks/chunk-CM3GR_x-.js";import{L as d}from"../chunks/chunk-Dn4vnTcg.js";/* empty css                      */import{a as T}from"../chunks/chunk-DTqprNe7.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-DWElet6Q.js";import{O as P}from"../chunks/chunk-iQmME5i1.js";/* empty css                      *//* empty css                      *//* empty css                      */const m="#a00",g="#0a0",C="#e90";function h(){return e.jsx(e.Fragment,{children:" |"})}function O(){return e.jsx("span",{style:{color:g,fontSize:"1.9em",display:"block"},children:"✓"})}function F(){return e.jsx("span",{style:{color:m,fontSize:"1.6em",display:"block"},children:"✗"})}function V({value:s}){const p=x(),i=D(s);return e.jsx("div",{className:"value-gauge",style:{height:9,borderWidth:1,borderStyle:"solid",borderColor:"#ddd",borderRadius:10,display:"flex",padding:"1px 2px"},children:e.jsx("div",{style:{height:"100%",width:p,backgroundColor:i,borderRadius:10}})});function x(){return t(s>0&&s<100),"calc("+s/100+" * 100%)"}}function D(s){return t(s>0&&s<100),s<50?m:s>=75?g:C}function u({name:s,children:n}){return e.jsxs(e.Fragment,{children:[e.jsx("em",{children:s}),": ",n]})}function L({entries:s,skip_links:n}){return e.jsx("div",{className:"values-table",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(i,{children:""}),e.jsx(i,{children:"Trans­parent"}),e.jsx(i,{children:"Fork­able"}),e.jsx(i,{children:"Access­ible"}),e.jsx(i,{children:"Sustai­nable"}),e.jsx(i,{children:"Inde­pendent"})]})}),e.jsx("tbody",{children:s.map((r,a)=>e.jsx(p,{...r},a))})]})});function p({modelName:r,transparent:a,forkable:c,accessible:j,independent:b,sustainable:w}){return e.jsxs("tr",{children:[e.jsx(o,{children:r}),e.jsx(o,{children:e.jsx(l,{val:a})}),e.jsx(o,{children:e.jsx(l,{val:c})}),e.jsx(o,{children:e.jsx(l,{val:j})}),e.jsx(o,{children:e.jsx(l,{val:w})}),e.jsx(o,{children:e.jsx(l,{val:b})})]})}function i({children:r,...a}){if(t(Object.keys(a).length===0),!r)return e.jsx("th",{});const c=r,j=n?c:e.jsx("a",{href:x(c),children:c});return e.jsx("th",{align:"center",children:j})}function x(r){return t(r.constructor===String),t(!r.includes("&shy;"),{value_name:r}),t(!r.includes("%C2%AD"),{value_name:r}),"/values"}function o({children:r}){return e.jsx("td",{align:"center",children:r})}function l({val:r}){return t(0<=r&&r<=1),r===1?e.jsx(O,{}):r===0?e.jsx(F,{}):e.jsx(V,{value:r*100})}}function N(){return e.jsx(e.Fragment,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("em",{children:"Transparent"}),": anyone can read the code."]}),e.jsxs("li",{children:[e.jsx("em",{children:"Forkable"}),": anyone can modify the code and publish its own version."]}),e.jsxs("li",{children:[e.jsx("em",{children:"Accessible"}),": anyone can use the code, no matter how much money at disposal."]}),e.jsxs("li",{children:[e.jsx("em",{children:"Sustainable"}),": the project's developers are financially supported."]}),e.jsxs("li",{children:[e.jsx("em",{children:"Independent"}),": the project isn't influenced by outside interests."]})]})})}function f(s){const n={li:"li",p:"p",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(L,{entries:[{modelName:e.jsx(e.Fragment,{children:"Open Source Pricing"}),transparent:1,forkable:1,accessible:1,independent:1,sustainable:1},{modelName:e.jsxs(e.Fragment,{children:["Open Source",e.jsx(h,{})," Donations"]}),transparent:1,forkable:1,accessible:1,independent:1,sustainable:.3},{modelName:e.jsxs(e.Fragment,{children:["Open Source",e.jsx(h,{})," Company Backed"]}),transparent:1,forkable:1,accessible:1,independent:0,sustainable:1},{modelName:e.jsxs(e.Fragment,{children:["Open Source",e.jsx(h,{})," Open Core"]}),transparent:.7,forkable:.7,accessible:.7,independent:1,sustainable:1},{modelName:e.jsxs(e.Fragment,{children:["Proprietary Software",e.jsx(h,{})," Public Source"]}),transparent:1,forkable:0,accessible:.45,independent:1,sustainable:1},{modelName:e.jsxs(e.Fragment,{children:["Proprietary Software",e.jsx(h,{})," Closed Source"]}),transparent:0,forkable:0,accessible:.45,independent:1,sustainable:1}],skip_links:!0}),`
`,e.jsx(n.p,{children:"Values:"}),`
`,e.jsx(N,{}),`
`,e.jsx(n.p,{children:"Business Models:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(u,{name:"Open Source | Donations",children:"some projects, due to their very high number of users and low developing cost, can sustain solely on donations."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(u,{name:"Open Source | Company Backed",children:"a company open sourcing some of its internal tool."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(u,{name:"Open Source | Open Core",children:"the code is open source but some extensions/features are proprietary."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(u,{name:"Proprietary | Public Source",children:"proprietary but the code is publicly available to be read."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(u,{name:"Proprietary | Closed Source",children:"closed sourced, not forkable, usually expensive."}),`
`]}),`
`]})]})}function I(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(f,{...s})}):f(s)}const z=[{pageSectionId:"how-does-it-work",pageSectionLevel:3,pageSectionTitle:"How does it work?"},{pageSectionId:"do-sponsors-have-to-pay",pageSectionLevel:3,pageSectionTitle:"Do sponsors have to pay?"},{pageSectionId:"is-vike-still-free-software",pageSectionLevel:3,pageSectionTitle:"Is Vike still Free Software?"},{pageSectionId:"why-not-another-business-model",pageSectionLevel:3,pageSectionTitle:"Why not another business model?"}];function y(s){const n={a:"a",code:"code",em:"em",li:"li",p:"p",strong:"strong",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(T,{children:"The Open Source Pricing isn't implemented yet."}),`
`,e.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:37,marginBottom:30},children:e.jsx("img",{src:P,style:{maxWidth:"100%"}})}),`
`,e.jsxs(n.p,{children:["Vike will soon introduce what we call an ",e.jsx(n.em,{children:"Open Source Pricing"}),": a new kind of business model that keeps Vike open source, as well as accessible (so that everyone, regardless of financial resources, can use Vike)."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The entire code ",e.jsx(n.strong,{children:"stays 100% open source"})," (MIT License)."]}),`
`,e.jsxs(n.li,{children:["Everything ",e.jsx(n.strong,{children:"stays 100% gratis for engineers"}),". You don't need any license key and you can use Vike without any restrictions, just like any other open source tool."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"For companies:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Pay what you can"}),". Companies choose the amount they want to pay while we trust them to make a fair choice. (If too many pay too little, we may switch to a fixed pricing.)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Free for small apps"}),". For new and small Vike apps, Vike is 100% gratis and you don't need any license key: everything works just like any other open source tool."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Apply for a free license key"}),".  For larger apps, you can apply for a free license key if your team cannot afford one or didn't incorporate a company yet. Write two or three sentences explaining your situation and we will give you a free license key valid for six months (you can apply again after six months)."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"The Open Source Pricing is a major milestone for Vike's growth. It preserves what makes open source special while ensuring Vike's priorities are aligned with the interests of its users, for a transparent and sustainable relationship."}),`
`,e.jsx("br",{}),`
`,e.jsx(d,{doNotInferSectionTitle:!0,href:"#how-does-it-work"}),`
`,e.jsx("br",{}),`
`,e.jsx(d,{doNotInferSectionTitle:!0,href:"#do-sponsors-have-to-pay"}),`
`,e.jsx("br",{}),`
`,e.jsx(d,{doNotInferSectionTitle:!0,href:"#is-vike-still-free-software"}),`
`,e.jsx("br",{}),`
`,e.jsx(d,{doNotInferSectionTitle:!0,href:"#why-not-another-business-model"}),`
`,e.jsx("br",{}),`
`,e.jsx("h3",{id:"how-does-it-work",children:"How does it work?"}),`
`,e.jsx(n.p,{children:"For new or small projects nothing changes: you can use Vike just like any other open source tool for free and without any license key."}),`
`,e.jsxs(n.p,{children:["For larger projects, Vike shows a pesky toaster in production ",e.jsx(n.code,{children:"Get your license key at ..."})," which you can remove by purchasing a license key and installing it with ",e.jsx(n.code,{children:"$ vike add-key 4f7DK1q29X5WJ6G3b9t1"}),"."]}),`
`,e.jsx(n.p,{children:"In theory, since Vike is 100% open source, you can fork Vike and remove the pesky toaster. But we will make the pesky toaster difficult to find — more difficult than applying for a free license key."}),`
`,e.jsx("h3",{id:"do-sponsors-have-to-pay",children:"Do sponsors have to pay?"}),`
`,e.jsx(n.p,{children:"No, Vike stays 100% gratis for companies sponsoring Vike (Bronze, Silver, Gold, and Platinum). Reach out and we will give you a free license key."}),`
`,e.jsx("h3",{id:"is-vike-still-free-software",children:"Is Vike still Free Software?"}),`
`,e.jsxs(n.p,{children:['Vike is still free as in "free speech" (not as in free beer), see explanations ',e.jsx(n.a,{href:"https://www.gnu.org/philosophy/free-sw.en.html",children:"by the Free Software Foundation"})," and ",e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/Free_software",children:"by Wikipedia"}),"."]}),`
`,e.jsxs(n.p,{children:["We believe in Libre Software and we invented the Open Source Pricing because ",e.jsx(d,{doNotInferSectionTitle:!0,href:"#why-not-another-business-model",children:"other business models contradict Libre Software values"}),"."]}),`
`,e.jsx(n.p,{children:"Code remains not only 100% open source but also 100% accessible: we believe money (and the lack thereof) should never prevent anyone from using code."}),`
`,e.jsx("h3",{id:"why-not-another-business-model",children:"Why not another business model?"}),`
`,e.jsx(n.p,{children:"We believe other business models are flawed in fundamental ways."}),`
`,e.jsx(n.p,{children:"The Open Source Pricing means:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"As an enginner, a much better software while everything stays 100% gratis."}),`
`,e.jsx(n.li,{children:"As a company, a transparent and sustainable relationship with a tool that is foundational to your stack."}),`
`]}),`
`,e.jsx(n.p,{children:"Compared to other business models:"}),`
`,e.jsx(I,{})]})}function A(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(y,{...s})}):y(s)}const R=Object.freeze(Object.defineProperty({__proto__:null,default:A,pageSectionsExport:z},Symbol.toStringTag,{value:"Module"})),Q={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:k}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:S}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:v}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/pricing/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:R}}};export{Q as configValuesSerialized};
