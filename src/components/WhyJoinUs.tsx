import leafIconLeft from '../assets/images/leaf_icon_left.png'
import leafIconRight from '../assets/images/leaf_icon_right.png'
import joinProvider1 from '../assets/images/join_provider1.png'
import joinProvider2 from '../assets/images/join_provider2.png'
import joinProvider3 from '../assets/images/join_provider3.png'
import joinProvider4 from '../assets/images/join_provider4.png'
import iphoneJoinProvider from '../assets/images/iphone_join_provider.png'
import { useState, useEffect, useRef } from 'react'
import joinUs1 from '../assets/images/join_us_1.svg'
import joinUs2 from '../assets/images/join_us_2.svg'
import joinUs3 from '../assets/images/join_us_3.svg'

const WhyJoinUs = () => {
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
      id="why-join-us"
      ref={sectionRef}
      className={`relative overflow-hidden transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Linear Gradient Background from #3E2061 to #161424 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3E2061] to-[#161424]"></div>
      
      {/* Join Provider Section */}
      <div className="relative py-16 md:py-20 lg:py-24 z-10">
        <div className="container mx-auto px-4 relative">
          {/* Header with directional leaf icons */}
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <div className="flex items-center justify-center gap-4 md:gap-6 mb-6">
              <img src={leafIconLeft} alt="Leaf icon left" className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Join us a Service Provider
              </h2>
              <img src={leafIconRight} alt="Leaf icon right" className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
            </div>
            <p className="text-base md:text-lg lg:text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Join Servicecart as a verified service provider and start growing your business. Get visibility, reach newer customers and earn more.
            </p>
          </div>

          {/* Main content - all images in a row */}
          <div className="relative min-h-[700px] md:min-h-[800px] lg:min-h-[900px] flex items-center justify-center -mx-4">
            <div className="relative w-full flex items-end justify-between px-0 gap-2 md:gap-4 lg:gap-6">
              {/* Left edge - Provider 1 */}
              <div className="flex items-end z-10">
                <img
                  src={joinProvider1}
                  alt="Service Provider 1"
                  className="w-32 md:w-44 lg:w-56 h-auto object-contain"
                />
              </div>
              
              {/* Center group - Provider 2, iPhone, Provider 3 */}
              <div className="flex items-end gap-2 md:gap-4 lg:gap-6 flex-1 justify-center">
                <img
                  src={joinProvider2}
                  alt="Service Provider 2"
                  className="w-32 md:w-44 lg:w-56 h-auto object-contain"
                />
                <div className="relative z-30">
                  <img
                    src={iphoneJoinProvider}
                    alt="Servicecart App"
                    className="w-56 md:w-72 lg:w-96 h-auto object-contain"
                  />
                </div>
                <img
                  src={joinProvider3}
                  alt="Service Provider 3"
                  className="w-32 md:w-44 lg:w-56 h-auto object-contain"
                />
              </div>
              
              {/* Right edge - Provider 4 */}
              <div className="flex items-end z-10">
                <img
                  src={joinProvider4}
                  alt="Service Provider 4"
                  className="w-32 md:w-44 lg:w-56 h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="relative py-4 md:py-8 lg:py-10 z-10">
        <div className="container mx-auto px-4 max-w-6xl relative">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
            Why Join Us?
          </h2>
          <p className="text-base md:text-lg text-white font-normal max-w-4xl mx-auto">
            We know the problems, service providers face and we are here to end it through
          </p>
        </div>

        {/* Feature Cards Section - Horizontal Row with Substantial Spacing */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 mb-8 md:mb-10">
          {/* Card 1: Get More Customers */}
          <div className="bg-white rounded-xl pt-6 px-6 pb-0 flex-1 shadow-lg flex flex-col h-auto">
            <h3 className="text-lg md:text-xl font-bold text-black mb-4 text-center">
              Get More Customers
            </h3>
            <div className="flex items-end justify-center flex-grow mt-auto min-h-0">
              <img
                src={joinUs1}
                alt="Get More Customers"
                className="w-full h-auto object-contain max-h-[160px]"
              />
            </div>
          </div>

          {/* Card 2: Earn More Money */}
          <div className="bg-white rounded-xl pt-6 px-6 pb-0 flex-1 shadow-lg flex flex-col h-auto">
            <h3 className="text-lg md:text-xl font-bold text-black mb-4 text-center">
              Earn More Money
            </h3>
            <div className="flex items-end justify-center flex-grow mt-auto min-h-0">
              <img
                src={joinUs2}
                alt="Earn More Money"
                className="w-full h-auto object-contain max-h-[160px]"
              />
            </div>
          </div>

          {/* Card 3: Keep More Profits */}
          <div className="bg-white rounded-xl pt-6 px-6 pb-0 flex-1 shadow-lg flex flex-col h-auto">
            <h3 className="text-lg md:text-xl font-bold text-black mb-4 text-center">
              Keep More Profits
            </h3>
            <div className="flex items-end justify-center flex-grow mt-auto min-h-0">
              <img
                src={joinUs3}
                alt="Keep More Profits"
                className="w-full h-auto object-contain max-h-[160px]"
              />
            </div>
          </div>
        </div>

        {/* Call to Action Section - Large Bottom Container */}
        <div className="w-full mx-auto mb-4">
          <div className="bg-white rounded-[25px] p-4 md:p-5 shadow-lg">
            <div className="text-center pt-4 pb-4">
              {/* Main Earnings Text - Green, Very Large, Bold */}
              <h4 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#66CC99] mb-3">
                Earn upto Rs.40,000/pm
              </h4>
              
              {/* Supporting Text - Dark Gray/Black, Medium Size */}
              <p className="text-base md:text-lg text-black font-normal mb-2 max-w-2xl mx-auto">
                Join 500+ service providers already powering the future of home-commerce.
              </p>
              
              {/* Disclaimer Text - Dark Gray, Smaller, Italic */}
              <p className="text-sm text-gray-600 italic mb-4">
                *Earnings are average estimates and may vary*
              </p>
              
              {/* Call-to-Action Button - Purple Background, White Text, Substantial Width and Height */}
              <button className="bg-[#6A3E9B] hover:bg-[#5a2d8b] text-white font-bold text-base md:text-lg px-8 md:px-16 py-4 md:py-5 rounded-[20px] transition-colors duration-300 shadow-md w-full md:w-[65%] max-w-[400px]">
                Apply as Service Provider
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default WhyJoinUs

