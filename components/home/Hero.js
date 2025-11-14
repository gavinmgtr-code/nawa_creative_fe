'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown, Play, Sparkles, Users, Calendar } from 'lucide-react'

export default function Hero() {
  const stats = [
    { icon: <Calendar size={20} />, number: "50+", label: "Events" },
    { icon: <Users size={20} />, number: "25+", label: "Talents" },
    { icon: <Sparkles size={20} />, number: "3", label: "Years" }
  ]

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background dengan gradient overlay */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: "url('/images/Hero.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-6 h-6 bg-sage-green/30 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-20 w-4 h-4 bg-light-cream/20 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-40 left-20 w-3 h-3 bg-sage-green/40 rounded-full"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-flex items-center px-4 py-2 bg-sage-green/20 text-sage-green rounded-full text-sm font-semibold mb-6 border border-sage-green/30"
          >
            <Sparkles size={16} className="mr-2" />
            Welcome to Creative Excellence
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 leading-tight"
        >
          <span className="block">The Spaces of</span>
          <span className="block bg-gradient-to-r from-light-cream to-sage-green bg-clip-text text-transparent">
            Highest Creativity
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-200 font-light"
        >
          Kami menciptakan <span className="text-sage-green font-semibold">ruang tanpa batas</span> bagi ide, talenta,
          dan karya untuk tumbuh menjadi pengalaman yang <span className="text-light-cream font-semibold">bermakna dan berdampak</span>.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center items-center gap-8 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              className="flex items-center gap-2 text-light-cream/80"
            >
              <div className="text-sage-green">
                {stat.icon}
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Link
            href="/projects"
            className="group relative bg-sage-green text-white px-10 py-4 rounded-xl hover:bg-charcoal-green-black transition-all duration-500 font-semibold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Explore Our Projects
              <Play size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </Link>

          <Link
            href="/booking"
            className="group border-2 border-light-cream text-light-cream px-10 py-4 rounded-xl hover:bg-light-cream hover:text-charcoal-green-black transition-all duration-500 font-semibold text-lg hover:scale-105 backdrop-blur-sm"
          >
            <span className="flex items-center">
              Start Your Project
              <Sparkles size={20} className="ml-2 group-hover:scale-110 transition-transform" />
            </span>
          </Link>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-sm text-gray-300"
        >
          <p>Trusted by 50+ brands and creative talents</p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center text-light-cream/70 hover:text-light-cream cursor-pointer group"
        >
          <span className="text-sm mb-2 group-hover:scale-110 transition-transform">Scroll</span>
          <ChevronDown size={24} className="group-hover:scale-110 transition-transform" />
        </motion.div>
      </motion.div>
    </section>
  )
}

