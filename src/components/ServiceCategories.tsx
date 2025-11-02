import { useState, useEffect, useRef } from 'react'
import sliderContainer1 from '../assets/images/slider_container1.png'
import sliderContainer2 from '../assets/images/slider_container2.png'
import sliderContainer3 from '../assets/images/slider_container3.png'
import sliderContainer from '../assets/images/slider_container.png'

const ServiceCategories = () => {
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
  const categories = [
    {
      id: 1,
      image: sliderContainer1,
      label: 'Makeup'
    },
    {
      id: 2,
      image: sliderContainer2,
      label: 'Salon'
    },
    {
      id: 3,
      image: sliderContainer3,
      label: 'Appliance Repairs'
    },
    {
      id: 4,
      image: sliderContainer,
      label: 'Spirituality'
    },
    {
      id: 5,
      image: sliderContainer1,
      label: 'Car Wash'
    },
    {
      id: 6,
      image: sliderContainer2,
      label: 'Plumbing'
    },
    {
      id: 7,
      image: sliderContainer3,
      label: 'Cleaning'
    },
    {
      id: 8,
      image: sliderContainer,
      label: 'Electrical'
    },
    {
      id: 9,
      image: sliderContainer1,
      label: 'Carpentry'
    },
    {
      id: 10,
      image: sliderContainer2,
      label: 'Painting'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // Calculate how many slides we can have (show 5 cards per slide)
  const cardsPerSlide = 5
  const maxIndex = Math.max(0, categories.length - cardsPerSlide)

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (maxIndex === 0) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0 // Loop back to start
        }
        return prev + 1
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [maxIndex])

  return (
    <section 
      id="what-we-do"
      ref={sectionRef}
      className={`hidden md:block py-12 md:py-16 bg-white transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Light Purple Rounded Banner */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="bg-[#EFE7F9] rounded-full px-6 md:px-8 py-2 md:py-2.5 shadow-md">
            <p className="text-sm md:text-base font-normal text-[#6A2E9A] whitespace-nowrap">
              100+ categories to choose from
            </p>
          </div>
        </div>

        {/* Auto-sliding Carousel */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerSlide)}%)`
            }}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex-shrink-0 px-3 md:px-4"
                style={{ width: `${100 / cardsPerSlide}%` }}
              >
                <div className="bg-white rounded-xl p-4 md:p-6 h-full flex items-center justify-center">
                  {/* 3D Icon Image */}
                  <div className="flex items-center justify-center w-full h-full">
                    <img
                      src={category.image}
                      alt={category.label}
                      className="max-w-full max-h-full object-contain w-auto h-auto"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceCategories

