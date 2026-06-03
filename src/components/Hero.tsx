// src/components/Hero.tsx

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
        <div className="hero-content">
          <h1>Fast, Reliable & Secure Web Hosting</h1>
          <p>Empower your online presence with our cutting-edge hosting solutions. Starting from just $2.99/month</p>
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
