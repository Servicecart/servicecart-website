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
            <a 
              href="#what-we-do" 
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('what-we-do')
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="text-black font-normal text-base hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              What we do
            </a>
            <a 
              href="#why-us" 
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('why-us')
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="text-black font-normal text-base hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              Why Us
            </a>
          </div>

          {/* Center Brand Name */}
          <a 
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById('home')
              element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            className="text-3xl font-bold text-[#8A56E8] whitespace-nowrap hover:opacity-80 transition-opacity cursor-pointer"
          >
            Servicecart
          </a>

          {/* Right Navigation */}
          <div className="flex items-center gap-8">
            <a 
              href="#faqs" 
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('faqs')
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="text-black font-normal text-base hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              FAQs
            </a>
            <a 
              href="#download" 
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('download')
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="text-black font-normal text-base hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              Download
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header


