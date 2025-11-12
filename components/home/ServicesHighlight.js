'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Palette, Users } from 'lucide-react'

const services = [
  {
    icon: <Calendar size={48} />,
    title: 'Event Organizer',
    description: 'Menyelenggarakan event yang berkesan dan impactful dengan perencanaan yang detail dan eksekusi yang presisi.',
    features: ['Brand Activation', 'Product Launch', 'Corporate Events']
  },
  {
    icon: <Palette size={48} />,
    title: 'Creative Agency',
    description: 'Membantu brand Anda tumbuh dengan solusi kreatif yang inovatif dan relevan dengan target audiens.',
    features: ['Branding & Design', 'Digital Campaign', 'Visual Production']
  },
  {
    icon: <Users size={48} />,
    title: 'Talent & Artist Management',
    description: 'Mengelola dan mengembangkan talenta kreatif untuk kolaborasi project dan endorsement yang bermakna.',
    features: ['Artist Management', 'Project Placement', 'Personal Branding']
  }
]

export default function ServicesHighlight() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="py-20 bg-light-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Layanan Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Setiap ide membutuhkan ruang yang tepat untuk tumbuh menjadi karya yang berdampak.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`
                bg-white rounded-2xl p-8 shadow-lg h-full transition-all duration-500
                ${hoveredIndex === index ? 'transform -translate-y-2 shadow-xl' : ''}
                border border-gray-100
              `}>
                <div className="text-sage-green mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-playfair font-bold mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {(hoveredIndex === index) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mb-6"
                  >
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <span className="w-2 h-2 bg-sage-green rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
                
                <Link 
                  href="/services"
                  className="inline-flex items-center text-sage-green hover:text-charcoal-green-black font-semibold transition-colors group"
                >
                  Detail Layanan
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}