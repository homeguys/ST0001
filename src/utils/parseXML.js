/**
 * @description 将算法渲染方案xml解析成数组对象方便调用
 * @author wanglei
 * @param {xml} data
 * @return {Array}
 */
export default function parseXML(data) {
  const result = []
  const parser = new DOMParser()
  const xmlDoc = parser.parseFromString(data, 'text/xml')
  const pluginArray = xmlDoc.getElementsByTagName('Plugin')
  const len = pluginArray.length
  for (let i = 0; i < len; i++) {
    const ele1 = pluginArray[i]
    let obj = {}
    const prodName = ele1.getAttribute('ProdName')
    const reMapArr = ele1.getElementsByTagName('ReMaps')[0].children
    const reMaps = []
    for (let j = 0; j < reMapArr.length; j++) {
      const ele2 = reMapArr[j]

      const color = ele2
        .getAttribute('Color')
        .split(',')
        .map((item) => Number(item))
      color.push(1)
      const minV = ele2.getAttribute('MinV')
      reMaps.push({
        color,
        value: minV
      })
      if (j === reMapArr.length - 1) {
        reMaps.push({
          color: null,
          value: ele2.getAttribute('MaxV')
        })
      }
    }

    obj = {
      prodName,
      reMaps
    }
    result.push(obj)
  }
  return result
}
