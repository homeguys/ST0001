import React from 'react'
import { Modal } from 'antd'
import BasicInfo from './basic_info'
import PatchInput from './patch_input'
import DynamicDetection from './dynamic_detection'
import ProjectStatus from './project_status'
import SummaryApproval from './summary_approval'
import ArchivalInfo from './archival_info'

function ModalEdit(props) {
  const { visible = true, handleOk, handleCancel } = props

  return (
    <Modal
      title={null}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      wrapClassName="modal-edit"
    >
      <section className="left">
        <BasicInfo />
        <PatchInput />
      </section>
      <section className="right">
        <DynamicDetection />
        <ProjectStatus />
        <SummaryApproval />
        <ArchivalInfo />
      </section>
      <section className="btns">
        <button type="button">提交</button>
        <button type="button" onClick={handleCancel}>
          取消
        </button>
      </section>
    </Modal>
  )
}

export default ModalEdit
