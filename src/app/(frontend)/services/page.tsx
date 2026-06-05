import {
  FeatureGrid,
  MarketingHero,
  PageCTA,
  ProofBand,
  SplitStory,
  CardGrid,
} from '@/components/MarketingPages'
import { getServicesPageData } from '@/lib/marketing-page-data'

export const metadata = {
  title: 'Services | Hitayu',
  description: 'Hosting, migration, DNS, performance, and website support services from Hitayu.',
}

export default async function ServicesPage() {
  const page = await getServicesPageData()

  return (
    <main className="marketing-page">
      <MarketingHero
        actions={page.hero.actions}
        kicker={page.hero.kicker}
        text={page.hero.text}
        title={page.hero.title}
      />
      <SplitStory kicker={page.story.kicker} text={page.story.text} title={page.story.title} />
      <FeatureGrid features={page.features} ariaLabel="Our service offerings" />
      <CardGrid ariaLabel="Hosting service details" cards={page.cards} />
      <ProofBand items={page.proof.items} kicker={page.proof.kicker} title={page.proof.title} />
      <PageCTA
        href={page.cta.href}
        label={page.cta.label}
        text={page.cta.text}
        title={page.cta.title}
      />
    </main>
  )
}
