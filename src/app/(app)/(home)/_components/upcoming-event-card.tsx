import Image from 'next/image'
import Link from 'next/link'
import { Event } from 'payload-types'
import { ReactNode } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { toImageUrl } from '@/lib/to-image-url'

export function UpcomingEventCard({
  event: { title, startDate, description, image, actionText, actionUrl },
}: {
  event: Event
}) {
  return (
    <Wrapper hasAction={!!actionText} actionURL={actionUrl ?? ''}>
      <Card className="max-w-lg w-full xl:max-w-none shrink-0 border-none cursor-default group xl:w-72 flex flex-col overflow-hidden rounded-2xl bg-slate-100 shadow-lg transition-all duration-300 hover:scale-[1.02]">
        <Image
          width={200}
          height={150}
          src={toImageUrl(image)}
          className="hidden xl:block h-[14rem] w-full object-cover"
          alt=""
        />
        <div className="flex flex-col justify-start xl:h-3/5">
          <CardHeader>
            <CardTitle>
              <span className="bg-gradient-orange bg-[length:0%_105%] group-hover:bg-[length:100%_105%] bg-no-repeat transition-[background-size] duration-500">
                {title}
              </span>
            </CardTitle>
            <CardDescription className="text-lg">{startDate}</CardDescription>
          </CardHeader>
          <div className="ml-6 block xl:hidden mt-1 mb-2.5 h-1 w-8 bg-orange-500">&nbsp;</div>
          <CardContent className="flex flex-col justify-between">
            <p className="mt-2 xl:mt-3 pb-6 leading-normal text-justify tracking-tight">
              {description}
            </p>
            {actionText && (
              <Link className="w-full mt-3 flex justify-center" href={actionUrl ?? ''}>
                <Button
                  className="w-full bg-accent-900 rounded-md font-bold hover:bg-accent-800 text-slate-900 text-lg"
                  size="lg"
                  variant="destructive"
                >
                  {actionText}
                </Button>
              </Link>
            )}
          </CardContent>
        </div>
      </Card>
    </Wrapper>
  )
}

function Wrapper({
  hasAction,
  actionURL,
  children,
}: {
  hasAction: boolean
  actionURL: string
  children: ReactNode
}) {
  if (hasAction) return children

  return (
    <Link className="block xl:flex cursor-pointer shrink-0 group max-w-lg xl:w-72" href={actionURL}>
      {children}
    </Link>
  )
}
