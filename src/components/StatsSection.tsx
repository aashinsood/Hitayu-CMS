import { getSiteSettings } from '@/lib/payload-utils'
import { iconMap } from '@/lib/iconMap'
import { Users } from 'lucide-react'

const defaultStats = [
  { iconName: 'Users',      value: '500+',    label: 'Happy Clients'  },
  { iconName: 'Activity',   value: '99.99%',  label: 'Uptime SLA'     },
  { iconName: 'Server',     value: '50+',     label: 'AWS Servers'    },
  { iconName: 'Headphones', value: '24/7',    label: 'Expert Support' },
]

export default async function StatsSection() {
  const settings = await getSiteSettings()
  const section  = settings?.statsSection

  if (section?.isVisible === false) return null

  const stats = section?.stats && (section.stats as any[]).length > 0
    ? (section.stats as any[])
    : defaultStats

  return (
    <section className="bg-gradient-to-r from-[#080A47] to-[#0e1160] py-14 relative overflow-hidden">
      {/* decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#38b1ed]/5 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#38b1ed]/5 translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat: any, i: number) => {
            const Icon = iconMap[stat.iconName] || Users
            return (
              <div
                key={i}
                className="flex flex-col items-center text-center px-4 py-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-[#38b1ed]/10 hover:border-[#38b1ed]/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-[#38b1ed]/15 flex items-center justify-center mb-4 text-[#38b1ed]">
                  <Icon size={26} />
                </div>
                <div className="text-3xl md:text-4xl font-black text-white leading-none mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
