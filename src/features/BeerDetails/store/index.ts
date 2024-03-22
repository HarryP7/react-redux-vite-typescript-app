import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { IBeer } from 'features/ListBeers/interfaces'

export interface IBeerDetailsState {
  beerDetails: IBeer | null
  loading: boolean
  receivedId: number | null
}

const initialState: IBeerDetailsState = {
  beerDetails: null,
  loading: false,
  receivedId: null,
}

const beerDetailsSlice = createSlice({
  name: 'beerDetails',
  initialState,
  reducers: {
    setBeerDetails: (state, action: PayloadAction<IBeer>) => {
      state.beerDetails = action.payload
      state.loading = false
      state.receivedId = action.payload.id
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
})

export const { actions } = beerDetailsSlice

export const beerDetailsReducer = beerDetailsSlice.reducer
