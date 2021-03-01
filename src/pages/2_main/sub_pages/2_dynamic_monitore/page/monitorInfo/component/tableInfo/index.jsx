/*eslint-disable*/
import React, { useState } from 'react'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import TableDisplay from '../../../../../../../../component/tableDisplay'
import { changeReportVisible } from '../../../../../../../../store/monitor.redux'
import './style.scss'
/* 表格内容 */
export default function TableInfo () {
  const dispatch = useDispatch()
  const defaultPagination = {
    current: 1,
    pageSize: 10
  }

  const [pagination, setPagination] = useState(defaultPagination)
  const columns = [
    {
      title: '图斑编号',
      dataIndex: 'spotCode',
      key: 'spotCode',
      width: 65
    },
    {
      title: '变化类型',
      dataIndex: 'changeType',
      key: 'changeType',
    },
    {
      title: '变化面积(㎡)',
      dataIndex: 'changeArea',
      key: 'changeArea',
    },
    {
      title: '四乱类',
      dataIndex: 'chaosType',
      key: 'chaosType',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (text) => {
        return text === '未处理' ? <span style={{ color: 'red' }}>{text}</span> : <span style={{ color: 'green' }}>{text}</span>
      }
    },
    {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      render: (text, record) => {
        return record.status === '未处理' ? <Button onClick={reportClick} icon={<PlusOutlined />} type="primary">填报</Button> : null
      }
    }
  ]
  const dataSource = [
    {
      spotCode: 1,
      changeType: '增加',
      changeArea: '235.87',
      chaosType: '乱堆',
      status: '已处理',
    },
    {
      spotCode: 2,
      changeType: '减少',
      changeArea: '500',
      chaosType: '乱占',
      status: '未处理',
    },
    {
      spotCode: 3,
      changeType: '减少',
      changeArea: '1300',
      chaosType: '乱占',
      status: '未处理',
    },
    {
      spotCode: 4,
      changeType: '减少',
      changeArea: '1233',
      chaosType: '乱建',
      status: '未处理',
    },
    {
      spotCode: 5,
      changeType: '减少',
      changeArea: '900',
      chaosType: '乱建',
      status: '未处理',
    },
    {
      spotCode: 6,
      changeType: '减少',
      changeArea: '4687',
      chaosType: '乱建',
      status: '未处理',
    },
    {
      spotCode: 7,
      changeType: '减少',
      changeArea: '54',
      chaosType: '乱建',
      status: '未处理',
    }
  ]

  // 上报点击
  const reportClick = () => {
    // 弹框
    dispatch(changeReportVisible(true))
    // 接收数据
  }
  return (
    <TableDisplay
      recordId="spotCode"
      classContent="table-info"
      columns={columns}
      dataSource={dataSource}
      pagination={pagination}
    />
  )
}
