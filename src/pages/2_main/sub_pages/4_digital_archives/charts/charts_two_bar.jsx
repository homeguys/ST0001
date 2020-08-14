import React, { useState, useEffect } from 'react'
import echarts from 'echarts'
import { createHash } from '../../../../../utils/utils'

function ChartsBar() {
  const [hash] = useState(createHash(10))

  useEffect(() => {
    const chartDom = document.getElementsByClassName(`charts-bar-item-${hash}`)[0]
    const myChart = echarts.init(chartDom)
    const options = {
      color: ['#3398DB', '#f7be6f'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        orient: 'horizontal',
        top: 15,
        left: 10,
        data: ['审批占图', '审批补偿']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLabel: {
            textStyle: {
              color: '#b4b4b4'
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#b4b4b4'
            }
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          splitLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#b4b4b4'
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#b4b4b4'
            }
          }
        }
      ],
      series: [
        {
          name: '审批占图',
          type: 'bar',
          barWidth: '20',
          data: [10, 52, 200, 334, 390, 330, 220]
        },
        {
          name: '审批补偿',
          type: 'bar',
          barWidth: '20',
          data: [10, 52, 200, 334, 390, 330, 220]
        }
      ]
    }

    myChart.setOption(options)
  }, [])

  return <section className={`charts-bar-item-${hash}`} style={{ width: '100%', height: '100%' }} />
}

export default ChartsBar
