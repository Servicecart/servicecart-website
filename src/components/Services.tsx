const Services = () => {
  const services = [
    {
      title: 'Haircut & Styling',
      description: 'Professional haircuts and styling services',
      icon: 'https://placehold.co/80x80/7c3aed/ffffff?text=H',
    },
    {
      title: 'Home Cleaning',
      description: 'Deep cleaning and regular maintenance',
      icon: 'https://placehold.co/80x80/7c3aed/ffffff?text=C',
    },
    {
      title: 'Gas Delivery',
      description: 'Quick and safe gas cylinder delivery',
      icon: 'https://placehold.co/80x80/7c3aed/ffffff?text=G',
    },
    {
      title: 'Plumbing',
      description: 'Expert plumbing services 24/7',
      icon: 'https://placehold.co/80x80/7c3aed/ffffff?text=P',
    },
    {
      title: 'Car Repair',
      description: 'Professional auto repair services',
      icon: 'https://placehold.co/80x80/7c3aed/ffffff?text=R',
    },
    {
      title: 'Laptop Repair',
      description: 'Fast and reliable laptop repairs',
      icon: 'https://placehold.co/80x80/7c3aed/ffffff?text=L',
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of professional services to make your life easier
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services


