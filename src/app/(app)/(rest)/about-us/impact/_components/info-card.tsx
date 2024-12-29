import Image, { StaticImageData } from 'next/image'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface props {
  title: string
  reversed?: boolean
  imageURL: StaticImageData
  children: ReactNode
  className?: string
}

export function InfoCard({ title, reversed = false, imageURL, children, className }: props) {
  return (
    <>
      <div
        className={cn(
          'flex group gap-4 items-center flex-col-reverse',
          reversed ? 'md:flex-row-reverse' : 'md:flex-row',
        )}
      >
        <div className="w-2/3 xs:w-1/2 md:w-1/4 rounded-lg bg-pink-500">
          <Image
            width={250}
            height={250}
            src={imageURL}
            alt=""
            className={cn(
              'h-[97%] w-[97%] content-center rounded-lg object-cover transition-all duration-300',
              reversed
                ? 'translate-x-4 translate-y-4 group-hover:translate-x-5 group-hover:translate-y-5'
                : '-translate-x-4 -translate-y-4 group-hover:-translate-x-5 group-hover:-translate-y-5',
            )}
          />
        </div>
        <div
          className={cn(
            'm-8 mr-12 w-full xs:w-11/12 sm:w-10/12 md:w-3/4 transition-all flex flex-col items-center duration-300 group-hover:scale-[1.02]',
            className,
          )}
        >
          <h3 className="text-xl sm:text-2xl text-primary-900 font-semibold text-center">
            {title}
          </h3>
          <div className="bg-secondary-900 h-1 w-8 my-6">&nbsp;</div>
          <p className="text-justify text-lg">{children}</p>
        </div>
      </div>
    </>
  )
}
