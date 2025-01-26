import{j as e,L as t,o as a,i}from"../chunks/chunk-B55XmmrA.js";import{L as r}from"../chunks/chunk-DgJHo8Pc.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-DujD3LDN.js";import{C as l}from"../chunks/chunk-DDgOYE_d.js";/* empty css                      *//* empty css                      */import"../chunks/chunk-D-oex3SH.js";const d=[{pageSectionId:"development",pageSectionLevel:2,pageSectionTitle:"Development"},{pageSectionId:"hmr-doesn-t-work",pageSectionLevel:3,pageSectionTitle:"HMR doesn't work"},{pageSectionId:"cannot-access-app",pageSectionLevel:3,pageSectionTitle:"Cannot access app"},{pageSectionId:"out-of-memory-errors",pageSectionLevel:2,pageSectionTitle:"Out-of-memory errors"}];function n(s){const o={a:"a",blockquote:"blockquote",code:"code",figure:"figure",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{url:"https://www.docker.com/"}),`
`,e.jsx(o.p,{children:"From the server's perspective, a Vike app is just a Node.js server, which means you can use any Node.js container image to run your Vike app."}),`
`,e.jsxs(o.p,{children:["If you use Docker also for development, and HMR doesn't work or you can't access your Vike app, then see ",e.jsx(r,{href:"#development"}),"."]}),`
`,e.jsxs(o.p,{children:["If you build your app inside your Docker container and run into out-of-memory errors, then see ",e.jsx(r,{href:"#out-of-memory-errors"}),"."]}),`
`,e.jsx("h2",{id:"development",children:"Development"}),`
`,e.jsx(o.p,{children:"You can use Docker also for development, see workarounds if you run into following issues:"}),`
`,e.jsx("h3",{id:"hmr-doesn-t-work",children:"HMR doesn't work"}),`
`,e.jsxs(o.p,{children:["If you are using Docker and ",e.jsx(r,{href:"/glossary#hmr",children:"HMR"})," doesn't work:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["If you are under Windows and using ",e.jsx(o.a,{href:"https://docs.docker.com/desktop/setup/install/windows-install/",children:"Docker with WSL"}),", then have a look at ",e.jsx(r,{href:"/wsl"})," for how to enable HMR."]}),`
`,e.jsxs(o.li,{children:["You may need to configure Docker for ",e.jsx(o.a,{href:"https://vite.dev/config/server-options.html#server-hmr",children:"Vite's HMR websocket connection"}),"."]}),`
`]}),`
`,e.jsx("h3",{id:"cannot-access-app",children:"Cannot access app"}),`
`,e.jsxs(o.p,{children:["Vite's ",e.jsxs(o.a,{href:"https://vite.dev/config/server-options.html#server-host",children:[e.jsx(o.code,{children:"server.host"})," setting"]})," should be truthy so that your app can be accessed from outside your Docker container, such as from the browser."]}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:["Vike automatically changes the default value of ",e.jsx(o.code,{children:"server.host"})," from ",e.jsx(o.code,{children:"false"})," to ",e.jsx(o.code,{children:"true"})," if it detects a Docker or Podman container environment."]}),`
`]}),`
`,e.jsx("h2",{id:"out-of-memory-errors",children:"Out-of-memory errors"}),`
`,e.jsx(o.p,{children:"If you build your app inside your Docker container, you may stumble upon out-of-memory errors."}),`
`,e.jsxs(o.p,{children:["Check whether your Docker container has enough memory, and you may also need to set ",e.jsxs(o.a,{href:"https://nodejs.org/api/cli.html#--max-old-space-sizesize-in-megabytes",children:["Node.js' ",e.jsx(o.code,{children:"--max-old-space-size"})]}),"."]}),`
`,e.jsx(o.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(o.pre,{className:"has-diff",style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"json","data-theme":"github-light",children:e.jsxs(o.code,{"data-language":"json","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(o.span,{"data-line":"",children:e.jsx(o.span,{style:{color:"#6A737D"},children:"// package.json"})}),`
`,e.jsx(o.span,{"data-line":"",children:e.jsx(o.span,{style:{color:"#24292E"},children:"{"})}),`
`,e.jsxs(o.span,{"data-line":"",children:[e.jsx(o.span,{style:{color:"#005CC5"},children:'  "scripts"'}),e.jsx(o.span,{style:{color:"#24292E"},children:": {"})]}),`
`,e.jsxs(o.span,{className:"diff remove","data-line":"",children:[e.jsx(o.span,{style:{color:"#005CC5"},children:'    "build"'}),e.jsx(o.span,{style:{color:"#24292E"},children:": "}),e.jsx(o.span,{style:{color:"#032F62"},children:'"vike build"'})]}),`
`,e.jsxs(o.span,{className:"diff add","data-line":"",children:[e.jsx(o.span,{style:{color:"#032F62"},children:'    "// Increase Node.js memory size to 3GB"'}),e.jsx(o.span,{style:{color:"#B31D28",fontStyle:"italic"},children:":"}),e.jsx(o.span,{style:{color:"#032F62"},children:' ""'}),e.jsx(o.span,{style:{color:"#24292E"},children:", "})]}),`
`,e.jsxs(o.span,{className:"diff add","data-line":"",children:[e.jsx(o.span,{style:{color:"#005CC5"},children:'    "build"'}),e.jsx(o.span,{style:{color:"#24292E"},children:": "}),e.jsx(o.span,{style:{color:"#032F62"},children:'"NODE_OPTIONS=--max-old-space-size=3072 npm run build:vite"'}),e.jsx(o.span,{style:{color:"#24292E"},children:", "})]}),`
`,e.jsxs(o.span,{className:"diff add","data-line":"",children:[e.jsx(o.span,{style:{color:"#005CC5"},children:'    "build:vite"'}),e.jsx(o.span,{style:{color:"#24292E"},children:": "}),e.jsx(o.span,{style:{color:"#032F62"},children:'"vike build"'})]}),`
`,e.jsx(o.span,{"data-line":"",children:e.jsx(o.span,{style:{color:"#24292E"},children:"  }"})}),`
`,e.jsx(o.span,{"data-line":"",children:e.jsx(o.span,{style:{color:"#24292E"},children:"}"})})]})})})]})}function c(s={}){const{wrapper:o}=s.components||{};return o?e.jsx(o,{...s,children:e.jsx(n,{...s})}):n(s)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:c,pageSectionsExport:d},Symbol.toStringTag,{value:"Module"})),D={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:t}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:a}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:i}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/docker/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:p}}};export{D as configValuesSerialized};
