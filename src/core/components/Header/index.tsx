import { FC, PropsWithChildren } from 'react'
import { Layout } from 'antd'
import { NavigationBar } from 'widgets/NavigationBar'
import { HomeIcon } from './HomeIcon'
import styles from './styles.module.scss'

export const Header: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout.Header className={styles.headerContainer}>
      <div>
        <HomeIcon />
        {children}
      </div>
      <NavigationBar />
    </Layout.Header>
  )
}
