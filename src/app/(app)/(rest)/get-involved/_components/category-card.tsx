'use client'
import type { ReactNode } from 'react'
import { Title } from '@/components/title'

interface props {
  title: string
  children: ReactNode
  action?: () => void
}

export const CategoryCard = ({ title, children: info, action }: props) => {
  return (
    <div className=" h-max flex flex-col shadow-sm items-center gap-4 bg-gray-200/50 hover:bg-gray-300/50 px-4 py-6 sm:px-8 sm:py-12 rounded-md">
      <div className="flex justify-start w-full">
        <Title
          className="font-semibold"
          text={title}
          order="h3"
          underline="text-secondary-800 rotate-[176deg]"
        />
      </div>
      <p className="mb-4 text-justify text-lg md:text-xl">{info}</p>
    </div>
  )
}
