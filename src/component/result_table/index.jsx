import React from 'react'
import { Table } from 'antd'

function ResultTable(props) {
  const { columns = {}, dataSource = {}, rowClassName = '' } = props
  return (
    <section className="result-table">
      <Table columns={columns} dataSource={dataSource} rowClassName={rowClassName} />
    </section>
  )
}

export default ResultTable
