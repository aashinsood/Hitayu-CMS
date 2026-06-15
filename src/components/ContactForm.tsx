'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const errs: Record<string, boolean> = {}
    ;['first', 'last', 'email'].forEach((k) => {
      if (!String(data.get(k) || '').trim()) errs[k] = true
    })
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="ht-cform">
        <div className="ht-fsuc" style={{ display: 'block' }}>
          <div className="ht-oi">✅</div>
          <h3>Message Sent Successfully!</h3>
          <p>Our team will reach out within 24 business hours to schedule your consultation.</p>
        </div>
      </div>
    )
  }

  return (
    <form className="ht-cform" id="ht-cform" onSubmit={handleSubmit} noValidate>
      <div className="ht-ftitle">Request a Free Consultation</div>
      <div className="ht-ff">
        <div className="ht-frow">
          <div className="ht-fg">
            <label>First Name *</label>
            <input
              type="text"
              name="first"
              placeholder="First name"
              style={
                errors.first
                  ? { borderColor: '#EF4444', boxShadow: '0 0 0 3px rgba(239,68,68,.12)' }
                  : {}
              }
              onChange={() => setErrors((e) => ({ ...e, first: false }))}
            />
          </div>
          <div className="ht-fg">
            <label>Last Name *</label>
            <input
              type="text"
              name="last"
              placeholder="Last name"
              style={
                errors.last
                  ? { borderColor: '#EF4444', boxShadow: '0 0 0 3px rgba(239,68,68,.12)' }
                  : {}
              }
              onChange={() => setErrors((e) => ({ ...e, last: false }))}
            />
          </div>
        </div>
        <div className="ht-fg">
          <label>Work Email *</label>
          <input
            type="email"
            name="email"
            placeholder="you@company.com"
            style={
              errors.email
                ? { borderColor: '#EF4444', boxShadow: '0 0 0 3px rgba(239,68,68,.12)' }
                : {}
            }
            onChange={() => setErrors((e) => ({ ...e, email: false }))}
          />
        </div>
        <div className="ht-frow">
          <div className="ht-fg">
            <label>Phone</label>
            <input type="tel" name="phone" placeholder="+91 98765 43210" />
          </div>
          <div className="ht-fg">
            <label>Company</label>
            <input type="text" name="company" placeholder="Your company name" />
          </div>
        </div>
        <div className="ht-fg">
          <label>Service Interested In</label>
          <select name="service">
            <option value="">— Select a Service —</option>
            <option>Managed Services</option>
            <option>Infrastructure Modernisation</option>
            <option>Data, Analytics & AI</option>
            <option>Managed Security Services</option>
            <option>Application Modernisation</option>
            <option>Cloud Cost Optimisation</option>
            <option>SMB Solutions</option>
            <option>Multiple / Not Sure</option>
          </select>
        </div>
        <div className="ht-fg">
          <label>Tell Us About Your Project</label>
          <textarea name="message" placeholder="Describe your challenges, goals, and timeline..." />
        </div>
        <button type="submit" className="ht-fsub" disabled={loading}>
          {loading ? 'Sending…' : 'Send Message'}&nbsp;
          <i className={`fas ${loading ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`} />
        </button>
      </div>
    </form>
  )
}
