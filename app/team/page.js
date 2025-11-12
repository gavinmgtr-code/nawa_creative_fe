"use client"

import { motion } from 'framer-motion'
import TeamCard from '@/components/shared/TeamCard'

const teamMembers = [
  {
    name: 'Ahmad Wijaya',
    position: 'Creative Director',
    quote: 'Kreativitas adalah ruang tanpa batas di mana imajinasi menjadi nyata.',
    image: '/images/team/ahmad.jpg'
  },
  {
    name: 'Sari Dewi',
    position: 'Project Manager',
    quote: 'Setiap detail matters dalam menciptakan pengalaman yang berkesan.',
    image: '/images/team/sari.jpg'
  },
  {
    name: 'Budi Santoso',
    position: 'Event Producer',
    quote: 'Event yang baik adalah yang meninggalkan kenangan, bukan hanya kesan.',
    image: '/images/team/budi.jpg'
  },
  {
    name: 'Maya Pertiwi',
    position: 'Art Director',
    quote: 'Seni bercerita, dan kami adalah penyampai cerita tersebut.',
    image: '/images/team/maya.jpg'
  },
  {
    name: 'Rizki Ramadhan',
    position: 'Talent Manager',
    quote: 'Setiap talenta unik dan punya cerita sendiri untuk dibagikan.',
    image: '/images/team/rizki.jpg'
  },
  {
    name: 'Dian Sastro',
    position: 'Content Strategist',
    quote: 'Konten yang baik adalah yang menyentuh hati dan menggerakkan pikiran.',
    image: '/images/team/dian.jpg'
  },
  {
    name: 'Dian Sastro',
    position: 'Content Strategist',
    quote: 'Konten yang baik adalah yang menyentuh hati dan menggerakkan pikiran.',
    image: '/images/team/dian.jpg'
  },
  {
    name: 'Dian Sastro',
    position: 'Content Strategist',
    quote: 'Konten yang baik adalah yang menyentuh hati dan menggerakkan pikiran.',
    image: '/images/team/dian.jpg'
  },
  {
    name: 'Dian Sastro',
    position: 'Content Strategist',
    quote: 'Konten yang baik adalah yang menyentuh hati dan menggerakkan pikiran.',
    image: '/images/team/dian.jpg'
  }
  
]

export default function Team() {
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
            Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Tim di balik setiap ide besar yang kami wujudkan.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TeamCard member={member} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-light-cream">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-playfair font-bold mb-6"
          >
            Ingin Jadi Bagian dari Kami?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Bergabunglah dengan tim kami dan wujudkan bersama ruang kreativitas tanpa batas.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/careers"
              className="inline-flex items-center bg-sage-green text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-semibold text-lg group"
            >
              Lihat Posisi Tersedia
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="/collaborate"
              className="inline-flex items-center border-2 border-charcoal-green-black text-charcoal-green-black px-8 py-4 rounded-lg hover:bg-charcoal-green-black hover:text-white transition-all duration-300 font-semibold text-lg group"
            >
              Kolaborasi Project
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}