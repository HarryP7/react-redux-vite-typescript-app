import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

type DispatchFunc = () => AppDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: DispatchFunc = useDispatch