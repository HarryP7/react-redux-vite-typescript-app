import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { IBeer } from 'features/ListBeers/interfaces'

export interface ICartState {
  beerItems: IBeer[]
}

const initialState: ICartState = {
  beerItems: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartList: (state, action: PayloadAction<IBeer>) => {
      console.log('state', state, 'action', action)
      state.beerItems = [...state.beerItems, action.payload]
    },
  },
})

export const { actions } = cartSlice

export const cartReducer = cartSlice.reducer

export const getCart = (state: RootState) => state.cart
