import { Check } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "299",
      featured: false,
      features: [
        "1 Website",
        "10GB SSD Storage",
        "Free SSL",
        "Daily Backup",
        "24/7 Support",
      ],
    },
    {
      name: "Business",
      price: "799",
      featured: true,
      features: [
        "10 Websites",
        "50GB SSD Storage",
        "Free SSL",
        "Daily Backup",
        "Priority Support",
        "AWS Cloud Hosting",
      ],
    },
    {
      name: "Enterprise",
      price: "1499",
      featured: false,
      features: [
        "Unlimited Websites",
        "200GB SSD Storage",
        "AWS Infrastructure",
        "Load Balancer",
        "Dedicated Resources",
        "24/7 Premium Support",
      ],
    },
  ];

  return (
    <section className="pricing-section">
      <div className="container">

        <div className="section-header">
          <span>PRICING PLANS</span>

          <h2>
            Choose The Perfect
            <br />
            Hosting Plan
          </h2>

          <p>
            Transparent pricing with no hidden fees.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${
                plan.featured ? "featured" : ""
              }`}
            >
              {plan.featured && (
                <div className="popular-badge">
                  Most Popular
                </div>
              )}

              <h3>{plan.name}</h3>

              <div className="price">
                ₹{plan.price}
                <span>/month</span>
              </div>

              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <Check size={18} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button>
                Get Started
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}