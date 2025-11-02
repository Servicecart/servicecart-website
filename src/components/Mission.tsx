import { useState, useRef, useEffect } from 'react'
import teamImage from '../assets/images/team.png'

const Mission = () => {
  // Extract video ID from YouTube URL
  const videoId = 'AVCxkEwPFLw'
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Autoplay muted URL with IFrame API enabled
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=1&modestbranding=1&rel=0&enablejsapi=1&origin=${window.location.origin}`

  // Handle hover to unmute/pause
  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const handleMouseEnter = () => {
      // Unmute on hover - using postMessage to YouTube API
      iframe.contentWindow?.postMessage(
        JSON.stringify({
          event: 'command',
          func: 'unMute',
        }),
        '*'
      )
    }

    const handleMouseLeave = () => {
      // Mute when not hovering
      iframe.contentWindow?.postMessage(
        JSON.stringify({
          event: 'command',
          func: 'mute',
        }),
        '*'
      )
    }

    const container = iframe.closest('div')
    if (container) {
      container.addEventListener('mouseenter', handleMouseEnter)
      container.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener('mouseenter', handleMouseEnter)
        container.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className={`py-12 md:py-20 bg-white transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1.65fr_1fr] gap-8 md:gap-12">
          {/* Left Section - YouTube Video Player (60-65% width) */}
          <div className="relative w-full">
            <div className="relative rounded-xl overflow-hidden bg-gray-100 shadow-lg group w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                ref={iframeRef}
                src={embedUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Right Section - Single Card with Mission Text and Team Photo (35-40% width) */}
          <div className="w-full flex flex-col">
            <div className="bg-gray-50 rounded-2xl overflow-hidden flex flex-col shadow-lg min-h-[400px] md:min-h-[500px]">
              {/* Mission Statement - Top Section with padding */}
              <div className="p-6 md:p-8 flex-shrink-0">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 md:mb-6 text-left">
                  Our Mission
                </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left">
                  To make finding trusted home and beauty services, easy transparent, and efficient while helping local professionals grow through a digital platform.
                </p>
              </div>

              {/* Team Photo - Fills entire bottom section with no gaps */}
              <div className="flex-grow flex items-end justify-center overflow-hidden w-full">
                <img
                  src={teamImage}
                  alt="Servicecart Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission

