import { useState, useEffect, useRef } from 'react'
import groupIphone from '../assets/images/group_iphone.png'
import appleIcon from '../assets/images/apple-icon.png'
import googleIcon from '../assets/images/google-icon.png'

const GetHomeServicesToday = () => {
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
      id="download"
      ref={sectionRef}
      className={`relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-[85vh] overflow-hidden transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Solid Background */}
      <div className="absolute inset-0 bg-[#281A3B]"></div>
      
      {/* Main Container with clear separation between content and image */}
      <div className="relative z-20 min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-[85vh] flex flex-col justify-between">
        {/* Content Area - Top section with text and buttons */}
        <div className="relative z-30 flex-shrink-0 w-full">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4 text-center py-8 sm:py-10 md:py-12 lg:py-16">
            {/* Heading with fade-in animation */}
            <div className="mb-5 sm:mb-6 md:mb-8 lg:mb-10 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-5 leading-tight drop-shadow-2xl px-2 sm:px-0">
                Get Home Services today.
              </h2>
              
              {/* Sub-heading */}
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight drop-shadow-2xl px-2 sm:px-0">
                Download Servicecart App!
              </h3>
            </div>

            {/* Download Buttons - Matched to Hero section with animation */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 px-4 sm:px-6 md:px-8 lg:px-0 animate-fade-in-delayed">
              {/* App Store Button */}
              <a 
                href="https://apps.apple.com/in/app/servicecart/id6477325801"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 sm:gap-3 bg-white/95 backdrop-blur-sm text-black px-5 sm:px-6 md:px-7 lg:px-8 py-3 sm:py-3.5 rounded-full hover:bg-white transition-all shadow-xl hover:scale-105 hover:shadow-2xl overflow-hidden w-full sm:w-auto max-w-xs sm:max-w-none"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img src={appleIcon} alt="Apple" className="w-7 h-7 sm:w-8 sm:h-8 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                <div className="flex flex-col items-start relative z-10">
                  <span className="text-[9px] sm:text-[10px] md:text-xs leading-tight text-black">Download on the</span>
                  <span className="text-xs sm:text-sm md:text-base font-semibold leading-tight text-black">App Store</span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </a>

              {/* Google Play Button */}
              <a 
                href="https://play.google.com/store/apps/details?id=com.servicecaart.userapp&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 sm:gap-3 bg-white/95 backdrop-blur-sm text-black px-5 sm:px-6 md:px-7 lg:px-8 py-3 sm:py-3.5 rounded-full hover:bg-white transition-all shadow-xl hover:scale-105 hover:shadow-2xl overflow-hidden w-full sm:w-auto max-w-xs sm:max-w-none"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img src={googleIcon} alt="Google Play" className="w-7 h-7 sm:w-8 sm:h-8 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                <div className="flex flex-col items-start relative z-10">
                  <span className="text-[9px] sm:text-[10px] md:text-xs leading-tight font-semibold text-black">GET IT ON</span>
                  <span className="text-xs sm:text-sm md:text-base font-semibold leading-tight text-black">Google Play</span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Spacer - Clear gap between content and image */}
        <div className="flex-shrink-0 h-8 sm:h-10 md:h-12 lg:h-16"></div>

        {/* Image Area - Bottom section with phones, stuck to bottom */}
        <div className="relative z-10 flex-shrink-0 w-full flex items-end justify-center">
          <img
            src={groupIphone}
            alt="Group of iPhones displaying the app"
            className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl h-auto block"
            style={{ 
              marginBottom: 0,
              paddingBottom: 0
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default GetHomeServicesToday
