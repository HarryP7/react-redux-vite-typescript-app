import { useAppDispatch, useAppSelector, useAxiosRequest } from 'core/hooks'
import { IBeer } from 'core'
import { actions } from '../'
import { actionsError } from 'core/components/Error'

interface IBeerRequestProps {
  page: number
}

interface IGetResponseBeer {
  data: IBeer[]
}

export function useBeerData() {
  const { pageSize } = useAppSelector((state) => state.beer)
  const dispatch = useAppDispatch()
  const axiosRequest = useAxiosRequest<IGetResponseBeer>
  return ({ page }: IBeerRequestProps) => {
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
    })
  }
}
