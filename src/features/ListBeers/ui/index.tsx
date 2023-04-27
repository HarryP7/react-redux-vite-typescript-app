import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Card, Spin, message } from 'antd'
import InfiniteScroll from 'react-infinite-scroller'
import { Error } from 'core'
import { useBeerData } from '../store'
import { BeerItem } from './BeerItem'
import { ShowMore } from './ShowMore'
import { HeaderBeer } from './HeaderBeer'
import styles from './styles.module.scss'

export const ListBeers = () => {
  const { beerItems, loading, page, error } = useSelector(
    (state: RootState) => state.beer
  )

  const getBeerData = useBeerData()

  const fetchItems = useCallback(async () => {
    if (loading) return
    getBeerData({ page })
  }, [getBeerData, loading, page])

  const [messageApi, messageHolder] = message.useMessage()

  useEffect(() => {
    if (error != null) {
      messageApi.open({
        content: <Error error={error} />,
      })
    }
  }, [error, messageApi])

  return (
    <>
      {messageHolder}
      <InfiniteScroll
        loadMore={() => fetchItems()}
        hasMore={!loading}
        loader={<ShowMore />}
        key='InfiniteScroll'
      >
        <Spin tip='Загрузка' spinning={error ? false : loading} size='large'>
          <Card title={<HeaderBeer />}>
            <div className={styles.listBeers}>
              {beerItems.map((item) => (
                <BeerItem item={item} key={`${item.id}-${item.name}`} />
              ))}
            </div>
          </Card>
        </Spin>
      </InfiniteScroll>
    </>
  )
}