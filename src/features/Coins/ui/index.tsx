import { useCoins } from '../hooks'
import { Coins } from './Coins'

export function CoinsContainer() {
  const { coins, setPage, loading, error, page } = useCoins()
  return (
    <Coins
      coins={coins}
      loading={loading}
      error={error}
      setPage={setPage}
      page={page}
    />
  )
}
