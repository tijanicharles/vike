export { getVikeManifest }

import { projectInfo } from '../../utils.js'
import { type PluginManifest, assertPluginManifest } from '../../../shared/assertPluginManifest.js'
import { isUsingClientRouter } from '../extractExportNamesPlugin.js'
import type { VikeConfigGlobal } from '../importUserCode/v1-design/getVikeConfig.js'
import { getRuntimeManifest } from '../../../runtime/globalContext.js'
import type { ResolvedConfig } from 'vite'

function getVikeManifest(vikeConfigGlobal: VikeConfigGlobal, viteConfig: ResolvedConfig): PluginManifest {
  const runtimeManifest = getRuntimeManifest(vikeConfigGlobal, viteConfig)
  const manifest = {
    version: projectInfo.projectVersion,
    usesClientRouter: isUsingClientRouter(), // TODO/v1-release: remove
    ...runtimeManifest
  }
  assertPluginManifest(manifest)
  return manifest
}
