import React from 'react'
// import ChartBar from '../../lib/chart_bar/demo'
import echarts from 'echarts/lib/echarts'
import { Cascader } from 'antd'
import { deepObjectMerge } from '../../utils/utils'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import './style.scss'

class Statistic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      regionBarIds: []
    }
    // this.hash = createHash(8)
    this.myChart = null
    this.option = {
      backgroundColor: '#011020',
      tooltip: {
        trigger: 'item'
      },
      grid: {
        left: '7%',
        bottom: '0%',
        top: '8%',
        right: '5%',
        containLabel: true
      },
      xAxis: {
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel: {
          textStyle: {
            color: '#FFF',
            fontSize: '18'
          },
          rotate: 30
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#454A5C'
          }
        }
      },
      yAxis: {
        axisLine: {
          show: true,
          lineStyle: {
            color: '#454A5C'
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#FFF',
            fontSize: '18'
          }
        }
      },

      series: [
        {
          type: 'bar',
          barWidth: 15,
          // data: [120, 200, 150, 80, 70, 110, 130],
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#83bff6' },
                { offset: 0.5, color: '#188df0' },
                { offset: 1, color: '#188df0' }
              ])
            },
            emphasis: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#2378f7' },
                { offset: 0.7, color: '#2378f7' },
                { offset: 1, color: '#83bff6' }
              ])
            }
          }
        }
        // {
        //   type: 'bar',
        //   barWidth: 15,
        //   data: [120, 200, 150, 80, 70, 110, 130],
        //   itemStyle: {
        //     normal: {
        //       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //         { offset: 0, color: '#83bff6' },
        //         { offset: 0.5, color: '#188df0' },
        //         { offset: 1, color: '#188df0' }
        //       ])
        //     },
        //     emphasis: {
        //       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //         { offset: 0, color: '#2378f7' },
        //         { offset: 0.7, color: '#2378f7' },
        //         { offset: 1, color: '#83bff6' }
        //       ])
        //     }
        //   }
        // },
        // {
        //   type: 'bar',
        //   barWidth: 15,
        //   data: [120, 200, 150, 80, 70, 110, 130],
        //   itemStyle: {
        //     normal: {
        //       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //         { offset: 0, color: '#83bff6' },
        //         { offset: 0.5, color: '#188df0' },
        //         { offset: 1, color: '#188df0' }
        //       ])
        //     },
        //     emphasis: {
        //       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //         { offset: 0, color: '#2378f7' },
        //         { offset: 0.7, color: '#2378f7' },
        //         { offset: 1, color: '#83bff6' }
        //       ])
        //     }
        //   }
        // }
      ]
    }
  }

  componentDidMount() {
    this.renderCharts()
  }

  componentDidUpdate() {
    this.renderCharts()
  }

  // 地区选择
  onChange = (regionIds) => {
    const { getRegionsStatistic, search } = this.props
    const { defaultDataList } = search
    const parentRegionId = regionIds[regionIds.length - 1]
    const data = {
      issue: defaultDataList.issue,
      parentRegionId,
      cycle: defaultDataList.cycle,
      mark: defaultDataList.mark
    }
    getRegionsStatistic(data)
    this.setState({
      regionBarIds: regionIds
    })
  }

  /** echants响应屏幕改变 */
  screenChange() {
    window.addEventListener('resize', () => {
      this.myChart.resize()
    })
  }

  // 渲染柱状图
  renderCharts() {
    const { search, option } = this.props
    const { regionsBar } = search
    if (regionsBar.length > 0) {
      const xAxisData = []
      const seriesData1 = []
      const seriesData2 = []
      const seriesData3 = []
      regionsBar.forEach((item) => {
        if (item.MEAN !== 'nan') {
          xAxisData.push(item.areaName)
          seriesData1.push(item.MIN)
          seriesData2.push(item.MEAN)
          seriesData3.push(item.MAX)
        }
      })
      this.myChart = echarts.init(document.getElementById('region-statictis'))
      const newOption = deepObjectMerge(this.option, option)

      newOption.xAxis.data = xAxisData
      // newOption.series[0].data = seriesData1
      newOption.series[0].data = seriesData2
      // newOption.series[2].data = seriesData3

      this.myChart.clear()
      // 绘制图表
      this.myChart.setOption(newOption)
      this.screenChange()
    }
  }

  render() {
    let { regionBarIds } = this.state
    const { search } = this.props
    const { allRegionsBar, defaultProdcut, defaultDataList } = search
    const { regionIds } = defaultProdcut
    const { issue, name } = defaultDataList
    const year = issue.substr(0, 4) || '0000'
    const month = issue.substr(4, 2) || '00'
    const day = issue.substr(6, 2) || '00'
    const hour = issue.substr(8, 2) || '00'
    const minute = issue.substr(10, 2) || '00'
    const second = issue.substr(12, 2) || '00'

    if (regionBarIds.length === 0) {
      regionBarIds = regionIds.map((item) => item.value)
    }

    return (
      <div id="statistic-box">
        <div className="statistic-title">{`${year}-${month}-${day} ${hour}:${minute}:${second} ${name}统计`}</div>
        <div className="regions-check">
          <span>地区：</span>
          <Cascader
            allowClear={false}
            options={allRegionsBar}
            onChange={this.onChange}
            placeholder="请选择"
            value={regionBarIds}
            changeOnSelect
          />
        </div>
        <div id="region-statictis" />
      </div>
    )
  }
}

export default Statistic
