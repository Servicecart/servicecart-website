import { useState, useEffect, useRef } from 'react'
import whyChooseUs1 from '../assets/images/why-choose-us1.png'
import whyChooseUs2 from '../assets/images/why-choose-us2.png'
import whyChooseUs3 from '../assets/images/why-choose-us3.png'
import whyChooseUs4 from '../assets/images/why-choose-us4.png'
import whyChooseUs5 from '../assets/images/why-choose-us5.png'
import whyChooseUs6 from '../assets/images/why-choose-us6.png'

const WhyChooseUs = () => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set())
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const reasons = [
    {
      id: 1,
      image: whyChooseUs1,
      text: 'Choose your provider',
    },
    {
      id: 2,
      image: whyChooseUs2,
      text: 'Seasonal Trending Services',
    },
    {
      id: 3,
      image: whyChooseUs3,
      text: 'Hire people for your work',
    },
    {
      id: 4,
      image: whyChooseUs4,
      text: 'Verified Providers',
    },
    {
      id: 5,
      image: whyChooseUs5,
      text: 'Apply for tenders and projects',
    },
    {
      id: 6,
      image: whyChooseUs6,
      text: 'Trusted by 1Lakh+ users',
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

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-purple-100 text-purple-700 px-6 py-2 rounded-full text-sm font-medium mb-6">
            Why us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Servicecart
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We have got not one but 6 reasons and here's why:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={reason.id}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              data-animate-id={`card-${index}`}
              className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-700 ${
                visibleElements.has(`card-${index}`)
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="rounded-t-xl overflow-hidden">
                <img
                  src={reason.image}
                  alt={reason.text}
                  className="w-full h-auto"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-base font-medium text-gray-900">{reason.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs


