/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable operator-linebreak */
import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { is, fromJS } from 'immutable'
import {
  Viewer,
  Ion,
  SceneMode,
  Cartesian3,
  WebMapTileServiceImageryProvider,
  Credit,
  ScreenSpaceEventHandler,
  ScreenSpaceEventType,
  defined,
  SceneTransforms,
  Cartographic,
  GeographicTilingScheme,
  addImageryProvider,
  Math
} from 'cesium'
import raiseBoderToTop from '../../utils/raiseBoderToTop'
import loadShp from '../../utils/loadRegionsShp'
import GeoServerLayer from './geoServerLayer'
import { getGeoTime } from '../../utils/utils'
import { getConfigs, changeSearchSin } from '../../store/search.redux'
import { initMap } from '../../store/basemap.redux'
import { geoserverIp, initViewer } from '../../config/varibles'
import drawLagend from '../../utils/drawLegend'
import lonLatFormat from '../../utils/lonLatFormat'
import './style.scss'

// 在线影像图
// eslint-disable-next-line camelcase
const tdt_c_img = new WebMapTileServiceImageryProvider({
  url:
    'http://{s}.tianditu.gov.cn/img_c/wmts?service=wmts&request=GetTile&version=1.0.0' +
    '&LAYER=img&tileMatrixSet=c&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}' +
    '&style=default&format=tiles&tk=7d44edad9101623cbb6f3b8c03a6de95',
  layer: 'tdt_c_img',
  credit: 'tdt_c_img',
  style: 'default',
  format: 'tiles',
  tileMatrixSetID: 'c',
  subdomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
  tilingScheme: new GeographicTilingScheme(),
  tileMatrixLabels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  maximumLevel: 20
})

// eslint-disable-next-line camelcase
const tdt_c_img_cia = new WebMapTileServiceImageryProvider({
  url:
    'http://{s}.tianditu.gov.cn/cia_c/wmts?service=wmts&request=GetTile&version=1.0.0' +
    '&LAYER=cia&tileMatrixSet=c&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}' +
    '&style=default.jpg&tk=4aef299f1178a8329a9cdc325a055b85',
  layer: 'tdt_c_img_cia',
  credit: 'tdt_c_img_cia',
  style: 'default',
  format: 'tiles',
  tileMatrixSetID: 'c',
  subdomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
  tilingScheme: new GeographicTilingScheme(),
  tileMatrixLabels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  maximumLevel: 20
})

// 在线地形图
// eslint-disable-next-line camelcase
const tdt_c_ter = new WebMapTileServiceImageryProvider({
  url:
    'http://t0.tianditu.com/ter_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=ter&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=7d44edad9101623cbb6f3b8c03a6de95',
  layer: 'tdt_c_ter',
  style: 'default',
  format: 'image/jpeg',
  tileMatrixSetID: 'GoogleMapsCompatible',
  show: false
})

// 地形图标注
// eslint-disable-next-line camelcase
const tdt_c_ter_cia = new WebMapTileServiceImageryProvider({
  url:
    'http://t0.tianditu.com/cta_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cta&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=7d44edad9101623cbb6f3b8c03a6de95',
  layer: 'tdt_c_ter_cia',
  style: 'default',
  format: 'image/jpeg',
  tileMatrixSetID: 'GoogleMapsCompatible',
  show: false
})

// 矢量地图
// eslint-disable-next-line camelcase
const tdt_c_vec = new WebMapTileServiceImageryProvider({
  url:
    'http://{s}.tianditu.gov.cn/vec_c/wmts?service=wmts&request=GetTile&version=1.0.0' +
    '&LAYER=vec&tileMatrixSet=c&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}' +
    '&style=default&format=tiles&tk=7d44edad9101623cbb6f3b8c03a6de95',
  layer: 'tdt_c_vec',
  credit: 'tdt_c_vec',
  style: 'default',
  format: 'tiles',
  tileMatrixSetID: 'c',
  subdomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
  tilingScheme: new GeographicTilingScheme(),
  tileMatrixLabels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  maximumLevel: 20
})

// 矢量地图标注
// eslint-disable-next-line camelcase
const tdt_c_vec_cva = new WebMapTileServiceImageryProvider({
  url:
    'http://{s}.tianditu.gov.cn/cva_c/wmts?service=wmts&request=GetTile&version=1.0.0' +
    '&LAYER=cva&tileMatrixSet=c&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}' +
    '&style=default.jpg&tk=7d44edad9101623cbb6f3b8c03a6de95',
  layer: 'tdt_c_vec_cva',
  credit: 'tdt_c_vec_cva',
  style: 'default',
  format: 'tiles',
  tileMatrixSetID: 'c',
  subdomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
  tilingScheme: new GeographicTilingScheme(),
  tileMatrixLabels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  maximumLevel: 20
})

// 影像图
const tdtImgOff = new WebMapTileServiceImageryProvider({
  url:
    'http://192.168.1.238:16080/geoserver/gwc/service/wmts?&layer=hthtmap:tdt_img_11&style=&Service=WMTS&Request=GetTile&version=1.1.0&format=image/png&tileMatrixSet=EPSG:4326&TileMatrix={TileMatrix}&tileRow={TileRow}&tileCoL={TileCol}',
  layer: 'tdt_img_off',
  credit: 'tdt_img_off',
  style: '',
  format: 'image/png',
  maximumLevel: 20,
  minimumLevel: 0,
  tileMatrixSetID: 'EPSG:4326',
  tilingScheme: new GeographicTilingScheme(),
  tileMatrixLabels: [
    'EPSG:4326:0',
    'EPSG:4326:1',
    'EPSG:4326:2',
    'EPSG:4326:3',
    'EPSG:4326:4',
    'EPSG:4326:5',
    'EPSG:4326:6',
    'EPSG:4326:7',
    'EPSG:4326:8',
    'EPSG:4326:9',
    'EPSG:4326:10',
    'EPSG:4326:11'
  ]
})

// 交通图
const tdtVecOff = new WebMapTileServiceImageryProvider({
  url:
    'http://192.168.1.238:16080/geoserver/gwc/service/wmts?&layer=hthtmap:tdt_map_11&style=&Service=WMTS&Request=GetTile&version=1.1.0&format=image/png&tileMatrixSet=EPSG:4326&TileMatrix={TileMatrix}&tileRow={TileRow}&tileCoL={TileCol}',
  layer: 'tdt_vec_off',
  credit: 'tdt_vec_off',
  style: '',
  format: 'image/png',
  maximumLevel: 20,
  minimumLevel: 0,
  tileMatrixSetID: 'EPSG:4326',
  tilingScheme: new GeographicTilingScheme(),
  tileMatrixLabels: [
    'EPSG:4326:0',
    'EPSG:4326:1',
    'EPSG:4326:2',
    'EPSG:4326:3',
    'EPSG:4326:4',
    'EPSG:4326:5',
    'EPSG:4326:6',
    'EPSG:4326:7',
    'EPSG:4326:8',
    'EPSG:4326:9',
    'EPSG:4326:10',
    'EPSG:4326:11'
  ]
})

// 地形图
const tdtTerOff = new WebMapTileServiceImageryProvider({
  url:
    'http://192.168.1.238:16080/geoserver/gwc/service/wmts?&layer=hthtmap:tdt_terrain_11&style=&Service=WMTS&Request=GetTile&version=1.1.0&format=image/png&tileMatrixSet=EPSG:4326&TileMatrix={TileMatrix}&tileRow={TileRow}&tileCoL={TileCol}',
  layer: 'tdt_ter_off',
  credit: 'tdt_ter_off',
  style: '',
  format: 'image/png',
  maximumLevel: 20,
  minimumLevel: 0,
  tileMatrixSetID: 'EPSG:4326',
  tilingScheme: new GeographicTilingScheme(),
  tileMatrixLabels: [
    'EPSG:4326:0',
    'EPSG:4326:1',
    'EPSG:4326:2',
    'EPSG:4326:3',
    'EPSG:4326:4',
    'EPSG:4326:5',
    'EPSG:4326:6',
    'EPSG:4326:7',
    'EPSG:4326:8',
    'EPSG:4326:9',
    'EPSG:4326:10',
    'EPSG:4326:11'
  ]
})

@connect((state) => ({ search: state.search }), { getConfigs, initMap, changeSearchSin })
class BaseMap extends React.Component {
  constructor() {
    super()
    this.state = {}

    this.viewer = ''
    this.camera = ''
    this.scene = ''
    this.initViewer = initViewer.map((item, index) => (index === 0 ? item + 2 : item))
    this.myGeoServerLayer = null
  }

  componentDidMount() {
    const { getConfigs, initMap } = this.props
    getConfigs()

    Ion.defaultAccessToken = null
    Ion.defaultAccessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1NWI5MGUzNi1mYWI3LTQzY2QtOGI0Ni0xZWYyNTAxNGM4N2MiLCJpZCI6MTI1OTgsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NjE0NDkyNTV9.hBH0PGSnKErc_yNhIePASUkr3QPDoo0KDX9uLpNBUns'
    this.viewer = new Viewer('cesiumContainer', {
      sceneMode: SceneMode.SCENE2D,
      geocoder: false,
      homeButton: false,
      sceneModePicker: false,
      baseLayerPicker: true, // 选取picker
      navigationHelpButton: false,
      animation: false,
      timeline: false,
      fullscreenButton: false,
      infoBox: true,
      selectionIndicator: false
      // imageryProvider: tdtTerOff
    })
    // this.viewer.imageryLayers.addImageryProvider(tdtVecOff) // 交通图
    // this.viewer.imageryLayers.addImageryProvider(tdtImgOff) // 影像图

    this.viewer.imageryLayers.addImageryProvider(tdt_c_ter)
    this.viewer.imageryLayers.addImageryProvider(tdt_c_ter_cia)
    this.viewer.imageryLayers.addImageryProvider(tdt_c_vec)
    this.viewer.imageryLayers.addImageryProvider(tdt_c_vec_cva)
    this.viewer.imageryLayers.addImageryProvider(tdt_c_img)
    this.viewer.imageryLayers.addImageryProvider(tdt_c_img_cia)

    this.camera = this.viewer.camera
    this.initCamera()
    initMap(this.viewer)

    // 第一次加载整个云南边界，不会删除
    loadShp(
      'AreaProvince',
      geoserverIp,
      'yn2:AreaProvince',
      { CQL_FILTER: "ID = '530000000000'" },
      this.viewer
    )

    // 鼠标移入自定义弹出框
    const { scene } = this.viewer
    const { viewer } = this
    const handler3D = new ScreenSpaceEventHandler(scene.canvas)
    handler3D.setInputAction((res) => {
      const { endPosition } = res
      const cartesian = this.camera.pickEllipsoid(endPosition, scene.globe.ellipsoid)
      if (cartesian) {
        const cartographic = Cartographic.fromCartesian(cartesian)
        const position = {
          longitude: Math.toDegrees(cartographic.longitude),
          latitude: Math.toDegrees(cartographic.latitude)
        }
        const formatPosition = lonLatFormat(position)
        const lonLatDiv = document.getElementsByClassName('lonlat')[0]
        const lonSpan = lonLatDiv.getElementsByClassName('lon')[0]
        const latiSpan = lonLatDiv.getElementsByClassName('lat')[0]
        lonSpan.innerText = `经度：${formatPosition.lon} `
        latiSpan.innerText = `纬度：${formatPosition.lat}`
      }

      // const spatialUrl =
      //   'http://192.168.1.116:16080/geoserver/yn2/wms?SERVICE=WMS&VERSION=1.1.0&REQUEST=GetMap&outputformat=json'
      // const layerName = 'yn2:EVI_NPP_VIIRS'
      // console.warn(res)
      // console.warn(viewer.camera)
      // const ray = viewer.camera.getPickRay(res.position)

      // const cartesian = viewer.scene.globe.pick(ray, viewer.scene)
      // const xyz = SceneTransforms.wgs84ToWindowCoordinates(viewer.scene, cartesian)
      // const filter = `${spatialUrl}&typename=${layerName}&Filter=<Filter xmlns="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml"><Intersects><PropertyName>GRAY_INDEX</PropertyName><gml:Point><gml:coordinates>${xyz.x},${xyz.y}</gml:coordinates></gml:Point></Intersects></Filter>`

      // console.warn(ray)

      // axios.post(filter).then((result) => {
      //   console.warn(result)
      //   if (result.status === 200) {
      //     console.warn(result.data.features)
      //   }
      // })
    }, ScreenSpaceEventType.MOUSE_MOVE)
  }

  componentDidUpdate(nextProps) {
    try {
      const { search, changeSearchSin } = this.props
      const { defaultProdcut, layersAndXML, defaultDataList, location } = search
      const { sateAndSensor, mark, cycle } = defaultProdcut
      const { search: nextSearch } = nextProps
      const { defaultDataList: nextDefaultDataList, layersAndXML: nextLayersAndXML } = nextSearch
      if (!location) {
        const infoBox = document.querySelector('.cesium-viewer-infoBoxContainer')
        infoBox.style.display = 'none'
      } else {
        const infoBox = document.querySelector('.cesium-viewer-infoBoxContainer')
        infoBox.style.display = 'block'
      }

      if (
        !is(fromJS(defaultDataList), fromJS(nextDefaultDataList)) ||
        !is(fromJS(layersAndXML), fromJS(nextLayersAndXML))
      ) {
        if (!Object.keys(defaultDataList).length) {
          // 如果之前有图层，先删除再添加
          // eslint-disable-next-line no-unused-expressions
          this.myGeoServerLayer && this.viewer.imageryLayers.remove(this.myGeoServerLayer)
        }
        changeSearchSin({ key: 'location', value: false })
        const prodName = sateAndSensor.length ? `${mark}_${sateAndSensor}` : `${mark}`
        // console.warn(prodName)
        // const prodName = 'NDVI_FY3B_VIRR'
        if (!layersAndXML) return
        const [layer] = layersAndXML.layersCfg.filter((item) => item.prodName === prodName)
        const [style] = layersAndXML.productCfg.filter((item) => item.prodName === prodName)

        if (layer && this.viewer && style) {
          if (Object.keys(defaultDataList).length !== 0) {
            const { issue } = defaultDataList
            // 解析cycle、issue，组合成geoserver规定格式
            const geoTime = getGeoTime(cycle, issue)
            // const geoTime = '2019-10-29T15:29:00.002Z'

            // 如果之前有图层，先删除再添加
            if (this.myGeoServerLayer) {
              this.viewer.imageryLayers.remove(this.myGeoServerLayer)
            }

            // 画图例
            const colors = style ? style.reMaps.map((item) => item.color) : ''
            const values = style ? style.reMaps.map((item) => item.value) : ''
            drawLagend({ colors, values })

            // 如果是高分三水体面积监测
            if (mark === 'WATER') {
              // 加载高分三水体面积检测的矢量边界
              loadShp('water', geoserverIp, 'yn2:water', {}, this.viewer)
            } else {
              // 移除高分三水体面积检测的矢量边界
              loadShp('water', geoserverIp, 'yn2:water', {}, this.viewer, 'water')
            }

            // 加载产品shp
            this.myGeoServerLayer = new GeoServerLayer(layer, style, geoTime)
            this.viewer.imageryLayers.add(this.myGeoServerLayer)

            // 将矢量边界图层移至顶层
            raiseBoderToTop(this.viewer)
          } else {
            document.getElementById('legend').style.display = 'none'
            // 移除高分三水体面积检测的矢量边界
            loadShp('water', geoserverIp, 'yn2:water', {}, this.viewer, 'water')
          }
        } else {
          // 如果之前有图层，先删除再添加
          // eslint-disable-next-line no-unused-expressions
          this.myGeoServerLayer && this.viewer.imageryLayers.remove(this.myGeoServerLayer)
          // 移除高分三水体面积检测的矢量边界
          loadShp('water', geoserverIp, 'yn2:water', {}, this.viewer, 'water')
        }
      }
    } catch (error) {
      console.warn('something wrong!')
    }
  }

  // 初始化视角
  initCamera = () => {
    this.camera.setView({
      destination: Cartesian3.fromDegrees(...this.initViewer)
    })
  }

  render() {
    return (
      <div id="basemap">
        <div id="cesiumContainer" />
        <div className="lonlat">
          <span className="lon" />
          <span className="lat" />
        </div>
      </div>
    )
  }
}

export default BaseMap
