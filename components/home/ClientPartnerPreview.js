'use client'

import { motion } from 'framer-motion'

const partners = [
  { name: 'Federal Oto', logo: '/images/partners/federal-oto.png' },
  { name: 'Decorations Co', logo: '/images/partners/decorations-co.png' },
  { name: 'Hear The Difference', logo: '/images/partners/htd.png' },
  { name: 'SaiNieplak', logo: '/images/partners/sainieplak.png' },
  { name: 'Nayrrun', logo: '/images/partners/nayrrun.png' },
  { name: 'Okukangz', logo: '/images/partners/okukangz.png' },
]

export default function ClientPartnerPreview() {
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <div className="grayscale hover:grayscale-0 transition-all duration-500 p-4 rounded-lg hover:bg-white hover:shadow-lg">
                <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-sm text-gray-500 font-semibold">{partner.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}