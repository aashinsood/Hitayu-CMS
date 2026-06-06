'use client'

import { useState } from 'react'
import Link from 'next/link'

interface MobileMenuProps {
  navItems: any[]
  headerButton?: {
    label?: string
    url?: string
    openInNewTab?: boolean
  }
}

export default function MobileMenu({
  navItems,
  headerButton,
}: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      <div className={`mobile-drawer ${isOpen ? 'active' : ''}`}>
        <button
          className="drawer-close"
          onClick={() => setIsOpen(false)}
          aria-label="Close Menu"
        >
          ✕
        </button>

        <ul className="mobile-links">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.url}
                onClick={() => setIsOpen(false)}
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
            className="mobile-btn"
            onClick={() => setIsOpen(false)}
            target={headerButton.openInNewTab ? '_blank' : undefined}
            rel={headerButton.openInNewTab ? 'noopener noreferrer' : undefined}
          >
            {headerButton.label}
          </Link>
        )}
      </div>
    </>
  )
}