"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '@/components/shared/ProjectCard'

const allProjects = [
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
  },
  {
    id: 4,
    title: 'SaiNieplak Exhibition',
    category: 'Art Exhibition',
    description: 'Pameran seni kontemporer yang menampilkan karya-karya inovatif dari seniman lokal.',
    image: '/images/projects/sainieplak-exhibition.jpg',
    year: '2023'
  },
  {
    id: 5,
    title: 'Nayrrun Album Launch',
    category: 'Music Production',
    description: 'Konser peluncuran album pertama Nayrrun dengan konsep visual yang immersive.',
    image: '/images/projects/nayrrun-album.jpg',
    year: '2024'
  },
  {
    id: 6,
    title: 'Okukangz Podcast Studio',
    category: 'Content Production',
    description: 'Pembangunan dan pengelolaan studio podcast untuk konten kreatif yang konsisten.',
    image: '/images/projects/okukangz-podcast.jpg',
    year: '2023'
  }
]

const categories = ['All', 'Music Event', 'Brand Activation', 'Art Exhibition', 'Music Production', 'Content Production']

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filteredProjects, setFilteredProjects] = useState(allProjects)

  const handleFilter = (category) => {
    setSelectedCategory(category)
    if (category === 'All') {
      setFilteredProjects(allProjects)
    } else {
      setFilteredProjects(allProjects.filter(project => project.category === category))
    }
  }

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
            Project Library
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Jelajahi portofolio karya-karya terbaik yang telah kami wujudkan bersama klien dan partner.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => handleFilter(category)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-sage-green text-white border-sage-green'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-sage-green'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-light-cream">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-xl text-gray-600">Tidak ada proyek yang ditemukan untuk kategori ini.</p>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  )
}