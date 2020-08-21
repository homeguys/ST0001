/* eslint-disable */
import React from 'react'
import { Menu, Icon } from 'antd'
import './style.scss'

const { SubMenu } = Menu

class SiderBar extends React.Component {
  // submenu keys of first level
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4']

  state = {
    openKeys: ['2017']
  }

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find((key) => this.state.openKeys.indexOf(key) === -1)
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys })
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      })
    }
  }

  handleClick = (e, op) => {
    const titleIssue = e.key.split('_')[0] + '年' + e.item.props.children
    this.props.changeIssue(e.key, titleIssue)
  }

  render() {
    const { dataSource = [] } = this.props
    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        onClick={this.handleClick}
        style={{ width: 256 }}
      >
        {dataSource.map((firstItem) => {
          if (firstItem.children) {
            return (
              <SubMenu
                key={firstItem.key}
                title={
                  <span>
                    <Icon type={firstItem.icon} />
                    <span>{firstItem.name}</span>
                  </span>
                }
              >
                {firstItem.children.map((secondItem) => {
                  if (secondItem.children) {
                    return (
                      <SubMenu
                        key={secondItem.key}
                        title={
                          <span>
                            <Icon type={secondItem.icon} />
                            <span>{secondItem.name}</span>
                          </span>
                        }
                      >
                        {secondItem.children.map((thirdItem) => {
                          return <Menu.Item key={thirdItem.key}>{thirdItem.name}</Menu.Item>
                        })}
                      </SubMenu>
                    )
                  } else {
                    return <Menu.Item key={secondItem.key}>{secondItem.name}</Menu.Item>
                  }
                })}
              </SubMenu>
            )
          } else {
            return <Menu.Item key={firstItem.key}>{firstItem.name}</Menu.Item>
          }
        })}
      </Menu>
    )
  }
}

export default SiderBar
