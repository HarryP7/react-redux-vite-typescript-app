import { BeersPage } from 'pages'
import 'antd/dist/reset.css'
import { withStore } from './providers/withStore'

function App() {
  return <BeersPage />
}

export default withStore(App)