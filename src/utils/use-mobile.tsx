import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  // Initialize with a default value based on window width if available
  // or false as a fallback for SSR
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < MOBILE_BREAKPOINT
    }
    return false
  })

  React.useEffect(() => {
    // Make sure we're in a browser environment
    if (typeof window === 'undefined') return;

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    // Modern browsers use addEventListener
    try {
      mql.addEventListener("change", onChange)
    } catch (e) {
      // Fallback for older browsers - though this is deprecated
      // @ts-ignore - Ignoring deprecated method warning
      mql.addListener && mql.addListener(onChange)
    }

    // Set initial value
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)

    return () => {
      try {
        mql.removeEventListener("change", onChange)
      } catch (e) {
        // Fallback for older browsers - though this is deprecated
        // @ts-ignore - Ignoring deprecated method warning
        mql.removeListener && mql.removeListener(onChange)
      }
    }
  }, [])

  return isMobile
}
