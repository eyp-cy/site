import { Metadata } from 'next'
import Image from 'next/image'

import { Container, Divider, Title } from '@/components'
import { toImageUrl } from '@/lib/to-image-url'
import { SessionElementCard } from '../_components'
import { EVENTS, getEvent } from '../_content'

export const metadata: Metadata = { title: 'National Session' }

export default async function Page() {
  const event = await getEvent(EVENTS.NATIONAL_SESSION)

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
            <Title text="National Session" order="h1" />
          </div>
          <p className="text-justify text-lg leading-relaxed md:text-xl">{event.description}</p>
        </div>
      </Container>
      <Divider className="mt-20 md:mt-28 xl:mt-32 mb-20 md:mb-32" />
      <Container className="mb-16 xl:mb-20 2xl:mb-32">
        <div className="mb-3 flex justify-center">
          <Title text="Session Program" order="h2" />
        </div>
        <div className="flex flex-col items-center justify-center gap-20 xl:gap-40">
          {event.sessionElements.map(({ sessionElement, id }, i) => (
            <SessionElementCard key={id} sessionElement={sessionElement} reverse={i % 2 === 1} />
          ))}
          {/* <SessionElementCard
            className="w-full md-lg:w-5/6 max-w-5xl"
            title="Teambuilding"
            imageURL={nsTeamBuilding}
          >
            {TEAMBUILDING}
          </SessionElementCard>
          <SessionElementCard
            className="w-full md-lg:w-5/6 max-w-5xl"
            title="Committee Work"
            imageURL={nsCommitteeWork}
            reverse
          >
            {COMMITTEE_WORK}
          </SessionElementCard>
          <SessionElementCard
            className="w-full md-lg:w-5/6 max-w-5xl"
            title="Evening Activities"
            imageURL={nsEveningActivity}
          >
            {EVENING_ACTIVITY}
          </SessionElementCard>
          <SessionElementCard
            title="Discussing Europe"
            className="w-full md-lg:w-5/6 max-w-5xl"
            imageURL={nsDiscussingEurope}
            reverse
          >
            {DISCUSSING_EUROPE}
          </SessionElementCard>
          <SessionElementCard
            className="w-full md-lg:w-5/6 max-w-5xl"
            title="General Assembly"
            imageURL={nsGeneralAssembly}
          >
            {GENERAL_ASSEMBLY}
          </SessionElementCard> */}
        </div>
      </Container>
    </>
  )
}
