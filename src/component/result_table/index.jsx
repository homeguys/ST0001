import React from 'react'
import { Table } from 'antd'
import './style.scss'

function ResultTable(props) {
  const { columns = {}, dataSource = {}, rowClassName = '' } = props
  return (
    <section className="result-table">
      <ul className="nav-title">
        <li className="active">涉河涉堤审批项目</li>
        <li>规划调整监管项目</li>
      </ul>
      <Table columns={columns} dataSource={dataSource} rowClassName={rowClassName} />
    </section>
  )
}

export default ResultTable
