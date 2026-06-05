import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="hero-badge">AWS Powered Cloud Hosting</span>

          <h1>
            Managed AWS Hosting
            <br />
            Built For Speed,
            <br />
            Security & Scale
          </h1>

          <p>
            Deploy your website on enterprise-grade AWS infrastructure with lightning-fast
            performance, daily backups and 24/7 expert support.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>

            <button className="btn-secondary">View Plans</button>
          </div>

          <div className="hero-stats">
            <div>
              <strong>99.99%</strong>
              <span>Uptime</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Support</span>
            </div>

            <div>
              <strong>AWS</strong>
              <span>Cloud</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://wp.xpeedstudio.com/hostinza/wp-content/uploads/revslider/home-04/banner_image-41.png"
            alt="AWS Hosting"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </div>
      </div>
    </section>
  )
}
