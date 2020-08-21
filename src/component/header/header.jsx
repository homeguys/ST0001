/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import $ from 'zepto-webpack'
import { connect } from 'react-redux'
import recompact from 'recompact'
import { withRouter } from 'react-router-dom'
import { title } from '../../config/varibles'
import { Links } from '../../router/mian_router'
import { setActive } from '../../utils/utils'
import './header.scss'

const enhance = recompact.compose(connect(null, {}), withRouter)

@enhance
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.aa = 'a'
  }

  componentDidMount() {
    const navList = document.getElementById('header').querySelector('.header-link') // 菜单ul容器
    const menus = document.querySelectorAll('#header>ul>li') // 所有一级菜单

    // 点击一级菜单高亮
    navList.addEventListener(
      'click',
      (e) => {
        const currentLi = $(e.target).parents('li')[0]
        setActive(menus, currentLi, 'active')
      },
      false
    )

    // 刷新一级菜单高亮
    const { location } = this.props
    const { pathname } = location
    const path = pathname.split('/')

    menus.forEach((item) => {
      const itemClass = item.getAttribute('class').split(' ')[1]
      const pathName = path[path.length - 1]
      if (pathName === itemClass) {
        setActive(menus, item, 'active')
      }
    })
  }

  handleAdd = () => {
    const userSetting = document.getElementsByClassName('user-setting')[0]
    setTimeout(() => {
      userSetting.classList.add('active')
    }, 200)
  }

  handleRemove = () => {
    const userSetting = document.getElementsByClassName('user-setting')[0]
    setTimeout(() => {
      userSetting.classList.remove('active')
    }, 200)
  }

  render() {
    return (
      <section id="header">
        <section className="sys-name">{title}</section>
        <Links />
        <section className="sys-info">
          <section className="date">2020-05-26 15:00</section>
          <section className="user-name" onClick={this.handleAdd} onMouseLeave={this.handleRemove}>
            <i className="iconfont">&#xe60e;</i>
            <span>admin</span>
            <span className="icon-arrow-down" />
          </section>
        </section>

        <section
          className="user-setting"
          onMouseLeave={this.handleRemove}
          onMouseEnter={this.handleAdd}
        >
          <ul>
            <li>
              <span className="iconfont">&#xe625;</span>
              <span>我的账户</span>
            </li>
            <li>
              <span className="iconfont">&#xe75c;</span>
              <span>设置</span>
            </li>
            <li>
              <span className="iconfont">&#xe682;</span>
              <span>退出</span>
            </li>
          </ul>
        </section>
      </section>
    )
  }
}

export default Header
