// src/components/Navbar.tsx
import Image from 'next/image'
import Link from 'next/link'
import { getSiteSettings } from '@/lib/payload-utils'

export default async function Navbar() {
  const settings = await getSiteSettings()
  const siteName = settings?.siteName || 'HOSTIKO'
  const navItems = settings?.navigation || []
  const logoUrl = settings?.logo?.url || null

  return (
    <nav className="navbar">
      <div className="container navbar-wrapper">
        <div className="navbar-start">
          <div className="logo-container">
            <Image src="/hitayu-1.png" alt="Logo" width={249} height={50} />

            {/* {settings?.logo?.url ? (
              <Image
                src={settings.logo.url}
                alt="Logo"
                width={249}
                height={50}
              />
            ) : (
              <>
                <div className="logo">{siteName}</div>
              </>
            )} */}
          </div>
        </div>

        <ul className="nav-links">
          {settings?.navigation?.length
            ? settings.navigation.map((item: any, index: number) => (
                <li key={index}>
                  <Link href={item.url} className="nav-link">
                    {item.label}
                  </Link>
                </li>
              ))
            : null}
        </ul>
      </div>
    </nav>
  )
}
