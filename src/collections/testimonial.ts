import { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'authorFullName',
  },
  access: {
    create: () => true,
    update: () => true,
    read: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'quote',
      label: 'Quote',
      type: 'text',
      required: true,
    },
    {
      name: 'authorFullName',
      label: 'Author Full Name',
      type: 'text',
      required: true,
    },
    {
      name: 'authorDescription',
      label: 'Author Description',
      type: 'text',
      required: true,
    },
    {
      name: 'authorImage',
      label: 'Author Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
