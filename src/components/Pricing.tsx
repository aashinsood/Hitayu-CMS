// src/components/Pricing.tsx

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$2.99',
      period: '/month',
      description: 'Perfect for beginners',
      features: ['5 GB Storage', 'Unlimited Bandwidth', '1 Email Account', 'Free SSL Certificate', 'Basic Support']
    },
    {
      name: 'Professional',
      price: '$6.99',
      period: '/month',
      description: 'For growing businesses',
      features: ['50 GB Storage', 'Unlimited Bandwidth', 'Unlimited Emails', 'Free SSL Certificate', 'Priority Support', 'WordPress Pre-installed', 'Daily Backups'],
      popular: true
    },
    {
      name: 'Business',
      price: '$12.99',
      period: '/month',
      description: 'For large websites',
      features: ['500 GB Storage', 'Unlimited Bandwidth', 'Unlimited Emails', 'Free SSL Certificate', '24/7 Premium Support', 'WordPress Pre-installed', 'Hourly Backups', 'Dedicated IP']
    }
  ]

  return (
    <section className="pricing-section">
      <div className="container">
        <h2>Affordable Hosting Plans</h2>
        <p className="pricing-subtitle">Choose the plan that fits your needs</p>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">POPULAR</div>}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="amount">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              <p className="description">{plan.description}</p>
              <button className="btn-primary">Get Started</button>
              <ul className="features-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
