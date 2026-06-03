// src/components/Navbar.tsx

import Link from "next/link"
import { getSiteSettings } from '@/lib/payload-utils'

export default async function Navbar() {
  const settings = await getSiteSettings()
  const siteName = settings?.siteName || 'HOSTIKO'

  return (
    <nav className="navbar">
      <div className="container navbar-wrapper">

        <div className="logo">
          {siteName}
        </div>
        <ul className="nav-links">
          <li><Link href="/">Hosting</Link></li>
          <li><Link href="/">Domain</Link></li>
          <li><Link href="/">WHMCS</Link></li>
          <li><Link href="/">Pages</Link></li>
          <li><Link href="/">Contact</Link></li>
        </ul>
        <div className="nav-actions">
          <button className="signin-btn">
            Sign In
          </button>

          <button>🛒</button>

          <button>🔍</button>

          <button>☰</button>
        </div>

      </div>
    </nav>
  )
}