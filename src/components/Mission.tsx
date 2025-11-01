import teamImage from '../assets/images/team.png'

const Mission = () => {
  // Extract video ID from YouTube URL
  const videoId = 'AVCxkEwPFLw'
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1`

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-stretch">
          {/* Left Section - YouTube Video Player */}
          <div className="relative w-full">
            <div className="relative rounded-xl overflow-hidden bg-gray-100 aspect-video shadow-lg">
              <iframe
                src={embedUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Right Section - Mission Card */}
          <div className="w-full">
            <div className="bg-gray-100 rounded-2xl p-6 md:p-8 lg:p-10 flex flex-col h-full">
              {/* Mission Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>

              {/* Mission Text */}
              <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
                To make finding trusted home and beauty services, easy transparent, and efficient while helping local professionals grow through a digital platform.
              </p>

              {/* Team Photo - Bottom Center Aligned */}
              <div className="mt-auto flex justify-center">
                <img
                  src={teamImage}
                  alt="Servicecart Team"
                  className="max-w-full h-auto rounded-xl object-contain"
                  style={{ maxHeight: '300px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission

