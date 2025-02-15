import { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    create: () => true,
    update: () => true,
    read: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'longDescription',
      type: 'textarea',
      required: false,
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'startDate',
      type: 'date',
      required: true,
    },
    {
      name: 'endDate',
      type: 'date',
      required: false,
    },
    {
      name: 'url',
      type: 'text',
      required: false,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'cardImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'actionText',
      type: 'text',
      required: false,
    },
    {
      name: 'actionUrl',
      type: 'text',
      required: false,
    },
    {
      name: 'active',
      type: 'checkbox',
      required: false,
    },
    {
      name: 'sessionElements',
      type: 'array',
      fields: [
        {
          name: 'sessionElement',
          type: 'relationship',
          relationTo: 'sessionElement',
          hasMany: true,
          required: false,
        },
      ],
    },
  ],
}
