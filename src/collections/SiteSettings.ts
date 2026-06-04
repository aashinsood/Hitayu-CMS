import type { CollectionConfig } from 'payload'

export const SiteSettings: CollectionConfig = {
  slug: 'site-settings',
  admin: {
    useAsTitle: 'siteName',
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Upload your site logo',
      },
    },
    {
      name: 'headerInfo',
      type: 'group',
      label: 'Header Info',
      fields: [
        { name: 'email', type: 'text', required: true, defaultValue: 'info@hostiko.com' },
        { name: 'phone', type: 'text', required: true, defaultValue: '+1 (234 567 89)' },
        {
          name: 'socialLinks',
          type: 'array',
          label: 'Social Links',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'url', type: 'text', required: true },
            { name: 'icon', type: 'text', required: true, admin: { description: 'Use emoji or icon class' } },
          ],
        },
      ],
    },
    {
      name: 'navigation',
      label: 'Navigation Menu',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
        {
          name: 'openInNewTab',
          type: 'checkbox',
          defaultValue: false,
        },
      ],
    },
    {
      name: 'headerButton',
      type: 'group',
      fields: [
        { name: 'label', type: 'text', defaultValue: 'Sign In' },
        { name: 'url', type: 'text', defaultValue: '/signin' },
        { name: 'openInNewTab', type: 'checkbox', defaultValue: false },
      ],
    },
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
