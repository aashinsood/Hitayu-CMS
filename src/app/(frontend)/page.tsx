import './styles.css'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Pricing from '@/components/Pricing'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { getSiteSettings } from '@/lib/payload-utils'

export const dynamic = 'force-dynamic'

export async function generateMetadata() {
  const settings = await getSiteSettings()
  const siteName = settings?.siteName || 'HOSTIKO'
  
  return {
    title: `${siteName} - Web Hosting Solutions`,
    description: settings?.heroDescription || 'Fast, reliable, and secure web hosting starting from $2.99/month',
  }
}

export default function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
