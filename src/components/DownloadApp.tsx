import wolfPointingRight from '../assets/images/wolf_pointing_right.png'
import iphoneQR from '../assets/images/iphone_QR.png'

const DownloadApp = () => {
  return (
    <section className="relative overflow-visible bg-white">
      <div className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
        {/* Purple Background - Bottom 50% of section */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#3E2061] z-0">
          <div className="relative h-full flex items-center px-6 md:px-12 lg:px-16 xl:px-20">
            {/* Text Content on Left */}
            <div className="relative z-10 max-w-lg lg:max-w-xl xl:max-w-2xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight">
                Get the Servicecart App now!
              </h2>
              <p className="text-sm md:text-base lg:text-lg xl:text-xl text-white leading-relaxed">
                Join now and get special curated offers just for you.
              </p>
            </div>
          </div>
        </div>

        {/* Wolf Mascot - Positioned on right side of purple background, extending upward */}
        <div className="hidden md:block absolute right-[20%] bottom-0 z-20 pointer-events-none" style={{ height: '75%', maxHeight: '75%' }}>
          <img
            src={wolfPointingRight}
            alt="Servicecart Mascot"
            className="h-full w-auto object-contain"
          />
        </div>

        {/* iPhone - Positioned on far right, extending upward, stacked above wolf */}
        <div className="hidden md:block absolute right-0 bottom-0 z-30 pointer-events-none" style={{ height: '80%', maxHeight: '80%' }}>
          <img
            src={iphoneQR}
            alt="Scan QR to Download App"
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default DownloadApp


