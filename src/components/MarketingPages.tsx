import Link from 'next/link'
import type { ReactNode } from 'react'

type Action = {
  href: string
  label: string
  variant?: 'primary' | 'secondary'
}

type Card = {
  title: string
  text: string
}

type Feature = {
  title: string
  text: string
  badge?: string
}

type Stat = {
  value: string
  label: string
  detail?: string
}

type Plan = {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  isPopular?: boolean
}

type ContactDetail = {
  title: string
  value: string
  description: string
}

type FAQItem = {
  question: string
  answer: string
}

export function MarketingHero({
  actions,
  children,
  kicker,
  text,
  title,
  visual = <ServerVisual />,
}: {
  actions?: Action[]
  children?: ReactNode
  kicker: string
  text: string
  title: string
  visual?: ReactNode
}) {
  return (
    <section className="marketing-hero">
      <div className="marketing-hero-copy">
        <span className="marketing-kicker">{kicker}</span>
        <h1>{title}</h1>
        <p>{text}</p>
        {actions?.length ? (
          <div className="marketing-actions">
            {actions.map((action) => (
              <Link
                key={action.href + action.label}
                href={action.href}
                className={action.variant === 'secondary' ? 'btn-secondary' : 'btn-primary'}
              >
                {action.label}
              </Link>
            ))}
          </div>
        ) : null}
        {children}
      </div>
      {visual}
    </section>
  )
}

export function ServerVisual() {
  return (
    <div className="marketing-hero-visual" aria-label="Hosting infrastructure overview">
      <div className="hero-visual-frame">
        <div className="hero-visual-copy">
          <span>Reliable infrastructure for modern websites</span>
          <p>
            Fast, stable hosting that keeps your business online and your content ready for
            visitors.
          </p>
        </div>
        <div className="hero-visual-stats">
          <div>
            <strong>99.99%</strong>
            <p>uptime</p>
          </div>
          <div>
            <strong>35ms</strong>
            <p>average response</p>
          </div>
          <div>
            <strong>24/7</strong>
            <p>monitoring</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SectionHeader({
  title,
  kicker,
  description,
}: {
  title: string
  kicker?: string
  description?: string
}) {
  return (
    <header className="section-header">
      {kicker ? <span className="section-kicker">{kicker}</span> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </header>
  )
}

export function SplitStory({
  kicker,
  text,
  title,
}: {
  kicker: string
  text: string
  title: string
}) {
  return (
    <section className="split-story">
      <div className="split-story-copy">
        <span className="about-page-kicker">{kicker}</span>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  )
}

export function CardGrid({ ariaLabel, cards }: { ariaLabel: string; cards: Card[] }) {
  return (
    <section className="card-grid" aria-label={ariaLabel}>
      {cards.map((card) => (
        <article key={card.title} className="feature-card">
          <h3>{card.title}</h3>
          <p>{card.text}</p>
        </article>
      ))}
    </section>
  )
}

export function FeatureGrid({ features, ariaLabel }: { features: Feature[]; ariaLabel: string }) {
  return (
    <section className="feature-grid" aria-label={ariaLabel}>
      {features.map((feature) => (
        <article key={feature.title} className="feature-card feature-card-large">
          {feature.badge ? <span className="feature-badge">{feature.badge}</span> : null}
          <h3>{feature.title}</h3>
          <p>{feature.text}</p>
        </article>
      ))}
    </section>
  )
}

export function StatsBand({ stats }: { stats: Stat[] }) {
  return (
    <section className="stats-band">
      {stats.map((stat) => (
        <div key={stat.label} className="stat-item">
          <strong>{stat.value}</strong>
          <p>{stat.label}</p>
          {stat.detail ? <span>{stat.detail}</span> : null}
        </div>
      ))}
    </section>
  )
}

export function ProofBand({
  items,
  kicker,
  title,
}: {
  items: string[]
  kicker: string
  title: string
}) {
  return (
    <section className="proof-band">
      <div className="proof-copy">
        <span className="about-page-kicker">{kicker}</span>
        <h2>{title}</h2>
      </div>
      <ul className="proof-items">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export function FAQSection({ items }: { items: FAQItem[] }) {
  return (
    <section className="faq-section">
      <SectionHeader
        kicker="FAQ"
        title="Questions most customers ask first"
        description="Answers for the common hosting, migration, and support questions that help you choose wisely."
      />
      <div className="faq-grid">
        {items.map((item) => (
          <article key={item.question} className="faq-card">
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export function PageCTA({
  href,
  label,
  text,
  title,
}: {
  href: string
  label: string
  text: string
  title: string
}) {
  return (
    <section className="page-cta">
      <div className="page-cta-copy">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <Link href={href} className="btn-primary cta-button">
        {label}
      </Link>
    </section>
  )
}

export function PricingCard({ plan }: { plan: Plan }) {
  return (
    <article className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}>
      {plan.isPopular ? <div className="popular-badge">POPULAR</div> : null}
      <div className="pricing-card-head">
        <div>
          <h3>{plan.name}</h3>
          <p className="pricing-card-subtitle">{plan.description}</p>
        </div>
        <div className="price">
          <span className="amount">{plan.price}</span>
          <span className="period">{plan.period}</span>
        </div>
      </div>
      <ul className="features-list">
        {plan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <Link href="/contact" className="btn-primary page-plan-link">
        Start with {plan.name}
      </Link>
    </article>
  )
}

export function PricingCards({ plans }: { plans: Plan[] }) {
  return (
    <section className="page-pricing-section">
      <div className="pricing-section-intro">
        <SectionHeader
          kicker="Hosting plans"
          title="Choose a plan that fits your website today"
          description="Clear pricing, fast setup, and flexible upgrades for every stage—from launch to growth."
        />
      </div>
      <div className="pricing-grid">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  )
}

export function ContactForm() {
  return (
    <form className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="Your full name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="you@example.com" />
      </div>
      <div className="form-group">
        <label htmlFor="project">Website or project</label>
        <input id="project" type="text" placeholder="Current site or idea" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="Tell us your hosting needs, migration details, or support question."
        />
      </div>
      <button type="submit" className="btn-primary">
        Send Inquiry
      </button>
    </form>
  )
}

export function ContactDetailCard({ detail }: { detail: ContactDetail }) {
  return (
    <article className="contact-detail-card">
      <h3>{detail.title}</h3>
      <p className="contact-value">{detail.value}</p>
      <p>{detail.description}</p>
    </article>
  )
}

export function ContactPanel({ details }: { details: ContactDetail[] }) {
  return (
    <section className="page-contact-section">
      <div className="contact-layout">
        <div className="contact-copy-block">
          <SectionHeader
            kicker="Contact"
            title="Send a quick brief and we’ll suggest the best hosting path"
            description="Tell us your website type, current provider, traffic expectations, and whether you need migration or support. We respond with a clear next step."
          />
          <ContactForm />
        </div>

        <div className="contact-details">
          <div className="contact-detail-copy">
            <span className="section-kicker">Support</span>
            <h2>Fast answers and clear hosting guidance</h2>
            <p>
              We respond with a concrete next step: the best plan, migration approach, or support
              option for your website.
            </p>
          </div>
          <div className="contact-detail-grid">
            {details.map((item) => (
              <ContactDetailCard key={item.title} detail={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
