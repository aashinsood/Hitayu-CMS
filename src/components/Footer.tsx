import { getSiteSettings } from '@/lib/payload-utils'

export default async function Footer() {
  const settings           = await getSiteSettings()
  const siteName           = settings?.siteName           || 'HITAYU'
  const companyDescription = settings?.companyDescription || 'Providing reliable, fast and secure AWS-powered hosting solutions trusted by 500+ businesses worldwide.'

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">

          {/* Brand */}
          <div className="footer-section">
            <div className="footer-logo">
              <span>◆</span>
              <h3>{siteName}</h3>
            </div>
            <p className="footer-desc">{companyDescription}</p>
            <div className="footer-social">
              <a href="#" title="LinkedIn">in</a>
              <a href="#" title="Twitter">𝕏</a>
              <a href="#" title="Facebook">f</a>
              <a href="#" title="Instagram">ig</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/hosting">Hosting Plans</a></li>
              <li><a href="/domains">Domain Registration</a></li>
              <li><a href="/support">Support Center</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/partners">Partners</a></li>
              <li><a href="/press">Press Kit</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-section">
            <h4>Legal</h4>
            <ul className="footer-links">
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/sla">SLA Agreement</a></li>
              <li><a href="/refund">Refund Policy</a></li>
              <li><a href="/cookies">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p className="footer-desc mb-4">Get hosting tips, offers and updates delivered to your inbox.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="your@email.com" />
              <button>Go</button>
            </div>
          </div>

        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>© 2026 {siteName}. All rights reserved.</p>
          <p className="powered-by">Powered by Hitayu Hosting</p>
        </div>
      </div>
    </footer>
  )
}
