import axios from 'axios'
import { serversUrls } from 'core/config'

interface IAxiosRequest<T> {
  request: string
  params?: Record<string, string | number> | null
  method?: string
  data?: T | null
}

export async function useAxiosRequest<T>({
  request,
  params = null,
  method = 'get',
  data = null,
}: IAxiosRequest<T>) {
  return await axios({
    method,
    baseURL: serversUrls.apiUrl,
    url: request,
    params,
    data,
  })
}