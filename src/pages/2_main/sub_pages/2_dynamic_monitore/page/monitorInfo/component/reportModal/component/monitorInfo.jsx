/* eslint-disable */
import React from 'react'
import { Switch } from 'antd'
import TableDisplay from '../../../../../../../../../component/tableDisplay'

/* 监测信息 */
export default function MinitorInfo() {
  const columns = [
    {
      title: '图斑',
      dataIndex: 'spotCode',
      key: 'spotCode'
    },
    {
      title: '所属乡镇',
      dataIndex: 'town',
      key: 'town',
    },
    {
      title: '第一次图像获取时间',
      dataIndex: 'firstTime',
      key: 'firstTime',
    },
    {
      title: '第二次图像获取时间',
      dataIndex: 'secondTime',
      key: 'secondTime',
    },
    {
      title: '变化前类型',
      dataIndex: 'preType',
      key: 'preType',
    },
    {
      title: '变化后类型',
      dataIndex: 'afterType',
      key: 'afterType',
    },
    {
      title: '变化面积(㎡)',
      dataIndex: 'changeArea',
      key: 'changeArea',
    },
    {
      title: '变化面积(亩)',
      dataIndex: 'changeAreaMu',
      key: 'changeAreaMu',
    },
    {
      title: '位置',
      dataIndex: 'address',
      key: 'afterType',
    },
    {
      title: '经纬度',
      dataIndex: 'lonlat',
      key: 'lonlat',
    },
    {
      title: '是否审批',
      dataIndex: 'isApprove',
      key: 'isApprove',
      render: () => {
        return (
          <Switch />
        )
      }
    },
  ]

  const dataSource = [
    {
      spotCode: 4,
      town: '洛社镇',
      firstTime: '20121026',
      secondTime: '20150210',
      preType: '池塘',
      afterType: '耕地',
      changeArea: 1233985,
      changeAreaMu: 200.9,
      address: '浙江皮革城南侧',
      lonlat: '120.114E,30.6126N'
    }
  ]
  return (
    <div className="monitor-info">
      <TableDisplay
        recordId="spotCode"
        classContent="table-info"
        columns={columns}
        dataSource={dataSource}
        pagination={false}
      />
    </div>
  )
}
