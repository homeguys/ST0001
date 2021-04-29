/*
 * @Author: 王磊
 * @Date: 2020-11-19 16:57:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-11-19 18:13:41
 * @description: 首页大屏redux
 */

import axios from 'axios'
import qs from 'qs'
import { toast } from '../utils/utils'

const CHANGE_SCREEN_STATE = 'CHANGE_SCREEN_STATE'

const initState = {
  basicData: {}, // 动态监测 + 水域现状 + 水利工程
  statisticsDynamicWaterRate: [], // 动态水面率
  statisticsManageInfo: [] // 水域规划基准 + 清四乱 + 水域补偿
}

export function screen(state = initState, action) {
  switch (action.type) {
    case CHANGE_SCREEN_STATE:
      return {
        ...state,
        [action.data.key]: action.data.value
      }
    default:
      return state
  }
}

/**
 * @param {Object} { key: '', value: '' }
 * @description 修改screen state
 */
export function changeScreenState(data) {
  return { type: CHANGE_SCREEN_STATE, data }
}

/**
 * @description 请求基本统计信息 动态监测 + 水域现状 + 水利工程
 */
export function getBaseInforStatistics() {
  const params = qs.stringify({
    page: 1,
    limit: 20
  })
  return (dispatch) => {
    axios.get('/ActionFactory/Overviewer/GetStatisticsManageInfo').then((res) => {
      const { data } = res.data
      if (res.status === 200) {
        dispatch(changeScreenState({ key: 'basicData', value: data }))
      } else {
        toast('请求失败', 'error')
      }
    })
  }
}

/**
 * @description 请求动态水面率面板的数据内容
 */
export function GetStatisticsDynamicWaterRate() {
  return (dispatch) => {
    axios.get('/ActionFactory/Overviewer/GetStatisticsDynamicWaterRate').then((res) => {
      const { data } = res.data
      if (res.status === 200) {
        dispatch(changeScreenState({ key: 'statisticsDynamicWaterRate', value: data }))
      } else {
        toast('请求失败', 'error')
      }
    })
  }
}

/**
 * @description 请求水面率，四乱和水域补偿等面板的数据内容
 */
export function GetStatisticsManageInfo() {
  return (dispatch) => {
    axios.get('/ActionFactory/Overviewer/GetStatisticsManageInfo').then((res) => {
      const { data } = res.data
      if (res.status === 200) {
        dispatch(changeScreenState({ key: 'statisticsManageInfo', value: data }))
      } else {
        toast('请求失败', 'error')
      }
    })
  }
}
