import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'
import { Pages } from './collections/Pages'
import { Hero } from './collections/hero'
import { HeroSlides } from './collections/HeroSlides'
import { Services } from './collections/Services'
import { Solutions } from './collections/Solutions'
import { PricingPlans } from './collections/PricingPlans'
import { Testimonials } from './collections/Testimonials'
import { SiteSettings } from './collections/SiteSettings'
import { AboutItems } from './collections/AboutItems'
import { FAQCollection } from './collections/FAQ'
import { CaseStudies } from './collections/CaseStudies'
import { ContactSubmissions } from './collections/ContactSubmissions'
import { AboutPageGlobal } from './globals/AboutPage'
import { CareersPageGlobal } from './globals/CareersPage'
import { PartnersPageGlobal } from './globals/PartnersPage'
import { ContactPageGlobal } from './globals/ContactPage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Posts, Pages, Hero, HeroSlides, Services, Solutions, PricingPlans, Testimonials, SiteSettings, AboutItems, FAQCollection, ContactSubmissions],
  globals: [AboutPageGlobal, CareersPageGlobal, PartnersPageGlobal, ContactPageGlobal],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
      // Neon (cloud) needs SSL with rejectUnauthorized:false + longer timeout for cold starts
      ssl: process.env.DATABASE_URL?.includes('neon.tech') ||
           process.env.DATABASE_URL?.includes('sslmode=require')
        ? { rejectUnauthorized: false }
        : false,
      connectionTimeoutMillis: 30000,
      idleTimeoutMillis: 30000,
      max: 5,
      allowExitOnIdle: true,
    },
  }),
  sharp,
  // NOTE: @payloadcms/storage-vercel-blob plugin is intentionally NOT used here.
  // It has caused the entire /admin panel to fail (blank page / 500, no usable
  // error in server or browser logs) every time it's been added to this project.
  // Image uploads instead go through a custom /upload page + /api/upload route
  // that calls @vercel/blob directly — see src/app/(frontend)/upload/page.tsx.
  plugins: [],
})
