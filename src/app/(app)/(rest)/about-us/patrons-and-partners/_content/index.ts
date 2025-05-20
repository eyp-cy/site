import { payload } from '@/lib/db'

export async function getPatrons() {
  const patronsCY = await payload.find({
    collection: 'patron',
    where: { domain: { equals: 'CY' } },
    sort: 'fullName',
    depth: 2,
  })

  const patronsEU = await payload.find({
    collection: 'patron',
    where: { domain: { equals: 'EU' } },
    sort: 'fullName',
    depth: 2,
  })

  return { CY: patronsCY.docs, EU: patronsEU.docs }
}

export async function getPartners() {
  const partners = await payload.find({
    collection: 'partner',
    sort: 'name',
    depth: 2,
  })

  return partners.docs
}
