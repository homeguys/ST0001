import React from 'react'
import PieOption from '../../../options/pieOption'

/* 监测图表 */
export default function MonitorPie(props) {
  const { dataSource } = props
  const initParams = {
    id: 'charBox',
    type: 'pie',
    className: 'char-box',
    name: '地表变化统计图',
    data: dataSource
  }
  return (
    <div className="char-content">
      <article>地表变化统计图</article>
      {
        initParams.data.length !== 0 ? <PieOption params={initParams} /> : null
      }
    </div>
  )
}
