import React from 'react'
import { Checkbox } from 'antd'
import './style.scss'
/* 图层选择框 */
export default function LayerControl() {
  const handleChange = (e, type) => {
    const { checked } = e.target
    console.warn(type)
  }
  return (
    <div className="layer-control">
      <div className="layer-control-title">图层</div>
      <div className="layer-control-content">
        <div className="layer-control-content-title">基础图层</div>
        <div className="layer-control-content-list">
          <Checkbox
            onChange={(v) => { handleChange(v, 'region') }}
          >
            行政区域
          </Checkbox>
          <Checkbox
            onChange={(v) => { handleChange(v, 'littlePlace') }}
          >
            小地名
          </Checkbox>
          <Checkbox
            onChange={(v) => { handleChange(v, 'village') }}
          >
            村名
          </Checkbox>
        </div>
        <div className="layer-control-content-title">项目状态</div>
        <div className="layer-control-content-list">
          <Checkbox
            onChange={(v) => { handleChange(v, 'state1') }}
          >
            未开工
          </Checkbox>
          <Checkbox
            onChange={(v) => { handleChange(v, 'state2') }}
          >
            已完成
          </Checkbox>
          <Checkbox
            onChange={(v) => { handleChange(v, 'state3') }}
          >
            在施工
          </Checkbox>
          <Checkbox
            onChange={(v) => { handleChange(v, 'state4') }}
          >
            违规
          </Checkbox>
        </div>
      </div>
    </div>
  )
}
