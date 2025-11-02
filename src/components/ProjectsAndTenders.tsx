import { useState, useEffect, useRef } from 'react'
import project1 from '../assets/images/project_1.svg'
import project2 from '../assets/images/project_2.svg'
import project3 from '../assets/images/project_3.svg'

const ProjectsAndTenders = () => {
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

  const cards = [
    {
      id: 1,
      title: 'Explore',
      description: 'Find projects and tenders from verified professionals.',
      image: project1,
    },
    {
      id: 2,
      title: 'Bids',
      description: 'Review bids from bidders to make an informed decision.',
      image: project2,
    },
    {
      id: 3,
      title: 'Hire',
      description: 'Hire the right personnel and get things done, the Servicecart way!',
      image: project3,
    },
  ]

  return (
    <section 
      ref={sectionRef}
      className={`bg-white py-16 md:py-20 lg:py-24 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className={`text-center mb-12 md:mb-16 scroll-reveal scroll-reveal-from-bottom ${isVisible ? 'visible' : ''}`}>
          {/* Top Tag/Button - Pill-shaped */}
          <div className={`inline-block bg-[#EFE7F9] text-[#6A2E9A] text-sm md:text-base font-normal px-6 md:px-8 py-2 md:py-2.5 rounded-full mb-6 md:mb-8 scroll-bounce-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>
            More than Services
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6 leading-tight">
            Projects and Tenders
          </h2>

          {/* Descriptive Paragraph */}
          <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Servicecart offers a unique chance to engage with exciting corporate projects and tenders, enhancing your professional portfolio.
          </p>
        </div>

        {/* Three Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`bg-gray-50 rounded-[32px] shadow-lg flex flex-col h-auto overflow-hidden scroll-fade-scale hover-lift hover-glow transition-all duration-700 ${
                isVisible ? 'visible' : ''
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Title and Description - Center-aligned with reduced padding */}
              <div className="px-4 md:px-6 pt-4 md:pt-6 pb-4 md:pb-6 flex-shrink-0 text-center">
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-black mb-2 md:mb-3 text-center">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm text-black leading-relaxed text-center">
                  {card.description}
                </p>
              </div>

              {/* Large empty space */}
              <div className="flex-grow"></div>

              {/* Image locked to bottom edge with no space - reduced size */}
              <div className="flex items-end justify-center pb-0 overflow-hidden hover-shine">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto object-contain max-h-[180px] md:max-h-[200px] hover-scale transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsAndTenders

