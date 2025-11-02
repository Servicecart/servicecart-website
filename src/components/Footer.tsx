import { Phone, Mail, MessageCircle, Instagram, Twitter, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { trackContact, trackSocial, trackNavigation } from '../utils/analytics'

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-gradient-to-b from-[#281A3B] to-black text-white rounded-t-[2rem] sm:rounded-t-[2.5rem] md:rounded-t-[3rem]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4 max-w-6xl">
        {/* Top Section - Navigation and Social Media */}
        <div className="pt-6 sm:pt-8 md:pt-10 pb-4 sm:pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8">
            {/* Left Side - Navigation Links */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 md:gap-8">
              <Link 
                to="/" 
                onClick={() => trackNavigation('footer_home')}
                className="text-white font-bold text-base sm:text-lg md:text-xl hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                Servicecart
              </Link>
              <a 
                href="/#why-join-us" 
                onClick={(e) => {
                  e.preventDefault()
                  if (window.location.pathname !== '/') {
                    window.location.href = '/#why-join-us'
                  } else {
                    const element = document.getElementById('why-join-us')
                    element?.scrollIntoView({ behavior: 'smooth' })
                  }
                  trackNavigation('join_provider')
                }}
                className="text-white text-sm sm:text-base font-normal hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                Join us as a Provider
              </a>
              <Link 
                to="/legal/terms-and-conditions" 
                onClick={() => trackNavigation('terms')}
                className="text-white text-sm sm:text-base font-normal hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                Terms of Use
              </Link>
              <Link 
                to="/legal/privacy-policy" 
                onClick={() => trackNavigation('privacy')}
                className="text-white text-sm sm:text-base font-normal hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                Privacy Policy
              </Link>
            </div>

            {/* Right Side - Social Media Icons */}
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="#"
                onClick={() => trackSocial('instagram')}
                aria-label="Instagram"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
              </a>
              <a
                href="#"
                onClick={() => trackSocial('twitter')}
                aria-label="Twitter"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
              </a>
              <a
                href="#"
                onClick={() => trackSocial('linkedin')}
                aria-label="LinkedIn"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Contact Information */}
        <div className="border-t border-gray-600/50 pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-10 md:pb-12">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-white px-4">
              We're just one call away
            </h2>
            
            {/* Contact Buttons - Responsive layout */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center px-4">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919559193131"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContact('whatsapp', '+91 9559193131')}
                className="flex items-center gap-2 sm:gap-3 bg-white px-6 sm:px-8 py-3 sm:py-4 rounded-[2rem] sm:rounded-[3rem] hover:opacity-90 transition-opacity shadow-md w-full sm:w-auto sm:min-w-[250px] md:min-w-[280px] justify-center"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#281A3B] flex-shrink-0" />
                <span className="text-sm sm:text-base md:text-lg font-semibold text-[#281A3B] whitespace-nowrap">+91 9559193131</span>
              </a>

              {/* Phone Call Button */}
              <a
                href="tel:+919923931111"
                onClick={() => trackContact('phone', '+91 9923931111')}
                className="flex items-center gap-2 sm:gap-3 bg-white px-6 sm:px-8 py-3 sm:py-4 rounded-[2rem] sm:rounded-[3rem] hover:opacity-90 transition-opacity shadow-md w-full sm:w-auto sm:min-w-[250px] md:min-w-[280px] justify-center"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#281A3B] flex-shrink-0" />
                <span className="text-sm sm:text-base md:text-lg font-semibold text-[#281A3B] whitespace-nowrap">+91 9923931111</span>
              </a>

              {/* Email Button */}
              <a
                href="mailto:support@myservicecart.com"
                onClick={() => trackContact('email', 'support@myservicecart.com')}
                className="flex items-center gap-2 sm:gap-3 bg-white px-6 sm:px-8 py-3 sm:py-4 rounded-[2rem] sm:rounded-[3rem] hover:opacity-90 transition-opacity shadow-md w-full sm:w-auto sm:min-w-[250px] md:min-w-[280px] justify-center"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#281A3B] flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-[#281A3B] break-all sm:break-normal sm:whitespace-nowrap">support@myservicecart.com</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Bottom - Copyright and Policy Links */}
      <div className="border-t border-gray-700/50 pt-4 sm:pt-6 pb-6 sm:pb-8 w-full">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 md:gap-6">
            {/* Left Side - Copyright */}
            <div className="text-white text-xs sm:text-sm md:text-base text-center md:text-left order-2 md:order-1">
              © 2025 XNOTCH SERVICECART PVT LTD. All rights reserved.
            </div>

            {/* Right Side - Policy Links */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4 md:gap-6 text-white text-xs sm:text-sm md:text-base order-1 md:order-2">
              <Link 
                to="/legal/equal-opportunity-policy" 
                onClick={() => trackNavigation('equal_opportunity')}
                className="hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                Equal Opportunity Policy
              </Link>
              <Link 
                to="/legal/refund-and-cancellation" 
                onClick={() => trackNavigation('refund_policy')}
                className="hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                Refund & Cancellation Policy
              </Link>
              <Link 
                to="/policy/vulnerability-disclosure" 
                onClick={() => trackNavigation('vulnerability_policy')}
                className="hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                Vulnerability Disclosure Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


