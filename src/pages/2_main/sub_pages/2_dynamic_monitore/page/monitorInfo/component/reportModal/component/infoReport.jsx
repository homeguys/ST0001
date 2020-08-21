import React from 'react'
import { Form, Radio, Input } from 'antd'


export default function InfoReport() {
  const [form] = Form.useForm()

  const projectType = [
    '房产开发',
    '水利',
    '工业',
    '农业',
    '商业',
    '交通运输',
    '景观休闲',
    '无序占用',
    '其他'
  ] // 占用项目类型

  const infrastructure = [
    '基础设施',
    '非基础设施'
  ] // 是否属于基础

  const occupyTime = [
    '永久性占用',
    '临时性占用'
  ] // 占用时间

  const protectLevel = [
    '重要水域',
    '一般水域'
  ] // 水域保护等级

  const chaosType = [
    '乱堆',
    '乱占',
    '乱建',
    '乱采'
  ] // 四乱类型

  const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 }
  }
  return (
    <div className="info-report">
      <p className="title-name">
        <span>信息填报</span>
      </p>
      <Form form={form} layout="vertical">
        <Form.Item
          label="图斑号"
          name="spotCode"
        >
          <span>图斑4</span>
        </Form.Item>
        <Form.Item
          label="审批的其他部门"
          name="approveDepartment"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="拟采取处理措施"
          name="measures"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="项目名称或占用原因"
          name="nameOrReason"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="占用单位或个人"
          name="companyOrPerson"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="占用项目类型"
          name="projectType"
        >
          <Radio.Group>
            {
              projectType.map((item) => <Radio key={`projectType${item}`} value={item}>{item}</Radio>)
            }
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="是否基础设施建设"
          name="infrastructure"
        >
          <Radio.Group>
            {
              infrastructure.map((item) => <Radio key={`infrastructure${item}`} value={item}>{item}</Radio>)
            }
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="占用时间"
          name="occupyTime"
        >
          <Radio.Group>
            {
              occupyTime.map((item) => <Radio key={`occupyTime${item}`} value={item}>{item}</Radio>)
            }
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="占用水域面积(㎡)"
          name="waterArea"
        >
          <span>133954</span>
        </Form.Item>
        <Form.Item
          label="水域保护等级"
          name="protectLevel"
        >
          <Radio.Group>
            {
              protectLevel.map((item) => <Radio key={`protectLevel${item}`} value={item}>{item}</Radio>)
            }
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="四乱类型"
          name="chaosType"
        >
          <Radio.Group>
            {
              chaosType.map((item) => <Radio key={`chaosType${item}`} value={item}>{item}</Radio>)
            }
          </Radio.Group>
        </Form.Item>
      </Form>
    </div>
  )
}
