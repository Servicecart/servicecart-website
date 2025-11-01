import groupIphone from '../assets/images/group_iphone.png'
import appleIcon from '../assets/images/apple-icon.png'
import googleIcon from '../assets/images/google-icon.png'

const GetHomeServicesToday = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pb-0">
      {/* Solid Background matching the image */}
      <div className="absolute inset-0 bg-[#281A3B]"></div>
      
      {/* Content (Text and Buttons) */}
      <div className="relative z-20 container mx-auto px-4 pt-16 md:pt-20 lg:pt-24 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight">
          Get Home Services today.
        </h2>
        <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-12 md:mb-16 lg:mb-20 leading-tight">
          Download Servicecart App!
        </h3>

        {/* Download Buttons - Rounded rectangles with proper spacing */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 mb-32 md:mb-40 lg:mb-48">
          {/* App Store Button */}
          <button className="flex items-center gap-3 bg-white text-black px-8 md:px-10 lg:px-12 py-4 md:py-5 rounded-xl hover:bg-gray-50 transition-colors shadow-lg">
            <img src={appleIcon} alt="Apple" className="w-8 h-8 object-contain" />
            <div className="flex flex-col items-start">
              <span className="text-[10px] md:text-xs leading-tight text-black">Download on the</span>
              <span className="text-sm md:text-base font-semibold leading-tight text-black">App Store</span>
            </div>
          </button>

          {/* Google Play Button */}
          <button className="flex items-center gap-3 bg-white text-black px-8 md:px-10 lg:px-12 py-4 md:py-5 rounded-xl hover:bg-gray-50 transition-colors shadow-lg">
            <img src={googleIcon} alt="Google Play" className="w-8 h-8 object-contain" />
            <div className="flex flex-col items-start">
              <span className="text-[10px] md:text-xs leading-tight font-semibold text-black">GET IT ON</span>
              <span className="text-sm md:text-base font-semibold leading-tight text-black">Google Play</span>
            </div>
          </button>
        </div>
      </div>

      {/* iPhone Group Image - Absolutely positioned at the bottom */}
      <img
        src={groupIphone}
        alt="Group of iPhones displaying the app"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-full max-w-5xl h-auto object-contain"
      />
    </section>
  )
}

export default GetHomeServicesToday

