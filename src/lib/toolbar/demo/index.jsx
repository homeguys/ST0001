/* eslint-disable */
import React from 'react'
import { Dropdown, Icon, Menu, Cascader } from 'antd'
import { createHash } from '../../common/utils'
import './style'

class Toolbar extends React.Component {
  constructor(props) {
    super(props)
    this.hash = createHash(6)
  }

  componentDidMount() {
    const { toolbarMethod } = this.props
    const toolbarList = document.getElementsByClassName(`toolbar-list-${this.hash}`)[0]
    /**
     * 工具栏一级目录所有click事件
     */
    toolbarList.addEventListener('click', toolbarMethod, false)
  }

  componentWillUnmount() {
    const { toolbarMethod } = this.props
    const toolbarList = document.getElementsByClassName(`toolbar-list-${this.hash}`)[0]
    toolbarList.removeEventListener('click', toolbarMethod)
  }

  // 组装下拉元素
  getMenu(data) {
    return (
      <Menu onClick={this.dropdownClick}>
        {data.map((item) => (
          <Menu.Item key={item.value}>{item.name}</Menu.Item>
        ))}
      </Menu>
    )
  }

  // 工具栏下拉方法集
  dropdownClick = (e) => {
    console.warn(e)
    const { changeLayer } = this.props
    /**
     * 工具栏下拉所有click事件
     */
    // const { baseMap } = this.props
    switch (e.key) {
      case 'tdt_img_off':
        changeLayer('tdt_img_off')
        break
      case 'tdt_vec_off':
        changeLayer('tdt_vec_off')
        break
      case 'tdt_ter_off':
        changeLayer('tdt_ter_off')
        break
      case 'st':
        changeLayer('1')
        break
      case 'road':
        changeLayer('2')
        break
      case 'terrain':
        changeLayer('3')
        break
      case 'distance':
        console.warn('测量距离')
        break
      case 'area':
        console.warn('测量面积')
        break
      case 'clear':
        console.warn('清除测量')
        break
      default:
        break
    }
  }

  render() {
    const { dataSource, options, hasRegion, onChange = () => {}, regionIds = [] } = this.props
    let list = []
    const data = dataSource
      ? dataSource.map((item) =>
          !item.children ? (
            <li key={item.name} className={item.value}>
              {item.icon}
              <span>{item.name}</span>
            </li>
          ) : (
            <li key={item.name}>
              {item.icon}
              <Dropdown
                overlay={this.getMenu(item.children)}
                trigger={['click']}
                placement="bottomCenter"
              >
                <span>
                  {item.name}
                  <Icon type="down" />
                </span>
              </Dropdown>
            </li>
          )
        )
      : []

    const cascader = [
      <li key="cascader">
        <Cascader
          allowClear={false}
          options={options}
          onChange={onChange}
          placeholder="请选择"
          value={regionIds}
          changeOnSelect
        />
      </li>
    ]

    if (!dataSource || dataSource.length === 0) {
      list.push(<li>暂无数据</li>)
    } else if (dataSource && hasRegion) {
      list = [...cascader, ...data]
    } else {
      list = data
    }
    return (
      <div className="htht-toolbar">
        <ul className={`toolbar-list toolbar-list-${this.hash}`}>{list}</ul>
      </div>
    )
  }
}

export default Toolbar
