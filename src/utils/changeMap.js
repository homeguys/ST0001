/* eslint-disable */

// tdt_img_off 影像图
// tdt_vec_off 交通图
// tdt_ter_off 地形图

//  地图切换 changeMap(viewer, 1, false)
export default function changeMap(viewer, value) {
  const layerArr = viewer.imageryLayers._layers
  if (value === '1') {
    // 影像图
    for (let i = 0; i < layerArr.length; i++) {
      const layer = layerArr[i]._imageryProvider._layer
      if (layer === 'tdt_c_img' || layer === 'tdt_c_img_cia') {
        layerArr[i].show = true
      } else if (
        layer === 'tdt_c_vec' ||
        layer === 'tdt_c_vec_cva' ||
        layer === 'tdt_c_ter' ||
        layer === 'tdt_c_ter_cia'
      ) {
        layerArr[i].show = false
      }
    }
  } else if (value === '2') {
    // 交通图
    for (let i = 0; i < layerArr.length; i++) {
      const layer = layerArr[i]._imageryProvider._layer
      if (layer === 'tdt_c_vec' || layer === 'tdt_c_vec_cva') {
        layerArr[i].show = true
      } else if (
        layer === 'tdt_c_img' ||
        layer === 'tdt_c_img_cia' ||
        layer === 'tdt_c_ter' ||
        layer === 'tdt_c_ter_cia'
      ) {
        layerArr[i].show = false
      }
    }
  } else {
    // 地形图

    for (let i = 0; i < layerArr.length; i++) {
      const layer = layerArr[i]._imageryProvider._layer
      if (layer === 'tdt_c_ter' || layer === 'tdt_c_ter_cia') {
        layerArr[i].show = true
      } else if (
        layer === 'tdt_c_vec' ||
        layer === 'tdt_c_vec_cva' ||
        layer === 'tdt_c_img' ||
        layer === 'tdt_c_img_cia'
      ) {
        layerArr[i].show = false
      }
    }
  }
}
