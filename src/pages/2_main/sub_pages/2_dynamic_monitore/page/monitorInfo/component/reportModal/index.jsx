import React from 'react'
import { Modal } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { changeReportVisible } from '../../../../../../../../store/monitor.redux'
import MonitorInfo from './component/monitorInfo'
import InfoReport from './component/infoReport'
import UploadFile from './component/uploadFile'
import './style.scss'

/* 上报弹出框 */
export default function ReportModal() {
  // 菜单数据
  const dispatch = useDispatch()
  const reportVisible = useSelector((state) => state.monitor.reportVisible) // 显影状态

  // 确定
  const handleOk = () => {
    dispatch(changeReportVisible(false))
  }

  // 取消
  const handleCancel = () => {
    dispatch(changeReportVisible(false))
  }
  return (
    <Modal
      title="监测信息"
      className="report-modal"
      visible={reportVisible}
      okText="提交上报"
      cancelText=""
      onCancel={handleCancel}
      onOk={handleOk}
    >
      <MonitorInfo />
      <InfoReport />
      <UploadFile />
    </Modal>
  )
}
