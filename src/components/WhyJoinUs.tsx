import joinUs1 from '../assets/images/join_us_1.svg'
import joinUs2 from '../assets/images/join_us_2.svg'
import joinUs3 from '../assets/images/join_us_3.svg'

const WhyJoinUs = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Linear Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3D205F] to-[#181426]"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Why Join Us?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We know the problems, service providers face and we are here to end it through
          </p>
        </div>

        {/* Feature Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 max-w-6xl mx-auto">
          {/* Card 1: Get More Customers */}
          <div className="bg-[#F8F8F8] rounded-xl p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Get More Customers
            </h3>
            <div className="flex items-center justify-center min-h-[200px]">
              <img
                src={joinUs1}
                alt="Get More Customers"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Card 2: Earn More Money */}
          <div className="bg-[#F8F8F8] rounded-xl p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Earn More Money
            </h3>
            <div className="flex items-center justify-center min-h-[200px]">
              <img
                src={joinUs2}
                alt="Earn More Money"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Card 3: Keep More Profits */}
          <div className="bg-[#F8F8F8] rounded-xl p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Keep More Profits
            </h3>
            <div className="flex items-center justify-center min-h-[200px]">
              <img
                src={joinUs3}
                alt="Keep More Profits"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#F8F8F8] rounded-xl p-8 md:p-12">
            <div className="text-center space-y-4 mb-8">
              <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#50C878]">
                Earn upto Rs.40,000/pm
              </h4>
              <p className="text-base md:text-lg text-black max-w-2xl mx-auto">
                Join 500+ service providers already powering the future of home-commerce.
              </p>
              <p className="text-sm text-gray-500">
                *Earnings are average estimates and may vary*
              </p>
            </div>
            <div className="flex justify-center">
              <button className="bg-[#6A3ABF] hover:bg-[#5A2A9F] text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl">
                Apply as Service Provider
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyJoinUs

