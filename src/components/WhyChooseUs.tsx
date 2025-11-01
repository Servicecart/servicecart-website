const WhyChooseUs = () => {
  const benefits = [
    {
      title: 'Easy Booking',
      description: 'Simple and quick booking process',
      icon: 'https://placehold.co/80x80/7c3aed/ffffff?text=E',
    },
    {
      title: 'Fast & Reliable',
      description: 'Quick response and dependable service',
      icon: 'https://placehold.co/80x80/7c3aed/ffffff?text=F',
    },
    {
      title: 'Experienced Professionals',
      description: 'Skilled and verified service providers',
      icon: 'https://placehold.co/80x80/7c3aed/ffffff?text=P',
    },
    {
      title: 'Affordable Prices',
      description: 'Competitive pricing for all services',
      icon: 'https://placehold.co/80x80/7c3aed/ffffff?text=$',
    },
    {
      title: 'Quality Service',
      description: 'High-quality service guaranteed',
      icon: 'https://placehold.co/80x80/7c3aed/ffffff?text=Q',
    },
    {
      title: 'Customer Support',
      description: '24/7 customer support available',
      icon: 'https://placehold.co/80x80/7c3aed/ffffff?text=S',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Servicecart
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide the best services with exceptional customer care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-primary-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <img
                src={benefit.icon}
                alt={benefit.title}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs


