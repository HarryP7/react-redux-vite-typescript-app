import { GlobalError } from 'core/components'
import 'antd/dist/reset.css'
import { withProviders } from './providers'
import { Router } from './router'
import './main.scss'

function App() {
  return (
    <>
      <GlobalError />
      <Router />
    </>
  )
}

export default withProviders(App)
