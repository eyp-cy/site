import { Metadata } from 'next'
import { Container, Title } from '@/components'
import { NCMemberCard, PreviousBoardButton } from './_components'
import { getCurrentNCMembers, getPreviousNCs } from './_content'

export const metadata: Metadata = { title: 'National Committee' }

export default async function NationalCommittee() {
  const nc = await getCurrentNCMembers()
  const previousNCs = await getPreviousNCs()

  return (
    <>
      <Container className="mt-40 md:mt-20 lg:mt-16 flex flex-col pb-16">
        <div className="item-center flex flex-col items-center gap-6">
          <Title text="Our National Committee" order="h1" underline="rotate-[190deg]" />
          <p className="mt-6 text-center text-lg leading-relaxed md:text-xl">
            The National Committee of EYP Cyprus is elected by the organisation&apos;s members at
            our Annual General Meetings taking place in December. The Committee is responsible for
            undertaking the strategic planning for EYP Cyprus&apos; future as well as the
            administrative tasks that enable the organisation to function on a day-to-day basis.
          </p>
          <div className="mt-20 3xl:mt-32 ">
            <Title text="2025" order="h2" underline="rotate-[190deg]" />
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-16">
          {nc.map((member, i) => (
            <NCMemberCard key={i} member={member} />
          ))}
        </div>
      </Container>
      <div className="flex justify-center mt-20 mb-24">
        <div className="border-t-2 w-1/2 border-gray-300/50">&nbsp;</div>
      </div>
      <Container className="mt-16 mb-20 flex flex-col justify-center gap-2">
        <div className="flex justify-center">
          <Title text="Past Boards" order="h2" underline="rotate-[190deg]" />
        </div>
        <div className="mt-10 grid grid-cols-3 grid-rows-5 gap-5 xs:grid-cols-4 xs:grid-rows-4">
          {previousNCs.map((previousBoard) => (
            <div key={previousBoard.year} className="flex shrink justify-center">
              <PreviousBoardButton nc={previousBoard} />
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}
