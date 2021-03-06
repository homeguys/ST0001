import React from 'react'
import { Table } from 'antd'

function ArchivalInfo(props) {
  const columns = [
    {
      title: '附件类别',
      dataIndex: 'name',
      key: 'name',
      align: 'center'
    },
    {
      title: '上传',
      dataIndex: 'company',
      key: 'company',
      align: 'center'
    },
    {
      title: '状态',
      dataIndex: 'tel',
      key: 'tel',
      align: 'center'
    }
  ]

  const data = [
    {
      key: 1,
      name: '1、项目法人要求涉河涉堤（占用水域）',
      company: 'aa',
      tel: '成功'
    },
    {
      key: 2,
      name: '1、项目法人要求涉河涉堤（占用水域）',
      company: 'aa',
      tel: '成功'
    },
    {
      key: 3,
      name: '1、项目法人要求涉河涉堤（占用水域）',
      company: 'aa',
      tel: '成功'
    },
    {
      key: 4,
      name: '1、项目法人要求涉河涉堤（占用水域）',
      company: 'aa',
      tel: '成功'
    },
    {
      key: 5,
      name: '1、项目法人要求涉河涉堤（占用水域）',
      company: 'aa',
      tel: '成功'
    },
    {
      key: 6,
      name: '1、项目法人要求涉河涉堤（占用水域）',
      company: 'aa',
      tel: '成功'
    },
    {
      key: 7,
      name: '8、项目法人要求涉河涉堤（占用水域）',
      company: 'aa',
      tel: '成功'
    }
  ]

  const { type } = props

  return (
    <section className="archival-info">
      <section className="modal-edit-title">
        档案信息
        <i />
        {type !== 'archives' ? (
          <button type="button" className="iconfont">
            &#xe68a;
          </button>
        ) : null}
      </section>
      <section className="content">
        <Table
          columns={columns}
          bordered
          dataSource={data}
          pagination={false}
          scroll={{ y: 185 }}
        />
      </section>
    </section>
  )
}

export default ArchivalInfo
