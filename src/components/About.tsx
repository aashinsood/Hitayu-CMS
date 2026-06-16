import Image from 'next/image'
export default function About() {
  return (
    <section className="ht-section" id="about" style={{ scrollMarginTop: 90 }}>
      <div className="ht-container">
        <div className="ht-about-g">
          {/* Visual */}
          <div className="ht-about-vis ht-reveal">
            <div className="ht-about-box">
              <div className="ht-about-glow" />

              <Image
                src={'https://demo.web-glaze.com/108/wp-content/uploads/2026/06/new-header.png'}
                alt="Hitayu"
                width={450}
                height={800}
                style={{ objectFit: 'cover', objectPosition: 'left center', width: '100%', height: 'auto' }}
                priority
              />
            </div>
            <div className="ht-afl ht-afl1">
              <div className="ht-afli ht-afli-c">
                <i className="fas fa-trophy" />
              </div>
              <div className="ht-aflt">
                <strong>Award Winning</strong>
                <span>Best IT Partner 2024</span>
              </div>
            </div>
            <div className="ht-afl ht-afl2">
              <div className="ht-afli ht-afli-n">
                <i className="fas fa-certificate" />
              </div>
              <div className="ht-aflt">
                <strong>ISO 27001</strong>
                <span>Security Certified</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="ht-eyebrow ht-reveal">About Hitayu</div>
            <h2 className="ht-title ht-reveal">
              Reimagine, Digitize &amp; <span className="hi">Realize Better</span>
            </h2>
            <p className="ht-sub ht-reveal">
              Hitayu is a technology solutions company dedicated to helping businesses grow through secure, scalable, and innovative cloud services. 
              We specialize in delivering modern digital solutions that enhance agility, streamline operations, and support long-term business success. 
              With expertise in cloud technologies, hybrid and multi-cloud environments, and application modernization, our team is committed to delivering high-quality, reliable solutions tailored to client needs. 
            </p>
            <div className="ht-feat-l">
              <div className="ht-feat ht-reveal ht-d1">
                <div className="ht-ftic">
                  <i className="fas fa-rocket" />
                </div>
                <div>
                  <h4>Enabling Agility, Empowering Growth</h4>
                  {/* <p>
                    We empower organizations with advanced cloud solutions — multi-cloud, hybrid
                    cloud, containerization, and microservices — enabling faster deployment cycles
                    and dynamic scalability.
                  </p> */}
                </div>
              </div>
              <div className="ht-feat ht-reveal ht-d2">
                <div className="ht-ftic">
                  <i className="fas fa-star" />
                </div>
                <div>
                  <h4>Commitment to Quality</h4>
                  {/* <p>
                    Every solution is thoroughly tested and refined before delivery, ensuring
                    dependable performance and outstanding results aligned with the highest industry
                    standards.
                  </p> */}
                </div>
              </div>
              <div className="ht-feat ht-reveal ht-d3">
                <div className="ht-ftic">
                  <i className="fas fa-users-cog" />
                </div>
                <div>
                  <h4>Skilled, Dedicated Team</h4>
                  {/* <p>
                    100+ certified professionals committed to bringing your ideas to life — from
                    cloud architects to AI engineers and security specialists.
                  </p> */}
                </div>
              </div>
            </div>
            <div style={{ marginTop: 36 }} className="ht-reveal ht-d4">
              <a href="#contact" className="ht-btn ht-btn-p">
                Partner with Us <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>

        {/* MVV */}
        <div style={{ marginTop: 88, textAlign: 'center' }}>
          <div className="ht-eyebrow ht-eyebrow--center">Our Foundation</div>
          <h2 className="ht-title ht-reveal">
            Mission, Vision &amp; <span className="hi">Values</span>
          </h2>
        </div>
        <div className="ht-mvv-grid">
          <div className="ht-mvv-card ht-reveal">
            <div className="ht-mvv-ico">
              <i className="fas fa-bullseye" />
            </div>
            <h4>Our Mission</h4>
            <p>
              Our mission is to empower businesses with secure, scalable, and innovative cloud solutions that improve efficiency, 
              accelerate digital transformation, and drive sustainable growth. We are committed to delivering reliable technology 
              services that help organizations achieve goals.
            </p>
          </div>
          <div className="ht-mvv-card ht-reveal ht-d1">
            <div className="ht-mvv-ico">
              <i className="fas fa-eye" />
            </div>
            <h4>Our Vision</h4>
            <p>
              Our vision is to become a globally recognized leader in cloud technology solutions, 
              enabling organizations to innovate, adapt, and grow in a rapidly evolving digital world. 
              We strive to create lasting value through excellence, innovation, and customer success.
            </p>
          </div>
          <div className="ht-mvv-card ht-reveal ht-d2">
            <div className="ht-mvv-ico">
              <i className="fas fa-heart" />
            </div>
            <h4>Our Values</h4>
            <p>
              Our values are rooted in integrity, excellence, and customer commitment. 
              We conduct business with honesty and transparency, 
              deliver high-quality solutions, and continuously pursue innovation. 
              By putting our clients first, we build trusted partnerships that support long-term success.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
