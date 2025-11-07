import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24 max-w-4xl text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#3E2061] mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-[#8A56E8] hover:bg-[#7a46d8] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Go to Homepage
          </Link>
          <Link
            to="/grow-with-servicecart"
            className="bg-white border-2 border-[#8A56E8] text-[#8A56E8] hover:bg-[#8A56E8] hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Grow with Servicecart
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default NotFound

