import { useCallback } from 'react'
import { useAppDispatch, useAppSelector, useAxiosRequest } from 'core/hooks'
import { actionsError } from 'core/components/Error'
import { IBeer } from 'features/ListBeers/interfaces'
import { actions } from '../'

interface IGetResponseBeer {
  data: IBeer[]
}

export const getBeer = (state: RootState) => state.beer

export function useBeerData() {
  const { pageSize, page, loading } = useAppSelector(getBeer)
  const dispatch = useAppDispatch()
  const axiosRequest = useAxiosRequest<IGetResponseBeer>

  return useCallback(() => {
    if (loading) return
    // записываем в стор, что идет загрузка данных с сервера
    dispatch(actions.setLoading(true))
    axiosRequest({
      request: '/beers',
      params: {
        page,
        per_page: pageSize,
      },
    })
      .then(({ data }: IGetResponseBeer) => {
        //записываем в стор данные
        dispatch(actions.setBeerList(data))
        // и увеличиваем счетчик странички для запроса следующей
        dispatch(actions.setPage(page + 1))
      })
      .catch((error) => {
        // сохраняем ошибку в сторе, чтобы отобразить на фронте
        dispatch(actionsError.setError(error))
        dispatch(actions.setLoading(false))
      })
  }, [loading, pageSize, page, axiosRequest, dispatch])
}
