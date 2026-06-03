// src/components/Testimonials.tsx

import { getTestimonials } from '@/lib/payload-utils'

export default async function Testimonials() {
  const testimonials = await getTestimonials()

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial: any) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="stars">{'★'.repeat(testimonial.rating || 5)}</div>
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
