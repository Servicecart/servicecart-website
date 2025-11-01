import Header from './components/Header'
import Hero from './components/Hero'
import ServiceCategories from './components/ServiceCategories'
import Mission from './components/Mission'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Academy from './components/Academy'
import DownloadApp from './components/DownloadApp'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ServiceCategories />
      <Mission />
      <HowItWorks />
      <Services />
      <WhyChooseUs />
      <Academy />
      <DownloadApp />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App


