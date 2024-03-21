import axios from 'axios'
import { serversUrls } from 'core/config'

interface IAxiosRequest<T> {
  request: string
  params?: Record<string, string | number> | null
  method?: string
  data?: T | null
}

export async function axiosRequest<T>({
  request,
  params = null,
  method = 'get',
  data = null,
}: IAxiosRequest<T>) {
  return await axios({
    method,
    baseURL: serversUrls.apiUrlBeers,
    url: request,
    params,
    data,
  })
}