/* eslint-disable no-unused-expressions */
/**
 * @description 视角定位
 * @param {Object} postion 位置 [118, 33,1000000]||[118, 33]
 * @param {Boolean} isFly
 * @param {Object} viewer 地图对象
 */
export default function drawLegend(data, width = 30, height = 20, id = 'legend-canvas') {
  document.getElementById('legend').style.display = 'block'
  const legendName = '图例'
  const colorArray = data.colors
  const rangeValue = data.values
  // colorArray.shift()
  // rangeValue.shift()
  const Colormap = colorArray
  const labelArray = rangeValue
  const dataObj = []
  Colormap &&
    Colormap.forEach((element) => {
      if (element) {
        const a = element[0]
        const b = element[1]
        const c = element[2]
        const color = `rgb(${a},${b},${c})`
        dataObj.push(color)
      }
    })
  const canvas = document.getElementById(id)
  const ctx = canvas.getContext('2d')
  const xheight = dataObj.length * (height + 2) // 计算canvas宽度
  canvas.width = 95
  canvas.height = xheight + 40
  ctx.fillStyle = 'rgba(0,0,0,0)'
  ctx.fillRect(0, 0, 450, xheight) // 绘制底图
  ctx.font = '20px sans-serif'
  ctx.fillStyle = '#fff'
  const str = legendName
  ctx.fillText(str, 20, 20)
  for (let i = 0; i < dataObj.length; i++) {
    // 实现文字前面带色块
    ctx.fillStyle = dataObj[i] // 块颜色
    ctx.fillRect(20, 30 + i * height, width, height) // 颜色块：x,y,w,h
  }
  for (let i = 0; i < labelArray.length; i++) {
    // 实现文字
    ctx.font = '13px sans-serif'
    ctx.fillStyle = '#fff'
    const txt = labelArray[i]
    ctx.fillText(txt, 58, 35 + i * height)
  }
}
