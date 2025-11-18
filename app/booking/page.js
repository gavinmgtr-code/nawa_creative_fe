'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, Calendar, MapPin, Users, Star, CheckCircle, Loader2, ArrowRight, ArrowLeft } from 'lucide-react'

// API Service - DISESUAIKAN DENGAN SCHEMA PRISMA
const bookingApi = {
  async createBooking(bookingData) {
    try {
      // Transform frontend data to match backend DTO
      const transformedData = {
        brandName: bookingData.brandName,
        contactName: bookingData.contactName,
        phone: bookingData.phone,
        email: bookingData.email,
        eventDate: bookingData.eventDate ? new Date(bookingData.eventDate).toISOString() : null,
        location: bookingData.location || null,
        eventType: bookingData.eventType,
        description: bookingData.description || null,
        budget: bookingData.budget ? parseFloat(bookingData.budget) : null,
        services: bookingApi.mapServiceNamesToIds(bookingData.services),
      };

      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

      const response = await fetch(`${API_URL}/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transformedData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error creating booking:', error);
      throw new Error(error.message || 'Failed to create booking');
    }
  },

  // Map service names to IDs
  mapServiceNamesToIds(serviceNames) {
    const serviceMap = {
      'Event Organizer': 1,
      'Creative Agency': 2,
      'Talent & Artist Management': 3,
      'Brand Strategy': 4
    };

    return serviceNames.map(name => serviceMap[name]).filter(id => id !== undefined);
  }
};

export default function Booking() {
  const [formData, setFormData] = useState({
    brandName: '',
    contactName: '',
    phone: '',
    email: '',
    eventDate: '',
    location: '',
    eventType: '',
    description: '',
    budget: '',
    services: []
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [errors, setErrors] = useState({})
  const [submitError, setSubmitError] = useState('')

  // Service options
  const serviceOptions = [
    {
      id: 1,
      name: 'Event Organizer',
      icon: '🎪',
      description: 'Full event planning & execution'
    },
    {
      id: 2,
      name: 'Creative Agency',
      icon: '🎨',
      description: 'Design, branding & creative content'
    },
    {
      id: 3,
      name: 'Talent & Artist Management',
      icon: '⭐',
      description: 'Artist booking & management'
    },
    {
      id: 4,
      name: 'Brand Strategy',
      icon: '📈',
      description: 'Brand development & marketing strategy'
    }
  ]

  // Event Type Options - DISESUAIKAN DENGAN ENUM EventType di Prisma
  const eventTypeOptions = [
    'CORPORATE',
    'WEDDING',
    'EXHIBITION',
    'CONCERT',
    'FESTIVAL',
    'OTHER'
  ]

  // Map untuk menampilkan label yang user-friendly
  const eventTypeLabels = {
    'CORPORATE': 'Corporate Event',
    'WEDDING': 'Wedding Celebration',
    'EXHIBITION': 'Art Exhibition',
    'CONCERT': 'Music Concert',
    'FESTIVAL': 'Festival',
    'OTHER': 'Lainnya'
  }

  const steps = [
    { number: 1, title: 'Informasi Dasar', fields: ['brandName', 'contactName', 'phone', 'email'] },
    { number: 2, title: 'Detail Event', fields: ['eventDate', 'location', 'eventType', 'budget'] },
    { number: 3, title: 'Layanan & Kebutuhan', fields: ['services', 'description'] }
  ]

  // Validasi untuk setiap step
  const validateStep = (step) => {
    const newErrors = {}

    if (step === 1) {
      if (!formData.brandName.trim()) {
        newErrors.brandName = 'Nama brand wajib diisi'
      }
      if (!formData.contactName.trim()) {
        newErrors.contactName = 'Nama kontak wajib diisi'
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Nomor WhatsApp wajib diisi'
      } else if (!/^08\d{8,11}$/.test(formData.phone)) {
        newErrors.phone = 'Format WhatsApp tidak valid (contoh: 081234567890)'
      }
      if (!formData.email.trim()) {
        newErrors.email = 'Email wajib diisi'
      } else if (!/^[\w\.-]+@[\w\.-]+\.\w+$/.test(formData.email)) {
        newErrors.email = 'Format email tidak valid'
      }
    }

    if (step === 2) {
      if (!formData.eventDate) {
        newErrors.eventDate = 'Tanggal event wajib diisi'
      } else if (new Date(formData.eventDate) < new Date().setHours(0, 0, 0, 0)) {
        newErrors.eventDate = 'Tanggal event tidak boleh di masa lalu'
      }
      if (!formData.location.trim()) {
        newErrors.location = 'Lokasi event wajib diisi'
      }
      if (!formData.eventType) {
        newErrors.eventType = 'Jenis acara wajib dipilih'
      }
      // Budget optional, tidak perlu validasi required
    }

    if (step === 3) {
      if (formData.services.length === 0) {
        newErrors.services = 'Pilih minimal satu layanan'
      }
      if (!formData.description.trim()) {
        newErrors.description = 'Deskripsi kebutuhan wajib diisi'
      } else if (formData.description.length < 20) {
        newErrors.description = 'Deskripsi minimal 20 karakter'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }

    // Clear submit error when user makes changes
    if (submitError) {
      setSubmitError('')
    }

    if (type === 'checkbox') {
      const serviceId = parseInt(value)
      setFormData(prev => ({
        ...prev,
        services: checked
          ? [...prev.services, serviceId]
          : prev.services.filter(id => id !== serviceId)
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleServiceToggle = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId]
    }))

    if (errors.services) {
      setErrors(prev => ({ ...prev, services: '' }))
    }

    if (submitError) {
      setSubmitError('')
    }
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3))
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
    setErrors({})
    setSubmitError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateStep(3)) {
      return
    }

    setIsSubmitting(true)
    setSubmitError('')

    try {
      const result = await bookingApi.createBooking(formData)
      console.log('Booking created successfully:', result)
      setIsSubmitted(true)
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitError(error.message || 'Terjadi kesalahan saat mengirim formulir. Silakan coba lagi.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getServiceNameById = (serviceId) => {
    const service = serviceOptions.find(s => s.id === serviceId)
    return service ? service.name : 'Unknown Service'
  }

  const getEventTypeLabel = (eventType) => {
    return eventTypeLabels[eventType] || eventType
  }

  // Render success page
  if (isSubmitted) {
    return (
      <main className="pt-20 min-h-screen bg-gradient-to-br from-sage-green/10 to-light-cream">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-12 border border-sage-green/20">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </motion.div>

                <h1 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal-green-black mb-4">
                  Terima Kasih!
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Permintaan booking Anda telah berhasil dikirim. Tim marketing kami akan menghubungi Anda dalam 1x24 jam untuk mendiskusikan kebutuhan event Anda.
                </p>

                <div className="bg-sage-green/10 rounded-2xl p-6 mb-8">
                  <h3 className="font-semibold text-charcoal-green-black mb-3">
                    📋 Ringkasan Booking Anda:
                  </h3>
                  <div className="text-left space-y-2 text-sm">
                    <p><strong>Brand:</strong> {formData.brandName}</p>
                    <p><strong>Nama Kontak:</strong> {formData.contactName}</p>
                    <p><strong>WhatsApp:</strong> {formData.phone}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Event:</strong> {getEventTypeLabel(formData.eventType)}</p>
                    <p><strong>Tanggal:</strong> {formData.eventDate ? new Date(formData.eventDate).toLocaleDateString('id-ID') : 'Belum ditentukan'}</p>
                    <p><strong>Lokasi:</strong> {formData.location || 'Belum ditentukan'}</p>
                    {formData.budget && <p><strong>Budget Estimasi:</strong> Rp {parseFloat(formData.budget).toLocaleString('id-ID')}</p>}
                    <p><strong>Layanan:</strong> {formData.services.map(id => getServiceNameById(id)).join(', ')}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-lg font-semibold text-charcoal-green-black">
                    Butuh respons lebih cepat?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://wa.me/6285856651576"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-2xl hover:bg-green-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                    >
                      <Phone size={20} className="mr-3" />
                      WhatsApp Langsung
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="mailto:Marketing@NawaCreative.com"
                      className="inline-flex items-center justify-center bg-charcoal-green-black text-white px-8 py-4 rounded-2xl hover:bg-opacity-90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                    >
                      <Mail size={20} className="mr-3" />
                      Email Marketing
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    )
  }

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
            Booking Event
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95 leading-relaxed"
          >
            Mulai perjalanan event Anda dengan kami. Isi formulir berikut dan biarkan kami mewujudkan visi Anda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center mt-8 space-x-2 text-white/80"
          >
            <Star className="w-5 h-5 fill-current" />
            <span>Proses mudah & respons cepat</span>
            <Star className="w-5 h-5 fill-current" />
            <span>Konsultasi gratis</span>
            <Star className="w-5 h-5 fill-current" />
          </motion.div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center flex-1">
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 font-semibold transition-all duration-300 ${currentStep >= step.number
                      ? 'bg-sage-green border-sage-green text-white'
                      : 'border-gray-300 text-gray-400'
                      }`}>
                      {currentStep > step.number ? <CheckCircle size={20} /> : step.number}
                    </div>
                    <span className={`text-sm mt-2 font-medium hidden sm:block ${currentStep >= step.number ? 'text-sage-green' : 'text-gray-400'
                      }`}>
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`flex-1 h-1 mx-4 transition-all duration-300 ${currentStep > step.number ? 'bg-sage-green' : 'bg-gray-200'
                      }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-gradient-to-b from-light-cream to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100"
            >
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700"
                >
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    {submitError}
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <AnimatePresence mode="wait">
                  {/* Step 1: Basic Information */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="text-center mb-8">
                        <h2 className="text-3xl font-playfair font-bold text-charcoal-green-black mb-2">
                          Informasi Dasar
                        </h2>
                        <p className="text-gray-600">
                          Mari kenali brand Anda terlebih dahulu
                        </p>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <label htmlFor="brandName" className="block text-lg font-semibold text-gray-800 mb-3">
                            Nama Brand / Perusahaan *
                          </label>
                          <input
                            type="text"
                            id="brandName"
                            name="brandName"
                            value={formData.brandName}
                            onChange={handleChange}
                            required
                            className={`w-full px-6 py-4 border-2 rounded-2xl focus:ring-2 focus:ring-sage-green focus:border-sage-green transition-all duration-300 text-lg ${errors.brandName ? 'border-red-500' : 'border-gray-200'
                              }`}
                            placeholder="Contoh: PT. Contoh Indonesia"
                          />
                          {errors.brandName && (
                            <p className="text-red-500 text-sm mt-2">{errors.brandName}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="contactName" className="block text-lg font-semibold text-gray-800 mb-3">
                            Nama Kontak *
                          </label>
                          <input
                            type="text"
                            id="contactName"
                            name="contactName"
                            value={formData.contactName}
                            onChange={handleChange}
                            required
                            className={`w-full px-6 py-4 border-2 rounded-2xl focus:ring-2 focus:ring-sage-green focus:border-sage-green transition-all duration-300 text-lg ${errors.contactName ? 'border-red-500' : 'border-gray-200'
                              }`}
                            placeholder="Nama lengkap Anda"
                          />
                          {errors.contactName && (
                            <p className="text-red-500 text-sm mt-2">{errors.contactName}</p>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="phone" className="block text-lg font-semibold text-gray-800 mb-3">
                              WhatsApp *
                            </label>
                            <input
                              type="text"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              className={`w-full px-6 py-4 border-2 rounded-2xl focus:ring-2 focus:ring-sage-green focus:border-sage-green transition-all duration-300 text-lg ${errors.phone ? 'border-red-500' : 'border-gray-200'
                                }`}
                              placeholder="081234567890"
                            />
                            {errors.phone && (
                              <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
                            )}
                          </div>

                          <div>
                            <label htmlFor="email" className="block text-lg font-semibold text-gray-800 mb-3">
                              Email *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className={`w-full px-6 py-4 border-2 rounded-2xl focus:ring-2 focus:ring-sage-green focus:border-sage-green transition-all duration-300 text-lg ${errors.email ? 'border-red-500' : 'border-gray-200'
                                }`}
                              placeholder="email@contoh.com"
                            />
                            {errors.email && (
                              <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Event Details */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="text-center mb-8">
                        <h2 className="text-3xl font-playfair font-bold text-charcoal-green-black mb-2">
                          Detail Event
                        </h2>
                        <p className="text-gray-600">
                          Ceritakan tentang event yang akan diselenggarakan
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="eventDate" className="block text-lg font-semibold text-gray-800 mb-3">
                            Tanggal Event *
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
                            <input
                              type="date"
                              id="eventDate"
                              name="eventDate"
                              value={formData.eventDate}
                              onChange={handleChange}
                              required
                              min={new Date().toISOString().split('T')[0]}
                              className={`w-full pl-14 pr-4 py-4 border-2 rounded-2xl focus:ring-2 focus:ring-sage-green focus:border-sage-green transition-all duration-300 text-lg ${errors.eventDate ? 'border-red-500' : 'border-gray-200'
                                }`}
                            />
                          </div>
                          {errors.eventDate && (
                            <p className="text-red-500 text-sm mt-2">{errors.eventDate}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="location" className="block text-lg font-semibold text-gray-800 mb-3">
                            Lokasi Event *
                          </label>
                          <div className="relative">
                            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
                            <input
                              type="text"
                              id="location"
                              name="location"
                              value={formData.location}
                              onChange={handleChange}
                              required
                              className={`w-full pl-14 pr-4 py-4 border-2 rounded-2xl focus:ring-2 focus:ring-sage-green focus:border-sage-green transition-all duration-300 text-lg ${errors.location ? 'border-red-500' : 'border-gray-200'
                                }`}
                              placeholder="Kota atau venue event"
                            />
                          </div>
                          {errors.location && (
                            <p className="text-red-500 text-sm mt-2">{errors.location}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="eventType" className="block text-lg font-semibold text-gray-800 mb-3">
                            Jenis Acara *
                          </label>
                          <select
                            id="eventType"
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleChange}
                            required
                            className={`w-full px-6 py-4 border-2 rounded-2xl focus:ring-2 focus:ring-sage-green focus:border-sage-green transition-all duration-300 text-lg appearance-none bg-white ${errors.eventType ? 'border-red-500' : 'border-gray-200'
                              }`}
                          >
                            <option value="">Pilih jenis acara</option>
                            {eventTypeOptions.map(type => (
                              <option key={type} value={type}>
                                {eventTypeLabels[type]}
                              </option>
                            ))}
                          </select>
                          {errors.eventType && (
                            <p className="text-red-500 text-sm mt-2">{errors.eventType}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="budget" className="block text-lg font-semibold text-gray-800 mb-3">
                            Budget Estimasi (Optional)
                          </label>
                          <div className="relative">
                            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">Rp</span>
                            <input
                              type="number"
                              id="budget"
                              name="budget"
                              value={formData.budget}
                              onChange={handleChange}
                              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-sage-green focus:border-sage-green transition-all duration-300 text-lg"
                              placeholder="Contoh: 50000000"
                              min="0"
                            />
                          </div>
                          <p className="text-sm text-gray-500 mt-2">Isi jika sudah ada estimasi budget</p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Services & Needs */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="text-center mb-8">
                        <h2 className="text-3xl font-playfair font-bold text-charcoal-green-black mb-2">
                          Layanan & Kebutuhan
                        </h2>
                        <p className="text-gray-600">
                          Pilih layanan yang dibutuhkan dan jelaskan konsep event Anda
                        </p>
                      </div>

                      <div>
                        <label className="block text-lg font-semibold text-gray-800 mb-4">
                          Layanan yang Dibutuhkan *
                        </label>
                        {errors.services && (
                          <p className="text-red-500 text-sm mb-3">{errors.services}</p>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {serviceOptions.map((service) => (
                            <motion.label
                              key={service.id}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className={`flex items-start p-4 border-2 rounded-2xl cursor-pointer transition-all duration-300 ${formData.services.includes(service.id)
                                ? 'border-sage-green bg-sage-green/5'
                                : 'border-gray-200 hover:border-sage-green/50'
                                } ${errors.services ? 'border-red-200' : ''}`}
                            >
                              <input
                                type="checkbox"
                                name="services"
                                value={service.id}
                                checked={formData.services.includes(service.id)}
                                onChange={() => handleServiceToggle(service.id)}
                                className="mt-1 w-5 h-5 text-sage-green focus:ring-sage-green border-gray-300 rounded"
                              />
                              <div className="ml-3">
                                <div className="flex items-center space-x-2">
                                  <span className="text-2xl">{service.icon}</span>
                                  <span className="font-semibold text-gray-800">{service.name}</span>
                                </div>
                                <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                              </div>
                            </motion.label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="description" className="block text-lg font-semibold text-gray-800 mb-3">
                          Deskripsi Kebutuhan Event *
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          rows={6}
                          required
                          className={`w-full px-6 py-4 border-2 rounded-2xl focus:ring-2 focus:ring-sage-green focus:border-sage-green transition-all duration-300 text-lg resize-none ${errors.description ? 'border-red-500' : 'border-gray-200'
                            }`}
                          placeholder="Jelaskan konsep, tujuan, target audience, budget estimasi, dan kebutuhan spesifik event Anda..."
                        />
                        {errors.description && (
                          <p className="text-red-500 text-sm mt-2">{errors.description}</p>
                        )}
                        <p className="text-sm text-gray-500 mt-2">
                          Minimal 20 karakter (tersisa: {Math.max(0, 20 - formData.description.length)})
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-8 border-t border-gray-200">
                  {currentStep > 1 ? (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={prevStep}
                      className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl hover:border-sage-green hover:text-sage-green transition-all duration-300 font-semibold flex items-center"
                    >
                      <ArrowLeft size={20} className="mr-2" />
                      Kembali
                    </motion.button>
                  ) : (
                    <div></div>
                  )}

                  {currentStep < 3 ? (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={nextStep}
                      className="px-8 py-4 bg-sage-green text-white rounded-2xl hover:bg-opacity-90 transition-all duration-300 font-semibold flex items-center"
                    >
                      Lanjut
                      <ArrowRight size={20} className="ml-2" />
                    </motion.button>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-4 bg-gradient-to-r from-sage-green to-emerald-600 text-white rounded-2xl hover:opacity-90 transition-all duration-300 font-semibold flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={20} className="animate-spin mr-2" />
                          Mengirim...
                        </>
                      ) : (
                        <>
                          Kirim Permintaan
                          <CheckCircle size={20} className="ml-2" />
                        </>
                      )}
                    </motion.button>
                  )}
                </div>
              </form>
            </motion.div>

            {/* Contact Shortcut */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-16 text-center bg-gradient-to-r from-sage-green/10 to-emerald-100 rounded-3xl p-8 border border-sage-green/20"
            >
              <h3 className="text-3xl font-playfair font-bold mb-4 text-charcoal-green-black">
                Masih Ada Pertanyaan?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
                Tim marketing kami siap membantu Anda dengan respons cepat dan solusi terbaik untuk event Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/6285856651576"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-2xl hover:bg-green-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                >
                  <Phone size={20} className="mr-3" />
                  WhatsApp Business
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:Marketing@NawaCreative.com"
                  className="inline-flex items-center bg-charcoal-green-black text-white px-8 py-4 rounded-2xl hover:bg-opacity-90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                >
                  <Mail size={20} className="mr-3" />
                  Email Marketing
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}