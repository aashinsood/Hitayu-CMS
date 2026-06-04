// src/components/Navbar.tsx
import Image from 'next/image'
import Link from 'next/link'
import { getSiteSettings } from '@/lib/payload-utils'

// adjust the path if needed
import logo from '../../media/hitayu-1.png'

export default async function Navbar() {
  const settings = await getSiteSettings()
  const siteName = settings?.siteName || 'HOSTIKO'

  return (
    <nav className="navbar">
      <div className="container navbar-wrapper">
        <div className="navbar-start">
          <div className="logo-container">
            <Image
              src={logo}
              alt="Logo"
              width={249}
              height={50}
              priority
            />
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