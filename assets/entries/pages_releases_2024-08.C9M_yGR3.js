import{j as e,L as o,o as a,i as l}from"../chunks/chunk-B55XmmrA.js";import{L as t}from"../chunks/chunk-DgJHo8Pc.js";/* empty css                      */import{C as r}from"../chunks/chunk-D-oex3SH.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-DujD3LDN.js";/* empty css                      *//* empty css                      */const d=[{pageSectionId:"improved-head-management",pageSectionLevel:2,pageSectionTitle:"Improved head management"},{pageSectionId:"new-bati-integrations",pageSectionLevel:2,pageSectionTitle:"New Bati integrations"},{pageSectionId:"internal-improvements",pageSectionLevel:2,pageSectionTitle:"Internal improvements"},{pageSectionId:"road-to-v1",pageSectionLevel:2,pageSectionTitle:"Road to V1"},{pageSectionId:"see-also",pageSectionLevel:2,pageSectionTitle:"See also"}];function s(n){const i={a:"a",br:"br",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{children:e.jsxs(i.p,{children:["We are ",e.jsx(i.a,{href:"https://github.com/vikejs/vike/issues/1350",children:"looking for sponsors"}),"."]})}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Fixes:"})," ",e.jsx(i.code,{children:"86"})]}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"Features"})}),`
`,e.jsx(t,{href:"#improved-head-management"}),`
`,e.jsx("br",{}),`
`,e.jsx(t,{href:"#new-bati-integrations"}),`
`,e.jsx("br",{}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"Project"})}),`
`,e.jsx(t,{href:"#internal-improvements"}),`
`,e.jsx("br",{}),`
`,e.jsx(t,{href:"#road-to-v1"}),`
`,e.jsx("br",{}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"See also"})}),`
`,e.jsxs(i.p,{children:[e.jsxs(i.a,{href:"https://github.com/vikejs/vike/blob/main/CHANGELOG.md",children:[e.jsx(i.code,{children:"vike"})," > ",e.jsx(i.code,{children:"CHANGELOG.md"})]}),e.jsx(i.br,{}),`
`,e.jsxs(i.a,{href:"https://github.com/vikejs/vike-react/blob/main/packages/vike-react/CHANGELOG.md",children:[e.jsx(i.code,{children:"vike-react"})," > ",e.jsx(i.code,{children:"CHANGELOG.md"})]}),e.jsx(i.br,{}),`
`,e.jsxs(i.a,{href:"https://github.com/vikejs/vike-vue/blob/main/packages/vike-vue/CHANGELOG.md",children:[e.jsx(i.code,{children:"vike-vue"})," > ",e.jsx(i.code,{children:"CHANGELOG.md"})]}),e.jsx(i.br,{}),`
`,e.jsxs(i.a,{href:"https://github.com/vikejs/vike-solid/blob/main/CHANGELOG.md",children:[e.jsx(i.code,{children:"vike-solid"})," > ",e.jsx(i.code,{children:"CHANGELOG.md"})]})]}),`
`,e.jsx("h2",{id:"improved-head-management",children:"Improved head management"}),`
`,e.jsxs(i.p,{children:["Last month, we began ",e.jsxs(t,{href:"/head-tags",children:["improving ",e.jsx(i.code,{children:"<head>"})," management"]})," for ",e.jsx(i.code,{children:"vike-react"}),"."]}),`
`,e.jsxs(i.p,{children:["This month, we finished the work and ported all improvements across ",e.jsx(i.code,{children:"vike-{react,vue,solid}"}),"."]}),`
`,e.jsxs(i.p,{children:["We expect that we will have to fine tune a couple of things here and there, but we're confident the overall head management problem to be solved. It's a major milestone towards releasing ",e.jsx(i.code,{children:"1.0.0"}),"."]}),`
`,e.jsx(r,{children:e.jsxs(i.p,{children:["Author: ",e.jsx(i.a,{href:"https://github.com/brillout",children:e.jsx(i.code,{children:"brillout"})}),", ",e.jsx(i.a,{href:"https://github.com/phonzammi",children:e.jsx(i.code,{children:"phonzammi"})}),", ",e.jsx(i.a,{href:"https://github.com/pdanpdan",children:e.jsx(i.code,{children:"pdanpdan"})})]})}),`
`,e.jsx("h2",{id:"new-bati-integrations",children:"New Bati integrations"}),`
`,e.jsxs(i.p,{children:["New ",e.jsx(i.a,{href:"https://batijs.dev",children:"Bati"})," integrations:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://lucia-auth.com",children:"Lucia"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://mantine.dev",children:"Mantine"})}),`
`]}),`
`,e.jsx(r,{children:e.jsxs(i.p,{children:["Author: ",e.jsx(i.a,{href:"https://github.com/phonzammi",children:e.jsx(i.code,{children:"phonzammi"})}),", ",e.jsx(i.a,{href:"https://github.com/magne4000",children:e.jsx(i.code,{children:"magne4000"})})]})}),`
`,e.jsx("h2",{id:"internal-improvements",children:"Internal improvements"}),`
`,e.jsx(i.p,{children:"Many improvements we're working on don't directly impact the user at first sight."}),`
`,e.jsxs(i.p,{children:["For example, we're continuously making Vike extensions more capable. One area we're working on is enabling Vike extensions to automatically install server middlewares. For example if you use the upcoming extensions ",e.jsx(i.code,{children:"vike-express"})," or ",e.jsx(i.code,{children:"vike-hono"})," together with ",e.jsx(i.code,{children:"vike-telefunc"}),", then ",e.jsx(i.a,{href:"https://telefunc.com",children:"Telefunc"}),"'s server middleware will be automatically installed. For that purpose we've made a couple of improvements, such as being able to access global configurations outside of the ",e.jsx(i.code,{children:"renderPage()"})," lifecycle and ",e.jsx(i.a,{href:"https://github.com/magne4000/universal-middleware",children:e.jsx(i.code,{children:"universal-middleware"})}),"."]}),`
`,e.jsx(r,{children:e.jsxs(i.p,{children:["Author: ",e.jsx(i.a,{href:"https://github.com/magne4000",children:e.jsx(i.code,{children:"magne4000"})}),", ",e.jsx(i.a,{href:"https://github.com/nitedani",children:e.jsx(i.code,{children:"nitedani"})}),", ",e.jsx(i.a,{href:"https://github.com/brillout",children:e.jsx(i.code,{children:"brillout"})})]})}),`
`,e.jsx("h2",{id:"road-to-v1",children:"Road to V1"}),`
`,e.jsxs(i.p,{children:["Beyond the usual slew of bug fixes and features, the next major topic we're working on is a new global configuration file, ",e.jsx(i.code,{children:"vike.config.js"}),", and Vike's CLI fully replacing Vite's CLI. This will introduce new capabilities, such as enabling Vike extensions to add Vite plugins, along with internal and DX improvements."]}),`
`,e.jsxs(i.p,{children:["Together with our upcoming structural improvements to ",e.jsx(i.a,{href:"https://github.com/vikejs/vike-node",children:e.jsx(i.code,{children:"vike-node"})}),", this will mark Vike's readiness for a V1 release. After introducing a couple of minor breaking changes, we will then be able to release ",e.jsx(i.code,{children:"1.0.0"}),"."]}),`
`,e.jsx("h2",{id:"see-also",children:"See also"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsxs(i.a,{href:"https://github.com/vikejs/vike/blob/main/CHANGELOG.md",children:[e.jsx(i.code,{children:"vike"})," > ",e.jsx(i.code,{children:"CHANGELOG.md"})]})}),`
`,e.jsx(i.li,{children:e.jsxs(i.a,{href:"https://github.com/vikejs/vike-react/blob/main/packages/vike-react/CHANGELOG.md",children:[e.jsx(i.code,{children:"vike-react"})," > ",e.jsx(i.code,{children:"CHANGELOG.md"})]})}),`
`,e.jsx(i.li,{children:e.jsxs(i.a,{href:"https://github.com/vikejs/vike-vue/blob/main/packages/vike-vue/CHANGELOG.md",children:[e.jsx(i.code,{children:"vike-vue"})," > ",e.jsx(i.code,{children:"CHANGELOG.md"})]})}),`
`,e.jsx(i.li,{children:e.jsxs(i.a,{href:"https://github.com/vikejs/vike-solid/blob/main/CHANGELOG.md",children:[e.jsx(i.code,{children:"vike-solid"})," > ",e.jsx(i.code,{children:"CHANGELOG.md"})]})}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(t,{href:"/releases"}),`
`]}),`
`]})]})}function c(n={}){const{wrapper:i}=n.components||{};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}const h=Object.freeze(Object.defineProperty({__proto__:null,default:c,pageSectionsExport:d},Symbol.toStringTag,{value:"Module"})),y={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:o}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:a}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:l}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/releases/2024-08/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}}};export{y as configValuesSerialized};
