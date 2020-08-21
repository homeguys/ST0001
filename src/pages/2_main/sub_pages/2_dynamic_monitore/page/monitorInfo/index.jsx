import React from 'react'
import MonitorInfoSearch from './component/monitorInfoSearch'
import MonitorInfoMap from './component/monitorInfoMap'
import './style.scss'

export default function MonitorInfo() {
  return (
    <div className="page-content monitor-info">
      <MonitorInfoSearch />
      <MonitorInfoMap />
    </div>
  )
}
