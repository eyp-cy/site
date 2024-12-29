import { toImageUrl } from '@/lib/to-image-url'
import Image, { StaticImageData } from 'next/image'
import { Partner } from 'payload-types'

interface props {
  name: string
  description: string
  imageURL: StaticImageData
}

export function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div className="bg-slate-200/50 max-h-60 h-full px-3 xs:px-5 py-2 xs:py-3 rounded-md hover:bg-slate-300/50 hover:shadow-sm flex gap-5">
      <Image
        className="w-1/4 object-contain"
        width={300}
        height={300}
        src={toImageUrl(partner.image)}
        alt=""
      />
      <div className="flex w-60 flex-col gap-5">
        <h2 className="text-xl sm:text-2xl font-bold text-primary-700">{partner.name}</h2>
        <p className="text-lg">{'DESCRIPTION NEEDED'}</p>
      </div>
    </div>
  )
}
