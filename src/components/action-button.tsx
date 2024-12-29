'use client'
import { cn } from '@/lib/utils'

type buttonProps = React.ButtonHTMLAttributes<HTMLButtonElement>
type linkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

type buttonOrLinkProps = ({ variant: 'button' } & buttonProps) | ({ variant: 'link' } & linkProps)

type actionButtonProps = buttonOrLinkProps & { text: string }

export function ActionButton(props: actionButtonProps) {
  if (props.variant === 'link') {
    const { className, text, href } = props
    return (
      <a
        href={href}
        className={cn(
          'w-max cursor-pointer rounded-full bg-accent-900 px-9 py-5 text-xl font-semibold text-black shadow-sm md:text-2xl lg:px-7 lg:py-5',
          'transition-all duration-300 hover:scale-110',
          className,
        )}
      >
        {text}
      </a>
    )
  } else {
    const { className, text, onClick, disabled } = props
    return (
      <button
        role="button"
        disabled={disabled}
        onClick={onClick}
        className={cn(
          'w-max cursor-pointer rounded-full bg-accent-900 px-9 py-5 text-xl font-semibold text-black shadow-sm md:text-2xl lg:px-7 lg:py-5',
          'transition-all duration-300 hover:scale-110',
          className,
        )}
      >
        {text}
      </button>
    )
  }
}
