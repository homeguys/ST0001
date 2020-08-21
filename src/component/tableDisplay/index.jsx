import React from 'react'
import { Table } from 'antd'

/* 公共表格 */
export default function TableDisplay(props) {
  const { classContent, dataSource, columns, pagination, recordId } = props
  return (
    <div className="table-content">
      <Table
        rowKey={(record) => record[recordId]}
        className={classContent}
        dataSource={dataSource}
        columns={columns}
        pagination={pagination}
      />
    </div>
  )
}
