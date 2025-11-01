import { Smartphone, Package, CreditCard } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: Smartphone,
      title: 'Book Service',
      description: 'Choose your service and select a time that works for you',
    },
    {
      number: 2,
      icon: Package,
      title: 'Service at Doorstep',
      description: 'Our professional arrives at your location on time',
    },
    {
      number: 3,
      icon: CreditCard,
      title: 'Payment',
      description: 'Pay securely through our app after service completion',
    },
  ]

  return (
    <section className="py-20 bg-primary-800 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How it Works
          </h2>
          <p className="text-xl text-primary-200">
            Easy Steps to Get Service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const IconComponent = step.icon
            return (
              <div
                key={step.number}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-700 rounded-full mb-6">
                  <span className="text-4xl font-bold text-white">{step.number}</span>
                </div>
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-primary-200">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks


