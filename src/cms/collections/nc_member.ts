import { CollectionConfig } from 'payload'

export const NC_MemberCollection: CollectionConfig = {
  slug: 'nc_member',
  labels: {
    singular: 'NC Member',
    plural: 'NC Members',
  },
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
      name: 'fullName',
      type: 'text',
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
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
