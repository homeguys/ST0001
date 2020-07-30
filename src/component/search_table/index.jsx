import React from 'react'
import { Table } from 'antd'
import './style.scss'

class SearchTable extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.pageSize = 6
  }

  render() {
    const {
      dataSource = {},
      columns = {},
      total,
      clickRow = () => {},
      rowClassName = () => {},
      pageSize,
      onPageChangePage = () => {},
      type,
      pageNum
    } = this.props
    return (
      <div className="search-table">
        <Table
          rowKey={(record) => (type === 'info' ? record.id : record.id)}
          columns={columns}
          dataSource={dataSource}
          pagination={{
            total,
            pageSize,
            current: pageNum,
            onChange: onPageChangePage
          }}
          rowClassName={rowClassName}
          onRow={(record, index) => ({
            onClick: (e) => clickRow(e, record, index)
          })}
        />
      </div>
    )
  }
}

export default SearchTable
