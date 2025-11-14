'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Team', href: '/team' },
    { name: 'Partners', href: '/partners' },
  ]

  // Fungsi untuk membuka WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = '085856651576'
    const message = 'Halo, saya ingin bertanya tentang layanan Nawa Creative'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
      ? 'bg-white/95 backdrop-blur-lg shadow-lg py-2'
      : 'bg-white/90 backdrop-blur-sm shadow-sm py-4'
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo yang lebih besar */}
          <Link href="/" className="flex items-center">
            <div className="w-60 h-16 relative transition-all duration-500 hover:scale-105">
              <Image
                src="/images/Logo.png"
                alt="Nawa Creative"
                width={240}
                height={64}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-charcoal-green-black hover:text-sage-green transition-all duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sage-green transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={openWhatsApp}
              className="flex items-center space-x-2 text-charcoal-green-black hover:text-sage-green transition-all duration-300 group cursor-pointer"
            >
              <Phone size={16} className="text-sage-green group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium">085856651576</span>
            </button>

            <Link
              href="/booking"
              className="bg-sage-green text-white px-6 py-3 rounded-xl hover:bg-charcoal-green-black hover:scale-105 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
            >
              Booking Event
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-charcoal-green-black p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-200 bg-white/95 backdrop-blur-lg">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-charcoal-green-black hover:text-sage-green transition-all duration-300 py-3 font-medium text-lg border-b border-gray-100 hover:border-sage-green hover:pl-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-200 space-y-4">
                <button
                  onClick={() => {
                    openWhatsApp()
                    setIsMenuOpen(false)
                  }}
                  className="flex items-center space-x-3 text-sage-green hover:opacity-80 transition w-full text-left"
                >
                  <Phone size={20} className="text-sage-green" />
                  <span className="font-medium">085856651576</span>
                </button>

                <Link
                  href="/booking"
                  className="block bg-sage-green text-white px-6 py-4 rounded-xl hover:bg-charcoal-green-black transition-all duration-300 font-semibold text-center text-lg shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Booking Event
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}