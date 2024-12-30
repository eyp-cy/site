import { Event, Media } from 'payload-types'
import { z } from 'zod'

import { payload } from '@/cms/db'

export const EVENTS = {
  DAYS_OF_EYP: 'days-of-eyp',
  NATIONAL_SESSION: 'national-session',
  PRE_SELECTION_DAYS: 'pre-selection-days',
  YOUTH_SUMMIT: 'youth-summit',
} as const

export async function getEvents() {
  const mainEvents = await payload.find({
    collection: 'events',
    where: {
      slug: { in: Object.values(EVENTS) },
    },
    sort: 'slug',
  })

  const eventData = mainEvents.docs.map((event) => ({
    slug: event.slug!,
    title: event.title,
    logo: event.logo! as Media,
    description: event.shortDescription,
  }))

  return {
    [EVENTS.DAYS_OF_EYP]: eventData[0],
    [EVENTS.PRE_SELECTION_DAYS]: eventData[2],
    [EVENTS.NATIONAL_SESSION]: eventData[1],
    [EVENTS.YOUTH_SUMMIT]: eventData[3],
  }
}

export async function getEvent(eventSlug: string) {
  const content = await payload.find({
    collection: 'events',
    where: {
      slug: { equals: eventSlug },
    },
  })

  if (content.docs.length !== 1) {
    throw new Error('Missing core event from database!')
  }
  const event = content.docs[0]
  return {
    description: event.longDescription!,
    sessionElements: extractSessionElements(event),
    logo: event.logo!,
  }
}

export const sessionElementSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.object({ url: z.string() }),
})

export type BaseSessionElement = z.infer<typeof sessionElementSchema>

export function extractSessionElements(event: Event) {
  return z
    .array(z.object({ id: z.string(), sessionElement: z.array(sessionElementSchema).length(1) }))
    .parse(event.sessionElements)
    .map(({ id, sessionElement }) => ({ id, sessionElement: sessionElement[0] }))
}

export const CoreSessionElement = {
  TEAM_BUILDING: 'Team Building',
  COMMITTEE_WORK: 'Committee Work',
  GENERAL_ASSEMBLY: 'General Assembly',
} as const

export async function getSessionElements() {
  const sessionElements = await payload.find({
    collection: 'sessionElement',
    where: {
      title: {
        in: Object.values(CoreSessionElement),
      },
    },
    sort: 'title',
  })

  const data = sessionElements.docs.map((sessionElement) => ({
    title: sessionElement.title,
    description: sessionElement.description,
    image: { url: (sessionElement.image as Media).url! },
  }))

  return {
    [CoreSessionElement.TEAM_BUILDING]: data[2],
    [CoreSessionElement.COMMITTEE_WORK]: data[0],
    [CoreSessionElement.GENERAL_ASSEMBLY]: data[1],
  }
}
