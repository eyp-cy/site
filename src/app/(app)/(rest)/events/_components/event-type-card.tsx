import Image, { StaticImageData } from 'next/image'
import { cn, slugify } from '@/lib/utils'

interface props {
  title: string
  children: string
  imageURL: StaticImageData
  className?: string
}

export function EventTypeCard({ title, children: description, imageURL, className }: props) {
  return (
    <>
      <a
        href={`/events/${slugify(title)}`}
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
            src={imageURL}
            alt=""
          />
        </div>
        <div className="basis-3/4 flex flex-col w-2/3 transition-all duration-300 xs:hover:-translate-y-2.5">
          <h2 className="text-xl font-semibold xl:font-normal md:text-2xl xl:text-3xl">{title}</h2>
          <p className="text-lg">{description}</p>
        </div>
      </a>
    </>
  )
}
