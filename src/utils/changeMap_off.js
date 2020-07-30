/* eslint-disable */
// tdt_img_off 影像图
// tdt_vec_off 交通图
// tdt_ter_off 地形图
const mapArr = ['tdt_img_off', 'tdt_vec_off', 'tdt_ter_off']

//  地图切换 changeMap(viewer, 1, false)
export default function changeMapOff(viewer, value) {
  const layerArr = viewer.imageryLayers._layers

  const hideMap = mapArr.filter((item) => item !== value)

  for (let i = 0; i < layerArr.length; i++) {
    const layerName = layerArr[i]._imageryProvider._layer
    if (hideMap.includes(layerName)) {
      layerArr[i].show = false
    } else {
      layerArr[i].show = true
    }
  }
}
