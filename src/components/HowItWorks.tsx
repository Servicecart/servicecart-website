import { useState, useEffect, useRef } from 'react'
import howWorks1 from '../assets/images/how_works_1.png'
import howWorks2 from '../assets/images/how_works_2.png'
import howWorks3 from '../assets/images/how_works_3.png'

const HowItWorks = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set())
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const headerPillRef = useRef<HTMLDivElement>(null)
  const headerTitleRef = useRef<HTMLDivElement>(null)

  const steps = [
    {
      number: 1,
      description: 'Choose from over 100+ services',
      image: howWorks1,
    },
    {
      number: 2,
      description: 'Book your appointment on preferred dates.',
      image: howWorks2,
    },
    {
      number: 3,
      description: 'Share OTP with the provider and leave the rest to us.',
      image: howWorks3,
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
    <section ref={sectionRef} className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* How it works Pill */}
        <div 
          ref={headerPillRef}
          data-animate-id="pill"
          className={`flex justify-center mb-6 transition-all duration-700 ${
            visibleElements.has('pill') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="bg-[#EFE7F9] rounded-full px-6 md:px-8 py-2 md:py-2.5">
            <p className="text-sm md:text-base font-normal text-[#6A2E9A]">
              How it works
            </p>
          </div>
        </div>

        {/* Main Title */}
        <div 
          ref={headerTitleRef}
          data-animate-id="title"
          className={`text-center mb-4 transition-all duration-700 delay-100 ${
            visibleElements.has('title') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3E2061] mb-4">
            Booking services is now easier than ever!
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Follow these 3 easy steps on our app to easily book any of our services.
          </p>
        </div>

        {/* Three Step Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              data-animate-id={`card-${index}`}
              className="overflow-hidden flex flex-col transition-all duration-700"
              style={{
                borderRadius: '32px',
                backgroundColor: '#3E2061',
                transitionDelay: `${index * 150}ms`,
                opacity: visibleElements.has(`card-${index}`) ? 1 : 0,
                transform: visibleElements.has(`card-${index}`) ? 'translateY(0)' : 'translateY(32px)',
              }}
            >
              {/* Top content with padding */}
              <div className="px-6 md:px-8 pt-6 md:pt-8 pb-4 flex flex-col items-center">
                {/* Step Label Pill */}
                <div className="bg-[#F3E8FF] rounded-full px-4 py-2 mb-4">
                  <p className="text-sm md:text-base font-semibold text-[#3E2061]">
                    Step {step.number}
                  </p>
                </div>

                {/* Description */}
                <p className="text-white text-base md:text-lg font-medium text-center">
                  {step.description}
                </p>
              </div>

              {/* Phone Mock-up at bottom with no gap */}
              <div className="mt-auto w-full flex justify-center">
                <img
                  src={step.image}
                  alt={`Step ${step.number}`}
                  className="h-auto object-contain shadow-2xl transition-transform duration-700 hover:scale-105"
                  style={{
                    filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.3))',
                    maxWidth: '85%',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks


