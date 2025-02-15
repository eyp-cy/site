'use client'
import { usePathname } from 'next/navigation'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb'
import Link from 'next/link'
import React from 'react'

export function Breadcrumbs() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter((segment) => segment !== '')

  if (segments.length === 0) return <></>

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/" prefetch={false} className="hover:text-secondary hover:underline">
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {segments.map((segment, idx) => (
          <React.Fragment key={segment}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-muted-foreground">
                {idx !== segments.length - 1 ? (
                  <Link
                    href={`/${segments.slice(0, idx + 1).join('/')}`}
                    className="hover:text-secondary capitalize hover:underline"
                    prefetch={false}
                  >
                    {decodeURIComponent(segment)}
                  </Link>
                ) : (
                  <p className="capitalize">{decodeURIComponent(segment)}</p>
                )}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
