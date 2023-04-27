import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AxiosError, AxiosRequestHeaders, AxiosResponse } from 'axios'
import { IErrorState } from 'core/components/Error'
import { IBeer } from 'core/types'
import { hooks } from './hooks'

export interface IBeersState {
  beerItems: IBeer[]
  loading: boolean
  page: number
  error: IErrorState | null
}

const initialState: IBeersState = {
  beerItems: [],
  loading: false,
  page: 1,
  error: null,
}

const beerSlice = createSlice({
  name: 'beer',
  initialState,
  reducers: {
    setBeerList: (state, action: PayloadAction<IBeer[]>) => {
      state.beerItems = [...state.beerItems, ...action.payload]
      state.loading = false
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setError: (
      state,
      action: PayloadAction<AxiosError<AxiosRequestHeaders, AxiosResponse>>
    ) => {
      state.error = {
        responseURL: action.payload.request.responseURL,
        status: action.payload.request.status,
        statusText: action.payload.response?.data.error,
        message: action.payload.response?.data.message,
      }
    },
  },
})

export const { actions } = beerSlice

export const beerReducer = beerSlice.reducer

export const { useBeerData } = hooks
