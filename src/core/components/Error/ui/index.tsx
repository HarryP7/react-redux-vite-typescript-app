import { useEffect } from 'react'
import { message } from 'antd'
import { useAppSelector } from 'core'
import { ErrorAlert } from './ErrorAlert'

export const GlobalError = () => {
  const [messageApi, messageHolder] = message.useMessage()
  const error = useAppSelector((state) => state.error)
  
  useEffect(() => {
    if (error.message !== '') {
      messageApi.open({
        content: <ErrorAlert error={error} />,
      })
    }
  }, [error, messageApi])

  return messageHolder
}