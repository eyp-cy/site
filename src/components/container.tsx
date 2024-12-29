import { ClassValue } from 'clsx'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface props {
  className: string
  backdrop?: string
  children: ReactNode
}

export function Container({ className, backdrop, children }: props) {
  return (
    <div className={backdrop}>
      <section
        className={cn(
          'mx-auto max-w-7xl px-5 sm:px-7 md:px-10 md-lg:px-20 lg:px-28 lg-xl:px-40 3xl:max-w-9xl',
          className,
        )}
      >
        {children}
      </section>
    </div>
  )
}
