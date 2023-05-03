import { Spin, Space } from 'antd'
import styles from './styles.module.scss'

interface IShowMoreProps {
  loading: boolean
}

export const ShowMore = ({ loading }: IShowMoreProps) => {
  return (
    <Space className={styles.showMoreContainer}>
      <Spin spinning={loading} tip='Загружается еще' />
    </Space>
  )
}