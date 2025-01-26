import{j as e,L as r,o,i}from"../chunks/chunk-B55XmmrA.js";import{L as a}from"../chunks/chunk-DgJHo8Pc.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-DujD3LDN.js";import{S as d,a as c,b as p}from"../chunks/chunk-D2h2itpL.js";import{U as h}from"../chunks/chunk-CTAcLv0g.js";import{E as n}from"../chunks/chunk-CIu3y76e.js";/* empty css                      *//* empty css                      */const u=[{pageSectionId:"full-stack",pageSectionLevel:2,pageSectionTitle:"Full-stack"},{pageSectionId:"without-a-server",pageSectionLevel:3,pageSectionTitle:"Without a server"},{pageSectionId:"with-a-server",pageSectionLevel:3,pageSectionTitle:"With a server"},{pageSectionId:"static",pageSectionLevel:2,pageSectionTitle:"Static"},{pageSectionId:"examples",pageSectionLevel:2,pageSectionTitle:"Examples"}];function t(l){const s={a:"a",blockquote:"blockquote",code:"code",figure:"figure",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...l.components};return e.jsxs(e.Fragment,{children:[e.jsx("h2",{id:"full-stack",children:"Full-stack"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.a,{href:"https://github.com/vikejs/vike-cloudflare",children:"vike-cloudflare"})," package enables zero-configuration deployment to ",e.jsx(s.a,{href:"https://pages.cloudflare.com",children:"Cloudflare Pages"}),"."]}),`
`,e.jsxs(s.p,{children:["It will deploy prerendered routes as static files, and dynamic routes as ",e.jsx(s.a,{href:"https://developers.cloudflare.com/pages/functions/advanced-mode/",children:"Pages Functions"}),"."]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Instead of using ",e.jsx(s.code,{children:"vike-cloudflare"})," you can manually integrate Cloudflare Pages yourself, see ",e.jsx(a,{href:"/cloudflare-workers#cloudflare-pages",doNotInferSectionTitle:!0}),"."]}),`
`]}),`
`,e.jsxs(h,{children:["Cloudflare Pages with ",e.jsx(s.code,{children:"vike-cloudflare"})]}),`
`,e.jsx("h3",{id:"without-a-server",children:"Without a server"}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// vite.config.js"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E"},children:" { pages } "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62"},children:' "vike-cloudflare"'}),e.jsx(s.span,{style:{color:"#24292E"},children:";"})]}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(s.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"  plugins: ["}),e.jsx(s.span,{style:{color:"#6F42C1"},children:"pages"}),e.jsx(s.span,{style:{color:"#24292E"},children:"()]"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsx("h3",{id:"with-a-server",children:"With a server"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"vike-cloudflare"})," currently supports ",e.jsx(a,{href:"/hono"})," and ",e.jsx(a,{href:"/hattip"})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(a,{href:"/hattip"})," also requires the installation of ",e.jsx(s.code,{children:"@hattip/adapter-cloudflare-workers"})]}),`
`]}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// vite.config.js"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E"},children:" { pages } "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62"},children:' "vike-cloudflare"'}),e.jsx(s.span,{style:{color:"#24292E"},children:";"})]}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(s.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(s.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"  plugins: ["}),e.jsx(s.span,{style:{color:"#6F42C1"},children:"pages"}),e.jsx(s.span,{style:{color:"#24292E"},children:"({"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"    server: {"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"      kind: "}),e.jsx(s.span,{style:{color:"#032F62"},children:'"hono"'}),e.jsx(s.span,{style:{color:"#24292E"},children:", "}),e.jsx(s.span,{style:{color:"#6A737D"},children:'// or "hattip"'})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"      entry: "}),e.jsx(s.span,{style:{color:"#032F62"},children:'"hono-entry.ts"'}),e.jsx(s.span,{style:{color:"#6A737D"},children:" // entrypoint of the server"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"    }"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"  })]"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsx("h2",{id:"static",children:"Static"}),`
`,e.jsx(d,{staticHostLink:e.jsxs(e.Fragment,{children:[", such as ",e.jsx(s.a,{href:"https://pages.cloudflare.com/",children:"Cloudflare Pages"})]})}),`
`,e.jsx(c,{name:"Cloudflare Pages"}),`
`,e.jsxs(s.p,{children:["If you let Cloudflare Pages build your app, note that Vike requires Node.js ",e.jsx(s.code,{children:">=12.19.0"})," and you may need to change ",e.jsx("a",{href:"https://developers.cloudflare.com/pages/platform/build-configuration#language-support-and-tools",children:"Cloudflare Pages' default Node.js version"}),"."]}),`
`,e.jsx(p,{}),`
`,e.jsx("h2",{id:"examples",children:"Examples"}),`
`,e.jsx(s.p,{children:"Example of using Vike with Cloudflare Pages with a Cloudflare worker:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(n,{timestamp:"2024.06",repo:"vikejs/vike-cloudflare"})," - ",e.jsx(s.code,{children:"vike-cloudflare"})," demos, with support for Plain Vike and Servers like ",e.jsx(a,{href:"/hono"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(n,{timestamp:"2024.01",repo:"travis-r6s/vike-cf-pages"})," - Advanced demo showcasing a lot of integrations such as REST, tRPC, GraphQL, Sentry, and Thumbprint."]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{timestamp:"2024.01",repo:"osseonews/vike-app-cfp"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{timestamp:"2022.04",repo:"Immortalin/vite-plugin-ssr-cloudflare-pages-demo"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["vite-plugin-ssr was the ",e.jsx(s.a,{href:"https://vite-plugin-ssr.com/vike",children:"previous name of Vike"}),"."]}),`
`]}),`
`]}),`
`]})]})}function x(l={}){const{wrapper:s}=l.components||{};return s?e.jsx(s,{...l,children:e.jsx(t,{...l})}):t(l)}const j=Object.freeze(Object.defineProperty({__proto__:null,default:x,pageSectionsExport:u},Symbol.toStringTag,{value:"Module"})),z={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:r}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:o}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:i}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/cloudflare-pages/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}}};export{z as configValuesSerialized};
