import { useEffect, useRef, useState } from 'react'
import appleIcon from '../assets/images/apple-icon.png'
import googleIcon from '../assets/images/google-icon.png'
import cleaningVideo1 from '../assets/videos/Indian_Servicemen_Cleaning_Woman_Watering_Plants.mp4'
import cleaningVideo2 from '../assets/videos/Indian_Ethnicity_Video_Generation.mp4'
import { trackPageView, trackDownload } from '../utils/analytics'

const Hero = () => {
  const videoRef1 = useRef<HTMLVideoElement>(null)
  const videoRef2 = useRef<HTMLVideoElement>(null)
  const [currentVideo, setCurrentVideo] = useState(1)

  useEffect(() => {
    trackPageView('hero')
  }, [])

  useEffect(() => {
    // Start with first video
    if (videoRef1.current) {
      videoRef1.current.muted = true
      videoRef1.current.play().catch(console.error)
    }
  }, [])

  useEffect(() => {
    // Handle video transitions - when one ends, play the next
    const video1 = videoRef1.current
    const video2 = videoRef2.current

    const handleVideo1End = () => {
      if (video2) {
        video2.currentTime = 0
        video2.play().catch(console.error)
        setCurrentVideo(2)
      }
    }

    const handleVideo2End = () => {
      if (video1) {
        video1.currentTime = 0
        video1.play().catch(console.error)
        setCurrentVideo(1)
      }
    }

    if (video1) {
      video1.addEventListener('ended', handleVideo1End)
    }
    if (video2) {
      video2.addEventListener('ended', handleVideo2End)
    }

    return () => {
      if (video1) {
        video1.removeEventListener('ended', handleVideo1End)
      }
      if (video2) {
        video2.removeEventListener('ended', handleVideo2End)
      }
    }
  }, [])

  return (
    <section 
      id="home" 
      className="bg-[#3E2061] rounded-b-[40px] sm:rounded-b-[50px] md:rounded-b-[60px] lg:rounded-b-[80px] relative overflow-hidden pb-6 sm:pb-8 md:pb-10 lg:pb-12 pt-24 sm:pt-28 md:pt-32 lg:pt-36 min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] lg:min-h-[95vh] flex items-center justify-center"
      style={{ marginTop: '-10rem', paddingTop: 'calc(10rem + 6rem)' }}
    >
      {/* Sequential Auto-looping Background Videos */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* First Video */}
        <video
          ref={videoRef1}
          autoPlay
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            currentVideo === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{ objectPosition: 'center' }}
        >
          <source src={cleaningVideo1} type="video/mp4" />
        </video>
        
        {/* Second Video */}
        <video
          ref={videoRef2}
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            currentVideo === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{ objectPosition: 'center' }}
        >
          <source src={cleaningVideo2} type="video/mp4" />
        </video>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
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

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4 relative z-20 w-full max-w-7xl">
        {/* Left-aligned Section - Headline and Subtitle */}
        <div className="text-left mb-5 sm:mb-6 md:mb-8 lg:mb-10 animate-fade-in-up max-w-2xl">
          <h1 
            className="text-white mb-3 sm:mb-4 md:mb-5"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontStyle: 'normal',
              fontSize: 'clamp(32px, 8vw, 72px)',
              lineHeight: 'clamp(40px, 9vw, 80px)',
              letterSpacing: '0px',
              verticalAlign: 'middle',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5), 0px 0px 12px rgba(0, 0, 0, 0.3)'
            }}
          >
            Your Home's Bestfriend
          </h1>
          <p 
            className="text-white mb-6 sm:mb-8"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontStyle: 'normal',
              fontSize: 'clamp(14px, 2vw, 18px)',
              lineHeight: 'clamp(20px, 3vw, 28px)',
              letterSpacing: '0px',
              verticalAlign: 'middle',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5), 0px 0px 12px rgba(0, 0, 0, 0.3)'
            }}
          >
            Get Professional Home Services in 30 minutes
          </p>
        </div>

        {/* Download Buttons with Enhanced Design */}
        <div className="flex flex-col sm:flex-row items-start justify-start gap-3 sm:gap-4 md:gap-5 lg:gap-6 animate-fade-in-delayed">
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


