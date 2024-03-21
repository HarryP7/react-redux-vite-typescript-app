import { LayoutApp } from 'core/components'
import { HeaderBeer, ListBeers } from 'features/ListBeers'

export const BeersPage = () => {
  return (
    <LayoutApp header={<HeaderBeer />}>
      <ListBeers />
    </LayoutApp>
  )
}
