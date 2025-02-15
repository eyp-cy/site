import { CollectionConfig } from 'payload'

export const UserCollection: CollectionConfig = {
  slug: 'users',
  auth: true,
  access: {
    delete: () => false,
    update: () => false,
  },
  fields: [],
}
