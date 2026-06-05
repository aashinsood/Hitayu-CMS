import './styles.css'
import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { getSiteSettings } from '@/lib/payload-utils'
import WhyChoose from '@/components/WhyChoose'
import ServicesSection from '@/components/ServicesSection'
import AWSInfrastructure from '@/components/AWSInfrastructure'
import PricingSection from '@/components/PricingSection'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'

export const dynamic = 'force-dynamic'

export async function generateMetadata() {
  const settings = await getSiteSettings()
  const siteName = settings?.siteName || 'Hitayu Hosting'

  return {
    title: `${siteName} - Web Hosting Solutions`,
    description:
      settings?.heroDescription ||
      'Fast, reliable, and secure web hosting starting from $2.99/month',
  }
}

export default function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <WhyChoose />
      <ServicesSection />
      <AWSInfrastructure />
      <PricingSection />
      <FAQ />
      <CTASection />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
