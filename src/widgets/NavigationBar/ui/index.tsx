import { Link } from 'react-router-dom'
import { RouterPaths } from 'app/router'
import { useAppSelector } from 'core/hooks'
import { Badge } from 'antd'
import {
  FundProjectionScreenOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'
import { getCart } from '../store'
import styles from './styles.module.scss'

export function NavigationBar() {
  const { beerItems } = useAppSelector(getCart)

  return (
    <div className={styles.navigationContainer}>
      <Link to={RouterPaths.coins} className={styles.item}>
        <FundProjectionScreenOutlined className={`icon ${styles.icon}`} />
        <span className={styles.itemTitle}>Валюты</span>
      </Link>
      <Link to={RouterPaths.cart} className={styles.item}>
        <ShoppingCartOutlined className={`icon ${styles.icon}`} />
        <Badge count={beerItems.length} offset={[-5, -20]} overflowCount={999}>
          <span className={styles.itemTitle}>Корзина</span>
        </Badge>
      </Link>
    </div>
  )
}
