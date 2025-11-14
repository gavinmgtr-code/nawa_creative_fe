"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '@/components/shared/ProjectCard'
import { Filter, Grid, List, ArrowRight, Calendar, Users, Target, Star, Clock, MapPin } from 'lucide-react'

const allProjects = [
  {
    id: 1,
    title: 'IndieStage Vol.1',
    category: 'Music Event',
    description: 'Festival musik indie pertama yang mempertemukan talenta lokal dengan audiens yang apresiatif.',
    image: '/images/projects/excited-audience-watching-confetti-fireworks-having-fun-music-festival-night-copy-space.jpg',
    year: '2024',
    featured: true,
    stats: { attendees: '2,000+', artists: '15', duration: '1 Day' },
    tags: ['Music Festival', 'Live Performance', 'Local Talent']
  },
  {
    id: 2,
    title: 'IndieStage Vol.2',
    category: 'Music Event',
    description: 'Kelanjutan sukses Vol.1 dengan line-up yang lebih beragam dan produksi yang lebih matang.',
    image: '/images/projects/indiestage-vol2.jpg',
    year: '2025',
    featured: true,
    stats: { attendees: '3,500+', artists: '25', duration: '2 Days' },
    tags: ['Music Festival', 'Multi-Day', 'National Artists']
  },
  {
    id: 3,
    title: 'NAWA Pictures Launch',
    category: 'Brand Activation',
    description: 'Peluncuran divisi production house dengan showcase karya visual terbaik.',
    image: '/images/projects/nawa-pictures-launch.jpg',
    year: '2024',
    featured: false,
    stats: { clients: '12+', projects: '8', coverage: 'National' },
    tags: ['Brand Launch', 'Production House', 'Visual Showcase']
  },
  {
    id: 4,
    title: 'AsalNjeplak Exhibition',
    category: 'Art Exhibition',
    description: 'Pameran seni kontemporer yang menampilkan karya-karya inovatif dari seniman lokal.',
    image: '/images/projects/asalnjeplak-exhibition.jpg',
    year: '2023',
    featured: false,
    stats: { visitors: '1,200+', artists: '8', sales: '85%' },
    tags: ['Art Exhibition', 'Contemporary Art', 'Local Artists']
  },
  {
    id: 5,
    title: 'Nayrrun Album Launch',
    category: 'Music Production',
    description: 'Konser peluncuran album pertama Nayrrun dengan konsep visual yang immersive.',
    image: '/images/projects/nayrrun-album-launch.jpg',
    year: '2024',
    featured: true,
    stats: { attendees: '800+', streams: '50K+', media: '10 Outlets' },
    tags: ['Album Launch', 'Concert', 'Visual Immersive']
  },
  {
    id: 6,
    title: 'Dkukangz Podcast Studio',
    category: 'Content Production',
    description: 'Pembangunan dan pengelolaan studio podcast untuk konten kreatif yang konsisten.',
    image: '/images/projects/dkukangz-podcast.jpg',
    year: '2023',
    featured: false,
    stats: { episodes: '50+', downloads: '100K+', guests: '25+' },
    tags: ['Podcast', 'Content Creation', 'Studio Setup']
  },
  {
    id: 7,
    title: 'Federal Oto Showcase',
    category: 'Brand Activation',
    description: 'Immersive automotive showcase event dengan teknologi augmented reality.',
    image: '/images/projects/federal-oto-showcase.jpg',
    year: '2024',
    featured: true,
    stats: { visitors: '5,000+', leads: '1,200+', engagement: '45%' },
    tags: ['Automotive', 'AR Technology', 'Brand Experience']
  },
  {
    id: 8,
    title: 'Urban Art Festival',
    category: 'Art Exhibition',
    description: 'Festival seni urban terbesar di kota dengan workshop dan live performance.',
    image: '/images/projects/urban-art-festival.jpg',
    year: '2023',
    featured: false,
    stats: { attendees: '3,000+', workshops: '12', artists: '30' },
    tags: ['Urban Art', 'Festival', 'Workshops']
  },
  {
    id: 9,
    title: 'Beach Sound Revolution',
    category: 'Music Event',
    description: 'Festival musik pantai dengan konsep eco-friendly dan line-up internasional.',
    image: '/images/projects/beach-sound-revolution.jpg',
    year: '2024',
    featured: true,
    stats: { attendees: '4,200+', artists: '18', duration: '2 Days' },
    tags: ['Beach Festival', 'Eco-Friendly', 'International']
  }
]

const categories = ['All', 'Music Event', 'Brand Activation', 'Art Exhibition', 'Music Production', 'Content Production']
const years = ['All', '2025', '2024', '2023']

// Fallback images untuk demo - bisa dihapus setelah upload gambar asli
const fallbackImages = [
  '/images/projects/excited-audience-watching-confetti-fireworks-having-fun-music-festival-night-copy-space.jpg',
  '/images/projects/event-2.jpg',
  '/images/projects/event-3.jpg',
  '/images/projects/event-4.jpg',
  '/images/projects/event-5.jpg',
  '/images/projects/event-6.jpg',
  '/images/projects/event-7.jpg',
  '/images/projects/event-8.jpg',
  '/images/projects/event-9.jpg'
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedYear, setSelectedYear] = useState('All')
  const [viewMode, setViewMode] = useState('grid')
  const [filteredProjects, setFilteredProjects] = useState(allProjects)

  // Assign fallback images untuk demo
  const projectsWithFallback = allProjects.map((project, index) => ({
    ...project,
    image: project.image || fallbackImages[index % fallbackImages.length]
  }))

  const handleFilter = (category, year) => {
    setSelectedCategory(category)
    setSelectedYear(year)

    let filtered = projectsWithFallback

    if (category !== 'All') {
      filtered = filtered.filter(project => project.category === category)
    }

    if (year !== 'All') {
      filtered = filtered.filter(project => project.year === year)
    }

    setFilteredProjects(filtered)
  }

  const featuredProjects = projectsWithFallback.filter(project => project.featured)
  const totalStats = {
    projects: projectsWithFallback.length,
    years: Math.max(...projectsWithFallback.map(p => parseInt(p.year))) - Math.min(...projectsWithFallback.map(p => parseInt(p.year))) + 1,
    categories: [...new Set(projectsWithFallback.map(p => p.category))].length
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-charcoal-green-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-green/20 via-charcoal-green-black to-sage-green/10"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-sage-green/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sage-green/10 rounded-full translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6"
          >
            Our Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 mb-12 leading-relaxed"
          >
            Jelajahi galeri karya-karya terbaik yang telah kami wujudkan bersama klien dan partner kreatif.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: totalStats.projects, label: 'Projects Completed', icon: <Target className="w-5 h-5" /> },
              { number: totalStats.years, label: 'Years Experience', icon: <Calendar className="w-5 h-5" /> },
              { number: totalStats.categories, label: 'Categories', icon: <Users className="w-5 h-5" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2 text-sage-green">{stat.number}+</div>
                <div className="text-gray-300 text-sm flex items-center justify-center gap-2">
                  {stat.icon}
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      {selectedCategory === 'All' && selectedYear === 'All' && (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-sage-green/10 text-sage-green px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Star className="w-4 h-4 fill-current" />
                HIGHLIGHTED WORKS
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-charcoal-green-black">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Karya-karya unggulan yang menjadi representasi terbaik dari kemampuan kreatif kami
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {featuredProjects.slice(0, 2).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
                >
                  <ProjectCard project={project} featured={true} />
                </motion.div>
              ))}
            </div>

            {/* Additional Featured in Grid */}
            {featuredProjects.length > 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {featuredProjects.slice(2, 5).map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200 sticky top-20 z-40 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => handleFilter('All', selectedYear)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-all duration-300 font-medium ${selectedCategory === 'All'
                    ? 'bg-sage-green text-white border-sage-green shadow-lg shadow-sage-green/25'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-sage-green hover:shadow-md'
                  }`}
              >
                <Filter size={18} />
                All Projects
              </motion.button>

              {categories.filter(cat => cat !== 'All').map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => handleFilter(category, selectedYear)}
                  className={`px-4 py-3 rounded-xl border transition-all duration-300 font-medium ${selectedCategory === category
                      ? 'bg-sage-green text-white border-sage-green shadow-lg shadow-sage-green/25'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-sage-green hover:shadow-md'
                    }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* Year Filter & View Toggle */}
            <div className="flex items-center gap-4">
              {/* Year Filter */}
              <div className="flex items-center gap-3">
                <span className="text-gray-600 font-medium">Year:</span>
                <select
                  value={selectedYear}
                  onChange={(e) => handleFilter(selectedCategory, e.target.value)}
                  className="px-4 py-2 rounded-xl border border-gray-300 focus:border-sage-green focus:ring-2 focus:ring-sage-green/20 transition-all duration-300 bg-white"
                >
                  {years.map(year => (
                    <option key={year} value={year}>
                      {year === 'All' ? 'All Years' : year}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Toggle */}
              <div className="flex border border-gray-300 rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 transition-all duration-300 ${viewMode === 'grid'
                      ? 'bg-sage-green text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 transition-all duration-300 ${viewMode === 'list'
                      ? 'bg-sage-green text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          {(selectedCategory !== 'All' || selectedYear !== 'All') && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-4 mt-6 flex-wrap"
            >
              <span className="text-gray-600 font-medium">Active filters:</span>
              <div className="flex flex-wrap gap-2">
                {selectedCategory !== 'All' && (
                  <span className="bg-sage-green text-white px-3 py-1 rounded-full text-sm flex items-center gap-2 font-medium">
                    {selectedCategory}
                    <button
                      onClick={() => handleFilter('All', selectedYear)}
                      className="hover:text-gray-200 text-lg leading-none"
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedYear !== 'All' && (
                  <span className="bg-sage-green text-white px-3 py-1 rounded-full text-sm flex items-center gap-2 font-medium">
                    {selectedYear}
                    <button
                      onClick={() => handleFilter(selectedCategory, 'All')}
                      className="hover:text-gray-200 text-lg leading-none"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
              <button
                onClick={() => handleFilter('All', 'All')}
                className="text-sage-green hover:text-charcoal-green-black text-sm font-medium transition-colors underline"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${selectedYear}-${viewMode}`}
              layout
              className={
                viewMode === 'grid'
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  : "grid grid-cols-1 gap-6"
              }
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  layout
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <ProjectCard
                    project={project}
                    layout={viewMode === 'list' ? 'horizontal' : 'vertical'}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-sage-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Filter size={40} className="text-sage-green" />
                </div>
                <h3 className="text-2xl font-playfair font-bold mb-4 text-charcoal-green-black">
                  No Projects Found
                </h3>
                <p className="text-gray-600 mb-6">
                  Tidak ada proyek yang ditemukan untuk filter yang dipilih. Coba kategori atau tahun yang berbeda.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleFilter('All', 'All')}
                  className="inline-flex items-center bg-sage-green text-white px-6 py-3 rounded-xl hover:bg-charcoal-green-black transition-all duration-300 font-semibold group"
                >
                  Reset Filters
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal-green-black via-sage-green to-emerald-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-playfair font-bold mb-6"
          >
            Siap Mewujudkan Project Anda?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Mari berkolaborasi mewujudkan ide kreatif Anda menjadi project yang memorable dan impactful.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/booking"
              className="inline-flex items-center bg-white text-charcoal-green-black px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg group shadow-lg"
            >
              Konsultasi Project Gratis
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-charcoal-green-black transition-all duration-300 font-semibold text-lg group"
            >
              Hubungi Kami
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}