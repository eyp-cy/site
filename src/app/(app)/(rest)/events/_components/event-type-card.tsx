import { toImageUrl } from '@/lib/utils/to-image-url'
import { cn } from '@/lib/utils'
import { Media } from '@/payload-types'
import { ClassValue } from 'clsx'
import Image from 'next/image'

export function EventTypeCard({
  event,
  className,
}: {
  event: {
    slug: string
    title: string
    logo: Media
    description: string
  }
  className?: ClassValue
}) {
  return (
    <a
      href={`/events/${event.slug}`}
      className={cn(
        'flex h-max flex-col items-center gap-5 transition-all duration-300 hover:-translate-y-2.5 sm:flex-row xs:hover:translate-y-0',
        className,
      )}
    >
      <div className="basis-1/4">
        <Image
          width={300}
          height={300}
          className="max-w-[16rem] object-fit aspect-auto px-4 transition-all duration-300 xs:hover:-translate-y-2.5"
          src={toImageUrl(event.logo)}
          alt=""
        />
      </div>
      <div className="basis-3/4 flex flex-col w-2/3 transition-all duration-300 xs:hover:-translate-y-2.5">
        <h2 className="text-xl font-semibold xl:font-normal md:text-2xl xl:text-3xl">
          {event.title}
        </h2>
        <p className="text-lg">{event.description}</p>
      </div>
    </a>
  )
}
