import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata = {
  title: 'Mandala Nawa Creative - The Spaces of Highest Creativity',
  description: 'Kami menciptakan ruang bagi ide, talenta, dan karya untuk tumbuh menjadi pengalaman terbaik.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}