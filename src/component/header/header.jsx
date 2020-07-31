import React from 'react'
import $ from 'zepto'
import { connect } from 'react-redux'
import recompact from 'recompact'
import { Link, withRouter } from 'react-router-dom'
import { Modal } from 'antd'
import utils from '../../../utils/utilitis'
import LoginCheck from '../hoc_component/loginCheck'
import { logOut } from '../../../redux/z_login/login_redux'
import './header.scss'

const { confirm } = Modal
const enhance = recompact.compose(
  connect((state) => state.logining, { logOut }),
  withRouter,
  LoginCheck('main')
)
@enhance
class Header extends React.Component {
  componentDidMount() {
    const navList = document.getElementById('header').querySelector('ul') // 一级菜单ul容器
    const firstMenus = document.querySelectorAll('#header>ul>li') // 所有一级菜单
    const secondMenus = document.querySelectorAll('#header>ul>li .second-item') // 所有二级菜单

    // 点击一级菜单高亮
    navList.addEventListener(
      'click',
      (e) => {
        const hasSecondItem = e.target.className.indexOf('second-item') !== -1 // 是否含有'second-item'类
        if (hasSecondItem || e.target.parentNode.className.indexOf('second-item') !== -1) {
          const currentSecondItem = hasSecondItem ? e.target : e.target.parentNode
          const currentFirstItem = $(e.target).parents('.first-item')[0]
          utils.setActive(firstMenus, currentFirstItem, 'active')
          utils.setActive(secondMenus, currentSecondItem, 'active')
        } else if (
          e.target.tagName !== 'UL' &&
          $(e.target)
            .parents('li')
            .children()[0].tagName === 'A'
        ) {
          const currentLi = $(e.target).parents('li')[0]
          utils.setActive(firstMenus, currentLi, 'active')
          utils.setActive(secondMenus, '', 'active')
        }
      },
      false
    )

    // 导航菜单高亮选中
    this.highlightSelection(firstMenus, secondMenus)
  }

  // 注销
  handleSignOut = () => {
    const self = this
    confirm({
      title: '确定退出?',
      onOk() {
        self.props.logOut()
      }
    })
  }

  // 导航菜单高亮选中
  highlightSelection(firstMenus, secondMenus) {
    const { location } = this.props
    const path = location.pathname.split('/')

    // 一级菜单默认选中
    firstMenus.forEach((item) => {
      const itemClass = item
        .getAttribute('class')
        .split(' ')[0]
        .replace('-', '_')

      const pathName = path.length === 3 ? path[path.length - 1] : path[path.length - 2]
      if (itemClass === pathName) {
        utils.setActive(firstMenus, item, 'active')
      }
    })

    // 二级菜单默认选中
    secondMenus.forEach((item) => {
      const itemClass = item
        .getAttribute('class')
        .split(' ')[0]
        .replace('-', '_')
      if (path.length === 4 && itemClass === path[path.length - 1]) {
        utils.setActive(secondMenus, item, 'active')
      }
    })
  }

  render() {
    const { match } = this.props
    const { url } = match
    const firstMenus = document.querySelectorAll('#header>ul>li') // 所有一级菜单
    const secondMenus = document.querySelectorAll('#header>ul>li .second-item') // 所有二级菜单
    const userName = sessionStorage.getItem('userName') ? sessionStorage.getItem('userName') : ''
    // 导航菜单高亮选中
    this.highlightSelection(firstMenus, secondMenus)
    return (
      <div id="header">
        <div className="logo">东海卫星遥感数据处理与绿潮预警报应用系统</div>
        <ul>
          {/* <li className="home first-item">
            <Link to={`${url}/home`}>
              <i className="icon iconfont iconhome" />
              <p>首页</p>
            </Link>
          </li> */}
          <li className=" first-item">
            <Link to={`${url}`}>
              <i className="icon iconfont iconshuiliu" />
              <p>海洋要素展示</p>
            </Link>
          </li>
          <li className="data-retrieval first-item">
            <Link to={`${url}/data_retrieval`}>
              <i className="icon iconfont iconshujuku" />
              <p>Modis预处理</p>
            </Link>
          </li>
          <li className="product-management first-item">
            <div>
              <i className="icon iconfont iconchanpinguanli" />
              <p>绿潮初判</p>
              <ul>
                <li className="interaction second-item">
                  <Link to={`${url}/product_management/interaction`}>绿潮交互</Link>
                </li>
                <li className="monitor second-item">
                  <Link to={`${url}/product_management/monitor`}>任务监控</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="product-exhibitions first-item">
            <Link to={`${url}/product_exhibitions/forecasts`}>
              <div>
                <i className="icon iconfont iconchanpinzhengce" />
                <p>绿潮预测</p>
              </div>
            </Link>
          </li>
          <li className="history first-item">
            <div>
              <i className="icon iconfont iconchanpinzhengce" />
              <p>历史绿潮</p>
              <ul>
                <li className="history-add second-item">
                  <Link to={`${url}/history/history_add`}>历史绿潮添加</Link>
                </li>
                <li className="history-exhibit second-item">
                  <Link to={`${url}/history/history_exhibit`}>历史绿潮展示</Link>
                </li>
              </ul>
            </div>
          </li>
          {userName === 'admin' ? (
            <li className="system-management first-item">
              <div>
                <i className="icon iconfont iconxitongguanli" />
                <p>系统管理</p>
                <ul>
                  <li className="user second-item">
                    <Link to={`${url}/system_management/user`}>用户管理</Link>
                  </li>
                  <li className="log second-item">
                    <Link to={`${url}/system_management/log`}>日志管理</Link>
                  </li>
                </ul>
              </div>
            </li>
          ) : null}
        </ul>
        <div className="user-box">
          <div>
            <i className="icon iconfont iconyonghu" />
            <span className="userName">{userName}</span>
          </div>
          <div onClick={this.handleSignOut}>
            <i className="icon iconfont icontuichu1" />
            <span className="signOut">退出</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
