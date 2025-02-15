import { Event, Media } from '@/payload-types'
import { z } from 'zod'

import { CORE_EVENTS } from '@/content/core-events'
import { payload } from '@/lib/db'

export async function getCoreEvents() {
  const mainEvents = await payload.find({
    collection: 'events',
    where: { title: { in: Object.values(CORE_EVENTS).map(({ title }) => title) } },
    sort: 'title',
  })

  const eventData = mainEvents.docs.map((event) => ({
    title: event.title,
    logo: event.logo! as Media,
    description: event.shortDescription,
  }))

  return {
    [CORE_EVENTS.DAYS_OF_EYP.id]: eventData[0],
    [CORE_EVENTS.PRE_SELECTION_DAYS.id]: eventData[2],
    [CORE_EVENTS.NATIONAL_SESSION.id]: eventData[1],
    [CORE_EVENTS.YOUTH_SUMMIT.id]: eventData[3],
  }
}

export async function getEvents() {
  const mainEvents = await payload.find({
    collection: 'events',
    where: { title: { in: Object.values(CORE_EVENTS).map(({ title }) => title) } },
    sort: 'title',
  })

  return mainEvents.docs.map((event) => ({
    title: event.title,
    logo: event.logo! as Media,
    description: event.shortDescription,
  }))
}

export async function getEventBySlug(eventSlug: string) {
  const eventTitle = decodeURIComponent(eventSlug)

  const content = await payload.find({
    collection: 'events',
    where: { title: { equals: eventTitle } },
  })

  if (content.docs.length !== 1) {
    throw new Error('Missing core event from database!')
  }
  const event = content.docs[0]
  return {
    title: eventTitle,
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
