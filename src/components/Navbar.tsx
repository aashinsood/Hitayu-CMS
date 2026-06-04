// src/components/Navbar.tsx

import Link from "next/link"
import { getSiteSettings } from '@/lib/payload-utils'

export default async function Navbar() {
  const settings = await getSiteSettings()
  const siteName = settings?.siteName || 'HOSTIKO'
  const navItems = settings?.navigation || []

  return (
    <nav className="navbar">
      <div className="container navbar-wrapper">
        <div className="navbar-start">
          <div className="logo-container">
            <span className="logo-icon">◆</span>
            <div className="logo">
              {siteName}
            </div>
          </div>
        </div>

        <ul className="nav-links">
          {settings?.navigation?.length ? (
            settings.navigation.map((item: any, index: number) => (
              <li key={index}>
                <Link href={item.url} className="nav-link">
                  {item.label}
                </Link>
              </li>
            ))
          ) : null}
        </ul>
      </div>
    </nav>
  )
}