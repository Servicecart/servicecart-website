import Header from '../components/Header'
import Hero from '../components/Hero'
import ServiceCategories from '../components/ServiceCategories'
import Mission from '../components/Mission'
import Services from '../components/Services'
import HowItWorks from '../components/HowItWorks'
import WhyChooseUs from '../components/WhyChooseUs'
import WhyJoinUs from '../components/WhyJoinUs'
import Academy from '../components/Academy'
import DownloadApp from '../components/DownloadApp'
import ProjectsAndTenders from '../components/ProjectsAndTenders'
import InstagramReels from '../components/InstagramReels'
import GetHomeServicesToday from '../components/GetHomeServicesToday'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Purple background overlay for top section */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-[#3E2061] z-0 pointer-events-none"></div>
      <Header />
      <Hero />
      <ServiceCategories />
      <Mission />
      <HowItWorks />
      <Services />
      <WhyChooseUs />
      <DownloadApp />
      <Academy />
      <WhyJoinUs />
      <ProjectsAndTenders />
      <InstagramReels />
      <GetHomeServicesToday />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home

