import { Container, Header, WaveDivider } from '@/components'
import { Breadcrumbs } from '@/components/breadcrumbs'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div>
        <div className="h-20 lg:h-12 bg-primary-800">&nbsp;</div>
        <WaveDivider.headerHorizontal />
        <Container>
          <Breadcrumbs />
        </Container>
      </div>
      {children}
    </>
  )
}
