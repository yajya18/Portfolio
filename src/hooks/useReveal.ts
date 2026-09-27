import { useEffect, useRef } from 'react'

/**
 * One restrained scroll-reveal treatment, applied at the section level.
 * Attach the returned ref to a container with the `reveal` class; this hook
 * adds `reveal-visible` once the element enters the viewport. Respects
 * prefers-reduced-motion via the CSS in styles/index.css.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('reveal-visible')
          observer.unobserve(node)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}
