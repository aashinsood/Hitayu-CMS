// src/components/Navbar.tsx
import Image from 'next/image'
import Link from 'next/link'
import { getSiteSettings } from '@/lib/payload-utils'

export default async function Navbar() {
  const settings = await getSiteSettings()
  const siteName = settings?.siteName || 'HOSTIKO'
  const navItems = settings?.navigation || []
  const rawLogoUrl = settings?.logo?.url
  const logoUrl =
    rawLogoUrl && !rawLogoUrl.startsWith('/api/media/file/') ? rawLogoUrl : '/hitayu-1.png'
  const headerButton = settings?.headerButton

  return (
    <nav className="navbar">
      <div className="container navbar-wrapper">
        <div className="navbar-start">
          <div className="logo-container">
            <Image src={logoUrl} alt={`${siteName} logo`} width={200} height={30} />
          </div>
        </div>

        <div className="navbar-menu">
          <ul className="nav-links">
            {navItems.map((item: any, index: number) => (
              <li key={index}>
                <Link
                  href={item.url}
                  className="nav-link"
                  target={item.openInNewTab ? '_blank' : undefined}
                  rel={item.openInNewTab ? 'noopener noreferrer' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {headerButton?.label && headerButton?.url && (
            <Link
              href={headerButton.url}
              className="header-action"
              target={headerButton.openInNewTab ? '_blank' : undefined}
              rel={headerButton.openInNewTab ? 'noopener noreferrer' : undefined}
            >
              {headerButton.label}
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
