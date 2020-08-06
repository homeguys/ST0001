/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/**
 * 深度合并两个对象
 * @param {*} FirstOBJ 对象1
 * @param {*} SecondOBJ 对象2
 */
export function deepObjectMerge(FirstOBJ, SecondOBJ) {
  // eslint-disable-next-line guard-for-in
  for (const key in SecondOBJ) {
    FirstOBJ[key] =
      FirstOBJ[key] && FirstOBJ[key].toString() === '[object Object]'
        ? deepObjectMerge(FirstOBJ[key], SecondOBJ[key])
        : (FirstOBJ[key] = SecondOBJ[key])
  }
  return FirstOBJ
}

/**
 * @issue 期次
 * @hasTime 是否需要
 */
export function getDateByIssue(issue, hasTime = true) {
  const year = issue.substr(0, 4) || '0000'
  const month = issue.substr(4, 2) || '00'
  const day = issue.substr(6, 2) || '00'
  const hour = issue.substr(8, 2) || '00'
  const minute = issue.substr(10, 2) || '00'
  const second = issue.substr(12, 2) || '00'
  return hasTime
    ? `${year}年${month}月${day}日 ${hour}时${minute}分${second}秒`
    : `${year}年${month}月${day}日`
}

/**
 *
 * @param {cycle} 周期
 * @param {issue} 期次
 * @return {str}
 */
export function getGeoTime(cycle, issue) {
  let cycleCode
  switch (cycle) {
    case 'COOH':
      cycleCode = '001'
      break
    case 'COOD':
      cycleCode = '002'
      break
    case 'COAW':
      cycleCode = '003'
      break
    case 'COTD':
      cycleCode = '004'
      break
    case 'COAM':
      cycleCode = '005'
      break
    case 'COAQ':
      cycleCode = '006'
      break
    case 'COAY':
      cycleCode = '007'
      break
    default:
      return '000'
  }

  const year = issue.substr(0, 4) || '0000'
  const month = issue.substr(4, 2) || '00'
  const day = issue.substr(6, 2) || '00'
  const hour = issue.substr(8, 2) || '00'
  const minute = issue.substr(10, 2) || '00'
  const second = issue.substr(12, 2) || '00'
  return `${year}-${month}-${day}T${hour}:${minute}:${second}.${cycleCode}Z`
}

/**
 * 提示弹出，封装antd
 * @param {*} message antd的message组件
 * @param {*} str 提示文字
 * @param {*} type 提示类型
 */
export function toast(message, str, type) {
  if (str !== '') {
    message.destroy()
    message.config({
      top: document.documentElement.clientHeight - 200,
      duration: 1
    })
    switch (type) {
      case 'success':
        message.success(str)
        break
      case 'warning':
        message.warning(str)
        break
      case 'error':
        message.error(str)
        break
      case 'info':
        message.info(str)
        break
      default:
        message.warning(str)
    }
  }
}
/**
 * 深度拷贝
 * @param {*} obj
 */
export function deepCloneObject(obj) {
  const objClone = Array.isArray(obj) ? [] : {}
  if (obj && typeof obj === 'object') {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        // 判断ojb子元素是否为对象，如果是，递归复制
        if (obj[key] && typeof obj[key] === 'object') {
          objClone[key] = deepCloneObject(obj[key])
        } else {
          // 如果不是，简单复制
          objClone[key] = obj[key]
        }
      }
    }
  }
  return objClone
}

/**
 * 两数组的并集
 * @param {*} arr1
 * @param {*} arr2
 */
export function arrUnion(arr1, arr2) {
  return Array.from(new Set([...arr1, ...arr2]))
}

/**
 * 两数组的交集
 * @param {*} arr1
 * @param {*} arr2
 */
export function arrIntersection(arr1, arr2) {
  return Array.from(new Set([...arr1].filter((x) => new Set(arr2).has(x))))
}

/**
 * 两数组的差集
 * @param {*} arr1
 * @param {*} arr2
 */
export function arrDifference(arr1, arr2) {
  return Array.from(new Set([...arr1].filter((x) => !new Set(arr2).has(x))))
}

/**
 * 解析xml（省市县）
 * @param {*} province
 */
export function parseAreaXml(province) {
  const options = []
  const options1 = []
  for (let i = 0; i < province.length; i++) {
    const cityArray = []
    const cityArray1 = []
    for (let j = 0; j < province[i].getElementsByTagName('city').length; j++) {
      const city = province[i].getElementsByTagName('city')
      const countyArray = []

      for (let k = 0; k < city[j].getElementsByTagName('county').length; k++) {
        const county = city[j].getElementsByTagName('county')
        countyArray.push({
          value: county[k].getAttribute('id'),
          label: county[k].getAttribute('name'),
          bottom: county[k].getAttribute('bottom'),
          lat: county[k].getAttribute('lat'),
          left: county[k].getAttribute('left'),
          level: county[k].getAttribute('level'),
          lon: county[k].getAttribute('lon'),
          right: county[k].getAttribute('right'),
          top: county[k].getAttribute('top')
        })
      }
      cityArray.push({
        value: city[j].getAttribute('id'),
        label: city[j].getAttribute('name'),
        bottom: city[j].getAttribute('bottom'),
        lat: city[j].getAttribute('lat'),
        left: city[j].getAttribute('left'),
        level: city[j].getAttribute('level'),
        lon: city[j].getAttribute('lon'),
        right: city[j].getAttribute('right'),
        top: city[j].getAttribute('top'),
        children: countyArray
      })
      cityArray1.push({
        value: city[j].getAttribute('id'),
        label: city[j].getAttribute('name'),
        bottom: city[j].getAttribute('bottom'),
        lat: city[j].getAttribute('lat'),
        left: city[j].getAttribute('left'),
        level: city[j].getAttribute('level'),
        lon: city[j].getAttribute('lon'),
        right: city[j].getAttribute('right'),
        top: city[j].getAttribute('top')
      })
    }
    options.push({
      value: province[i].getAttribute('id'),
      label: province[i].getAttribute('name'),
      bottom: province[i].getAttribute('bottom'),
      lat: province[i].getAttribute('lat'),
      left: province[i].getAttribute('left'),
      level: province[i].getAttribute('level'),
      lon: province[i].getAttribute('lon'),
      right: province[i].getAttribute('right'),
      top: province[i].getAttribute('top'),
      children: cityArray
    })
    options1.push({
      value: province[i].getAttribute('id'),
      label: province[i].getAttribute('name'),
      bottom: province[i].getAttribute('bottom'),
      lat: province[i].getAttribute('lat'),
      left: province[i].getAttribute('left'),
      level: province[i].getAttribute('level'),
      lon: province[i].getAttribute('lon'),
      right: province[i].getAttribute('right'),
      top: province[i].getAttribute('top'),
      children: cityArray1
    })
  }
  return [options, options1]
}

/**
 * 清除同级其他元素高亮，当前元素设置高亮
 * @param {*} lists
 * @param {*} current
 */
export function setActive(lists, current, className) {
  // 清除高亮
  Array.from(lists).forEach((item) => {
    item.classList.remove(className)
  })
  // 当前增加高亮
  if (current) {
    current.classList.add(className)
  }
}

/**
 * 获取元素父级元素
 * @param el // 当前对象
 * @param parentSelector // 父级对象
 * @return {*}
 */
export function getParents(el, parent = '') {
  const parentSelector = parent.replace('.', '')
  let p = el.parentNode

  if (el.tagName === parentSelector || Array.from(el.classList).indexOf(parentSelector) !== -1) {
    return el
  }

  let condition = parent.includes('.')
    ? Array.from(p.classList).indexOf(parentSelector) === -1
    : p.tagName !== parentSelector

  while (condition) {
    p = p.parentNode
    condition = parent.includes('.')
      ? Array.from(p.classList).indexOf(parentSelector) === -1
      : p.tagName !== parentSelector
    if (p.tagName === 'HTML') return
  }

  return p
}
