import React from 'react'
import { useDispatch } from 'react-redux'
import { Input, Button, Form, DatePicker } from 'antd'
import { changeAddModalVisible } from '../../../../../store/account.redux'

const { RangePicker } = DatePicker
/* 台账头部 */
export default function AccountTitle() {
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  // 添加台账点击
  const addClick = () => {
    dispatch(changeAddModalVisible(true))
  }
  return (
    <div className="account-title">
      <section className="account-title-left">
        <Form form={form} layout="inline">
          <Form.Item
            label="名称"
            name="name"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="创建日期"
            name="date"
          >
            <RangePicker />
          </Form.Item>
        </Form>
        <Button type="info">查询</Button>
      </section>
      <section className="account-title-right">
        <Button type="info">搜索</Button>
        <Button type="info">批量导入</Button>
        <Button type="info" onClick={addClick}>添加台账</Button>
        <Button type="info">批量删除</Button>
      </section>
    </div>
  )
}
