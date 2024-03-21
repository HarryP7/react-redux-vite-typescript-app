import { FC, PropsWithChildren } from 'react'
import { Col, Row, Layout } from 'antd'
import styles from './styles.module.scss'

export const Header: FC<PropsWithChildren> = ({ children }) => (
  <Layout.Header className={styles.header}>
    <Row>
      <Col>{children}</Col>
    </Row>
  </Layout.Header>
)
