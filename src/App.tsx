import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import DownloadApp from './components/DownloadApp'
import JoinProvider from './components/JoinProvider'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <Features />
      <WhyChooseUs />
      <DownloadApp />
      <Team />
      <JoinProvider />
      <Testimonials />
      <DownloadApp />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App


