import Link from 'next/link'
import { Container, Title } from '@/components'

export default async function Page() {
  return (
    <>
      <>
        <Container className="mt-40 mb-20 lg:mt-16 flex flex-col justify-center gap-16">
          <section>
            <div className="flex flex-col items-center justify-center gap-6">
              <Title text="EYP Network" order="h1" />
              <Title text="International Network & Governance" order="h2" />
            </div>
            <p className=" text-justify text-lg leading-relaxed md:text-xl">
              As a member of the EYP international network, EYP Cyprus continues to engage with the
              broader EYP network annually through its participation in various events such as the
              Board of National Committees&apos; Meetings and other training & capacity-building
              events.
            </p>
          </section>
          <section>
            <div className="flex flex-col items-center justify-center gap-6">
              <Title text="BNC Meetings" order="h3" />
            </div>
            <p className=" text-justify text-lg leading-relaxed md:text-xl">
              The Board of National Committees (BNC) acts as the voice for the EYP network&apos;s
              and EYP national organisations&apos; interests. It is a knowledge-sharing platform to
              share best practices and know-how, such as youth work in different countries,
              organising events, and alumni work. At the same time, the BNC meets twice a year to
              debate and vote on network-wide policies.
              <br />
              <br />
              These meetings are held biannually by the BNC in Berlin in Spring and Autumn, and are
              attended by National Committee representatives of EYP Cyprus.
            </p>
          </section>
          <section>
            <div className="flex flex-col items-center justify-center gap-6">
              <Title text="Other Network-wide events" order="h3" />
            </div>
            <p className=" text-justify text-lg leading-relaxed md:text-xl">
              We are equally represented in the organisation through various other international
              events, including the online monthly Presidents&apos; meetings and the Governing
              Body&apos;s cluster calls. Likewise, EYP International offers various
              capacity-building events throughout the year such as the Media Training Academy, the
              Summer Training Academy and more. Through these, EYP Cyprus has a chance to exchange
              best practices with other National Committees and contribute to the growth of our
              international network.
              <br />
              <br />
              Find out more about EYP International on their{' '}
              <Link href="https://eyp.org" className="text-primary-600 underline">
                website
              </Link>
              .
            </p>
          </section>
        </Container>
      </>
    </>
  )
}
