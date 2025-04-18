
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Function to check if the screen is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    // Create media query list for better performance
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Add event listener for window resize
    mql.addEventListener("change", checkMobile)
    
    // Initial check
    checkMobile()
    
    // Clean up
    return () => mql.removeEventListener("change", checkMobile)
  }, [])

  return isMobile === undefined ? false : isMobile
}
