import { toImageUrl } from '@/lib/to-image-url'
import { cn } from '@/lib/utils'
import { ClassValue } from 'clsx'
import Image from 'next/image'
import { BaseSessionElement } from '../_content'
import { Media } from '@/payload-types'

export function SessionElementCard({
  sessionElement,
  reverse,
  className,
}: {
  sessionElement: BaseSessionElement
  reverse?: boolean
  className?: ClassValue
}) {
  return (
    <div
      className={cn(
        'flex flex-col-reverse gap-4 group',
        reverse ? 'md:flex-row-reverse' : 'md:flex-row',
        className,
      )}
    >
      <div className="w-1/2 place-self-end md:w-1/3 3xl:w-1/4 my-auto min-h-[8rem] max-h-40 md:max-h-56 md-lg:max-h-60 rounded-lg bg-pink-500 rotate-3 group-hover:rotate-6 duration-300 transition-transform">
        <Image
          width={250}
          height={250}
          src={toImageUrl(sessionElement.image as Media)}
          alt=""
          className="-rotate-3 h-[97%] w-[97%] -translate-x-4 -translate-y-4 content-center rounded-lg object-cover transition-all duration-300 group-hover:-rotate-6"
        />
      </div>
      <div className="p-8 w-full md:w-2/3 3xl:w-3/4 transition-all duration-300 group-hover:scale-[1.02]">
        <div className={cn('flex', reverse && 'md:justify-end')}>
          <h2 className="bg-gradient-secondary bg-[length:0%_105%] group-hover:bg-[length:100%_105%] bg-no-repeat transition-[background-size] duration-500 mb-4 text-xl font-semibold xl:text-3xl">
            {sessionElement.title}
          </h2>
        </div>
        <p className="text-justify text-lg">{sessionElement.description}</p>
      </div>
    </div>
  )
}
