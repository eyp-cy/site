'use client'
import { Popover, Transition } from '@headlessui/react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useEffect, useState } from 'react'

import { debounce } from '@/lib/utils/debounce'
import { cn } from '@/lib/utils'
import { Drawer } from './drawer'
import { Dropdown } from './dropdown'
import whiteLong from './white-long.webp'

const HeaderLogo = () => {
  return (
    <Link
      href="/"
      className="w-3/4 max-w-[15rem] xs:w-3/5 xs:max-w-[17rem] sm:w-2/5 sm:max-w-none md:w-1/3 lg:w-1/5 lg-xl:w-80 xl:w-80"
    >
      <Image
        width={600}
        height={100}
        className="my-2 h-auto cursor-pointer "
        src={whiteLong}
        alt="EYP Cyprus logo"
      />
    </Link>
  )
}

function MobileNav() {
  return (
    <Popover className="block lg:hidden">
      <Popover.Button>
        <Menu className="w-6 text-white" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-primary-700/70 backdrop-blur-md" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel as="div" className="absolute inset-x-0 h-[70vh] grid place-items-center">
            <Popover.Button>
              <button className="absolute -top-[5vh] right-4">
                <X className="w-6 text-white" />
              </button>
            </Popover.Button>
            <nav className="flex flex-col gap-5">
              <Link className="text-white text-2xl" href="/">
                Home
              </Link>
              <Drawer
                mainItem={{ displayName: 'About Us', slug: 'about-us' }}
                items={[
                  { displayName: 'Patrons & Partners', slug: 'patrons-and-partners' },
                  { displayName: 'Impact', slug: 'impact' },
                  { displayName: 'National Committee', slug: 'national-committee' },
                  { displayName: 'EYP Network', slug: 'eyp-network' },
                ]}
              />
              <Drawer
                mainItem={{ displayName: 'Events', slug: 'events' }}
                items={[
                  // {
                  //   displayName: 'Pre-Selection Days',
                  //   slug: encodeURIComponent('Pre-Selection Days'),
                  // },
                  // { displayName: 'Days of EYP', slug: encodeURIComponent('Days of EYP') },
                  { displayName: 'Youth Summit', slug: encodeURIComponent('Youth Summit') },
                  { displayName: 'National Session', slug: encodeURIComponent('National Session') },
                ]}
              />
              <Link className="text-white text-2xl" href="/get-involved">
                Get Involved
              </Link>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

function DesktopNav() {
  return (
    <div className="hidden lg:flex items-center justify-end gap-4 text-xl font-semibold text-white xl:gap-10">
      <a
        href="/"
        className="cursor-pointer rounded-xl px-5 py-2 hover:bg-accent-900 hover:text-black text-base"
      >
        Home
      </a>
      <Dropdown
        mainItem={{ displayName: 'About Us', slug: 'about-us' }}
        items={[
          { displayName: 'Patrons & Partners', slug: 'patrons-and-partners' },
          { displayName: 'Impact', slug: 'impact' },
          { displayName: 'National Committee', slug: 'national-committee' },
          { displayName: 'EYP Network', slug: 'eyp-network' },
        ]}
      />
      <Dropdown
        mainItem={{ displayName: 'Events', slug: 'events' }}
        items={[
          {
            displayName: 'Pre-Selection Days',
            slug: encodeURIComponent('Pre-Selection Days'),
          },
          { displayName: 'Days of EYP', slug: encodeURIComponent('Days of EYP') },
          { displayName: 'Youth Summit', slug: encodeURIComponent('Youth Summit') },
          { displayName: 'National Session', slug: encodeURIComponent('National Session') },
        ]}
      />
      <a
        className="cursor-pointer rounded-4xl bg-accent-900 px-6 py-3 text-black transition-all duration-300 hover:scale-[1.05] hover:rounded-2xl text-base"
        href="/get-involved"
      >
        Get Involved
      </a>
    </div>
  )
}

export function Header() {
  const [isDocked, setIsDocked] = useState(true)

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const storeScroll = () => setIsDocked(window.scrollY === 0)
    const cb = debounce(storeScroll)

    document.addEventListener('scroll', cb, { passive: true })
    storeScroll()

    return () => document.removeEventListener('scroll', cb)
  }, [])

  if (!isMounted) return null

  return (
    <div
      className={cn(
        'fixed top-0 z-50 flex h-[10vh] max-h-32 w-full flex-row items-center justify-between px-4 transition-all duration-150 xl:px-16',
        !isDocked && 'bg-primary-800 shadow-md',
      )}
    >
      <HeaderLogo />
      <DesktopNav />
      <MobileNav />
    </div>
  )
}
