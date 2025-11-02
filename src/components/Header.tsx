import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsMobileMenuOpen(false) // Close mobile menu on click
  }

  const navigationLinks = [
    { href: '#services', label: 'Services', id: 'services' },
    { href: '#how-it-works', label: 'How It Works', id: 'how-it-works' },
    { href: '#why-us', label: 'Why Choose Us', id: 'why-us' },
    { href: '#download', label: 'Download', id: 'download' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-transparent">
      {/* Desktop Header - Hidden on mobile */}
      <div className="hidden md:block py-8">
        <div className="container mx-auto px-4">
          {/* White pill-shaped container */}
          <nav className="bg-white rounded-full px-12 py-5 flex items-center justify-center gap-12 max-w-6xl mx-auto shadow-2xl">
            {/* Left Navigation */}
            <div className="flex items-center gap-8">
              <a 
                href="#services" 
                onClick={(e) => handleNavClick(e, 'services')}
                className="text-black font-normal text-base hover:opacity-80 transition-opacity whitespace-nowrap"
                style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
              >
                Services
              </a>
              <a 
                href="#how-it-works" 
                onClick={(e) => handleNavClick(e, 'how-it-works')}
                className="text-black font-normal text-base hover:opacity-80 transition-opacity whitespace-nowrap"
                style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
              >
                How It Works
              </a>
            </div>

            {/* Center Brand Name */}
            <a 
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="text-3xl font-bold text-[#8A56E8] whitespace-nowrap hover:opacity-80 transition-opacity cursor-pointer"
              style={{ fontFamily: '"Servicecart Bold", sans-serif' }}
            >
              Servicecart
            </a>

            {/* Right Navigation */}
            <div className="flex items-center gap-8">
              <a 
                href="#why-us" 
                onClick={(e) => handleNavClick(e, 'why-us')}
                className="text-black font-normal text-base hover:opacity-80 transition-opacity whitespace-nowrap"
                style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
              >
                Why Choose Us
              </a>
              <a 
                href="#download" 
                onClick={(e) => handleNavClick(e, 'download')}
                className="text-black font-normal text-base hover:opacity-80 transition-opacity whitespace-nowrap"
                style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
              >
                Download
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Header - Visible only on mobile */}
      <div className="md:hidden py-4 px-4">
        <div className="bg-white rounded-full px-4 py-3 flex items-center justify-between shadow-2xl">
          {/* Brand Name */}
          <a 
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="text-2xl font-bold text-[#8A56E8] hover:opacity-80 transition-opacity"
            style={{ fontFamily: '"Servicecart Bold", sans-serif' }}
          >
            Servicecart
          </a>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-2xl rounded-b-3xl mt-2 mx-4 overflow-hidden">
            <nav className="py-4">
              {navigationLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="block px-6 py-3 text-black font-normal text-base hover:bg-gray-100 transition-colors"
                  style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header


