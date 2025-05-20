import { Event, Media } from '@/payload-types'
import { z } from 'zod'

import { CORE_EVENTS } from '@/content/core-events'
import { payload } from '@/lib/db'
import { CoreEventType, CoreEventTypes } from '@/collections/events'

interface CoreEventData {
  title: string
  logo: Media
  description: string
}

type CoreEventsMap = Partial<Record<CoreEventType, CoreEventData>>

export const CORE_EVENTS_CONFIG = {
  DAYS_OF_EYP: { id: 'days-of-eyp-output-key', title: 'Days of EYP' },
  PRE_SELECTION_DAYS: { id: 'pre-selection-days-output-key', title: 'Pre-Selection Days' },
  NATIONAL_SESSION: { id: 'national-session-output-key', title: 'National Session' },
  YOUTH_SUMMIT: { id: 'youth-summit-output-key', title: 'Youth Summit' },
} as const

type FinalCoreEventsOutput = Record<string, CoreEventData | undefined>

export async function getCoreEvents(): Promise<FinalCoreEventsOutput> {
  const allActiveCoreEventsQuery = await payload.find({
    collection: 'events',
    where: {
      and: [{ coreEventType: { in: Object.values(CoreEventTypes) } }, { active: { equals: true } }],
    },
    sort: '-createdAt',
    depth: 1,
  })

  const SOUGHT_EVENT_TYPE_KEYS = Object.keys(CoreEventTypes) as Array<keyof typeof CoreEventTypes>

  const eventsByType: Record<string, Event[]> = {}
  for (const event of allActiveCoreEventsQuery.docs) {
    if (event.coreEventType) {
      const type = event.coreEventType as CoreEventType
      if (!eventsByType[type]) {
        eventsByType[type] = []
      }
      eventsByType[type].push(event)
    }
  }

  const intermediateResult: Partial<Record<CoreEventType, CoreEventData>> = {}
  const missingOrInvalidCriticalTypes: string[] = []

  // Iterate using the keys from CoreEventTypes to match how we stored in CMS
  for (const typeKey of SOUGHT_EVENT_TYPE_KEYS) {
    // e.g., typeKey = 'DAYS_OF_EYP'
    const coreEventTypeValue = CoreEventTypes[typeKey] // e.g., 'days-of-eyp'
    const candidateEvents = eventsByType[coreEventTypeValue]
    let chosenEvent: Event | null = null

    if (!candidateEvents || candidateEvents.length === 0) {
      console.warn(
        `HANDLER_INFO: No active event found for core event type key: ${typeKey} (value: ${coreEventTypeValue}).`,
      )
      // Check if this type (identified by its key in CORE_EVENTS_CONFIG) is critical
      if (CORE_EVENTS_CONFIG[typeKey]) {
        // Check if this key exists in your critical config
        missingOrInvalidCriticalTypes.push(CORE_EVENTS_CONFIG[typeKey].title || coreEventTypeValue)
      }
      continue
    }

    chosenEvent = candidateEvents[0]

    if (candidateEvents.length > 1) {
      console.warn(
        `HANDLER_INFO: Multiple active events found for core event type: ${coreEventTypeValue}. Titles: ${candidateEvents.map((e) => e.title).join(', ')}. Using event with title "${chosenEvent.title}" based on sort order.`,
      )
    }

    if (
      typeof chosenEvent.shortDescription !== 'string' ||
      chosenEvent.shortDescription.trim() === ''
    ) {
      console.error(
        `CRITICAL_DATA_ISSUE: Core event "${chosenEvent.title}" (type: ${coreEventTypeValue}) has an invalid short description.`,
      )
      if (CORE_EVENTS_CONFIG[typeKey]) {
        // Check if this key exists in your critical config
        missingOrInvalidCriticalTypes.push(CORE_EVENTS_CONFIG[typeKey].title || coreEventTypeValue)
      }
      continue
    }

    let logoData: Media | null = null
    if (chosenEvent.logo && typeof chosenEvent.logo === 'object' && 'url' in chosenEvent.logo) {
      logoData = chosenEvent.logo as Media
    } else {
      throw new Error(
        `HANDLER_INFO: Core event "${chosenEvent.title}" (type: ${coreEventTypeValue}) is missing a valid logo object.`,
      )
    }

    intermediateResult[coreEventTypeValue] = {
      title: chosenEvent.title,
      logo: logoData,
      description: chosenEvent.shortDescription,
    }
  }

  // Check if any critical core event types (as defined by presence in CORE_EVENTS_CONFIG) are missing
  const criticalTypesFromConfig = Object.keys(CORE_EVENTS_CONFIG) as Array<
    keyof typeof CORE_EVENTS_CONFIG
  >
  const actuallyMissingTypesForError = criticalTypesFromConfig
    .filter((configKey) => {
      const correspondingEventTypeValue = CoreEventTypes[configKey] // Assumes keys match
      return !intermediateResult[correspondingEventTypeValue]
    })
    .map((configKey) => CORE_EVENTS_CONFIG[configKey].title || String(configKey))

  if (actuallyMissingTypesForError.length > 0) {
    console.warn(
      `Critical core event(s) are missing, not active, or have invalid data: ${actuallyMissingTypesForError.join(', ')}. Please check CMS data.`,
    )
  }

  // Final Transformation Step: Map to the keys defined in CORE_EVENTS_CONFIG.XYZ.id
  const finalTransformedResult: FinalCoreEventsOutput = {}

  ;(Object.keys(CORE_EVENTS_CONFIG) as Array<keyof typeof CORE_EVENTS_CONFIG>).forEach(
    (configKey) => {
      // configKey is e.g., 'DAYS_OF_EYP', 'PRE_SELECTION_DAYS'

      // Get the CMS storage value (e.g., 'days-of-eyp') using the mapping from CoreEventTypes
      const coreEventTypeValue = CoreEventTypes[configKey] // This relies on matching keys

      if (coreEventTypeValue) {
        const eventData = intermediateResult[coreEventTypeValue]
        const outputKey = CORE_EVENTS_CONFIG[configKey].id // The desired output key (e.g., 'days-of-eyp-output-key')

        // eventData could be undefined if it wasn't critical and was missing,
        // but the error check above should handle critical misses.
        // If an event is not critical and missing, it will be undefined here.
        finalTransformedResult[outputKey] = eventData
      } else {
        // This would indicate a misalignment between CORE_EVENTS_CONFIG and CoreEventTypes
        console.error(
          `ALIGNMENT_ERROR: No CoreEventType value defined for CORE_EVENTS_CONFIG key "${String(configKey)}". Cannot map to final output.`,
        )
        // You might want to decide how to handle this, e.g., assign undefined to the outputKey
        const outputKey = CORE_EVENTS_CONFIG[configKey].id
        finalTransformedResult[outputKey] = undefined
      }
    },
  )

  return finalTransformedResult
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
