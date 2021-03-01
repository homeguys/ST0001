/* eslint-disable */
import React from 'react'
import echarts from 'echarts'
import { extractArrayData, deepCloneObject } from '../../utils/utils'

/* 初始化echarts */
const InitEcharts = params => WrappedComponent => {
  return class extends React.Component {
    constructor (props) {
      super(props)
    }
    // 刷新图表
    handleInitCharts = option => {
      let echartsDom = document.getElementById(this.props.params.id)
      let myChart = echarts.init(echartsDom)
      myChart.clear()
      const media = params.media
      if (media) {
        myChart.setOption({ baseOption: option, media: media })
      } else {
        myChart.setOption(option)
      }

      myChart.resize()
      window.onresize = function () {
        myChart.resize()
      }
    }

    componentDidMount () {
      // this.handleInitCharts(this.instanceComponent.props.option)
      let option = params.option
      option.title.text = this.props.params.names
      this.updateData()
    }

    componentDidUpdate () {
      this.updateData()
    }

    updateData () {
      let _this = this
      let data = this.props.params.data
      let updateData = extractArrayData(data, 'category')
      console.warn(updateData)
      // 设置option
      let option = params.option
      // 设置横坐标
      let updateNames = updateData[0].allData.map(function (v) {
        return v.name
      })
      if (this.props.params.type === 'pie') {
        // 饼图设置图例
        option.legend.data = updateNames
      } else if (this.props.params.type === 'radar') {
        // 雷达图设置indicator
        const radarData = updateData[0].allData
        option.radar.indicator = []
        for (let i = 0; i < radarData.length; i++) {
          const obj = {
            name: radarData[i].name,
            max: radarData[i].max
          }
          option.radar.indicator.push(obj)
        }
      } else if (this.props.params.type === 'xbar') {
        // xy轴转置柱状图
        option.yAxis.data = updateNames
      } else {
        option.xAxis.data = updateNames
      }

      // 设置纵坐标数据
      let optionSeriesItem = option.series
      option.series = []

      if (_this.props.params.type === 'radar') {
        for (let i = 0; i < updateData.length; i++) {
          let seriesItem = deepCloneObject(optionSeriesItem[0])
          seriesItem.data = []
          let optionData = []
          updateData[i].allData.forEach(item => {
            optionData.push(item.value)
          })
          seriesItem.data.push({
            name: '指数统计',
            value: optionData
          })
          option.series.push(seriesItem)
        }
      } else if (_this.props.params.type === 'doubleY' || _this.props.params.type === 'xbar') {
        for (let i = 0; i < updateData.length; i++) {
          let seriesItem = deepCloneObject(optionSeriesItem[i])
          if (optionSeriesItem[i]) {
            seriesItem.itemStyle = optionSeriesItem[i].itemStyle
          }
          seriesItem.name = updateData[i].category
          seriesItem.data = updateData[i].allData.map(function (v) {
            return v.value
          })
          option.series.push(seriesItem)
        }
      } else {
        for (let i = 0; i < updateData.length; i++) {
          let seriesItem = deepCloneObject(optionSeriesItem[0])
          if (optionSeriesItem[i]) {
            seriesItem.itemStyle = optionSeriesItem[i].itemStyle
          }
          seriesItem.name = updateData[i].category
          seriesItem.data = updateData[i].allData.map(function (v) {
            if (_this.props.params.type === 'pie') {
              const itemData = {
                name: v.name,
                value: v.value
              }
              return itemData
            } else {
              return v.value
            }
          })
          option.series.push(seriesItem)
        }
      }
      this.handleInitCharts(option)
    }
    render () {
      const props = {
        ...this.props,
        handleInitCharts: this.handleInitCharts,
        initCharts: this.initCharts
      }
      return (
        <WrappedComponent
          {...props}
          ref={instanceComponent => (this.instanceComponent = instanceComponent)}
        />
      )
    }
  }
}
export default InitEcharts
