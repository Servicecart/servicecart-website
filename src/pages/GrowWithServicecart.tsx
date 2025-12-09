import { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import franchiseImg from '../assets/images/franchise_img.png'
import houseImg from '../assets/images/franchise/house.png'
import moneyImg from '../assets/images/franchise/money.png'
import professionalImg from '../assets/images/franchise/professional.png'
import entrepreneursImg from '../assets/images/franchise/entrepreneurs.png'
import businessPersonImg from '../assets/images/franchise/business_person.png'
import { trackNavigation } from '../utils/analytics'

const GrowWithServicecart = () => {
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

  const handleApplyNow = () => {
    trackNavigation('franchise_apply_now')
    // You can add a form modal or redirect to a contact form here
    window.location.href = 'mailto:franchise@myservicecart.com?subject=Franchise Inquiry'
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section - Franchise Model - Matching Homepage Hero structure with original layout */}
        <section 
          ref={sectionRef}
          id="franchise-hero"
          className={`bg-[#3E2061] rounded-b-[40px] sm:rounded-b-[50px] md:rounded-b-[60px] lg:rounded-b-[80px] relative overflow-hidden pb-6 sm:pb-8 md:pb-10 lg:pb-12 pt-24 sm:pt-28 md:pt-32 lg:pt-36 min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] lg:min-h-[75vh] flex items-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ marginTop: '-10rem', paddingTop: 'calc(10rem + 6rem)' }}
        >
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#3E2061] via-[#8A56E8]/25 to-[#3E2061] animate-gradient-shift"></div>
          
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white/10 blur-sm"
                style={{
                  width: `${3 + i}px`,
                  height: `${3 + i}px`,
                  left: `${20 + i * 12}%`,
                  top: `${15 + i * 10}%`,
                  animation: `particleFloat ${20 + i * 3}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>
          
          {/* Right Side - Franchise Image - Absolutely positioned touching right corner */}
          <div className={`hidden lg:block absolute right-0 bottom-0 z-10 pointer-events-none scroll-fade-scale ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>
            <img
              src={franchiseImg}
              alt="Servicecart Franchise Model"
              className="w-[450px] lg:w-[500px] xl:w-[550px] 2xl:w-[600px] h-auto object-contain"
              style={{ maxHeight: '800px' }}
            />
          </div>

          {/* Content Container */}
          <div className="relative z-20 container mx-auto px-4 sm:px-6 md:px-8 lg:px-4 max-w-7xl">
            <div className="min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] lg:min-h-[75vh] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
              
              {/* Left Side - Text Content */}
              <div className={`flex-1 text-center lg:text-left scroll-reveal scroll-reveal-from-bottom ${isVisible ? 'visible' : ''}`}>
                {/* Subtitle - Franchise Model */}
                <div className={`mb-3 sm:mb-4 scroll-fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>
                  <span className="text-sm sm:text-base md:text-lg text-white/90 font-normal italic">
                    Franchise Model
                  </span>
                </div>

                {/* Main Title - Matching Hero section title size */}
                <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-tight sm:leading-tight md:leading-tight drop-shadow-2xl scroll-fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
                  Grow with Servicecart
                </h1>

                {/* Description - Reduced size */}
                <p className={`text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed scroll-fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '300ms' }}>
                  Your franchise journey begins here with Servicecart.
                </p>

                {/* Statistics - Reduced size */}
                <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-10 justify-center lg:justify-start scroll-fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>
                  {/* 30+ Cities */}
                  <div className="text-center lg:text-left">
                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1 sm:mb-2">
                      30+
                    </div>
                    <div className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80">
                      cities across India & expanding
                    </div>
                  </div>

                  {/* 120+ Outlets */}
                  <div className="text-center lg:text-left">
                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1 sm:mb-2">
                      120+
                    </div>
                    <div className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80">
                      outlets across India & expanding
                    </div>
                  </div>
                </div>

                {/* Apply Now Button */}
                <div className={`scroll-fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '500ms' }}>
                  <button
                    onClick={handleApplyNow}
                    className="group relative bg-[#8A56E8] hover:bg-[#7a46d8] text-white px-8 md:px-10 lg:px-12 py-4 md:py-5 rounded-lg md:rounded-xl text-base md:text-lg lg:text-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 hover-lift overflow-hidden"
                  >
                    <span className="relative z-10">Apply Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits of partnering with us Section */}
        <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 max-w-6xl relative">
            <div className={`text-center mb-8 md:mb-10 scroll-reveal scroll-reveal-from-bottom ${isVisible ? 'visible' : ''}`}>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                Benefits of partnering with us
              </h2>
            </div>

            {/* Benefits Cards - Matching WhyJoinUs card structure */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-10">
              {[
                {
                  title: 'Setup your store',
                  image: houseImg,
                  alt: 'Setup your store',
                },
                {
                  title: 'Start earning the returns',
                  image: moneyImg,
                  alt: 'Start earning the returns',
                },
                {
                  title: 'Grow with us',
                  image: professionalImg,
                  alt: 'Grow with us',
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl pt-6 px-6 pb-0 flex-1 shadow-lg flex flex-col h-auto scroll-fade-scale hover-lift hover-glow transition-all duration-700 ${isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  <h3 className="text-lg md:text-xl font-bold text-black mb-4 text-center">
                    {benefit.title}
                  </h3>
                  <div className="flex items-end justify-center flex-grow mt-auto min-h-0 hover-shine">
                    <img
                      src={benefit.image}
                      alt={benefit.alt}
                      className="w-full h-auto object-contain max-h-[160px] hover-scale transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Start your Franchise now CTA Section - Matching website theme */}
        <section className="relative bg-gradient-to-b from-[#3E2061] to-[#161424] py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 max-w-6xl relative">
            <div className={`w-full mx-auto scroll-fade-scale ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '500ms' }}>
              <div className="bg-white rounded-[25px] p-4 md:p-5 shadow-lg hover-lift hover-glow transition-all duration-300">
                <div className="text-center pt-4 pb-4">
                  {/* Main Title - Green, Very Large, Bold */}
                  <h4 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#66CC99] mb-3">
                    Start your Franchise now
                  </h4>
                  
                  {/* Supporting Text - Dark Gray/Black, Medium Size */}
                  <p className="text-base md:text-lg text-black font-normal mb-2 max-w-2xl mx-auto">
                    Join us in 30+ cities already powering the future of home-commerce.
                  </p>
                  
                  {/* Call-to-Action Button - Purple Background, White Text */}
                  <button 
                    onClick={handleApplyNow}
                    className="bg-[#6A3E9B] hover:bg-[#5a2d8b] text-white font-bold text-base md:text-lg px-8 md:px-16 py-4 md:py-5 rounded-[20px] transition-all duration-300 shadow-md hover-lift hover-glow hover-scale w-full md:w-[65%] max-w-[400px]"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who can apply Section - Professional Background */}
        <section className="relative bg-white py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 max-w-6xl relative">
            <div className={`text-center mb-8 md:mb-10 scroll-reveal scroll-reveal-from-bottom ${isVisible ? 'visible' : ''}`}>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                Who can apply
              </h2>
            </div>

            {/* Who can apply Cards - Matching WhyJoinUs card structure */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-10">
              {[
                {
                  title: 'Professionals',
                  image: professionalImg,
                  alt: 'Professionals',
                },
                {
                  title: 'Entrepreneurs',
                  image: entrepreneursImg,
                  alt: 'Entrepreneurs',
                },
                {
                  title: 'Business Person',
                  image: businessPersonImg,
                  alt: 'Business Person',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl pt-6 px-6 pb-0 flex-1 shadow-lg flex flex-col h-auto scroll-fade-scale hover-lift hover-glow transition-all duration-700 ${isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  <h3 className="text-lg md:text-xl font-bold text-black mb-4 text-center">
                    {item.title}
                  </h3>
                  <div className="flex items-end justify-center flex-grow mt-auto min-h-0 hover-shine">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-auto object-contain max-h-[160px] hover-scale transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default GrowWithServicecart

