import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import SelectTab from '../statisticInfo/component/selectTab'
import DetailTitle from './component/detailTitle'
import DetailTable from './component/detailTable'
import DetailModal from './component/detailModal'
import { getWaterLayerInfoData } from '../../../../../../store/waterInfo.redux'
import './style.scss'

/* 水域详细信息 */
export default function DetailInfo() {
  // 图层数据
  const layers = [
    '综合信息',
    '河道',
    '湖泊',
    '山塘',
    '水库',
    '人工水道',
    '其他水域'
  ]
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getWaterLayerInfoData({ layerType: 'river' }))
  }, [])
  return (
    <div className="water-statistic">
      <SelectTab tabList={layers} btnName="返回" type="info" />
      <div className="detail-content">
        <DetailTitle />
        <DetailTable />
        <DetailModal />
      </div>
    </div>
  )
}
