"use client"

import { motion } from 'framer-motion'
import ServiceCard from '@/components/shared/ServiceCard'
import { Calendar, Palette, Users, Megaphone, ArrowRight, Star, Target, Heart } from 'lucide-react'

const services = [
  {
    icon: <Calendar size={48} />,
    title: 'Event Organizer',
    description: 'Menyelenggarakan event yang berkesan dan impactful dengan perencanaan yang detail dan eksekusi yang presisi.',
    features: [
      'Brand Activation & Product Launch',
      'Campus & Community Events',
      'Exhibition & Showcase',
      'Corporate Event & Private Gathering'
    ],
    price: 'Start from Rp 15.000.000',
    popular: true
  },
  {
    icon: <Palette size={48} />,
    title: 'Creative Agency',
    description: 'Membantu brand Anda tumbuh dengan solusi kreatif yang inovatif dan relevan dengan target audiens.',
    features: [
      'Branding & Identity Design',
      'Digital Campaign & Social Media Management',
      'Visual Production (Foto & Video)',
      'Copywriting & Content Strategy'
    ],
    price: 'Start from Rp 10.000.000'
  },
  {
    icon: <Users size={48} />,
    title: 'Talent & Artist Management',
    description: 'Mengelola dan mengembangkan talenta kreatif untuk kolaborasi project dan endorsement yang bermakna.',
    features: [
      'Management & Endorsement',
      'Kolaborasi Kreatif & Project Placement',
      'Personal Branding & Media Production'
    ],
    price: 'Start from Rp 5.000.000'
  },
  {
    icon: <Megaphone size={48} />,
    title: 'Brand Strategy',
    description: 'Mengembangkan strategi brand yang kuat dan konsisten untuk membangun positioning yang jelas di pasar.',
    features: [
      'Market Research & Analysis',
      'Brand Positioning & Architecture',
      'Communication Strategy',
      'Brand Audit & Development'
    ],
    price: 'Start from Rp 20.000.000',
    premium: true
  }
]

const stats = [
  { number: "100+", label: "Projects Completed", icon: <Target size={20} /> },
  { number: "50+", label: "Happy Clients", icon: <Heart size={20} /> },
  { number: "25+", label: "Creative Talents", icon: <Users size={20} /> },
  { number: "4.9/5", label: "Client Satisfaction", icon: <Star size={20} /> }
]

export default function Services() {
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 mb-8"
          >
            Setiap ide membutuhkan ruang yang tepat untuk tumbuh menjadi karya yang berdampak.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="/booking"
              className="inline-flex items-center bg-sage-green text-white px-8 py-4 rounded-xl hover:bg-charcoal-green-black hover:scale-105 transition-all duration-300 font-semibold text-lg group shadow-lg"
            >
              Konsultasi Gratis
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-charcoal-green-black transition-all duration-300 font-semibold text-lg group"
            >
              Explore Services
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-sage-green to-charcoal-green-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      {/* Services Grid */}
      <section id="services" className="py-20 bg-light-cream relative overflow-hidden">
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
              Layanan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi lengkap untuk mewujudkan visi kreatif Anda, dari konsep hingga eksekusi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-sage-green/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-charcoal-green-black">
              Proses Kolaborasi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Langkah-langkah terstruktur untuk memastikan kesuksesan project Anda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Konsultasi",
                description: "Diskusi kebutuhan dan tujuan project Anda"
              },
              {
                step: "02",
                title: "Perencanaan",
                description: "Menyusun strategi dan timeline yang detail"
              },
              {
                step: "03",
                title: "Eksekusi",
                description: "Implementasi dengan standar kualitas tertinggi"
              },
              {
                step: "04",
                title: "Evaluasi",
                description: "Review hasil dan pengembangan berkelanjutan"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-sage-green rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xl font-bold">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-8 h-0.5 bg-sage-green/30 -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-playfair font-bold mb-3 text-charcoal-green-black">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal-green-black to-sage-green text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -translate-x-48 translate-y-48"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-playfair font-bold mb-6"
          >
            Siap Berkolaborasi?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            Mari wujudkan ide Anda menjadi pengalaman yang tak terlupakan bersama tim kreatif kami.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="/booking"
              className="inline-flex items-center bg-white text-charcoal-green-black px-8 py-4 rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 font-semibold text-lg group shadow-lg"
            >
              Booking Konsultasi Sekarang
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/085856651576"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-charcoal-green-black transition-all duration-300 font-semibold text-lg group"
            >
              Chat WhatsApp
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: <Calendar size={24} />, text: "Konsultasi Gratis 30 Menit" },
              { icon: <Target size={24} />, text: "Garansi Kepuasan" },
              { icon: <Users size={24} />, text: "Tim Professional" }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center space-x-3 text-gray-200">
                <div className="text-sage-green">
                  {item.icon}
                </div>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}