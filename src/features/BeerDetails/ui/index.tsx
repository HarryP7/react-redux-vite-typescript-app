import { useBeerDetails } from '../hooks'
import { BeerDetails } from './BeerDetails'

export function BeerDetailsContainer() {
  const { beerDetails, loading } = useBeerDetails()
  return (
    <BeerDetails beerDetails={beerDetails} loading={loading} />
  )
}
