import React from 'react'
import { useSelector } from 'react-redux'
import StatisticInfo from './page/statisticInfo'
import DetailInfo from './page/detailInfo'
import './style.scss'
/* 水域信息 */
export default function WaterInfo() {
  const pageType = useSelector((state) => state.waterInfo.pageType)
  return (
    <div id="water-info">
      {
        pageType === 'statistic' ? <StatisticInfo /> : <DetailInfo />
      }
    </div>
  )
}
