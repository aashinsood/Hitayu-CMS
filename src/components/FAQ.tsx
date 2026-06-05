'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const faqs = [
    {
      question: 'What is AWS Hosting?',
      answer:
        'AWS Hosting uses Amazon Web Services infrastructure to provide high-performance, scalable, and secure hosting solutions.',
    },
    {
      question: 'Do you provide free SSL certificates?',
      answer:
        'Yes, all hosting plans include free SSL certificates to secure your website and improve trust.',
    },
    {
      question: 'Can I migrate my existing website?',
      answer:
        'Yes, we provide website migration assistance to help move your website with minimal downtime.',
    },
    {
      question: 'How often are backups taken?',
      answer:
        'Daily automated backups are included with all plans to ensure your data remains protected.',
    },
    {
      question: 'Can I upgrade my hosting plan later?',
      answer:
        'Absolutely. You can upgrade at any time without affecting your website availability.',
    },
  ]

  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-header">
          <span>FAQ</span>

          <h2>
            Frequently Asked
            <br />
            Questions
          </h2>

          <p>
            Everything you need to know about our AWS hosting services.
          </p>
        </div>

        <div className="faq-wrapper">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <button
                className="faq-question"
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
              >
                <span>{faq.question}</span>

                <ChevronDown
                  size={20}
                  className={open === index ? 'rotate' : ''}
                />
              </button>

              {open === index && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}