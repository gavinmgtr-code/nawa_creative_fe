"use client"

import { motion } from 'framer-motion'
import { Target, Users, Star, Heart } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: <Star size={32} />,
      title: 'Creative',
      description: 'Berpikir di luar kebiasaan untuk menghasilkan ide segar yang impactful.'
    },
    {
      icon: <Users size={32} />,
      title: 'Collaborative',
      description: 'Menyelaraskan kekuatan bersama mitra dan komunitas untuk hasil terbaik.'
    },
    {
      icon: <Target size={32} />,
      title: 'Relevan',
      description: 'Menyampaikan pesan yang dekat dengan audiens masa kini dan konteks zaman.'
    },
    {
      icon: <Heart size={32} />,
      title: 'Meaningful',
      description: 'Setiap proyek dirancang membawa makna dan cerita yang dalam.'
    }
  ]

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
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Kami adalah ruang bagi para kreator, brand, dan ide besar untuk bertemu dan berkembang.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-center"
            >
              Our Story
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg mx-auto"
            >
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>Mandala Nawa Creative</strong> adalah ruang tempat ide, karya, dan keberanian bertemu. 
                Kami berdiri untuk menjadi wadah bagi para kreator — dari ide hingga eksekusi, 
                dari individu hingga kolaborasi besar.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Filosofi <strong>&quot;Nawa&quot;</strong> dalam bahasa Sanskerta berarti &quot;sembilan&quot; — 
                merepresentasikan sembilan elemen kreativitas yang menjadi fondasi setiap karya kami: 
                imajinasi, inovasi, integritas, inspirasi, intensitas, intuisi, identitas, impact, dan infinity.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Kami percaya bahwa kreativitas bukan hanya tentang hasil, tapi tentang perjalanan 
                menciptakan sesuatu yang berdampak dan memberikan makna bagi semua yang terlibat.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-light-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-right"
            >
              <h3 className="text-3xl font-playfair font-bold mb-6 text-charcoal-green-black">
                Visi
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                Membangun ekosistem kreatif yang menjadi wadah bagi ide, karya, dan kolaborasi tanpa batas.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h3 className="text-3xl font-playfair font-bold mb-6 text-charcoal-green-black">
                Misi
              </h3>
              <ul className="text-lg text-gray-700 space-y-4">
                <li className="flex items-start">
                  <span className="text-sage-green mr-3">•</span>
                  Membangun ekosistem kreatif lintas bidang yang kolaboratif dan berkelanjutan
                </li>
                <li className="flex items-start">
                  <span className="text-sage-green mr-3">•</span>
                  Mendorong pertumbuhan kreator dan talenta lokal
                </li>
                <li className="flex items-start">
                  <span className="text-sage-green mr-3">•</span>
                  Menghadirkan karya yang berintegritas, inovatif, dan relevan
                </li>
                <li className="flex items-start">
                  <span className="text-sage-green mr-3">•</span>
                  Menjadi ruang yang memberi inspirasi, peluang, dan makna
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-playfair font-bold mb-16 text-center"
          >
            Our Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-sage-green mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-playfair font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}