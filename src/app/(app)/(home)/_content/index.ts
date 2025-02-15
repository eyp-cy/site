import { payload } from '@/lib/db'

export async function getUpcomingEvents() {
  const upcomingEvents = await payload.find({
    collection: 'events',
    where: { active: { equals: true } },
    sort: 'date',
  })

  return upcomingEvents.docs
}

export async function getTestimonials() {
  const testimonials = await payload.find({
    collection: 'testimonials',
    sort: 'authorFullName',
  })

  return testimonials.docs
}
