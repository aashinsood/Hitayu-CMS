import { getSiteSettings } from '@/lib/payload-utils'

export default async function Hero() {
  const settings = await getSiteSettings()
  const hero = settings?.heroSection

  const badge           = hero?.badge           || 'AWS Powered Cloud Hosting'
  const title           = hero?.title           || 'Managed AWS Hosting\nBuilt For Speed,\nSecurity & Scale'
  const description     = hero?.description     || 'Deploy your website on enterprise-grade AWS infrastructure with lightning-fast performance, daily backups and 24/7 expert support.'
  const primaryText     = hero?.primaryButtonText  || 'Get Started'
  const primaryUrl      = hero?.primaryButtonUrl   || '#'
  const secondaryText   = hero?.secondaryButtonText || 'View Plans'
  const secondaryUrl    = hero?.secondaryButtonUrl  || '#pricing'
  const heroImageUrl    = (hero?.heroImage as any)?.url || hero?.heroImageUrl || 'https://demo.web-glaze.com/108/wp-content/uploads/2026/06/new-header.png'

  const stats: { value: string; label: string }[] =
    hero?.stats && (hero.stats as any[]).length > 0
      ? (hero.stats as any[])
      : [
          { value: '99.99%', label: 'Uptime' },
          { value: '24/7',   label: 'Support' },
          { value: '500+',   label: 'Clients' },
          { value: 'AWS',    label: 'Cloud'   },
        ]
  return (
    <section className="hero">
      <div className="container w-full">
        <div className="hero-grid">

          {/* Left */}
          <div className="hero-content">
            <span className="hero-badge">{badge}</span>

            <h1 style={{ whiteSpace: 'pre-line' }}>{title}</h1>

            <p>{description}</p>

            <div className="hero-buttons">
              <a href={primaryUrl} className="btn-primary">{primaryText}</a>
              <a href={secondaryUrl} className="btn-secondary">{secondaryText}</a>
            </div>

            <div className="hero-stats">
              {stats.map((s, i) => (
                <div key={i}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="hero-image">
            <img src={heroImageUrl} alt="AWS Hosting" />
          </div>

        </div>
      </div>
    </section>
  )
}
