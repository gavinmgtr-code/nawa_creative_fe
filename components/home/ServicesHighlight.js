'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Palette, Users, ArrowRight } from 'lucide-react'

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
            Our service
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
                ${hoveredIndex === index
                  ? 'transform -translate-y-4 shadow-2xl border-sage-green border-2'
                  : 'border border-gray-100'
                }
                flex flex-col
              `}>
                <div className="text-sage-green mb-6">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-playfair font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mb-6 overflow-hidden"
                    >
                      <div className="border-t border-gray-200 pt-4">
                        <h4 className="font-semibold text-gray-800 mb-3">Fitur Layanan:</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <motion.li
                              key={featureIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: featureIndex * 0.1 }}
                              className="flex items-center text-gray-700"
                            >
                              <span className="w-2 h-2 bg-sage-green rounded-full mr-3 flex-shrink-0"></span>
                              <span className="text-sm">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link
                  href="/services"
                  className={`
                    inline-flex items-center font-semibold transition-all duration-300 group mt-2
                    ${hoveredIndex === index
                      ? 'text-charcoal-green-black'
                      : 'text-sage-green'
                    }
                  `}
                >
                  Detail Layanan
                  <ArrowRight
                    size={16}
                    className={`
                      ml-2 transition-transform duration-300 
                      ${hoveredIndex === index ? 'translate-x-1' : ''}
                    `}
                  />
                </Link>
              </div>

              {/* Hover indicator - hanya muncul di card yang dihover */}
              {hoveredIndex === index && (
                <motion.div
                  className="absolute inset-0 -z-10 bg-gradient-to-br from-sage-green/10 to-emerald-400/5 rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-sage-green text-white rounded-full font-semibold hover:bg-charcoal-green-black transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Jelajahi Semua Layanan
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}