import { GlobalError } from 'core/components'
import { BeersPage } from 'pages'
import 'antd/dist/reset.css'
import { withStore } from './providers/withStore'

function App() {
  return (
    <>
      <GlobalError />
      <BeersPage />
    </>
  )
}

export default withStore(App)