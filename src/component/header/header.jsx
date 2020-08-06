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

  render() {
    return (
      <section id="header">
        <section className="sys-name">{title}</section>
        <Links />
        <section className="sys-info">
          <section className="date">2020-05-26 15:00</section>
          <section className="user-name">
            <i className="iconfont">&#xe60e;</i>
            <span>admin</span>
          </section>
        </section>
      </section>
    )
  }
}

export default Header
