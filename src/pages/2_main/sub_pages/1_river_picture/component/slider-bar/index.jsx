import React from 'react'
import Menus from '../../../../../../component/menus'
import data from './mock-data.json'

class SliderBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedKeys: [],
      openKeys: []
    }
  }

  // 菜单展开事件
  onOpenChange = (openKeys) => {
    this.setState({
      openKeys
    })
  }

  render() {
    const { selectedKeys, openKeys } = this.state
    return (
      <div className="slider-bar">
        <Menus
          menuConfig={data.data}
          onOpenChange={this.onOpenChange}
          openKeys={openKeys}
          selectedKeys={selectedKeys}
        />
      </div>
    )
  }
}

export default SliderBar
