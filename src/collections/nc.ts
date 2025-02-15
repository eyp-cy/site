import { CollectionConfig } from 'payload'

export const NC_Collection: CollectionConfig = {
  slug: 'nc',
  labels: {
    singular: 'NC',
    plural: 'NCs',
  },
  admin: {
    useAsTitle: 'year',
  },
  access: {
    create: () => true,
    update: () => true,
    read: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'year',
      type: 'number',
      required: true,
    },
    {
      name: 'members',
      type: 'array',
      fields: [
        {
          name: 'member',
          type: 'relationship',
          relationTo: 'nc_member',
          hasMany: true,
          required: true,
        },
      ],
    },
  ],
}
