import { getSiteSettings } from '@/lib/payload-utils'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react'

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
          {headerInfo?.socialLinks?.map((social: { url: string | undefined; label: string | undefined; icon: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined }, index: Key | null | undefined) => (
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