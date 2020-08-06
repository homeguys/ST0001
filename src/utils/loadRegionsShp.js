import { ImageryLayer, WebMapServiceImageryProvider } from 'cesium'

/**
 * @description 加载矢量边界服务
 * @author wanglei
 * @param {String} layerName 自定义图层名
 * @param {String} url 服务url
 * @param {String} layers 发布服务的名
 * @param {Object} cqlFilter 查询条件
 * @param {Object} viewer 地图viewer对象
 * @param {String} removeLayer 需要移除的图层
 */

const existLayers = new Map()
export default function loadShp(layerName, url, layers, cqlFilter, viewer, removeLayer) {
  if (removeLayer) {
    const water = existLayers.get(removeLayer)
    viewer.imageryLayers.remove(water)
    existLayers.delete(removeLayer)
    return
  }
  // 判断是否已有边界
  if (existLayers.get(layerName)) {
    viewer.imageryLayers.remove(existLayers.get(layerName))
    existLayers.delete(layerName)
  }

  if (layerName === 'AreaProvince') {
    viewer.imageryLayers.remove(existLayers.get('CityOrCounty'))
    existLayers.delete('CityOrCounty')
  }

  const parameters = {
    service: 'WMS',
    format: 'image/png',
    transparent: true,
    ...cqlFilter
  }

  const provider = new WebMapServiceImageryProvider({
    url,
    layers,
    parameters
  })

  const shpLayer = new ImageryLayer(provider)
  existLayers.set(layerName, shpLayer)
  viewer.imageryLayers.add(shpLayer)
}
