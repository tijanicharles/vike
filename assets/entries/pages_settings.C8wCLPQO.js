import{j as e,L as l,o as d,i as o}from"../chunks/chunk-B55XmmrA.js";import{L as r}from"../chunks/chunk-DgJHo8Pc.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-DujD3LDN.js";/* empty css                      */function s({children:i}){return e.jsx("span",{style:{opacity:.85,fontSize:"0.9em",verticalAlign:"middle"},children:e.jsx("code",{children:i})})}const c=[{pageSectionId:"basic",pageSectionLevel:2,pageSectionTitle:"Basic"},{pageSectionId:"html",pageSectionLevel:3,pageSectionTitle:"HTML"},{pageSectionId:"advanced",pageSectionLevel:2,pageSectionTitle:"Advanced"},{pageSectionId:"see-also",pageSectionLevel:2,pageSectionTitle:"See also"}];function t(i){const n={a:"a",blockquote:"blockquote",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...i.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:["List of built-in settings. (You can ",e.jsx(r,{href:"/meta",children:"create your own settings"}),".)"]}),`
`,e.jsx("h2",{id:"basic",children:"Basic"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/Page",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"Page"})})}),": The page's root component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/Layout",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"Layout"})})}),": The page's layout component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/Wrapper",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"Wrapper"})})}),": Component(s) that wrap the page's root component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/routing",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"route"})})}),": ",e.jsx(s,{children:"string | Function"})," The page's route."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/prerender",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"prerender"})})}),": Whether to ",e.jsx(r,{href:"/pre-rendering",children:"pre-render"})," the page, and pre-rendering settings."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/client",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"client"})})}),": ",e.jsx(s,{children:"string"})," Add client code."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/redirects",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"redirects"})})}),": Permanent redirections (HTTP status code ",e.jsx(n.code,{children:"301"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/keepScrollPosition",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"keepScrollPosition"})})}),": Whether the page scrolls to the top upon navigation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/prefetchStaticAssets",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"prefetchStaticAssets"})})}),": Link prefetching settings."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/base-url",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"baseAssets"})})}),": Base URL of server."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/base-url",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"baseServer"})})}),": Base URL of static assets."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/extends",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"extends"})})}),": Install ",e.jsx(r,{href:"/extensions"}),"."]}),`
`]}),`
`,e.jsx("h3",{id:"html",children:"HTML"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/Head",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"Head"})})}),": Add arbitrary ",e.jsx(n.code,{children:"<head>"})," tags."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/title",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"title"})})}),": Set the page's title."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/description",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"description"})})}),": Set the page's description."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/image",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"image"})})}),": Set the page's preview image upon URL sharing."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/viewport",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"viewport"})})}),": Set the page's viewport size on mobile devices."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/lang",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"lang"})})}),": Set the page's language (",e.jsx(n.code,{children:"<html lang>"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/htmlAttributes",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"htmlAttributes"})})}),": Add tag attributes such as ",e.jsx(n.code,{children:'<html class="dark">'}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/bodyAttributes",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"bodyAttributes"})})}),": Add tag attributes such as ",e.jsx(n.code,{children:'<body class="dark">'}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/bodyHtmlBegin",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"bodyHtmlBegin"})})}),": Insert HTML at the beginning of ",e.jsx(n.code,{children:"<body>"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/bodyHtmlEnd",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"bodyHtmlEnd"})})}),": Insert HTML at the end of ",e.jsx(n.code,{children:"<body>"}),"."]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["You create your own custom HTML settings, see ",e.jsx(r,{href:"/head-tags#custom-settings"}),"."]}),`
`]}),`
`,e.jsx("h2",{id:"advanced",children:"Advanced"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Most users don't need to know about these settings."}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/meta",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"meta"})})}),": Create new hooks or settings, or modify existing ones."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/passToClient",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"passToClient"})})}),": ",e.jsx(s,{children:"string[]"})," Determines what ",e.jsx(n.code,{children:"pageContext"})," values are sent to the client-side."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/clientRouting",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"clientRouting"})})}),": ",e.jsx(s,{children:"boolean"})," Enable ",e.jsx(r,{href:"/client-routing",children:"Client Routing"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/hydrationCanBeAborted",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"hydrationCanBeAborted"})})}),": ",e.jsx(s,{children:"boolean"}),"  Whether your ",e.jsx(r,{text:"UI framework",href:"/ui-frameworks"})," allows the ",e.jsx(r,{href:"/hydration",children:"hydration"})," to be aborted."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/url-normalization",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"trailingSlash"})})}),": Whether URLs should end with a trailing slash."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/url-normalization",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"disableUrlNormalization"})})}),": Disable automatic URL normalization."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/reactStrictMode",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"reactStrictMode"})})}),": ",e.jsx(n.code,{children:"vike-react"})," Whether to use React's ",e.jsx(n.code,{children:"<StrictMode>"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/clientHooks",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"clientHooks"})})}),": ",e.jsx(s,{children:"boolean"})," Whether hooks are loaded on the client-side."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/filesystemRoutingRoot",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"filesystemRoutingRoot"})})}),": URL root for ",e.jsx(r,{href:"/filesystem-routing",children:"Filesystem Routing"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"/injectScriptsAt",children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"injectScriptsAt"})})}),": Where scripts are injected in the HTML."]}),`
`]}),`
`,e.jsx("h2",{id:"see-also",children:"See also"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{href:"/hooks"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(r,{href:"/config"}),`
`]}),`
`]})]})}function h(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}const a=Object.freeze(Object.defineProperty({__proto__:null,default:h,pageSectionsExport:c},Symbol.toStringTag,{value:"Module"})),v={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:l}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:d}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:o}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/settings/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:a}}};export{v as configValuesSerialized};
