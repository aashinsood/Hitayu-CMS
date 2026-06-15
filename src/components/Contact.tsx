import { getSiteSettings } from '@/lib/payload-utils'
import ContactForm from './ContactForm'

export default async function Contact() {
  const settings = await getSiteSettings()
  const address =
    settings?.contactAddress ||
    '4th Floor, Tech Tower, Baner Road, Pune – 411045, Maharashtra, India'
  const phone = settings?.contactPhone || '+91 123 456 7890'
  const email = settings?.contactEmail || 'hello@hitayu.com'

  const infoItems = [
    { icon: 'fas fa-map-marker-alt', title: 'Head Office', lines: address.split('\n') },
    { icon: 'fas fa-phone-alt', title: 'Phone', lines: [phone, 'Emergency Support: 24 × 7 × 365'] },
    { icon: 'fas fa-envelope', title: 'Email', lines: [email, 'support@hitayu.com'] },
    {
      icon: 'fas fa-clock',
      title: 'Business Hours',
      lines: ['Mon–Fri: 9:00 AM – 6:00 PM IST', 'Emergency Support: 24 × 7 × 365'],
    },
  ]

  const socials = [
    { icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
    { icon: 'fab fa-twitter', label: 'Twitter' },
    { icon: 'fab fa-facebook-f', label: 'Facebook' },
    { icon: 'fab fa-instagram', label: 'Instagram' },
    { icon: 'fab fa-youtube', label: 'YouTube' },
  ]

  return (
    <section className="ht-section" id="contact" style={{ scrollMarginTop: 90 }}>
      <div className="ht-container">
        <div className="ht-con-g">
          {/* Info */}
          <div>
            <div className="ht-eyebrow ht-reveal">Get In Touch</div>
            <h2 className="ht-title ht-reveal">
              Let&apos;s Build Something
              <br />
              <span className="hi">Exceptional Together</span>
            </h2>
            <p className="ht-sub ht-reveal">
              Tell us about your project. Our team will respond within 24 hours with a tailored
              proposal and consultation schedule.
            </p>
            <div className="ht-con-info">
              {infoItems.map((item, i) => (
                <div key={i} className={`ht-cii ht-reveal ht-d${i + 1}`}>
                  <div className="ht-ciico">
                    <i className={item.icon} />
                  </div>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.lines.join(' · ')}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="ht-soc-row ht-reveal ht-d4">
              {socials.map((s, i) => (
                <a key={i} href="#" className="ht-soc" title={s.label}>
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="ht-reveal ht-d2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
