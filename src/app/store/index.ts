import { configureStore } from '@reduxjs/toolkit'
import { beerReducer } from 'features/ListBeers'
import { errorReducer } from 'core/components/Error'

export const store = configureStore({
  reducer: { beer: beerReducer, error: errorReducer },
})
