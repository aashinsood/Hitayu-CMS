import { Zap, ShieldCheck, Cloud, Headphones } from 'lucide-react'

export default function WhyChoose() {
  const features = [
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast AWS infrastructure powered by SSD storage.',
    },
    {
      icon: ShieldCheck,
      title: 'Advanced Security',
      description: 'Enterprise-grade protection with backups and firewalls.',
    },
    {
      icon: Cloud,
      title: 'AWS Cloud Hosting',
      description: 'Scalable cloud architecture built for reliability.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Expert hosting specialists available anytime.',
    },
  ]

  return (
    <section className="why-choose">
      <div className="container">
        <div className="section-header">
          <span>WHY CHOOSE HITAYU</span>

          <h2>
            Enterprise Grade
            <br />
            Cloud Infrastructure
          </h2>

          <p>
            Power your applications with secure AWS hosting designed for businesses that demand
            reliability and performance.
          </p>
        </div>

        <div className="features-grid">
          {features.map((item, index) => {
            const Icon = item.icon

            return (
              <div className="feature-card" key={index}>
                <div className="feature-icon">
                  <Icon size={32} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
    