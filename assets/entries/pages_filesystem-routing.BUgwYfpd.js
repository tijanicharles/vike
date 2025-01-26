import{j as e,L as l,o as t,i as o}from"../chunks/chunk-B55XmmrA.js";import{L as s}from"../chunks/chunk-DgJHo8Pc.js";/* empty css                      */import{W as a}from"../chunks/chunk-D-oex3SH.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-DujD3LDN.js";import{U as d}from"../chunks/chunk-BkwPfIiX.js";/* empty css                      *//* empty css                      *//* empty css                      */const c=[{pageSectionId:"ignored-directories",pageSectionLevel:2,pageSectionTitle:"Ignored directories"},{pageSectionId:"case-sensitive",pageSectionLevel:2,pageSectionTitle:"Case sensitive"},{pageSectionId:"crawl-space",pageSectionLevel:2,pageSectionTitle:"Crawl space"},{pageSectionId:"renderer",pageSectionLevel:2,pageSectionTitle:"`renderer/`"},{pageSectionId:"see-also",pageSectionLevel:2,pageSectionTitle:"See also"}];function r(i){const n={a:"a",blockquote:"blockquote",code:"code",figure:"figure",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"Detailed information about Vike's Filesystem Routing."}),`
`,e.jsxs(n.p,{children:["For a quick overview see ",e.jsx(s,{href:"/routing#filesystem-routing",doNotInferSectionTitle:!0})," instead."]}),`
`,e.jsx("h2",{id:"ignored-directories",children:"Ignored directories"}),`
`,e.jsx(n.p,{children:"Following directories are ignored by Filesystem Routing:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"index/"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"pages/"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"src/"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"(someDir)/"})," (any directory inside parentheses)"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`FILESYSTEM                                                     URL
=========================================================      ========
pages/index/+Page.js                                           /
(marketing)/src/pages/jobs/+Page.js                            /jobs
(some)/(path)/src/pages/jobs/+Page.js                          /jobs
contact/+Page.js                                               /contact
pages/pages/src/(some-dir)/src/index/pages/about/+Page.js      /about
`})}),`
`,e.jsxs(n.p,{children:["But they aren't ignored by ",e.jsx(s,{href:"/config#inheritance",children:"config inheritance"}),":"]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"yaml","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"yaml","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"pages/about/+Page.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# This +config.js file doesn't apply to pages/about/+Page.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"src/pages/+config.js"})})]})})}),`
`,e.jsx("h2",{id:"case-sensitive",children:"Case sensitive"}),`
`,e.jsx(n.p,{children:"Filesystem Routing is case sensitive:"}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"bash","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"bash","data-theme":"github-light",style:{display:"grid"},children:[e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"FILESYSTEM"}),e.jsx(n.span,{style:{color:"#032F62"},children:"                     URL"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"========================       "}),e.jsx(n.span,{style:{color:"#032F62"},children:"======"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"pages/HELLO/+Page.js"}),e.jsx(n.span,{style:{color:"#032F62"},children:"           /HELLO"})]})]})})}),`
`,e.jsx("h2",{id:"crawl-space",children:"Crawl space"}),`
`,e.jsx(n.p,{children:"Vike crawls:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Files inside ",e.jsxs(n.a,{href:"https://vitejs.dev/config/shared-options.html#root",children:["Vite's ",e.jsx(n.code,{children:"root"})," directory"]}),".",`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Consequently, all your ",e.jsxs(s,{href:"/config#files",children:[e.jsx(n.code,{children:"+"})," files"]})," need to live inside ",e.jsx(n.code,{children:"root"}),`.
To make a directory outside of `,e.jsx(n.code,{children:"root"})," crawlable, you can use a symlink (e.g. ",e.jsx(n.code,{children:"$ ln -s"}),") and set ",e.jsx(n.code,{children:'VIKE_CRAWL="{git:false}"'}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Skips ",e.jsx(n.code,{children:"node_modules/"})]}),`
`,e.jsxs(n.li,{children:["Skips ",e.jsx(n.code,{children:".gitignore"})," files (if you use Git).",`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["If you want to also crawl these then set ",e.jsx(n.code,{children:'VIKE_CRAWL="{git:false}"'}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Skips soft-symlinked (",e.jsx(n.code,{children:"$ ln -s"}),") directories (if you use Git).",`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["If you want to also crawl these then set ",e.jsx(n.code,{children:'VIKE_CRAWL="{git:false}"'}),"."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["By default Vike uses Git (if your repository uses Git) to crawl your files. If you set ",e.jsx(n.code,{children:'VIKE_CRAWL="{git:false}"'})," then Vike uses ",e.jsx(n.a,{href:"https://github.com/mrmlnc/fast-glob",children:e.jsx(n.code,{children:"fast-glob"})})," instead."]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"bash","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"bash","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Use fast-glob instead of Git to crawl files"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"$"}),e.jsx(n.span,{style:{color:"#032F62"},children:' VIKE_CRAWL="{git:false}"'}),e.jsx(n.span,{style:{color:"#032F62"},children:" npm"}),e.jsx(n.span,{style:{color:"#032F62"},children:" run"}),e.jsx(n.span,{style:{color:"#032F62"},children:" dev"})]})]})})}),`
`,e.jsx("h2",{id:"renderer",children:e.jsx("code",{children:"renderer/"})}),`
`,e.jsxs(n.p,{children:["If you don't use a ",e.jsx(d,{})," then we recommend placing your UI framework integration in a ",e.jsx(n.code,{children:"renderer/"})," directory."]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"yaml","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"yaml","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Usual Vike file structure"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"/pages/"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"/components/"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"/server/"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"# Code that specifies how pages are rendered"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"/renderer/+onRenderHtml.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"/renderer/+onRenderClient.js"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#032F62"},children:"/renderer/Layout.{jsx,vue}"}),e.jsx(n.span,{style:{color:"#6A737D"},children:"  # React/Vue/... component that wraps the `Page` component"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"/renderer/Layout.css"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#032F62"},children:"/renderer/Header.{jsx,vue}"}),e.jsx(n.span,{style:{color:"#6A737D"},children:" # Website header used for every page"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#032F62"},children:"/renderer/Footer.{jsx,vue}"}),e.jsx(n.span,{style:{color:"#6A737D"},children:" # Website footer used for every page"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#032F62"},children:"/renderer/logo.svg"}),e.jsx(n.span,{style:{color:"#6A737D"},children:" # Website logo (favicon and used by <Header>)"})]})]})})}),`
`,e.jsxs(n.p,{children:["The hooks ",e.jsx(n.code,{children:"/renderer/+onRender{Html,Client}.js"})," apply as default to all pages ",e.jsx(n.code,{children:"/pages/**/+Page.js"}),"."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"renderer/"})," directory doesn't add any functionality: defining the hooks ",e.jsx(n.code,{children:"+onRender{Html,Client}.js"})," at ",e.jsx(n.code,{children:"/renderer/"})," is equivalent to defining them at ",e.jsx(n.code,{children:"/pages/"})," or ",e.jsx(n.code,{children:"/"}),". It's just an optional convenience for moving rendering logic outside of ",e.jsx(n.code,{children:"pages/"}),": in order to avoid cluttering the ",e.jsx(n.code,{children:"pages/"})," directory and to organize and put all rendering code in one place."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"renderer/"})," directory isn't like the ",e.jsx(s,{href:"#ignored-directories",children:"list of ignored directories"})," because not only is it ignored by Filesystem Routing but it's also ignored by ",e.jsx(s,{href:"/config#inheritance",children:"config inheritance"}),"."]}),`
`]}),`
`,e.jsx(a,{children:e.jsxs(n.p,{children:["We recommend defining a ",e.jsx(n.code,{children:"renderer/"})," directory only if you are implementing a custom UI framework (React/Vue/Solid/...) integration."]})}),`
`,e.jsx("h2",{id:"see-also",children:"See also"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"/routing"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"/file-structure"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(s,{href:"/filesystemRoutingRoot"}),`
`]}),`
`]})]})}function h(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:h,pageSectionsExport:c},Symbol.toStringTag,{value:"Module"})),C={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:l}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:t}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:o}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/filesystem-routing/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:p}}};export{C as configValuesSerialized};
