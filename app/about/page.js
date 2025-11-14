"use client"

import { motion } from 'framer-motion'
import { Target, Users, Star, Heart, Calendar, MapPin, Users as TeamIcon, ArrowRight, Sparkles } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: <Star size={32} />,
      title: 'Creative',
      description: 'Berpikir di luar kebiasaan untuk menghasilkan ide segar yang impactful.'
    },
    {
      icon: <Users size={32} />,
      title: 'Collaborative',
      description: 'Menyelaraskan kekuatan bersama mitra dan komunitas untuk hasil terbaik.'
    },
    {
      icon: <Target size={32} />,
      title: 'Relevan',
      description: 'Menyampaikan pesan yang dekat dengan audiens masa kini dan konteks zaman.'
    },
    {
      icon: <Heart size={32} />,
      title: 'Meaningful',
      description: 'Setiap proyek dirancang membawa makna dan cerita yang dalam.'
    }
  ]

  const timeline = [
    {
      year: "2020",
      title: "Awal Mula",
      description: "Mandala Nawa Creative didirikan oleh sekelompok kreatif muda dengan visi membangun ekosistem kreatif yang inklusif. Dimulai dari project kecil-kecilan di bidang event organizer.",
      icon: <Calendar size={24} />,
      milestone: "Pendirian Perusahaan"
    },
    {
      year: "2021",
      title: "Ekspansi Layanan",
      description: "Mulai berkembang ke bidang creative production dan digital marketing. Meluncurkan divisi NAWA Pictures untuk produksi konten visual profesional.",
      icon: <TeamIcon size={24} />,
      milestone: "Ekspansi Bisnis"
    },
    {
      year: "2022",
      title: "IndieStage Vol.1",
      description: "Menggelar event besar pertama 'IndieStage Vol.1' yang sukses menarik 2,000+ penonton. Menjadi milestone penting dalam perjalanan perusahaan.",
      icon: <MapPin size={24} />,
      milestone: "Event Besar Pertama"
    },
    {
      year: "2023",
      title: "Konsolidasi & Branding",
      description: "Melakukan rebranding lengkap dan memperkuat positioning sebagai creative hub. Menjalin partnership dengan 15+ brand lokal dan nasional.",
      icon: <Target size={24} />,
      milestone: "Rebranding Strategy"
    },
    {
      year: "2024",
      title: "NAWA Pictures Launch",
      description: "Secara resmi meluncurkan divisi production house dengan showcase karya visual terbaik. Ekspansi ke bidang commercial photography dan videography.",
      icon: <Star size={24} />,
      milestone: "Peluncuran Divisi Baru"
    },
    {
      year: "2025",
      title: "IndieStage Vol.2 & Future",
      description: "Bersiap meluncurkan IndieStage Vol.2 dengan skala lebih besar. Berencana ekspansi ke kota-kota lain di Indonesia dan pengembangan platform digital.",
      icon: <Sparkles size={24} />,
      milestone: "Ekspansi Nasional"
    }
  ]

  const stats = [
    { number: "5+", label: "Tahun Pengalaman", icon: <Calendar size={20} /> },
    { number: "50+", label: "Project Diselesaikan", icon: <Target size={20} /> },
    { number: "25+", label: "Kreator Terlibat", icon: <Users size={20} /> },
    { number: "10K+", label: "Audience Terjangkau", icon: <Heart size={20} /> }
  ]

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-charcoal-green-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-green/10 via-charcoal-green-black to-sage-green/5"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-sage-green/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sage-green/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200"
            >
              Dari sebuah mimpi kecil menjadi creative hub yang menghubungkan ide, talenta, dan peluang.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-sage-green to-charcoal-green-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 group-hover:bg-white/30 transition-all duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.icon}
                  </motion.div>
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sage-green/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sage-green/5 rounded-full -translate-x-32 translate-y-32"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-center text-charcoal-green-black"
            >
              Our Story
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg mx-auto"
            >
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>Mandala Nawa Creative</strong> didirikan pada tahun 2020 dengan semangat membangun
                ekosistem kreatif yang menjadi wadah bagi para kreator, brand, dan ide besar untuk bertemu
                dan berkembang bersama.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Filosofi <strong>&quot;Nawa&quot;</strong> dalam bahasa Sanskerta berarti &quot;sembilan&quot; —
                merepresentasikan sembilan elemen kreativitas yang menjadi fondasi setiap karya kami:
                <em> imajinasi, inovasi, integritas, inspirasi, intensitas, intuisi, identitas, impact, dan infinity</em>.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Dari awal yang sederhana, kami terus berkembang melalui komitmen pada kualitas,
                kolaborasi yang bermakna, dan passion untuk menciptakan karya yang berdampak positif
                bagi komunitas kreatif Indonesia.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-light-cream relative overflow-hidden">
        {/* Garis vertikal utama */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-20 bottom-20 w-0.5 bg-gradient-to-b from-sage-green/20 via-sage-green to-sage-green/20 hidden md:block"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-charcoal-green-black">
              Garis Waktu Perjalanan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jejak langkah kami dari awal hingga menjadi creative hub yang dipercaya banyak brand dan kreator
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content Card */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-sage-green hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-center mb-3">
                      <div className="p-2 rounded-lg bg-sage-green text-white mr-3 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-playfair font-bold text-charcoal-green-black">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-sage-green">
                        {item.milestone}
                      </span>
                      <ArrowRight size={16} className="text-sage-green group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </motion.div>
                </div>

                {/* Center Timeline with Year */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 rounded-full bg-sage-green shadow-lg flex items-center justify-center text-white font-bold text-lg relative group cursor-pointer"
                  >
                    {/* Connecting Lines
                    <div className={`absolute top-1/2 w-8 h-0.5 bg-sage-green ${index % 2 === 0 ? 'left-full' : 'right-full'}`}></div> */}

                    {/* Year */}
                    <span className="relative z-10">{item.year}</span>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-full bg-sage-green opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300"></div>
                  </motion.div>
                </div>

                {/* Empty Space for Alignment */}
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>

          {/* Future Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center bg-sage-green text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <Sparkles size={24} className="mr-3" />
              <span className="text-lg font-semibold">Terus Berkembang Menuju Masa Depan</span>
              <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-sage-green/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-sage-green/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-white to-light-cream p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 h-full">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-green rounded-2xl mb-4">
                    <Target size={32} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-playfair font-bold text-charcoal-green-black">
                    Visi
                  </h3>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed text-center">
                  Membangun ekosistem kreatif yang menjadi wadah bagi ide, karya, dan kolaborasi tanpa batas,
                  menjadi jembatan yang menghubungkan talenta lokal dengan peluang global.
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-white to-light-cream p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 h-full">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-green rounded-2xl mb-4">
                    <Users size={32} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-playfair font-bold text-charcoal-green-black">
                    Misi
                  </h3>
                </div>
                <ul className="text-lg text-gray-700 space-y-4">
                  {[
                    "Membangun ekosistem kreatif lintas bidang yang kolaboratif dan berkelanjutan",
                    "Mendorong pertumbuhan kreator dan talenta lokal melalui program mentoring",
                    "Menghadirkan karya yang berintegritas, inovatif, dan relevan dengan zaman",
                    "Menjadi ruang yang memberi inspirasi, peluang, dan makna bagi komunitas"
                  ].map((mission, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start group/item"
                    >
                      <span className="text-sage-green mr-3 mt-1 group-hover/item:scale-110 transition-transform duration-300">•</span>
                      <span>{mission}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-b from-white to-light-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sage-green/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-sage-green/5 rounded-full -translate-x-32 translate-y-32"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-charcoal-green-black">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Prinsip-prinsip yang menjadi fondasi setiap karya dan kolaborasi kami
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-sage-green rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="text-white"
                    >
                      {value.icon}
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-playfair font-bold mb-4 text-charcoal-green-black">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}