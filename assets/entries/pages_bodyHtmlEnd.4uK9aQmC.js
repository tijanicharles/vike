import{j as e,L as r,o,i}from"../chunks/chunk-B55XmmrA.js";import{L as n}from"../chunks/chunk-DgJHo8Pc.js";/* empty css                      */import{W as a}from"../chunks/chunk-D-oex3SH.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-DujD3LDN.js";import{U as d}from"../chunks/chunk-BkwPfIiX.js";import{M as c}from"../chunks/chunk-Bgrhs3a1.js";import{I as h}from"../chunks/chunk-BAEl6I7F.js";/* empty css                      *//* empty css                      *//* empty css                      */const p=[{pageSectionId:"vue",pageSectionLevel:2,pageSectionTitle:"Vue"},{pageSectionId:"global",pageSectionLevel:2,pageSectionTitle:"Global"},{pageSectionId:"see-also",pageSectionLevel:2,pageSectionTitle:"See also"}];function t(l){const s={a:"a",blockquote:"blockquote",code:"code",figure:"figure",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.p,{children:"Environment: server."}),`
`,e.jsx(h,{by:e.jsx(d,{name:!0,list:["vike-vue","vike-react"]}),noCustomGuide:!0,children:e.jsx(s.code,{children:"bodyHtmlEnd"})}),`
`,e.jsxs(s.p,{children:["The settings ",e.jsx(s.code,{children:"bodyHtmlEnd"}),"/",e.jsx(n,{href:"/bodyHtmlBegin"})," enable you to insert HTML at the beginning/end of the ",e.jsx(s.code,{children:"<body>"})," tag."]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["For use cases, such as adding ",e.jsx(s.code,{children:"<script>"})," tags, you can also use ",e.jsx(n,{href:"/head-tags",children:e.jsx(s.code,{children:"<Head>"})})," or ",e.jsx(n,{href:"/client",children:e.jsx(s.code,{children:"+client.js"})}),"."]}),`
`]}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// pages/+config.js"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(s.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"  bodyHtmlEnd: "}),e.jsx(s.span,{style:{color:"#032F62"},children:`'<div id="something"></div>'`})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// pages/+bodyHtmlEnd.js"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(s.span,{style:{color:"#24292E"},children:" ("}),e.jsx(s.span,{style:{color:"#E36209"},children:"pageContext"}),e.jsx(s.span,{style:{color:"#24292E"},children:") "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"=>"}),e.jsx(s.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"  const"}),e.jsx(s.span,{style:{color:"#24292E"},children:" { "}),e.jsx(s.span,{style:{color:"#005CC5"},children:"something"}),e.jsx(s.span,{style:{color:"#24292E"},children:" } "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"="}),e.jsx(s.span,{style:{color:"#24292E"},children:" pageContext"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"  return"}),e.jsx(s.span,{style:{color:"#032F62"},children:" `<div>${"}),e.jsx(s.span,{style:{color:"#24292E"},children:"something"}),e.jsx(s.span,{style:{color:"#032F62"},children:"}</div>`"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsx(a,{children:e.jsxs(s.p,{children:["Be cautious about the security risk called ",e.jsx(s.a,{href:"https://en.wikipedia.org/wiki/Cross-site_scripting",children:"XSS injections"}),"."]})}),`
`,e.jsx("h2",{id:"vue",children:"Vue"}),`
`,e.jsx(s.p,{children:"When using Vue, it's usually used for adding the HTML targets of teleports."}),`
`,e.jsxs(s.p,{children:["Teleports work out of the box when using ",e.jsx(s.code,{children:'<Teleport to="teleported">'})," and you don't have to use ",e.jsx(s.code,{children:"bodyHtml{Begin,End}"})," then."]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"vike-vue"})," always inserts this at the end of the ",e.jsx(s.code,{children:"<body>"})," tag:"]}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"<"}),e.jsx(s.span,{style:{color:"#22863A"},children:"div"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" id"}),e.jsx(s.span,{style:{color:"#D73A49"},children:"="}),e.jsx(s.span,{style:{color:"#032F62"},children:'"teleported"'}),e.jsx(s.span,{style:{color:"#24292E"},children:">${"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"  pageContext.ssrContext.teleports?.["}),e.jsx(s.span,{style:{color:"#032F62"},children:"'#teleported'"}),e.jsx(s.span,{style:{color:"#24292E"},children:"] "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"??"}),e.jsx(s.span,{style:{color:"#032F62"},children:" ''"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"}</"}),e.jsx(s.span,{style:{color:"#22863A"},children:"div"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]})]})})}),`
`]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["You can use ",e.jsxs(n,{href:"/pageContext",children:["Vike's ",e.jsx(s.code,{children:"pageContext"})," object"]})," to access ",e.jsxs(s.a,{href:"https://vuejs.org/api/ssr#usessrcontext",children:["Vue's ",e.jsx(s.code,{children:"ssrContext"})," object"]}),":"]}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// pages/+bodyHtmlEnd.js"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(s.span,{style:{color:"#24292E"},children:" ("}),e.jsx(s.span,{style:{color:"#E36209"},children:"pageContext"}),e.jsx(s.span,{style:{color:"#24292E"},children:") "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"=>"}),e.jsx(s.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"  const"}),e.jsx(s.span,{style:{color:"#005CC5"},children:" content"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E"},children:" pageContext.ssrContext.teleports?.["}),e.jsx(s.span,{style:{color:"#032F62"},children:"'#someTeleport'"}),e.jsx(s.span,{style:{color:"#24292E"},children:"] "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"??"}),e.jsx(s.span,{style:{color:"#032F62"},children:" ''"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"  return"}),e.jsx(s.span,{style:{color:"#032F62"},children:' `<div id="someTeleport">${'}),e.jsx(s.span,{style:{color:"#24292E"},children:"content"}),e.jsx(s.span,{style:{color:"#032F62"},children:"}</div>`"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`]}),`
`,e.jsx("h2",{id:"global",children:"Global"}),`
`,e.jsx(c,{}),`
`,e.jsx("h2",{id:"see-also",children:"See also"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/bodyHtmlBegin"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/head-tags"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/client"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/onRenderHtml"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/settings#html",doNotInferSectionTitle:!0}),`
`]}),`
`]})]})}function x(l={}){const{wrapper:s}=l.components||{};return s?e.jsx(s,{...l,children:e.jsx(t,{...l})}):t(l)}const j=Object.freeze(Object.defineProperty({__proto__:null,default:x,pageSectionsExport:p},Symbol.toStringTag,{value:"Module"})),F={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:r}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:o}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:i}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/bodyHtmlEnd/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}}};export{F as configValuesSerialized};
