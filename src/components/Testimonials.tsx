import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      rating: 5,
      text: 'Servicecart made it so easy to book a cleaning service. The team was professional and thorough!',
      image: 'https://placehold.co/100x100/7c3aed/ffffff?text=SJ',
    },
    {
      name: 'Mike Chen',
      role: 'Business Owner',
      rating: 5,
      text: 'Best service booking app I\'ve used. Fast, reliable, and the professionals are top-notch.',
      image: 'https://placehold.co/100x100/7c3aed/ffffff?text=MC',
    },
    {
      name: 'Emma Davis',
      role: 'Real Estate Agent',
      rating: 5,
      text: 'I use Servicecart regularly for my properties. Always on time and excellent quality.',
      image: 'https://placehold.co/100x100/7c3aed/ffffff?text=ED',
    },
    {
      name: 'David Wilson',
      role: 'Homeowner',
      rating: 5,
      text: 'The convenience of booking services through the app is unmatched. Highly recommend!',
      image: 'https://placehold.co/100x100/7c3aed/ffffff?text=DW',
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="flex items-center mb-6">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
              </div>
            </div>

            <div className="flex mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <p className="text-gray-700 text-lg italic">
              "{testimonials[currentIndex].text}"
            </p>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-primary-100 hover:bg-primary-200 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-primary-800" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary-800' : 'bg-primary-200'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-primary-100 hover:bg-primary-200 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-primary-800" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials


