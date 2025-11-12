"use client"

import { motion } from 'framer-motion'

const partners = [
  { name: 'Federal Oto', logo: '/images/partners/federal-oto.png', category: 'Automotive' },
  { name: 'Decorations Co', logo: '/images/partners/decorations-co.png', category: 'Event Decor' },
  { name: 'Hear The Difference', logo: '/images/partners/htd.png', category: 'Audio Production' },
  { name: 'SaiNieplak', logo: '/images/partners/sainieplak.png', category: 'Art Collective' },
  { name: 'Nayrrun', logo: '/images/partners/nayrrun.png', category: 'Music Artist' },
  { name: 'Okukangz', logo: '/images/partners/okukangz.png', category: 'Content Creator' }
]

const caseStudies = [
  {
    partner: 'Federal Oto',
    title: 'Federal Oto Annual Showcase 2024',
    description: 'Menyelenggarakan event tahunan dengan konsep immersive experience yang menarik lebih dari 5,000 pengunjung.',
    result: 'Meningkatkan brand engagement sebesar 45% dan generate leads lebih dari 1,200 potential customers.',
    image: '/images/cases/federal-case.jpg'
  },
  {
    partner: 'SaiNieplak',
    title: 'Urban Art Exhibition "Beyond Walls"',
    description: 'Kurasi dan produksi pameran seni urban yang menampilkan 15 seniman lokal di venue prestisius.',
    result: 'Menjual 85% dari total karya dan menarik perhatian media nasional dengan coverage di 5 media terkemuka.',
    image: '/images/cases/sainieplak-case.jpg'
  }
]

export default function Partners() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-charcoal-green-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-playfair font-bold mb-6"
          >
            Partners & Mitra
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Membangun ekosistem kreatif melalui kolaborasi yang bermakna dengan brand dan organisasi terpercaya.
          </motion.p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-playfair font-bold mb-16 text-center"
          >
            Official Partners
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-4 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer shadow-lg">
                  <span className="text-sm font-semibold text-gray-600">{partner.name}</span>
                </div>
                <h3 className="font-semibold text-gray-800">{partner.name}</h3>
                <p className="text-sm text-gray-600">{partner.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-light-cream">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-playfair font-bold mb-16 text-center"
          >
            Case Studies
          </motion.h2>

          <div className="space-y-16">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.partner}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="aspect-video bg-gradient-to-br from-sage-green to-charcoal-green-black rounded-2xl shadow-xl flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">{caseStudy.title}</span>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-playfair font-bold mb-4">{caseStudy.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{caseStudy.description}</p>
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-sage-green">
                    <h4 className="font-semibold text-gray-800 mb-2">Hasil yang Dicapai:</h4>
                    <p className="text-gray-700">{caseStudy.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-playfair font-bold mb-6"
            >
              Jadi Mitra Kami
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8"
            >
              Mari berkolaborasi menciptakan karya yang berdampak dan bermakna.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="/partnership-form"
                className="inline-flex items-center bg-sage-green text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-semibold text-lg group"
              >
                Ajukan Kemitraan
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}