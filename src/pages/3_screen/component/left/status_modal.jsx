import React from 'react'
import { Table } from 'antd'

function StatusModal(props) {
  const { type } = props

  const topColumns = [
    {
      title: '河道',
      dataIndex: 'data1',
      key: 'data1',
      width: 140
    },
    {
      title: '条数（条）',
      dataIndex: 'data2',
      key: 'data2',
      align: 'center'
    },
    {
      title: '长度（km）',
      dataIndex: 'data3',
      key: 'data3',
      align: 'center'
    },
    {
      title: '水域面积（km²）',
      dataIndex: 'data4',
      key: 'data4',
      align: 'center'
    },
    {
      title: '水域容积（m³）',
      dataIndex: 'data5',
      key: 'data5',
      align: 'center'
    }
  ]

  const topData = [
    {
      key: 1,
      data1: '省级河道',
      data2: 2,
      data3: 100,
      data4: 350983,
      data5: 350983
    },
    {
      key: 2,
      data1: '市级河道',
      data2: 2,
      data3: 100,
      data4: 350983,
      data5: 350983
    },
    {
      key: 3,
      data1: '乡级河道',
      data2: 2,
      data3: 100,
      data4: 350983,
      data5: 350983
    }
  ]

  const bottomColumns = [
    {
      title: '水库',
      dataIndex: 'data1',
      key: 'data1',
      width: 140
    },
    {
      title: '座数（座）',
      dataIndex: 'data2',
      key: 'data2',
      align: 'center'
    },
    {
      title: '水域面积（km²）',
      dataIndex: 'data4',
      key: 'data4',
      align: 'center'
    },
    {
      title: '水域容积（m³）',
      dataIndex: 'data5',
      key: 'data5',
      align: 'center'
    }
  ]

  const bottomData = [
    {
      key: 1,
      data1: '大型水库',
      data2: 2,
      data4: 350983,
      data5: 350983
    },
    {
      key: 2,
      data1: '中型水库',
      data2: 2,
      data4: 350983,
      data5: 350983
    },
    {
      key: 3,
      data1: '小（1）型水库',
      data2: 2,
      data4: 350983,
      data5: 350983
    },
    {
      key: 4,
      data1: '小（2）型水库',
      data2: 2,
      data4: 350983,
      data5: 350983
    },
    {
      key: 5,
      data1: '山塘',
      data2: 2,
      data4: 350983,
      data5: 350983
    }
  ]
  return (
    <section className={`status-modal ${type === 'horizon' ? type : ''}`}>
      <button type="button" className="close">
        X
      </button>
      <section className="sub-title">
        <span>水域现状统计信息</span>
      </section>
      <section className="top-table">
        <Table columns={topColumns} dataSource={topData} pagination={false} />
      </section>
      <section className="bottom-table">
        <Table columns={bottomColumns} dataSource={bottomData} pagination={false} />
      </section>
    </section>
  )
}

export default StatusModal
