/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import TableDisplay from '../../../../../../../component/tableDisplay'
import fieldConfig from './fieldConfig'

/* 表格详情 */
export default function DetailTable() {
  const defaultPagination = {
    current: 1,
    pageSize: 8
  }

  const [pagination, setPagination] = useState(defaultPagination)
  const selectLayer = useSelector((state) => state.waterInfo.selectLayer)
  const layerInfoData = useSelector((state) => state.waterInfo.layerInfoData)
  const layerFields = useSelector((state) => state.waterInfo.layerFields)
  const columns = layerFields
  useEffect(() => {
    const operateColums = {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      render: (text, record) => <span>定位</span>
    }
    columns.push(operateColums)
    console.warn(columns)
  }, [])
  return (
    <div className="detail-content">
      <TableDisplay 
        recordId="id"
        classContent="table-info"
        columns={columns}
        dataSource={layerInfoData}
        pagination={pagination}
      />
    </div>
  )
}
