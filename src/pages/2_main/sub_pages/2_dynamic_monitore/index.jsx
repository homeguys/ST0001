import React from 'react'
import { useSelector } from 'react-redux'
import MonitorBase from './page/monitorBase'
import MonitorInfo from './page/monitorInfo'
import './style.scss'

/* 动态监测页面 */
export default function DynamicMonitore(props) {
  const pageType = useSelector((state) => state.monitor.pageType)
  const supervision = useSelector((state) => state.supervision)
  console.warn(supervision)
  return (
    <div className="page-content" id="dynamic-monitore">
      {pageType === 'base' ? <MonitorBase /> : <MonitorInfo />}
    </div>
  )
}
