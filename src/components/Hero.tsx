import { useEffect } from 'react'
import appleIcon from '../assets/images/apple-icon.png'
import googleIcon from '../assets/images/google-icon.png'
import womanProfessional from '../assets/images/women-professional.png'
import manProfessional from '../assets/images/man-professional.png'
import { trackPageView, trackDownload } from '../utils/analytics'

const Hero = () => {
  useEffect(() => {
    trackPageView('hero')
  }, [])



  return (
    <section 
      id="home" 
      className="bg-[#3E2061] rounded-b-[40px] sm:rounded-b-[50px] md:rounded-b-[60px] lg:rounded-b-[80px] relative overflow-hidden pb-6 sm:pb-8 md:pb-10 lg:pb-12 pt-24 sm:pt-28 md:pt-32 lg:pt-36 min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] lg:min-h-[75vh] flex items-center justify-center"
      style={{ marginTop: '-10rem', paddingTop: 'calc(10rem + 6rem)' }}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3E2061] via-[#8A56E8]/25 to-[#3E2061] animate-gradient-shift"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 blur-sm"
            style={{
              width: `${3 + i}px`,
              height: `${3 + i}px`,
              left: `${20 + i * 12}%`,
              top: `${15 + i * 10}%`,
              animation: `particleFloat ${20 + i * 3}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Left Character - Woman Professional */}
      <div className="hidden md:block absolute left-0 md:-left-12 lg:-left-16 xl:-left-20 bottom-0 z-10 pointer-events-none">
        <img
          src={womanProfessional}
          alt="Servicecart Professional"
          className="w-[200px] md:w-[240px] lg:w-[280px] xl:w-[320px] 2xl:w-[380px] h-auto object-contain"
          style={{ maxHeight: '500px' }}
        />
      </div>

      {/* Right Character - Man Professional */}
      <div className="hidden md:block absolute right-0 md:-right-12 lg:-right-16 xl:-right-20 bottom-0 z-10 pointer-events-none">
        <img
          src={manProfessional}
          alt="Servicecart Professional"
          className="w-[200px] md:w-[240px] lg:w-[280px] xl:w-[320px] 2xl:w-[380px] h-auto object-contain"
          style={{ maxHeight: '500px' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4 relative z-20 w-full max-w-7xl">
        {/* Top Section - Headline and Subtitle */}
        <div className="text-center mb-5 sm:mb-6 md:mb-8 lg:mb-10 animate-fade-in-up">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-5 leading-tight sm:leading-tight md:leading-tight drop-shadow-2xl px-2 sm:px-0">
            Get Home Services in{' '}
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent animate-text-glow inline-block">
              30 minutes
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 font-normal max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
            Servicecart helps you book professional home services instantly.
          </p>
        </div>

        {/* Download Buttons with Enhanced Design */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 px-4 sm:px-6 md:px-8 lg:px-0 animate-fade-in-delayed">
          <a 
            href="https://apps.apple.com/in/app/servicecart/id6477325801"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackDownload('app_store')}
            className="group relative flex items-center gap-2 sm:gap-3 bg-white/95 backdrop-blur-sm text-black px-5 sm:px-6 md:px-7 lg:px-8 py-3 sm:py-3.5 rounded-full hover:bg-white transition-all shadow-xl hover:scale-105 hover:shadow-2xl overflow-hidden w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img src={appleIcon} alt="Apple" className="w-7 h-7 sm:w-8 sm:h-8 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
            <div className="flex flex-col items-start relative z-10">
              <span className="text-[9px] sm:text-[10px] md:text-xs leading-tight text-black">Download on the</span>
              <span className="text-xs sm:text-sm md:text-base font-semibold leading-tight text-black">App Store</span>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </a>

          <a 
            href="https://play.google.com/store/apps/details?id=com.servicecaart.userapp&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackDownload('google_play')}
            className="group relative flex items-center gap-2 sm:gap-3 bg-white/95 backdrop-blur-sm text-black px-5 sm:px-6 md:px-7 lg:px-8 py-3 sm:py-3.5 rounded-full hover:bg-white transition-all shadow-xl hover:scale-105 hover:shadow-2xl overflow-hidden w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img src={googleIcon} alt="Google Play" className="w-7 h-7 sm:w-8 sm:h-8 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
            <div className="flex flex-col items-start relative z-10">
              <span className="text-[9px] sm:text-[10px] md:text-xs leading-tight font-semibold text-black">GET IT ON</span>
              <span className="text-xs sm:text-sm md:text-base font-semibold leading-tight text-black">Google Play</span>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero


