import { CollectionConfig } from 'payload'

export const Patrons: CollectionConfig = {
  slug: 'patron',
  admin: {
    useAsTitle: 'fullName',
  },
  access: {
    create: () => true,
    update: () => true,
    read: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'qualifier',
      type: 'select',
      options: ['Mr', 'Mrs', 'Ms', 'Dr', 'Prof'],
      required: true,
    },
    {
      name: 'fullName',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'domain',
      type: 'radio',
      options: ['EU', 'CY'],
      required: true,
    },
  ],
}
