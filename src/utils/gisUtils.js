import { Cartesian3 } from 'cesium'
/**
 * @description 视角定位
 * @param {Object} postion 位置 [118, 33,1000000]||[118, 33]
 * @param {Boolean} isFly
 * @param {Object} viewer 地图对象
 */
export default function setView(postion, isFly = false, viewer) {
  if (isFly) {
    // 设置位置
    viewer.camera.flyTo({
      destination: Cartesian3.fromDegrees(
        Number(postion[0]),
        Number(postion[1]),
        Number(postion[2]) ? Number(postion[2]) : viewer.camera.positionCartographic.height
      )
    })
  } else {
    // 设置位置
    viewer.camera.setView({
      destination: Cartesian3.fromDegrees(
        Number(postion[0]),
        Number(postion[1]),
        Number(postion[2]) ? Number(postion[2]) : viewer.camera.positionCartographic.height
      )
    })
  }
}
