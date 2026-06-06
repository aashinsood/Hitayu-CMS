import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { getSiteSettings } from '@/lib/payload-utils'

export default async function ContactSection() {
  const settings = await getSiteSettings()
  const section  = settings?.contactSection

  const tag         = section?.tag         || 'CONTACT US'
  const title       = section?.title       || "Let's Talk About\nYour Hosting Needs"
  const description = section?.description || 'Our cloud hosting experts are ready to help you choose the perfect AWS hosting solution.'
  const formTitle   = section?.formTitle   || 'Request A Callback'

  const email   = settings?.contactEmail  || settings?.headerInfo?.email || 'support@hitayu.com'
  const phone   = settings?.contactPhone  || settings?.headerInfo?.phone || '+91 98765 43210'
  const address = settings?.contactAddress || 'India'

  const contactItems = [
    { Icon: Mail,   label: 'Email',    value: email   },
    { Icon: Phone,  label: 'Phone',    value: phone   },
    { Icon: MapPin, label: 'Location', value: address },
    { Icon: Clock,  label: 'Support',  value: '24/7 Technical Support' },
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <span className="section-tag">{tag}</span>
            <h2 className="text-4xl font-extrabold text-[#0f172a] mt-3 mb-5 leading-tight" style={{ whiteSpace: 'pre-line' }}>
              {title}
            </h2>
            <p className="text-slate-500 leading-relaxed mb-10">{description}</p>

            <div className="space-y-5">
              {contactItems.map(({ Icon, label, value }, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#38b1ed]/10 flex items-center justify-center text-[#38b1ed] flex-shrink-0">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-0.5">{label}</p>
                    <p className="font-semibold text-[#0f172a] text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – form card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8">
            <h3 className="text-2xl font-bold text-[#0f172a] mb-7">{formTitle}</h3>

            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Your Name</label>
                  <input type="text" placeholder="Sandeep Kumar"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-[#38b1ed] focus:ring-2 focus:ring-[#38b1ed]/10 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Email Address</label>
                  <input type="email" placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-[#38b1ed] focus:ring-2 focus:ring-[#38b1ed]/10 transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Phone Number</label>
                <input type="tel" placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-[#38b1ed] focus:ring-2 focus:ring-[#38b1ed]/10 transition-all" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Message</label>
                <textarea rows={4} placeholder="Tell us about your hosting requirements..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-[#38b1ed] focus:ring-2 focus:ring-[#38b1ed]/10 transition-all resize-none" />
              </div>

              <button type="submit"
                className="w-full bg-[#080A47] hover:bg-[#38b1ed] text-white font-bold py-4 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#080A47]/20">
                Send Message →
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
