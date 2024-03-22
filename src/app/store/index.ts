import { configureStore } from '@reduxjs/toolkit'
import { beerListReducer } from 'features/ListBeers'
import { beerDetailsReducer } from 'features/BeerDetails'
import { errorReducer } from 'core/components/Error'
import { cartReducer } from 'widgets/NavigationBar/store'

export const store = configureStore({
  reducer: {
    beerList: beerListReducer,
    beerDetails: beerDetailsReducer,
    cart: cartReducer,
    error: errorReducer,
  },
})
