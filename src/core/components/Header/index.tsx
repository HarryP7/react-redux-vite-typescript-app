import { Col, Row } from 'antd'

interface IHeaderProps {
  content: React.ReactNode | string
}
export const Header = ({ content }: IHeaderProps) => (
  <Row>
    <Col>{content}</Col>
  </Row>
)