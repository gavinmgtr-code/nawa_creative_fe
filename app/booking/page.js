'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Calendar, MapPin, Users } from 'lucide-react'

export default function Booking() {
  const [formData, setFormData] = useState({
    brandName: '',
    contact: '',
    eventDate: '',
    location: '',
    eventType: '',
    description: '',
    services: []
  })

  const serviceOptions = [
    'Event Organizer',
    'Creative Agency',
    'Talent & Artist Management',
    'Brand Strategy'
  ]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        services: checked 
          ? [...prev.services, value]
          : prev.services.filter(service => service !== value)
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Redirect to thank you page or show success message
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
            Booking Event
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Mulai rencanakan event Anda dengan kami. Isi formulir berikut agar kami bisa menyesuaikan kebutuhan Anda.
          </motion.p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-light-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Brand Name */}
                <div>
                  <label htmlFor="brandName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nama Brand / Perusahaan
                  </label>
                  <input
                    type="text"
                    id="brandName"
                    name="brandName"
                    value={formData.brandName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-green focus:border-transparent transition-all duration-300"
                    placeholder="Masukkan nama brand atau perusahaan Anda"
                  />
                </div>

                {/* Contact Info */}
                <div>
                  <label htmlFor="contact" className="block text-sm font-semibold text-gray-700 mb-2">
                    Kontak (Email atau WhatsApp)
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-green focus:border-transparent transition-all duration-300"
                    placeholder="email@contoh.com atau 08xxxxxxxxxx"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Event Date */}
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-semibold text-gray-700 mb-2">
                      Tanggal Event
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-green focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                      Lokasi Event
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-green focus:border-transparent transition-all duration-300"
                        placeholder="Kota atau venue event"
                      />
                    </div>
                  </div>
                </div>

                {/* Event Type */}
                <div>
                  <label htmlFor="eventType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Jenis Acara
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-green focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Pilih jenis acara</option>
                    <option value="Brand Activation">Brand Activation</option>
                    <option value="Product Launch">Product Launch</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Music Festival">Music Festival</option>
                    <option value="Art Exhibition">Art Exhibition</option>
                    <option value="Private Gathering">Private Gathering</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                {/* Services Needed */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Layanan yang Dibutuhkan
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {serviceOptions.map((service) => (
                      <label key={service} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          name="services"
                          value={service}
                          checked={formData.services.includes(service)}
                          onChange={handleChange}
                          className="w-4 h-4 text-sage-green focus:ring-sage-green border-gray-300 rounded"
                        />
                        <span className="text-gray-700">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Event Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                    Deskripsi Kebutuhan Event
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-green focus:border-transparent transition-all duration-300"
                    placeholder="Jelaskan konsep, tujuan, dan kebutuhan spesifik event Anda..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-sage-green text-white py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-semibold text-lg"
                >
                  Kirim Permintaan
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Shortcut */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 text-center"
            >
              <h3 className="text-2xl font-playfair font-bold mb-6">Butuh Bantuan Cepat?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/6285856651576"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold"
                >
                  <Phone size={20} className="mr-2" />
                  WhatsApp Business
                </a>
                <a
                  href="mailto:Marketing@NawaCreative.com"
                  className="inline-flex items-center bg-charcoal-green-black text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-semibold"
                >
                  <Mail size={20} className="mr-2" />
                  Email Kami
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}