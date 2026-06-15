import { postgresAdapter } from '@payloadcms/db-postgres'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
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
import { PricingPlans } from './collections/PricingPlans'
import { Testimonials } from './collections/Testimonials'
import { SiteSettings } from './collections/SiteSettings'
import { AboutItems } from './collections/AboutItems'
import { FAQCollection } from './collections/FAQ'
import { CaseStudies } from './collections/CaseStudies'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Posts, Pages, Hero, HeroSlides, Services, PricingPlans, Testimonials, SiteSettings, AboutItems, FAQCollection],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
      connectionTimeoutMillis: 5000,
      idleTimeoutMillis: 10000,
      max: 5,
      allowExitOnIdle: true,
    },
  }),
  sharp,
  plugins: [
    // Vercel Blob: stores uploaded media files in Vercel's cloud storage
    // Only active when BLOB_READ_WRITE_TOKEN is set (i.e. on Vercel production)
    ...(process.env.BLOB_READ_WRITE_TOKEN
      ? [
          vercelBlobStorage({
            enabled: true,
            collections: {
              media: true,
            },
            token: process.env.BLOB_READ_WRITE_TOKEN,
          }),
        ]
      : []),
  ],
})
