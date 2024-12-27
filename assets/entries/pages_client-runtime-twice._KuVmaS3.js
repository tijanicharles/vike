import{j as e,L as a,o as r,i as n}from"../chunks/chunk-CM3GR_x-.js";/* empty css                      */import"../chunks/chunk-DWElet6Q.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */const l=[];function o(i){const t={code:"code",figure:"figure",p:"p",pre:"pre",span:"span",...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.p,{children:"If you get this warning:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`Client runtime loaded twice
`})}),`
`,e.jsx(t.p,{children:"Then this means that the page has loaded more than one copy of Vike's client runtime. In other words, the client-side bundle of the page includes Vike's client runtime twice (or more)."}),`
`,e.jsx(t.p,{children:"In order to reduce the size of your client, make sure that the client-side JavaScript of a given page includes Vike's client runtime only once."}),`
`,e.jsx(t.p,{children:"You can, for example with Unix, inspect where Vike's client runtime is included:"}),`
`,e.jsx(t.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(t.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"bash","data-theme":"github-light",children:e.jsxs(t.code,{"data-language":"bash","data-theme":"github-light",style:{display:"grid"},children:[e.jsxs(t.span,{"data-line":"",children:[e.jsx(t.span,{style:{color:"#005CC5"},children:"cd"}),e.jsx(t.span,{style:{color:"#032F62"},children:" dist/client/"})]}),`
`,e.jsxs(t.span,{"data-line":"",children:[e.jsx(t.span,{style:{color:"#6F42C1"},children:"grep"}),e.jsx(t.span,{style:{color:"#005CC5"},children:" -r"}),e.jsx(t.span,{style:{color:"#032F62"},children:" 'loaded twice'"})]})]})})})]})}function d(i={}){const{wrapper:t}=i.components||{};return t?e.jsx(t,{...i,children:e.jsx(o,{...i})}):o(i)}const s=Object.freeze(Object.defineProperty({__proto__:null,default:d,pageSectionsExport:l},Symbol.toStringTag,{value:"Module"})),T={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:a}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:r}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:n}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/client-runtime-twice/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:s}}};export{T as configValuesSerialized};
