/*
 * @Author: 王磊
 * @Date: 2020-08-20 15:38:09
 * @LastEditors: 王磊
 * @LastEditTime: 2020-08-20 16:21:59
 * @Description: 台账管理redux
 */
import axios from 'axios'
import qs from 'qs'
import { toast } from '../utils/utils'

const CHANGE_ADD_MODAL_VISIBLE = 'CHANGE_ADD_MODAL_VISIBLE' // 切换添加台账的弹框显影
const CHANGE_ACCOUNT_STATE = 'CHANGE_ACCOUNT_STATE' // 修改台账管理

const initState = {
  addModalVisible: false, // 添加台账的弹框显影
  accountList: [], // 台账列表
  getParams: {
    name: '',
    startTime: '',
    endTime: '',
    pageSize: 8,
    pageNum: 1
  }, // 查询参数
  addParams: {
    name: '',
    code: '',
    createTime: '',
    updateTime: ''
  } // 新增参数
}

export function account(state = initState, action) {
  switch (action.type) {
    case CHANGE_ADD_MODAL_VISIBLE:
      return {
        ...state,
        addModalVisible: action.data
      }
    case CHANGE_ACCOUNT_STATE:
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
export function changeAccountState(data) {
  return { type: CHANGE_ACCOUNT_STATE, data }
}

/**
 * 切换添加台账模态框显影
 * @param {*} data
 */
export function changeAddModalVisible(data) {
  return { type: CHANGE_ADD_MODAL_VISIBLE, data }
}

/**
 * @description 查询台账信息接口
 */
export function getAccountInfo() {
  const params = qs.stringify({
    page: 1,
    limit: 20
  })
  return (dispatch) => {
    axios.get('/AdminManger/WAMBaseInfor/queryWPStandBookGridJson', params).then((res) => {
      const { data } = res.data
      if (res.status === 200) {
        dispatch(changeAccountState({ key: 'accountList', value: data }))
      } else {
        toast('请求失败', 'error')
      }
    })
  }
}

/**
 * @description 添加台账接口
 */
export function addAccountInfo(params) {
  return (dispatch, state) => {
    const { account } = state()
    const { getParams } = account // 查询接口参数
    axios.get('/AdminManger/WAMBaseInfor/SubmitWPStandBook', params).then((res) => {
      if (res.status === 200) {
        toast('添加成功', 'error')
        dispatch(getAccountInfo(getParams))
      } else {
        toast('请求失败', 'error')
      }
    })
  }
}

/**
 * @description 删除台账接口
 */
export function deleteAccountInfo(params) {
  return (dispatch, state) => {
    const { account } = state()
    const { getParams } = account // 查询接口参数
    axios.get('/AdminManger/WAMBaseInfor/DeleteWPStandBook', params).then((res) => {
      if (res.status === 200) {
        toast('删除成功', 'error')
        dispatch(getAccountInfo(getParams))
      } else {
        toast('请求失败', 'error')
      }
    })
  }
}

/**
 * @description 导入台账接口
 */
export function importAccountInfo(params) {
  return (dispatch, state) => {
    const { account } = state()
    const { getParams } = account // 查询接口参数
    axios.get('/AdminManger/WAMBaseInfor/InputWPStandBookExcelFile', params).then((res) => {
      const { success } = res.data
      if (success) {
        toast('导入成功', 'error')
        dispatch(getAccountInfo(getParams))
      } else {
        toast('请求失败', 'error')
      }
    })
  }
}
