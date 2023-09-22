export const errBabelReact = {
  code: 'BABEL_PARSE_ERROR',
  reasonCode: 'UnexpectedToken',
  loc: { line: 7, column: 20, index: 208 },
  pos: 208,
  plugin: 'vite:react-babel',
  id: '/home/rom/code/vike/examples/react-full/renderer/PageShell.tsx',
  pluginCode:
    "import React from 'react'\nimport logoUrl from './logo.svg'\nimport { PageContextProvider } from './usePageContext'\nimport { Link } from './Link'\nimport type { PageContext } from './types'\n\nexport { PageShell }}\n\nfunction PageShell({ pageContext, children }: { pageContext: PageContext; children: React.ReactNode }) {\n  return (\n    <React.StrictMode>\n      <PageContextProvider pageContext={pageContext}>\n        <Layout>\n          <Sidebar>\n            <Logo />\n            <Link href=\"/\">Welcome</Link>\n            <Link href=\"/markdown\">Markdown</Link>\n            <Link href=\"/star-wars\">Data Fetching</Link>\n            <Link href=\"/hello\">Routing</Link>\n          </Sidebar>\n          <Content>{children}</Content>\n        </Layout>\n      </PageContextProvider>\n    </React.StrictMode>\n  )\n}\n\nfunction Layout({ children }: { children: React.ReactNode }) {\n  return (\n    <div\n      style={{\n        display: 'flex',\n        maxWidth: 900,\n        margin: 'auto'\n      }}\n    >\n      {children}\n    </div>\n  )\n}\n\nfunction Sidebar({ children }: { children: React.ReactNode }) {\n  return (\n    <div\n      id=\"sidebar\"\n      style={{\n        padding: 20,\n        flexShrink: 0,\n        display: 'flex',\n        flexDirection: 'column',\n        lineHeight: '1.8em',\n        borderRight: '2px solid #eee'\n      }}\n    >\n      {children}\n    </div>\n  )\n}\n\nfunction Content({ children }: { children: React.ReactNode }) {\n  return (\n    <div id=\"page-container\">\n      <div\n        id=\"page-content\"\n        style={{\n          padding: 20,\n          paddingBottom: 50,\n          minHeight: '100vh.js'\n        }}\n      >\n        {children}\n      </div>\n    </div>\n  )\n}\n\nfunction Logo() {\n  return (\n    <div\n      style={{\n        marginTop: 20,\n        marginBottom: 10\n      }}\n    >\n      <a href=\"/\">\n        <img src={logoUrl} height={64} width={64} />\n      </a>\n    </div>\n  )\n}\n",
  frame:
    "5  |  import type { PageContext } from './types.js'\n6  |  \n7  |  export { PageShell }}\n   |                      ^\n8  |  \n9  |  function PageShell({ pageContext, children }: { pageContext: PageContext; children: React.ReactNode }) {",
  message:
    "/home/rom/code/vike/examples/react-full/renderer/PageShell.tsx: Unexpected token (7:20)\n\n\u001b[0m \u001b[90m  5 |\u001b[39m \u001b[36mimport\u001b[39m type { \u001b[33mPageContext\u001b[39m } \u001b[36mfrom\u001b[39m \u001b[32m'./types'\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  6 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  7 |\u001b[39m \u001b[36mexport\u001b[39m { \u001b[33mPageShell\u001b[39m }}\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  8 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  9 |\u001b[39m \u001b[36mfunction\u001b[39m \u001b[33mPageShell\u001b[39m({ pageContext\u001b[33m,\u001b[39m children }\u001b[33m:\u001b[39m { pageContext\u001b[33m:\u001b[39m \u001b[33mPageContext\u001b[39m\u001b[33m;\u001b[39m children\u001b[33m:\u001b[39m \u001b[33mReact\u001b[39m\u001b[33m.\u001b[39m\u001b[33mReactNode\u001b[39m }) {\u001b[0m\n\u001b[0m \u001b[90m 10 |\u001b[39m   \u001b[36mreturn\u001b[39m (\u001b[0m",
  stack:
    "SyntaxError: /home/rom/code/vike/examples/react-full/renderer/PageShell.tsx: Unexpected token (7:20)\n\n\u001b[0m \u001b[90m  5 |\u001b[39m \u001b[36mimport\u001b[39m type { \u001b[33mPageContext\u001b[39m } \u001b[36mfrom\u001b[39m \u001b[32m'./types'\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  6 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  7 |\u001b[39m \u001b[36mexport\u001b[39m { \u001b[33mPageShell\u001b[39m }}\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  8 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  9 |\u001b[39m \u001b[36mfunction\u001b[39m \u001b[33mPageShell\u001b[39m({ pageContext\u001b[33m,\u001b[39m children }\u001b[33m:\u001b[39m { pageContext\u001b[33m:\u001b[39m \u001b[33mPageContext\u001b[39m\u001b[33m;\u001b[39m children\u001b[33m:\u001b[39m \u001b[33mReact\u001b[39m\u001b[33m.\u001b[39m\u001b[33mReactNode\u001b[39m }) {\u001b[0m\n\u001b[0m \u001b[90m 10 |\u001b[39m   \u001b[36mreturn\u001b[39m (\u001b[0m\n    at instantiate (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/parse-error/credentials.ts:62:21)\n    at toParseError (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/parse-error.ts:60:12)\n    at TypeScriptParserMixin.raise (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/tokenizer/index.ts:1490:19)\n    at TypeScriptParserMixin.unexpected (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/tokenizer/index.ts:1531:16)\n    at TypeScriptParserMixin.parseExprAtom (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/parser/expression.ts:1347:16)\n    at TypeScriptParserMixin.parseExprAtom (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/plugins/jsx/index.ts:574:22)\n    at TypeScriptParserMixin.parseExprSubscripts (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/parser/expression.ts:718:23)\n    at TypeScriptParserMixin.parseUpdate (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/parser/expression.ts:695:21)\n    at TypeScriptParserMixin.parseMaybeUnary (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/parser/expression.ts:657:23)\n    at TypeScriptParserMixin.parseMaybeUnary (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/plugins/typescript/index.ts:3552:20)\n    at TypeScriptParserMixin.parseMaybeUnaryOrPrivate (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/parser/expression.ts:395:14)\n    at TypeScriptParserMixin.parseExprOps (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/parser/expression.ts:407:23)\n    at TypeScriptParserMixin.parseMaybeConditional (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/parser/expression.ts:362:23)\n    at TypeScriptParserMixin.parseMaybeAssign (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/parser/expression.ts:302:21)\n    at TypeScriptParserMixin.parseMaybeAssign (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/plugins/typescript/index.ts:3429:22)\n    at TypeScriptParserMixin.parseExpressionBase (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/parser/expression.ts:225:23)\n    at callback (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/parser/expression.ts:216:39)\n    at TypeScriptParserMixin.allowInAnd (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/parser/expression.ts:3072:16)\n    at TypeScriptParserMixin.parseExpression (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/parser/expression.ts:216:17)\n    at TypeScriptParserMixin.parseStatementContent (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/parser/statement.ts:628:23)\n    at TypeScriptParserMixin.parseStatementContent (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/plugins/typescript/index.ts:2887:20)\n    at TypeScriptParserMixin.parseStatementLike (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/parser/statement.ts:417:17)\n    at TypeScriptParserMixin.parseModuleItem (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/parser/statement.ts:354:17)\n    at TypeScriptParserMixin.parseBlockOrModuleBlockBody (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/parser/statement.ts:1359:16)\n    at TypeScriptParserMixin.parseBlockBody (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/parser/statement.ts:1333:10)\n    at TypeScriptParserMixin.parseProgram (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/parser/statement.ts:226:10)\n    at TypeScriptParserMixin.parseTopLevel (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/parser/statement.ts:208:25)\n    at TypeScriptParserMixin.parse (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/parser/index.ts:45:10)\n    at TypeScriptParserMixin.parse (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/plugins/typescript/index.ts:3997:20)\n    at parse (/home/rom/code/vike/node_modules/.pnpm/@babel+parser@7.21.8/node_modules/@babel/parser/src/index.ts:67:38)\n    at parser (/home/rom/code/vike/node_modules/.pnpm/@babel+core@7.21.8/node_modules/@babel/core/src/parser/index.ts:28:19)\n    at parser.next (<anonymous>)\n    at normalizeFile (/home/rom/code/vike/node_modules/.pnpm/@babel+core@7.21.8/node_modules/@babel/core/src/transformation/normalize-file.ts:51:24)\n    at normalizeFile.next (<anonymous>)\n    at run (/home/rom/code/vike/node_modules/.pnpm/@babel+core@7.21.8/node_modules/@babel/core/src/transformation/index.ts:38:36)\n    at run.next (<anonymous>)\n    at transform (/home/rom/code/vike/node_modules/.pnpm/@babel+core@7.21.8/node_modules/@babel/core/src/transform.ts:29:20)\n    at transform.next (<anonymous>)\n    at step (/home/rom/code/vike/node_modules/.pnpm/gensync@1.0.0-beta.2/node_modules/gensync/index.js:261:32)\n    at /home/rom/code/vike/node_modules/.pnpm/gensync@1.0.0-beta.2/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/home/rom/code/vike/node_modules/.pnpm/gensync@1.0.0-beta.2/node_modules/gensync/index.js:223:11)\n    at cb (/home/rom/code/vike/node_modules/.pnpm/gensync@1.0.0-beta.2/node_modules/gensync/index.js:189:28)\n    at /home/rom/code/vike/node_modules/.pnpm/@babel+core@7.21.8/node_modules/@babel/core/src/gensync-utils/async.ts:90:7\n    at /home/rom/code/vike/node_modules/.pnpm/gensync@1.0.0-beta.2/node_modules/gensync/index.js:113:33\n    at step (/home/rom/code/vike/node_modules/.pnpm/gensync@1.0.0-beta.2/node_modules/gensync/index.js:287:14)\n    at /home/rom/code/vike/node_modules/.pnpm/gensync@1.0.0-beta.2/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/home/rom/code/vike/node_modules/.pnpm/gensync@1.0.0-beta.2/node_modules/gensync/index.js:223:11)"
}
