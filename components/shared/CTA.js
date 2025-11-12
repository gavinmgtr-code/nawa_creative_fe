"use client"

import Link from 'next/link'

export default function CTA({ title, buttonText, href = "/booking" }) {
  return (
    <section className="py-20 bg-charcoal-green-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
          {title}
        </h2>
        <Link 
          href={href}
          className="inline-flex items-center bg-sage-green text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 font-semibold text-lg group"
        >
          {buttonText}
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </section>
  )
}