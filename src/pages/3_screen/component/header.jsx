import React from 'react'

function Header(props) {
  function jumpLogin() {
    const { push } = props
    push('/login')
  }

  return (
    <header>
      <section className="date">2020年 04月 17日 15:37：22</section>
      <span className="title">秀洲区域动态监管一张图</span>
      <button type="button" className="login-btn" onClick={jumpLogin}>
        登录
      </button>
    </header>
  )
}

export default Header
