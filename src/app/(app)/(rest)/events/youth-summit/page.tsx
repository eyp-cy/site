import { Metadata } from 'next'
import Image from 'next/image'
import { Container, Divider, Title } from '@/components'
import { ysLogo } from '../_assets/logos'
import {
  ysCommitteeWork,
  ysDiscussingEurope,
  ysGeneralAssembly,
  ysTeamBuilding,
} from '../_assets/session-elements'
import { SessionElementCard } from '../_components'
import {
  COMMITTEE_WORK,
  DISCUSSING_EUROPE,
  GENERAL_ASSEMBLY,
  TEAMBUILDING,
  YOUTH_SUMMIT,
} from '../_content'

export const metadata: Metadata = { title: 'Youth Summit' }
export const runtime = 'edge'

export default function YouthSummit() {
  return (
    <>
      <Container className="mt-40 md:mt-20 lg:mt-16 flex justify-center">
        <div className="flex flex-col items-center gap-5 w-5/6 xl:w-2/3">
          <Image className="mb-5 w-48 md-lg:w-60" width={200} height={200} src={ysLogo} alt="" />
          <div className="flex justify-center">
            <Title text="Youth Summit" order="h1" />
          </div>
          <p className="text-justify text-lg leading-relaxed md:text-xl">{YOUTH_SUMMIT}</p>
        </div>
      </Container>
      <Divider className="mt-20 md:mt-28 xl:mt-32 mb-20 md:mb-32" />
      <Container className="mb-16 xl:mb-20 2xl:mb-32">
        <div className="mb-16 flex justify-center">
          <Title text="Session Program" order="h2" />
        </div>
        <div className="flex flex-col items-center justify-center gap-20 xl:gap-40">
          <SessionElementCard
            className="w-full md-lg:w-5/6 max-w-5xl"
            title="Teambuilding"
            imageURL={ysTeamBuilding}
          >
            {TEAMBUILDING}
          </SessionElementCard>
          <SessionElementCard
            className="w-full md-lg:w-5/6 max-w-5xl"
            title="Committee Work"
            imageURL={ysCommitteeWork}
            reverse
          >
            {COMMITTEE_WORK}
          </SessionElementCard>
          <SessionElementCard
            className="w-full md-lg:w-5/6 max-w-5xl"
            title="Discussing Europe"
            imageURL={ysDiscussingEurope}
          >
            {DISCUSSING_EUROPE}
          </SessionElementCard>
          <SessionElementCard
            className="w-full md-lg:w-5/6 max-w-5xl"
            title="General Assembly"
            imageURL={ysGeneralAssembly}
            reverse
          >
            {GENERAL_ASSEMBLY}
          </SessionElementCard>
        </div>
      </Container>
    </>
  )
}
