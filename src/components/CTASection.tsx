import { getSiteSettings } from '@/lib/payload-utils'

export default async function CTASection() {
  const settings = await getSiteSettings()
  const section  = settings?.ctaSection

  const badge        = section?.badge             || 'AWS Powered Hosting'
  const title        = section?.title             || 'Ready To Launch\nOn AWS Infrastructure?'
  const description  = section?.description       || 'Get secure, scalable and high-performance hosting backed by AWS cloud technology and expert support.'
  const primaryText  = section?.primaryButtonText  || 'Get Started'
  const primaryUrl   = section?.primaryButtonUrl   || '#'
  const secondaryText = section?.secondaryButtonText || 'Contact Sales'
  const secondaryUrl  = section?.secondaryButtonUrl  || '#contact'

  return (
    <section className="py-16 bg-[#f8fafc]">
      <div className="container">
        <div className="relative bg-gradient-to-br from-[#080A47] via-[#0d1060] to-[#1a1f8f] rounded-3xl overflow-hidden px-8 py-16 text-center shadow-2xl">

          {/* decorative blobs */}
          <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#38b1ed]/10 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#38b1ed]/10 blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />
          {/* grid pattern overlay */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")" }} />

          <div className="relative z-10">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#38b1ed] bg-[#38b1ed]/10 border border-[#38b1ed]/20 px-4 py-1.5 rounded-full mb-6">
              {badge}
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight" style={{ whiteSpace: 'pre-line' }}>
              {title}
            </h2>

            <p className="text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
              {description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={primaryUrl}
                className="bg-[#38b1ed] hover:bg-[#2ea0d8] text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#38b1ed]/30"
              >
                {primaryText}
              </a>
              <a
                href={secondaryUrl}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                {secondaryText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
