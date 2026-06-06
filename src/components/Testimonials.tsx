import { getTestimonials, getSiteSettings } from '@/lib/payload-utils'

const avatarColors = [
  'bg-blue-500', 'bg-violet-500', 'bg-emerald-500',
  'bg-rose-500', 'bg-amber-500', 'bg-cyan-500',
]

export default async function Testimonials() {
  const [testimonials, settings] = await Promise.all([getTestimonials(), getSiteSettings()])
  const section = settings?.testimonialsSection

  const tag         = section?.tag         || 'TESTIMONIALS'
  const title       = section?.title       || 'What Our Customers\nAre Saying'
  const description = section?.description || 'Trusted by hundreds of businesses across India and beyond.'

  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-tag">{tag}</span>
          <h2 className="section-title mt-3" style={{ whiteSpace: 'pre-line' }}>{title}</h2>
          <p className="section-desc">{description}</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t: any, i: number) => {
            const initials    = t.name?.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase() || 'U'
            const avatarColor = avatarColors[i % avatarColors.length]
            const stars       = t.rating || 5

            return (
              <div
                key={t.id}
                className="group bg-white border border-slate-100 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#38b1ed]/20 transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <span key={si} className={`text-lg ${si < stars ? 'text-amber-400' : 'text-slate-200'}`}>★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className={`w-10 h-10 rounded-full ${avatarColor} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                    {initials}
                  </div>
                  <div>
                    <p className="font-bold text-[#0f172a] text-sm">{t.name}</p>
                    {t.role && <p className="text-xs text-slate-400">{t.role}</p>}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
