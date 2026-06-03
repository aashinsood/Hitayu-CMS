// src/components/About.tsx

export default function About() {
  return (
    <section className="about-section">
      <div className="container">
        <h2>Why Choose HOSTIKO?</h2>
        <div className="about-grid">
          <div className="about-card">
            <div className="about-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>99.99% uptime guaranteed with our state-of-the-art infrastructure and servers across multiple locations.</p>
          </div>
          <div className="about-card">
            <div className="about-icon">🔒</div>
            <h3>Ultra Secure</h3>
            <p>Enterprise-grade security with SSL certificates, daily backups, and DDoS protection included.</p>
          </div>
          <div className="about-card">
            <div className="about-icon">👨‍💼</div>
            <h3>Expert Support</h3>
            <p>24/7 customer support team ready to help you with any questions or technical issues.</p>
          </div>
          <div className="about-card">
            <div className="about-icon">📊</div>
            <h3>Easy to Scale</h3>
            <p>Start small and grow at your pace. Upgrade your hosting plan anytime without hassle.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
