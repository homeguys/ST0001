/*
 * @Author: 郑杰
 * @Date: 2020-08-12 11:22:00
 * @LastEditors: 郑杰14
 * @LastEditTime: 2020-08-17 23:17:12
 * @Description: 河湖一张图redux
 */
import axios from 'axios'

const GET_LAYER_TREE = 'GET_LAYER_TREE' // 获取图层树
const CHANGE_SELECTED_PANES = 'CHANGE_SELECTED_PANES' // 改变选中的tab页

const initState = {
  layerTrees: [], // 图层树列表
  panes: [
    {
      title: '基本信息',
      content: 'aaaa',
      key: 'baseInfo',
      closable: false
    }
  ] // tab页数据
}

export function riverPic(state = initState, action) {
  switch (action.type) {
    case GET_LAYER_TREE:
      return {
        ...state,
        layerTrees: action.data
      }
    case CHANGE_SELECTED_PANES:
      return {
        ...state,
        panes: action.data
      }
    default:
      return state
  }
}

/**
 * 获取图层树列表
 */
export function getLayerTreeList() {
  return (dispatch) => {
    axios.get('./mock/riverPicture/layerData.json')
      .then((res) => {
        if (res.data.code === '0') {
          dispatch({ type: GET_LAYER_TREE, data: res.data.data })
        }
      })
  }
}

/**
 * 更换tab页
 * @param {*}
 */
export function changeSelectedPanes(data) {
  return { type: CHANGE_SELECTED_PANES, data }
}
