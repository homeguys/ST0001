import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, Select, Button, Space } from 'antd'
import { changeSupervisionSin } from '../../../../store/main/supervision.redux'

const { Option } = Select

function SearchBox(props) {
  const { changeSupervisionSin } = props
  const onFinish = (values) => {
    console.warn('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.warn('Failed:', errorInfo)
  }

  const addProject = () => {
    changeSupervisionSin(['editModalVisible', true])
  }

  return (
    <section className="search-box">
      <Form initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item label="名称" name="name">
          <Input allowClear style={{ width: '1.15rem' }} />
        </Form.Item>
        <Form.Item label="年份" name="year">
          <Select placeholder="请选择下拉">
            <Option key={123} value={123}>
              {123}
            </Option>
          </Select>
        </Form.Item>
        <Form.Item label="项目进度" name="username">
          <Select placeholder="请选择下拉">
            <Option key={123} value={123}>
              {123}
            </Option>
          </Select>
        </Form.Item>
        <Form.Item label="占用时间" name="time">
          <Select placeholder="请选择下拉">
            <Option key={123} value={123}>
              {123}
            </Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
        </Form.Item>
      </Form>

      <Space>
        <Button>批量导入</Button>
        <Button onClick={addProject}>添加项目</Button>
      </Space>
    </section>
  )
}

export default connect((state) => ({ supervision: state.supervision }), { changeSupervisionSin })(
  SearchBox
)
