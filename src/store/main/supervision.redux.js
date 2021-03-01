import axios from 'axios'
import qs from 'qs'

const usefulAttr = [
  'mark',
  'path',
  'id',
  'regionIds',
  'cycles',
  'cycle',
  'sateAndSensors',
  'sateAndSensor',
  'statistics',
  'beginTime',
  'endTime',
  // 'pageNum',
  // 'pageSize',
  'Default'
]

const CHANGE_SUPERVISION_SIN = 'CHANGE_SUPERVISION_SIN' // 修改supervision单个值
const INIT_SUPERVISION = 'INIT_SUPERVISION' // 初始化supervision

// 当前时间往前推
const startTime = new Date()
const startYear = startTime.getFullYear() - 2
startTime.setFullYear(startYear)

// const beginTime = moment(startTime)
// const endTime = moment(new Date())
// // const beginTime = moment('2018-10-12')
// // const endTime = moment('2018-12-12')
// const pageNum = 1

const initState = {
  editModalVisible: false
}

export function supervision(state = initState, action) {
  switch (action.type) {
    case CHANGE_SUPERVISION_SIN:
      return { ...state, [action.data[0]]: action.data[1] }
    case INIT_SUPERVISION:
      return initState
    default:
      return state
  }
}

export function initSupervision() {
  return { type: INIT_SUPERVISION }
}

// 修改单个supervision redux值
export function changeSupervisionSin(data) {
  console.warn(data)
  return { type: CHANGE_SUPERVISION_SIN, data }
}
