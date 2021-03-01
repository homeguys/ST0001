import React from 'react'
import { Modal, Form, Input, DatePicker } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { changeAddModalVisible } from '../../../../../store/account.redux'

/* 台账弹框 */
export default function AccountModal() {
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const addModalVisible = useSelector((state) => state.account.addModalVisible) // 显影状态
  const handleOk = () => {
    dispatch(changeAddModalVisible(false))
  }
  const handleCancel = () => {
    dispatch(changeAddModalVisible(false))
  }
  return (
    <Modal
      title="添加台账"
      className="add-account-modal"
      visible={addModalVisible}
      okText="提交"
      cancelText=""
      onCancel={handleCancel}
      onOk={handleOk}
    >
      <Form form={form} layout="horizontal">
        <Form.Item
          label="台账名称"
          name="name"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="代码"
          name="code"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="创建时间"
          name="createTime"
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="更新时间"
          name="updateTime"
        >
          <DatePicker />
        </Form.Item>
      </Form>
    </Modal>
  )
}
