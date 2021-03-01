import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import WaterTypeOption from '../options/waterTypeOption'
import RegionOption from '../options/regionOption'
import RiverLevelOption from '../options/riverLevelOption'
import LakeLevelOption from '../options/lakeLevelOption'

/* 统计的内容 */
export default function StatisticContent() {
  const waterStatisticData = useSelector((state) => state.waterInfo.waterStatisticData)
  const waterTypeParams = {
    id: 'waterType',
    type: 'pie',
    className: 'char-box',
    names: '按水域类型查看',
    data: waterStatisticData.waterType
  }
  const regionParams = {
    id: 'regionType',
    type: 'pie',
    className: 'char-box',
    names: '按行政区域查看',
    data: waterStatisticData.region
  }
  const riverParams = {
    id: 'riverType',
    type: 'pie',
    className: 'char-box',
    names: '按河道等级查看',
    data: waterStatisticData.riverLevel
  }
  const lakeParams = {
    id: 'lakeType',
    type: 'pie',
    className: 'char-box',
    names: '按湖泊等级查看',
    data: waterStatisticData.lakeLevel
  }
  return (
    <div className="statistic-content">
      <div className="statistic-content-top-left">
        {
          waterTypeParams.data.length !== 0 ? <WaterTypeOption params={waterTypeParams} /> : null
        }
      </div>
      <div className="statistic-content-top-right">
        {
          regionParams.data.length !== 0 ? <RegionOption params={regionParams} /> : null
        }
      </div>
      <div className="statistic-content-bottom-left">
        {
          riverParams.data.length !== 0 ? <RiverLevelOption params={riverParams} /> : null
        }
      </div>
      <div className="statistic-content-bottom-right">
        {
          lakeParams.data.length !== 0 ? <LakeLevelOption params={lakeParams} /> : null
        }
      </div>
    </div>
  )
}
