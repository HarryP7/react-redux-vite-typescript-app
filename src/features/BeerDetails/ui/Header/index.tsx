import { Typography } from 'antd'
import { PropsWithChildren } from 'react'

const { Title } = Typography

interface Props {
  title?: string
}

export function Header({ title }: PropsWithChildren<Props>) {
  return <Title level={4}>{title}</Title>
}
