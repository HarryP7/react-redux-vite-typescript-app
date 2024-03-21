import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'
import { BeersPage, CartPage, BeerDetailsPage, NotFound, CoinsPage } from 'pages'
import { Spin } from 'antd'
import { RouterPaths } from './enums'

const routerPath = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={RouterPaths.home} element={<BeersPage />} errorElement={<NotFound />} />
      <Route path={RouterPaths.productId} element={<BeerDetailsPage />} />
      <Route path={RouterPaths.cart} element={<CartPage />} />
      <Route path={RouterPaths.coins} element={<CoinsPage />} />
    </>
  )
)

export function Router() {
  return <RouterProvider router={routerPath} fallbackElement={<Spin />} />
}

