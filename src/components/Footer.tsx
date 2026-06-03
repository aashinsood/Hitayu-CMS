// src/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>HOSTIKO</h4>
            <p>Providing reliable and fast web hosting solutions since 2015.</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/hosting">Hosting Plans</a></li>
              <li><a href="/domains">Domain Registration</a></li>
              <li><a href="/support">Support</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/sla">Service Level Agreement</a></li>
              <li><a href="/refund">Refund Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 HOSTIKO. All rights reserved. Powered by Payload CMS.</p>
        </div>
      </div>
    </footer>
  )
}
