"use client"

import { motion } from 'framer-motion'
import TeamCard from '@/components/shared/TeamCard'
import { Users, Sparkles, Target, Heart, ArrowRight, Star } from 'lucide-react'

const teamMembers = [
  {
    name: 'Ahmad Wijaya',
    position: 'Creative Director',
    quote: 'Kreativitas adalah ruang tanpa batas di mana imajinasi menjadi nyata.',
    image: '/images/team/ahmad.jpg',
    expertise: ['Brand Strategy', 'Creative Direction', 'Art Direction'],
    social: {
      linkedin: '#',
      instagram: '#',
      twitter: '#'
    }
  },
  {
    name: 'Sari Dewi',
    position: 'Project Manager',
    quote: 'Setiap detail matters dalam menciptakan pengalaman yang berkesan.',
    image: '/images/team/sari.jpg',
    expertise: ['Project Management', 'Client Relations', 'Event Planning'],
    social: {
      linkedin: '#',
      instagram: '#',
      twitter: '#'
    }
  },
  {
    name: 'Budi Santoso',
    position: 'Event Producer',
    quote: 'Event yang baik adalah yang meninggalkan kenangan, bukan hanya kesan.',
    image: '/images/team/budi.jpg',
    expertise: ['Event Production', 'Logistics', 'Vendor Management'],
    social: {
      linkedin: '#',
      instagram: '#',
      twitter: '#'
    }
  },
  {
    name: 'Maya Pertiwi',
    position: 'Art Director',
    quote: 'Seni bercerita, dan kami adalah penyampai cerita tersebut.',
    image: '/images/team/maya.jpg',
    expertise: ['Visual Design', 'Art Direction', 'Brand Identity'],
    social: {
      linkedin: '#',
      instagram: '#',
      twitter: '#'
    }
  },
  {
    name: 'Rizki Ramadhan',
    position: 'Talent Manager',
    quote: 'Setiap talenta unik dan punya cerita sendiri untuk dibagikan.',
    image: '/images/team/rizki.jpg',
    expertise: ['Talent Management', 'Artist Relations', 'Booking'],
    social: {
      linkedin: '#',
      instagram: '#',
      twitter: '#'
    }
  },
  {
    name: 'Dian Sastro',
    position: 'Content Strategist',
    quote: 'Konten yang baik adalah yang menyentuh hati dan menggerakkan pikiran.',
    image: '/images/team/dian.jpg',
    expertise: ['Content Strategy', 'Digital Marketing', 'Social Media'],
    social: {
      linkedin: '#',
      instagram: '#',
      twitter: '#'
    }
  },
  {
    name: 'Fajar Nugroho',
    position: 'Technical Director',
    quote: 'Teknologi adalah alat untuk mewujudkan kreativitas tanpa batas.',
    image: '/images/team/fajar.jpg',
    expertise: ['Technical Production', 'AV Systems', 'Stage Design'],
    social: {
      linkedin: '#',
      instagram: '#',
      twitter: '#'
    }
  },
  {
    name: 'Lina Hartati',
    position: 'Marketing Director',
    quote: 'Strategi marketing yang baik dimulai dengan memahami manusia.',
    image: '/public/images/projects/adults-enjoying-mexican-food.jpg',
    expertise: ['Marketing Strategy', 'Brand Development', 'Market Research'],
    social: {
      linkedin: '#',
      instagram: '#',
      twitter: '#'
    }
  },
  {
    name: 'Rendra Pratama',
    position: 'Finance Director',
    quote: 'Kreativitas dan finansial berjalan beriringan menuju kesuksesan.',
    image: '/images/team/rendra.jpg',
    expertise: ['Financial Planning', 'Budget Management', 'Business Strategy'],
    social: {
      linkedin: '#',
      instagram: '#',
      twitter: '#'
    }
  }
]

const teamStats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '15+', label: 'Years Experience' },
  { number: '25+', label: 'Team Members' },
  { number: '100%', label: 'Client Satisfaction' }
]

const coreValues = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Innovation',
    description: 'Selalu mencari cara baru dan kreatif dalam menyelesaikan tantangan'
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Excellence',
    description: 'Komitmen terhadap kualitas terbaik dalam setiap detail pekerjaan'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Passion',
    description: 'Bekerja dengan hati dan antusiasme untuk menciptakan yang terbaik'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Collaboration',
    description: 'Bersinergi untuk mencapai hasil yang lebih besar dari jumlah bagiannya'
  }
]

export default function Team() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-charcoal-green-black via-sage-green to-emerald-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-playfair font-bold mb-6"
          >
            Meet Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95 leading-relaxed"
          >
            Para visioner dan executor di balik setiap kisah sukses yang kami ciptakan bersama klien.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center mt-8 space-x-2 text-white/80"
          >
            <Star className="w-5 h-5 fill-current" />
            <span>Profesional Berpengalaman</span>
            <Star className="w-5 h-5 fill-current" />
            <span>Multidisplin Talent</span>
            <Star className="w-5 h-5 fill-current" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-sage-green mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-light-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal-green-black mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Prinsip yang memandu setiap langkah dan keputusan kami dalam menciptakan karya terbaik
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-sage-green/10 rounded-full flex items-center justify-center text-sage-green mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-charcoal-green-black mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal-green-black mb-4">
              Tim Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Bertemu dengan para ahli yang akan mewujudkan visi kreatif Anda menjadi kenyataan
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <TeamCard member={member} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Showcase */}
      <section className="py-20 bg-gradient-to-br from-sage-green/10 to-emerald-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal-green-black mb-4">
              Divisi Keahlian
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tim terstruktur dengan spesialisasi yang saling melengkapi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Creative & Design',
                description: 'Tim kreatif yang mengubah ide menjadi visual memukau',
                count: '8 Members',
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Production & Technical',
                description: 'Ahli produksi yang memastikan eksekusi sempurna',
                count: '6 Members',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Strategy & Management',
                description: 'Strategist yang merencanakan setiap langkah dengan presisi',
                count: '7 Members',
                color: 'from-green-500 to-emerald-500'
              },
              {
                title: 'Talent & Relations',
                description: 'Menghubungkan talenta terbaik dengan project yang tepat',
                count: '4 Members',
                color: 'from-orange-500 to-red-500'
              },
              {
                title: 'Marketing & Content',
                description: 'Menciptakan narasi yang menggerakkan audiens',
                count: '5 Members',
                color: 'from-indigo-500 to-purple-500'
              },
              {
                title: 'Business Development',
                description: 'Membangun hubungan dan peluang bisnis yang berkelanjutan',
                count: '3 Members',
                color: 'from-teal-500 to-blue-500'
              }
            ].map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${dept.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold text-charcoal-green-black mb-2">
                  {dept.title}
                </h3>
                <p className="text-gray-600 mb-3 leading-relaxed">
                  {dept.description}
                </p>
                <div className="text-sm font-semibold text-sage-green">
                  {dept.count}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-charcoal-green-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-playfair font-bold mb-6"
            >
              Bergabung dengan Perjalanan Kami
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Jadilah bagian dari tim yang tidak hanya mengejar kesempurnaan,
              tetapi juga menciptakan dampak melalui kreativitas dan inovasi.
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
                href="/careers"
                className="inline-flex items-center bg-sage-green text-white px-8 py-4 rounded-2xl hover:bg-opacity-90 transition-all duration-300 font-semibold text-lg group shadow-lg"
              >
                Lihat Posisi Tersedia
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/collaborate"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-2xl hover:bg-white hover:text-charcoal-green-black transition-all duration-300 font-semibold text-lg group"
              >
                Kolaborasi Project
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 pt-8 border-t border-gray-700"
            >
              <p className="text-gray-400 mb-4">
                Atau hubungi kami langsung untuk diskusi lebih lanjut
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                <a href="mailto:hr@nawacreative.com" className="text-sage-green hover:text-sage-green/80 transition-colors">
                  📧 hr@nawacreative.com
                </a>
                <span className="text-gray-600 hidden sm:block">•</span>
                <a href="tel:+628123456789" className="text-sage-green hover:text-sage-green/80 transition-colors">
                  📞 +62 812-3456-789
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}