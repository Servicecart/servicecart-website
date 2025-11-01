import { useState, useEffect } from 'react'
import sliderContainer1 from '../assets/images/slider_container1.png'
import sliderContainer2 from '../assets/images/slider_container2.png'
import sliderContainer3 from '../assets/images/slider_container3.png'
import sliderContainer from '../assets/images/slider_container.png'

const ServiceCategories = () => {
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
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Light Purple Rounded Banner */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="bg-[#F3E8FF] rounded-2xl px-8 md:px-12 py-3 md:py-4 shadow-md">
            <p className="text-base md:text-lg font-semibold text-gray-800 whitespace-nowrap">
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

