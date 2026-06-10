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
import { Services } from './collections/Services'
import { PricingPlans } from './collections/PricingPlans'
import { Testimonials } from './collections/Testimonials'
import { SiteSettings } from './collections/SiteSettings'
import { AboutItems } from './collections/AboutItems'
import { FAQCollection } from './collections/FAQ'


const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Posts, Pages, Hero, Services, PricingPlans, Testimonials, SiteSettings, AboutItems, FAQCollection],
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
  plugins: [],
})
