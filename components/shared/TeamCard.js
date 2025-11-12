'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function TeamCard({ member }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="text-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
        <div className="w-full h-full bg-gradient-to-br from-sage-green to-charcoal-green-black flex items-center justify-center">
          <span className="text-white font-semibold text-lg">{member.name.split(' ')[0]}</span>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center p-6 transition-opacity duration-300"
        >
          <p className="text-white italic text-sm leading-relaxed">&quot;{member.quote}&quot;</p>
        </motion.div>
      </div>
      
      <h3 className="text-xl font-playfair font-bold">{member.name}</h3>
      <p className="text-gray-600">{member.position}</p>
    </motion.div>
  )
}