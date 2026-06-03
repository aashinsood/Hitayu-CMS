// src/components/Services.tsx

export default function Services() {
  const services = [
    { icon: '🌐', title: 'Domain Registration', description: 'Register and manage your domain with ease. Competitive pricing on all popular TLDs.' },
    { icon: '📧', title: 'Email Hosting', description: 'Professional email accounts with your own domain. 10 GB storage per account.' },
    { icon: '🔄', title: 'SSL Certificates', description: 'Free SSL certificates included with all plans. Secure your website in seconds.' },
    { icon: '💾', title: 'Automatic Backups', description: 'Daily automated backups to protect your valuable data. Restore anytime with one click.' },
    { icon: '⚙️', title: 'Website Builder', description: 'Drag-and-drop website builder with hundreds of professional templates.' },
    { icon: '📈', title: 'Analytics & Reports', description: 'Detailed traffic analytics and performance reports for your website.' }
  ]

  return (
    <section className="services-section">
      <div className="container">
        <h2>Our Services</h2>
        <p className="services-subtitle">Everything you need to succeed online</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
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
