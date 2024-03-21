import { Spin } from 'antd'
import InfiniteScroll from 'react-infinite-scroller'
import { EndList, getError } from 'core'
import { useAppDispatch, useAppSelector } from 'core/hooks'
import { actions } from 'widgets/NavigationBar/store'
import { getBeerList, useBeerData } from '../hooks'
import { BeerItem } from './BeerItem'
import { ShowMore } from './ShowMore'
import styles from './styles.module.scss'
import { IBeer } from '../interfaces'
import { useCallback } from 'react'

export const ListBeers = () => {
  const { beerItems, hasMore } = useAppSelector(getBeerList)
  const error = useAppSelector(getError)
  const getBeerData = useBeerData()
  const dispatch = useAppDispatch()
  const setBeerToCart = useCallback(
    (data: IBeer) => dispatch(actions.setCartList(data)),
    [dispatch]
  )

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
        className={styles.loader}
      >
        <ul className={styles.listBeers}>
          {beerItems.map((item) => (
            <BeerItem item={item} key={item.id} setBeerToCart={setBeerToCart} />
          ))}
        </ul>
      </Spin>
      {!hasMore && <EndList />}
    </InfiniteScroll>
  )
}
