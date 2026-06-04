// src/components/Navbar.tsx

import Link from "next/link"
import { getSiteSettings } from '@/lib/payload-utils'

export default async function Navbar() {
  const settings = await getSiteSettings()
  const siteName = settings?.siteName || 'HOSTIKO'

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
          <li><Link href="/" className="nav-link">Hosting</Link></li>
          <li><Link href="/" className="nav-link">Domains</Link></li>
          <li><Link href="/" className="nav-link">WHMCS</Link></li>
          <li><Link href="/" className="nav-link">Pages</Link></li>
          <li><Link href="/" className="nav-link">Contact</Link></li>
        </ul>

        <div className="nav-actions">
          <button className="search-btn" title="Search">
            <span className="search-icon">🔍</span>
          </button>
          <button className="cart-btn" title="Shopping Cart">
            <span className="cart-badge">0</span>
            <span>🛒</span>
          </button>
          <button className="signin-btn">
            Sign In
          </button>
          <button className="menu-btn" title="Menu">☰</button>
        </div>
      </div>
    </nav>
  )
}