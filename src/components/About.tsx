// src/components/About.tsx

import { getAboutItems, getSiteSettings } from '@/lib/payload-utils'

export default async function About() {
  const aboutItems = await getAboutItems()
  const settings = await getSiteSettings()
  const siteName = settings?.siteName || 'HOSTIKO'

  return (
    <section className="about-section">
      <div className="container">
        <h2>Why Choose {siteName}?</h2>
        <div className="about-grid">
          {aboutItems.map((item: any) => (
            <div key={item.id} className="about-card">
              <div className="about-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
