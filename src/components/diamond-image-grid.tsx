import type React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ImageProps {
  src: string
  alt: string
}

interface DiamondImageGridProps {
  images: [ImageProps, ImageProps, ImageProps]
  flow?: 'lhs' | 'rhs'
  className?: string
}

export const DiamondImageGrid: React.FC<DiamondImageGridProps> = ({
  images,
  flow = 'lhs',
  className,
}) => {
  const gridConfig = {
    lhs: [
      'col-start-1 row-start-1 -translate-y-[16%] translate-x-[16%]',
      'col-start-2 row-start-1',
      'col-start-1 row-start-3 translate-y-[16%] translate-x-[16%]',
    ],
    rhs: [
      'col-start-4 row-start-1 -translate-y-[16%] -translate-x-[16%]',
      'col-start-1 row-start-1',
      'col-start-4 row-start-3 translate-y-[16%] -translate-x-[16%]',
    ],
  }

  return (
    <div
      className={cn(
        'grid grid-cols-5 grid-rows-4 gap-4 aspect-square w-full max-w-3xl mx-auto',
        className,
      )}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            'relative col-span-2 row-span-2',
            gridConfig[flow][index],
            index === 1 ? 'col-span-4 row-span-4 z-10' : 'z-0',
          )}
        >
          <Image src={image.src} alt={image.alt} fill className={cn('object-cover diamond-mask')} />
        </div>
      ))}
    </div>
  )
}
