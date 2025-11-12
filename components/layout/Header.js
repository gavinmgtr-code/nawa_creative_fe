'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Team', href: '/team' },
    { name: 'Partners', href: '/partners' },
  ]

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo saja tanpa teks */}
          <Link href="/" className="flex items-center">
            <div className="w-46 h-14 relative"> {/* Ukuran diperbesar */}
              <Image
                src="/images/Logo.png"
                alt="Nawa Creative"
                width={160}
                height={48}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-charcoal-green-black hover:text-sage-green transition-colors duration-300 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/booking"
              className="bg-sage-green text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-semibold"
            >
              Booking Event
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-charcoal-green-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-charcoal-green-black hover:text-sage-green transition-colors duration-300 py-2 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/booking"
                className="bg-sage-green text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-center font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Booking Event
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}