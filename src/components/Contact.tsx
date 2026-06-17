import { getSiteSettings } from '@/lib/payload-utils'
import ContactForm from './ContactForm'

export default async function Contact() {
  const settings = await getSiteSettings()

  const address = (settings?.contactAddress as string) || ''
  // const phone = (settings?.contactPhone as string) || '+91 123 456 7890'
  // const email = (settings?.contactEmail as string) || 'hello@hitayu.com'
  const hours = (settings?.contactPhoneHours as string) || 'Mon–Fri: 9 AM – 6 PM IST'

  const infoItems = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Dubai UAE',
      lines: ['Meydan Grandstand, 6th floor, Meydan Road, Nad AlSheba, Dubai, U.A.E'],
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Bengaluru India',
      lines: [
        'Nimbekayipura Road, Huskuru-Bommenhalli Budigere Cross, Bengaluru, Karnataka 562149, India',
      ],
    },
    {
      icon: 'fas fa-clock',
      title: 'Business Hours',
      lines: ['Mon - Fri 9:00 AM - 6:00 PM IST'],
    },
  ]

  // Pull social links from CMS (headerInfo.socialLinks) with fallback
  const cmsLinks = (settings as any)?.headerInfo?.socialLinks as
    | { label: string; url: string; icon: string }[]
    | undefined

  const socials =
    cmsLinks && cmsLinks.length > 0
      ? cmsLinks.map((s) => ({
          icon: s.icon?.startsWith('fa') ? s.icon : `fab fa-${s.icon}`,
          label: s.label,
          url: s.url || '#',
        }))
      : [
          { icon: 'fab fa-linkedin-in', label: 'LinkedIn', url: '#' },
          { icon: 'fab fa-twitter', label: 'Twitter', url: '#' },
          { icon: 'fab fa-facebook-f', label: 'Facebook', url: '#' },
          { icon: 'fab fa-instagram', label: 'Instagram', url: '#' },
          { icon: 'fab fa-youtube', label: 'YouTube', url: '#' },
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
                <a
                  key={i}
                  href={s.url}
                  className="ht-soc"
                  title={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
