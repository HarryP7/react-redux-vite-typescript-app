import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'
import { HomePage, BeersPage, CartPage, BeerDetailsPage, NotFound, CoinsPage } from 'pages'
import { Spin } from 'antd'
import { routerPaths } from './enums'

const routerPath = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={routerPaths.home} element={<HomePage />} errorElement={<NotFound />} />
      <Route path={routerPaths.beers} element={<BeersPage />} />
      <Route path={routerPaths.productId} element={<BeerDetailsPage />} />
      <Route path={routerPaths.cart} element={<CartPage />} />
      <Route path={routerPaths.coins} element={<CoinsPage />} />
    </>
  )
)

export function Router() {
  return <RouterProvider router={routerPath} fallbackElement={<Spin />} />
}

