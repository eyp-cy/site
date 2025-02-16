import { UrlMetadata } from '@/lib/schemas/urls'

export function Dropdown({ mainItem, items }: { mainItem: UrlMetadata; items: UrlMetadata[] }) {
  return (
    <>
      <div className="group relative inline-block">
        <a
          className="cursor-pointer rounded-xl px-5 py-2 hover:bg-accent-900 hover:text-black text-base"
          href={`/${mainItem.slug}`}
        >
          {mainItem.displayName}
        </a>
        <div className="hidden absolute z-10 group-hover:block pt-2">
          <div className="z-2 top-9 mt-2 rounded-xl backdrop-blur-sm bg-primary-900/60 p-2">
            {items.map((item, i) => (
              <a
                key={i}
                className="block w-max cursor-pointer rounded-xl px-5 py-2 hover:bg-accent-900 hover:text-black text-base"
                href={`/${mainItem.slug}/${item.slug}`}
              >
                {item.displayName}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
