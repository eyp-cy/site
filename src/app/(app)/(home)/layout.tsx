import { Header, WaveDivider } from '@/components'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="hidden lg:block absolute left-0 -z-10 w-full">
        <WaveDivider.headerDiagonal />
      </div>
      <div className="hidden sm:block lg:hidden absolute left-0 -z-10 w-full">
        <WaveDivider.headerDiagonalSm />
      </div>
      <div className="block sm:hidden absolute left-0 -z-10 w-full">
        <WaveDivider.headerDiagonalXs />
      </div>
      <Header />
      {children}
    </>
  )
}
