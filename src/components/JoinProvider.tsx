const JoinProvider = () => {
  const steps = [
    {
      title: 'Register',
      description: 'Sign up and create your profile',
      image: 'https://placehold.co/200x200/7c3aed/ffffff?text=Register',
    },
    {
      title: 'Get Verified',
      description: 'Complete verification process',
      image: 'https://placehold.co/200x200/7c3aed/ffffff?text=Verify',
    },
    {
      title: 'Start Earning',
      description: 'Begin providing services and earn',
      image: 'https://placehold.co/200x200/7c3aed/ffffff?text=Earn',
    },
  ]

  const benefits = [
    {
      title: 'Flexible Hours',
      description: 'Work on your own schedule',
      image: 'https://placehold.co/150x150/7c3aed/ffffff?text=F',
    },
    {
      title: 'High Earnings',
      description: 'Earn competitive rates',
      image: 'https://placehold.co/150x150/7c3aed/ffffff?text=H',
    },
    {
      title: 'Secure Payments',
      description: 'Get paid on time, every time',
      image: 'https://placehold.co/150x150/7c3aed/ffffff?text=S',
    },
  ]

  return (
    <>
      {/* Join as Provider Section */}
      <section className="py-20 bg-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Join us as a Service Provider
            </h2>
            <p className="text-xl text-primary-200">
              Earn money by providing services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20"
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-32 h-32 mx-auto mb-6 rounded-lg"
                />
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-primary-200">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Earn up to ₹43,000/month
            </h3>
            <button className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Join Now
            </button>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Join Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide the best platform for service providers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-24 h-24 mx-auto mb-4"
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
    </>
  )
}

export default JoinProvider


