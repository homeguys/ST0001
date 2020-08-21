/*
 * @Author: 郑杰
 * @Date: 2020-08-12 11:22:00
 * @LastEditors: 郑杰14
 * @LastEditTime: 2020-08-14 11:06:30
 * @Description: 动态监测redux
 */
import axios from 'axios'

const CHANGE_MONITOR_PAGETYPE = 'CHANGE_MONITOR_PAGETYPE' // 切换监测页面类型
const GET_MENUISSUE_DATA = 'GET_MENUISSUE_DATA' // 侧边栏期次菜单数据
const GET_MONITOR_DATA = 'GET_MONITOR_DATA' // 动态监测数据
const CHANGE_SELECTED_ISSUE = 'CHANGE_SELECTED_ISSUE' // 选中菜单修改
const CHANGE_REPORT_VISIBLE = 'CHANGE_REPORT_VISIBLE' // 切换上报弹框显影

const initState = {
  pageType: 'base', // 监测页面类型
  selectedIssue: '2017_1', // 选中的期次菜单
  titleIssue: '2017年第一季度', // title的期次
  issueData: [], // 侧边栏菜单数据
  monitorData: {}, // 动态监测数据
  reportVisible: false // 上报
}

export function monitor(state = initState, action) {
  switch (action.type) {
    case CHANGE_MONITOR_PAGETYPE:
      return {
        ...state,
        pageType: action.data
      }
    case GET_MENUISSUE_DATA:
      return {
        ...state,
        issueData: action.data
      }
    case GET_MONITOR_DATA:
      return {
        ...state,
        monitorData: action.data
      }
    case CHANGE_SELECTED_ISSUE:
      return {
        ...state,
        selectedIssue: action.selectedIssue,
        titleIssue: action.titleIssue
      }
    case CHANGE_REPORT_VISIBLE:
      return {
        ...state,
        reportVisible: action.data
      }
    default:
      return state
  }
}

/**
 * 切换页面类型
 * @param {*} data
 */
export function changePageType(data) {
  return { type: CHANGE_MONITOR_PAGETYPE, data }
}

/**
 * 获取侧边栏菜单数据
 */
export function getIssueMenuData() {
  return (dispatch) => {
    axios.get('./mock/dynamicMonitor/menu.json')
      .then((res) => {
        if (res.data.code === '0') {
          dispatch({ type: GET_MENUISSUE_DATA, data: res.data.data })
        }
      })
  }
}

/**
 * 获取动态监测数据
 * @param { String } params
 */
export function getMonitorData(params) {
  return (dispatch) => {
    axios.get('./mock/dynamicMonitor/monitorData.json')
      .then((res) => {
        if (res.data.code === '0') {
          const data = res.data.data[params] ? res.data.data[params] : {}
          dispatch({ type: GET_MONITOR_DATA, data })
        }
      })
  }
}

/**
 * 切换选中菜单
 * @param {*} data
 */
export function changeSelectedIssue(selectedIssue, titleIssue) {
  return { type: CHANGE_SELECTED_ISSUE, selectedIssue, titleIssue }
}

/**
 * 切换弹框显影
 * @param {*} data
 */
export function changeReportVisible(data) {
  return { type: CHANGE_REPORT_VISIBLE, data }
}
