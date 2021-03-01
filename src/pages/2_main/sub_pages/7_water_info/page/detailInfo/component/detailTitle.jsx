import React from 'react'
import { useDispatch } from 'react-redux'
import { Input, Button } from 'antd'
import { changeConfigVisible } from '../../../../../../../store/waterInfo.redux'

/* 详情title */
export default function Detailtitle() {
  const dispatch = useDispatch()
  const handleClick = (e, type) => {
    console.warn(type)
    if (type === 'config') {
      // 显示配置
      dispatch(changeConfigVisible(true))
    } else if (type === 'print') {
      // 打印
    } else if (type === 'export') {
      // 导出
    }
  }
  return (
    <div className="detail-title">
      <section className="detail-title-query">
        <span>山塘名称：</span>
        <Input />
        <Button type="primary">查询</Button>
      </section>
      <section className="detail-title-operate">
        <Button type="primary" onClick={(v) => { handleClick(v, 'config') }}>显示配置</Button>
        <Button type="primary" onClick={(v) => { handleClick(v, 'print') }}>打印</Button>
        <Button type="primary" onClick={(v) => { handleClick(v, 'export') }}>导出</Button>
      </section>
    </div>
  )
}
