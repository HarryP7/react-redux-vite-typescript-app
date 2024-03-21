import { FC, PropsWithChildren } from 'react'
import { Layout } from 'antd'
import { Header } from '../Header'
import styles from './styles.module.scss'

const { Content } = Layout
interface ILayoutProps {
  header?: React.ReactNode
}

export const LayoutApp: FC<PropsWithChildren<ILayoutProps>> = ({
  header,
  children,
}) => (
  <Layout className={styles.layout}>
    <Header>{header}</Header>
    <Content className={styles.containerApp}>
      {children}
    </Content>
  </Layout>
)
