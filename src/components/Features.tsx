const Features = () => {
  const features = [
    {
      title: 'Easy Booking',
      description: 'Book your service in just a few taps',
      image: 'https://placehold.co/300x600/ffffff/7c3aed?text=Booking+Screen',
    },
    {
      title: 'Track Your Service',
      description: 'Real-time tracking of your service provider',
      image: 'https://placehold.co/300x600/ffffff/7c3aed?text=Tracking+Screen',
    },
    {
      title: 'Secure Payment',
      description: 'Safe and secure payment options',
      image: 'https://placehold.co/300x600/ffffff/7c3aed?text=Payment+Screen',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our App Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our app is designed to make your life easier with intuitive features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center space-y-6"
            >
              <div className="flex justify-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="rounded-2xl shadow-lg max-w-[200px]"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features


