import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AxiosError, AxiosRequestHeaders, AxiosResponse } from 'axios'

export interface IErrorState {
  responseURL: string
  status: number
  statusText: string
  message: string
}

const initialState: IErrorState = {
  responseURL: '',
  status: 0,
  statusText: '',
  message: '',
}

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (
      state,
      action: PayloadAction<AxiosError<AxiosRequestHeaders, AxiosResponse>>
    ) => {
      const {
        request: { responseURL, status },
        response,
        message,
        config,
      } = action.payload

        state.responseURL = responseURL || `${config?.baseURL}${config?.url}`
        state.status = status
        state.statusText = response?.data.error
        state.message = response?.data.message ?? message
    },
  },
})

export const { actions: actionsError } = errorSlice
export const errorReducer = errorSlice.reducer