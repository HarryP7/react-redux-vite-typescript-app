import { Layout } from "antd"

interface ILayoutProps {
  content?: React.ReactNode
}

export const LayoutApp = ({ content }: ILayoutProps) => (
  <Layout style={{ height: '100vh' }}>
    {content}
  </Layout>
)