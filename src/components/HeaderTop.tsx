import { getSiteSettings } from '@/lib/payload-utils'

export default async function HeaderTop() {
  const settings = await getSiteSettings()
  const headerInfo = settings?.headerInfo

  return (
    <div className="top-header">
      <div className="container header-inner">

        {/* LEFT SIDE: Email + Phone */}
        <div className="header-left">
          {headerInfo?.email && (
            <div className="header-group">
              <span className="header-icon">✉</span>
              <span>{headerInfo.email}</span>
            </div>
          )}
          {headerInfo?.phone && (
            <div className="header-group">
              <span className="header-icon">📞</span>
              <span>{headerInfo.phone}</span>
            </div>
          )}
        </div>

        {/* RIGHT SIDE: Social Icons */}
        <div className="header-right">
          {headerInfo?.socialLinks?.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              title={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

      </div>
    </div>
  )
}