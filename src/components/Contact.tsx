import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from 'lucide-react'

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="container">

        <div className="contact-wrapper">

          {/* Left Side */}
          <div className="contact-info">

            <span className="section-tag">
              CONTACT US
            </span>

            <h2>
              Let's Talk About
              <br />
              Your Hosting Needs
            </h2>

            <p>
              Our cloud hosting experts are ready to help
              you choose the perfect AWS hosting solution.
            </p>

            <div className="contact-item">
              <Mail size={22} />
              <div>
                <h4>Email</h4>
                <p>support@hitayu.com</p>
              </div>
            </div>

            <div className="contact-item">
              <Phone size={22} />
              <div>
                <h4>Phone</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="contact-item">
              <MapPin size={22} />
              <div>
                <h4>Location</h4>
                <p>India</p>
              </div>
            </div>

            {/* <div className="contact-item">
              <Clock size={22} />
              <div>
                <h4>Support Hours</h4>
                <p>24/7 Technical Support</p>
              </div>
            </div> */}

          </div>

          {/* Right Side */}
          <div className="contact-form-card">

            <h3>Request A Callback</h3>

            <form>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email Address"
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  placeholder="Phone Number"
                />
              </div>

              <div className="form-group">
                <textarea
                  rows={5}
                  placeholder="Tell us about your hosting requirements..."
                />
              </div>

              <button type="submit">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  )
}