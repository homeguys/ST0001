import React from 'react'
import LayerTree from './layerTree' // 图层控制树
import LayerInfo from './layerInfo' // 图层信息
import Toolbar from './toolbar' // 地图容器
import TimeSlider from './timeSlider' // 时间选择条
import LayerControl from './layerControl' // 图层选择
import './style.scss'

/* 河湖一张图 */
export default function index() {
  return (
    <div className="riverPicture" id="riverPicture">
      <LayerTree />
      <LayerInfo />
      <div className="mapContainer">
        <Toolbar />
        <TimeSlider />
        <LayerControl />
      </div>
    </div>
  )
}
