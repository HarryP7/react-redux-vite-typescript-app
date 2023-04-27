import { LayoutApp } from 'core/components'
import { ListBeers } from 'features/ListBeers'

export const BeersPage = () => {
  return (
    <LayoutApp content={<ListBeers />} />
  )
}
