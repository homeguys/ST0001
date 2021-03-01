import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import SelectTab from './component/selectTab'
import StatisticContent from './component/statisticContent'
import { getWaterStatisticData } from '../../../../../../store/waterInfo.redux'
import './style.scss'
/* 统计信息 */
export default function StatisticInfo() {
  // 乡镇数据
  const towns = [
    '德清县',
    '武康街道',
    '舞阳街道',
    '阜溪街道',
    '下渚湖街道',
    '乾元镇',
    '新市镇',
    '洛舍镇',
    '钟管镇',
    '雷甸镇',
    '禹越镇',
    '新安镇',
    '莫干山镇'
  ]
  const dispatch = useDispatch()
  useEffect(() => {
    // 初始化获取统计数据
    dispatch(getWaterStatisticData())
  }, [])
  return (
    <div className="water-statistic">
      <SelectTab tabList={towns} btnName="查看全县基础信息" type="statistic" />
      <StatisticContent />
    </div>
  )
}
