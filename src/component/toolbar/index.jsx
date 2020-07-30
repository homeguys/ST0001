/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { is, fromJS } from 'immutable'
import Toolbar from '../../lib/toolbar/demo'
import { changeFieldsSin, setAllRegions, changeSearchSin } from '../../store/search.redux'
import { parseAreaXml, getParents } from '../../utils/utils'
import loadShp from '../../utils/loadRegionsShp'
import { geoserverIp, initViewer } from '../../config/varibles'
import raiseBoderToTop from '../../utils/raiseBoderToTop'
import setView from '../../utils/gisUtils'
import changeMap from '../../utils/changeMap' // 在线地图
// import changeMap from '../../utils/changeMap_off' // 离线地图
import './style.scss'

@connect((state) => ({ search: state.search, basemap: state.basemap }), {
  changeFieldsSin,
  setAllRegions,
  changeSearchSin
})
class Toolbars extends React.Component {
  componentDidMount() {
    const { setAllRegions } = this.props
    axios.get('./data/AreaCfg.xml').then((res) => {
      const parser = new DOMParser()
      const xmldoc = parser.parseFromString(res.data, 'text/xml')
      const province = xmldoc.getElementsByTagName('province')
      const options = parseAreaXml(province)
      setAllRegions(options)
    })
  }

  // 默认加载行政区划边界和更新行政区划边界
  componentDidUpdate(nextProps) {
    const { search, basemap } = this.props
    const { viewer } = basemap
    const { defaultProdcut } = search
    const { regionIds } = defaultProdcut
    const { search: nextSearch } = nextProps
    const { defaultProdcut: nextDefaultProdcut } = nextSearch
    const { regionIds: nextRegionIds } = nextDefaultProdcut

    if (!is(fromJS(regionIds), fromJS(nextRegionIds))) {
      const len = regionIds.length
      const type = len === 1 ? 'AreaProvince' : len === 2 ? 'AreaCity' : 'AreaCounty'
      const regionId = len > 1 ? regionIds[len - 1].value : regionIds[0] && regionIds[0].value
      // eslint-disable-next-line no-unused-expressions
      viewer &&
        loadShp(
          len === 1 ? 'AreaProvince' : 'CityOrCounty', // 市和县级行政区划只能显示一种，省级行政区划一直存在
          geoserverIp,
          `yn2:${type}`,
          { CQL_FILTER: `ID = '${regionId}'` },
          viewer
        )
    }
  }

  // 行政区划下拉修改
  onChange = (regionIds, selectedOptions) => {
    const { changeFieldsSin, search, basemap } = this.props
    const { defaultProdcut } = search
    const { viewer } = basemap
    const len = selectedOptions.length
    const { lon, lat } = selectedOptions[len - 1]
    const level = len === 1 ? 1500000 : len === 2 ? 800000 : 600000

    setView([lon, lat, level], true, viewer)
    const value = selectedOptions.map((item) => ({
      name: item.label,
      value: item.value
    }))
    changeFieldsSin({ key: 'regionIds', value }, defaultProdcut)
  }

  // 工具栏方法集
  toolbarMethod = (e) => {
    const { basemap, changeSearchSin } = this.props
    const { viewer } = basemap
    const target = getParents(e.target, 'LI')
    if (target && target.tagName === 'LI') {
      const { className } = target
      const type = className.replace(/ active| /, '')
      switch (type) {
        case 'zoomOut':
          viewer.camera.zoomIn()
          break
        case 'zoomIn':
          viewer.camera.zoomOut()
          break
        case 'recover':
          setView(initViewer, true, viewer)
          break
        case 'location':
          if (e.target.tagName !== 'LI') {
            if (e.target.parentNode.classList.contains('active')) {
              changeSearchSin({ key: 'location', value: false })
            } else {
              changeSearchSin({ key: 'location', value: true })
            }
          }
          break
        default:
          break
      }
    }
  }

  // 切换底图
  changeLayer = (value) => {
    const { basemap } = this.props
    const { viewer } = basemap
    changeMap(viewer, value, false)

    // 将矢量边界图层移至顶层
    raiseBoderToTop(viewer)
  }

  render() {
    const { search } = this.props
    const { defaultProdcut, allRegions, location } = search
    const { regionIds } = defaultProdcut

    const dataSource = [
      { name: '放大', value: 'zoomOut', icon: <i className="iconfont">&#xe665;</i> },
      { name: '缩小', value: 'zoomIn', icon: <i className="iconfont">&#xe732;</i> },
      { name: '恢复', value: 'recover', icon: <i className="iconfont">&#xe62e;</i> },
      // {
      //   name: '工具栏',
      //   icon: <i className="iconfont">&#xe665;</i>,
      //   children: [
      //     { name: '测距离', value: 'distance' },
      //     { name: '测面积', value: 'area' },
      //     { name: '清除', value: 'clear' }
      //   ]
      // },
      {
        name: '图层',
        icon: <i className="iconfont">&#xe66c;</i>,
        children: [
          // { name: '影像图', value: 'tdt_img_off' },
          // { name: '交通图', value: 'tdt_vec_off' },
          // { name: '地形图', value: 'tdt_ter_off' }
          { name: '影像图', value: 'st' },
          { name: '交通图', value: 'road' },
          { name: '地形图', value: 'terrain' }
        ]
      },
      {
        name: '探针',
        value: `location ${location ? 'active' : ''}`,
        icon: <i className="iconfont">&#xe651;</i>
      }
    ]
    return (
      <div id="toolbars">
        <Toolbar
          dataSource={dataSource}
          options={allRegions}
          hasRegion
          position="left"
          onChange={this.onChange}
          regionIds={regionIds && regionIds.map((item) => item.value)}
          toolbarMethod={this.toolbarMethod}
          changeLayer={this.changeLayer}
        />
      </div>
    )
  }
}

export default Toolbars
