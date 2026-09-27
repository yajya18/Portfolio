import { useEffect } from 'react'

/**
 * Sets the browser tab title for the current page. This is a plain
 * client-side SPA (no server rendering), so this covers the tab title and
 * history entries; it does not affect crawler-visible per-route <meta> tags.
 */
export function useDocumentTitle(title: string) {
  useEffect(() => {
    const previous = document.title
    document.title = title
    return () => {
      document.title = previous
    }
  }, [title])
}
