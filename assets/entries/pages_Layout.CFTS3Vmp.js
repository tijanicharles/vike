import{j as e,L as t,o as i,i as r}from"../chunks/chunk-CM3GR_x-.js";import{L as n}from"../chunks/chunk-Dn4vnTcg.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */import"../chunks/chunk-DWElet6Q.js";import{U as o}from"../chunks/chunk-CHE4stqa.js";import{I as d}from"../chunks/chunk-SBSsq2Qq.js";/* empty css                      *//* empty css                      */const c=[{pageSectionId:"global-layout",pageSectionLevel:2,pageSectionTitle:"Global layout"},{pageSectionId:"multiple-layouts",pageSectionLevel:2,pageSectionTitle:"Multiple layouts"},{pageSectionId:"nested-layouts",pageSectionLevel:2,pageSectionTitle:"Nested layouts"},{pageSectionId:"data-fetching",pageSectionLevel:2,pageSectionTitle:"Data fetching"},{pageSectionId:"without-vike-react-vue-solid",pageSectionLevel:2,pageSectionTitle:"Without `vike-{react,vue,solid}`"},{pageSectionId:"the-simple-way",pageSectionLevel:4,pageSectionTitle:"The simple way"},{pageSectionId:"with-a-custom-setting",pageSectionLevel:4,pageSectionTitle:"With a custom setting"},{pageSectionId:"nested-layout",pageSectionLevel:4,pageSectionTitle:"Nested Layout"},{pageSectionId:"see-also",pageSectionLevel:2,pageSectionTitle:"See also"}];function a(l){const s={a:"a",blockquote:"blockquote",code:"code",figure:"figure",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...l.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.p,{children:["Environment: client, and server if ",e.jsx(n,{href:"/ssr",children:e.jsx(s.code,{children:"ssr: true"})}),"."]}),`
`,e.jsxs(d,{children:["the ",e.jsx(s.code,{children:"Layout"})," setting"]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"What are layouts?"})}),`
`,e.jsx(s.p,{children:"Your pages will usually share a common visual design."}),`
`,e.jsxs(s.p,{children:["Some pages may share a design while other pages share another design. (For example, two admin pages ",e.jsx(s.code,{children:"/admin/product/@id"})," and ",e.jsx(s.code,{children:"/admin/user/@id"})," sharing the same navigation sidebar, and two marketing pages ",e.jsx(s.code,{children:"/"})," and ",e.jsx(s.code,{children:"/about-us"})," not having any sidebar but sharing a sticky header instead.)"]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"Layout"})," setting enables you to define such shared visual appearance."]}),`
`]}),`
`,e.jsxs(s.p,{children:["The component defined by the ",e.jsx(s.code,{children:"Layout"})," setting wraps the ",e.jsxs(n,{href:"/Page",children:[e.jsx(s.code,{children:"<Page>"})," component"]}),"."]}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"jsx","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"jsx","data-theme":"github-light",style:{display:"grid"},children:[e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"<"}),e.jsx(s.span,{style:{color:"#005CC5"},children:"Layout"}),e.jsx(s.span,{style:{color:"#24292E"},children:'>   ⟸ component defined by the setting "Layout"'})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"  <"}),e.jsx(s.span,{style:{color:"#005CC5"},children:"Page"}),e.jsx(s.span,{style:{color:"#24292E"},children:' /> ⟸ component defined by the setting "Page"'})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"</"}),e.jsx(s.span,{style:{color:"#005CC5"},children:"Layout"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]})]})})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["For integrating tools, we generally recommend using ",e.jsx(n,{href:"/Wrapper",children:e.jsx(s.code,{children:"<Wrapper>"})})," instead."]}),`
`]}),`
`,e.jsx("h2",{id:"global-layout",children:"Global layout"}),`
`,e.jsx(s.p,{children:"You can define a layout that applies to all your pages:"}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"jsx","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"jsx","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// /pages/+Layout.jsx"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(s.span,{style:{color:"#24292E"},children:" { Layout }"})]}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// children includes <Page/>"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"function"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" Layout"}),e.jsx(s.span,{style:{color:"#24292E"},children:"({ "}),e.jsx(s.span,{style:{color:"#E36209"},children:"children"}),e.jsx(s.span,{style:{color:"#24292E"},children:" }) {"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"  return"}),e.jsx(s.span,{style:{color:"#24292E"},children:" <>"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"    <"}),e.jsx(s.span,{style:{color:"#005CC5"},children:"Navigation"}),e.jsx(s.span,{style:{color:"#24292E"},children:"/>"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"    <"}),e.jsx(s.span,{style:{color:"#005CC5"},children:"Content"}),e.jsx(s.span,{style:{color:"#24292E"},children:">{children}</"}),e.jsx(s.span,{style:{color:"#005CC5"},children:"Content"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"  </>"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"}"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"function"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" Navigation"}),e.jsx(s.span,{style:{color:"#24292E"},children:"() { "}),e.jsx(s.span,{style:{color:"#6A737D"},children:"/* ... */"}),e.jsx(s.span,{style:{color:"#24292E"},children:" }"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"function"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" Content"}),e.jsx(s.span,{style:{color:"#24292E"},children:"() { "}),e.jsx(s.span,{style:{color:"#6A737D"},children:"/* ... */"}),e.jsx(s.span,{style:{color:"#24292E"},children:" }"})]})]})})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Why ",e.jsx(s.code,{children:"/pages/+Layout.jsx"})," applies to all pages is explained at ",e.jsx(n,{href:"/config#inheritance"}),"."]}),`
`]}),`
`,e.jsx("h2",{id:"multiple-layouts",children:"Multiple layouts"}),`
`,e.jsx(s.p,{children:"You can define several layouts that apply to different groups of pages."}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"yaml","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"yaml","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"# Marketing pages share a layout"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#032F62"},children:"pages/(marketing)/+Layout.js"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#032F62"},children:"pages/(marketing)/index/+Page.js"}),e.jsx(s.span,{style:{color:"#6A737D"},children:"    # URL: /"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#032F62"},children:"pages/(marketing)/about/+Page.js"}),e.jsx(s.span,{style:{color:"#6A737D"},children:"    # URL: /about"})]}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"# Admin pages share another layout"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#032F62"},children:"pages/admin-panel/+Layout.js"})}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#032F62"},children:"pages/admin-panel/index/+Page.js"}),e.jsx(s.span,{style:{color:"#6A737D"},children:"    # URL: /admin-panel"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#032F62"},children:"pages/admin-panel/users/+Page.js"}),e.jsx(s.span,{style:{color:"#6A737D"},children:"    # URL: /admin-panel/users"})]})]})})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["See ",e.jsx(n,{href:"/config#inheritance"}),"."]}),`
`]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["The directory ",e.jsx(s.code,{children:"(marketing)"})," is skipped by Filesystem Routing, see ",e.jsx(n,{href:"/routing#filesystem-routing"}),"."]}),`
`]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["Setting a default ",e.jsx(s.code,{children:"<Layout>"})," that is overridable isn't currently supported, see ",e.jsxs(s.a,{href:"https://github.com/vikejs/vike/issues/1692",children:["#1692 - Add ",e.jsx(s.code,{children:"override"})," and ",e.jsx(s.code,{children:"default"})," options for cumulative configs"]}),"."]}),`
`]}),`
`,e.jsx("h2",{id:"nested-layouts",children:"Nested layouts"}),`
`,e.jsx(s.p,{children:"You can define layouts that nest into each other:"}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"yaml","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"yaml","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"# Global outer layout that applies to all pages"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#032F62"},children:"pages/+Layout.js"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"# Inner layout nested into the global outer layout, for marketing pages"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#032F62"},children:"pages/(marketing)/+Layout.js"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"# Inner layout nested into the global outer layout, for admin pages"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#032F62"},children:"pages/admin-panel/+Layout.js"})})]})})}),`
`,e.jsxs(s.p,{children:["Here ",e.jsx(s.code,{children:"pages/+Layout.js"})," applies to all pages, including the marketing and admin pages."]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"Layout"})," setting is cumulative: ",e.jsx(s.code,{children:"pages/(marketing)/+Layout.js"})," doesn't override ",e.jsx(s.code,{children:"pages/+Layout.js"}),". Instead, the ",e.jsx(s.code,{children:"<Layout>"})," components nest within each other:"]}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"jsx","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"jsx","data-theme":"github-light",style:{display:"grid"},children:[e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"<"}),e.jsx(s.span,{style:{color:"#005CC5"},children:"Layout"}),e.jsx(s.span,{style:{color:"#24292E"},children:">      ⟸ pages/+Layout.js"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"  <"}),e.jsx(s.span,{style:{color:"#005CC5"},children:"Layout"}),e.jsx(s.span,{style:{color:"#24292E"},children:">    ⟸ pages/(marketing)/+Layout.js"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"    <"}),e.jsx(s.span,{style:{color:"#005CC5"},children:"Page"}),e.jsx(s.span,{style:{color:"#24292E"},children:" />  ⟸ pages/(marketing)/about-us/+Page.js"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"  </"}),e.jsx(s.span,{style:{color:"#005CC5"},children:"Layout"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"</"}),e.jsx(s.span,{style:{color:"#005CC5"},children:"Layout"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]})]})})}),`
`]}),`
`,e.jsx(s.p,{children:"You can also implement same-page navigations such as tabs:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`/product/42/pricing                   /product/42/reviews
+------------------+                  +-----------------+
| Macbook          |                  | Macbook         |
| ...              |                  | ...             |
| +--------------+ |                  | +-------------+ |
| | Pricing      | |  +------------>  | | Reviews     | |
| | ...          | |                  | | ...         | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+
`})}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"yaml","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"yaml","data-theme":"github-light",style:{display:"grid"},children:[e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#032F62"},children:"pages/+Layout.js"}),e.jsx(s.span,{style:{color:"#6A737D"},children:"                      # Global layout (shared among all pages)"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#032F62"},children:"pages/product/@id/+Layout.js"}),e.jsx(s.span,{style:{color:"#6A737D"},children:'          # Outer content ("Macbook" ...)'})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#032F62"},children:"pages/product/@id/pricing/+Page.js"}),e.jsx(s.span,{style:{color:"#6A737D"},children:'    # Inner content ("Pricing" ...)'})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#032F62"},children:"pages/product/@id/reviews/+Page.js"}),e.jsx(s.span,{style:{color:"#6A737D"},children:'    # Inner content ("Reviews" ...)'})]})]})})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["If your nested layout isn't associated with a URL (if the pricing and reviews tabs share the same URL ",e.jsx(s.code,{children:"/product/42"}),") then you can use a stateful component instead of ",e.jsx(s.code,{children:"<Layout>"}),"."]}),`
`]}),`
`,e.jsx(s.p,{children:"To avoid the page scrolling to the top, make sure to use:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(n,{href:"/keepScrollPosition"})," or"]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/clientRouting#settings",children:e.jsx(s.code,{children:'<a href="/product/42/reviews" keep-scroll-position />'})}),`
`]}),`
`]}),`
`,e.jsx(s.p,{children:"Examples:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/vikejs/vike-react/blob/main/examples/full/pages/starship",children:"React"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/vikejs/vike-vue/blob/main/examples/full/pages/starship",children:"Vue"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://github.com/vikejs/vike-solid/tree/main/examples/full/pages/starship",children:"Solid"})}),`
`]}),`
`,e.jsx("h2",{id:"data-fetching",children:"Data fetching"}),`
`,e.jsx(s.p,{children:"To fetch data for your layouts see:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/data-fetching#tools"}),`
`]}),`
`,e.jsx(s.li,{children:e.jsxs(s.a,{href:"https://github.com/vikejs/vike/issues/1833",children:["#1833 - Make ",e.jsx(s.code,{children:"+data"})," and ",e.jsx(s.code,{children:"+onBeforeRender"})," cumulative"]})}),`
`]}),`
`,e.jsxs("h2",{id:"without-vike-react-vue-solid",children:["Without ",e.jsx("code",{children:"vike-{react,vue,solid}"})]}),`
`,e.jsxs(s.p,{children:["The following is for users that don't use a ",e.jsx(o,{}),"."]}),`
`,e.jsx("h4",{id:"the-simple-way",children:"The simple way"}),`
`,e.jsxs(s.p,{children:["A simple way to implement layouts is to manually wrap your ",e.jsx(s.code,{children:"<Page>"})," components:"]}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"jsx","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"jsx","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// /pages/index/+Page.js"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(s.span,{style:{color:"#24292E"},children:" { Page }"})]}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E"},children:" { LayoutDefault } "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62"},children:" '../layouts/LayoutDefault'"})]}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"function"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" Page"}),e.jsx(s.span,{style:{color:"#24292E"},children:"() {"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"  return"}),e.jsx(s.span,{style:{color:"#24292E"},children:" <>"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"    <"}),e.jsx(s.span,{style:{color:"#005CC5"},children:"LayoutDefault"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"      {"}),e.jsx(s.span,{style:{color:"#6A737D"},children:"/* ... */"}),e.jsx(s.span,{style:{color:"#24292E"},children:"}"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"    </"}),e.jsx(s.span,{style:{color:"#005CC5"},children:"LayoutDefault"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"  </>"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsx(s.figure,{"data-rehype-pretty-code-figure":"",children:e.jsx(s.pre,{style:{backgroundColor:"#fff",color:"#24292e"},tabIndex:"0","data-language":"jsx","data-theme":"github-light",children:e.jsxs(s.code,{"data-language":"jsx","data-theme":"github-light",style:{display:"grid"},children:[e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#6A737D"},children:"// /pages/admin/+Page.js"})}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"export"}),e.jsx(s.span,{style:{color:"#24292E"},children:" { Page }"})]}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E"},children:" { LayoutDashboard } "}),e.jsx(s.span,{style:{color:"#D73A49"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62"},children:" '../layouts/LayoutDashboard'"})]}),`
`,e.jsx(s.span,{"data-line":"",children:" "}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"function"}),e.jsx(s.span,{style:{color:"#6F42C1"},children:" Page"}),e.jsx(s.span,{style:{color:"#24292E"},children:"() {"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#D73A49"},children:"  return"}),e.jsx(s.span,{style:{color:"#24292E"},children:" <>"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"    <"}),e.jsx(s.span,{style:{color:"#005CC5"},children:"LayoutDashboard"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"      {"}),e.jsx(s.span,{style:{color:"#6A737D"},children:"/* ... */"}),e.jsx(s.span,{style:{color:"#24292E"},children:"}"})]}),`
`,e.jsxs(s.span,{"data-line":"",children:[e.jsx(s.span,{style:{color:"#24292E"},children:"    </"}),e.jsx(s.span,{style:{color:"#005CC5"},children:"LayoutDashboard"}),e.jsx(s.span,{style:{color:"#24292E"},children:">"})]}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"  </>"})}),`
`,e.jsx(s.span,{"data-line":"",children:e.jsx(s.span,{style:{color:"#24292E"},children:"}"})})]})})}),`
`,e.jsx("h4",{id:"with-a-custom-setting",children:"With a custom setting"}),`
`,e.jsxs(s.p,{children:["You can implement the ",e.jsx(s.code,{children:"Layout"})," setting yourself by using ",e.jsx(n,{href:"/meta",children:"meta"}),"."]}),`
`,e.jsx(s.p,{children:"Examples:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/meta#example-layout",doNotInferSectionTitle:!0}),`
`]}),`
`,e.jsx(s.li,{children:e.jsxs(s.a,{href:"https://github.com/vikejs/vike-react/blob/main/packages/vike-react",children:[e.jsx(s.code,{children:"vike-react"})," source code"]})}),`
`,e.jsx(s.li,{children:e.jsxs(s.a,{href:"https://github.com/vikejs/vike-vue/blob/main/packages/vike-vue",children:[e.jsx(s.code,{children:"vike-vue"})," source code"]})}),`
`,e.jsx(s.li,{children:e.jsxs(s.a,{href:"https://github.com/vikejs/vike-solid/blob/main/vike-solid",children:[e.jsx(s.code,{children:"vike-solid"})," source code"]})}),`
`]}),`
`,e.jsx("h4",{id:"nested-layout",children:"Nested Layout"}),`
`,e.jsxs(s.p,{children:["See the ",e.jsx(n,{href:"#nested-layouts"})," section above. For smooth nested layout navigation, we recommend using ",e.jsx(n,{href:"/clientRouting",children:"Client Routing"}),". (Using ",e.jsx(n,{href:"/server-routing",children:"Server Routing"})," leads to full page reloads which usually isn't acceptable for same-page navigations.)"]}),`
`,e.jsx("h2",{id:"see-also",children:"See also"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/Wrapper"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/usePageContext"}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(n,{href:"/Page"}),`
`]}),`
`]})]})}function h(l={}){const{wrapper:s}=l.components||{};return s?e.jsx(s,{...l,children:e.jsx(a,{...l})}):a(l)}const p=Object.freeze(Object.defineProperty({__proto__:null,default:h,pageSectionsExport:c},Symbol.toStringTag,{value:"Module"})),D={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Layout:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/Layout",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:t}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"@brillout/docpress/renderer/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:i}},TopNavigation:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+TopNavigation.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:r}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/Layout/+Page.mdx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:p}}};export{D as configValuesSerialized};
