import { getSiteSettings, getServices } from '@/lib/payload-utils'
import { iconMap } from '@/lib/iconMap'
import { Cloud, ArrowRight } from 'lucide-react'

/* Default image set – beautiful Unsplash photos */
const defaultImages = [
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&w=600&h=340&fit=crop',
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&w=600&h=340&fit=crop',
  'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&w=600&h=340&fit=crop',
  'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&w=600&h=340&fit=crop',
  'https://images.unsplash.com/photo-1573495627361-d9b87960b12d?auto=format&w=600&h=340&fit=crop',
  'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&w=600&h=340&fit=crop',
]

const gradients = [
  'from-blue-600 to-cyan-500',
  'from-violet-600 to-purple-500',
  'from-emerald-600 to-teal-500',
  'from-rose-600 to-pink-500',
]

const defaultServices = [
  {
    id: 1,
    iconName: 'Cloud',
    title: 'AWS Cloud Hosting',
    description:
      'Scalable cloud hosting powered by AWS with 99.99% uptime guarantee and global CDN.',
    learnMoreUrl: '#',
  },
  {
    id: 2,
    iconName: 'Server',
    title: 'Managed VPS Servers',
    description:
      'Fully managed virtual servers with root access, optimised for performance and security.',
    learnMoreUrl: '#',
  },
  {
    id: 3,
    iconName: 'Database',
    title: 'Database Hosting',
    description:
      'High-performance database solutions with automatic backups, failover and monitoring.',
    learnMoreUrl: '#',
  },
  {
    id: 4,
    iconName: 'ShieldCheck',
    title: 'Managed Security',
    description: 'Advanced DDoS protection, WAF, malware scanning and proactive threat monitoring.',
    learnMoreUrl: '#',
  },
]

export default async function ServicesSection() {
  const [settings, services] = await Promise.all([getSiteSettings(), getServices()])
  const section = settings?.servicesSection

  const tag = section?.tag || 'OUR SERVICES'
  const title = section?.title || 'Hosting Solutions\nBuilt For Growth'
  const description =
    section?.description ||
    'Powerful AWS-powered hosting services designed to keep your business online and growing.'

  const displayServices = services.length >= 4 ? services : defaultServices

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-tag">{tag}</span>
          <h2 className="section-title mt-3" style={{ whiteSpace: 'pre-line' }}>
            {title}
          </h2>
          <p className="section-desc">{description}</p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {displayServices.map((service: any, i: number) => {
            const Icon = iconMap[service.iconName] || Cloud
            const imgSrc =
              (service.serviceImage as any)?.url ||
              service.imageUrl ||
              defaultImages[i % defaultImages.length]
            const gradient = gradients[i % gradients.length]
            const learnUrl = service.learnMoreUrl || '#'

            return (
              <div
                key={service.id || i}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image banner */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={imgSrc}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-60`} />

                  {/* Icon chip */}
                  <div className="absolute bottom-4 left-5 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                    <Icon size={24} className="text-[#080A47]" strokeWidth={1.75} />
                  </div>

                  {/* Label */}
                  <span className="absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase text-white bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full">
                    Hosting
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0f172a] mb-2">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <a
                    href={learnUrl}
                    className="inline-flex items-center gap-2 text-[#38b1ed] font-semibold text-sm hover:gap-3 transition-all duration-200 group/link"
                  >
                    Learn More
                    <ArrowRight
                      size={16}
                      className="group-hover/link:translate-x-1 transition-transform duration-200"
                    />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
