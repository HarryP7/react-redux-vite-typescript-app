import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getBeer, hooks } from './hooks'
import { IBeer } from '../interfaces'

export interface IBeersState {
  beerItems: IBeer[]
  loading: boolean
  hasMore: boolean
  page: number
  pageSize: number
}

const initialState: IBeersState = {
  beerItems: [],
  loading: false,
  hasMore: true,
  page: 1,
  // элементов на страничке
  pageSize: 24,
}

const beerSlice = createSlice({
  name: 'beer',
  initialState,
  reducers: {
    setBeerList: (state, action: PayloadAction<IBeer[]>) => {
      state.beerItems = [...state.beerItems, ...action.payload]
      state.hasMore = action.payload.length === state.pageSize
      state.loading = false
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
  },
})

export const { actions } = beerSlice

export const beerReducer = beerSlice.reducer

export const { useBeerData } = hooks

export { getBeer }