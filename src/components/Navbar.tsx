import Link from 'next/link'
import Image from 'next/image'
import { getSiteSettings } from '@/lib/payload-utils'

export default async function Navbar() {
  const settings = await getSiteSettings()
  const phone = settings?.headerInfo?.phone || '+91 123 456 7890'
  const logoUrl: string =
    'https://demo.web-glaze.com/108/wp-content/uploads/2026/06/hitayus-logo-new.png'
  // (settings as any)?.logo?.url || '/logo.png'

  return (
    <>
      <nav className="ht-nav" id="ht-nav">
        <div className="ht-nav__bar">
          {/* Logo */}
          <Link href="/" className="ht-logo">
            <Image
              src={logoUrl}
              alt="Hitayu"
              width={32}
              height={32}
              style={{ objectFit: 'contain', objectPosition: 'left center' }}
              priority
            />
          </Link>

          {/* Desktop links */}
          <ul className="ht-nav__links">
            {/* Company */}
            <li className="ht-nitem">
              <span className="ht-na">
                Company <i className="fas fa-chevron-down" />
              </span>
              <div className="ht-mega">
                <div className="ht-mega__head">Company</div>
                <Link href="#about" className="ht-mitem">
                  <div className="ht-mico">
                    <i className="fas fa-building" />
                  </div>
                  <div className="ht-mtxt">
                    <h4>About Us</h4>
                    <p>Mission, vision & values</p>
                  </div>
                </Link>
                <Link href="#careers" className="ht-mitem">
                  <div className="ht-mico">
                    <i className="fas fa-users" />
                  </div>
                  <div className="ht-mtxt">
                    <h4>Careers</h4>
                    <p>Join the Hitayu team</p>
                  </div>
                </Link>
                <Link href="#partners" className="ht-mitem">
                  <div className="ht-mico">
                    <i className="fas fa-handshake" />
                  </div>
                  <div className="ht-mtxt">
                    <h4>Partners</h4>
                    <p>Cloud-agnostic ecosystem</p>
                  </div>
                </Link>
              </div>
            </li>

            {/* Services */}
            <li className="ht-nitem">
              <span className="ht-na">
                Services <i className="fas fa-chevron-down" />
              </span>
              <div className="ht-mega ht-mega--wide">
                <div className="ht-mega__head">Our Services</div>
                <Link href="#services" className="ht-mitem">
                  <div className="ht-mico">
                    <i className="fas fa-server" />
                  </div>
                  <div className="ht-mtxt">
                    <h4>Managed Services</h4>
                    <p>End-to-end cloud management</p>
                  </div>
                </Link>
                <Link href="#services" className="ht-mitem">
                  <div className="ht-mico">
                    <i className="fas fa-cloud-upload-alt" />
                  </div>
                  <div className="ht-mtxt">
                    <h4>Infrastructure Modernisation</h4>
                    <p>Migration, DR & DevOps</p>
                  </div>
                </Link>
                <Link href="#services" className="ht-mitem">
                  <div className="ht-mico">
                    <i className="fas fa-brain" />
                  </div>
                  <div className="ht-mtxt">
                    <h4>Data, Analytics & AI</h4>
                    <p>GenAI, ML & Data platforms</p>
                  </div>
                </Link>
                <Link href="#services" className="ht-mitem">
                  <div className="ht-mico">
                    <i className="fas fa-shield-alt" />
                  </div>
                  <div className="ht-mtxt">
                    <h4>Managed Security</h4>
                    <p>SOC · SIEM · Zero Trust</p>
                  </div>
                </Link>
                <Link href="#services" className="ht-mitem">
                  <div className="ht-mico">
                    <i className="fas fa-laptop-code" />
                  </div>
                  <div className="ht-mtxt">
                    <h4>App Modernisation</h4>
                    <p>Cloud-native & microservices</p>
                  </div>
                </Link>
                <Link href="#services" className="ht-mitem">
                  <div className="ht-mico">
                    <i className="fas fa-dollar-sign" />
                  </div>
                  <div className="ht-mtxt">
                    <h4>Cloud Cost Optimisation</h4>
                    <p>FinOps & rightsizing</p>
                  </div>
                </Link>
              </div>
            </li>

            {/* Solutions */}
            <li className="ht-nitem">
              <span className="ht-na">
                Solutions <i className="fas fa-chevron-down" />
              </span>
              <div className="ht-mega ht-mega--wide">
                <div className="ht-mega__head">SMB Solutions</div>
                <Link href="#solutions" className="ht-mitem">
                  <div className="ht-mico">
                    <i className="fas fa-box-open" />
                  </div>
                  <div className="ht-mtxt">
                    <h4>SMB-in-a-Box</h4>
                    <p>All-in-one business package</p>
                  </div>
                </Link>
                <Link href="#solutions" className="ht-mitem">
                  <div className="ht-mico">
                    <i className="fas fa-globe" />
                  </div>
                  <div className="ht-mtxt">
                    <h4>Web Hosting Kit</h4>
                    <p>Secure, managed hosting</p>
                  </div>
                </Link>
                <Link href="#solutions" className="ht-mitem">
                  <div className="ht-mico">
                    <i className="fas fa-life-ring" />
                  </div>
                  <div className="ht-mtxt">
                    <h4>DR Jumpstart Bundle</h4>
                    <p>30-min RTO, 15-min RPO</p>
                  </div>
                </Link>
                <Link href="#solutions" className="ht-mitem">
                  <div className="ht-mico">
                    <i className="fas fa-archive" />
                  </div>
                  <div className="ht-mtxt">
                    <h4>Backup Solution Kit</h4>
                    <p>Cloud BaaS & archiving</p>
                  </div>
                </Link>
                <Link href="#solutions" className="ht-mitem">
                  <div className="ht-mico">
                    <i className="fas fa-database" />
                  </div>
                  <div className="ht-mtxt">
                    <h4>Database Starter Kit</h4>
                    <p>RDS deployment</p>
                  </div>
                </Link>
                <Link href="#solutions" className="ht-mitem">
                  <div className="ht-mico">
                    <i className="fas fa-chart-pie" />
                  </div>
                  <div className="ht-mtxt">
                    <h4>BI Solution Kit</h4>
                    <p>Analytics & visualisation</p>
                  </div>
                </Link>
              </div>
            </li>

            <li className="ht-nitem">
              <Link href="#industries" className="ht-na">
                Industries
              </Link>
            </li>
            <li className="ht-nitem">
              <Link href="#contact" className="ht-na">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Actions */}
          <div className="ht-nav__act">
            {/* <a href={`tel:${phone.replace(/\s/g, '')}`} className="ht-nav-phone">
              <i className="fas fa-phone" style={{ color: 'var(--cyan)' }} /> {phone}
            </a> */}
            <Link href="#contact" className="ht-nav-cta">
              Get Started
            </Link>
          </div>

          {/* Hamburger */}
          <button className="ht-ham" id="ht-ham" aria-label="Toggle menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className="ht-mob" id="ht-mob">
        <Link href="/">Home</Link>
        <Link href="#about">About Us</Link>
        <Link href="#careers">Careers</Link>
        <Link href="#partners">Partners</Link>
        <Link href="#services">Services</Link>
        <Link href="#solutions">Solutions</Link>
        <Link href="#industries">Industries</Link>
        <Link href="#contact">Contact Us</Link>
        <Link href="#contact" className="ht-mob-cta">
          Get Started →
        </Link>
      </div>
    </>
  )
}
