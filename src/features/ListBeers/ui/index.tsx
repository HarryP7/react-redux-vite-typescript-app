import { useCallback } from 'react'
import { Card, Spin } from 'antd'
import InfiniteScroll from 'react-infinite-scroller'
import { EndList, useAppSelector } from 'core'
import { useBeerData } from '../store'
import { BeerItem } from './BeerItem'
import { ShowMore } from './ShowMore'
import { HeaderBeer } from './HeaderBeer'
import styles from './styles.module.scss'

export const ListBeers = () => {
  const { beerItems, loading, page, hasMore } = useAppSelector(
    (state) => state.beer
  )
  const error = useAppSelector((state) => state.error)

  const getBeerData = useBeerData()

  const fetchItems = useCallback(async () => {
    if (loading) return
    getBeerData({ page })
  }, [getBeerData, loading, page])

  return (
    <InfiniteScroll
      loadMore={() => fetchItems()}
      hasMore={hasMore}
      loader={<ShowMore loading={beerItems.length !== 0} />}
      key='InfiniteScroll'
    >
      <Spin tip='Загрузка' spinning={error.message ? false : loading} size='large'>
        <Card title={<HeaderBeer />}>
          <div className={styles.listBeers}>
            {beerItems.map((item) => (
              <BeerItem item={item} key={`BeerItem-${item.id}-${item.name}`} />
            ))}
          </div>
        </Card>
      </Spin>
      {!hasMore && <EndList />}
    </InfiniteScroll>
  )
}