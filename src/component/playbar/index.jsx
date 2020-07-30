import React from 'react'
import { connect } from 'react-redux'
import { is, fromJS } from 'immutable'
import Playbar from '../../lib/playbar/demo'
import { setDefaultDataList } from '../../store/search.redux'
import { getDateByIssue } from '../../utils/utils'
import './style.scss'

@connect((state) => ({ search: state.search }), {
  setDefaultDataList
})
class AutoPlaybar extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidUpdate(nextProps) {
    const { search } = this.props
    const { defaultProdcut } = search

    const { search: nextSearch } = nextProps
    const { defaultProdcut: nextDefaultProdcut } = nextSearch

    if (!is(fromJS(defaultProdcut), fromJS(nextDefaultProdcut))) {
      const { resetAutoPlay } = this.child
      resetAutoPlay(0)
    }
  }

  // 播放条拖动
  slideChange = (value) => {
    const { search, setDefaultDataList } = this.props
    const { dataSource } = search
    const { productInfoList } = dataSource
    const current = productInfoList[value]
    const setData = {
      defaultDataList: current,
      activeIndex: value
    }
    setDefaultDataList(setData)
  }

  onRef = (ref) => {
    this.child = ref
  }

  render() {
    const { search } = this.props
    const { defaultDataList, dataSource } = search
    const { issue = '' } = defaultDataList
    const { productInfoList } = dataSource
    return (
      <div id="playbar">
        <Playbar
          marks={productInfoList}
          issue={issue ? getDateByIssue(issue) : '暂无数据'}
          onChange={this.slideChange}
          onRef={this.onRef}
        />
      </div>
    )
  }
}

export default AutoPlaybar
