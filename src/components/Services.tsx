// src/components/Services.tsx

import { getServices } from '@/lib/payload-utils'

export default async function Services() {
  const services = await getServices()

  return (
    <section className="services-section">
      <div className="container">
        <h2>Our Services</h2>
        <p className="services-subtitle">Everything you need to succeed online</p>
        <div className="services-grid">
          {services.map((service: any) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
