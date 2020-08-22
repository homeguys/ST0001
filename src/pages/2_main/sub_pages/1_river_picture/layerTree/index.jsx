/* eslint-disable */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tree } from 'antd'
import {
  DownOutlined,
  FrownOutlined,
  SmileOutlined,
  MehOutlined,
  FrownFilled
} from '@ant-design/icons'
import { getLayerTreeList, changeSelectedPanes } from '../../../../../store/riverPic.redux'
import LayerItemInfo from '../layerInfo/layerItemInfo'
import { deepCloneObject } from '../../../../../utils/utils'
import './style.scss'
// import layerTreeList from './data/layerTreeList'

/* 图层控制 */
export default function LayerControl() {
  const panes = useSelector((state) => state.riverPic.panes)
  const layerTreeList = [
    {
      title: '水域现状',
      key: 'currentWaters',
      layerUrl: '',
      layerType: '',
      disabled: true,
      icon: <SmileOutlined />,
      children: [
        {
          title: '河道',
          key: 'riverCourse',
          layerUrl: '',
          layerType: ''
        },
        {
          title: '湖泊',
          key: 'lake',
          layerUrl: '',
          layerType: ''
        },
        {
          title: '水库',
          key: 'reservoir',
          layerUrl: '',
          layerType: ''
        },
        {
          title: '山塘',
          key: 'shantang',
          layerUrl: '',
          layerType: ''
        },
        {
          title: '其他水域',
          key: 'otherWater',
          layerUrl: '',
          layerType: ''
        },
        {
          title: '蓄滞洪区',
          key: 'detention',
          layerUrl: '',
          layerType: ''
        },
        {
          title: '人工水道',
          key: 'artificialWaterway',
          layerUrl: '',
          layerType: ''
        }
      ]
    },
    {
      title: '水域断面',
      key: 'waterSection',
      layerUrl: '',
      layerType: '',
      disabled: true,
      icon: <FrownOutlined />,
    },
    {
      title: '巡查轨迹图层',
      key: 'patrolTrack',
      layerUrl: '',
      layerType: '',
      disabled: true,
      icon: <SmileOutlined />,
    },
    {
      title: '水利工程',
      key: 'waterConservancy',
      layerUrl: '',
      layerType: '',
      disabled: true,
      icon: <MehOutlined />
    },
    {
      title: '视频监控',
      key: 'videoSurveillance',
      layerUrl: '',
      layerType: '',
      disabled: true,
      icon: <FrownFilled />
    },
    {
      title: '水域变化',
      key: 'waterChange',
      layerUrl: '',
      layerType: '',
      disabled: true,
      icon: <FrownFilled />
    },
    {
      title: '水利规划',
      key: 'waterPlan',
      layerUrl: '',
      layerType: '',
      disabled: true,
      icon: <FrownFilled />
    }
  ]
  const dispatch = useDispatch()
  // const layerTrees = useSelector((state) => state.riverPic.layerTrees) // 监测期次菜单数据
  useEffect(() => {
    dispatch(getLayerTreeList())
  }, [])

  const onCheck = (keys, evt) => {
    const sceneId = 3
    const flag = !(Number(sceneId) === 47 || Number(sceneId) === 3)
    console.warn(flag)
    const { checked, title, key } = evt.node
    if (checked) {
      const newPanes = panes.filter(panel => panel['key'] !== key)
      dispatch(changeSelectedPanes(newPanes))
    } else {
      // 添加详情tab页
      const panel = {
        title,
        key,
        content: <LayerItemInfo />
      }
      panes.push(panel)
      dispatch(changeSelectedPanes(panes))
    }
  }
  return (
    <div className="layer-tree">
      <ul>
        <Tree
          checkable
          selectable={false}
          treeData={layerTreeList}
          showIcon
          // switcherIcon={<DownOutlined />}
          onCheck={onCheck}
        />
      </ul>
    </div>
  )
}
