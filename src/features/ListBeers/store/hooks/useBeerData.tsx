import { useAppDispatch } from 'core/hooks'
import { axiosRequest } from 'core/helpers'
import { IBeer } from 'core'
import { actions } from '../'

interface IBeerRequestProps {
  page?: number
  // элементов на страничке
  perPage?: number
}

interface IGetResponseBeer {
  data: IBeer[]
}

export function useBeerData() {
  const dispatch = useAppDispatch()
  return ({ page = 1, perPage = 24 }: IBeerRequestProps) => {
    // записываем в стор, что идет загрузка данных с сервера
    dispatch(actions.setLoading(true))
    axiosRequest<IGetResponseBeer>({
      request: '/beers',
      params: {
        page,
        per_page: perPage,
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
      dispatch(actions.setError(error))
    })
  }
}
