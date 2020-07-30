/* eslint-disable */
import React from 'react'
import { Menu } from 'antd'
import './style.scss'

const { SubMenu } = Menu

class Slider extends React.Component {
  renderMenuItems = (menuConfig, level) => {
    return menuConfig.map((item) => {
      if (item.subTree) {
        if (level === 'level1') {
          return (
            <SubMenu
              key={item.mark}
              value={item.id}
              title={
                <span>
                  <i className="iconfont">&#xe655;</i>
                  <span>{item.name}</span>
                </span>
              }
            >
              {this.renderMenuItems(item.subTree)}
            </SubMenu>
          )
        } else {
          return (
            <SubMenu
              key={item.mark}
              value={item.id}
              title={<span>{item.name}</span>}
              className={'bg-ul'}
            >
              {this.renderMenuItems(item.subTree)}
            </SubMenu>
          )
        }
      }

      return (
        <Menu.Item key={item.mark} value={item.id}>
          {item.name}
        </Menu.Item>
      )
    })
  }

  render() {
    const {
      menuConfig = [],
      openKeys,
      selectedKeys,
      onClick = () => {},
      onOpenChange = () => {}
    } = this.props
    return (
      <div id="htht-slider">
        <Menu
          onClick={this.handleClick}
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          mode="inline"
          onClick={onClick}
          onOpenChange={onOpenChange}
        >
          {this.renderMenuItems(menuConfig, 'level1')}
        </Menu>
      </div>
    )
  }
}

export default Slider
