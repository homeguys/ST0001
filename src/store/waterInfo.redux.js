/*
 * @Author: 郑杰14
 * @Date: 2020-08-19 14:22:51
 * @LastEditors: 郑杰14
 * @LastEditTime: 2020-08-21 10:45:54
 * @Description: 水域信息redux
 */
import axios from 'axios'
import fieldConfig from '../pages/2_main/sub_pages/7_water_info/page/detailInfo/component/fieldConfig'

const CHANGE_WATERINFO_PAGETYPE = 'CHANGE_WATERINFO_PAGETYPE' // 切换水域信息页面类型
const GET_WATER_STATISTIC_DATA = 'GET_WATER_STATISTIC_DATA' // 获取水域数据
const CHANGE_SELECT_LAYER = 'CHANGE_SELECT_LAYER' // 切换选中的图层
const GET_LAYERINFO_DATA = 'GET_LAYERINFO_DATA' // 获取图层详情数据
const CHANGE_CONFIG_VISIBLE = 'CHANGE_CONFIG_VISIBLE' // 配置弹框显影状态
const CHANGH_LAYER_FILELD = 'CHANGH_LAYER_FILELD' // 改变显示图层的字段

const initState = {
  pageType: 'statistic', // 默认统计页面 info:详情页面
  waterStatisticData: {
    waterType: [],
    region: [],
    riverLevel: [],
    lakeLevel: []
  }, // 水域统计数据
  selectLayer: 'river', // 选中的详情图层
  layerInfoData: [], // 图层详情数据
  configVisible: false, // 配置弹框显影
  layerFields: fieldConfig.river // 默认河道的字段
}

export function waterInfo(state = initState, action) {
  switch (action.type) {
    case CHANGE_WATERINFO_PAGETYPE:
      return {
        ...state,
        pageType: action.data
      }
    case GET_WATER_STATISTIC_DATA:
      return {
        ...state,
        waterStatisticData: action.data
      }
    case CHANGE_SELECT_LAYER:
      return {
        ...state,
        selectLayer: action.data
      }
    case GET_LAYERINFO_DATA:
      return {
        ...state,
        layerInfoData: action.data
      }
    case CHANGE_CONFIG_VISIBLE:
      return {
        ...state,
        configVisible: action.data
      }
    default:
      return state
  }
}

/**
 * 切换页面类型
 * @param {*} data
 */
export function changePageType(data) {
  return { type: CHANGE_WATERINFO_PAGETYPE, data }
}

/**
 * 获取水域统计信息
 * @param {*} params
 */
export function getWaterStatisticData(params) {
  return (dispatch) => {
    axios.get('./mock/waterInfo/statisticData.json')
      .then((res) => {
        if (res.data.code === '0') {
          dispatch({ type: GET_WATER_STATISTIC_DATA, data: res.data.data })
        }
      })
  }
}

/**
 * 获取水域详细信息
 * @param {*} params
 */
export function getWaterLayerInfoData(params) {
  return (dispatch) => {
    axios.get('./mock/waterInfo/layerInfo.json')
      .then((res) => {
        if (res.data.code === '0') {
          const { data } = res.data
          const result = data[params.layerType]
          console.warn(result)
          dispatch({ type: GET_LAYERINFO_DATA, data: result })
        }
      })
  }
}

/**
 * 切换显示配置的显影状态
 * @param {*} data
 */
export function changeConfigVisible(data) {
  return { type: CHANGE_CONFIG_VISIBLE, data }
}
