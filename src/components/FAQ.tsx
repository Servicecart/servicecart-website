import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What is Servicecart?',
      answer: 'Servicecart is a platform that connects customers with professional service providers for various home services like cleaning, plumbing, electrical work, and more.',
    },
    {
      question: 'How do I book a service?',
      answer: 'You can book a service through our mobile app or website. Simply select the service you need, choose a time slot, and confirm your booking.',
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept all major credit cards, debit cards, UPI, and digital wallets for secure payments.',
    },
    {
      question: 'Is it safe to use Servicecart?',
      answer: 'Yes, all our service providers are verified and background-checked. We ensure the safety and security of both customers and service providers.',
    },
    {
      question: 'Can I cancel my booking?',
      answer: 'Yes, you can cancel your booking up to 2 hours before the scheduled time without any charges.',
    },
    {
      question: 'What if I\'m not satisfied with the service?',
      answer: 'Your satisfaction is our priority. Contact our customer support team, and we\'ll work to resolve any issues or provide a refund if needed.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            68% of customers are satisfied with our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary-600 transition-transform flex-shrink-0 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
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


