import { Spin } from 'antd'
import { CoinsTable } from './CoinsTable'

interface Props {
  coins: any
  loading: boolean
  error: Error | null | unknown
  setPage: React.Dispatch<React.SetStateAction<number>>
  page: number
}

export function Coins({ coins, loading, error, setPage, page }: Props) {
  return (
    <>
      {error && <>{error}</>}
      {/* {!loading && !error && !coins ? (
        <>Нет данных</>
      ) : ( */}
        <CoinsTable loading={loading} data={coins} setPage={setPage} page={page} />
      {/* )} */}
    </>
  )
}
