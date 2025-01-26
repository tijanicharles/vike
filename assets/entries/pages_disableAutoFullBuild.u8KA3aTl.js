import{j as e,L as s,o as t,i as d}from"../chunks/chunk-B55XmmrA.js";import{L as l}from"../chunks/chunk-DgJHo8Pc.js";/* empty css                      */import{W as a}from"../chunks/chunk-D-oex3SH.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-DujD3LDN.js";/* empty css                      *//* empty css                      */const o=[{pageSectionId:"see-also",pageSectionLevel:2,pageSectionTitle:"See also"}];function r(i){const n={a:"a",blockquote:"blockquote",code:"code",figure:"figure",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Disable the automatic chaining of build steps."}),`
`,e.jsxs(a,{children:[e.jsx(n.p,{children:"This setting is deprecated and will soon be removed. (Because Vite will soon use one Rolldown build in replacement of two Rollup builds.)"}),e.jsxs(n.p,{children:["Consider ",e.jsx(l,{href:"/prerender#disableautorun"})," instead."]})]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// vite.config.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(n.span,{style:{color:"#24292E"},children:" vike "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'vike/plugin'"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(n.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  plugins: ["})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"    vike"}),e.jsx(n.span,{style:{color:"#24292E"},children:"({"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"      // Disable all chaining"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"      disableAutoFullBuild: "}),e.jsx(n.span,{style:{color:"#005CC5"},children:"true"}),e.jsx(n.span,{style:{color:"#24292E"},children:","})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"      // Only disable the automatic pre-render triggering"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"      disableAutoFullBuild: "}),e.jsx(n.span,{style:{color:"#032F62"},children:"'prerender'"}),e.jsx(n.span,{style:{color:"#24292E"},children:","})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"    })"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"  ]"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsxs(n.p,{children:["Running ",e.jsx(n.code,{children:"$ vike build"})," executes three build steps:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Client-side build (",e.jsx(n.code,{children:"dist/client/"}),")."]}),`
`,e.jsxs(n.li,{children:["Server-side build (",e.jsx(n.code,{children:"dist/server/"}),")."]}),`
`,e.jsxs(n.li,{children:["Pre-rendering (if ",e.jsx(l,{text:"pre-rendering is enabled",href:"/pre-rendering"}),")."]}),`
`]}),`
`,e.jsxs(n.p,{children:["When setting ",e.jsx(n.code,{children:"disableAutoFullBuild"})," to ",e.jsx(n.code,{children:"true"})," then only step ",e.jsx(n.code,{children:"1"})," is executed. To run the full build, you then have to:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Run ",e.jsx(n.code,{children:"$ vike build"}),", to build the client-side (",e.jsx(n.code,{children:"dist/client/"}),")."]}),`
`,e.jsxs(n.li,{children:["Run ",e.jsx(n.code,{children:"$ vike build --ssr"}),", to build the server-side (",e.jsx(n.code,{children:"dist/server/"}),")."]}),`
`,e.jsxs(n.li,{children:["Run the pre-rendering programmatically, see ",e.jsx(l,{href:"/api#prerender",doNotInferSectionTitle:!0}),"."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["If your goal is only to ",e.jsx(l,{href:"/api#prerender",children:"programmatically run pre-rendering"})," then consider using ",e.jsx(l,{href:"/prerender#disableautorun",children:e.jsx("code",{children:"prerender.disableAutoRun"})})," instead."]}),`
`]}),`
`,e.jsx("h2",{id:"see-also",children:"See also"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"/api#prerender",doNotInferSectionTitle:!0}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"/prerender#disableautorun"}),`
`]}),`
`,e.jsx(n.li,{children:e.jsxs(n.a,{href:"https://vitejs.dev/guide/api-javascript.html#build",children:["Vite > JavaScript API > ",e.jsx(n.code,{children:"build"})]})}),`
`]})]})}function c(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:c,pageSectionsExport:o},Symbol.toStringTag,{value:"Module"})),A={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:s}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:t}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:d}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/disableAutoFullBuild/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:p}}};export{A as configValuesSerialized};
