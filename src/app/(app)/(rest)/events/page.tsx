import { Metadata } from 'next'

import { ActionButton, Container, Title, WaveDivider } from '@/components'
import { EventTypeCard, SessionElementCard } from './_components'
import { CoreSessionElement, getCoreEvents, getSessionElements } from './_content'
import { CORE_EVENTS } from '@/content/core-events'

export const metadata: Metadata = { title: 'Events' }
export const dynamic = 'force-dynamic'

export default async function Page() {
  const events = await getCoreEvents()
  const sessionElements = await getSessionElements()

  console.log('events', events)
  console.log('sessionElements', sessionElements)

  return (
    <>
      <Container className="mb-20 xl:mb-10 mt-40 md:mt-20 lg:mt-16 flex flex-col items-center">
        <div className=" mb-10 md:mb-3 flex justify-center lg:justify-start">
          <Title text="Our Flagship Events" order="h1" />
        </div>
        <div className="flex shrink mt-20 flex-col items-center gap-16 xl:grid xl:grid-cols-12 xl:grid-rows-4">
          {Object.values(events).filter(Boolean).length === 4 && (
            <>
              <EventTypeCard
                className=" col-span-9 col-start-1 row-span-1 xl:max-w-4xl 2xl:max-w-5xl"
                event={events[CORE_EVENTS.PRE_SELECTION_DAYS.id]}
              />

              <EventTypeCard
                className=" col-span-9 col-start-2 row-span-1 xl:max-w-4xl 2xl:max-w-5xl"
                event={events[CORE_EVENTS.DAYS_OF_EYP.id]}
              />

              <EventTypeCard
                className=" col-span-9 col-start-3 row-span-1 xl:max-w-4xl 2xl:max-w-5xl"
                event={events[CORE_EVENTS.YOUTH_SUMMIT.id]}
              />

              <EventTypeCard
                className=" col-span-9 col-start-4 row-span-1 xl:max-w-4xl 2xl:max-w-5xl"
                event={events[CORE_EVENTS.NATIONAL_SESSION.id]}
              />
            </>
          )}
        </div>
        {/* <div className="mt-40 mb-10 md:mb-3 flex justify-center lg:justify-start">
          <Title text="Other Events and Activities" order="h2" />
        </div> */}
      </Container>
      <WaveDivider.eventsTop />
      <Container backdrop="bg-primary-700" className="flex h-[30rem] flex-col justify-around pt-10">
        <div className=" flex justify-center">
          <Title
            text="I want to participate as a .."
            order="h2"
            theme="light"
            underline="text-orange-500"
          />
        </div>
        <div className="flex flex-row justify-center gap-8 md:gap-14 lg-xl:gap-24">
          <ActionButton variant="link" text="School" href="/get-involved" />
          <ActionButton variant="link" text="Individual" href="/get-involved" />
        </div>
      </Container>
      <WaveDivider.eventsBottom />
      <Container className="mb-16 xl:mb-20 2xl:mb-32">
        <div className=" mb-16 flex justify-center">
          <Title text="Session Program" order="h2" />
        </div>

        <div className="flex flex-col items-center justify-center gap-20 xl:gap-40">
          {Object.values(sessionElements).filter(Boolean).length === 3 && (
            <>
              <SessionElementCard
                className=" w-full md-lg:w-5/6 max-w-5xl"
                sessionElement={sessionElements[CoreSessionElement.TEAM_BUILDING]}
              />
              <SessionElementCard
                className=" w-full md-lg:w-5/6 max-w-5xl"
                sessionElement={sessionElements[CoreSessionElement.COMMITTEE_WORK]}
                reverse
              />
              <SessionElementCard
                className=" w-full md-lg:w-5/6 max-w-5xl"
                sessionElement={sessionElements[CoreSessionElement.GENERAL_ASSEMBLY]}
              />
            </>
          )}
        </div>
      </Container>
    </>
  )
}
