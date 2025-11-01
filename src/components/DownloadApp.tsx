import { Apple, Play } from 'lucide-react'

const DownloadApp = () => {
  return (
    <section className="py-20 bg-primary-800 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Download Our App
            </h2>
            <p className="text-xl text-primary-200 mb-8">
              Get the Best Services at Your Fingertips
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="flex items-center justify-center gap-2 bg-white text-primary-800 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                <Apple size={20} />
                Download on the App Store
              </button>
              <button className="flex items-center justify-center gap-2 bg-white text-primary-800 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                <Play size={20} />
                Get it on Google Play
              </button>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden md:block">
              <img
                src="https://placehold.co/400x800/ffffff/7c3aed?text=App+Screens"
                alt="Servicecart App"
                className="rounded-2xl shadow-2xl max-h-[600px]"
              />
            </div>
            <div className="bg-white p-6 rounded-2xl">
              <img
                src="https://placehold.co/200x200/000000/ffffff?text=QR+Code"
                alt="QR Code"
                className="w-48 h-48"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DownloadApp


