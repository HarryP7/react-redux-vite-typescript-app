import { Layout } from 'antd'
import styles from './styles.module.scss'

interface ILayoutProps {
  content?: React.ReactNode
}

export const LayoutApp = ({ content }: ILayoutProps) => (
  <Layout className={styles.layout}>{content}</Layout>
)