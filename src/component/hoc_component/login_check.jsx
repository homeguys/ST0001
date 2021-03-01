/* eslint-disable arrow-body-style */
import React from 'react'
import { Redirect } from 'react-router-dom'
import { is, fromJS } from 'immutable'

/* 登陆验证 */
const LoginCheck = (instance) => (Component) => {
  return class WrappedComponent extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
      return (
        !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
      )
    }

    render() {
      const props = {
        ...this.props
      }
      const { location, url } = props
      const { pathname } = location
      const userName = window.sessionStorage.getItem('userName')
      let redirectUrl = ''
      // 登录组件 登录成功后跳转至主页面'/index'
      if (instance === 'login') {
        redirectUrl = url && url !== pathname ? url : ''
      }
      // 主页面
      if (instance === 'main') {
        redirectUrl = userName ? '' : url || '/login'
      }
      return (
        <div className="login-check">
          {redirectUrl ? <Redirect to={redirectUrl} /> : null}
          {instance === 'main' && !userName ? null : <Component {...props} />}
        </div>
      )
    }
  }
}

export default LoginCheck
