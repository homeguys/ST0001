import React from 'react'
import { Radio } from 'antd'

function ProjectStatus() {
  return (
    <section className="project-status">
      <section className="modal-edit-title">
        项目状态
        <i />
      </section>
      <section className="content">
        <Radio.Group value={1}>
          <Radio value={1}>未开工</Radio>
          <Radio value={2}>已开工</Radio>
          <Radio value={4}>已完成</Radio>
        </Radio.Group>
      </section>
    </section>
  )
}

export default ProjectStatus
