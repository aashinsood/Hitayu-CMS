import {
  CardGrid,
  MarketingHero,
  PageCTA,
  ProofBand,
  SplitStory,
  StatsBand,
} from '@/components/MarketingPages'
import { getAboutPageData } from '@/lib/marketing-page-data'

export const metadata = {
  title: 'About Hitayu',
  description: 'A modern hosting company focused on reliable infrastructure and practical support.',
}

export default async function AboutPage() {
  const page = await getAboutPageData()

  return (
    <main className="marketing-page">
      <MarketingHero
        actions={page.hero.actions}
        kicker={page.hero.kicker}
        text={page.hero.text}
        title={page.hero.title}
      />
      <SplitStory kicker={page.story.kicker} text={page.story.text} title={page.story.title} />
      <CardGrid ariaLabel="Company values" cards={page.cards} />
      <StatsBand stats={page.stats} />
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
