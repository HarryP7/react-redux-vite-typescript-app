import { Spin, Space, Button } from 'antd'

export const ShowMore = () => {
  return (
    <Space direction='vertical' style={{ width: '100%' }}>
      <Spin spinning={true}>
        <Button type='primary' block>
          Загружается еще
        </Button>
      </Spin>
    </Space>
  )
}