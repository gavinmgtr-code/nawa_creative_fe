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
    year: '2024'
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 bg-sage-green text-white px-2 py-1 rounded text-sm font-semibold">
            {project.year}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500 font-medium">{project.category}</span>
          </div>

          <h3 className="text-xl font-bold mb-3 text-gray-900">
            {project.title}
          </h3>

          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
            {project.description}
          </p>

          <Link
            href={`/projects`}
            className="inline-flex items-center text-sage-green hover:text-charcoal-green-black font-medium text-sm transition-colors duration-200"
          >
            Lihat Detail
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default function FeaturedProjects() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Jelajahi karya-karya terbaik yang telah kami wujudkan bersama klien dan partner.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center bg-sage-green text-white px-6 py-3 rounded-lg hover:bg-charcoal-green-black transition-colors duration-300 font-medium"
          >
            Lihat Semua Proyek
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}