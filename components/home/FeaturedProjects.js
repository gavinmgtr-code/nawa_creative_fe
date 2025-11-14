'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const featuredProjects = [
  {
    id: 1,
    title: 'IndieStage Vol.1',
    category: 'Music Event',
    description: 'Festival musik indie pertama yang mempertemukan talenta lokal dengan audiens yang apresiatif.',
    image: '/images/projects/medium-shot-happy-teens-singing.jpg',
    year: '2023'
  },
  {
    id: 2,
    title: 'IndieStage Vol.2',
    category: 'Music Event',
    description: 'Kelanjutan sukses Vol.1 dengan line-up yang lebih beragam dan produksi yang lebih matang.',
    image: '/images/projects/excited-audience-watching-confetti-fireworks-having-fun-music-festival-night-copy-space.jpg',
    year: '2025'
  },
  {
    id: 3,
    title: 'NAWA Pictures Launch',
    category: 'Brand Activation',
    description: 'Peluncuran divisi production house dengan showcase karya visual terbaik.',
    image: '/images/projects/adults-enjoying-mexican-food.jpg',
    year: '2024'
  }
]

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
        opacity: { duration: 0.6 }
      }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          <motion.div
            className="absolute top-3 right-3 bg-sage-green text-white px-2 py-1 rounded text-sm font-semibold"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.15 + 0.3, duration: 0.4 }}
          >
            {project.year}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <motion.div
            className="flex items-center justify-between mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.15 + 0.2 }}
          >
            <span className="text-sm text-gray-500 font-medium">{project.category}</span>
          </motion.div>

          <motion.h3
            className="text-xl font-bold mb-3 text-gray-900"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 + 0.25 }}
          >
            {project.title}
          </motion.h3>

          <motion.p
            className="text-gray-600 mb-4 text-sm leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.15 + 0.3 }}
          >
            {project.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.15 + 0.35 }}
          >
            <Link
              href={`/projects`}
              className="inline-flex items-center text-sage-green hover:text-charcoal-green-black font-medium text-sm transition-all duration-300 group/link"
            >
              Lihat Detail
              <ArrowRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default function FeaturedProjects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Jelajahi karya-karya terbaik yang telah kami wujudkan bersama klien dan partner.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center bg-sage-green text-white px-6 py-3 rounded-lg hover:bg-charcoal-green-black transition-all duration-500 font-medium hover:shadow-lg"
          >
            Lihat Semua Proyek
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}