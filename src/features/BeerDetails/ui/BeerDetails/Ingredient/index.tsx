interface Props {
  data: any
}

export function Ingredient({ data }: Props) {
  return <>{JSON.stringify(data)}</>
}
