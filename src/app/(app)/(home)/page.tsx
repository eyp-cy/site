import { Metadata } from 'next'
import Link from 'next/link'

import { Container, ImageGrid, Title, WaveDivider } from '@/components'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { TestimonialCard, UpcomingEventCard } from './_components'
import { getTestimonials, getUpcomingEvents } from './_content'
import { SITE_IMAGE } from '@/content/images'

export const metadata: Metadata = { title: 'EYP CY - Home' }
export const dynamic = 'force-dynamic'

export default async function Home() {
  const upcomingEvents = await getUpcomingEvents()
  const testimonials = await getTestimonials()

  return (
    <>
      <section className="flex h-screen w-full flex-col justify-center gap-6">
        <div className="flex flex-col gap-10 px-6 xs:px-10 sm:grid sm:grid-cols-12 sm:grid-rows-2 sm:px-0">
          <div className="flex w-full justify-start sm:col-start-2 sm:row-start-1 sm:w-max">
            <h2 className="text-5xl font-bold text-white sm:text-6xl md-lg:text-7xl">Welcome to</h2>
          </div>
          <div className="flex w-full justify-end sm:col-start-3 sm:row-start-2 sm:w-max">
            <h2 className="text-5xl font-bold text-accent-900 sm:text-6xl md-lg:text-7xl">
              Young Europe
            </h2>
          </div>
        </div>
        <div className="mt-28 flex items-center sm:mt-10 md:mt-12 lg:mt-16 xl:mt-16 2xl:mt-32">
          <Link
            href="/get-involved"
            className="mx-auto w-max cursor-pointer rounded-full bg-accent-900 px-9 py-5 text-xl font-semibold text-black transition-all duration-300 hover:scale-110 md:px-9 md:py-6  md:text-2xl lg:px-10 lg:py-7 lg:text-2xl xl:px-10 xl:py-7 xl:text-3xl"
          >
            Join Us
          </Link>
        </div>
      </section>
      <Container className="flex items-center">
        <div className="z-20 w-full md-lg:w-1/2">
          <div className=" flex justify-center">
            <Title text="Who We Are" order="h2" />
          </div>
          <p className=" text-justify text-lg leading-relaxed md:text-xl">
            The European Youth Parliament (EYP) is a non-partisan and independent educational
            platform bringing together thousands of young people from all over Europe to discuss
            current issues, develop their skills through dialogue and cooperation, as well as
            empower them to positively shape the world around them..
            <br />
            <br />
            The European Youth Parliament Cyprus is a non-governmental, non-partisan organisation
            and one of the 38 National Committees that come under the umbrella of the Pan-European
            EYP Network. EYP Cyprus was established in 2006 and has been actively working to
            organise events and activities catered towards the youth of Cyprus.
          </p>
        </div>
        <div className="ml-20 md-lg:grid w-[45%] place-items-center hidden">
          <ImageGrid.Focus
            flow="rhs"
            images={[
              { src: SITE_IMAGE.home.whoWeAre1, alt: '' },
              { src: SITE_IMAGE.home.whoWeAre2, alt: '' },
              { src: SITE_IMAGE.home.whoWeAre3, alt: '' },
            ]}
          />
        </div>
      </Container>
      <WaveDivider.homeTop />
      <Container backdrop="bg-primary-600" className="flex flex-col items-center xl:px-6">
        <div className="flex justify-center md:justify-start md:max-w-7xl w-full">
          <Title text="Upcoming Events" order="h2" theme="light" />
        </div>

        <div className="hidden no-scrollbar relative w-full max-w-7xl overflow-x-scroll py-10 items-stretch xl:flex flex-row gap-6 justify-start">
          {upcomingEvents.map((event, i) => (
            <UpcomingEventCard key={i} event={event} />
          ))}
        </div>
        <div className="xl:hidden no-scrollbar relative w-full max-w-7xl overflow-x-scroll py-10 gap-8 place-items-center items-center justify-center grid grid-cols-1 sm:grid-cols-2">
          <div className="col-span-1 flex flex-col items-start gap-8 h-full">
            {upcomingEvents
              .filter((_, i) => i % 2 === 0)
              .map((event, i) => (
                <UpcomingEventCard key={i} event={event} />
              ))}
          </div>
          <div className="col-span-1 flex flex-col items-start gap-8 h-full">
            {upcomingEvents
              .filter((_, i) => i % 2 === 1)
              .map((event, i) => (
                <UpcomingEventCard key={i} event={event} />
              ))}
          </div>
        </div>
      </Container>
      <WaveDivider.homeBottom />
      <Container className="mb-12 min-h-[40rem] h-max">
        <div className="flex flex-col gap-5">
          <div className="flex justify-center md:justify-start">
            <Title text="Testimonials" order="h2" underline="text-orange-600 rotate-12" />
          </div>
          <div className="flex flex-col gap-10 lg:hidden">
            {testimonials.map((testimonial, testimonialIndex) => (
              <TestimonialCard key={testimonialIndex} testimonial={testimonial} />
            ))}
          </div>
          <Carousel className="hidden lg:block">
            <CarouselContent>
              {testimonials.map((testimonial, testimonialIndex) => (
                <CarouselItem key={testimonialIndex}>
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </Container>
    </>
  )
}
