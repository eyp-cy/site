import { Nc, NcMember } from 'payload-types'

import { payload } from '@/cms/db'
export { nationalCommittee } from './national-committee'
export { previousNationalCommittees } from './previous-boards'

export async function getCurrentNCMembers() {
  const currentYear = 2025
  //   const currentYear = getYear(new Date())

  const currentNc = await payload.find({
    collection: 'nc',
    where: { year: { equals: currentYear } },
  })

  return currentNc.docs.at(0)?.members?.flatMap((m) => m.member as unknown as NcMember) ?? []
}

export async function getPreviousNCs() {
  const currentYear = 2025
  //   const currentYear = getYear(new Date())

  const ncs = await payload.find({
    collection: 'nc',
    where: { year: { not_equals: currentYear } },
    sort: '-year',
  })

  return ncs.docs
}

export function extractMembers(nc: Nc) {
  const members = nc.members
  if (!members) return [] as NcMember[]

  return members.flatMap((m) => {
    if (typeof m.member === 'number') return []

    return m.member as unknown as NcMember
  })
}
