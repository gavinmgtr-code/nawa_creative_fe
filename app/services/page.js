"use client"

import { motion } from 'framer-motion'
import ServiceCard from '@/components/shared/ServiceCard'
import { Calendar, Palette, Users, Megaphone } from 'lucide-react'

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
    price: 'Start from Rp 15.000.000'
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
    price: 'Start from Rp 20.000.000'
  }
]

export default function Services() {
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
            Our Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Setiap ide membutuhkan ruang yang tepat untuk tumbuh menjadi karya yang berdampak.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-light-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
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
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Mari wujudkan ide Anda menjadi pengalaman yang tak terlupakan.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="/booking"
              className="inline-flex items-center bg-sage-green text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-semibold text-lg group"
            >
              Booking Konsultasi Sekarang
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}