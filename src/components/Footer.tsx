// src/components/Footer.tsx

import { getSiteSettings } from '@/lib/payload-utils'

export default async function Footer() {
  const settings = await getSiteSettings()

  const siteName = settings?.siteName || 'HOSTIKO'
  const companyDescription = settings?.companyDescription || 'Providing reliable and fast web hosting solutions since 2015.'

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <span className="footer-logo-icon">◆</span>
              <h3>{siteName}</h3>
            </div>
            <p className="footer-desc">{companyDescription}</p>
            <div className="footer-social">
              <a href="#" className="footer-social-link" title="LinkedIn">in</a>
              <a href="#" className="footer-social-link" title="Twitter">𝕏</a>
              <a href="#" className="footer-social-link" title="Facebook">f</a>
              <a href="#" className="footer-social-link" title="Instagram">📷</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/hosting">Hosting Plans</a></li>
              <li><a href="/domains">Domain Registration</a></li>
              <li><a href="/support">Support</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/press">Press Kit</a></li>
              <li><a href="/partners">Partners</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul className="footer-links">
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/sla">Service Level Agreement</a></li>
              <li><a href="/refund">Refund Policy</a></li>
              <li><a href="/cookies">Cookie Policy</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Newsletter</h4>
            <p className="footer-newsletter-text">Subscribe to get special offers and updates.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>&copy; 2024 {siteName}. All rights reserved.</p>
          <p className="powered-by">Powered by Payload CMS</p>
        </div>
      </div>
    </footer>
  )
}
