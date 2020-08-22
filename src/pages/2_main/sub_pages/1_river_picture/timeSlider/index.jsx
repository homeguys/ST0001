import React from 'react'
import { Slider } from 'antd'
import { StepBackwardOutlined, StepForwardOutlined } from '@ant-design/icons'
import './style.scss'

/* 时间选择条 */
export default function TimeBar() {
  return (
    <div className="time-slider">
      <StepBackwardOutlined />
      <Slider
        defaultValue={30}
        tooltipVisible
      />
      <StepForwardOutlined />
    </div>
  )
}
