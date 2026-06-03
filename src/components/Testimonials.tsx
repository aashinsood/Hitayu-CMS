// src/components/Testimonials.tsx

export default function Testimonials() {
  const testimonials = [
    { name: 'John Smith', role: 'CEO at TechStartup', text: 'HOSTIKO has been amazing! Their support team helped us migrate from our old host in just 2 hours. Highly recommended!' },
    { name: 'Sarah Johnson', role: 'Freelance Designer', text: 'The uptime is incredible and the control panel is so easy to use. Best hosting provider I\'ve worked with.' },
    { name: 'Mike Chen', role: 'E-commerce Owner', text: 'After switching to HOSTIKO, my website speed improved by 40%. The performance has been excellent.' }
  ]

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
