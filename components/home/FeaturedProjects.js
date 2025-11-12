"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import ProjectCard from '@/components/shared/ProjectCard'

const featuredProjects = [
  {
    id: 1,
    title: 'IndieStage Vol.1',
    category: 'Music Event',
    description: 'Festival musik indie pertama yang mempertemukan talenta lokal dengan audiens yang apresiatif.',
    image: '/images/projects/indiestage-vol1.jpg',
    year: '2023'
  },
  {
    id: 2,
    title: 'IndieStage Vol.2',
    category: 'Music Event',
    description: 'Kelanjutan sukses Vol.1 dengan line-up yang lebih beragam dan produksi yang lebih matang.',
    image: '/images/projects/indiestage-vol2.jpg',
    year: '2024'
  },
  {
    id: 3,
    title: 'NAWA Pictures Launch',
    category: 'Brand Activation',
    description: 'Peluncuran divisi production house dengan showcase karya visual terbaik.',
    image: '/images/projects/nawa-pictures.jpg',
    year: '2024'
  }
]

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Jelajahi karya-karya terbaik yang telah kami wujudkan bersama klien dan partner.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
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
            className="inline-flex items-center bg-charcoal-green-black text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-semibold group"
          >
            Lihat Semua Proyek
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}