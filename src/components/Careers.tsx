export default function Careers() {
  const checks = [
    'Curious and eager to learn new technologies',
    'Problem-solvers with a proactive mindset',
    'Team players with strong communication skills',
    'Driven to deliver high-quality results',
    'Cloud & DevOps certification preferred',
  ]

  return (
    <section className="ht-section ht-section--light" id="careers" style={{ scrollMarginTop: 90 }}>
      <div className="ht-container">
        <div className="ht-about-g" style={{ gap: 60 }}>
          {/* Content */}
          <div>
            <div className="ht-eyebrow ht-reveal">Careers</div>
            <h2 className="ht-title ht-reveal">Build Your <span className="hi">Future</span> with Hitayu</h2>
            <p className="ht-sub ht-reveal">At Hitayu, we believe that our people are the driving force behind everything we do. We offer an environment where you can learn, grow, and make a real impact — working on meaningful projects spanning cloud solutions, infrastructure, data management, and emerging technologies.</p>
            <div className="ht-feat-l">
              <div className="ht-feat ht-reveal ht-d1">
                <div className="ht-ftic"><i className="fas fa-chart-line" /></div>
                <div><h4>Growth Opportunities</h4><p>Invest in your development through training, mentorship, and hands-on experience with the latest technologies.</p></div>
              </div>
              <div className="ht-feat ht-reveal ht-d2">
                <div className="ht-ftic"><i className="fas fa-lightbulb" /></div>
                <div><h4>Innovative Work</h4><p>Be part of projects leveraging the latest in cloud, data, and digital transformation technologies that shape the future of businesses.</p></div>
              </div>
              <div className="ht-feat ht-reveal ht-d3">
                <div className="ht-ftic"><i className="fas fa-balance-scale" /></div>
                <div><h4>Work-Life Balance</h4><p>We support flexible work environments, collaborative culture, and a team-oriented atmosphere where your ideas are genuinely valued.</p></div>
              </div>
            </div>
            <div style={{ marginTop: 36, display: 'flex', gap: 14 }} className="ht-reveal ht-d4">
              <a href="#contact" className="ht-btn ht-btn-p">Apply Now <i className="fas fa-arrow-right" /></a>
              <a href="#contact" className="ht-btn ht-btn-od">Learn More</a>
            </div>
          </div>

          {/* Panel */}
          <div className="ht-reveal ht-d2">
            <div style={{ background: 'linear-gradient(135deg,var(--navy-dark),var(--navy-mid))', borderRadius: 'var(--r-2xl)', padding: 40, color: '#fff' }}>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '1.3rem', fontWeight: 800, marginBottom: 24 }}>Who We&apos;re Looking For</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {checks.map((c, i) => (
                  <div key={i} className="ht-career-check">
                    <i className="fas fa-check" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 32, padding: '20px', background: 'rgba(0,200,232,.1)', border: '1px solid rgba(0,200,232,.2)', borderRadius: 'var(--r-md)' }}>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,.7)', lineHeight: 1.7 }}>
                  Ready to take the next step? We&apos;d love to hear from you. Send your resume and a brief intro to{' '}
                  <strong style={{ color: 'var(--cyan)' }}>careers@hitayu.com</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
