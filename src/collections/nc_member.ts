import { CollectionConfig } from 'payload'

export const NC_Members: CollectionConfig = {
  slug: 'nc_member',
  labels: {
    singular: 'NC Member',
    plural: 'NC Members',
  },
  access: {
    create: () => true,
    update: () => true,
    read: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'member',
      type: 'relationship',
      relationTo: 'member',
      required: true,
    },
    {
      name: 'position',
      type: 'text',
      required: true,
    },
    {
      name: 'quote',
      type: 'textarea',
      required: false,
    },
  ],
}
