import React from 'react'
import { Table, Select } from 'antd'

const { Option } = Select

const data = [
  {
    key: 1,
    name: '双槽斗河道',
    company: '790',
    tel: 800,
    waters: '2019-07-18'
  },
  {
    key: 2,
    name: '核查结果',
    company: '建设违规'
  }
]

const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {}
  }
  if (index === 1) {
    obj.props.colSpan = 0
  }
  return obj
}

function DynamicDetection() {
  const columns = [
    {
      title: '所在水域',
      dataIndex: 'name',
      key: 'name',
      align: 'center'
    },
    {
      title: '实际占用面积(㎡)',
      dataIndex: 'company',
      key: 'company',
      align: 'center',
      render: (text, row, index) => {
        console.warn(index)
        if (index < 1) {
          return text
        }
        return {
          children: (
            <Select style={{ width: '80%' }} defaultValue="3">
              <Option value="0">未开工</Option>
              <Option value="1">已开工</Option>
              <Option value="2">已完成</Option>
              <Option value="3">违规建设</Option>
            </Select>
          ),
          props: {
            colSpan: 3
          }
        }
      }
    },
    {
      title: '实际补偿面积(㎡)',
      dataIndex: 'tel',
      key: 'tel',
      align: 'center',
      render: renderContent
    },
    {
      title: '最近一次检测时间',
      key: 'waters',
      dataIndex: 'waters',
      align: 'center',
      render: renderContent
    }
  ]

  return (
    <section className="dynamic-detection">
      <section className="modal-edit-title">
        动态监测信息
        <i />
      </section>
      <section className="content">
        <Table columns={columns} bordered dataSource={data} pagination={false} />
      </section>
    </section>
  )
}

export default DynamicDetection
