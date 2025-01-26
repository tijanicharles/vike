import{j as e,L as r,o as d,i as o}from"../chunks/chunk-B55XmmrA.js";import{L as s}from"../chunks/chunk-DgJHo8Pc.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-DujD3LDN.js";import{U as t}from"../chunks/chunk-BkwPfIiX.js";/* empty css                      *//* empty css                      */const a=[{pageSectionId:"scaffold-new-vike-solid-app",pageSectionLevel:2,pageSectionTitle:"Scaffold new `vike-solid` app"},{pageSectionId:"add-vike-solid-to-existing-vike-app",pageSectionLevel:2,pageSectionTitle:"Add `vike-solid` to existing Vike app"},{pageSectionId:"under-the-hood",pageSectionLevel:2,pageSectionTitle:"Under the hood"},{pageSectionId:"see-also",pageSectionLevel:2,pageSectionTitle:"See also"}];function l(i){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",figure:"figure",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...i.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:["The ",e.jsx(s,{href:"/extensions",children:"Vike extension"})," ",e.jsx(n.code,{children:"vike-solid"})," integrates ",e.jsx(n.a,{href:"https://solidjs.com",children:"Solid"})," in a full-fledged manner, providing a DX like a regular frontend framework such as Solid Start."]}),`
`,e.jsxs(n.p,{children:["Version history: ",e.jsx(n.a,{href:"https://github.com/vikejs/vike-solid/blob/main/CHANGELOG.md",children:e.jsx(n.code,{children:"CHANGELOG.md"})}),e.jsx(n.br,{}),`
`,"Examples: ",e.jsx(n.a,{href:"https://batijs.dev",children:"Bati"})," and ",e.jsx(n.a,{href:"https://github.com/vikejs/vike-solid/tree/main/examples",children:e.jsx(n.code,{children:"examples/"})}),e.jsx(n.br,{}),`
`,"Source code: ",e.jsxs(n.a,{href:"https://github.com/vikejs/vike-solid",children:["GitHub > ",e.jsx(n.code,{children:"vikejs/vike-solid"})]})]}),`
`,e.jsxs(n.p,{children:["The documentation for using ",e.jsx(n.code,{children:"vike-solid"})," can be found throughout this website (",e.jsx(n.code,{children:"vike.dev"}),")."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["The guides, such as ",e.jsx(s,{href:"/data-fetching"}),", assume you're using Vike with ",e.jsx(t,{name:!0,noLink:!0,comma:!0}),". If you aren't then see the sections ",e.jsx(n.code,{children:"Without vike-{react,vue,solid}"})," such as ",e.jsx(s,{href:"/useData#without-vike-react-vue-solid"}),"."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["You can integrate Solid yourself instead of using ",e.jsx(n.code,{children:"vike-solid"}),", see ",e.jsx(s,{href:"/solid#custom-integration"}),"."]}),`
`]}),`
`,e.jsxs("h2",{id:"scaffold-new-vike-solid-app",children:["Scaffold new ",e.jsx("code",{children:"vike-solid"})," app"]}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.a,{href:"https://batijs.dev",children:"Bati"})," for creating new apps."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["If you select Solid then Bati scaffolds a Vike + ",e.jsx(n.code,{children:"vike-solid"})," app."]}),`
`]}),`
`,e.jsxs("h2",{id:"add-vike-solid-to-existing-vike-app",children:["Add ",e.jsx("code",{children:"vike-solid"})," to existing Vike app"]}),`
`,e.jsxs(n.p,{children:["To add ",e.jsx(n.code,{children:"vike-solid"})," to an existing Vike app: install the ",e.jsx(n.code,{children:"vike-solid"})," npm package (e.g. ",e.jsx(n.code,{children:"$ npm install vike-solid"}),") then extend your existing ",e.jsx(n.code,{children:"+config.js"})," file (or create one) with ",e.jsx(n.code,{children:"vike-solid"}),":"]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{className:"has-diff",style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// /pages/+config.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{className:"diff add","data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(n.span,{style:{color:"#24292E"},children:" vikeSolid "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'vike-solid/config'"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(n.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // ..."})}),`
`,e.jsx(n.span,{className:"diff add","data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  extends: [vikeSolid] "})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsxs(n.p,{children:["You can then use ",e.jsxs(s,{href:"#under-the-hood",children:["new settings introduced by ",e.jsx(n.code,{children:"vike-solid"})]}),":"]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{className:"has-diff",style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// /pages/+config.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(n.span,{style:{color:"#24292E"},children:" vikeSolid "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'vike-solid/config'"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(n.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // ..."})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{className:"diff add","data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // Setting to toggle SSR"})}),`
`,e.jsxs(n.span,{className:"diff add","data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"  ssr: "}),e.jsx(n.span,{style:{color:"#005CC5"},children:"false"}),e.jsx(n.span,{style:{color:"#24292E"},children:", "})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  extends: [vikeSolid]"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsx("h2",{id:"under-the-hood",children:"Under the hood"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"vike-solid"})," extension is only ",e.jsx(n.a,{href:"https://gist.github.com/brillout/e2134686d682e9a450e10e95f1ff570b",children:"around 1k lines of code"}),`.
It's simple, readable, and highly polished.`]}),`
`,e.jsxs(n.p,{children:["Reading the ",e.jsxs(n.a,{href:"https://github.com/vikejs/vike-solid",children:["source code of ",e.jsx(n.code,{children:"vike-solid"})]})," is very much an option for understanding, debugging, and/or contributing."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Contributions are welcome!"}),`
`]}),`
`,e.jsxs(n.p,{children:["Essentially ",e.jsx(n.code,{children:"vike-solid"})," does this:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Sets ",e.jsx(s,{href:"/hooks",children:"Vike hooks"})," and ",e.jsx(s,{href:"/settings",children:"Vike settings"})," on your behalf.",`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Most notably:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(s,{href:"/onRenderHtml",children:e.jsx(n.code,{children:"onRenderHtml()"})}),`
(see `,e.jsx(n.a,{href:"https://github.com/vikejs/vike-solid/blob/main/packages/vike-solid/integration/onRenderHtml.tsx",children:"integration/onRenderHtml.tsx"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(s,{href:"/onRenderClient",children:e.jsx(n.code,{children:"onRenderClient()"})}),`
(see `,e.jsx(n.a,{href:"https://github.com/vikejs/vike-solid/blob/main/packages/vike-solid/integration/onRenderClient.tsx",children:"integration/onRenderClient.tsx"}),")"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Creates new Vike settings and new Vike hooks. (By using ",e.jsx(s,{href:"/meta"}),".)",`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["For example ",e.jsx(s,{href:"/Layout",children:e.jsx(n.code,{children:"<Layout>"})})," and ",e.jsx(s,{href:"/ssr",children:e.jsx(n.code,{children:"ssr"})}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Implements Solid component hooks.",`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["For example ",e.jsx(s,{href:"/useData",children:e.jsx(n.code,{children:"useData()"})})," and ",e.jsx(s,{href:"/usePageContext",children:e.jsx(n.code,{children:"usePageContext()"})}),"."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"It implements the following:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{noBreadcrumb:!0,href:"/useData"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{noBreadcrumb:!0,href:"/usePageContext"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{noBreadcrumb:!0,href:"/Layout"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{noBreadcrumb:!0,href:"/ssr"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{noBreadcrumb:!0,href:"/stream"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{noBreadcrumb:!0,href:"/clientOnly"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{noBreadcrumb:!0,href:"/onAfterRenderClient"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{noBreadcrumb:!0,href:"/Head"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{noBreadcrumb:!0,href:"/title"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{noBreadcrumb:!0,href:"/description"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{noBreadcrumb:!0,href:"/image"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{noBreadcrumb:!0,href:"/favicon"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{noBreadcrumb:!0,href:"/viewport"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{noBreadcrumb:!0,href:"/lang"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{noBreadcrumb:!0,href:"/htmlAttributes"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{noBreadcrumb:!0,href:"/bodyAttributes"}),`
`]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["For a better overview, see the following lists instead. (They also include all settings and hooks created by ",e.jsx(n.code,{children:"vike-solid"}),".)"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"/settings"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"/hooks"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx("h2",{id:"see-also",children:"See also"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"https://github.com/vikejs/vike-solid",children:["GitHub > ",e.jsx(n.code,{children:"vikejs/vike-solid"})]})}),`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"https://github.com/vikejs/vike-solid/blob/main/CHANGELOG.md",children:["GitHub > ",e.jsx(n.code,{children:"vikejs/vike-solid"})," > ",e.jsx(n.code,{children:"CHANGELOG.md"})]})}),`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"https://github.com/vikejs/vike-solid/tree/main/examples",children:["GitHub > ",e.jsx(n.code,{children:"vikejs/vike-solid"})," > ",e.jsx(n.code,{children:"examples/"})]})}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"/solid"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"/vike-react"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"/vike-vue"}),`
`]}),`
`]})]})}function c(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}const h=Object.freeze(Object.defineProperty({__proto__:null,default:c,pageSectionsExport:a},Symbol.toStringTag,{value:"Module"})),A={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:r}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:d}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:o}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/vike-solid/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}}};export{A as configValuesSerialized};
