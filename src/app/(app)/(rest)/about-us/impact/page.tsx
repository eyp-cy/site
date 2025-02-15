import { Metadata } from 'next'
import { Container, Divider, Title } from '@/components'
import { InfoCard } from './_components'
import { SITE_IMAGE } from '@/content/images'

export const metadata: Metadata = { title: 'Impact' }

export default function Impact() {
  return (
    <>
      <Container className="mt-40 mb-20 lg:mt-16 flex flex-col justify-center">
        <div className=" flex justify-center">
          <Title text="Our Impact" order="h1" />
        </div>
        <p className=" text-justify text-lg leading-relaxed md:text-xl">
          The European Youth Parliament Cyprus provides a unique educational experience to young
          people from both Cyprus and Europe to develop crucial skills, but also to discuss current
          issues in a safe, non-partisan and independent forum. Through EYP Cyprus, young people are
          given the tools and the space to develop and express their opinions, and are equipped with
          the knowledge and skills needed to positively impact the world around them. We work to
          engage young people with policy makers and experts, to further empower them to make their
          opinions heard and become active citizens in society. At the same time, participants at
          our events are given the opportunity to develop key skills for their educational and
          professional life including among others their communication, leadership, team work,
          planning, and analytical skills. As such, our activities have a measurable impact on young
          people across Europe.
        </p>
      </Container>
      <Divider className="my-32" />
      <Container className="mb-28 md:mb-16 lg:mb-32 flex flex-col gap-20 sm:gap-24 xl:gap-36 3xl:gap-56">
        <InfoCard
          title="Forming opinions and solving current challenges"
          imageURL={SITE_IMAGE.impact.img1}
        >
          Every year, the EYP Cyprus engages 500+ young people from across Cyprus and Europe in a
          welcoming, independent, non-partisan environment to develop and express their opinions and
          put forth their suggestions to tackle current social, economic, legal, political and
          environmental challenges.
        </InfoCard>
        <InfoCard
          title="Developing skills and growing as a person"
          imageURL={SITE_IMAGE.impact.img2}
          reversed
        >
          EYP Cyprus encourages independent thinking and initiative amongst young people and
          facilitates the learning of crucial social and professional skills. These include
          teamwork, tolerance and problem-solving, as well as communication and leadership skills.
          Through our activities, young people get the chance to take on various roles of
          responsibilities - from managing projects and events, to leading teams and facilitating
          discussions. These are unique opportunities for each participant to develop and grow their
          skillset.
        </InfoCard>
        <InfoCard
          title="Engaging with current topics in dialogue with decision-makers"
          imageURL={SITE_IMAGE.impact.img3}
        >
          During most of our events, we work hard to bring young people together with decision
          makers and experts. Participants at our events often have the chance to discuss in a round
          table format with key policy makers a wide range of topics, such as international
          politics, human rights, climate change, health and energy. High-ranking national and
          European politicians and decision-makers regularly attend our events and interact with our
          participants and hear what young people&apos;s opinions and vision for the future are.
        </InfoCard>
        <InfoCard
          title="Building a network and facilitating intercultural understanding"
          imageURL={SITE_IMAGE.impact.img4}
          reversed
        >
          Through taking part in an EYP Cyprus event, young people have the chance to join a network
          of active alumni and volunteers both in Cyprus and Europe. We introduce participants to a
          network of young people with which they can connect with and reach out for support for any
          issues including academic, professional and other matters. With participants of our events
          coming from 40+ European countries, young people through our activities also have a chance
          to develop their intercultural understanding and build international friendships.
        </InfoCard>
        <InfoCard title="Empowering young, active citizens" imageURL={SITE_IMAGE.impact.img5}>
          As a result of our events, more than 90% of participants indicate an increased willingness
          to actively get involved in society and politics. Participants have the chance through
          discussing current affairs to become more passionate around them - evident from how many
          of them get involved in other relevant NGOs. At the same time, they feel a renewed sense
          of active citizenship which translates to many of them becoming volunteers in our
          organisation, helping run and facilitate our events.
        </InfoCard>
        <InfoCard
          title="Traveling and International Opportunities"
          imageURL={SITE_IMAGE.impact.img6}
          reversed
        >
          Through joining some of our events, participants have the chance to be selected and
          participate in International Sessions in 40+ European countries. We give the chance to
          over 50+ of our participants and alumni to travel abroad to international conferences and
          events to take part in unique educational experiences and make international friendships.
        </InfoCard>
      </Container>
    </>
  )
}
