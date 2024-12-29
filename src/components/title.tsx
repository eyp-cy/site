import { cn } from '@/lib/utils'
import Underline from './underline'

interface props {
  text: string
  order: 'h1' | 'h2' | 'h3'
  theme?: 'dark' | 'light'
  underline?: string
  className?: string
}

export function Title({ text, order, theme = 'dark', underline, className }: props) {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1
          className={cn(
            'text-center font-semibold',
            order === 'h1' && 'text-3xl xs:text-4xl md-lg:text-5xl',
            order === 'h2' && 'text-2xl xs:text-3xl md-lg:text-4xl',
            order === 'h3' && 'text-xl xs:text-2xl md-lg:text-3xl',
            theme === 'dark' ? 'text-primary-900' : 'text-white',
            className,
          )}
        >
          {text}
        </h1>
        <Underline
          className={cn(
            'mb-3 mt-1 xs:mb-4 md-lg:mb-6',
            order === 'h1' && 'w-12 xs:w-14 md-lg:w-16',
            order === 'h2' && 'w-10 xs:w-12 md-lg:w-14',
            order === 'h3' && 'w-9 xs:w-10 md-lg:w-12',
            underline,
          )}
        />
      </div>
    </>
  )
}
