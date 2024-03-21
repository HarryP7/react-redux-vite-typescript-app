import { HomeOutlined } from '@ant-design/icons'
import { RouterPaths } from 'app/router'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'

export function HomeIcon() {
  const navigate = useNavigate()

  return (
    <HomeOutlined
      onClick={() => navigate(RouterPaths.home)}
      className={`icon ${styles.homeIcon}`}
    />
  )
}
