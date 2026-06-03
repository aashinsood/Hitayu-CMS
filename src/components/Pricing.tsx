// src/components/Pricing.tsx

import { getPricingPlans } from '@/lib/payload-utils'

export default async function Pricing() {
  const plans = await getPricingPlans()

  return (
    <section className="pricing-section">
      <div className="container">
        <h2>Affordable Hosting Plans</h2>
        <p className="pricing-subtitle">Choose the plan that fits your needs</p>
        <div className="pricing-grid">
          {plans.map((plan: any) => (
            <div key={plan.id} className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}>
              {plan.isPopular && <div className="popular-badge">POPULAR</div>}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="amount">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              <p className="description">{plan.description}</p>
              <button className="btn-primary">Get Started</button>
              <ul className="features-list">
                {plan.features.map((featureObj: any, idx: number) => (
                  <li key={idx}>✓ {featureObj.feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
