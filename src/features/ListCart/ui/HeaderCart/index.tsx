import styles from './styles.module.scss'

interface Props {
  count: number
}

export const HeaderCart = ({ count }: Props) => {
  return (
    <>
      <span className={styles.title}>Корзина </span>
      <span className={styles.count}>{count}</span>
    </>
  )
}
