export default function About() {
  return (
    <section className="ht-section" id="about" style={{ scrollMarginTop: 90 }}>
      <div className="ht-container">
        <div className="ht-about-g">
          {/* Visual */}
          <div className="ht-about-vis ht-reveal">
            <div className="ht-about-box">
              <div className="ht-about-glow" />
              <svg viewBox="0 0 200 200" fill="none" style={{ width: '65%', position: 'relative', zIndex: 1, opacity: 0.18 }}>
                <circle cx="100" cy="100" r="90" stroke="rgba(0,200,232,.5)" strokeWidth="2" />
                <circle cx="100" cy="100" r="60" stroke="rgba(0,200,232,.3)" strokeWidth="1.5" />
                <path d="M74 148C52 134 40 108 44 84C48 60 66 44 88 44C105 44 117 54 122 68" stroke="white" strokeWidth="10" strokeLinecap="round" fill="none" />
                <path d="M118 40C135 50 142 68 139 87" stroke="white" strokeWidth="9" strokeLinecap="round" fill="none" />
                <path d="M36 126C60 106 98 98 134 78C154 66 166 52 162 40" stroke="#00C8E8" strokeWidth="10" strokeLinecap="round" fill="none" />
              </svg>
            </div>
            <div className="ht-afl ht-afl1">
              <div className="ht-afli ht-afli-c"><i className="fas fa-trophy" /></div>
              <div className="ht-aflt"><strong>Award Winning</strong><span>Best IT Partner 2024</span></div>
            </div>
            <div className="ht-afl ht-afl2">
              <div className="ht-afli ht-afli-n"><i className="fas fa-certificate" /></div>
              <div className="ht-aflt"><strong>ISO 27001</strong><span>Security Certified</span></div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="ht-eyebrow ht-reveal">About Hitayu</div>
            <h2 className="ht-title ht-reveal">Reimagine, Digitize &amp; <span className="hi">Realize Better</span> Business Outcomes</h2>
            <p className="ht-sub ht-reveal">At Hitayu, we specialize in delivering impactful technology solutions that enable businesses to grow and thrive. Our experience across various sectors allows us to craft solutions that are innovative and results-oriented. Every solution we design, develop, or deliver is thoroughly tested and refined to meet the highest standards before delivery.</p>
            <div className="ht-feat-l">
              <div className="ht-feat ht-reveal ht-d1">
                <div className="ht-ftic"><i className="fas fa-rocket" /></div>
                <div><h4>Enabling Agility, Empowering Growth</h4><p>We empower organizations with advanced cloud solutions — multi-cloud, hybrid cloud, containerization, and microservices — enabling faster deployment cycles and dynamic scalability.</p></div>
              </div>
              <div className="ht-feat ht-reveal ht-d2">
                <div className="ht-ftic"><i className="fas fa-star" /></div>
                <div><h4>Commitment to Quality</h4><p>Every solution is thoroughly tested and refined before delivery, ensuring dependable performance and outstanding results aligned with the highest industry standards.</p></div>
              </div>
              <div className="ht-feat ht-reveal ht-d3">
                <div className="ht-ftic"><i className="fas fa-users-cog" /></div>
                <div><h4>Skilled, Dedicated Team</h4><p>100+ certified professionals committed to bringing your ideas to life — from cloud architects to AI engineers and security specialists.</p></div>
              </div>
            </div>
            <div style={{ marginTop: 36 }} className="ht-reveal ht-d4">
              <a href="#contact" className="ht-btn ht-btn-p">Partner with Us <i className="fas fa-arrow-right" /></a>
            </div>
          </div>
        </div>

        {/* MVV */}
        <div style={{ marginTop: 88, textAlign: 'center' }}>
          <div className="ht-eyebrow ht-eyebrow--center">Our Foundation</div>
          <h2 className="ht-title ht-reveal">Mission, Vision &amp; <span className="hi">Values</span></h2>
        </div>
        <div className="ht-mvv-grid">
          <div className="ht-mvv-card ht-reveal">
            <div className="ht-mvv-ico"><i className="fas fa-bullseye" /></div>
            <h4>Our Mission</h4>
            <p>To empower businesses with secure, scalable, and innovative cloud solutions that drive efficiency, growth, and digital transformation.</p>
          </div>
          <div className="ht-mvv-card ht-reveal ht-d1">
            <div className="ht-mvv-ico"><i className="fas fa-eye" /></div>
            <h4>Our Vision</h4>
            <p>To be a globally recognized leader in delivering innovative, secure, and scalable cloud solutions that enable sustainable growth.</p>
          </div>
          <div className="ht-mvv-card ht-reveal ht-d2">
            <div className="ht-mvv-ico"><i className="fas fa-heart" /></div>
            <h4>Our Values</h4>
            <p>Integrity, transparency, and strong ethical principles in all interactions. A client-first approach delivering reliable, high-quality solutions that support long-term success.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
