/*
 * @Author: 王磊
 * @Date: 2020-11-19 16:57:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-11-19 18:13:41
 * @description: 首页大屏redux
 */

import axios from 'axios'

const CHANGE_SCREEN_STATE = 'CHANGE_SCREEN_STATE'

const initState = {
  basicData: null // 动态监测 + 水域现状 + 水利工程
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
  return (dispatch) => {
    axios.get('./mock/1-screen/GetBaseInforStatistics.json').then((res) => {
      console.warn(res)
      // const {data} = res.data
      // if(res.status) {}
    })
  }
}
