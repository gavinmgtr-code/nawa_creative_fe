"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
          
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Tentang Mandala Nawa Creative
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Mandala Nawa Creative adalah ruang tempat ide, karya, dan keberanian bertemu.
              Kami berdiri untuk menjadi wadah bagi para kreator — dari ide hingga eksekusi,
              dari individu hingga kolaborasi besar.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Filosofi <strong>&quot;Nawa&quot;</strong> mencerminkan sembilan elemen kreativitas
              yang menjadi fondasi setiap karya kami, menciptakan ruang tanpa batas bagi
              imajinasi dan inovasi.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-sage-green hover:text-charcoal-green-black font-semibold transition-colors group"
            >
              Baca selengkapnya
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/about-preview.jpg"
                alt="Tim Nawa Creative bekerja"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-sage-green rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-light-cream rounded-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}