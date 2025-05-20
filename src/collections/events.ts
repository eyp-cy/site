import { CollectionConfig } from 'payload'

export const CoreEventTypes = {
  DAYS_OF_EYP: 'days-of-eyp',
  PRE_SELECTION_DAYS: 'pre-selection-days',
  NATIONAL_SESSION: 'national-session',
  YOUTH_SUMMIT: 'youth-summit',
} as const

export type CoreEventType = (typeof CoreEventTypes)[keyof typeof CoreEventTypes]

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
      name: 'coreEventType',
      label: 'Core Event Type',
      type: 'select',
      options: [
        { label: 'Days of EYP', value: CoreEventTypes.DAYS_OF_EYP },
        { label: 'Pre-Selection Days', value: CoreEventTypes.PRE_SELECTION_DAYS },
        { label: 'National Session', value: CoreEventTypes.NATIONAL_SESSION },
        { label: 'Youth Summit', value: CoreEventTypes.YOUTH_SUMMIT },
      ],
      required: false,
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
