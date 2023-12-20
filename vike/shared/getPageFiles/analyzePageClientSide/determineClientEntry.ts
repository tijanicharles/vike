// TODO/v1-release: remove

export { determineClientEntry }
export { getVikeClientEntry }

import type { ClientDependency } from './ClientDependency.js'
import type { PageFile } from '../../../shared/getPageFiles.js'

function determineClientEntry({
  pageFilesClientSide,
  pageFilesServerSide,
  isHtmlOnly,
  isClientRouting,
  includeServerPage
}: {
  pageFilesClientSide: PageFile[]
  pageFilesServerSide: PageFile[]
  isHtmlOnly: boolean
  isClientRouting: boolean
  includeServerPage: boolean
}): { clientEntries: string[]; clientDependencies: ClientDependency[] } {
  let clientEntries: string[] = []

  const pageFilesServerSideOnly = pageFilesServerSide.filter((p) => !pageFilesClientSide.includes(p))

  const clientDependencies: ClientDependency[] = []
  clientDependencies.push(
    ...pageFilesClientSide.map((p) => ({ id: p.filePath, onlyAssets: false, eagerlyImported: false }))
  )
  // CSS & assets
  if (includeServerPage) {
    clientDependencies.push(
      ...pageFilesServerSideOnly.map((p) => ({ id: p.filePath, onlyAssets: true, eagerlyImported: false }))
    )
  }
  // Handle SPA & SSR pages.
  if (isHtmlOnly) {
    clientEntries = pageFilesClientSide.map((p) => p.filePath)
  } else {
    // Add the vike client entry
    const clientEntry = getVikeClientEntry(isClientRouting)
    clientDependencies.push({ id: clientEntry, onlyAssets: false, eagerlyImported: false })
    clientEntries = [clientEntry]
  }

  // console.log(pageFilesClientSide, pageFilesServerSide, clientDependencies, clientEntry)
  return { clientEntries, clientDependencies }
}

function getVikeClientEntry(isClientRouting: boolean) {
  return isClientRouting
    ? '@@vike/dist/esm/client/client-routing-runtime/entry.js'
    : '@@vike/dist/esm/client/server-routing-runtime/entry.js'
}
