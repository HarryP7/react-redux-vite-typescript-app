import { ShoppingCartOutlined } from '@ant-design/icons'
import styles from './styles.module.scss'

export const HeaderBeer = () => (
  <>
    <ShoppingCartOutlined className={styles.icon} />
    <span className={styles.title}> Список напитков </span>
  </>
)