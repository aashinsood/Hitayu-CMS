import {
  FeatureGrid,
  MarketingHero,
  PageCTA,
  PricingCards,
  SplitStory,
} from '@/components/MarketingPages'
import { getPricingPageData } from '@/lib/marketing-page-data'

export const metadata = {
  title: 'Pricing | Hitayu',
  description: 'Simple hosting pricing for small websites, business websites, and scaling teams.',
}

export default async function PricingPage() {
  const page = await getPricingPageData()

  return (
    <main className="marketing-page">
      <MarketingHero
        actions={page.hero.actions}
        kicker={page.hero.kicker}
        text={page.hero.text}
        title={page.hero.title}
      />
      <PricingCards plans={page.plans} />
      <FeatureGrid features={page.features} ariaLabel="Pricing benefits" />
      <SplitStory kicker={page.story.kicker} text={page.story.text} title={page.story.title} />
      <PageCTA
        href={page.cta.href}
        label={page.cta.label}
        text={page.cta.text}
        title={page.cta.title}
      />
    </main>
  )
}
