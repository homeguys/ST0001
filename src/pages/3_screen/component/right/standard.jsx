/* eslint-disable camelcase */
import React from 'react'

function Standard(props) {
  const { statisticsManageInfo } = props
  const {
    OV_Date = '',
    OV_WaterRegionPlanRatio = '',
    OV_WaterRegionPlanArea = '',
    OV_WaterRegionActualRatio = '',
    OV_WaterRegionActualArea = ''
  } = statisticsManageInfo
  const year = new Date(OV_Date).getFullYear()

  return (
    <section className="block standard">
      <section className="title">
        {year}
        年水域规划基准
      </section>
      <section className="content">
        <ul>
          <li>
            <span>规划水面率</span>
            <span>{`${OV_WaterRegionPlanRatio}%`}</span>
          </li>
          <li>
            <span>规划水域面积</span>
            <span>{`${OV_WaterRegionPlanArea}%`}</span>
          </li>
          <li>
            <span>即时水面率</span>
            <span>{`${OV_WaterRegionActualRatio}%`}</span>
          </li>
          <li>
            <span>即时水域面积</span>
            <span>{`${OV_WaterRegionActualArea}%`}</span>
          </li>
        </ul>
      </section>
    </section>
  )
}

export default Standard
