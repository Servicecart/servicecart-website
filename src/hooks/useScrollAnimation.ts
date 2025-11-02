import { useState, useEffect, useRef } from 'react'

export const useScrollAnimation = (threshold = 0.1, rootMargin = '0px 0px -50px 0px') => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Once visible, we can optionally unobserve
          if (ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, rootMargin])

  return { ref, isVisible }
}

/**
 * Enhanced scroll animation hook with multiple element support
 */
export const useMultipleScrollAnimations = (elementIds: string[], threshold = 0.1) => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set())
  const refs = useRef<Map<string, HTMLElement>>(new Map())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute('data-animate-id')
            if (elementId) {
              setVisibleElements((prev) => new Set(prev).add(elementId))
            }
          }
        })
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    refs.current.forEach((element) => {
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      refs.current.forEach((element) => {
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [threshold, elementIds])

  const setRef = (id: string) => (element: HTMLElement | null) => {
    if (element) {
      refs.current.set(id, element)
    }
  }

  return { setRef, visibleElements }
}

/**
 * Simple hook to add scroll reveal class to elements
 */
export const useScrollReveal = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold])

  return { ref, isVisible, className: isVisible ? 'visible' : '' }
}
