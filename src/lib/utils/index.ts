import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify(label: string): string {
  let route = label.replaceAll('&', 'and').replaceAll(' ', '-').toLowerCase()
  return `${route}`
}
