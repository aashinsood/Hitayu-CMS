import {
  ContactPanel,
  FAQSection,
  MarketingHero,
  PageCTA,
  SplitStory,
} from '@/components/MarketingPages'
import { getContactPageData } from '@/lib/marketing-page-data'

export const metadata = {
  title: 'Contact | Hitayu',
  description:
    'Contact Hitayu for hosting plans, migration help, support, and website setup guidance.',
}

export default async function ContactPage() {
  const page = await getContactPageData()

  return (
    <main className="marketing-page">
      <MarketingHero
        actions={page.hero.actions}
        kicker={page.hero.kicker}
        text={page.hero.text}
        title={page.hero.title}
      />
      <ContactPanel details={page.details} />
      <SplitStory kicker={page.story.kicker} text={page.story.text} title={page.story.title} />
      <FAQSection items={page.faq} />
      <PageCTA
        href={page.cta.href}
        label={page.cta.label}
        text={page.cta.text}
        title={page.cta.title}
      />
    </main>
  )
}
