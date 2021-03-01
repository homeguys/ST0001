import axios from 'axios'
import qs from 'qs'

const CHANGE_ARCHIVES_SIN = 'CHANGE_ARCHIVES_SIN' // 修改supervision单个值
const CHANGE_ARCHIVES_MUL = 'CHANGE_ARCHIVES_MUL' // 修改supervision多个值
const INIT_ARCHIVES = 'INIT_ARCHIVES' // 初始化supervision

const initState = {
  menuData: [], // 档案侧边栏数据
  isStatistic: true, // 是否显示统计信息
  selectedKeys: [], // 侧边栏树结构选中的keys
  expandedKeys: ['2017'] // 侧边栏树结构展开的keys
}

export function archives(state = initState, action) {
  switch (action.type) {
    case CHANGE_ARCHIVES_SIN:
      return { ...state, [action.data[0]]: action.data[1] }
    case CHANGE_ARCHIVES_MUL:
      return { ...state, ...action.data }
    case INIT_ARCHIVES:
      return initState
    default:
      return state
  }
}

// 初始化数字档案页面
export function initSupervision() {
  return { type: INIT_ARCHIVES }
}

// 修改单个supervision redux值
export function changeArchivesSin(data) {
  return { type: CHANGE_ARCHIVES_SIN, data }
}

// 修改多个supervision redux值
export function changeArchivesMul(data) {
  return { type: CHANGE_ARCHIVES_MUL, data }
}

/**
 * 获取侧边栏菜单数据
 */
export function getArchivesMenuData() {
  return (dispatch) => {
    axios.get('./mock/dynamicMonitor/menu.json').then((res) => {
      if (res.data.code === '0') {
        dispatch(changeArchivesSin(['menuData', res.data.data]))
      }
    })
  }
}
