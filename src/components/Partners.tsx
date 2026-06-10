const partners = [
  { icon: 'fab fa-aws', label: 'Amazon Web Services' },
  { icon: 'fab fa-microsoft', label: 'Microsoft Azure' },
  { icon: 'fab fa-google', label: 'Google Cloud' },
  { icon: 'fas fa-cloud', label: 'Oracle Cloud' },
  { icon: 'fas fa-server', label: 'IBM Cloud' },
]

export default function Partners() {
  return (
    <section className="ht-section" id="partners" style={{ scrollMarginTop: 90 }}>
      <div className="ht-container">
        <div className="ht-text-center" style={{ maxWidth: 680, margin: '0 auto' }}>
          <div className="ht-eyebrow ht-eyebrow--center">Our Partners</div>
          <h2 className="ht-title ht-reveal">Cloud-Agnostic. <span className="hi">Your Cloud,</span><br />Your Choice, Our Expertise</h2>
          <p className="ht-sub ht-reveal" style={{ margin: '16px auto 0' }}>We maintain a cloud-agnostic approach — giving you the freedom to choose the Cloud Service Provider that best fits your business needs. Our team brings deep in-house expertise across all leading cloud platforms.</p>
        </div>
        <div className="ht-part-box ht-reveal">
          <div className="ht-part-inner">
            <div className="ht-part-text">
              <h3>Multi-Platform Excellence</h3>
              <p>Rather than being tied to a single platform, we work across multiple leading cloud ecosystems — ensuring our solutions are flexible, scalable, and aligned with your strategic goals. By partnering with us, you gain access to a broad network of technologies combined with the confidence that solutions are tailored specifically to your requirements — not constrained by vendor limitations.</p>
            </div>
            <div className="ht-part-logos">
              {partners.map((p, i) => (
                <div key={i} className="ht-plogo">
                  <i className={p.icon} />
                  <span>{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
