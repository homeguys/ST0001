
/* eslint-disable */
import React, { useState } from 'react'
import { Button } from 'antd'
import TableDisplay from '../../../../../component/tableDisplay'

/* 台账表格 */
export default function AccountTitle() {
  const defaultPagination = {
    current: 1,
    pageSize: 8
  }
  const [pagination, setPagination] = useState(defaultPagination)
  const dataSource = [
    {
      id: 1,
      name: '批文',
      connectAddress: '文本',
      accountAddress: '文本'
    },
    {
      id: 2,
      name: '报告',
      connectAddress: '文本',
      accountAddress: '文本'
    },
    {
      id: 3,
      name: '附图',
      connectAddress: '文本',
      accountAddress: '文本'
    },
    {
      id: 4,
      name: '附图2',
      connectAddress: '文本',
      accountAddress: '文本'
    },
    {
      id: 5,
      name: '附图3',
      connectAddress: '文本',
      accountAddress: '文本'
    },
    {
      id: 6,
      name: '附图4',
      connectAddress: '文本',
      accountAddress: '文本'
    },
    {
      id: 7,
      name: '附图5',
      connectAddress: '文本',
      accountAddress: '文本'
    },
    {
      id: 8,
      name: '附图6',
      connectAddress: '文本',
      accountAddress: '文本'
    },
    {
      id: 8,
      name: '附图7',
      connectAddress: '文本',
      accountAddress: '文本'
    }
  ]
  const columns = [
    {
      title: '台账编号',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '台账名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '连接地址',
      dataIndex: 'connectAddress',
      key: 'connectAddress',
    },
    {
      title: '台账地址',
      dataIndex: 'accountAddress',
      key: 'accountAddress',
    },
    {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      render: () => {
        return (
          <div>
            <Button>预览</Button>
            <Button>删除</Button>
          </div>
        )
      }
    }
  ]
  return (
    <div className="account-table">
      <TableDisplay
        recordId="id"
        classContent="table-info"
        columns={columns}
        dataSource={dataSource}
        pagination={pagination}
      />
    </div>
  )
}
