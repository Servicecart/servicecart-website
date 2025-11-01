import { Facebook, Twitter, Linkedin } from 'lucide-react'

const Team = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: 'https://placehold.co/200x200/7c3aed/ffffff?text=JS',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Jane Doe',
      role: 'CTO',
      image: 'https://placehold.co/200x200/7c3aed/ffffff?text=JD',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Robert Johnson',
      role: 'Head of Operations',
      image: 'https://placehold.co/200x200/7c3aed/ffffff?text=RJ',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The passionate people behind Servicecart
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <div className="flex justify-center gap-4">
                <a
                  href={member.social.facebook}
                  className="text-primary-600 hover:text-primary-800 transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href={member.social.twitter}
                  className="text-primary-600 hover:text-primary-800 transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href={member.social.linkedin}
                  className="text-primary-600 hover:text-primary-800 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team


