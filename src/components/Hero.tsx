import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import womanProfessional from '../assets/images/women-professional.png'
import manProfessional from '../assets/images/man-professional.png'
import appleIcon from '../assets/images/apple-icon.png'
import googleIcon from '../assets/images/google-icon.png'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Carousel items with square images
  const carouselItems = [
    {
      id: 0,
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=400&fit=crop',
      label: 'Book Services',
      position: 'center'
    },
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=300&h=300&fit=crop',
      label: 'App',
      position: 'left'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=300&fit=crop',
      label: 'Ces',
      position: 'right'
    }
  ]

  // Auto-slide carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [carouselItems.length])

  // Get visible items based on current slide
  const getVisibleItems = () => {
    const items = []
    for (let i = 0; i < carouselItems.length; i++) {
      const index = (currentSlide + i) % carouselItems.length
      items.push({ ...carouselItems[index], position: ['left', 'center', 'right'][i] })
    }
    return items
  }

  const visibleItems = getVisibleItems()

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
  }
  return (
    <section id="home" className="bg-[#3E2061] rounded-b-[60px] md:rounded-b-[80px] relative overflow-hidden pb-8 md:pb-10 pt-8 md:pt-12 min-h-[50vh]">
      {/* Left Character - Woman with makeup brush */}
      <div className="hidden lg:block absolute left-0 lg:-left-16 xl:-left-20 bottom-0 z-10 pointer-events-none">
        <img
          src={womanProfessional}
          alt="Servicecart Professional"
          className="w-[280px] lg:w-[320px] xl:w-[380px] h-auto object-contain"
          style={{ maxHeight: '650px', objectFit: 'contain' }}
        />
      </div>

      {/* Right Character - Man with wrench */}
      <div className="hidden lg:block absolute right-0 lg:-right-16 xl:-right-20 bottom-0 z-10 pointer-events-none">
        <img
          src={manProfessional}
          alt="Servicecart Professional"
          className="w-[280px] lg:w-[320px] xl:w-[380px] h-auto object-contain"
          style={{ maxHeight: '650px', objectFit: 'contain' }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        {/* Top Section - Headline and Subtitle */}
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-3 leading-tight">
            Get Home Services in 30 minutes
          </h1>
          <p className="text-base md:text-lg text-white font-normal max-w-2xl mx-auto">
            Servicecart helps you book professional home services.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="relative flex items-center justify-center gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8 px-4 md:px-0">

          {/* Left Blurred Card */}
          <div className="hidden md:block lg:hidden absolute left-0 md:-left-8 z-0 bottom-0 pointer-events-none">
            <div className="bg-white/40 backdrop-blur-md rounded-2xl p-8 md:p-12 w-[180px] md:w-[220px] h-[380px] md:h-[460px] flex flex-col items-center justify-center opacity-80">
              <div className="text-gray-300/80 text-7xl md:text-8xl font-light mb-4 border-2 border-gray-300/50 rounded-full w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">E</div>
              <p className="text-gray-500 text-xs md:text-sm font-normal mt-2">App</p>
            </div>
          </div>

          {/* Central App Showcase - Phone Carousel */}
          <div className="relative z-20 flex-1 max-w-md md:max-w-lg lg:max-w-xl mx-auto">
            {/* Phone Carousel Container */}
            <div className="relative">
              {/* Three square images in carousel arrangement */}
              <div className="flex items-center justify-center relative" style={{ height: '350px' }}>
                {visibleItems.map((item, index) => {
                  const isCenter = item.position === 'center'
                  const isLeft = item.position === 'left'
                  
                  return (
                    <div
                      key={`${item.id}-${index}`}
                      className={`hidden md:block absolute transition-all duration-500 ease-in-out ${
                        isCenter
                          ? 'relative z-30 transform rotate-3'
                          : isLeft
                          ? 'left-0 md:-left-8 lg:-left-12 transform -rotate-12 opacity-60 blur-sm'
                          : 'right-0 md:-right-8 lg:-right-12 transform rotate-12 opacity-60 blur-sm'
                      }`}
                      style={{
                        transform: isCenter
                          ? 'rotate(3deg)'
                          : isLeft
                          ? 'rotate(-12deg) translateX(0)'
                          : 'rotate(12deg) translateX(0)',
                        transition: 'all 0.5s ease-in-out'
                      }}
                    >
                      <div className="relative flex flex-col items-center">
                        <div className="bg-white rounded-2xl p-1.5 md:p-2 shadow-2xl">
                          <img
                            src={item.image}
                            alt={item.label}
                            className="rounded-xl object-cover"
                            style={{
                              width: isCenter ? '200px' : '160px',
                              height: isCenter ? '200px' : '160px',
                              objectFit: 'cover'
                            }}
                          />
                        </div>
                        <div className={`bg-white text-black text-center mt-2 font-semibold rounded-full px-3 py-1 ${
                          isCenter ? 'text-xs md:text-sm' : 'text-xs px-2 py-0.5'
                        }`}>
                          {item.label}
                        </div>
                      </div>
                    </div>
                  )
                })}
                
                {/* Single square image for mobile */}
                <div className="md:hidden relative z-30 transform rotate-3">
                  <div className="relative flex flex-col items-center">
                    <div className="bg-white rounded-2xl p-1.5 md:p-2 shadow-2xl">
                      <img
                        src={visibleItems.find(item => item.position === 'center')?.image || carouselItems[0].image}
                        alt="Servicecart App"
                        className="rounded-xl object-cover"
                        style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                      />
                    </div>
                    <div className="bg-white text-black text-xs text-center mt-2 font-semibold rounded-full px-3 py-1">
                      {visibleItems.find(item => item.position === 'center')?.label || 'Book Services'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Circular Navigation Buttons */}
              <div className="flex justify-center gap-4 mt-4 z-30 relative">
                <button 
                  onClick={handlePrevious}
                  className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-lg"
                >
                  <ChevronLeft className="text-gray-900" size={22} />
                </button>
                <button 
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-lg"
                >
                  <ChevronRight className="text-gray-900" size={22} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Blurred Card */}
          <div className="hidden md:block lg:hidden absolute right-0 md:-right-8 z-0 bottom-0 pointer-events-none">
            <div className="bg-white/40 backdrop-blur-md rounded-2xl p-8 md:p-12 w-[180px] md:w-[220px] h-[380px] md:h-[460px] flex flex-col items-center justify-center opacity-80">
              <div className="text-gray-300/80 text-7xl md:text-8xl font-light mb-4 border-2 border-gray-300/50 rounded-full w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">P</div>
              <p className="text-gray-500 text-xs md:text-sm font-normal mt-2">ces</p>
            </div>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          {/* App Store Button */}
          <button className="flex items-center gap-3 bg-white text-black px-6 md:px-8 py-3.5 rounded-full hover:bg-gray-50 transition-colors shadow-lg">
            <img src={appleIcon} alt="Apple" className="w-8 h-8 object-contain" />
            <div className="flex flex-col items-start">
              <span className="text-[10px] md:text-xs leading-tight text-black">Download on the</span>
              <span className="text-sm md:text-base font-semibold leading-tight text-black">App Store</span>
            </div>
          </button>

          {/* Google Play Button */}
          <button className="flex items-center gap-3 bg-white text-black px-6 md:px-8 py-3.5 rounded-full hover:bg-gray-50 transition-colors shadow-lg">
            <img src={googleIcon} alt="Google Play" className="w-8 h-8 object-contain" />
            <div className="flex flex-col items-start">
              <span className="text-[10px] md:text-xs leading-tight font-semibold text-black">GET IT ON</span>
              <span className="text-sm md:text-base font-semibold leading-tight text-black">Google Play</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero


