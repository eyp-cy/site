import Image from 'next/image'
import { NcMember } from '@/payload-types'

import { toImageUrl } from '@/lib/utils/to-image-url'

export function NCMemberCard({ ncMember }: { ncMember: NcMember }) {
  const member = ncMember.member
  if (typeof member === 'number') throw new Error('Member is a number')

  console.log('NCMemberCard', member)
  return (
    <div className="flex w-60 flex-col">
      <Image
        className="mb-4 h-60 w-60 rounded-full object-cover object-center"
        width={200}
        height={200}
        src={toImageUrl(member.image)}
        alt="..."
      />
      <div className="mb-3 text-center text-lg">{member.fullName}</div>
      <div className="break-normal text-center text-sm">{ncMember.position}</div>
    </div>
  )
}
