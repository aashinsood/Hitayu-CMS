import Image from 'next/image'
import { getSiteSettings } from '@/lib/payload-utils'

export default async function Hero() {
  const settings = await getSiteSettings()
  const hero = settings?.heroSection

  const badge = hero?.badge || 'Empowering Growth Through Technology — Since 2016'
  const description =
    hero?.description ||
    'At Hitayu, we specialize in delivering impactful technology solutions that enable businesses to grow and thrive. Our dedicated team of professionals brings your ideas to life with precision and expertise.'

  const stats = [
    { t: 200, suffix: '+', label: 'Projects Delivered' },
    { t: 50, suffix: '+', label: 'Enterprise Clients' },
    // { t: 98, suffix: '%', label: 'Client Satisfaction' },
    { t: 8, suffix: '+', label: 'Years Excellence' },
  ]

  return (
    <section className="ht-hero" id="home">
      {/* Backgrounds */}
      <div className="ht-hbg">
        <div className="ht-hbg-grad" />
        <div className="ht-hbg-grid" />
        <div className="ht-orb ht-o1" />
        <div className="ht-orb ht-o2" />
        <div className="ht-orb ht-o3" />
        <div className="ht-ptcl" id="ht-ptcl" />
      </div>

      <div className="ht-container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div className="ht-hero-wrap">
          {/* Left content */}
          <div>
            <div className="ht-hbadge">
              <span className="ht-hbadge-dot" />
              {badge}
            </div>

            <h1 className="ht-htitle">
              Reimagine, Digitize
              <br />
              &amp;{' '}
              <span className="grad" id="ht-typeEl">
                Unleash Cloud
              </span>
            </h1>

            <p className="ht-hsub">{description}</p>

            <div className="ht-hact">
              <a href="#contact" className="ht-btn ht-btn-p">
                Get Free Consultation <i className="fas fa-arrow-right" />
              </a>
              <a href="#services" className="ht-btn ht-btn-o">
                <i className="fas fa-play-circle" /> Explore Services
              </a>
            </div>

            <div className="ht-hchips">
              {stats.map((s, i) => (
                <div key={i} className="ht-chip">
                  <div className="ht-chip-v">
                    <span className="ht-counter" data-t={s.t}>
                      0
                    </span>
                    <span>{s.suffix}</span>
                  </div>
                  <div className="ht-chip-l">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="ht-hvis">
            <div className="ht-horb">
              <div className="ht-hring" />
              <div className="ht-hcard">
                <Image
                  src="https://demo.web-glaze.com/108/wp-content/uploads/2026/06/hitayus-logo-new.png"
                  alt="Hitayu"
                  width={160}
                  height={120}
                  style={{ objectFit: 'cover' }}
                  priority
                />
                <div className="ht-htag">Technology · Innovation · Excellence</div>
              </div>
              <div className="ht-fc ht-fc1">
                <div className="ht-fci" style={{ background: 'rgba(0,200,232,.15)' }}>
                  <i
                    className="fas fa-cloud"
                    style={{ color: 'var(--cyan)', fontSize: '0.8rem' }}
                  />
                </div>
                <div className="ht-fcv">99.9%</div>
                <div className="ht-fcl">Uptime SLA</div>
              </div>
              <div className="ht-fc ht-fc2">
                <div className="ht-fci" style={{ background: 'rgba(37,43,110,.3)' }}>
                  <i
                    className="fas fa-shield-alt"
                    style={{ color: '#60A5FA', fontSize: '0.8rem' }}
                  />
                </div>
                <div className="ht-fcv">ISO 27001</div>
                <div className="ht-fcl">Certified</div>
              </div>
              <div className="ht-fc ht-fc3">
                <div className="ht-fci" style={{ background: 'rgba(0,200,232,.15)' }}>
                  <i className="fas fa-bolt" style={{ color: 'var(--cyan)', fontSize: '0.8rem' }} />
                </div>
                <div className="ht-fcv">3× Faster</div>
                <div className="ht-fcl">Deployment</div>
              </div>
              <div className="ht-fc ht-fc4">
                <div className="ht-fci" style={{ background: 'rgba(37,43,110,.3)' }}>
                  <i className="fas fa-headset" style={{ color: '#60A5FA', fontSize: '0.8rem' }} />
                </div>
                <div className="ht-fcv">24/7</div>
                <div className="ht-fcl">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="ht-hscroll">
        <div className="ht-spill" />
        <span>Scroll to explore</span>
      </div> */}
    </section>
  )
}
