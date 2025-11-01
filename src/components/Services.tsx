import ourService1 from '../assets/images/our_service.png'
import ourService2 from '../assets/images/our_service2.png'
import ourService3 from '../assets/images/our_service3.png'
import ourService4 from '../assets/images/our_service4.png'
import ourService5 from '../assets/images/our_service5.png'

const Services = () => {
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
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-purple-100 text-purple-700 px-6 py-2 rounded-full text-sm font-medium mb-6">
            Our Top Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            We proudly present our top curated categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from the best hand picked services across home, personal care, utility and custom services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={service.image}
                alt={`Service ${service.id}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

