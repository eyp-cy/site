import Image, { StaticImageData } from 'next/image'
import { cn } from '@/lib/utils'

interface imageObj {
  src: StaticImageData
  alt: string
}

type gridFlow = 'lhs' | 'rhs'

interface focusGridProps {
  images: [imageObj, imageObj, imageObj]
  flow: gridFlow
}

const Focus = ({ images, flow }: focusGridProps) => {
  const ratio = [1, 2, 1]
  const rows = [1, 3, 9]
  const cols = flow === 'lhs' ? [7, 1, 7] : [1, 3, 1]
  const spans = ratio.map((n) => n * 4)
  const zIndex = ['z-0', 'z-10', 'z-0']
  return (
    <div className="grid h-full w-full grid-cols-10 grid-rows-12">
      {images.map((image, i) => (
        <div
          key={i}
          className={cn(
            `col-span-${spans[i]} col-start-${cols[i]} row-span-${spans[i]} row-start-${rows[i]}`,
            zIndex[i],
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            className="diamond-mask"
            width={300 * ratio[i]}
            height={300 * ratio[i]}
          />
        </div>
      ))}
    </div>
  )
}

interface regularGridProps {
  images: [imageObj, imageObj, imageObj]
  flow: gridFlow
}

const Regular = ({ images, flow }: regularGridProps) => {
  const rows = [1, 4, 7]
  const cols = flow === 'lhs' ? [4, 1, 4] : [1, 4, 1]
  const zIndex = ['z-0', 'z-20', 'z-0']
  return (
    <div className="grid h-full w-11/12 grid-cols-7 grid-rows-[10]">
      {images.map((image, i) => (
        <div
          key={i}
          className={cn(
            `col-span-4 col-start-${cols[i]} row-span-4 row-start-${rows[i]}`,
            zIndex[i],
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            className="diamond-mask"
            width={300}
            height={300}
          />
        </div>
      ))}
    </div>
  )
}

const Test = () => {
  return (
    <div className="grid h-full w-full grid-cols-10 grid-rows-12 outline outline-pink-600">
      <div className="z-0 col-span-4 col-start-1 row-span-4 row-start-1 ">
        <Image
          src={'/assets/test-image.png'}
          alt={''}
          className="diamond-mask"
          width={300}
          height={300}
        />
      </div>
      <div className="z-10 col-span-8 col-start-3 row-span-8 row-start-3 ">
        <Image
          src={'/assets/test-image.png'}
          alt={''}
          className="diamond-mask"
          width={600}
          height={600}
        />
      </div>
      <div className="z-0 col-span-4 col-start-1 row-span-4 row-start-9 ">
        <Image
          src={'/assets/test-image.png'}
          alt={''}
          className="diamond-mask"
          width={300}
          height={300}
        />
      </div>
    </div>
  )
}

export const ImageGrid = {
  Regular,
  Focus,
  Test,
} as const
