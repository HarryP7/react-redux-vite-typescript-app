import React from 'react'
import { Table, Button } from 'antd'
import { DataType } from '../interfaces'
import { columns } from './helpers'

interface Props {
  loading: boolean
  data: DataType[]
  setPage: React.Dispatch<React.SetStateAction<number>>
  page: number
}

export const CoinsTable: React.FC<Props> = ({
  loading,
  data,
  setPage,
  page,
}) => {
  const prevPage = () => setPage((p) => p - 1)
  const nextPage = () => setPage((p) => p + 1)

  return (
    <>
      <Button onClick={prevPage} disabled={!page}>
        Назад
      </Button>
      <Button onClick={nextPage} disabled={page === data?.length}>
        Далее
      </Button>
      <Table loading={loading} columns={columns} dataSource={data} />
    </>
  )
}
