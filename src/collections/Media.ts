import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    // Storage is handled by the vercelBlobStorage plugin (see payload.config.ts) —
    // local disk storage doesn't work on Vercel's read-only filesystem.
    disableLocalStorage: true,
  },
}
