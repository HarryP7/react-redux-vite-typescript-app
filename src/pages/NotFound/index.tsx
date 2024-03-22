import { useRouteError, useNavigate } from 'react-router-dom'
import { Button, Result } from 'antd'
import { RouterPaths } from 'app/router'

export function NotFound() {
  const error: any = useRouteError()
  const navigate = useNavigate()
  console.error(error)

  return (
    <div id='not-found-page'>
      <Result
        status='404'
        title='Извините, страница, которую вы посетили, не существует.'
        subTitle={error.statusText || error.message}
        extra={
          <Button type='primary' onClick={() => navigate(RouterPaths.home)}>
            Вернуться на главную
          </Button>
        }
      />
    </div>
  )
}
