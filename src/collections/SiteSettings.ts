import type { CollectionConfig } from 'payload'

export const SiteSettings: CollectionConfig = {
  slug: 'site-settings',
  admin: {
    useAsTitle: 'siteName',
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
      defaultValue: 'HOSTIKO',
    },
    {
      name: 'heroTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'heroDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'companyDescription',
      type: 'textarea',
      admin: {
        description: 'Description in footer about the company',
      },
    },
    {
      name: 'footerAddress',
      type: 'text',
    },
    {
      name: 'footerPhone',
      type: 'text',
    },
    {
      name: 'footerEmail',
      type: 'text',
    },
    {
      name: 'contactEmail',
      type: 'text',
    },
    {
      name: 'contactPhone',
      type: 'text',
    },
    {
      name: 'contactAddress',
      type: 'textarea',
    },
    {
      name: 'contactPhoneHours',
      type: 'text',
      defaultValue: 'Mon-Fri, 9AM-6PM EST',
    },
  ],
}
