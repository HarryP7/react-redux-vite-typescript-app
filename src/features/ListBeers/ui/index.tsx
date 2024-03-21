import { Spin } from 'antd'
import InfiniteScroll from 'react-infinite-scroller'
import { EndList, getError, useAppSelector } from 'core'
import { getBeer, useBeerData } from '../store'
import { BeerItem } from './BeerItem'
import { ShowMore } from './ShowMore'
import styles from './styles.module.scss'

export const ListBeers = () => {
  const { beerItems, hasMore } = useAppSelector(getBeer)
  const error = useAppSelector(getError)
  const getBeerData = useBeerData()

  return (
    <InfiniteScroll
      loadMore={getBeerData}
      hasMore={hasMore}
      loader={<ShowMore key='ShowMore' loading={beerItems.length !== 0} />}
      key='InfiniteScroll'
    >
      <Spin
        tip='Загрузка'
        spinning={error.message ? false : beerItems.length === 0}
        size='large'
      >
        <ul className={styles.listBeers}>
          {beerItems.map((item) => (
            <BeerItem item={item} key={item.id} />
          ))}
        </ul>
      </Spin>
      {!hasMore && <EndList />}
    </InfiniteScroll>
  )
}
