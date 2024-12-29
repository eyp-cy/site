'use client'
import { WaveDivider } from './wave-divider'
import { Container } from './container'
import { Facebook, Instagram, LinkedinIcon } from 'lucide-react'
import { XTwitterIcon } from './icons/x-twitter-icon'
import { DiscordIcon } from './icons/discord-icon'

// TODO: make phone number and email get copied to clipboard when clicked
// TODO: try out icons instead of text in Contact us section

const contactDetails = {
  email: 'info@eypcyprus.com',
  address: 'PO Box 42253, Larnaca, Cyprus 6532',
}

export function Footer() {
  return (
    <div className="bottom-0 w-full">
      <WaveDivider.footer />
      <Container
        backdrop="bg-primary-800"
        className="grid max-h-max min-h-[10rem] place-content-center items-start gap-y-6 py-8 xs:flex xs:flex-row xs:justify-between xs:pb-0 sm:pt-5 md:pt-0"
      >
        <div className="w-max">
          <h3 className="mb-2 text-2xl font-semibold text-white">Contact us</h3>
          <p className="ml-1 text-slate-100">
            Email:{' '}
            <span
              className="ml-2 hover:text-secondary-700 hover:underline cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(contactDetails.email)
              }}
            >
              {contactDetails.email}
            </span>
          </p>
          <p className="ml-1 text-slate-100">
            P.O. Box:{' '}
            <span
              className="ml-2 hover:text-secondary-700 hover:underline cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(contactDetails.address)
              }}
            >
              {contactDetails.address}
            </span>
          </p>
        </div>
        <div className="w-max">
          <h3 className="text-2xl font-semibold text-white">Follow us</h3>
          <div className="ml-1 mt-3 flex items-center gap-4">
            <a href="https://discord.com/invite/G69mWVPtX3" target="_blank">
              <DiscordIcon className="w-7 text-white hover:text-secondary-700" />
            </a>
            <a href="https://twitter.com/EYP_Cyprus" target="_blank">
              <XTwitterIcon className="w-7 text-white hover:text-secondary-700" />
            </a>
            <a href="https://www.instagram.com/eypcyprus/" target="_blank">
              <Instagram className="w-7 text-white hover:text-secondary-700" />
            </a>
            <a href="https://www.facebook.com/eyp.cyprus" target="_blank">
              <Facebook className="w-7 cursor-pointer text-white hover:text-secondary-700" />
            </a>
            <a href="https://www.linkedin.com/company/eypcy" target="_blank">
              <LinkedinIcon className="w-7 cursor-pointer text-white hover:text-secondary-700" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}
