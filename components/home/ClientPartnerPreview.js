'use client'

import { motion } from 'framer-motion'

const partners = [
  { name: 'Federal Oto', logo: '/images/partners/federal-oto.png' },
  { name: 'Decorations Co', logo: '/images/partners/decorations-co.png' },
  { name: 'Hear The Difference', logo: '/images/partners/htd.png' },
  { name: 'AsalNjeplak', logo: '/images/partners/sainieplak.png' },
  { name: 'Nayrrun', logo: '/images/partners/nayrrun.png' },
  { name: 'Dkukangz', logo: '/images/partners/okukangz.png' },
]

export default function ClientPartnerPreview() {
  const duplicatedPartners = [...partners, ...partners, ...partners]

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
            Official Partner & Mitra
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Berkolaborasi dengan brand dan organisasi terpercaya untuk menciptakan karya terbaik.
          </p>
        </motion.div>

        {/* Infinite Scroll Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-light-cream to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-light-cream to-transparent z-10" />

          {/* Scrolling Content */}
          <div className="overflow-hidden">
            <motion.div
              className="flex space-x-8 py-4"
              animate={{
                x: [0, -1440], // Adjust based on content width
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <motion.div
                  key={`${partner.name}-${index}`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex-shrink-0 w-40 h-20 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 grayscale hover:grayscale-0 flex items-center justify-center p-4 border border-gray-100 cursor-pointer"
                >
                  <div className="text-center">
                    <span className="text-sm font-semibold text-gray-700">{partner.name}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Static Version for Mobile */}
        <div className="mt-8 md:hidden">
          <div className="grid grid-cols-2 gap-4">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-full h-16 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 grayscale hover:grayscale-0 flex items-center justify-center p-3 border border-gray-100"
              >
                <span className="text-xs font-semibold text-gray-700 text-center">{partner.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}