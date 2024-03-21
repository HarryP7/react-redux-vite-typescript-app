import { IBeer } from "features/ListBeers/interfaces"

interface Props {
  item: IBeer
}

export function CartItem({item}: Props) {
  return (
    <>{JSON.stringify(item)}</>
  )
}