import { Alert, Col, Row } from 'antd'

export interface IErrorState {
  responseURL: string
  status: number
  statusText: string
  message: string
}

interface IErrorProps {
  error: IErrorState
}

export const Error = ({ error }: IErrorProps) => {
  const { responseURL, status, statusText, message } = error
  return (
    <Alert
      message='Ошибка запроса'
      description={
        <Col>
          <Row>
            <b>Запрос:</b>&nbsp; <code>{responseURL}</code>
          </Row>
          <Row>
            <b>Статус ответа:</b>&nbsp; {status} - {statusText}
          </Row>
          <Row>
            <b>Сообщение об ошибке:</b>&nbsp; {message}
          </Row>
        </Col>
      }
      type='error'
      showIcon
      closable
    />
  )
}
