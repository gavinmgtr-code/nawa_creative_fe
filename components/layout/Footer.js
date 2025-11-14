import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Youtube, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal-green-black text-light-cream">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="w-60 h-30 relative mb-4">
                <Image
                  src="/images/Logo.png"
                  alt="Nawa Creative"
                  width={160}
                  height={48}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <p className="text-lg font-playfair font-semibold text-sage-green mb-2">
                The Spaces of Highest Creativity
              </p>
              <p className="text-sm text-gray-300 italic leading-relaxed">
                "Because every story deserves its highest space."
              </p>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sage-green hover:text-charcoal-green-black transition-all duration-300 group"
              >
                <Instagram size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sage-green hover:text-charcoal-green-black transition-all duration-300 group"
              >
                <Youtube size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sage-green hover:text-charcoal-green-black transition-all duration-300 group"
              >
                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-sage-green pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/projects", label: "Projects" },
                { href: "/team", label: "Our Team" },
                { href: "/partners", label: "Partners" },
                { href: "/booking", label: "Booking Event" }
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center text-gray-300 hover:text-sage-green transition-all duration-300 group text-sm"
                  >
                    <ArrowRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-sage-green pb-2 inline-block">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "Event Organizer",
                "Creative Agency",
                "Talent Management",
                "Brand Activation",
                "Visual Production",
                "Digital Campaign"
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300 hover:text-sage-green transition-colors duration-300 cursor-pointer text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-sage-green pb-2 inline-block">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-sage-green mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <a
                    href="mailto:Marketing@NawaCreative.com"
                    className="text-gray-300 hover:text-sage-green transition-colors duration-300 text-sm"
                  >
                    Marketing@NawaCreative.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-sage-green mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Phone</p>
                  <a
                    href="tel:085856651576"
                    className="text-gray-300 hover:text-sage-green transition-colors duration-300 text-sm"
                  >
                    +62 858-5665-1576
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-sage-green mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Website</p>
                  <a
                    href="https://www.NawaCreative.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-sage-green transition-colors duration-300 text-sm"
                  >
                    www.NawaCreative.com
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <p className="text-sm font-medium text-white mb-3">Stay Updated</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-sm focus:outline-none focus:border-sage-green transition-colors"
                />
                <button className="bg-sage-green text-charcoal-green-black px-4 py-2 rounded-r-lg font-semibold hover:bg-light-cream transition-colors duration-300 text-sm">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                © 2024 <span className="text-sage-green font-semibold">Mandala Nawa Creative</span> — All rights reserved.
              </p>
            </div>

            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-sage-green transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-sage-green transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-sage-green transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}