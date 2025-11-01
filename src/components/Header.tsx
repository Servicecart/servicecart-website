import { useState, useEffect } from 'react'

const Header = () => {
  const [isOverHero, setIsOverHero] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home')
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        const scrollPosition = window.scrollY + 100 // Offset for header height
        setIsOverHero(scrollPosition < heroBottom)
      }
    }

    handleScroll() // Check on mount
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 py-8 transition-colors duration-300 ${
      isOverHero ? 'bg-[#3E2061]' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        {/* White pill-shaped container */}
        <nav className="bg-white rounded-full px-12 py-5 flex items-center justify-center gap-12 max-w-6xl mx-auto shadow-2xl">
          {/* Left Navigation */}
          <div className="flex items-center gap-8">
            <a href="#what-we-do" className="text-black font-normal text-base hover:opacity-80 transition-opacity whitespace-nowrap">
              What we do
            </a>
            <a href="#why-us" className="text-black font-normal text-base hover:opacity-80 transition-opacity whitespace-nowrap">
              Why Us
            </a>
          </div>

          {/* Center Brand Name */}
          <div className="text-3xl font-bold text-[#8A56E8] whitespace-nowrap">
            Servicecart
          </div>

          {/* Right Navigation */}
          <div className="flex items-center gap-8">
            <a href="#faqs" className="text-black font-normal text-base hover:opacity-80 transition-opacity whitespace-nowrap">
              FAQs
            </a>
            <a href="#download" className="text-black font-normal text-base hover:opacity-80 transition-opacity whitespace-nowrap">
              Download
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header


