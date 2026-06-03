// src/components/Contact.tsx

import { getSiteSettings } from '@/lib/payload-utils'

export default async function Contact() {
  const settings = await getSiteSettings()

  const address = settings?.contactAddress || 'King Street\nMelbourne, Australia'
  const email = settings?.contactEmail || 'info@hostiko.com'
  const supportEmail = settings?.contactEmail || 'support@hostiko.com'
  const phone = settings?.contactPhone || '+1 (234) 567-8900'
  const hours = settings?.contactPhoneHours || 'Mon-Fri, 9AM-6PM EST'

  return (
    <section className="contact-section">
      <div className="container">
        <h2>Get In Touch</h2>
        <p className="contact-subtitle">Have questions? We're here to help!</p>
        <div className="contact-content">
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea rows={6} placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>

          <div className="contact-info">
            <div className="info-item">
              <h3>📍 Address</h3>
              <p>{address}</p>
            </div>
            <div className="info-item">
              <h3>📧 Email</h3>
              <p>{email}<br />{supportEmail}</p>
            </div>
            <div className="info-item">
              <h3>📞 Phone</h3>
              <p>{phone}<br />{hours}</p>
            </div>
            <div className="info-item">
              <h3>💬 Live Chat</h3>
              <p>Available 24/7 for<br />quick support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
