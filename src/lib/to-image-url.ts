import { Media } from 'payload-types'

export const toImageUrl = (image: Media | number) => (image as Media).url ?? ''
