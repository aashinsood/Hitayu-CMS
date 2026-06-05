// src/app/(frontend)/layout.tsx
import React from 'react'
import HeaderTop from '@/components/HeaderTop'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <HeaderTop />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
