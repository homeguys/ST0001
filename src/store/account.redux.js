/*
 * @Author: 郑杰14
 * @Date: 2020-08-20 15:38:09
 * @LastEditors: 郑杰14
 * @LastEditTime: 2020-08-20 16:21:59
 * @Description: 台账管理redux
 */
const CHANGE_ADD_MODAL_VISIBLE = 'CHANGE_ADD_MODAL_VISIBLE' // 切换添加台账的弹框显影

const initState = {
  addModalVisible: false // 添加台账的弹框显影
}

export function account(state = initState, action) {
  switch (action.type) {
    case CHANGE_ADD_MODAL_VISIBLE:
      return {
        ...state,
        addModalVisible: action.data
      }
    default:
      return state
  }
}

/**
 * 切换添加台账模态框显影
 * @param {*} data
 */
export function changeAddModalVisible(data) {
  return { type: CHANGE_ADD_MODAL_VISIBLE, data }
}
