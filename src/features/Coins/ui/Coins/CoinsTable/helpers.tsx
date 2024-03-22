import { TableProps } from 'antd'
import { DataType } from '../interfaces'

export const columns: TableProps<DataType>['columns'] = [
  {
    title: '№',
    dataIndex: 'rank',
    key: 'rank',
  },
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
    render: (_, record) => (
      <>
        <img style={{ height: 30, width: 30 }} src={record.icon} />
        {' ' + record.name}
      </>
    ),
  },
  {
    title: 'Цена',
    dataIndex: 'price',
    key: 'price',
    render: (text) => text && <code>$ {text.toFixed(2)}</code>,
  },
]
