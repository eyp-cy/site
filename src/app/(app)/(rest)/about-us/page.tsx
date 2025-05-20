import { BookIcon, Globe, MessageCircle, PenIcon } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import { Container, Divider, Title, WaveDivider } from '@/components'
import { WhatWeDoCard } from './_components'
import { SITE_IMAGE } from '@/content/images'
import { DiamondImageGrid } from '@/components/diamond-image-grid'

export const metadata: Metadata = { title: 'About Us' }

export default function AboutUs() {
  return (
    <>
      <Container className="mb-0 mt-40 md-lg:mt-32 2xl:mt-0 flex items-center">
        <div className="z-20 w-full md-lg:w-2/3">
          <div className=" flex justify-center">
            <Title text="About Us" order="h1" underline="rotate-[190deg]" />
          </div>
          <p className=" text-justify text-lg leading-relaxed md:text-xl">
            The European Youth Parliament (EYP) Cyprus is a non-partisan and non-governmental
            organisation, which aims to encourage independent thinking, personal initiative and
            intercultural encounters amongst the young people of Cyprus. EYP Cyprus is one of the 40
            European organisations that operate as part of the pan-European network of EYP
            International. The organisation was founded in 2006 and over the years has organised
            over 150 events with more than 3,500 young people being involved in the activities and
            workings of the organisation.
          </p>
        </div>
        <div className="hidden ml-20 md-lg:grid w-[35%] place-items-center">
          <DiamondImageGrid
            flow="lhs"
            images={[
              { src: SITE_IMAGE.about.img1.src, alt: '' },
              { src: SITE_IMAGE.about.img2.src, alt: '' },
              { src: SITE_IMAGE.about.img3.src, alt: '' },
            ]}
          />
        </div>
      </Container>
      <Container className="block mt-16 sm:hidden">
        <Image className="w-full" width={200} height={150} src={SITE_IMAGE.about.img2} alt="" />
      </Container>
      <Divider className="mt-20 mb-32" />
      <Container className="mb-20 flex items-center">
        <div className="hidden mr-20 md-lg:grid w-[35%] place-items-center">
          <DiamondImageGrid
            flow="rhs"
            images={[
              { src: SITE_IMAGE.about.ourMission1.src, alt: '' },
              { src: SITE_IMAGE.about.ourMission2.src, alt: '' },
              { src: SITE_IMAGE.about.ourMission3.src, alt: '' },
            ]}
          />
        </div>
        <div className="z-20 w-full md-lg:w-2/3">
          <div className=" flex justify-center">
            <Title text="Our Mission" order="h2" underline="rotate-[190deg]" />
          </div>
          <p className=" text-justify text-lg leading-relaxed md:text-xl">
            The European Youth Parliament is a peer-to-peer educational programme that brings
            together young people from across Europe to debate the pressing issues of our time. Our
            mission is to inspire and empower young Europeans to be open-minded, tolerant and active
            citizens.
          </p>
        </div>
      </Container>
      <WaveDivider.aboutTop />
      <Container backdrop="bg-primary-600" className="pb-20 pt-8 xl:px-20">
        <div className="mb-10 flex justify-center">
          <Title text="What We Do" order="h2" theme="light" underline="rotate-[190deg]" />
        </div>
        <div className="grid grid-cols-1 place-items-center gap-10 xl:flex justify-evenly">
          <WhatWeDoCard
            title="Open Forum for Youth"
            info="We provide a forum for young people to develop and express their opinions on European political and social issues in an open and welcoming environment."
            imageURL={SITE_IMAGE.home.whatWeDo1}
          >
            <BookIcon className="w-7 p-0.5 text-white" />
          </WhatWeDoCard>

          <WhatWeDoCard
            title="Intercultural Dialogue"
            info="Through the EYP international network, we support intercultural understanding and peacebuilding by connecting young Cypriots with other Europeans from different backgrounds to share ideas, opinions and practices."
            imageURL={SITE_IMAGE.home.whatWeDo2}
          >
            <MessageCircle className="w-7 p-0.5 text-white" />
          </WhatWeDoCard>

          <WhatWeDoCard
            title="Skills Development"
            info="We present young people across Europe with diverse opportunities for personal growth and skills development through non-formal and peer-led educational activities."
            imageURL={SITE_IMAGE.home.whatWeDo3}
          >
            <PenIcon className="w-7 p-0.5 text-white" />
          </WhatWeDoCard>

          <WhatWeDoCard
            title="Network of Changemakers"
            info="We create a network of the next generation of diverse, young changemakers, equipped with the knowledge and skills needed to positively shape the world around them."
            imageURL={SITE_IMAGE.home.whatWeDo4}
          >
            <Globe className="w-7 p-0.5 text-white" />
          </WhatWeDoCard>
        </div>
      </Container>
      <WaveDivider.aboutBottom />
      <Container className="mt-8 max-h-max mb-0 md:mb-28 lg-xl:mb-0 pb-16 flex items-center">
        <div className="z-20 w-full md-lg:w-2/3">
          <div className=" flex justify-center">
            <Title text="How we do What we do" order="h2" underline="rotate-[190deg]" />
          </div>
          <p className=" text-justify text-lg leading-relaxed md:text-xl">
            With non-formal education at the heart of our activities, we provide young people with a
            non-partisan and independent forum to formulate and discuss their opinions about current
            issues both with each other and relevant policy makers - all while developing vital
            skills! Through a wide range of activities - from conferences, workshops, think tanks,
            trainings, panel discussions among others EYP Cyprus also provides young people with
            spaces to connect with each other and build intercultural understanding and friendships
            across Cyprus and Europe.
            <br />
            <br />
            With 15+ events annually, and 500+ participants at our activities each year, our
            organisation is growing and reaching more and more young people! And with EYP Cyprus
            being part of the wider EYP Network present in 40+ countries in Europe, our members and
            alumni have the opportunity to join over 30,000 young people who take part in more than
            500 EYP events organised across Europe every year.
          </p>
        </div>
        <div className="hidden ml-20 md-lg:grid w-[35%] place-items-center">
          <DiamondImageGrid
            flow="lhs"
            images={[
              { src: SITE_IMAGE.about.howWeDoWhatWeDo1.src, alt: '' },
              { src: SITE_IMAGE.about.howWeDoWhatWeDo2.src, alt: '' },
              { src: SITE_IMAGE.about.howWeDoWhatWeDo3.src, alt: '' },
            ]}
          />
        </div>
      </Container>
      <Container className="block mt-4 xs:mt-10 mb-16 sm:hidden">
        <Image
          className="w-full"
          width={200}
          height={150}
          src={SITE_IMAGE.about.howWeDoWhatWeDo2}
          alt=""
        />
      </Container>
      <div className="flex sm:hidden lg-xl:flex justify-center mt-20 lg-xl:mt-14 mb-32">
        <div className="border-t-2 w-1/2 border-gray-300/50">&nbsp;</div>
      </div>
      <Container className="mb-16 sm:mb-28 lg-xl:20 mt-16 sm:mt-8">
        <div className="">
          <div className="flex justify-center">
            <Title text="A Little More About Us" order="h2" underline="rotate-[190deg]" />
          </div>
          <p className="text-justify text-lg leading-relaxed md:text-xl">
            Our activities provide a unique educational experience to young people and allow them to
            develop transferable professional skills. Participants in our events have the
            opportunity to engage in discussions with other young people from Cyprus and all over
            Europe and exchange ideas on current socio-political issues. During 2020 and the
            pandemic, we focused on providing the youth with a platform to express their concerns,
            fears, and hopes, as well as ideas and views of the future. We therefore organised
            numerous events digitally or in a hybrid format that ultimately aimed to empower Cypriot
            youth and encourage them to be active citizens in their communities especially during
            this difficult time. EYP Cyprus is constantly seeking to expand, engage more young
            people in its activities, and furthering its impact!
          </p>
        </div>
      </Container>
    </>
  )
}
