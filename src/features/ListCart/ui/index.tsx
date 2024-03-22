import { useAppSelector } from 'core'
import { BeerItem } from 'features/ListBeers/ui/BeerItem'
import { getCart } from 'widgets/NavigationBar/store'
import { EmptyCart } from './EmptyCart'
import { HeaderCart } from './HeaderCart'
import styles from './styles.module.scss'

export function ListCartContainer() {
  const { beerItems } = useAppSelector(getCart)

  return (
    <>
      {beerItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <HeaderCart count={beerItems.length} />
      )}
      {beerItems.map((item) => (
        <BeerItem item={item} />
      ))}
    </>
  )
}
