'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Image */}
      <div className="aspect-video bg-gray-200 relative overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-sage-green to-charcoal-green-black flex items-center justify-center">
          <span className="text-white font-semibold text-lg">{project.title}</span>
        </div>
        
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center p-6 transition-opacity duration-300"
        >
          <div className="text-center text-white">
            <h3 className="text-xl font-playfair font-bold mb-2">{project.title}</h3>
            <p className="text-sm mb-2 text-sage-green">{project.category}</p>
            <p className="text-sm opacity-90">{project.description}</p>
            <div className="mt-4 text-xs opacity-75">{project.year}</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}