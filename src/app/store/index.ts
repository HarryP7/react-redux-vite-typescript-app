import { configureStore } from '@reduxjs/toolkit'
import { beerReducer } from 'features/ListBeers'

export const store = configureStore({
  reducer: { beer: beerReducer }
})
