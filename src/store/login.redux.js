import axios from 'axios'
import qs from 'qs'
import varibles from '../config'

const { interfaceDir } = varibles

const LOGININ = 'LOGININ' // 登录
const LOGINOUT = 'LOGINOUT' // 登出
const LOGIN_ERROR = 'LOGIN_ERROR' // 登陆出错信息

const initState = {
  url: '', // 跳转路径
  errorMsg: '' // 登录出错信息
}

export function logining(state = initState, action) {
  switch (action.type) {
    case LOGININ:
      return { ...state, url: '/main', errorMsg: '' }
    case LOGINOUT:
      return { ...state, url: '/login', errorMsg: '' }
    case LOGIN_ERROR:
      return { ...state, errorMsg: action.msg }
    default:
      return state
  }
}

// 用户登录
export function loginIn(param) {
  if (!param.userName || !param.password) {
    return { type: LOGIN_ERROR, msg: '请输入用户名或密码' }
  }

  const data = qs.stringify(param)

  return (dispatch) => {
    axios.post(`${interfaceDir}/sysUser/userLogin`, data).then((res) => {
      // axios.get('./interface/userLogin.json').then((res) => {
      if (res.data.status === 200) {
        const { userName, regionId, id } = res.data.data
        window.sessionStorage.setItem('userName', userName)
        window.sessionStorage.setItem('userId', id)
        window.sessionStorage.setItem('regionId', regionId)
        dispatch({ type: LOGININ })
      } else if (res.data.status === 100) {
        dispatch({ type: LOGIN_ERROR, msg: res.data.data })
      } else {
        dispatch({ type: LOGIN_ERROR, msg: '登录出错' })
      }
    })
  }
}

// 用户登出
export function loginOut() {
  return (dispatch) => {
    axios.post(`${interfaceDir}/sysUser/logout`).then((res) => {
      if (res.data.status === 100) {
        window.sessionStorage.removeItem('userName')
        window.sessionStorage.removeItem('regionId')
        window.sessionStorage.removeItem('userId')
        dispatch({ type: LOGINOUT })
      } else {
        dispatch({ type: LOGIN_ERROR, msg: '登出出错' })
      }
    })
  }
}
