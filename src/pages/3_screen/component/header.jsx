import React from 'react'
import Timer from './timer'

function Header(props) {
  function jumpLogin() {
    const { push } = props
    push('/login')
  }

  return (
    <header>
      <Timer />
      <span className="title">秀洲区域动态监管一张图</span>
      <button type="button" className="login-btn" onClick={jumpLogin}>
        登录
      </button>
    </header>
  )
}

export default Header
