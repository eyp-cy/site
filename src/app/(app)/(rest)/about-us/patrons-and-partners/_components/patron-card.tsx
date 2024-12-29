import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Patron } from 'payload-types'
import { toImageUrl } from '@/lib/to-image-url'

export function PatronCard({ patron, invertColors }: { patron: Patron; invertColors?: boolean }) {
  return (
    <>
      <div className="flex w-60 flex-col">
        <Image
          className="mb-4 bg-gray-200 h-60 w-60 rounded-full object-cover object-center"
          width={200}
          height={200}
          src={toImageUrl(patron.image)}
          alt="..."
        />
        <div
          className={cn('mb-3 text-center text-lg', invertColors ? 'text-zinc-200' : 'text-black')}
        >
          {patron.qualifier}. {patron.fullName}
        </div>
        <div
          className={cn(
            'break-normal text-center text-sm',
            invertColors ? 'text-zinc-300' : 'text-gray-600',
          )}
        >
          {patron.title}
        </div>
      </div>
    </>
  )
}
