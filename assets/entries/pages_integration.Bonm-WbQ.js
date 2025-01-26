import{j as e,L as r,o as i,i as t}from"../chunks/chunk-B55XmmrA.js";import{L as l}from"../chunks/chunk-DgJHo8Pc.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-DujD3LDN.js";import{I as o}from"../chunks/chunk-D6B6BYnQ.js";/* empty css                      */import{M as c}from"../chunks/chunk-e2ZjTqg_.js";/* empty css                      */import"../chunks/chunk-D-oex3SH.js";const d=[{pageSectionId:"vanilla-ui-tools",pageSectionLevel:2,pageSectionTitle:"Vanilla UI tools"},{pageSectionId:"analytics",pageSectionLevel:2,pageSectionTitle:"Analytics"},{pageSectionId:"component-libraries",pageSectionLevel:2,pageSectionTitle:"Component libraries"},{pageSectionId:"data-fetching",pageSectionLevel:2,pageSectionTitle:"Data fetching"},{pageSectionId:"service-worker",pageSectionLevel:2,pageSectionTitle:"Service worker"},{pageSectionId:"without-vike-react-vue-solid",pageSectionLevel:2,pageSectionTitle:"Without `vike-{react,vue,solid}`"},{pageSectionId:"see-also",pageSectionLevel:2,pageSectionTitle:"See also"}];function a(s){const n={a:"a",blockquote:"blockquote",code:"code",figure:"figure",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{}),`
`,e.jsx("h2",{id:"vanilla-ui-tools",children:"Vanilla UI tools"}),`
`,e.jsxs(n.p,{children:["To initialize UI vanilla tools (jQuery, tooltips, ...) you can use the ",e.jsxs(l,{href:"/onHydrationEnd",children:[e.jsx(n.code,{children:"onHydrationEnd()"})," hook"]}),"."]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// pages/+onHydrationEnd.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" default"}),e.jsx(n.span,{style:{color:"#24292E"},children:" () "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"=>"}),e.jsx(n.span,{style:{color:"#24292E"},children:" {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // Initializing vanilla JS component libraries, for example tooltips, after hydration."})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"  tooltip."}),e.jsx(n.span,{style:{color:"#6F42C1"},children:"init"}),e.jsx(n.span,{style:{color:"#24292E"},children:"(document."}),e.jsx(n.span,{style:{color:"#6F42C1"},children:"querySelectorAll"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#032F62"},children:"'.tooltip'"}),e.jsx(n.span,{style:{color:"#24292E"},children:"))"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // Or some vanilla JS modal library"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#6F42C1"},children:"  $"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#032F62"},children:"'.my-modals'"}),e.jsx(n.span,{style:{color:"#24292E"},children:")."}),e.jsx(n.span,{style:{color:"#6F42C1"},children:"modal"}),e.jsx(n.span,{style:{color:"#24292E"},children:"()"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsx("h2",{id:"analytics",children:"Analytics"}),`
`,e.jsxs(n.p,{children:["To inject external ",e.jsx(n.code,{children:"<script>"})," tags, you can use:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"/Head",noBreadcrumb:!0}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"/bodyHtmlEnd"}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["You can use the ",e.jsx(l,{href:"/client",children:e.jsx(n.code,{children:"+client.js"})})," file to initialize analytics code."]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// pages/+client.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"someAnalyticsLibrary."}),e.jsx(n.span,{style:{color:"#6F42C1"},children:"init"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#6A737D"},children:"/* ... */"}),e.jsx(n.span,{style:{color:"#24292E"},children:")"})]})]})})}),`
`,e.jsxs(n.p,{children:["That way you can install tools such as ",e.jsx(n.a,{href:"https://developers.google.com/analytics",children:"Google Analytics"}),", ",e.jsx(n.a,{href:"https://plausible.io",children:"Plausible"}),", or ",e.jsx(n.a,{href:"https://segment.com",children:"Segment"}),"."]}),`
`,e.jsxs(n.p,{children:["You can also load and/or initialize analytics code only after the hydration ends by using the ",e.jsx(l,{href:"/onHydrationEnd",children:"+onHydrationEnd"})," hook."]}),`
`,e.jsx("h2",{id:"component-libraries",children:"Component libraries"}),`
`,e.jsx(n.p,{children:"Some component libraries need initialization, most notably vanilla component libraries such as Bootstrap."}),`
`,e.jsx(n.p,{children:"To initialize code, you can use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"/onHydrationEnd",noBreadcrumb:!0}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"/client",noBreadcrumb:!0}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"To inject external scripts, you can use:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"/Head",noBreadcrumb:!0}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"/bodyHtmlEnd",noBreadcrumb:!0}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Examples:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"/vuetify"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"/mantine"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"/daisyui"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"/examples#component-libraries",children:"... more"}),`
`]}),`
`]}),`
`,e.jsx("h2",{id:"data-fetching",children:"Data fetching"}),`
`,`
`,e.jsxs(n.p,{children:["Instead of using ",e.jsxs(l,{href:"/data",children:["the ",e.jsx(n.code,{children:"+data"})," hook"]}),", you can use ",e.jsx(l,{href:"/data-fetching#tools",children:"tools to fetch the page's initial data"}),"."]}),`
`,e.jsx(c,{children:e.jsxs(n.p,{children:["The following explains how to integrate tools for fetching initial data. Instead of manually integrating tools yourself, we generally recommend using ",e.jsx(l,{href:"/extensions",children:"Vike extensions"})," such as ",e.jsx(n.a,{href:"https://github.com/vikejs/vike-react/tree/main/packages/vike-react-apollo#readme",children:e.jsx(n.code,{children:"vike-react-apollo"})})," or ",e.jsx(n.a,{href:"https://github.com/vikejs/vike-vue/tree/main/packages/vike-vue-query#readme",children:e.jsx(n.code,{children:"vike-vue-query"})}),"."]})}),`
`,e.jsxs(n.p,{children:["Some data-fetching tools enable you to fetch a page's initial data on a component-level instead of ",e.jsxs(l,{href:"/data-fetching#data-hook",children:["using the page-level Vike hook ",e.jsx(n.code,{children:"data()"})]})]}),`
`,e.jsx(n.p,{children:"On a high-level, the integration works like this:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"The initial data of a component is fetched while server-side rendering the component."}),`
`,e.jsxs(n.li,{children:["The initial data is serialized and passed to the client. (So that the client uses the exact same data, avoiding double-fetching and ",e.jsx(l,{href:"/hydration-mismatch",children:"hydration mismatches"}),".)"]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["If ",e.jsx(l,{href:"/ssr",children:"SSR is disabled"}),", then the data is only fetched on the client-side. (The component's data is fetched where the component is loaded and executed.)"]}),`
`]}),`
`,e.jsxs(n.p,{children:["Some tools provide utilities to integrate more or less automatically. For example ",e.jsx(l,{href:"/apollo-graphql",children:"Apollo GraphQL"})," provides many utilities to make integration easy."]}),`
`,e.jsx(n.p,{children:"A fully manual integration can be done as follows:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Determine the initial data on the server side (after SSR) and ",e.jsxs(l,{href:"/pageContext#custom",children:["make it available as ",e.jsx(n.code,{children:"pageContext.dataInitial"})]}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["You can configure/initialize the tool's client at ",e.jsx(l,{href:"/onBeforeRenderHtml",children:e.jsx(n.code,{children:"onBeforeRenderHtml()"})}),":"]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// pages/+onBeforeRenderHtml.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { init } "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'awesome-data-tool'"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" function"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" onBeforeRenderHtml"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#E36209"},children:"pageContext"}),e.jsx(n.span,{style:{color:"#24292E"},children:") {"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"  pageContext.dataClient "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"="}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" init"}),e.jsx(n.span,{style:{color:"#24292E"},children:"({ someConfiguration: "}),e.jsx(n.span,{style:{color:"#032F62"},children:"'value'"}),e.jsx(n.span,{style:{color:"#24292E"},children:" })"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsxs(n.p,{children:["You can determine the initially fetched data at ",e.jsx(l,{href:"/onAfterRenderHtml",children:e.jsx(n.code,{children:"onAfterRenderHtml()"})}),":"]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// pages/+onAfterRenderHtml.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" function"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" onAfterRenderHtml"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#E36209"},children:"pageContext"}),e.jsx(n.span,{style:{color:"#24292E"},children:") {"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"  pageContext.dataInitial "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"="}),e.jsx(n.span,{style:{color:"#24292E"},children:" pageContext.dataClient."}),e.jsx(n.span,{style:{color:"#6F42C1"},children:"getFetchedData"}),e.jsx(n.span,{style:{color:"#24292E"},children:"()"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsxs(n.p,{children:["If you use React then you may also need to use ",e.jsx(l,{href:"/Wrapper",children:e.jsx(n.code,{children:"+Wrapper"})}),":"]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// pages/+Wrapper.jsx"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { Provider } "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'awesome-data-tool/react'"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { usePageContext } "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'vike-react/usePageContext'"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" function"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" Wrapper"}),e.jsx(n.span,{style:{color:"#24292E"},children:"({ "}),e.jsx(n.span,{style:{color:"#E36209"},children:"children"}),e.jsx(n.span,{style:{color:"#24292E"},children:" }) {"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  const"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" pageContext"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" usePageContext"}),e.jsx(n.span,{style:{color:"#24292E"},children:"()"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  return"}),e.jsx(n.span,{style:{color:"#24292E"},children:" <"}),e.jsx(n.span,{style:{color:"#005CC5"},children:"Provider"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" client"}),e.jsx(n.span,{style:{color:"#D73A49"},children:"="}),e.jsx(n.span,{style:{color:"#24292E"},children:"{pageContext.dataClient}>{children}</"}),e.jsx(n.span,{style:{color:"#005CC5"},children:"Provider"}),e.jsx(n.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Make ",e.jsx(n.code,{children:"pageContext.dataInitial"})," available to the client-side by using ",e.jsx(l,{href:"/passToClient",children:e.jsx(n.code,{children:"passToClient"})}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["On the client-side, initialize with ",e.jsx(n.code,{children:"pageContext.dataInitial"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Typically at ",e.jsx(l,{href:"/onBeforeRenderClient",children:e.jsx(n.code,{children:"onBeforeRenderClient()"})}),":"]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// pages/+onBeforeRenderClient.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { initClient } "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'awesome-data-tool'"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" function"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" onBeforeRenderClient"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#E36209"},children:"pageContext"}),e.jsx(n.span,{style:{color:"#24292E"},children:") {"})]}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"  pageContext.dataClient "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"="}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" initClient"}),e.jsx(n.span,{style:{color:"#24292E"},children:"({ data: pageContext.initialData })"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"See also:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"/examples#data-fetching"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"/data-fetching"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"/store"}),`
`]}),`
`]}),`
`,e.jsx("h2",{id:"service-worker",children:"Service worker"}),`
`,e.jsxs(n.p,{children:["You can use the ",e.jsx(l,{href:"/client",children:e.jsx(n.code,{children:"+client.js"})})," file to initialize ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API",children:"service workers"}),"."]}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// pages/+client.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// Initializing a Service Worker"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#24292E"},children:"navigator.serviceWorker."}),e.jsx(n.span,{style:{color:"#6F42C1"},children:"register"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#6A737D"},children:"/* ... */"}),e.jsx(n.span,{style:{color:"#24292E"},children:")"})]})]})})}),`
`,e.jsxs("h2",{id:"without-vike-react-vue-solid",children:["Without ",e.jsx("code",{children:"vike-{react,vue,solid}"})]}),`
`,e.jsxs(n.p,{children:["You can manually integrate React/Vue/Solid (",e.jsx(l,{href:"/ui-frameworks",children:"or any other UI framework"}),") yourself:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"/react#custom-integration"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"/vue#custom-integration"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"/solid#custom-integration"}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"You gain control not only over how React/Vue/Solid is integrated, but also how React/Vue/Solid tools are integrated."}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// /renderer/+onRenderHtml.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// Environment: server"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { escapeInject, dangerouslySkipEscape } "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'vike/server'"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// This can be any UI framework (React, Vue, Solid, Svelte, ...)"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(n.span,{style:{color:"#24292E"},children:" renderToHtml "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'some-ui-framework'"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { onRenderHtml }"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"async"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" function"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" onRenderHtml"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#E36209"},children:"pageContext"}),e.jsx(n.span,{style:{color:"#24292E"},children:") {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // `Page` is the `export { Page }` of our +Page.js files;"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // Vike doesn't do anything with `Page` and just makes it available as"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // `pageContext.Page`; we can export any `Page` value we want and do whatever we want with it."})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  const"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { "}),e.jsx(n.span,{style:{color:"#005CC5"},children:"Page"}),e.jsx(n.span,{style:{color:"#24292E"},children:" } "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"="}),e.jsx(n.span,{style:{color:"#24292E"},children:" pageContext"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // We control how we use our UI framework to render our pages to HTML"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  const"}),e.jsx(n.span,{style:{color:"#005CC5"},children:" pageHtml"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" ="}),e.jsx(n.span,{style:{color:"#D73A49"},children:" await"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" renderToHtml"}),e.jsx(n.span,{style:{color:"#24292E"},children:"(Page)"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // We control the entire HTML"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  return"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" escapeInject"}),e.jsx(n.span,{style:{color:"#032F62"},children:"`<html>"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"    <body>"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"      <head>"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"        <!-- Some libraries recommend loading code from a CDN -->"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:'        <script src="https://cdn.example.com/some-library/3.3.7/lib.min.js"><\/script>'})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"      </head>"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:'      <div id="root">'})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#032F62"},children:"        ${"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:"dangerouslySkipEscape"}),e.jsx(n.span,{style:{color:"#032F62"},children:"("}),e.jsx(n.span,{style:{color:"#24292E"},children:"pageHtml"}),e.jsx(n.span,{style:{color:"#032F62"},children:")"}),e.jsx(n.span,{style:{color:"#032F62"},children:"}"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"      </div>"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"    </body>"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#032F62"},children:"  </html>`"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsx(n.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(n.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"js","data-theme":"github-light",children:e.jsxs(n.code,{"data-language":"js","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// /renderer/+onRenderClient.js"})}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"// Environment: browser"})}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { onRenderClient }"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { hydrateDom } "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(n.span,{style:{color:"#032F62"},children:" 'some-ui-framework'"})]}),`
`,e.jsx(n.span,{"data-line":"",children:" "}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"async"}),e.jsx(n.span,{style:{color:"#D73A49"},children:" function"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" onRenderClient"}),e.jsx(n.span,{style:{color:"#24292E"},children:"("}),e.jsx(n.span,{style:{color:"#E36209"},children:"pageContext"}),e.jsx(n.span,{style:{color:"#24292E"},children:") {"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // Here we can integrate performance measurement tools, e.g. to measure hydration performance"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  const"}),e.jsx(n.span,{style:{color:"#24292E"},children:" { "}),e.jsx(n.span,{style:{color:"#005CC5"},children:"Page"}),e.jsx(n.span,{style:{color:"#24292E"},children:" } "}),e.jsx(n.span,{style:{color:"#D73A49"},children:"="}),e.jsx(n.span,{style:{color:"#24292E"},children:" pageContext"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#6A737D"},children:"  // We control how our pages are hydrated"})}),`
`,e.jsxs(n.span,{"data-line":"",children:[e.jsx(n.span,{style:{color:"#D73A49"},children:"  await"}),e.jsx(n.span,{style:{color:"#6F42C1"},children:" hydrateDom"}),e.jsx(n.span,{style:{color:"#24292E"},children:"(Page)"})]}),`
`,e.jsx(n.span,{"data-line":"",children:e.jsx(n.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsx(n.p,{children:"See:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"/onRenderClient"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"/onRenderHtml"}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Since you control how your pages are rendered, you can use any tool you want without any restrictions."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Any UI framework (React 16, React 17, Vue 2, Vue 3, petite-vue, Svelte, Solid, Preact, ...)"}),`
`,e.jsx(n.li,{children:"Any UI library (Vuex, Redux, Pinia, Relay, Apollo GraphQL, Recoil, ...)"}),`
`,e.jsx(n.li,{children:"Any CSS framework (Tailwind CSS, Bulma, Bootstrap, Material Design, ...)"}),`
`,e.jsx(n.li,{children:"Any client-side library (Vanilla JS component libraries, Bugsnag, Sentry, jQuery, Google Analytics, ...)"}),`
`,e.jsx(n.li,{children:"Any browser technology (Service Workers, PWA, ...)"}),`
`,e.jsx(n.li,{children:"Etc."}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["The Vike extensions ",e.jsx(n.code,{children:"vike-react"}),"/",e.jsx(n.code,{children:"vike-vue"}),"/",e.jsx(n.code,{children:"vike-solid"})," aim to be almost as flexible. If you reach a limitation you believe is caused by ",e.jsx(n.code,{children:"vike-{react,vue,solid}"})," then ",e.jsx(l,{href:"/extension-vs-custom",children:"reach out before considering going for a manual integration"}),"."]}),`
`]}),`
`,e.jsx("h2",{id:"see-also",children:"See also"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(l,{href:"/examples"}),`
`]}),`
`]})]})}function h(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:h,pageSectionsExport:d},Symbol.toStringTag,{value:"Module"})),w={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:r}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:i}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:t}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/integration/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:p}}};export{w as configValuesSerialized};
