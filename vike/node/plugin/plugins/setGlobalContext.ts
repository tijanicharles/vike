export { setGlobalContext }

import type { Plugin } from 'vite'
import {
  setGlobalContext_isViteDev,
  setGlobalContext_viteDevServer,
  setGlobalContext_viteConfig,
  setGlobalContext_vikeConfig
} from '../../runtime/globalContext.js'
import {
  assertFilePathAbsoluteFilesystem,
  getOutDirs,
  isDevCheck,
  markSetup_isViteDev,
  markSetup_viteDevServer,
  markSetup_vitePreviewServer
} from '../utils.js'
import { getVikeConfig } from './importUserCode/v1-design/getVikeConfig.js'

function setGlobalContext(): Plugin[] {
  return [
    {
      name: 'vike:setGlobalContext:pre',
      enforce: 'pre',
      configureServer: {
        order: 'pre',
        handler(viteDevServer) {
          setGlobalContext_viteDevServer(viteDevServer)
          markSetup_viteDevServer()
        }
      },
      configurePreviewServer() {
        markSetup_vitePreviewServer()
      },
      config: {
        order: 'pre',
        handler(_, env) {
          const isViteDev = isDevCheck(env)
          setGlobalContext_isViteDev(isViteDev)
          markSetup_isViteDev(isViteDev)
        }
      }
    },
    {
      name: 'vike:setGlobalContext:post',
      enforce: 'post',
      configResolved: {
        order: 'post',
        async handler(config) {
          const { outDirRoot } = getOutDirs(config)
          assertFilePathAbsoluteFilesystem(outDirRoot) // Needed for `importServerProductionEntry({ outDir })` of @brillout/vite-plugin-server-entry
          setGlobalContext_viteConfig(config, outDirRoot)
          const vikeConfig = await getVikeConfig(config)
          setGlobalContext_vikeConfig(vikeConfig)
        }
      }
    }
  ]
}
