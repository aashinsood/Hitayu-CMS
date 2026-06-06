import type { CollectionConfig } from 'payload'
import { iconOptions } from '../lib/iconMap'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'icon',
      type: 'text',
      admin: {
        description: 'Emoji icon (e.g., 🌐, 🖥️, 🗄️) — used if Lucide Icon is not set',
      },
    },
    {
      name: 'iconName',
      type: 'select',
      options: iconOptions,
      admin: {
        description: 'Lucide icon — overrides emoji icon above',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'imageUrl',
      type: 'text',
      admin: {
        description: 'External image URL for the service card (optional)',
      },
    },
    {
      name: 'serviceImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Upload an image for the service card (overrides URL)',
      },
    },
    {
      name: 'learnMoreUrl',
      type: 'text',
      defaultValue: '#',
      admin: { description: 'Link for the Learn More button' },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Order in which services appear',
      },
    },
  ],
}
