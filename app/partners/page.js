"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Users, Target, TrendingUp, Heart, Star } from 'lucide-react'

const partners = [
  { name: 'Federal Oto', logo: '/images/partners/federal-oto.png', category: 'Automotive', since: '2023' },
  { name: 'Decorations Co', logo: '/images/partners/decorations-co.png', category: 'Event Decor', since: '2022' },
  { name: 'Hear The Difference', logo: '/images/partners/htd.png', category: 'Audio Production', since: '2023' },
  { name: 'AsalNjeplak', logo: '/images/partners/sainieplak.png', category: 'Art Collective', since: '2022' },
  { name: 'Nayrrun', logo: '/images/partners/nayrrun.png', category: 'Music Artist', since: '2024' },
  { name: 'Dkukangz', logo: '/images/partners/okukangz.png', category: 'Content Creator', since: '2023' }
]

const caseStudies = [
  {
    partner: 'Federal Oto',
    title: 'Federal Oto Annual Showcase 2024',
    description: 'Menyelenggarakan event tahunan dengan konsep immersive experience yang menarik lebih dari 5,000 pengunjung.',
    result: 'Meningkatkan brand engagement sebesar 45% dan generate leads lebih dari 1,200 potential customers.',
    image: '/images/cases/federal-case.jpg',
    metrics: [
      { value: '5,000+', label: 'Pengunjung' },
      { value: '45%', label: 'Engagement' },
      { value: '1,200+', label: 'Leads' }
    ]
  },
  {
    partner: 'AsalNjeplak',
    title: 'Urban Art Exhibition "Beyond Walls"',
    description: 'Kurasi dan produksi pameran seni urban yang menampilkan 15 seniman lokal di venue prestisius.',
    result: 'Menjual 85% dari total karya dan menarik perhatian media nasional dengan coverage di 5 media terkemuka.',
    image: '/images/cases/sainieplak-case.jpg',
    metrics: [
      { value: '85%', label: 'Karya Terjual' },
      { value: '15', label: 'Seniman' },
      { value: '5', label: 'Media Coverage' }
    ]
  }
]

const partnershipStats = [
  { number: "25+", label: "Active Partners", icon: <Users size={24} /> },
  { number: "50+", label: "Projects Completed", icon: <Target size={24} /> },
  { number: "95%", label: "Satisfaction Rate", icon: <Heart size={24} /> },
  { number: "4.8/5", label: "Partner Rating", icon: <Star size={24} /> }
]

export default function Partners() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-charcoal-green-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-green/10 via-charcoal-green-black to-sage-green/5"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-sage-green/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sage-green/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6"
          >
            Partners & Mitra
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 mb-8"
          >
            Membangun ekosistem kreatif melalui kolaborasi yang bermakna dengan brand dan organisasi terpercaya.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#partnership"
              className="inline-flex items-center bg-sage-green text-white px-8 py-4 rounded-xl hover:bg-charcoal-green-black hover:scale-105 transition-all duration-300 font-semibold text-lg group shadow-lg"
            >
              Jadi Mitra Kami
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Partnership Stats */}
      <section className="py-16 bg-gradient-to-r from-sage-green to-charcoal-green-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 group-hover:bg-white/30 transition-all duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sage-green/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sage-green/5 rounded-full -translate-x-32 translate-y-32"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-charcoal-green-black">
              Official Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kolaborasi strategis dengan brand dan kreator terkemuka untuk menciptakan karya yang berdampak
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-light-cream to-white rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
                  {/* Placeholder for logo */}
                  <div className="w-20 h-20 bg-sage-green/10 rounded-full flex items-center justify-center group-hover:bg-sage-green/20 transition-colors duration-300">
                    <span className="text-2xl font-bold text-sage-green">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                  
                  {/* Since badge */}
                  <div className="absolute top-2 right-2 bg-sage-green text-white text-xs px-2 py-1 rounded-full">
                    Since {partner.since}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{partner.name}</h3>
                <p className="text-sm text-gray-600">{partner.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-light-cream relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-sage-green/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-sage-green/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-charcoal-green-black">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bukti nyata kolaborasi yang menghasilkan impact luar biasa bagi partner kami
            </p>
          </motion.div>

          <div className="space-y-16">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.partner}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image/Visual Side */}
                <div className="lg:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="aspect-video bg-gradient-to-br from-sage-green to-charcoal-green-black rounded-3xl shadow-xl flex items-center justify-center relative overflow-hidden group"
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-black/20"></div>
                    
                    {/* Content */}
                    <div className="text-center text-white relative z-10 p-8">
                      <h3 className="text-2xl font-playfair font-bold mb-4">{caseStudy.title}</h3>
                      <p className="text-gray-200 mb-6">{caseStudy.description}</p>
                      
                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4">
                        {caseStudy.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-2xl font-bold text-white">{metric.value}</div>
                            <div className="text-sm text-gray-300">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Content Side */}
                <div className="lg:w-1/2">
                  <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-sage-green rounded-xl flex items-center justify-center mr-4">
                        <TrendingUp size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-playfair font-bold text-charcoal-green-black">
                          {caseStudy.title}
                        </h3>
                        <p className="text-sage-green font-semibold">with {caseStudy.partner}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                      {caseStudy.description}
                    </p>
                    
                    <div className="bg-gradient-to-r from-sage-green/10 to-light-cream p-6 rounded-2xl border-l-4 border-sage-green">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <Target size={20} className="text-sage-green mr-2" />
                        Hasil yang Dicapai:
                      </h4>
                      <p className="text-gray-700 leading-relaxed">{caseStudy.result}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section id="partnership" className="py-20 bg-gradient-to-br from-charcoal-green-black to-sage-green text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -translate-x-48 translate-y-48"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Jadi Bagian dari Ekosistem Kreatif Kami
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-200 mb-8"
            >
              Mari berkolaborasi menciptakan karya yang berdampak dan bermakna untuk audiens yang lebih luas.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <a
                href="/partnership-form"
                className="inline-flex items-center bg-white text-charcoal-green-black px-8 py-4 rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 font-semibold text-lg group shadow-lg"
              >
                Ajukan Kemitraan
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/085856651576"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-charcoal-green-black transition-all duration-300 font-semibold text-lg group"
              >
                Konsultasi Gratis
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            >
              {[
                { icon: <Users size={24} />, title: "Network Eksklusif", desc: "Akses ke komunitas kreatif terpilih" },
                { icon: <TrendingUp size={24} />, title: "Growth Opportunity", desc: "Peluang berkembang bersama project besar" },
                { icon: <Heart size={24} />, title: "Mutual Success", desc: "Kolaborasi yang saling menguntungkan" }
              ].map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-sage-green rounded-xl mb-4">
                    {benefit.icon}
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{benefit.title}</h4>
                  <p className="text-gray-300 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}