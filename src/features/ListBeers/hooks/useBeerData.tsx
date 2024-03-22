import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from 'core/hooks'
import { axiosRequest } from 'core/axios'
import { actionsError } from 'core/components/Error'
import { IBeer } from 'features/ListBeers/interfaces'
import { actions } from '../store'

interface IGetResponseBeer {
  data: IBeer[]
}

export const getBeerList = (state: RootState) => state.beerList

export function useBeerData() {
  const { pageSize, page, loading } = useAppSelector(getBeerList)
  const dispatch = useAppDispatch()

  return useCallback(() => {
    if (loading) return
    // записываем в стор, что идет загрузка данных с сервера
    dispatch(actions.setLoading(true))
    axiosRequest<IGetResponseBeer>({
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
  }, [loading, pageSize, page, dispatch])
}
