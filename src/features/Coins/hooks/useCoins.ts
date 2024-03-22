import { useQuery } from 'react-query'
import axios from 'axios'
import { useState } from 'react'

// interface IGetResponseCoins {
//   data: IBeer[]
// }

export async function loadCoins(page: number = 1) {
  const { data } = await axios.get(
    `https://openapiv1.coinstats.app/coins?page=${page}&limit=10`,
    {
      headers: {
        'X-API-KEY': 'yIWfK4AXE771yOjpITt+eJQ0QslAVRhu38RQfxHHHbM=',
        accept: 'application/json',
      },
    }
  )
  return data.result

}

export function useCoins() {
  const [page, setPage] = useState(1)
  // const dispatch = useAppDispatch()

  const allData = useQuery(
    ['coins', page],
    () => loadCoins(page),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false
    }
  )
  const { data, isFetching, error } = allData
  console.log('useCoins CoinsData', allData)

  return { coins: data, loading: isFetching, error, setPage, page }
}
