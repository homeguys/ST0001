// ESLINT
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Select, Checkbox } from 'antd'
import recompact from 'recompact'
import loginSubmit from '../../component/hoc_component/login_submit'
import loginCheck from '../../component/hoc_component/login_check'
import { loginIn } from '../../store/login.redux'
import { title, titleEn } from '../../config/varibles'
import './style.scss'

const { Option } = Select

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
          <section className="title-en">{titleEn}</section>
          <section className="login-box">
            <div className="input user">
              <i className="iconfont">&#xe7d8;</i>
              <input type="text" {...getField('userName')} />
            </div>
            <div className="input password">
              <i className="iconfont">&#xe68c;</i>
              <input type="password" {...getField('password')} />
            </div>
            <div className="input password">
              <i className="iconfont">&#xe600;</i>
              <Select placeholder="请选择下拉" style={{ width: '100%' }} {...getField('sysType')}>
                <Option value="1">业务平台</Option>
              </Select>
            </div>
            <div className="remember">
              <Checkbox {...getField('remember')}>记住密码</Checkbox>
            </div>
            <div className="error">{errorMsg ? <p className="errorMsg">{errorMsg}</p> : null}</div>
            <div className="input btn">
              <span>登录</span>
              <i className="iconfont">&#xe609;</i>
            </div>
          </section>
        </article>
        <section className="footer">版权信息：杭州禹川信息科技有限公司</section>
      </section>
    )
  }
}

export default Login
