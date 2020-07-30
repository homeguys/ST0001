/* eslint-disable prefer-destructuring */
/* eslint-disable no-extra-semi */
import React from 'react'
import { connect } from 'react-redux'
import recompact from 'recompact'
import Slider from '../../lib/slider'
import {
  changeFieldsSin,
  productSearch,
  mergeProductTree,
  getDefaultProduct
} from '../../store/search.redux'
import './style.scss'

const enhance = recompact.compose(
  connect((state) => ({ search: state.search }), {
    productSearch,
    mergeProductTree,
    changeFieldsSin,
    getDefaultProduct
  })
)

@enhance
class SliderBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedKeys: [],
      openKeys: []
    }
  }

  static getDerivedStateFromProps(nextProps, preState) {
    const { search } = nextProps
    const { defaultProdcut } = search
    const { path } = defaultProdcut
    const prePath = window.sessionStorage.getItem('path')
    if (path && path !== preState.path && !prePath) {
      const [level1, level2, level3] = path.split('_')
      window.sessionStorage.setItem('path', path)
      return {
        selectedKeys: [level3],
        openKeys: [level1, level2, level3]
      }
    }

    return preState
  }

  componentDidMount() {
    window.sessionStorage.removeItem('path')
    const { mergeProductTree } = this.props
    mergeProductTree()
  }

  componentWillUnmount() {
    window.sessionStorage.removeItem('path')
  }

  // 菜单点击事件
  handleMenuClick = (item) => {
    const selectedKeys = [item.key]
    const mark = item.key

    const { search, getDefaultProduct } = this.props
    const { defaultProdcut } = search
    const { flatTree } = search
    const [data] = flatTree.filter((item) => item.mark === mark)

    getDefaultProduct(
      Object.assign(data, {
        beginTime: defaultProdcut.beginTime,
        endTime: defaultProdcut.endTime,
        pageNum: defaultProdcut.pageNum,
        pageSize: defaultProdcut.pageSize
      })
    )

    this.setState({
      selectedKeys
    })
  }

  // 菜单展开事件
  onOpenChange = (openKeys) => {
    this.setState({
      openKeys
    })
  }

  render() {
    const { selectedKeys, openKeys } = this.state
    const { search } = this.props
    const { productTree } = search

    return (
      <div id="sliderbar">
        <Slider
          menuConfig={productTree}
          openKeys={openKeys}
          selectedKeys={selectedKeys}
          onClick={this.handleMenuClick}
          onOpenChange={this.onOpenChange}
        />
      </div>
    )
  }
}

export default SliderBar
