import { Phone, Mail, MessageCircle, Instagram, Twitter, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-gradient-to-b from-[#281A3B] to-black text-white rounded-t-[3rem]">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Top Section - Navigation and Social Media */}
        <div className="pt-8 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            {/* Left Side - Navigation Links */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 md:gap-8">
              <a href="#" className="text-white font-bold text-lg md:text-xl hover:opacity-80 transition-opacity whitespace-nowrap">
                Servicecart
              </a>
              <a href="#" className="text-white text-base font-normal hover:opacity-80 transition-opacity whitespace-nowrap">
                Join us as a Provider
              </a>
              <a href="#" className="text-white text-base font-normal hover:opacity-80 transition-opacity whitespace-nowrap">
                Terms of Use
              </a>
              <a href="#" className="text-white text-base font-normal hover:opacity-80 transition-opacity whitespace-nowrap">
                Privacy Policy
              </a>
            </div>

            {/* Right Side - Social Media Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Instagram className="w-5 h-5 text-black" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Twitter className="w-5 h-5 text-black" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Linkedin className="w-5 h-5 text-black" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Contact Information */}
        <div className="border-t border-gray-600/50 pt-20 pb-12">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-16 text-white">
              We're just one call away
            </h2>
            
            {/* Contact Buttons - Equal sized, horizontally arranged */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919559193131"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white px-8 py-4 rounded-[3rem] hover:opacity-90 transition-opacity shadow-md w-full sm:w-auto sm:min-w-[280px] justify-center"
              >
                <MessageCircle className="w-6 h-6 text-[#281A3B] flex-shrink-0" />
                <span className="text-base md:text-lg font-semibold text-[#281A3B]">+91 9559193131</span>
              </a>

              {/* Phone Call Button */}
              <a
                href="tel:+919923931111"
                className="flex items-center gap-3 bg-white px-8 py-4 rounded-[3rem] hover:opacity-90 transition-opacity shadow-md w-full sm:w-auto sm:min-w-[280px] justify-center"
              >
                <Phone className="w-6 h-6 text-[#281A3B] flex-shrink-0" />
                <span className="text-base md:text-lg font-semibold text-[#281A3B]">+91 9923931111</span>
              </a>

              {/* Email Button */}
              <a
                href="mailto:support@myservicecart.com"
                className="flex items-center gap-3 bg-white px-8 py-4 rounded-[3rem] hover:opacity-90 transition-opacity shadow-md w-full sm:w-auto sm:min-w-[280px] justify-center"
              >
                <Mail className="w-6 h-6 text-[#281A3B] flex-shrink-0" />
                <span className="text-base md:text-lg font-semibold text-[#281A3B]">support@myservicecart.com</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Bottom - Copyright and Policy Links - Full Width */}
      <div className="border-t border-gray-700/50 pt-6 pb-8 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            {/* Left Side - Copyright */}
            <div className="text-white text-sm md:text-base order-2 md:order-1">
              © 2025 XNOTCH SERVICECART PVT LTD. All rights reserved.
            </div>

            {/* Right Side - Policy Links */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-6 text-white text-sm md:text-base order-1 md:order-2">
              <a href="#" className="hover:opacity-80 transition-opacity whitespace-nowrap">
                Equal Opportunity Policy
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity whitespace-nowrap">
                Refund & Cancellation Policy
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity whitespace-nowrap">
                Vulnerability Disclosure Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


