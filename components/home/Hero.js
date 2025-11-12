'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      {/* Background Image Fallback */}
      <div 
        className="absolute w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Hero.png')" }}
      >
        <div className="absolute w-full h-full bg-black opacity-60"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-4"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6">
          The Spaces of Highest Creativity
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Kami menciptakan ruang bagi ide, talenta, dan karya untuk tumbuh menjadi pengalaman terbaik.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/projects"
            className="bg-sage-green text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-semibold"
          >
            Explore Projects
          </Link>
          <Link 
            href="/booking"
            className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300 font-semibold"
          >
            Book Event
          </Link>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown size={32} className="text-white" />
      </motion.div>
    </section>
  )
}