import { LayoutApp } from 'core/components'
import { HeaderHome, Home } from 'features/Home'

export const HomePage = () => {
  return (
    <LayoutApp header={<HeaderHome />}>
      <Home />
    </LayoutApp>
  )
}
