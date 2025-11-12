import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Youtube, Linkedin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal-green-black text-light-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section dengan Logo saja */}
          <div>
            <div className="mb-4">
              <div className="w-48 h-15 relative">
                <Image
                  src="/images/Logo.png"
                  alt="Nawa Creative"
                  width={160}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
            <p className="text-sm mb-4">The Spaces of Highest Creativity</p>
            <p className="text-sm italic">&quot;Because every story deserves its highest space.&quot;</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-sage-green transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-sage-green transition-colors">Services</Link></li>
              <li><Link href="/projects" className="hover:text-sage-green transition-colors">Projects</Link></li>
              <li><Link href="/team" className="hover:text-sage-green transition-colors">Our Team</Link></li>
              <li><Link href="/partners" className="hover:text-sage-green transition-colors">Partners</Link></li>
              <li><Link href="/booking" className="hover:text-sage-green transition-colors">Booking Event</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span>Marketing@NawaCreative.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <span>085856651576</span>
              </div>
              <div className="flex items-center space-x-3">
                <span>Website: www.NawaCreative.com</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-sage-green transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-sage-green transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="hover:text-sage-green transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm">
          <p>© 2024 Mandala Nawa Creative — All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}