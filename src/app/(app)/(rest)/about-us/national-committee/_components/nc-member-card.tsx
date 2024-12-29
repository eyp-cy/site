import Image from 'next/image'
import { NcMember } from 'payload-types'

import { toImageUrl } from '@/lib/to-image-url'

export function NCMemberCard({ member: { fullName, position, image } }: { member: NcMember }) {
  return (
    <div className="flex w-60 flex-col">
      <Image
        className="mb-4 h-60 w-60 rounded-full object-cover object-center"
        width={200}
        height={200}
        src={toImageUrl(image)}
        alt="..."
      />
      <div className="mb-3 text-center text-lg">{fullName}</div>
      <div className="break-normal text-center text-sm">{position}</div>
    </div>
  )
}
