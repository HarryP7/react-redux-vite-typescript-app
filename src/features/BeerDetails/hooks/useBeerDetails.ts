import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'core/hooks'
import { axiosRequest } from 'core/axios'
import { actionsError } from 'core/components/Error'
import { IBeer } from 'features/ListBeers/interfaces'
import { useParams } from 'react-router-dom'
import { actions } from '../store'

interface IGetResponseBeer {
  data: IBeer[]
}

export const getBeerDetails = (state: RootState) => state.beerDetails

export function useBeerDetails() {
  const { productId } = useParams()
  const { beerDetails, loading, receivedId } = useAppSelector(getBeerDetails)
  const dispatch = useAppDispatch()
  const productIdNum = +(productId?.replace(':', '') ?? 0)

  useEffect(() => {
    if (loading || (beerDetails !== null && receivedId === productIdNum)) return
    // записываем в стор, что идет загрузка данных с сервера
    async function load() {
      dispatch(actions.setLoading(true))
      try {
        const { data }: IGetResponseBeer = await axiosRequest<IGetResponseBeer>(
          {
            request: `/beers/${productIdNum}`,
          }
        )
        //записываем в стор данные
        dispatch(actions.setBeerDetails(data[0]))
      } catch (error: any) {
        // сохраняем ошибку в сторе, чтобы отобразить на фронте
        dispatch(actionsError.setError(error))
      } finally {
        dispatch(actions.setLoading(false))
      }
    }
    load()
  }, [loading, beerDetails, receivedId, productIdNum, dispatch])

  return { beerDetails, loading }
}
