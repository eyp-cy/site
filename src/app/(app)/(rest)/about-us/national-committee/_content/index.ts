import { Nc, NcMember } from '@/payload-types'
import { getYear } from 'date-fns'

import { payload } from '@/lib/db'

export async function getCurrentNCMembers() {
  const currentYear = getYear(new Date())

  const currentNc = await payload.find({
    collection: 'nc',
    where: { year: { equals: currentYear } },
    depth: 3,
  })
  return (
    currentNc.docs
      .at(0)
      ?.members?.flatMap((m) => m.member)
      .filter((m) => typeof m !== 'number') ?? []
  )
}

export async function getPreviousNCs() {
  const currentYear = getYear(new Date())

  const ncs = await payload.find({
    collection: 'nc',
    where: { year: { not_equals: currentYear } },
    sort: '-year',
    depth: 3,
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
