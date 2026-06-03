// src/components/Hero.tsx

import { getSiteSettings } from '@/lib/payload-utils'

export default async function Hero() {
  const settings = await getSiteSettings()

  const title = settings?.heroTitle || 'Fast, Reliable & Secure Web Hosting'
  const description = settings?.heroDescription || 'Empower your online presence with our cutting-edge hosting solutions. Starting from just $2.99/month'

  return (
    <section className="hero-section">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
        <div className="hero-content">
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="hero-buttons">
            <button className="btn-primary">Get Started Now</button>
            <button className="btn-secondary">View Plans</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-illustration">🚀</div>
        </div>
      </div>
    </section>
  )
}
