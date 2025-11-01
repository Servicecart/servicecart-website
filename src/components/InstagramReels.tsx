import { useEffect, useRef } from 'react'

// Import all 5 downloaded videos
import reel1Video from '../assets/videos/reel1_C5FZDpFoOAG.mp4'
import reel2Video from '../assets/videos/reel2_C4YPDe9tJID.mp4'
import reel3Video from '../assets/videos/reel3_DKsN50TAevy.mp4'
import reel4Video from '../assets/videos/reel4_DJRnTDJIcyZ.mp4'
import reel5Video from '../assets/videos/reel5_DJMT_71ImZQ.mp4'

// Import thumbnails for each reel
import thumb1 from '../assets/images/testimonials/thumb1_C5FZDpFoOAG.jpg'
import thumb2 from '../assets/images/testimonials/thumb2_C4YPDe9tJID.jpg'
import thumb3 from '../assets/images/testimonials/thumb3_DKsN50TAevy.jpg'
import thumb4 from '../assets/images/testimonials/thumb4_DJRnTDJIcyZ.jpg'
import thumb5 from '../assets/images/testimonials/thumb5_DJMT_71ImZQ.jpg'

interface ReelItem {
  id: string
  image: string
  video?: string
  isVideo: boolean
  testimonial?: {
    text: string
    name: string
    location: string
  }
}

const InstagramReels = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  // Reel items using all 5 downloaded videos - each video used once
  const reels: ReelItem[] = [
    {
      id: '1',
      image: thumb1,
      video: reel1Video,
      isVideo: true,
    },
    {
      id: '2',
      image: thumb2,
      video: reel2Video,
      isVideo: true,
      testimonial: {
        text: "Best service I've ever used! The team was professional and thorough. They cleaned every corner of my home and it looks spotless now. Highly recommend to everyone!",
        name: 'Anjali Desai',
        location: 'Lower Parel',
      },
    },
    {
      id: '3',
      image: thumb3,
      video: reel3Video,
      isVideo: true,
    },
    {
      id: '4',
      image: thumb4,
      video: reel4Video,
      isVideo: true,
      testimonial: {
        text: "I was skeptical at first, but after trying their service, I'm amazed! The attention to detail is incredible and the pricing is very reasonable. Worth every penny!",
        name: 'Vikram Mehta',
        location: 'Worli',
      },
    },
    {
      id: '5',
      image: thumb5,
      video: reel5Video,
      isVideo: true,
      testimonial: {
        text: "Absolutely fantastic experience! The staff arrived on time and completed the job efficiently. My home has never been cleaner. Will definitely use their services again!",
        name: 'Riya Kothari',
        location: 'Bandra',
      },
    },
  ]

  // Continuous auto-scroll carousel
  useEffect(() => {
          const container = scrollContainerRef.current
    if (!container) return

    let animationFrameId: number | null = null
    let scrollPosition = 0
    const scrollSpeed = 2 // pixels per frame

    const startScrolling = () => {
      // Wait for container to be fully laid out
      if (container.scrollWidth === 0 || container.scrollWidth <= container.clientWidth) {
        setTimeout(startScrolling, 50)
        return
      }

      // Calculate single set width (half of total width since we duplicate items)
      const singleSetWidth = container.scrollWidth / 2

      const scroll = () => {
              if (container) {
          scrollPosition += scrollSpeed
          container.scrollLeft = scrollPosition

          // Seamlessly reset when we've scrolled one full set
          if (scrollPosition >= singleSetWidth) {
            scrollPosition = 0
            container.scrollLeft = 0
          }
        }
        animationFrameId = requestAnimationFrame(scroll)
      }

      animationFrameId = requestAnimationFrame(scroll)
    }

    // Delay to ensure layout is complete
    const timeoutId = setTimeout(startScrolling, 200)

    return () => {
      clearTimeout(timeoutId)
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [reels.length])

  // Auto-play all videos in loop (muted) - triggered when videos mount
  // This effect runs after all videos are mounted
  useEffect(() => {
    // Use a small delay to ensure all video refs are set
    const timer = setTimeout(() => {
      // Get all video elements in the container, not just refs
      const container = scrollContainerRef.current
      if (container) {
        const allVideos = container.querySelectorAll('video')
        allVideos.forEach((video) => {
          if (video instanceof HTMLVideoElement) {
            video.muted = true
            video.loop = true
            video.playsInline = true
            video.play().catch((err) => {
              console.error('Error auto-playing video:', err)
            })
          }
        })
      }
    }, 300)

    return () => {
      clearTimeout(timer)
      // Pause all videos on unmount
      videoRefs.current.forEach((video) => {
        if (video) {
          video.pause()
          video.currentTime = 0
        }
      })
    }
  }, [])

  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden" style={{ minHeight: '600px' }}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Main Title - Creative Marketing Style */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#3E2061] mb-4 leading-tight">
            See Why Everyone's<br className="hidden md:block" /> Talking About Servicecart
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            The trusted platform for quality home services, trusted by thousands
          </p>
        </div>

        {/* Continuous Scrolling Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide"
          style={{
            scrollBehavior: 'auto',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            minHeight: '580px',
          }}
        >
          {/* Render items twice for seamless infinite scroll */}
          {[...reels, ...reels].map((reel, index) => (
            <div
              key={`${reel.id}-${index}`}
              className="flex-shrink-0 w-[280px] md:w-[300px] lg:w-[320px] rounded-2xl overflow-hidden shadow-lg bg-white relative"
              style={{ height: '580px' }}
            >
              {/* Card Container - Rounded with proper structure */}
              <div className="relative bg-white rounded-2xl overflow-hidden h-full">
                {/* Image/Video Container - Top section (image fills full height, testimonial overlaps) */}
                <div className="relative bg-gray-100 overflow-hidden rounded-2xl" style={{ height: '100%' }}>
                  {reel.video ? (
                    <>
                      {/* Video Element - Muted, Auto-play, Loop (for all items with videos) */}
                      <video
                        key={`video-${reel.id}-${index}`}
                        ref={(el) => {
                          const originalIndex = index % reels.length
                          if (el) {
                            videoRefs.current[originalIndex] = el
                            // Set up video properties immediately
                            el.muted = true
                            el.loop = true
                            el.playsInline = true
                            // Auto-play immediately when video element is ready
                            const playVideo = () => {
                              el.muted = true
                              el.loop = true
                              el.play().catch((err) => {
                                console.error('Error auto-playing video:', err)
                              })
                            }
                            if (el.readyState >= 2) {
                              // Video is already loaded
                              playVideo()
                            } else {
                              // Wait for video to be ready
                              el.addEventListener('loadeddata', playVideo, { once: true })
                              el.addEventListener('canplay', playVideo, { once: true })
                            }
                          }
                        }}
                        src={reel.video}
                        poster={reel.image}
                        className="absolute inset-0 w-full h-full object-cover z-0"
                        style={{
                          display: 'block',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                        loop
                        playsInline
                        muted
                        autoPlay
                        preload="auto"
                        onLoadedData={(e) => {
                          // Ensure video plays when data is loaded
                          const video = e.currentTarget
                          video.muted = true
                          video.loop = true
                          video.play().catch((err) => {
                            console.error('Error auto-playing video:', err)
                          })
                        }}
                        onCanPlay={(e) => {
                          // Also trigger on canplay event
                          const video = e.currentTarget
                          video.muted = true
                          video.loop = true
                          video.play().catch((err) => {
                            console.error('Error auto-playing video:', err)
                          })
                        }}
                      />
                    </>
                  ) : (
                    /* Image for static items without videos */
                    <img
                      src={reel.image}
                      alt={reel.testimonial?.name || 'Testimonial'}
                      className="absolute inset-0 w-full h-full object-cover"
                              style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                          }}
                    />
                  )}
                </div>

                {/* Testimonial Text Box - Bottom section, overlapping image with rounded corners */}
                {reel.testimonial && (
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-white z-10"
                    style={{
                      padding: '16px 20px',
                      borderTopLeftRadius: '20px',
                      borderTopRightRadius: '20px',
                      borderBottomLeftRadius: '24px',
                      borderBottomRightRadius: '24px',
                      marginLeft: '12px',
                      marginRight: '12px',
                      marginBottom: '12px',
                      boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    }}
                  >
                    <p className="text-sm md:text-base text-black mb-3 leading-relaxed font-normal">
                      {reel.testimonial.text}
                    </p>
                    <div className="flex justify-between items-end">
                      <p className="text-sm md:text-base font-semibold text-black">
                        {reel.testimonial.name}
                      </p>
                      {reel.testimonial.location && (
                        <span className="text-xs md:text-sm text-[#8A56E8] bg-[#F8F8F8] px-3 py-1.5 rounded-full font-medium whitespace-nowrap border border-[#E9D5FF]">
                          {reel.testimonial.location}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InstagramReels
