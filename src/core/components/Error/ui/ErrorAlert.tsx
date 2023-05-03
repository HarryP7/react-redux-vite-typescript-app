import { Alert, Col, Row } from 'antd'
import { IErrorState } from '../store'

interface IErrorProps {
  error: IErrorState
}

export const ErrorAlert = ({ error }: IErrorProps) => {
  const { responseURL, status, statusText, message } = error
  return (
    <Alert
      message='Ошибка запроса'
      description={
        <Col>
          <Row>
            <b>Запрос: </b>&nbsp;<code>{responseURL}</code>
          </Row>
          {status !== 0 && (
            <Row>
              <b>Статус ответа:</b>&nbsp;{status} - {statusText}
            </Row>
          )}
          <Row>
            <b>Сообщение об ошибке:</b>&nbsp;{message}
          </Row>
        </Col>
      }
      type='error'
      showIcon
      closable
    />
  )
}