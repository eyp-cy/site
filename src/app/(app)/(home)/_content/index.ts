import { payload } from '@/lib/db'

export async function getUpcomingEvents() {
  const upcomingEvents = await payload.find({
    collection: 'events',
    where: { active: { equals: true } },
    sort: 'date',
    depth: 3,
  })

  return upcomingEvents.docs
}

export async function getTestimonials() {
  const testimonials = await payload.find({
    collection: 'testimonials',
    sort: 'authorFullName',
    depth: 3,
  })

  return testimonials.docs
}
