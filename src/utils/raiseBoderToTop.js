/* eslint-disable no-underscore-dangle */
// 将矢量边界图层移至顶层
export default function raiseBoderToTop(viewer) {
  const layers = viewer.imageryLayers._layers
  const layerArr = []

  for (let i = 0; i < layers.length; i++) {
    const element = layers[i]
    const layerName = element._imageryProvider._layers
    if (
      layerName === 'yn2:AreaProvince' ||
      layerName === 'yn2:AreaCity' ||
      layerName === 'yn2:AreaCounty' ||
      layerName === 'yn2:water'
    ) {
      layerArr.push(element)
    }
  }

  layerArr.forEach((item) => {
    viewer.imageryLayers.raiseToTop(item)
  })
}
