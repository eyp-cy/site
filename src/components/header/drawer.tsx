import { UrlMetadata } from '@/lib/schemas/urls'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import Link from 'next/link'

interface props {
  mainItem: UrlMetadata
  items: UrlMetadata[]
}

export function Drawer({ mainItem, items }: props) {
  return (
    <Accordion type="single" collapsible className="w-full min-w-[16rem]">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <Link className="text-white text-2xl" href={`/${mainItem.slug}`}>
            {mainItem.displayName}
          </Link>
        </AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col gap-2">
            {items.map((item) => (
              <li key={item.slug}>
                <Link className="text-white text-xl" href={`/${mainItem.slug}/${item.slug}`}>
                  {item.displayName}
                </Link>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
