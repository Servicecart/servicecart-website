import { ChevronDown } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { trackFAQ, trackSectionView } from '../utils/analytics'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          trackSectionView('faq')
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

  const faqs = [
    {
      question: 'What is Servicecart?',
      answer: 'Servicecart is a comprehensive platform that connects customers with professional service providers for various home services including cleaning, plumbing, electrical work, carpentry, painting, and more. We make it easy to find, book, and manage home services through our user-friendly mobile app and website.',
    },
    {
      question: 'How do I book a service with Servicecart?',
      answer: 'Booking a service with Servicecart is simple! Download our mobile app or visit our website, browse through available services, select the service you need, choose a convenient time slot, provide your address and contact details, and confirm your booking. You\'ll receive instant confirmation with all the details.',
    },
    {
      question: 'Can I trust the providers sent by Servicecart?',
      answer: 'Absolutely! All service providers on Servicecart undergo a rigorous verification process including background checks, identity verification, and skill assessment. We only partner with experienced, licensed, and insured professionals. Additionally, all providers are rated by previous customers, so you can see their track record before booking.',
    },
    {
      question: 'Can I change/cancel my bookings?',
      answer: 'Yes, you can change or cancel your bookings easily through the app or website. For cancellations made at least 2 hours before the scheduled time, there are no charges. You can reschedule your booking for free up to 24 hours before the appointment. Cancellations made less than 2 hours before the appointment may incur a small cancellation fee.',
    },
    {
      question: 'How can I track my order?',
      answer: 'You can track your service booking in real-time through the Servicecart app. Once your booking is confirmed, you\'ll receive regular updates including when the provider is assigned, when they\'re on the way, arrival time, and service completion. You\'ll also receive SMS and email notifications at each stage of the process.',
    },
    {
      question: 'Do you offer discounts for bulk orders?',
      answer: 'Yes! Servicecart offers attractive discounts for bulk orders and recurring services. If you book multiple services together or set up a recurring service schedule, you\'ll receive special pricing. We also have seasonal promotions and loyalty programs that provide additional savings for regular customers. Contact our support team to learn about current bulk order discounts.',
    },
    {
      question: 'Can I combine multiple tasks in one booking?',
      answer: 'Yes, you can combine multiple related tasks in a single booking. For example, if you need both deep cleaning and carpet cleaning, you can add both services to one booking. This not only saves you time but may also qualify you for a discount. Simply select multiple services when booking, and our provider will handle all tasks in one visit.',
    },
    {
      question: 'What if I\'m not happy with the service?',
      answer: 'Your satisfaction is our top priority. If you\'re not happy with the service, please contact our customer support team immediately through the app, phone, or email. We\'ll investigate the issue and work with you to resolve it. Depending on the situation, we can arrange a re-service at no extra cost, provide a partial or full refund, or assign a different provider. We guarantee your satisfaction!',
    },
  ]

  const toggleFAQ = (index: number) => {
    const wasOpen = openIndex === index
    setOpenIndex(wasOpen ? null : index)
    trackFAQ(wasOpen ? 'close' : 'open', faqs[index].question)
  }

  return (
    <section 
      id="faqs" 
      ref={sectionRef}
      className={`py-20 bg-white transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            All your questions answered
          </h2>
        </div>

        {/* Light gray container with rounded corners */}
        <div className="max-w-4xl mx-auto bg-gray-100 rounded-3xl p-6 md:p-8 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-base md:text-lg font-semibold text-gray-900 pr-4 flex-1">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-700 transition-transform flex-shrink-0 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 pt-0">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ


