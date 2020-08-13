import React from 'react'
import { Form, Select, Input } from 'antd'

const { Option } = Select

function BasicInfo() {
  let size
  const { clientWidth } = document.body
  if (clientWidth < 1920) {
    size = 'small'
  } else {
    size = 'middle'
  }

  return (
    <section className="basic-info">
      <section className="modal-edit-title">
        基本信息
        <i />
      </section>

      <section className="content">
        <Form>
          <Form.Item label="占用单位或个人" name="year1">
            <Input allowClear style={{ width: '1.73rem' }} size={size} />
          </Form.Item>
          <Form.Item label="项目名称或占用原因" name="year2">
            <Input allowClear style={{ width: '1.73rem' }} size={size} />
          </Form.Item>
          <Form.Item label="审批文号" name="year3">
            <Input allowClear style={{ width: '1.73rem' }} size={size} />
          </Form.Item>
          <Form.Item label="补偿措施" name="year4">
            <Select placeholder="请选择下拉" size={size}>
              <Option key={123} value={123}>
                {123}
              </Option>
            </Select>
          </Form.Item>
          <Form.Item label="审批的行政主管部门" name="year5">
            <Select placeholder="请选择下拉" size={size}>
              <Option key={123} value={123}>
                {123}
              </Option>
            </Select>
          </Form.Item>
          <Form.Item label="项目联系人及电话" name="year6">
            <Input allowClear style={{ width: '1.73rem' }} size={size} />
          </Form.Item>
          <Form.Item label="审批占用面积（㎡）" name="year7">
            <Input allowClear style={{ width: '1.73rem' }} size={size} />
          </Form.Item>
          <Form.Item label="占用时间" name="year8">
            <Select placeholder="请选择下拉" size={size}>
              <Option key={123} value={123}>
                {123}
              </Option>
            </Select>
          </Form.Item>
          <Form.Item label="是否属于基础设施" name="year9">
            <Input allowClear style={{ width: '1.73rem' }} size={size} />
          </Form.Item>
          <Form.Item label="审批补偿面积（㎡）" name="year10">
            <Input allowClear style={{ width: '1.73rem' }} size={size} />
          </Form.Item>
          <Form.Item label="审批时间" name="year11">
            <Select placeholder="请选择下拉" size={size}>
              <Option key={123} value={123}>
                {123}
              </Option>
            </Select>
          </Form.Item>
          <Form.Item label="占用项目类型" name="year12">
            <Input allowClear style={{ width: '1.73rem' }} size={size} />
          </Form.Item>
          <Form.Item label="货币补偿（万元）" name="year13">
            <Input allowClear style={{ width: '1.73rem' }} size={size} />
          </Form.Item>
          <Form.Item label="水域保护等级" name="year14">
            <Select placeholder="请选择下拉" size={size}>
              <Option key={123} value={123}>
                {123}
              </Option>
            </Select>
          </Form.Item>
          <Form.Item label="报告编制单位报告编制单位报告编制单位" name="year15">
            <Input allowClear style={{ width: '1.73rem' }} size={size} />
          </Form.Item>
        </Form>
      </section>
    </section>
  )
}

export default BasicInfo
