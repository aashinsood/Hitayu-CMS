import CareersHeroSection from '@/components/CareersHeroSection'
import CareersBenefits from '@/components/CareersBenefits'
import CareersTraits from '@/components/CareersTraits'
import CareersCTA from '@/components/CareersCTA'
import { getSiteSettings } from '@/lib/payload-utils'

export async function generateMetadata() {
  const settings = await getSiteSettings()
  const c = (settings as any)?.careersPage
  return {
    title: 'Careers – Hitayu',
    description:
      c?.description ||
      'Join the Hitayu team. Explore careers in cloud, data, and digital transformation technologies.',
  }
}

export default async function CareersPage() {
  const settings = await getSiteSettings()
  const c = (settings as any)?.careersPage
  const bannerEyebrow = c?.eyebrow || 'Careers'

  return (
    <>
      <section className="ht-cbanner">
        <div className="ht-container">
          <h1 className="ht-cbanner-title">Careers</h1>
        </div>
      </section>

      <CareersHeroSection />
      <CareersBenefits />
      <CareersTraits />
      <CareersCTA />
    </>
  )
}
