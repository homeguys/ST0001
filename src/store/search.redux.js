/* eslint-disable no-param-reassign */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-extra-semi */
/* eslint-disable no-case-declarations */
/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios'
import qs from 'qs'
import moment from 'moment'
import { interfaceDir, pageSize } from '../config/varibles'
import parseXML from '../utils/parseXML'

const usefulAttr = [
  'mark',
  'path',
  'id',
  'regionIds',
  'cycles',
  'cycle',
  'sateAndSensors',
  'sateAndSensor',
  'statistics',
  'beginTime',
  'endTime',
  // 'pageNum',
  // 'pageSize',
  'Default'
]

const CHANGE_FIELD_SIN = 'CHANGE_FIELD_SIN' // 修改单个字段
const CHANGE_SEARCH_SIN = 'CHANGE_SEARCH_SIN' // 修改单个search字段
const SEARCH_LIST = 'SEARCH_LIST' // 查找产品列表
const GET_PRODUCT_TREE = 'GET_PRODUCT_TREE' // 获取产品树
const GET_DEFAULT_PRODUCT = 'GET_DEFAULT_PRODUCT' // 获取默认的侧边栏产品配置
const SET_DEFAULT_DATA_LIST = 'SET_DEFAULT_DATA_LIST' // 设置默认展示的产品列表项
const GET_LAYERS_AND_XML = 'GET_LAYERS_AND_XML' // 获取layers和渲染方案xml文件
const SHOW_MODAL = 'SHOW_MODAL' // 显示或隐藏弹出框
const SET_ALL_REGIONS = 'SET_ALL_REGIONS' // 设置所以的地区
const GET_REGIONS_STATISTIC = 'GET_REGIONS_STATISTIC' // 获取区域柱状图统计数据
const INIT_SERACH = 'INIT_SERACH' // 初始化search

// 当前时间往前推
const startTime = new Date()
const startYear = startTime.getFullYear() - 2
startTime.setFullYear(startYear)

const beginTime = moment(startTime)
const endTime = moment(new Date())
// const beginTime = moment('2018-10-12')
// const endTime = moment('2018-12-12')
const pageNum = 1

const initState = {
  /* 产品配置 */
  productTree: [], // 自定义和接口合并产品树结构
  flatTree: [], // 自定义和接口合并产品扁平结构
  defaultProdcut: {
    mark: '', // 产品标识
    path: '', // 产品标识三级组合 admp_ADM_VSWI
    id: '', // 产品id
    regionIds: [], // 区域id
    cycles: [], // 所有周期
    cycle: '', // 周期
    sateAndSensors: [], // 所有卫星和传感器
    sateAndSensor: '', // 卫星和传感器
    Default: false,
    beginTime, // 开始时间
    endTime, // 结束时间
    pageNum, // 当前页码
    pageSize // 每页显示数
  }, // 默认选中的产品

  /* 产品列表 */
  dataSource: {
    productInfoList: [],
    totalCount: 0
  }, // 产品查询结果(包括total)
  defaultDataList: {}, // 默认展示的产品列表项
  activeIndex: 0, // 默认展示的产品列表项索引值
  regionsBar: [], // 区域柱状图统计数据

  /* 其他 */
  allRegions: [], // 所有的region集合
  allRegionsBar: [], // 所有的region集合
  layersAndXML: [],
  showInfoPreviewModal: false, // 产品详情图片预览modal

  /* 产品列表 */
  showStatisticModal: false, // 产品统计弹出框
  showAutoplayModal: false, // 轮播图播放弹出框

  /* 探针是否打开 */
  location: false
}

export function search(state = initState, action) {
  switch (action.type) {
    case CHANGE_FIELD_SIN:
      return {
        ...state,
        defaultProdcut: { ...state.defaultProdcut, [action.data.key]: action.data.value }
      }
    case CHANGE_SEARCH_SIN:
      return {
        ...state,
        [action.data.key]: action.data.value
      }
    case SEARCH_LIST:
      const data = action.data.productInfoList
      return {
        ...state,
        dataSource: action.data,
        defaultDataList: data.length !== 0 ? data[0] : {},
        activeIndex: 0,
        defaultProdcut:
          action.key === 'pageNum' ? state.defaultProdcut : { ...state.defaultProdcut, pageNum: 1 }
      }
    case SET_DEFAULT_DATA_LIST:
      return {
        ...state,
        defaultDataList: action.data.defaultDataList,
        activeIndex: action.data.activeIndex
      }
    case GET_PRODUCT_TREE:
      return {
        ...state,
        productTree: action.data.productTree,
        flatTree: action.data.flatTree
      }
    case GET_DEFAULT_PRODUCT:
      return { ...state, defaultProdcut: { ...state.defaultProdcut, ...action.data } }
    case GET_LAYERS_AND_XML:
      return { ...state, layersAndXML: action.data }
    case SHOW_MODAL:
      return { ...state, [action.data.name]: action.data.value }
    case SET_ALL_REGIONS:
      return { ...state, allRegions: action.data[0], allRegionsBar: action.data[1] }
    case GET_REGIONS_STATISTIC:
      return { ...state, regionsBar: action.data }
    case INIT_SERACH:
      return initState
    default:
      return state
  }
}

// 初始化search
export function initSearch() {
  return { type: INIT_SERACH }
}

// 产品查询
export function productSearch(params, key) {
  const newParams = {
    productId: params.id,
    regionIds: params.regionIds ? params.regionIds.map((item) => item.value).join(',') : '',
    cycle: params.cycle,
    beginTime: params.beginTime
      ? params.beginTime.format('YYYY-MM-DD HH:mm:ss')
      : beginTime.format('YYYY-MM-DD HH:mm:ss'),
    endTime: params.endTime
      ? params.endTime.format('YYYY-MM-DD HH:mm:ss')
      : endTime.format('YYYY-MM-DD HH:mm:ss'),
    satname: params.sateAndSensor ? params.sateAndSensor.split('_')[0] : '',
    sensorname: params.sateAndSensor ? params.sateAndSensor.split('_')[1] : '',
    pageNum: params.pageNum ? params.pageNum : pageNum,
    pageSize
  }

  const data = qs.stringify(newParams)
  return (dispatch) => {
    axios.post(`${interfaceDir}/product/productSearch`, data).then((res) => {
      // axios.get('./interface/productSearch.json').then((res) => {
      if (res.data.status === 200) {
        const { data } = res.data
        dispatch({ type: SEARCH_LIST, data, key })

        // let data
        // if (params.id === '338c5c0f40f14bcc98a3b1a6c7d61f5e') {
        //   data = res.data.data
        // } else {
        //   data = {
        //     productInfoList: [],
        //     totalCount: 0
        //   }
        // }
        // dispatch({ type: SEARCH_LIST, data, key })
      }
    })
  }
}

// 全部下载
export function downloadAll(params) {
  const data = qs.stringify(params)
  return (dispatch) => {
    axios.post(`${interfaceDir}/product/downLoadAllFileByCondition`, data).then((res) => {
      const blob = new Blob([res.data])
      const elink = document.createElement('a')
      // elink.download = '当前所有期次.zip'
      elink.style.display = 'none'
      elink.href = URL.createObjectURL(blob)
      document.body.appendChild(elink)
      elink.click()
      document.body.removeChild(elink)
    })
  }
}

// 产品详情图片预览弹出显示隐藏
export function showModal(data) {
  return { type: SHOW_MODAL, data }
}

// 修改单个search值
export function changeSearchSin(data) {
  return { type: CHANGE_SEARCH_SIN, data }
}

// 修改单个表单值
export function changeFieldsSin(data, params) {
  return (dispatch) => {
    // eslint-disable-next-line no-unused-expressions
    params && dispatch(productSearch({ ...params, ...{ [data.key]: data.value } }, data.key))
    dispatch({ type: CHANGE_FIELD_SIN, data })
  }
}

/* -------------------Start请求自定义产品配置和接口产品tree-----------------------*/
// 获取默认侧边栏产品配置
export function getDefaultProduct(data) {
  if (data.cycles && !data.cycle) {
    data.cycle = data.cycles[0] ? data.cycles[0].key : ''
  }

  if (data.sateAndSensors && !data.sateAndSensor) {
    data.sateAndSensor = data.sateAndSensors[0] ? data.sateAndSensors[0] : ''
  }

  return (dispatch) => {
    const defaultProduct = {}
    for (let i = 0; i < usefulAttr.length; i++) {
      const ele = usefulAttr[i]
      if (ele === 'beginTime') {
        defaultProduct[ele] = data[ele] || beginTime
      } else if (ele === 'endTime') {
        defaultProduct[ele] = data[ele] || endTime
      } else {
        defaultProduct[ele] = data[ele] || ''
      }
    }
    dispatch({ type: GET_DEFAULT_PRODUCT, data: defaultProduct })
    dispatch(productSearch(defaultProduct))
  }
}

// 请求本地productConfig.json
function getProductConfig() {
  return axios.get('./data/productConfig.json')
}

// 请求接口返回product tree
function getProductTree() {
  const userId = window.sessionStorage.getItem('userId')
  const params = qs.stringify({ userId })
  return axios.post(`${interfaceDir}/product/productTree`, params)
  // return axios.get('./interface/productTree.json') // 本地
}

// 合并产品树结构
export function mergeProductTree() {
  const flatTree = [] // 扁平化后台请求树结构产品列表

  function handleFlatTree(tree, path = '') {
    tree.forEach((item) => {
      // eslint-disable-next-line no-param-reassign
      item.path = path ? `${path}_${item.mark}` : item.mark

      flatTree.push(item)
      if (item.subTree) {
        handleFlatTree(item.subTree, item.path)
      }
    })
  }

  return (dispatch) => {
    axios
      .all([getProductConfig(), getProductTree()])
      .then(
        axios.spread((config, tree) => {
          /**
           * 考虑自定义配置和接口返回为空的情况
           */
          const productConfig = config.data // 自定义配置产品
          const productTree = tree.data.data // 接口返回树结构
          let defaultProduct = null // 默认选中项
          const firstMark = productConfig[0].mark // 第一个产品标示

          // 扁平化后台请求树结构产品
          handleFlatTree(productTree)
          const { length } = flatTree
          // 合并本地配置和接口tree
          for (let i = 0; i < productConfig.length; i++) {
            for (let j = 0; j < length; j++) {
              if (productConfig[i].mark === flatTree[j].mark) {
                flatTree[j] = Object.assign(flatTree[j], productConfig[i])

                // 如果没有配置cycle
                if (!flatTree[j].cycle) {
                  if (flatTree[j].cycles[0]) {
                    flatTree[j].cycle = flatTree[j].cycles[0].key
                  } else {
                    flatTree[j].cycle = ''
                  }
                }

                // 如果没有配置sateAndSensor
                if (!flatTree[j].sateAndSensor) {
                  ;[flatTree[j].sateAndSensor] = flatTree[j].sateAndSensors
                }

                if (productConfig[i].Default) {
                  defaultProduct = flatTree[j]
                }
                break
              }
            }
          }

          // 如果没有定义default配置
          if (!defaultProduct) {
            for (let i = 0; i < length; i++) {
              if (firstMark === flatTree[i].mark) {
                defaultProduct = flatTree[i]
                break
              }
            }
          }

          dispatch({
            type: GET_PRODUCT_TREE,
            data: {
              productTree,
              flatTree
            }
          })
          dispatch(getDefaultProduct(defaultProduct))
        })
      )
      .catch((ex) => {
        console.warn(ex)
      })
  }
}
/* -------------------End请求自定义产品配置和接口产品tree-----------------------*/

/* -------------------Start请求图层配置列表和渲染方案-----------------------*/
// 获取图层配置
function getLayersConfig() {
  return axios.get('./data/layerConfig.json')
}

// 获取渲染方案
function getProductCfg() {
  return axios.get('./data/ProductCfg.xml')
}

// 获取图层配置和渲染方案
export function getConfigs() {
  return (dispatch) => {
    axios.all([getLayersConfig(), getProductCfg()]).then(
      axios.spread((layers, productXml) => {
        const productCfg = parseXML(productXml.data)
        const layersCfg = layers.data
        dispatch({ type: GET_LAYERS_AND_XML, data: { productCfg, layersCfg } })
      })
    )
  }
}
/* -------------------End请求图层配置列表和渲染方案-----------------------*/

// 设置默认展示的产品列表项
export function setDefaultDataList(data) {
  return { type: SET_DEFAULT_DATA_LIST, data }
}

// 设置所有的地区
export function setAllRegions(data) {
  return { type: SET_ALL_REGIONS, data }
}

// 获取柱状图统计数据
export function getRegionsStatistic(data) {
  const params = qs.stringify(data)
  return (dispatch) => {
    axios.post(`${interfaceDir}/dataStatistics/histogram`, params).then((res) => {
      if (res.data.status === 200) {
        dispatch({ type: GET_REGIONS_STATISTIC, data: res.data.data })
      }
    })
  }
}
