// ESLINT
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import recompact from 'recompact'
import loginSubmit from '../../component/hoc_component/login_submit'
import loginCheck from '../../component/hoc_component/login_check'
import { loginIn } from '../../store/login.redux'
import { title } from '../../config/varibles'
import './style.scss'

const enhance = recompact.compose(
  connect((state) => state.logining, { loginIn }),
  withRouter,
  loginSubmit('login'),
  loginCheck('login')
)

@enhance
class Login extends React.Component {
  componentDidMount() {
    const btn = document.getElementsByClassName('btn')[0]
    const { handleSubmit } = this.props
    btn.addEventListener('click', handleSubmit, false)
    window.addEventListener('keyup', this.handleEnter, false)
  }

  componentWillUnmount() {
    const btn = document.getElementsByClassName('btn')[0]
    const { handleSubmit } = this.props
    btn.removeEventListener('click', handleSubmit, false)
    window.removeEventListener('keyup', this.handleEnter, false)
  }

  handleEnter = (e) => {
    if (e.keyCode === 13) {
      const { handleSubmit } = this.props
      handleSubmit()
    }
  }

  render() {
    const { getField, errorMsg } = this.props
    return (
      <section id="login" className="wrapper">
        <article className="content">
          <section className="title">{title}</section>
          <section className="login-box">
            <span className="login-title">登录账号</span>
            <div className="input user">
              <i className="iconfont">&#xe7d8;</i>
              <input type="text" {...getField('userName')} />
            </div>
            <div className="input password">
              <i className="iconfont">&#xe68c;</i>
              <input type="password" {...getField('password')} />
            </div>
            <div className="error">{errorMsg ? <p className="errorMsg">{errorMsg}</p> : null}</div>
            <div className="input btn">
              <input type="submit" value="登录" />
            </div>
          </section>
        </article>
      </section>
    )
  }
}

export default Login
