import Hero from '@/components/home/Hero'
import AboutPreview from '@/components/home/AboutPreview'
import ServicesHighlight from '@/components/home/ServicesHighlight'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import ClientPartnerPreview from '@/components/home/ClientPartnerPreview'
import CTA from '@/components/shared/CTA'

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <AboutPreview />
      <ServicesHighlight />
      <FeaturedProjects />
      <ClientPartnerPreview />
      <CTA 
        title="Kami siap membantu menciptakan pengalaman terbaik untuk ide Anda."
        buttonText="Booking Event Sekarang"
        href="/booking"
      />
    </main>
  )
}