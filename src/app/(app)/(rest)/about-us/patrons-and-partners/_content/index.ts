import { payload } from '@/cms/db'

export { partnerData } from './partners'
export { patronData } from './patrons'

export async function getPatrons() {
  const patronsCY = await payload.find({
    collection: 'patron',
    where: { domain: { equals: 'CY' } },
    sort: 'fullName',
  })

  const patronsEU = await payload.find({
    collection: 'patron',
    where: { domain: { equals: 'EU' } },
    sort: 'fullName',
  })

  return { CY: patronsCY.docs, EU: patronsEU.docs }
}

export async function getPartners() {
  const partners = await payload.find({
    collection: 'partner',
    sort: 'name',
  })

  return partners.docs
}
