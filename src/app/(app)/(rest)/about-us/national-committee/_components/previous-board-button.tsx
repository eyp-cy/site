import { Dialog, DialogContent, DialogHeader, DialogTrigger, Title } from '@/components'
import { Nc } from 'payload-types'
import { extractMembers } from '../_content'

export function PreviousBoardButton({ nc }: { nc: Nc }) {
  const members = extractMembers(nc)
  const year = nc.year

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="cursor-pointer rounded-md bg-sky-200 px-7 py-2 text-xl hover:scale-105 hover:bg-sky-300">
          {year}
        </button>
      </DialogTrigger>
      <DialogContent className="bg-white outline-none backdrop-blur-xl">
        <DialogHeader>
          <Title text={`National Committee ${year}`} order="h2" />
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8">
          {members.map((member, i) => (
            <div key={i} className="flex flex-col gap-1 p-1">
              <h3 className="text-base font-semibold text-slate-500 sm:text-lg">
                {member.position}
              </h3>
              <h2 className="text-lg font-semibold sm:text-xl">{member.fullName}</h2>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
