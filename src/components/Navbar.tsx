import Image from 'next/image'
import Link from 'next/link'
import { getSiteSettings } from '@/lib/payload-utils'
import MobileMenu from './MobileMenu'

export default async function Navbar() {
  const settings = await getSiteSettings()

  const siteName = settings?.siteName || 'HOSTIKO'
  const navItems = settings?.navigation || []

  const rawLogoUrl = settings?.logo?.url

  const logoUrl =
    rawLogoUrl && !rawLogoUrl.startsWith('/api/media/file/')
      ? rawLogoUrl
      : '/hitayu-1.png'

  const headerButton = settings?.headerButton

  return (
    <nav className="navbar">
      <div className="container navbar-wrapper">
        {/* Logo */}
        <div className="logo-container">
          <Link href="/">
            <Image
              src={logoUrl}
              alt={`${siteName} logo`}
              width={200}
              height={60}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
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

        {/* Mobile Navigation */}
        <MobileMenu
          navItems={navItems}
          headerButton={headerButton}
        />
      </div>
    </nav>
  )
}