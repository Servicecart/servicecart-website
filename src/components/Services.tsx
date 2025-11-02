import { useState, useEffect, useRef } from 'react'
import ourService1 from '../assets/images/our_service.png'
import ourService2 from '../assets/images/our_service2.png'
import ourService3 from '../assets/images/our_service3.png'
import ourService4 from '../assets/images/our_service4.png'
import ourService5 from '../assets/images/our_service5.png'

const Services = () => {
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
  const services = [
    {
      id: 1,
      image: ourService1,
    },
    {
      id: 2,
      image: ourService2,
    },
    {
      id: 3,
      image: ourService3,
    },
    {
      id: 4,
      image: ourService4,
    },
    {
      id: 5,
      image: ourService5,
    },
  ]

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className={`py-20 bg-white transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 scroll-reveal scroll-reveal-from-bottom ${isVisible ? 'visible' : ''}`}>
          <div className="inline-block bg-[#EFE7F9] text-[#6A2E9A] px-6 md:px-8 py-2 md:py-2.5 rounded-full text-sm md:text-base font-normal mb-6 scroll-bounce-in" style={{ transitionDelay: '100ms' }}>
            Our Top Services
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            We proudly present our top curated categories
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from the best hand picked services across home, personal care, utility and custom services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-gray-100 rounded-xl overflow-hidden scroll-fade-scale hover-lift ${
                isVisible ? 'visible' : ''
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <img
                src={service.image}
                alt={`Service ${service.id}`}
                className="w-full h-auto object-contain hover-scale transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

