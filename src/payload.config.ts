import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import dotenv from 'dotenv'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'
import { Pages } from './collections/Pages'
import { Hero } from './collections/hero'
import { Services } from './collections/Services'
import { PricingPlans } from './collections/PricingPlans'
import { Testimonials } from './collections/Testimonials'
import { SiteSettings } from './collections/SiteSettings'
import { AboutItems } from './collections/AboutItems'

dotenv.config()

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const databaseUrl = process.env.DATABASE_URL

if (!databaseUrl) {
  throw new Error(
    'DATABASE_URL is not defined in the environment. Add it to .env or your deployment environment.',
  )
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Posts,
    Pages,
    Hero,
    Services,
    PricingPlans,
    Testimonials,
    SiteSettings,
    AboutItems,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: databaseUrl,
      ssl: { rejectUnauthorized: false },
    },
  }),
  sharp,
  plugins: [],
})
