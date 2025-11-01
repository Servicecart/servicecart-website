import leafIconLeft from '../assets/images/leaf_icon_left.png'
import leafIconRight from '../assets/images/leaf_icon_right.png'
import joinProvider1 from '../assets/images/join_provider1.png'
import joinProvider2 from '../assets/images/join_provider2.png'
import joinProvider3 from '../assets/images/join_provider3.png'
import joinProvider4 from '../assets/images/join_provider4.png'
import iphoneJoinProvider from '../assets/images/iphone_join_provider.png'

const JoinProvider = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-[#3E2061] overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header with directional leaf icons */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-6">
            <img src={leafIconLeft} alt="Leaf icon left" className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Join us a Service Provider
            </h2>
            <img src={leafIconRight} alt="Leaf icon right" className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
          </div>
          <p className="text-base md:text-lg lg:text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Join Servicecart as a verified service provider and start growing your business. Get visibility, reach newer customers and earn more.
          </p>
        </div>

        {/* Main content - all images in a row */}
        <div className="relative min-h-[700px] md:min-h-[800px] lg:min-h-[900px] flex items-center justify-center -mx-4">
          <div className="relative w-full flex items-end justify-between px-0 gap-2 md:gap-4 lg:gap-6">
            {/* Left edge - Provider 1 */}
            <div className="flex items-end z-10">
              <img
                src={joinProvider1}
                alt="Service Provider 1"
                className="w-32 md:w-44 lg:w-56 h-auto object-contain"
              />
            </div>
            
            {/* Center group - Provider 2, iPhone, Provider 3 */}
            <div className="flex items-end gap-2 md:gap-4 lg:gap-6 flex-1 justify-center">
              <img
                src={joinProvider2}
                alt="Service Provider 2"
                className="w-32 md:w-44 lg:w-56 h-auto object-contain"
              />
              <div className="relative z-30">
                <img
                  src={iphoneJoinProvider}
                  alt="Servicecart App"
                  className="w-56 md:w-72 lg:w-96 h-auto object-contain"
                />
              </div>
              <img
                src={joinProvider3}
                alt="Service Provider 3"
                className="w-32 md:w-44 lg:w-56 h-auto object-contain"
              />
            </div>
            
            {/* Right edge - Provider 4 */}
            <div className="flex items-end z-10">
              <img
                src={joinProvider4}
                alt="Service Provider 4"
                className="w-32 md:w-44 lg:w-56 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinProvider


