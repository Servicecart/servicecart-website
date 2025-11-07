import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Scroll to top when pathname changes (in-app navigation and direct links)
    // If there's a hash, scroll to the element after a brief delay
    if (hash) {
      // Wait for content to load, then scroll to hash element
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
          // If element not found, scroll to top
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        }
      }, 100)
    } else {
      // No hash - scroll to top immediately
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }, [pathname, hash])

  useEffect(() => {
    // Handle initial page load (direct link navigation)
    // This ensures the page starts at the top when opened via direct link
    const scrollToTop = () => {
      if (!hash) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant' // Use instant for initial load
        })
      }
    }

    // Scroll immediately on mount
    scrollToTop()

    // Also handle window load event for cases where content loads later
    const handleLoad = () => {
      if (!hash) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        })
      }
    }

    // Handle both loading and complete states
    if (document.readyState === 'loading') {
      window.addEventListener('load', handleLoad, { once: true })
      return () => window.removeEventListener('load', handleLoad)
    } else {
      // Page already loaded, scroll immediately
      scrollToTop()
    }
  }, []) // Run only once on mount

  return null
}

export default ScrollToTop

