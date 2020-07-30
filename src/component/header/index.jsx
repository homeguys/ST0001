/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { Modal } from 'antd'
import { title } from '../../config/varibles'
import './style.scss'

const { confirm } = Modal

class Header extends React.Component {
  componentDidMount() {
    const loginOutBtn = document.getElementsByClassName('login-out')[0]
    loginOutBtn.addEventListener('click', this.handleLoginOut, false)
  }

  componentWillUnmount() {
    const loginOutBtn = document.getElementsByClassName('login-out')[0]
    loginOutBtn.removeEventListener('click', this.handleLoginOut, false)
  }

  handleLoginOut = () => {
    const { loginOut } = this.props
    confirm({
      title: '确定退出?',
      onOk() {
        loginOut()
      }
    })
  }

  render() {
    const userName = window.sessionStorage.getItem('userName')
    return (
      <header id="header">
        <section className="left">{title}</section>
        <section className="right">
          <p className="user-name">{userName}</p>
          <i className="iconfont login-out">&#xe6df;</i>
        </section>
      </header>
    )
  }
}

export default Header
