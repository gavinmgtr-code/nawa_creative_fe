"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, Target, Sparkles, ArrowRight } from 'lucide-react'

export default function AboutPreview() {
  const stats = [
    { number: "50+", label: "Projects Selesai" },
    { number: "3", label: "Tahun Pengalaman" },
    { number: "25+", label: "Talent Kreatif" },
    { number: "100%", label: "Client Satisfaction" }
  ]

  const values = [
    {
      icon: <Sparkles size={24} />,
      title: "Inovasi",
      description: "Terus berinovasi dalam setiap karya"
    },
    {
      icon: <Target size={24} />,
      title: "Presisi",
      description: "Detail yang sempurna dalam eksekusi"
    },
    {
      icon: <Users size={24} />,
      title: "Kolaborasi",
      description: "Sinergi menciptakan karya terbaik"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Header */}
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-sage-green/10 text-sage-green rounded-full text-sm font-semibold mb-4"
              >
                <Sparkles size={16} className="mr-2" />
                About Us
              </motion.span>

              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-charcoal-green-black leading-tight">
                Membangun <span className="text-sage-green">Ruang Kreativitas</span> Tanpa Batas
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Mandala Nawa Creative</strong> adalah ekosistem kreatif tempat ide, karya, dan keberanian bertemu.
                Kami hadir sebagai wadah komprehensif bagi para kreator — dari konsep hingga eksekusi,
                dari individu hingga kolaborasi besar.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Filosofi <strong className="text-sage-green">&quot;Nawa&quot;</strong> — yang berarti sembilan dalam Bahasa Jawa —
                mencerminkan sembilan pilar kreativitas yang menjadi fondasi setiap karya kami,
                menciptakan ruang tanpa batas bagi imajinasi dan inovasi.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                >
                  <div className="text-sage-green mb-3 flex justify-center">
                    {value.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4"
            >
              <Link
                href="/about"
                className="inline-flex items-center bg-sage-green text-white px-8 py-4 rounded-xl hover:bg-charcoal-green-black hover:scale-105 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl group"
              >
                Jelajahi Cerita Kami
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/team"
                className="inline-flex items-center text-charcoal-green-black hover:text-sage-green font-semibold transition-colors duration-300 group"
              >
                Kenali Tim Kami
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/about/young-creative-people-with-laptop-sketches-discussing-new-project-together-group-guys-gals-working-modern-cozy-office.jpg"
                alt="Tim Nawa Creative bekerja bersama dalam ruang kreatif"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 grid grid-cols-2 gap-4 w-80"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-charcoal-green-black mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-sage-green/20 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-light-cream rounded-3xl -z-10 border border-sage-green/10"></div>
            <div className="absolute top-1/2 -left-8 w-16 h-16 bg-charcoal-green-black/5 rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}