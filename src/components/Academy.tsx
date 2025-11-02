import { useState, useEffect, useRef } from 'react'
import academy1 from '../assets/images/academy1.png'
import academy2 from '../assets/images/academy2.png'
import academy3 from '../assets/images/academy3.png'

const Academy = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set())
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const headerPillRef = useRef<HTMLDivElement>(null)
  const headerTitleRef = useRef<HTMLDivElement>(null)

  const cards = [
    {
      id: 1,
      title: 'Register for Certification Course',
      titleLine1: 'Register for Certification',
      titleLine2: 'Course',
      image: academy1,
    },
    {
      id: 2,
      title: 'Learn from the best and Implement',
      titleLine1: 'Learn from the best',
      titleLine2: 'and Implement',
      image: academy2,
    },
    {
      id: 3,
      title: 'Get professionally verified with certificate',
      titleLine1: 'Get professionally verified',
      titleLine2: 'with certificate',
      image: academy3,
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute('data-animate-id')
            if (elementId) {
              setVisibleElements((prev) => new Set(prev).add(elementId))
            }
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card)
      }
    })

    if (headerPillRef.current) observer.observe(headerPillRef.current)
    if (headerTitleRef.current) observer.observe(headerTitleRef.current)

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
      if (headerPillRef.current) observer.unobserve(headerPillRef.current)
      if (headerTitleRef.current) observer.unobserve(headerTitleRef.current)
    }
  }, [])

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          {/* Academy Tag - Oval Pill Shape */}
          <div 
            ref={headerPillRef}
            data-animate-id="pill"
            className={`inline-block mb-8 md:mb-10 transition-all duration-700 ${
              visibleElements.has('pill') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <div className="bg-[#EFE7F9] rounded-full px-8 md:px-12 py-2 md:py-2.5">
              <p className="text-sm md:text-base font-normal text-[#6A2E9A]">
                Academy
              </p>
            </div>
          </div>

          {/* Main Title */}
          <div 
            ref={headerTitleRef}
            data-animate-id="title"
            className={`transition-all duration-700 delay-100 ${
              visibleElements.has('title') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-6 md:mb-8">
              What is Servicecart Academy?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-normal">
              Are you an expert seeking recognition? Servicecart connects you with training centers offering professional certifications. Elevate your credentials and stand out!
            </p>
          </div>
        </div>

        {/* Three-Column Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              data-animate-id={`card-${index}`}
              className={`bg-gray-50 rounded-[32px] transition-all duration-700 flex flex-col h-auto shadow-lg ${
                visibleElements.has(`card-${index}`)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Title - Centered at top with substantial padding */}
              <div className="px-6 md:px-8 pt-6 md:pt-8 pb-6 md:pb-8 flex-shrink-0">
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-black text-center leading-tight">
                  {card.titleLine1 && card.titleLine2 ? (
                    <>
                      <span>{card.titleLine1}</span>
                      <br />
                      <span className="text-sm md:text-base lg:text-lg">{card.titleLine2}</span>
                    </>
                  ) : (
                    card.title
                  )}
                </h3>
              </div>
              
              {/* Large empty space - equal to text + figures height */}
              <div className="flex-grow"></div>
              
              {/* Image locked to bottom edge with no space */}
              <div className="flex items-end justify-center pb-0 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Academy

