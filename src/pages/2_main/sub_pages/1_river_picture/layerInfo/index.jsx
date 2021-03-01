/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tabs, Radio } from 'antd'
import { changeSelectedPanes } from '../../../../../store/riverPic.redux'
import BaseInfo from './baseInfo'
import LayerItemInfo from './layerItemInfo'
import './style.scss'

const { TabPane } = Tabs

/* 图层目录树 */
export default function LayerTree() {
  const riverPic = useSelector((state) => state.riverPic)
  const { panes } = riverPic
  // panes[0].content = <BaseInfo />
  panes[0].content = <LayerItemInfo />
  const dispatch = useDispatch()

  const [activeKey, setActiveKey] = useState(panes[0].key)

  const onChange = (activeKey) => {
    setActiveKey(activeKey)
  }
  // 新增和删除页签的回调
  const onEdit = (targetKey, action) => {
    // 移除标签的操作
    if (action === 'remove') {
      remove(targetKey)
    }
  }
  // 移除标签的操作
  const remove = (targetKey) => {
    let lastIndex
    let lastActiveKey
    panes.forEach((pane, index) => {
      if (pane.key === targetKey) {
        lastIndex = index - 1
      }
    })
    const updatePanes = panes.filter(pane => pane.key !== targetKey)
    
    if (updatePanes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        lastActiveKey = updatePanes[lastIndex].key
      } else {
        lastActiveKey = updatePanes[0].key
      }
    }
    // 移除删除的panel，定位内容
    setActiveKey(lastActiveKey)
    dispatch(changeSelectedPanes(updatePanes))
  }
  return (
    <div className="layer-info">
      <Tabs
        type="editable-card"
        hideAdd
        activeKey={activeKey}
        onEdit={onEdit}
        onChange={onChange}
      >
        {
          panes.map((pane) => (
            <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
              {pane.content}
            </TabPane>
          ))
        }
      </Tabs>
    </div>
  )
}
