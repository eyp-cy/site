import Image from 'next/image'

import { Container, Divider, Title } from '@/components'
import { ORG_NAME } from '@/content/config'
import { toImageUrl } from '@/lib/utils/to-image-url'
import { SessionElementCard } from '../_components'
import { getEventBySlug } from '../_content'

// export const revalidate = 3600
// export const dynamicParams = true
export const dynamic = 'force-dynamic'

// export async function generateStaticParams() {
//   const events = await getEvents()
//   return events.map((e) => ({ slug: encodeURIComponent(e.title) }))
// }

type PageParams = Promise<{ slug: string }>

export async function generateMetadata({ params }: { params: PageParams }) {
  const { slug } = await params
  const eventTitle = decodeURIComponent(slug)
  return { title: `${eventTitle} - ${ORG_NAME}` }
}

export default async function Page({ params }: { params: PageParams }) {
  const { slug } = await params

  const event = await getEventBySlug(slug)
  return (
    <>
      <Container className="mt-40 md:mt-20 lg:mt-16 flex justify-center">
        <div className="flex flex-col items-center gap-5 w-5/6 xl:w-2/3">
          <Image
            className="mb-5 w-48 md-lg:w-60"
            width={200}
            height={200}
            src={toImageUrl(event.logo)}
            alt=""
          />
          <div className="flex justify-center">
            <Title text={event.title} order="h1" />
          </div>
          <p className="text-justify text-lg leading-relaxed md:text-xl">{event.description}</p>
        </div>
      </Container>
      <Divider className="mt-20 md:mt-28 xl:mt-32 mb-20 md:mb-32" />
      <Container className="mb-16 xl:mb-20 2xl:mb-32">
        <div className="mb-6 md:mb-16 flex justify-center">
          <Title text="Session Program" order="h2" />
        </div>
        <div className="flex flex-col items-center justify-center gap-20 xl:gap-40">
          {event.sessionElements.map(({ sessionElement, id }, i) => (
            <SessionElementCard key={id} sessionElement={sessionElement} reverse={i % 2 === 1} />
          ))}
        </div>
      </Container>
    </>
  )
}
